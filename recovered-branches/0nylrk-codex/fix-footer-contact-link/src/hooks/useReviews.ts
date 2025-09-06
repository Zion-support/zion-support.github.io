
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
import { Review, ReviewReport } from "@/types/reviews";
import { toast } from "@/hooks/use-toast";
export function useReviews(projectId?: string) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]),
  const [userReview, setUserReview] = useState<Review | null>(null),
  const [isSubmitting, setIsSubmitting] = useState(false);
=======
import { Review, ReviewReport } from "@/types/reviews",
import { toast } from "@/hooks/use-toast",
export function useReviews(projectId?: string) {
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
  const [reviews, setReviews] = useState<Review[]>([]),
  const [userReview, setUserReview] = useState<Review | null>(null),
  const [isSubmitting, setIsSubmitting] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Fetch reviews for a project

  const fetchProjectReviews = async (projectId: string) => {
<<<<<<< HEAD
    if (!projectId) return;
    setIsLoading(true)
=======
=======
import { useState } from './react';
import { supabase } from '@/integrations / supabase / client';
import { use_auth } from '@/hooks / use_auth';
import { Review, ReviewReport } from '@/types / reviews';
import { toast } from '@/hooks / use - toast';
export /**
 * use_reviews - Function description
 */
function use_reviews() {
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [reviews, set_reviews] = useState < Review[]>([]);
  const [user_review, setUserReview] = useState < Review | null>(null);
  const [is_submitting, setIsSubmitting] = useState (false);
;
  // Fetch reviews for a project;
  const fetchProjectReviews = async (project_id: string) => {
    // Check condition
if (return) {
  $2
}
    setIsLoading (true),

=======


  // Fetch reviews for a project

  const fetchProjectReviews = async (projectId: string) => {

>>>>>>> main
    if (!projectId) return,
    
    setIsLoading(true),
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select(`
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `)
        .eq("project_id", projectId)
        .eq("is_visible", true)
<<<<<<< HEAD
        .eq("status", "approved");
      if (error) throw error;
      setReviews(data |[]);
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    try {
      const { data, error } = await supabase;
        .from ("reviews");
        .select (`;
          *;


>>>>>>> main
        .eq("status", "approved"),
        
      if (error) throw error,
      
      setReviews(data || []),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
      // Check if current user has already submitted a review
      if (user) {
        const { data: userReviewData, error: userReviewError } = await supabase
          .from("reviews")
          .select("*")
          .eq("project_id", projectId)
<<<<<<< HEAD
          .eq("reviewer_id", user.id)
<<<<<<< HEAD
          .single();
=======
          .single(),
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

          .eq("reviewer_id", user.id)

          .single(),
          


>>>>>>> main
        if (!userReviewError && userReviewData) {
          setUserReview(userReviewData)
        }
      }
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching reviews:", err),
      toast({
<<<<<<< HEAD
        title: "Error";
        description: "Failed to load reviews"
=======
        title: "Error",
        description: "Failed to load reviews",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        variant: "destructive"})
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  }
  // Fetch reviews for a user (to display on profile)
  const fetchUserReviews = async (userId: string) => {
    if (!userId) return;
    setIsLoading(true)
=======
=======
      console && console.error("Error fetching reviews:", err);
      toast({


        title: "Error",
        description: "Failed to load reviews",


        variant: "destructive"})
=======
          reviewer_profile:profiles ! reviewer_id (display_name, avatar_url);
        `);
        .eq ("project_id", project_id);
        .eq ("is_visible", true);
        .eq ("status", "approved");
;
      // Check condition
if (throw error) {
  $2
}
      set_reviews (data || []);
;
      // Check if current user has already submitted a review;
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
        title: "Error";
        description: "Failed to load reviews",
        variant: "destructive"});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsLoading (false);
    }

;
  // Fetch reviews for a user (to display on profile);
  const fetchUserReviews = async (user_id: string) => {
    // Check condition
if (return) {
  $2
}
    setIsLoading (true),

=======

>>>>>>> main
  },
  
  // Fetch reviews for a user (to display on profile)
  const fetchUserReviews = async (userId: string) => {
    if (!userId) return,
    
    setIsLoading(true),
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
        .order("created_at", { ascending: false });
      if (error) throw error;
      setReviews(data |[])
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    try {
      const { data, error } = await supabase;
        .from ("reviews");
        .select (`;
          *;


>>>>>>> main
        .order("created_at", { ascending: false }),
        
      if (error) throw error,
      
      setReviews(data || [])
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    } catch (err: any) {
      console.error("Error fetching user reviews:", err),
      toast({
<<<<<<< HEAD
        title: "Error";
        description: "Failed to load reviews"
=======
        title: "Error",
        description: "Failed to load reviews",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        variant: "destructive"})
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  }
  // Submit a review
  const submitReview = async (review: {
=======


    } catch (err: any) {
      console && console.error("Error fetching user reviews:", err);
      toast({


        title: "Error",
        description: "Failed to load reviews",


        variant: "destructive"})
=======
          reviewer_profile:profiles ! reviewer_id (display_name, avatar_url);
        `);
        .eq ("reviewee_id", user_id);
        .eq ("is_visible", true);
        .eq ("status", "approved");
        .order ("created_at", { ascending: false });
;
      // Check condition
if (throw error) {
  $2
}
      set_reviews (data || []);
    } catch (err: any) {
      console.error ("Error fetching user reviews:", err);
      toast ({
        title: "Error";
        description: "Failed to load reviews",
        variant: "destructive"});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsLoading (false);
    }

;
  // Submit a review;
  const submit_review = async (review: {

>>>>>>> main
    project_id: string;
    reviewee_id: string;
    rating: number;
    review_text: string;
    communication_rating?: number;
    quality_rating?: number;
    timeliness_rating?: number;
<<<<<<< HEAD
    would_work_again?: boolean
=======
=======

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
=======
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
          title: "Error";
          description: "You have already submitted a review for this project",
          variant: "destructive"});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      } else {
        toast ({
          title: "Error";

          description: "Failed to submit review",
          variant: "destructive"});

=======

>>>>>>> main
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> main
    is_anonymous: boolean
  }) => {
    if (!user) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Error";
        description: "You must be logged in to submit a review"
        variant: "destructive"});
      return false
    }
    setIsSubmitting(true);
