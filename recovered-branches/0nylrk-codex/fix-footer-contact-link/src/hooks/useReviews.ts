
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
