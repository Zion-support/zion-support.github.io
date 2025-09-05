

export function useReviews(_projectId?: string) {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userReview, setUserReview] = useState<Review | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Fetch reviews for a project
  const _fetchProjectReviews = async (_projectId: string) => {_if (!projectId) return;
    
    setIsLoading(true);
    
    try {
      const { data, _error} = await supabase
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
      if (user) {_const { data: userReviewData, _error: userReviewError} = await supabase
          .from("reviews")
          .select("*")
          .eq("project_id", projectId)
          .eq("reviewer_id", user.id)
          .single();
          
        if (!userReviewError && userReviewData) {_setUserReview(userReviewData);}
      }
    } catch (err: unknown) {_toast({
        title: "Error", _description: "Failed to load reviews", _variant: "destructive"});
    } finally {_setIsLoading(false);}
  };
  
  // Fetch reviews for a user (to display on profile)
  const _fetchUserReviews = async (_userId: string) => {_if (!userId) return;
    
    setIsLoading(true);
    
    try {
      const { data, _error} = await supabase
        .from("reviews")
        .select(`
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `)
        .eq("reviewee_id", userId)
        .eq("is_visible", true)
        .eq("status", "approved")
        .order("created_at", {_ascending: false});
        
      if (error) throw error;
      
      setReviews(data || []);
    } catch (err: unknown) {_toast({
        title: "Error", _description: "Failed to load reviews", _variant: "destructive"});
    } finally {_setIsLoading(false);}
  };
  
  // Submit a review
  const _submitReview = async (_review: {_project_id: string;
    reviewee_id: string;
    rating: number;
    review_text: string;
    communication_rating?: number;
    quality_rating?: number;
    timeliness_rating?: number;
    would_work_again?: boolean;
    is_anonymous: boolean;}) => {_if (!user) {
      toast({
        title: "Error", _description: "You must be logged in to submit a review", _variant: "destructive"});
      return false;
    }
    
    setIsSubmitting(true);
    
    try {_const { data, _error} = await supabase
        .from("reviews")
        .insert({_...review, _reviewer_id: user.id})
        .select()
        .single();
        
      if (error) throw error;
      
      toast({_title: "Success", _description: "Your review has been submitted and is pending approval"});
      
      setUserReview(data);
      return true;
    } catch (err: unknown) {_// Check for unique constraint violation
      if (err.code === "23505") {
        toast({
          title: "Error", _description: "You have already submitted a review for this project", _variant: "destructive"});
      } else {_toast({
          title: "Error", _description: "Failed to submit review", _variant: "destructive"});
      }
      return false;
    } finally {_setIsSubmitting(false);}
  };
  
  // Update a review
  const _updateReview = async (_reviewId: string, _updates: Partial<Review>) => {_if (!user) return false;
    
    setIsSubmitting(true);
    
    try {
      const { error} = await supabase
        .from("reviews")
        .update(updates)
        .eq("id", reviewId)
        .eq("reviewer_id", user.id)
        .eq("status", "pending");
        
      if (error) throw error;
      
      toast({_title: "Success", _description: "Your review has been updated"});
      
      if (userReview) {_setUserReview({ ...userReview, _...updates});
      }
      
      return true;
    } catch (err: unknown) {_toast({
        title: "Error", _description: "Failed to update review", _variant: "destructive"});
      return false;
    } finally {_setIsSubmitting(false);}
  };
  
  // Report a review
  const _reportReview = async (_reviewId: string, _reason: string) => {_if (!user) return false;
    
    try {
      const { error} = await supabase
        .from("review_reports")
        .insert({_review_id: reviewId, _reporter_id: user.id, _reason});
        
      if (error) {_// Check for unique constraint violation
        if (error.code === "23505") {
          toast({
            title: "Error", _description: "You have already reported this review", _variant: "destructive"});
        } else {_throw error;}
      } else {_toast({
          title: "Report Submitted", _description: "Thank you. Our team will review your report"});
        return true;
      }
    } catch (err: unknown) {_toast({
        title: "Error", _description: "Failed to report review", _variant: "destructive"});
    }
    
    return false;
  };
  
  // Initialize by fetching reviews if projectId is provided
  if (projectId && reviews.length === 0 && !isLoading) {_fetchProjectReviews(projectId);}
  
  return {_reviews, _userReview, _isLoading, _isSubmitting, _fetchProjectReviews, _fetchUserReviews, _submitReview, _updateReview, _reportReview};
}
