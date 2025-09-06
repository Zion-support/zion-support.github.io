
=======
import {useState} from "react";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {Review, ReviewReport} from "@/types/reviews";
import {toast} from "@/hooks/use-toast";
export function useReviews(projectId?: string) {;
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userReview, setUserReview] = useState<Review | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { Review, ReviewReport } from "@/types/reviews";
import { toast } from "@/hooks/use-toast";
export function useReviews(projectId?: string) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]),
  const [userReview, setUserReview] = useState<Review | null>(null),
  const [isSubmitting, setIsSubmitting] = useState(false);
import { Review, ReviewReport } from "@/types/reviews",
import { toast } from "@/hooks/use-toast",
export function useReviews(projectId?: string) {
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
  const [reviews, setReviews] = useState<Review[]>([]),
  const [userReview, setUserReview] = useState<Review | null>(null),
  const [isSubmitting, setIsSubmitting] = useState(false),
  

import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  // Fetch reviews for a project

  const fetchProjectReviews = async (projectId: string) => {

    try {
      const { data, error } = await supabase
        .from("reviews")
        .select(`
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `)
        .eq("project_id", projectId)
        .eq("is_visible", true)
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
      setReviews(data |[]);
        .eq("status", "approved"),
        
      if (error) throw error,
      
      setReviews(data || []),
      

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

        if (!userReviewError && userReviewData) {
          setUserReview(userReviewData)
        }
      }
    } catch (err: any) {
      console && console.error("Error fetching reviews:", err);
      toast({

        variant: "destructive"})
    } finally {
      setIsLoading(false)
    }

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
    } finally {
      setIsLoading(false)
    }

;
  // Fetch reviews for a user (to display on profile);
  const fetchUserReviews = async (user_id: string) => {
    // Check condition
if (return) {
  $2
}
    setIsLoading (true),

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
      setReviews(data |[])
        .order("created_at", { ascending: false }),
        
      if (error) throw error,
      
      setReviews(data || [])

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

    } catch (err: any) {
      console && console.error("Error fetching user reviews:", err);
      toast({

=======
    } catch (err: any) {
      console && console.error("Error fetching user reviews:", err);
      toast({
        title: "Error";
        description: "Failed to load reviews"
        title: "Error",
        description: "Failed to load reviews",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        variant: "destructive"})
    } finally {
      setIsLoading (false);
    }

    project_id: string;
    reviewee_id: string;
    rating: number;
    review_text: string;
    communication_rating?: number;
    quality_rating?: number;
    timeliness_rating?: number;

    would_work_again?: boolean,
    is_anonymous: boolean;

  }) => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Error";
        description: "You must be logged in to submit a review"
        variant: "destructive"});
      return false;
    }

    setIsSubmitting (true);
;

    try {
      const { data, error } = await supabase;
        .from ("reviews");
        .insert ({
          ...review;

      console && console.error("Error submitting review:", err);
      

      // Check for unique constraint violation
      if (err && err.code === "23505") {
        toast({
          title: "Error";
          description: "You have already submitted a review for this project"
          variant: "destructive"})
      } else {
        toast ({
          title: "Error";

          description: "Failed to submit review",
          variant: "destructive"});

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        title: "Error",
        description: "You must be logged in to submit a review",
        variant: "destructive"}),
      return false
    }
    
    setIsSubmitting(true),
    

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { useState } from "react",;
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
=======
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      }
      return false;
    } finally {
      setIsSubmitting (false);
    }
  }
  // Update a review
  const updateReview = async (reviewId: string, updates: Partial<Review>) => {
    if (!user) return false;
    setIsSubmitting(true)
  };
  },;
  // Fetch reviews for a user (to display on profile);
  const fetchUserReviews = async (userId: string) => {;
    if (!userId) return,;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      }
      return false;
    } finally {
      setIsSubmitting (false);
    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  
  // Update a review
  const updateReview = async (reviewId: string, updates: Partial<Review>) => {
    if (!user) return false,
    
    setIsSubmitting(true),
    
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    try {
      const { error } = await supabase
        .from("reviews")
        .update(updates)
        .eq("id", reviewId)

        .eq("reviewer_id", user.id)

        .eq("status", "pending"),
        
      if (error) throw error,
      
      toast({
        title: "Success",
        description: "Your review has been updated"}),
      


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return false
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    } finally {
      setIsSubmitting (false);
    }

  // Report a review
  const reportReview = async (reviewId: string, reason: string) => {
    if (!user) return false
    try {
      const { error } = await supabase
        .from("review_reports")
        .insert({

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      if (error) {
        // Check for unique constraint violation
        if (error && error.code === "23505") {
          toast({

            variant: "destructive"})
        } else {
          throw error;
        }
      } else {
        toast({

        return true
      }
    } catch (err: any) {
      console.error("Error reporting review:", err),
      toast({
        title: "Error";
        description: "Failed to report review"
        variant: "destructive"})
    }
    return false
  }
  // Initialize by fetching reviews if projectId is provided
  if (projectId && reviews.length === 0 && !isLoading) {
    fetchProjectReviews(projectId)
  }
  return {
    reviews;
    userReview;
    isLoading;
    isSubmitting;
    fetchProjectReviews;
    fetchUserReviews;
        title: "Error",
        description: "Failed to report review",
        variant: "destructive"})
  },;
  // Update a review;
  const updateReview = async (reviewId: string, updates: Partial<Review>) => {;
    if (!user) return false,;
    setIsSubmitting(true),;
    try {;
      const { error } = await supabase;
        .from("reviews");
        .update(updates);
        .eq("id", reviewId);
        .eq("reviewer_id", user.id);
        .eq("status", "pending"),;
      if (error) throw error,;
      toast({;
        title: "Success",;
        description: "Your review has been updated"}),;
      if (userReview) {;
        setUserReview({ ...userReview, ...updates });
      }
;
      return true;
    } catch (err: any) {;
      console.error("Error updating review:", err),;
      toast({;
        title: "Error",;
        description: "Failed to update review",;
        variant: "destructive"}),;
      return false;
    } finally {;
      setIsSubmitting(false);
    }
  },;
  // Report a review;
  const reportReview = async (reviewId: string, reason: string) => {;
    if (!user) return false,;
    try {;
      const { error } = await supabase;
        .from("review_reports");
        .insert({;
          review_id: reviewId,;
          reporter_id: user.id,;
          reason}),;
      if (error) {;
        // Check for unique constraint violation;
        if (error.code === "23505") {;
          toast({;
            title: "Error",;
            description: "You have already reported this review",;
            variant: "destructive"});
        } else {;
          throw error;
        }
      } else {;
        toast({;
          title: "Report Submitted",;
          description: "Thank you. Our team will review your report"}),;
        return true;
      }
    } catch (err: any) {;
      console.error("Error reporting review:", err),;
      toast({;
        title: "Error",;
        description: "Failed to report review",;
        variant: "destructive"});
    }
;
    return false;
  },;
  // Initialize by fetching reviews if projectId is provided;
  if (projectId && reviews.length === 0 && !isLoading) {;
    fetchProjectReviews(projectId);
  }
;
  return {;
    reviews,;
    userReview,;
    isLoading,;
    isSubmitting,;
    fetchProjectReviews,;
    fetchUserReviews,;
    submitReview;
    updateReview;

    reportReview}
=======
    submit_review;
    update_review;
    report_review}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}