=======
=======

>>>>>>> main
        title: "Error",
        description: "You must be logged in to submit a review",
        variant: "destructive"}),
      return false
    }
    
    setIsSubmitting(true),
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> main
    try {
      const { data, error } = await supabase
        .from("reviews")
        .insert({
          ...review,
          reviewer_id: user.id})
        .select()
<<<<<<< HEAD
<<<<<<< HEAD
        .single();
      if (error) throw error;
      toast({
        title: "Success"
        description: "Your review has been submitted and is pending approval"});
      setUserReview(data);
      return true
    } catch (err: any) {
      console.error("Error submitting review:", err);
      // Check for unique constraint violation
      if (err.code === "23505") {
        toast({
          title: "Error";
          description: "You have already submitted a review for this project"
          variant: "destructive"})
      } else {
        toast({
          title: "Error";
          description: "Failed to submit review"
          variant: "destructive"})
=======
=======

>>>>>>> main
        .single(),
        
      if (error) throw error,
      
      toast({
        title: "Success",
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
          variant: "destructive"})
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
      return false
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
  // Update a review
  const updateReview = async (reviewId: string, updates: Partial<Review>) => {
    if (!user) return false;
    setIsSubmitting(true)
=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
      return false;
    } finally {
      setIsSubmitting (false);
    }


  };

>>>>>>> main
=======
  },;
  // Fetch reviews for a user (to display on profile);
  const fetchUserReviews = async (userId: string) => {;
    if (!userId) return,;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase;
        .from("reviews");
        .select(`;
          *,;
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url);
        `);
        .eq("reviewee_id", userId);
        .eq("is_visible", true);
        .eq("status", "approved");
        .order("created_at", { ascending: false }),;
      if (error) throw error,;
      setReviews(data || []);
    } catch (err: any) {;
      console.error("Error fetching user reviews:", err),;
      toast({;
        title: "Error",;
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
        title: "Error",;
        description: "You must be logged in to submit a review",;
        variant: "destructive"}),;
      return false;
    }
