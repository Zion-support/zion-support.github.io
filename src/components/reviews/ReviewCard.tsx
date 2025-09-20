import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Star, Flag, User } from "lucide-react";
              onChange = {(e) => setReportReason(e.target.value)}
  review.reviewer profile.avatar url}alt= {review.reviewer profile.display name}/>) : (<AvatarFallback> {"
}</div> </div> <div className="mb-4"> <p className="text-sm whitespace-pre-wrap"> {review.review text}</p> </div> {"
  (review.communication rating |review.quality rating |review.timeliness rating |review.would work again !== undefined) && (<div className="border-t pt-3 mt-3"> <div className="flex flex-wrap gap-2" > {"
  review.communication rating && (<Badge variant="outline" className="flex gap-1 items-center"> Communication <span className="ml-1 text-yellow-500" > {
  review.communication rating}/5</span> </Badge>) "
}Quality <span className="ml-1 text-yellow-500" > {review.quality rating}/5</span> </Badge>) "
}Timeliness <span className="ml-1 text-yellow-500" > {review.timeliness rating}/5</span> </Badge>)
}{
  review.would work again !== undefined && (<Badge </Badge>)
}</div> </div>) "
}<DialogTrigger asChild> <Button variant="ghost" size="sm" className="text-muted-foreground"> <Flag className="h-3 w-3 mr-1" /> Report </Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Report Review</DialogTitle> <DialogDescription> If you believe this review violates our community guidelines please provide details below. </DialogDescription> </DialogHeader> <Textarea Cancel </Button> <Button onClick={handleReport}disabled= {!reportReason.trim () |isReporting}> </Button> </DialogFooter> </DialogContent> </Dialog> </div> </div>)