import { Review, ReviewReport } from "@/types/reviews";
import { toast } from "@/hooks/use-toast";

import { useState } from "react",""
import { supabase } from "@/integrations/supabase/client",""
import { useAuth } from "@/hooks/useAuth",""
import { Review, ReviewReport } from "@/types/reviews";""
import { toast } from "@/hooks/use-toast";"
pr-12325
export function useReviews(projectId?: string) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
const [reviews, setReviews] = useState<Review[]>([]),;
const [userReview, setUserReview] = useState<Review | null>(null),;
  const [isSubmitting, setIsSubmitting] = useState(false);
import { Review, ReviewReport } from "@/types/reviews","
import { toast } from "@/hooks/use-toast","
export function useReviews() {
}
const { user } = useAuth(),;
const [isLoading, setIsLoading] = useState(false),;
const [isSubmitting, setIsSubmitting] = useState(false),;
import { useState } from './react';'
import { supabase } from '@/integrations / supabase / client';'
import { use_auth } from '@/hooks / use_auth';'
import { Review, ReviewReport } from '@/types / reviews';'
import { toast } from '@/hooks / use - toast';'
export /**
 * use_reviews - Function description
 */
function use_reviews() {
  }
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [reviews, set_reviews] = useState < Review[]>([]);
  const [user_review, setUserReview] = useState < Review | null>(null);
  const [is_submitting, setIsSubmitting] = useState (false);
;
  // Fetch reviews for a project;
  const fetchProjectReviews = async ("project_id": string) => {
    // Check condition
}
if (return) {
  $2
}
    setIsLoading (true),
  // Fetch reviews for a project,
const fetchProjectReviews = async ("projectId": string) => {
    }
    setIsLoading(true),
    

  const { user } = useAuth($2);
  const [isLoading, setIsLoading] = useState($2);
=======
>>>>>>> origin/chore/fix-lint-and-merge
  const [reviews, setReviews] = useState<Review[]>([]),
  const [userReview, setUserReview] = useState<Review | null>(null),
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch reviews for a project

  const fetchProjectReviews = async (projectId: string) => {

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
  
  // Fetch reviews for a project

  const fetchProjectReviews = async (projectId: string) => {
    if (!projectId) return;
    setIsLoading(true)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!projectId) return,
    
    setIsLoading(true),

    try {
      const { data, error } = await supabase
        .from("reviews")
        .select(`
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `)
        .eq("project_id", projectId)
        .eq("is_visible", true)

    if (!projectId) return,

    setIsLoading(true),

      const { data, error } = await supabase;

        .from ("reviews");
        .select (`;
          *;

        .eq("status", "approved"),
        
      if (error) throw error,
      
      setReviews(data || []),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Check if current user has already submitted a review
      if (user) {
        const { data: userReviewData, error: userReviewError } = await supabase
          .from("reviews")
          .select("*")
          .eq("project_id", projectId)
<<<<<<< HEAD
          .single(),
          


          .eq("reviewer_id", user.id)
          .single();
          .single(),
          
=======

      // Check if current user has already submitted a review;
      if (user) {}
        const { data: userReviewData, error: userReviewError } = await supabase"
          .from("reviews")"
          .select("*")"
          .eq("project_id", projectId)

          .single(),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        if (!userReviewError && userReviewData) {
          setUserReview(userReviewData)
        }
      }
    } catch (err: any) {

        variant: "destructive"})

    } finally {
      setIsLoading(false)
    }

  }

  },
  
  // Fetch reviews for a user (to display on profile)

    if (!userId) return,
    
    setIsLoading(true),

<<<<<<< HEAD
        .order("created_at", { ascending: false });
      if (error) throw error;
      setReviews(data |[])
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .order("created_at", { ascending: false }),
        
      if (error) throw error,
      
      setReviews(data || [])
<<<<<<< HEAD
=======

    } catch (err: any) {
      console && console.error("Error fetching user reviews:", err);
      toast({

        variant: "destructive"})

        title: "Error",
        description: "Failed to load reviews",

        variant: "destructive"})
        `);
        .eq ("project_id", project_id);
        .eq ("is_visible", true);

        .eq ("status", "approved");
;
      // Check condition;
if (throw error) {}
  $2;
}
      set_reviews (data || []);
;
      // Check if current user has already submitted a review;
      // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
=======
        const { data: userReviewData, error: userReviewError } = await supabase;"
>>>>>>> origin/chore/fix-lint-and-merge
          .from ("reviews");"
          .select ("*");"
          .eq ("project_id", project_id);"
          .eq ("reviewer_id", user.id);
          .single ();
;
        // Check condition;
if ( {) {}
  $2;
}
          setUserReview (userReviewData);
        }
      }
    } catch (err: any) {"
      console.error ("Error fetching reviews:", err);

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
<<<<<<< HEAD
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
<<<<<<< HEAD
      }
        .from ("reviews");"
=======
      const { data, error } = await supabase;
        .from ("reviews");
