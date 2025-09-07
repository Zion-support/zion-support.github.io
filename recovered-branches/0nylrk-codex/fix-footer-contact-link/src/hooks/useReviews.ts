
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
  const [reviews, setReviews] = useState<Review[]>([]),
  const [userReview, setUserReview] = useState<Review | null>(null),
  const [isSubmitting, setIsSubmitting] = useState(false);


    reportReview}
    submit_review;
    update_review;
    report_review}
submit_review;
    update_review;
    report_review}
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
}
}
          description: "Thank you. Our team will review your report"}),"
      console.error("Error reporting review:", err),"

  // Initialize by fetching reviews if projectId is provided;)
  if (projectId && reviews.length === 0 && !isLoading) {
    fetchProjectReviews(projectId)
  // TODO: Implement

  },;
  // Update a review;
  const updateReview = async (reviewId: string, updates: Partial<Review>) => {;
"`;
pr-12325
    submitReview;}
    updateReview;}
    reportReview}
    submit_review;
    update_review;
    report_review}