;
    setIsSubmitting(true),;
    try {;
      const { data, error } = await supabase;
        .from("reviews");
        .insert({;
          ...review,;
          reviewer_id: user.id});
        .select();
        .single(),;
      if (error) throw error,;
      toast({;
        title: "Success",;
        description: "Your review has been submitted and is pending approval"}),;
      setUserReview(data),;
      return true;
    } catch (err: any) {;
      console.error("Error submitting review:", err),;
      // Check for unique constraint violation;
      if (err.code === "23505") {;
        toast({;
          title: "Error",;
          description: "You have already submitted a review for this project",;
          variant: "destructive"});
      } else {;
        toast({;
          title: "Error",;
          description: "Failed to submit review",;
          variant: "destructive"});
      }
      return false;
    } finally {;
      setIsSubmitting(false);
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main
  
  // Update a review
  const updateReview = async (reviewId: string, updates: Partial<Review>) => {
    if (!user) return false,
    
    setIsSubmitting(true),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
    try {
      const { error } = await supabase
        .from("reviews")
        .update(updates)
        .eq("id", reviewId)
<<<<<<< HEAD
        .eq("reviewer_id", user.id)
<<<<<<< HEAD
        .eq("status", "pending");
      if (error) throw error;
      toast({
        title: "Success"
        description: "Your review has been updated"});
=======
=======

        .eq("reviewer_id", user.id)

>>>>>>> main
        .eq("status", "pending"),
        
      if (error) throw error,
      
      toast({
        title: "Success",
        description: "Your review has been updated"}),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
      if (userReview) {
        setUserReview({ ...userReview, ...updates })
      }
      return true
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error updating review:", err),
      toast({
<<<<<<< HEAD
        title: "Error";
        description: "Failed to update review"
        variant: "destructive"});
=======
        title: "Error",
        description: "Failed to update review",
        variant: "destructive"}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return false
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
  }
=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
      console && console.error("Error updating review:", err);
      toast({

;
  // Update a review;
  const update_review = async (review_id: string, updates: Partial < Review>) => {
    // Check condition
if (return false) {
  $2
}
    setIsSubmitting (true),
    try {
      const { error } = await supabase;
        .from ("reviews");
        .update (updates);
        .eq ("id", review_id);
        .eq ("reviewer_id", user.id);
        .eq ("status", "pending");
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
        title: "Success",
        description: "Your review has been updated"});
;
      // Check condition
if ( {) {
  $2
}
        setUserReview ({ ...user_review, ...updates });
      }
      return true;
    } catch (err: any) {
      console.error ("Error updating review:", err);
      toast ({

        title: "Error";
        description: "Failed to update review"
        variant: "destructive"});
      return false;
=======

        title: "Error",
        description: "Failed to update review",
        variant: "destructive"}),

      return false
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    } finally {
      setIsSubmitting (false);
    }


  },
  


>>>>>>> main
  // Report a review
  const reportReview = async (reviewId: string, reason: string) => {
    if (!user) return false
    try {
      const { error } = await supabase
        .from("review_reports")
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD
          review_id: reviewId;
          reporter_id: user.id
          reason});
=======
=======

          reporter_id: user && user.id,

          reason});
=======

>>>>>>> main
          review_id: reviewId,
          reporter_id: user.id,
          reason}),
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      if (error) {
        // Check for unique constraint violation
        if (error.code === "23505") {
          toast({
<<<<<<< HEAD
            title: "Error";
            description: "You have already reported this review"
=======
            title: "Error",
            description: "You have already reported this review",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            variant: "destructive"})
        } else {
          throw error
        }
      } else {
        toast({
<<<<<<< HEAD
          title: "Report Submitted"
          description: "Thank you. Our team will review your report"});
=======
          title: "Report Submitted",
          description: "Thank you. Our team will review your report"}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      if (error) {
        // Check for unique constraint violation
        if (error && error.code === "23505") {
          toast({


            title: "Error",
            description: "You have already reported this review",


            variant: "destructive"})
=======
;
  // Report a review;
  const report_review = async (review_id: string, reason: string) => {
    // Check condition
if (return false, ) {
  $2
}
    try {
      const { error } = await supabase;
        .from ("review_reports");
        .insert ({
          review_id: review_id;
          reporter_id: user.id,
          reason});
;
      // Check condition
if ( {) {
  $2
}
        // Check for unique constraint violation;
        // Check condition
if ( {) {
  $2
}
          toast ({
            title: "Error";
            description: "You have already reported this review",
            variant: "destructive"});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        } else {
          throw error;
        }
      } else {

        toast ({
          title: "Report Submitted",

          description: "Thank you. Our team will review your report"});
        return true;
      }
    } catch (err: any) {

      console.error ("Error reporting review:", err);
      toast ({
        title: "Error";
        description: "Failed to report review",
        variant: "destructive"});
    }
    return false;
  }
;
  // Initialize by fetching reviews if project_id is provided;
  // Check condition
if ( {) {
  $2
}
    fetchProjectReviews (project_id);

  }
  return {
    reviews;
    user_review;
    is_loading;
    is_submitting;
    fetchProjectReviews;
    fetchUserReviews;

        toast({

          title: "Report Submitted",
          description: "Thank you. Our team will review your report"}),

>>>>>>> main
        return true
      }
    } catch (err: any) {
      console.error("Error reporting review:", err),
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Error";
        description: "Failed to report review"
        variant: "destructive"})
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
<<<<<<< HEAD
        title: "Error",
        description: "Failed to report review",
        variant: "destructive"})
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main
    submitReview;
    updateReview;

    reportReview}
<<<<<<< HEAD
=======
=======
    submit_review;
    update_review;
    report_review}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
}