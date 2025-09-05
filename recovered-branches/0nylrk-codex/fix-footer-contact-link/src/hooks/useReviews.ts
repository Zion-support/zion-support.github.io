
<<<<<<< HEAD
import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { Review, ReviewReport } from "@/types/reviews",
import { toast } from "@/hooks/use-toast",
=======
import { useState } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Review, ReviewReport } from &quot;@/types/reviews&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function useReviews(projectId?: string) {
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
  const [reviews, setReviews] = useState<Review[]>([]),
  const [userReview, setUserReview] = useState<Review | null>(null),
  const [isSubmitting, setIsSubmitting] = useState(false),
  
  // Fetch reviews for a project
  const fetchProjectReviews = async (projectId: string) => {
    if (!projectId) return,
    
    setIsLoading(true),
    
    try {
      const { data, error } = await supabase
        .from(&quot;reviews&quot;)
        .select(`
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `)
<<<<<<< HEAD
        .eq("project_id", projectId)
        .eq("is_visible", true)
        .eq("status", "approved"),
=======
        .eq(&quot;project_id&quot;, projectId)
        .eq(&quot;is_visible&quot;, true)
        .eq(&quot;status&quot;, &quot;approved&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
      if (error) throw error,
      
      setReviews(data || []),
      
      // Check if current user has already submitted a review
      if (user) {
        const { data: userReviewData, error: userReviewError } = await supabase
<<<<<<< HEAD
          .from("reviews")
          .select("*")
          .eq("project_id", projectId)
          .eq("reviewer_id", user.id)
          .single(),
=======
          .from(&quot;reviews&quot;)
          .select(&quot;*&quot;)
          .eq(&quot;project_id&quot;, projectId)
          .eq(&quot;reviewer_id&quot;, user.id)
          .single();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          
        if (!userReviewError && userReviewData) {
          setUserReview(userReviewData)
        }
      }
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching reviews:", err),
      toast({
        title: "Error",
        description: "Failed to load reviews",
        variant: "destructive"})
=======
      console.error(&quot;Error fetching reviews:&quot;, err);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to load reviews&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },
  
  // Fetch reviews for a user (to display on profile)
  const fetchUserReviews = async (userId: string) => {
    if (!userId) return,
    
    setIsLoading(true),
    
    try {
      const { data, error } = await supabase
        .from(&quot;reviews&quot;)
        .select(`
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `)
<<<<<<< HEAD
        .eq("reviewee_id", userId)
        .eq("is_visible", true)
        .eq("status", "approved")
        .order("created_at", { ascending: false }),
=======
        .eq(&quot;reviewee_id&quot;, userId)
        .eq(&quot;is_visible&quot;, true)
        .eq(&quot;status&quot;, &quot;approved&quot;)
        .order(&quot;created_at&quot;, { ascending: false });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
      if (error) throw error,
      
      setReviews(data || [])
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching user reviews:", err),
      toast({
        title: "Error",
        description: "Failed to load reviews",
        variant: "destructive"})
=======
      console.error(&quot;Error fetching user reviews:&quot;, err);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to load reviews&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },
  
  // Submit a review
  const submitReview = async (review: {
    project_id: string,
    reviewee_id: string,
    rating: number,
    review_text: string,
    communication_rating?: number,
    quality_rating?: number,
    timeliness_rating?: number,
    would_work_again?: boolean,
    is_anonymous: boolean
  }) => {
    if (!user) {
      toast({
<<<<<<< HEAD
        title: "Error",
        description: "You must be logged in to submit a review",
        variant: "destructive"}),
      return false
=======
        title: &quot;Error&quot;,
        description: &quot;You must be logged in to submit a review&quot;,
        variant: &quot;destructive&quot;});
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    setIsSubmitting(true),
    
    try {
      const { data, error } = await supabase
        .from(&quot;reviews&quot;)
        .insert({
          ...review,
          reviewer_id: user.id})
        .select()
        .single(),
        
      if (error) throw error,
      
      toast({
<<<<<<< HEAD
        title: "Success",
        description: "Your review has been submitted and is pending approval"}),
=======
        title: &quot;Success&quot;,
        description: &quot;Your review has been submitted and is pending approval&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      setUserReview(data),
      return true
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error submitting review:", err),
=======
      console.error(&quot;Error submitting review:&quot;, err);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Check for unique constraint violation
      if (err.code === &quot;23505&quot;) {
        toast({
<<<<<<< HEAD
          title: "Error",
          description: "You have already submitted a review for this project",
          variant: "destructive"})
      } else {
        toast({
          title: "Error",
          description: "Failed to submit review",
          variant: "destructive"})
=======
          title: &quot;Error&quot;,
          description: &quot;You have already submitted a review for this project&quot;,
          variant: &quot;destructive&quot;});
      } else {
        toast({
          title: &quot;Error&quot;,
          description: &quot;Failed to submit review&quot;,
          variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      return false
    } finally {
      setIsSubmitting(false)
    }
  },
  
  // Update a review
  const updateReview = async (reviewId: string, updates: Partial<Review>) => {
    if (!user) return false,
    
    setIsSubmitting(true),
    
    try {
      const { error } = await supabase
        .from(&quot;reviews&quot;)
        .update(updates)
<<<<<<< HEAD
        .eq("id", reviewId)
        .eq("reviewer_id", user.id)
        .eq("status", "pending"),
=======
        .eq(&quot;id&quot;, reviewId)
        .eq(&quot;reviewer_id&quot;, user.id)
        .eq(&quot;status&quot;, &quot;pending&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
      if (error) throw error,
      
      toast({
<<<<<<< HEAD
        title: "Success",
        description: "Your review has been updated"}),
=======
        title: &quot;Success&quot;,
        description: &quot;Your review has been updated&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      if (userReview) {
        setUserReview({ ...userReview, ...updates })
      }
      
      return true
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error updating review:", err),
      toast({
        title: "Error",
        description: "Failed to update review",
        variant: "destructive"}),
      return false
=======
      console.error(&quot;Error updating review:&quot;, err);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to update review&quot;,
        variant: &quot;destructive&quot;});
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },
  
  // Report a review
  const reportReview = async (reviewId: string, reason: string) => {
    if (!user) return false,
    
    try {
      const { error } = await supabase
        .from(&quot;review_reports&quot;)
        .insert({
          review_id: reviewId,
          reporter_id: user.id,
          reason}),
        
      if (error) {
        // Check for unique constraint violation
        if (error.code === &quot;23505&quot;) {
          toast({
<<<<<<< HEAD
            title: "Error",
            description: "You have already reported this review",
            variant: "destructive"})
=======
            title: &quot;Error&quot;,
            description: &quot;You have already reported this review&quot;,
            variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        } else {
          throw error
        }
      } else {
        toast({
<<<<<<< HEAD
          title: "Report Submitted",
          description: "Thank you. Our team will review your report"}),
        return true
      }
    } catch (err: any) {
      console.error("Error reporting review:", err),
      toast({
        title: "Error",
        description: "Failed to report review",
        variant: "destructive"})
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    return false
  },
  
  // Initialize by fetching reviews if projectId is provided
  if (projectId && reviews.length === 0 && !isLoading) {
    fetchProjectReviews(projectId)
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
    reportReview}
}
