 import {;
  Dialog;
DialogContent;
DialogDescription;
DialogFooter;
DialogHeader;
DialogTitle;
interface ReviewCardProps {;
  review: Review;
onReport: (reviewId: string, reason: string) => Promise<boolean> ;
export function ReviewCard ({;
  review, onReport ;
 ReviewCardProps) {;
  const handleReport = async () => {;
  if (!reportReason.trim () return;
setIsReporting (true);
const success = await onReport (review.id, reportReason);
setIsReporting (false);
if (success) {;


const renderStars = (rating?: number) => {;
  if (!rating) return null;
return (
</AvatarFallback>) ;"}</Avatar>) ";"}<div>
  addSuffix: true ;"}) ";"}</div> </div> </div> <div className="flex">{;"  renderStars (review.rating) ";"}</div> 
  review.review text ;"}</p> 
  review.communication rating ;"}/5</span> 
  review.quality rating ;"}/5</span> 
  review.would work again != undefined && (<Badge </Badge>) ;"}</div> 
 </Button> </DialogFooter> </DialogContent> </Dialog> </div> 