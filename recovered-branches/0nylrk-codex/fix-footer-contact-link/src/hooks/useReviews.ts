  // Fetch reviews for a project

  const fetchProjectReviews = async (projectId: string) => {

    
    setIsLoading(true),
    

      const { data, error } = await supabase;

        .from ("reviews");
        .select (`;
          *;

      // Check if current user has already submitted a review
      if (user) {
        const { data: userReviewData, error: userReviewError } = await supabase
          .from("reviews")
          .select("*")
          .eq("project_id", projectId)
      // Check condition
if ( {) {
  $2
}
        const { data: userReviewData, error: userReviewError } = await supabase;
          .from ("reviews");
          .select ("*");
          .eq ("project_id", project_id);
          .eq ("reviewer_id", user.id);
          .single ();
;
        // Check condition
if ( {) {
  $2
}
          setUserReview (userReviewData);
        }
      }
    } catch (err: any) {
      console.error ("Error fetching reviews:", err);
      toast ({
        title: "Error",
  description: "Failed to load reviews",
        variant: "destructive"});
    } finally {
      setIsLoading (false);
    }
  },
  
  // Fetch reviews for a user (to display on profile)

    if (!userId) return,
    
    setIsLoading(true),
        project_id: string;
    reviewee_id: string;
    rating: number;
    review_text: string;
    communication_rating?: number;
    quality_rating?: number;
    timeliness_rating?: number;
      } else {
        toast ({
          title: "Error",
  description: "Failed to submit review",
          variant: "destructive"});

        title: "Error",
        description: "You must be logged in to submit a review",
    try {
}
        .from("reviews")"
        .insert({
          ...review,
          reviewer_id: user.id})
        .select()        
      if (error) throw error,
      
      toast({"
        title: "Success","
        description: "Your review has been submitted and is pending approval"}),
      
      setUserReview(data),
      return true
    } catch (err: any) {
      console.error("Error submitting review:", err),
      
      // Check for unique constraint violation
      if (err.code === "23505") {
        toast({
          title: "Error",
          description: "You have already submitted a review for this project",
          variant: "destructive"})
      } else {
        toast({
          title: "Error",
          description: "Failed to submit review",
          variant: "destructive"})import { useState } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { Review, ReviewReport } from "@/types/reviews",;
import { toast } from "@/hooks/use-toast",;
export function useReviews(projectId?: string) {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [reviews, setReviews] = useState<Review[]>([]),;
  const [userReview, setUserReview] = useState<Review | null>(null),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  // Fetch reviews for a project;
  const fetchProjectReviews = async (projectId: string) => {;
    if (!projectId) return,;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase;
        .from("reviews");
        .select(`;
          *,;
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url);
        `);
        .eq("project_id", projectId);
        .eq("is_visible", true);
        .eq("status", "approved"),;
      if (error) throw error,;
      setReviews(data || []),;
      // Check if current user has already submitted a review;
      if (user) {;
        const { data: userReviewData, error: userReviewError } = await supabase;
          .from("reviews");
          .select("*");
          .eq("project_id", projectId);
          .eq("reviewer_id", user.id);
          .single(),;
        if (!userReviewError && userReviewData) {;
          setUserReview(userReviewData);
        }
          reviewer_id: user.id});
        .select ();
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
        title: "Success",
        description: "Your review has been submitted and is pending approval"});
;
      setUserReview (data);
      return true;
    } catch (err: any) {
      console.error ("Error submitting review:", err);
;
      // Check for unique constraint violation;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Error",
  description: "You have already submitted a review for this project",
          variant: "destructive"});
      } else {
        toast({
          }
          "title": "Error","
          "description": "You have already submitted a review for this project","
"variant": "destructive"});"
      } else {
        toast({

      }
      return false;
    } finally {}
      setIsSubmitting (false);
    }  },;
  // Fetch reviews for a user (to display on profile);
  const fetchUserReviews = async (userId: string) => {;
    if (!userId) return,;

    setIsLoading(true),;
    try {;
      }
        .from("reviews");"
        .select(`;`          *,;
          "reviewer_profile":profiles!reviewer_id(display_name, avatar_url);
        `);`
        .eq("reviewee_id", userId);"
        .eq("is_visible", true);"
        .eq("status", "approved");"
        .order("created_at", { "ascending": false }),;"
      if (error) throw error,;

      setReviews(data || []);
    } catch (err: any) {;"
      console.error("Error fetching user reviews:", err),;
      toast({;
        title: "Error",,
  description: "Failed to load reviews",;
        variant: "destructive"});
    } finally {;
      setIsLoading(false);
    }
  },;
  // Submit a review;
  const submitReview = async (review: {;
    project_id: string,;
    reviewee_id: string,;
    rating: number,;
    review_text: string,;
    communication_rating?: number,;
    quality_rating?: number,;
    timeliness_rating?: number,;
    would_work_again?: boolean,;
    is_anonymous: boolean;
  }) => {;
    if (!user) {;
      toast({;
        title: "Error",,
  description: "You must be logged in to submit a review",;
        variant: "destructive"}),;
      return false;
    }
;
    setIsSubmitting(true),;
    try {;
      }
        .from("reviews");"
        .insert({;
          ...review,;
          reviewer_id: user.id});
        .select();
        .single(),;
      if (error) throw error,;
      toast({;
        title: "Success",,
  description: "Your review has been submitted and is pending approval"}),;
      setUserReview(data),;
      return true;
    } catch (err: any) {;"
      console.error("Error submitting review:", err),;
      // Check for unique constraint violation;"
      if (err.code === "23505") {;
        toast({;
          title: "Error",,
  description: "You have already submitted a review for this project",;
          variant: "destructive"});
      } else {;
        toast({;
          title: "Error",,
  description: "Failed to submit review",;
          variant: "destructive"});

      }
      return false;

    } finally {
      setIsSubmitting (false);
    }
  },

    
  // Update a review
  const updateReview = async (reviewId: string, updates: Partial<Review>) => {
    if (!user) return false,
    
    setIsSubmitting(true),
          if (userReview) {
        setUserReview({ ...userReview, ...updates })
      }
      return true
    } catch (err: any) {
  };
  // Update a review;
  const update_review = async (review_id: string, updates: Partial < Review>) => {}
    // Check condition;
if (return false) {}
  $2;
}
    setIsSubmitting (true),
    try {}
      const { error } = await supabase;"
        .from ("reviews");
        .update (updates);"
        .eq ("id", review_id);"
        .eq ("reviewer_id", user.id);"
        .eq ("status", "pending");
;
      // Check condition;
if (throw error) {}
  $2;
}
      toast ({"
        title: "Success","
        description: "Your review has been updated"});
;
      // Check condition;
if ( {) {}
  $2;
}
        setUserReview ({ ...user_review, ...updates });
      }
      return true;
    } catch (err: any) {"
      console.error ("Error updating review:", err);
      toast ({
        title: "Error",
  description: "Failed to update review"
        variant: "destructive"});
      return false;
    } finally {}
      setIsSubmitting (false);
    }
  }  }
  // Report a review
  const reportReview = async (reviewId: string, reason: string) => {
    if (!user) return false
    try {
      const { error } = await supabase
        .from("review_reports")
        .insert({

          reporter_id: user && user.id,

          reason});          review_id: reviewId,
          reporter_id: user.id,
          reason}),
        

        // Check for unique constraint violation
        if (error && error.code === "23505") {
          toast({
            variant: "destructive"})
;
  // Report a review;
  const report_review = async (review_id: string, reason: string) => {}
    // Check condition;
if (return false, ) {}
  $2;
}
    try {}
      const { error } = await supabase;"
        .from ("review_reports");
        .insert ({}
          review_id: review_id;
          reporter_id: user.id,

