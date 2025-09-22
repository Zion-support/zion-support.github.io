
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Review, ReviewReport } from "@/types/reviews";
import { toast } from "@/hooks/use-toast";

export function useReviews(projectId?: string) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userReview, setUserReview] = useState<Review | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Fetch reviews for a project
  const fetchProjectReviews = async (projectId: string) => {
<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
    if (!projectId) return;
    
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select(`
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `)
        .eq("project_id", projectId)
        .eq("is_visible", true)
        .eq("status", "approved");
        
      if (error) throw error;
      
      setReviews(data || []);
      
      // Check if current user has already submitted a review
      if (user) {
        const { data: userReviewData, error: userReviewError } = await supabase
          .from("reviews")
          .select("*")
          .eq("project_id", projectId)
          .eq("reviewer_id", user.id)
          .single();
          
        if (!userReviewError && userReviewData) {
          setUserReview(userReviewData);
        }
      }
    } catch (err: any) {
      console.error("Error fetching reviews:", err);
      toast({
        title: "Error",
        description: "Failed to load reviews",
<<<<<<< HEAD
        variant: "destructive"});
=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
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
        .from("reviews")
        .select(`
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `)
        .eq("reviewee_id", userId)
        .eq("is_visible", true)
        .eq("status", "approved")
        .order("created_at", { ascending: false });
        
      if (error) throw error;
      
      setReviews(data || []);
    } catch (err: any) {
      console.error("Error fetching user reviews:", err);
      toast({
        title: "Error",
        description: "Failed to load reviews",
<<<<<<< HEAD
        variant: "destructive"});

=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
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
        title: "Error",
        description: "You must be logged in to submit a review",
<<<<<<< HEAD
        variant: "destructive"});
=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
      return false;
    }
    
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase
        .from("reviews")
        .insert({
          ...review,
<<<<<<< HEAD
          reviewer_id: user.id})
=======
          reviewer_id: user.id,
        })
>>>>>>> origin/auto/autonomy-17186719616
        .select()
        .single();
        
      if (error) throw error;
      
      toast({
        title: "Success",
<<<<<<< HEAD
        description: "Your review has been submitted and is pending approval"});
=======
        description: "Your review has been submitted and is pending approval",
      });
>>>>>>> origin/auto/autonomy-17186719616
      
      setUserReview(data);
      return true;
    } catch (err: any) {
      console.error("Error submitting review:", err);
      
      // Check for unique constraint violation
      if (err.code === "23505") {
        toast({
          title: "Error",
          description: "You have already submitted a review for this project",
<<<<<<< HEAD
          variant: "destructive"});
=======
          variant: "destructive",
        });
>>>>>>> origin/auto/autonomy-17186719616
      } else {
        toast({
          title: "Error",
          description: "Failed to submit review",
<<<<<<< HEAD
          variant: "destructive"});
=======
          variant: "destructive",
        });
>>>>>>> origin/auto/autonomy-17186719616
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
        .from("reviews")
        .update(updates)
        .eq("id", reviewId)
        .eq("reviewer_id", user.id)
        .eq("status", "pending");
        
      if (error) throw error;
      
      toast({
        title: "Success",
<<<<<<< HEAD
        description: "Your review has been updated"});
=======
        description: "Your review has been updated",
      });
>>>>>>> origin/auto/autonomy-17186719616
      
      if (userReview) {
        setUserReview({ ...userReview, ...updates });
      }
      
      return true;
    } catch (err: any) {
      console.error("Error updating review:", err);
      toast({
        title: "Error",
        description: "Failed to update review",
<<<<<<< HEAD
        variant: "destructive"});
=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
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
        .from("review_reports")
        .insert({
          review_id: reviewId,
          reporter_id: user.id,
<<<<<<< HEAD
          reason});
=======
          reason,
        });
>>>>>>> origin/auto/autonomy-17186719616
        
      if (error) {
        // Check for unique constraint violation
        if (error.code === "23505") {
          toast({
            title: "Error",
            description: "You have already reported this review",
<<<<<<< HEAD
            variant: "destructive"});

=======
            variant: "destructive",
          });
>>>>>>> origin/auto/autonomy-17186719616
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Report Submitted",
<<<<<<< HEAD
          description: "Thank you. Our team will review your report"});
=======
          description: "Thank you. Our team will review your report",
        });
>>>>>>> origin/auto/autonomy-17186719616
        return true;
      }
    } catch (err: any) {
      console.error("Error reporting review:", err);
      toast({
        title: "Error",
        description: "Failed to report review",
<<<<<<< HEAD
        variant: "destructive"});
=======
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
    reportReview};
=======
    reportReview,
  };
>>>>>>> origin/auto/autonomy-17186719616
}