>>>>>>> origin/chore/fix-lint-and-merge
        .insert ({
          ...review;

      console && console.error("Error submitting review:", err);

      // Check for unique constraint violation
      if (err && err.code === "23505") {
        toast({

          reviewer_id: user.id});

        .select ();
        .single ();
;
      // Check condition;
if (throw error) {}
  $2;
}
      toast ({"
        title: "Success","
        description: "Your review has been submitted and is pending approval"});
;
      setUserReview (data);
      return true;
    } catch (err: any) {"
      console.error ("Error submitting review:", err);
;
      // Check for unique constraint violation;
      // Check condition;
if ( {) {}
  $2;
}

      } else {
        toast ({

          variant: "destructive"});

  },
  
  // Submit a review;
  const submitReview = async (review: {}

    project_id: string,
    reviewee_id: string,
    rating: number,
    review_text: string,
    communication_rating?: number,
    quality_rating?: number,
    timeliness_rating?: number,
    would_work_again?: boolean,
<<<<<<< HEAD
=======

        title: "Error",
        description: "You must be logged in to submit a review",

        variant: "destructive"}),
      return false;
    }
    
    setIsSubmitting(true),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {
<<<<<<< HEAD
}
        .from("reviews")"
        .insert({
          ...review
          }
          "reviewer_id": user.id})
        .select()
=======
      const { data, error } = await supabase

        .from("reviews")
        .insert({}
          ...review,
          reviewer_id: user.id})

>>>>>>> origin/chore/fix-lint-and-merge
      if (error) throw error,
      
      toast({"
        title: "Success","
        description: "Your review has been submitted and is pending approval"}),
      
      setUserReview(data),
<<<<<<< HEAD
return true;
    } catch ("err": any) {
      }
      console.error("Error submitting "review":", err),"
      // Check for unique constraint violation,
if (err.code === "23505") {"
        }
        toast({
          }
          "title": "Error","
          "description": "You have already submitted a review for this project","
"variant": "destructive"});"
      } else {
        }
        toast({
          }
          "title": "Error","
          "description": "Failed to submit review","
          "variant": "destructive"})import { useState } from "react";"
import { supabase } from "@/integrations/supabase/client";"
import { useAuth } from "@/hooks/useAuth",;"
import { Review, ReviewReport } from "@/types/reviews",;"
import { toast } from "@/hooks/use-toast",;"
export function useReviews() {;
  }
=======
      return true;
    } catch (err: any) {"
      console.error("Error submitting review:", err),
      
      // Check for unique constraint violation"
      if (err.code === "23505") {}
        toast({"
          title: "Error","
          description: "You have already submitted a review for this project","
          variant: "destructive"})
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { useState } from "react",;

import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { Review, ReviewReport } from "@/types/reviews",;

import { toast } from "@/hooks/use-toast",;
export function useReviews() { return null; }
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [reviews, setReviews] = useState<Review[]>([]),;
  const [userReview, setUserReview] = useState<Review | null>(null),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
>>>>>>> origin/chore/fix-lint-and-merge
  // Fetch reviews for a project;
  const fetchProjectReviews = async (projectId: string) => {;
    if (!projectId) return,;
<<<<<<< HEAD
    setIsLoading(true),;
    try {;
      }
        .from("reviews");"
        .select(`;`          *,;
          "reviewer_profile":profiles!reviewer_id(display_name, avatar_url);
        `);`        .eq("project_id", projectId);"
        .eq("is_visible", true);"
        .eq("status", "approved"),;"
      if (error) throw error,;
      setReviews(data || []),;
      // Check if current user has already submitted a review;
      if (user) {;
        }
          .from("reviews");"
          .select("*");"
          .eq("project_id", projectId);"
          .eq("reviewer_id", user.id);"
          .single(),;
        if (!userReviewError && userReviewData) {;
          }
          setUserReview(userReviewData);
        }
          "reviewer_id": user.id});
        .select ();
        .single ();
;
      // Check condition,
if (throw error) {
  $2
}
      toast ({
        }
        "title": "Success","
        "description": "Your review has been submitted and is pending approval"});"
;
      setUserReview (data);
      return true;
    } catch ("err": any) {
      }
      console.error ("Error submitting "review":", err);"
;
      // Check for unique constraint violation;
      // Check condition,
if ( {) {
  $2
}
        toast ({
          }
          "title": "Error","
  "description": "You have already submitted a review for this project","
          "variant": "destructive"});"
      } else {
        }
        toast({
          }
          "title": "Error","
          "description": "Failed to submit review","
"variant": "destructive"});"
=======

>>>>>>> origin/chore/fix-lint-and-merge
      }
      return false;
    } finally {}
      setIsSubmitting (false);

  }
  // Update a review;
  const updateReview = async (reviewId: string, updates: Partial<Review>) => {}
    if (!user) return false;
    setIsSubmitting(true)
  };

  },;

  // Fetch reviews for a user (to display on profile);
  const fetchUserReviews = async (userId: string) => {;
    if (!userId) return,;

    setIsLoading(true),;
    try {;
<<<<<<< HEAD
      }
        .from("reviews");"
        .select(`;`          *,;
          "reviewer_profile":profiles!reviewer_id(display_name, avatar_url);
        `);`
        .eq("reviewee_id", userId);"
        .eq("is_visible", true);"
        .eq("status", "approved");"
        .order("created_at", { "ascending": false }),;"
=======
      const { data, error } = await supabase;"
        .from("reviews");`
        .select(`;
          *,;

>>>>>>> origin/chore/fix-lint-and-merge
      if (error) throw error,;

      setReviews(data || []);
    } catch (err: any) {;"
      console.error("Error fetching user reviews:", err),;

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

        variant: "destructive"}),;
      return false;
    }
