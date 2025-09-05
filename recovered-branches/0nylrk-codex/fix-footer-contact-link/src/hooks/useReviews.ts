
import { useState } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Review, ReviewReport } from &quot;@/types/reviews&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

export function useReviews(projectId?: string) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userReview, setUserReview] = useState<Review | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Fetch reviews for a project
  const fetchProjectReviews = async (projectId: string) => {
    if (!projectId) return;
    
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase
        .from(&quot;reviews&quot;)
        .select(`
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `)
        .eq(&quot;project_id&quot;, projectId)
        .eq(&quot;is_visible&quot;, true)
        .eq(&quot;status&quot;, &quot;approved&quot;);
        
      if (error) throw error;
      
      setReviews(data || []);
      
      // Check if current user has already submitted a review
      if (user) {
        const { data: userReviewData, error: userReviewError } = await supabase
          .from(&quot;reviews&quot;)
          .select(&quot;*&quot;)
          .eq(&quot;project_id&quot;, projectId)
          .eq(&quot;reviewer_id&quot;, user.id)
          .single();
          
        if (!userReviewError && userReviewData) {
          setUserReview(userReviewData);
        }
      }
    } catch (err: any) {
      console.error(&quot;Error fetching reviews:&quot;, err);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to load reviews&quot;,
        variant: &quot;destructive&quot;});
    } finally {
      setIsLoading(false);
    }
  };
  
  // Fetch reviews for a user (to display on profile)
  const fetchUserReviews = async (userId: string) => {
    if (!userId) return;
    
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase
        .from(&quot;reviews&quot;)
        .select(`
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `)
        .eq(&quot;reviewee_id&quot;, userId)
        .eq(&quot;is_visible&quot;, true)
        .eq(&quot;status&quot;, &quot;approved&quot;)
        .order(&quot;created_at&quot;, { ascending: false });
        
      if (error) throw error;
      
      setReviews(data || []);
    } catch (err: any) {
      console.error(&quot;Error fetching user reviews:&quot;, err);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to load reviews&quot;,
        variant: &quot;destructive&quot;});
    } finally {
      setIsLoading(false);
    }
  };
  
  // Submit a review
  const submitReview = async (review: {
    project_id: string;
    reviewee_id: string;
    rating: number;
    review_text: string;
    communication_rating?: number;
    quality_rating?: number;
    timeliness_rating?: number;
    would_work_again?: boolean;
    is_anonymous: boolean;
  }) => {
    if (!user) {
      toast({
        title: &quot;Error&quot;,
        description: &quot;You must be logged in to submit a review&quot;,
        variant: &quot;destructive&quot;});
      return false;
    }
    
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase
        .from(&quot;reviews&quot;)
        .insert({
          ...review,
          reviewer_id: user.id})
        .select()
        .single();
        
      if (error) throw error;
      
      toast({
        title: &quot;Success&quot;,
        description: &quot;Your review has been submitted and is pending approval&quot;});
      
      setUserReview(data);
      return true;
    } catch (err: any) {
      console.error(&quot;Error submitting review:&quot;, err);
      
      // Check for unique constraint violation
      if (err.code === &quot;23505&quot;) {
        toast({
          title: &quot;Error&quot;,
          description: &quot;You have already submitted a review for this project&quot;,
          variant: &quot;destructive&quot;});
      } else {
        toast({
          title: &quot;Error&quot;,
          description: &quot;Failed to submit review&quot;,
          variant: &quot;destructive&quot;});
      }
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Update a review
  const updateReview = async (reviewId: string, updates: Partial<Review>) => {
    if (!user) return false;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from(&quot;reviews&quot;)
        .update(updates)
        .eq(&quot;id&quot;, reviewId)
        .eq(&quot;reviewer_id&quot;, user.id)
        .eq(&quot;status&quot;, &quot;pending&quot;);
        
      if (error) throw error;
      
      toast({
        title: &quot;Success&quot;,
        description: &quot;Your review has been updated&quot;});
      
      if (userReview) {
        setUserReview({ ...userReview, ...updates });
      }
      
      return true;
    } catch (err: any) {
      console.error(&quot;Error updating review:&quot;, err);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to update review&quot;,
        variant: &quot;destructive&quot;});
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Report a review
  const reportReview = async (reviewId: string, reason: string) => {
    if (!user) return false;
    
    try {
      const { error } = await supabase
        .from(&quot;review_reports&quot;)
        .insert({
          review_id: reviewId,
          reporter_id: user.id,
          reason});
        
      if (error) {
        // Check for unique constraint violation
        if (error.code === &quot;23505&quot;) {
          toast({
            title: &quot;Error&quot;,
            description: &quot;You have already reported this review&quot;,
            variant: &quot;destructive&quot;});
        } else {
          throw error;
        }
      } else {
        toast({
          title: &quot;Report Submitted&quot;,
          description: &quot;Thank you. Our team will review your report&quot;});
        return true;
      }
    } catch (err: any) {
      console.error(&quot;Error reporting review:&quot;, err);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to report review&quot;,
        variant: &quot;destructive&quot;});
    }
    
    return false;
  };
  
  // Initialize by fetching reviews if projectId is provided
  if (projectId && reviews.length === 0 && !isLoading) {
    fetchProjectReviews(projectId);
  }
  
  return {
    reviews,
    userReview,
    isLoading,
    isSubmitting,
    fetchProjectReviews,
    fetchUserReviews,
    submitReview,
    updateReview,
    reportReview};
}
