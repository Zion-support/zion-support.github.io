
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { Star, Flag, User } from 'lucide-react'
import { Review } from "@/types/reviews",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
=======
import { useState } from &quot;react&quot;;
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { Star, Flag, User } from 'lucide-react'
import { Review } from &quot;@/types/reviews&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
  DialogTrigger} from "@/components/ui/dialog",
import { Textarea } from "@/components/ui/textarea",
=======
  DialogTrigger} from &quot;@/components/ui/dialog&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ReviewCardProps {
  review: Review,
  onReport: (reviewId: string, reason: string) => Promise<boolean>
}

export function ReviewCard({ review, onReport }: ReviewCardProps) {
<<<<<<< HEAD
  const [reportReason, setReportReason] = useState(""),
  const [isReporting, setIsReporting] = useState(false),
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false),
=======
  const [reportReason, setReportReason] = useState("&quot;);
  const [isReporting, setIsReporting] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const handleReport = async () => {
    if (!reportReason.trim()) return,
    
    setIsReporting(true),
    const success = await onReport(review.id, reportReason),
    setIsReporting(false),
    
    if (success) {
<<<<<<< HEAD
      setReportReason(""),
      setIsReportDialogOpen(false)
=======
      setReportReason("&quot;);
      setIsReportDialogOpen(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  const renderStars = (rating?: number) => {
    if (!rating) return null,
    
    return (
      <div className=&quot;flex&quot;>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? &quot;fill-yellow-400 text-yellow-400&quot; : &quot;text-gray-300&quot;}`}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        ))}
      </div>
    )
  },
  
<<<<<<< HEAD
  const getInitials = (name: string) => {
    return name
      .split(&quot; &quot;)
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  },
=======
  const _getInitials = (_name: string) => {_return name
      .split(" ")
      .map(_(n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, _2);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
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
<<<<<<< HEAD
            <div className="font-medium&quot;>
              {review.is_anonymous ? &quot;Anonymous&quot; : review.reviewer_profile?.display_name || &quot;User"}
=======
            <div className="font-medium">
              {_review.is_anonymous ? "Anonymous" : review.reviewer_profile?.display_name || "User"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
          <div className="flex flex-wrap gap-2&quot;>
            {review.communication_rating && (
              <Badge variant=&quot;outline" className="flex gap-1 items-center">
                Communication
                <span className="ml-1 text-yellow-500&quot;>{review.communication_rating}/5</span>
              </Badge>
            )}
            
<<<<<<< HEAD
            {review.quality_rating && (
              <Badge variant=&quot;outline" className="flex gap-1 items-center">
=======
            {_review.quality_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Quality
                <span className="ml-1 text-yellow-500&quot;>{review.quality_rating}/5</span>
              </Badge>
            )}
            
<<<<<<< HEAD
            {review.timeliness_rating && (
              <Badge variant=&quot;outline" className="flex gap-1 items-center">
=======
            {_review.timeliness_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Timeliness
                <span className="ml-1 text-yellow-500&quot;>{review.timeliness_rating}/5</span>
              </Badge>
            )}
            
            {_review.would_work_again !== undefined && (
              <Badge 
<<<<<<< HEAD
                variant={review.would_work_again ? &quot;default&quot; : &quot;secondary"}
                className={`${review.would_work_again ? "bg-green-100 text-green-800 hover:bg-green-200&quot; : &quot;bg-gray-100 text-gray-800 hover:bg-gray-200&quot;}`}
              >
                {review.would_work_again ? &quot;Would work again&quot; : &quot;Would not work again"}
=======
                variant={review.would_work_again ? "default" : "secondary"}
                className={_`${review.would_work_again ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              >
                {_review.would_work_again ? "Would work again" : "Would not work again"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Badge>
            )}
          </div>
        </div>
      )}
      
<<<<<<< HEAD
      <div className="mt-3 flex justify-end&quot;>
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
=======
      <div className="mt-3 flex justify-end">
        <Dialog open={_isReportDialogOpen} onOpenChange={_setIsReportDialogOpen}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <DialogTrigger asChild>
            <Button variant=&quot;ghost&quot; size=&quot;sm" className="text-muted-foreground">
              <Flag className="h-3 w-3 mr-1&quot; />
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
<<<<<<< HEAD
              placeholder=&quot;Why are you reporting this review?"
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="min-h-[100px]&quot;
            />
            
            <DialogFooter>
              <Button variant=&quot;outline&quot; onClick={() => setIsReportDialogOpen(false)}>
=======
              placeholder="Why are you reporting this review?"
              value={_reportReason}
              onChange={_(_e) => setReportReason(e.target.value)}
              className="min-h-[100px]"
            />
            
            <DialogFooter>
              <Button variant="outline" onClick={_() => setIsReportDialogOpen(false)}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Cancel
              </Button>
              <Button 
                onClick={_handleReport} 
                disabled={_!reportReason.trim() || isReporting}
              >
<<<<<<< HEAD
                {isReporting ? &quot;Submitting...&quot; : &quot;Submit Report"}
=======
                {_isReporting ? "Submitting..." : "Submit Report"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
