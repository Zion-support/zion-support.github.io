 export function useReviews (projectId?: string) {
  const {
  user 
}= useAuth ();
const [isLoading, setIsLoading] = useState (false);
const [reviews, setReviews] = useState<Review[]> ([]);
const [userReview, setUserReview] = useState<Review | null> (null);
const [isSubmitting, setIsSubmitting] = useState (false);
//Fetch reviews for a project const fetchProjectReviews = async (projectId: string) => {
  if (!projectId) return;
try {
  .select (`*;
reviewer profile: profiles!reviewer id (display name, avatar url) `) if (error) throw error;
setReviews (data || []);
//Check if current user has already submitted a review .from ("reviews") .select ("*") .eq ("project id", projectId) .eq ("reviewer id", user.id) .single ();
}finally {
  setIsLoading (false) 
}
};
//Fetch reviews for a user (to display on profile) const fetchUserReviews = async (userId: string) => {
  if (!userId) return;
try {
  .select (`*;
reviewer profile:profiles!reviewer id (display name, avatar url) `) 
}finally {
  setIsLoading (false) 
}
};
//Submit a review const submitReview = async (review: {
  project id: string;
reviewee id: string;
rating: number;
review text: string;
communication rating?: number;
quality rating?: number;
timeliness rating?: number;
would work again?: boolean;
is anonymous: boolean 
}) => {
  if (!user) {
  toast ({
  return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}setIsSubmitting (true);
.select () .single ();
if (error) throw error;
setUserReview (data);
return true;
}catch (err: any) {
  //Check for unique constraint violation if (err.code === "23505") {
  toast ({
  
}return false;
}finally {
  setIsSubmitting (false) 
}
};
//Update a review const updateReview = async (reviewId: string, updates: Partial<Review>) => {
  if (!user) return false;
try {
  .update (updates) if (error) throw error;
if (userReview) {
  setUserReview ({
  ...userReview, ...updates 
}) 
}return true;
}catch (err: any) {
  
}finally {
  setIsSubmitting (false) 
}
};
//Report a review const reportReview = async (reviewId: string, reason: string) => {
  if (!user) return false;
try {
  const {
  error 
}= await supabase .from ("review reports") .insert ({
  review id: reviewId;
reporter id: user.id;
reason 
});
if (error) {
  //Check for unique constraint violation if (error.code === "23505") {
  toast ({
  
}else {
  throw error 
}
}else {
  toast ({
  
}return false;
};
// Initialize by fetching reviews if projectId is provided 
}