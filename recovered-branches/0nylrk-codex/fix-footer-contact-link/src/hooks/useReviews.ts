


  // Fetch reviews for a project

  const fetchProjectReviews = async (projectId: string) => {

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

        .eq("status", "approved"),
        
      if (error) throw error,
      
      setReviews(data || []),
      

      // Check if current user has already submitted a review
      if (user) {
        const { data: userReviewData, error: userReviewError } = await supabase
          .from("reviews")
          .select("*")
          .eq("project_id", projectId)
          .eq("reviewer_id", user.id)

          .single(),
          

        if (!userReviewError && userReviewData) {
          setUserReview(userReviewData)
        }
      }
    } catch (err: any) {
      console.error("Error fetching reviews:", err),
      toast({

        title: "Error",
        description: "Failed to load reviews",

        variant: "destructive"})
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
        .from("reviews")
        .select(`
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `)
        .eq("reviewee_id", userId)
        .eq("is_visible", true)
        .eq("status", "approved")

        .order("created_at", { ascending: false }),
        
      if (error) throw error,
      
      setReviews(data || [])

    } catch (err: any) {
      console.error("Error fetching user reviews:", err),
      toast({

        title: "Error",
        description: "Failed to load reviews",

        variant: "destructive"})
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

        title: "Error",
        description: "You must be logged in to submit a review",
        variant: "destructive"}),
      return false
    }
    
    setIsSubmitting(true),
    

    try {
      const { data, error } = await supabase
        .from("reviews")
        .insert({
          ...review,
          reviewer_id: user.id})
        .select()

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

      }
      return false
    } finally {
      setIsSubmitting(false)
    }

  };

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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
  // Update a review
  const updateReview = async (reviewId: string, updates: Partial<Review>) => {
    if (!user) return false,
    
    setIsSubmitting(true),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
      

      if (userReview) {
        setUserReview({ ...userReview, ...updates })
      }
      return true
    } catch (err: any) {
      console.error("Error updating review:", err),
      toast({

        title: "Error",
        description: "Failed to update review",
        variant: "destructive"}),

      return false
    } finally {
      setIsSubmitting(false)
    }

  },
  

  // Report a review
  const reportReview = async (reviewId: string, reason: string) => {
    if (!user) return false
    try {
      const { error } = await supabase
        .from("review_reports")
        .insert({

          review_id: reviewId,
          reporter_id: user.id,
          reason}),
        

      if (error) {
        // Check for unique constraint violation
        if (error.code === "23505") {
          toast({

            title: "Error",
            description: "You have already reported this review",

            variant: "destructive"})
        } else {
          throw error
        }
      } else {
        toast({

          title: "Report Submitted",
          description: "Thank you. Our team will review your report"}),

        return true
      }
    } catch (err: any) {
      console.error("Error reporting review:", err),
      toast({


    submitReview;
    updateReview;

    reportReview}
}