;
    setIsSubmitting(true),;
    try {;
<<<<<<< HEAD
      }
        .from("reviews");"
=======
      const { data, error } = await supabase;"
        .from("reviews");
>>>>>>> origin/chore/fix-lint-and-merge
        .insert({;
          ...review,;
          reviewer_id: user.id});
        .select();
        .single(),;
      if (error) throw error,;

      setUserReview(data),;
      return true;
    } catch (err: any) {;"
      console.error("Error submitting review:", err),;
      // Check for unique constraint violation;"
      if (err.code === "23505") {;

          variant: "destructive"});
      } else {;
        toast({;"
          title: "Error","
          description: "Failed to submit review",;"

          variant: "destructive"});

      }
      return false;
    } finally {
      setIsSubmitting (false);
    }

    if (!user) return false,
    
    setIsSubmitting(true),

    try {
      const { error } = await supabase

        .from("reviews")
        .update(updates)"
        .eq("id", reviewId)

        .eq("status", "pending"),
        
      if (error) throw error,

        description: "Your review has been updated"}),

      if (userReview) {

        setUserReview({ ...userReview, ...updates })
      }
      return true
    } catch (err: any) {

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

        variant: "destructive"});
      return false;
    } finally {}
      setIsSubmitting (false);
    }

  },

      return false
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
    if (!user) return false,
try {
}
        .from("review_reports")"
        .insert({
          }
          "reporter_id": user && user.id,
          reason});          "review_id": reviewId,
          "reporter_id": user.id,
          reason}),
        // Check for unique constraint violation,
if (error && error.code === "23505") {"
          }
          toast({
}
"variant": "destructive"});"
;
  // Report a review;
  const report_review = async ("review_id": string, "reason": string) => {
    // Check condition
}
if (return false, ) {
  $2
}
    try {
      }
        .from ("review_reports");"
        .insert ({
          }
          "review_id": review_id;
          "reporter_id": user.id,
=======

<<<<<<< HEAD
      console.error("Error updating review:", err),
      toast({
        title: "Error";
        description: "Failed to update review"
        variant: "destructive"});
        title: "Error",
        description: "Failed to update review",
        variant: "destructive"}),
      return false
    } finally {
      setIsSubmitting(false)
    }
  }
  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Report a review
  const reportReview = async (reviewId: string, reason: string) => {
    if (!user) return false
    try {
      const { error } = await supabase
        .from("review_reports")
        .insert({
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          reporter_id: user && user.id,

          reporter_id: user.id,
          reason}),

      if (error) {
        // Check for unique constraint violation
        if (error && error.code === "23505") {
          toast({

            title: "Error",
            description: "You have already reported this review",

            variant: "destructive"});
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
>>>>>>> origin/chore/fix-lint-and-merge
          reason});
;
      // Check condition;
if ( {) {}
  $2;
}
        // Check for unique constraint violation;
        // Check condition;
if ( {) {}
  $2;
}

            variant: "destructive"});

        } else {
          throw error;
        }
      } else {

        toast ({
          title: "Report Submitted",

          description: "Thank you. Our team will review your report"});

        return true;
      }
    } catch (err: any) {"
      console.error("Error reporting review:", err),
      toast({}
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

            title: "Error",
  description: "You have already reported this review",
            variant: "destructive"});
        } else {
          throw error;
        }
      } else {

        return true
      }
    } catch (err: any) {
      console.error("Error reporting review:", err),
      toast({
<<<<<<< HEAD
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


=======

        title: "Error";
        description: "Failed to report review"
        variant: "destructive"})

    }
    return false
  }
  // Initialize by fetching reviews if projectId is provided
  if (projectId && reviews.length === 0 && !isLoading) {

    reviews;
    user_review;
    is_loading;
    is_submitting;
    fetchProjectReviews;
    fetchUserReviews;

  },;
  // Update a review;
  const updateReview = async (reviewId: string, updates: Partial<Review>) => {;
    if (!user) return false,;
    setIsSubmitting(true),;
    try {;

        description: "Your review has been updated"}),;
      if (userReview) {;
        setUserReview({ ...userReview, ...updates });
      }
;
      return true;

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

        .from("review_reports");
        .insert({;
          review_id: reviewId,;
          reporter_id: user.id,;
          reason}),;
      if (error) {;

            variant: "destructive"});
        } else {;
          throw error;
        }
      } else {;

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    submitReview;
    updateReview;

    reportReview}

    submit_review;
    update_review;
    report_review}
          description: "Thank you. Our team will review your report"});
        return true;
      }
    } catch (err: any) {
  }
  return {

    reviews;
    user_review;
    is_loading;
    is_submitting;
    fetchProjectReviews;
    fetchUserReviews;