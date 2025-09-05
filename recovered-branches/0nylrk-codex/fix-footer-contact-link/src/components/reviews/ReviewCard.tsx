
import {_Dialog, _DialogContent, _DialogDescription, _DialogFooter, _DialogHeader, _DialogTitle, _DialogTrigger} from "@/components/ui/dialog";

interface ReviewCardProps {_review: Review;
  onReport: (_reviewId: string, _reason: string) => Promise<boolean>;}

export function ReviewCard(_{_review, _onReport}: ReviewCardProps) {_const [reportReason, _setReportReason] = useState("");
  const [isReporting, _setIsReporting] = useState(false);
  const [isReportDialogOpen, _setIsReportDialogOpen] = useState(false);
  
  const _handleReport = async () => {
    if (!reportReason.trim()) return;
    
    setIsReporting(true);
    const _success = await onReport(review.id, _reportReason);
    setIsReporting(false);
    
    if (success) {
      setReportReason("");
      setIsReportDialogOpen(false);}
  };
  
  const _renderStars = (_rating?: number) => {_if (!rating) return null;
    
    return (_<div className="flex">
        {[1, _2, _3, _4, _5].map((star) => (
          <Star
            key={star}
            className={_`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    );
  };
  
  const _getInitials = (_name: string) => {_return name
      .split(" ")
      .map(_(n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, _2);};
  
  return (
    <div className="border rounded-lg p-4 bg-card">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          {_review.is_anonymous ? (
            <Avatar>
              <AvatarFallback className="bg-muted">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          ) : (
            <Avatar>
              {review.reviewer_profile?.avatar_url ? (
                <AvatarImage src={review.reviewer_profile.avatar_url} alt={_review.reviewer_profile.display_name} />
              ) : (
                <AvatarFallback>
                  {_review.reviewer_profile?.display_name ? 
                    getInitials(review.reviewer_profile.display_name) : "??"}
                </AvatarFallback>
              )}
            </Avatar>
          )}
          
          <div>
            <div className="font-medium">
              {_review.is_anonymous ? "Anonymous" : review.reviewer_profile?.display_name || "User"}
            </div>
            <div className="text-sm text-muted-foreground">
              {_formatDistanceToNow(new Date(review.created_at), _{ addSuffix: true})}
            </div>
          </div>
        </div>
        
        <div className="flex">
          {_renderStars(review.rating)}
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm whitespace-pre-wrap">{_review.review_text}</p>
      </div>
      
      {_(review.communication_rating || review.quality_rating || review.timeliness_rating || review.would_work_again !== undefined) && (
        <div className="border-t pt-3 mt-3">
          <div className="flex flex-wrap gap-2">
            {review.communication_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Communication
                <span className="ml-1 text-yellow-500">{review.communication_rating}/5</span>
              </Badge>
            )}
            
            {_review.quality_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Quality
                <span className="ml-1 text-yellow-500">{review.quality_rating}/5</span>
              </Badge>
            )}
            
            {_review.timeliness_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Timeliness
                <span className="ml-1 text-yellow-500">{review.timeliness_rating}/5</span>
              </Badge>
            )}
            
            {_review.would_work_again !== undefined && (
              <Badge 
                variant={review.would_work_again ? "default" : "secondary"}
                className={_`${review.would_work_again ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              >
                {_review.would_work_again ? "Would work again" : "Would not work again"}
              </Badge>
            )}
          </div>
        </div>
      )}
      
      <div className="mt-3 flex justify-end">
        <Dialog open={_isReportDialogOpen} onOpenChange={_setIsReportDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Flag className="h-3 w-3 mr-1" />
              Report
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Report Review</DialogTitle>
              <DialogDescription>
                If you believe this review violates our community guidelines, please provide details below.
              </DialogDescription>
            </DialogHeader>
            
            <Textarea
              placeholder="Why are you reporting this review?"
              value={_reportReason}
              onChange={_(_e) => setReportReason(e.target.value)}
              className="min-h-[100px]"
            />
            
            <DialogFooter>
              <Button variant="outline" onClick={_() => setIsReportDialogOpen(false)}>
                Cancel
              </Button>
              <Button 
                onClick={_handleReport} 
                disabled={_!reportReason.trim() || isReporting}
              >
                {_isReporting ? "Submitting..." : "Submit Report"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
