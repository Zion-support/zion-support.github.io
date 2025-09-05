<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useMutation } from "@tanstack/react-query",
import { Check, X, User, Star, MoreHorizontal } from "lucide-react",
import { format } from "date-fns",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { Review, ReviewStatus } from "@/types/reviews",
=======
import { useState } from &quot;react&quot;;
import { useMutation } from &quot;@tanstack/react-query&quot;;
import { Check, X, User, Star, MoreHorizontal } from &quot;lucide-react&quot;;
import { format } from &quot;date-fns&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { Review, ReviewStatus } from &quot;@/types/reviews&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
=======
  TableRow} from &quot;@/components/ui/table&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
<<<<<<< HEAD
  DialogTitle} from "@/components/ui/dialog",
=======
  DialogTitle} from &quot;@/components/ui/dialog&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
=======
  DropdownMenuTrigger} from &quot;@/components/ui/dropdown-menu&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ReviewsModerationTableProps {
  reviews: Review[],
  isLoading: boolean,
  onRefresh: () => void
}

export function ReviewsModerationTable({
  reviews,
  isLoading,
  onRefresh}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false),

  const { mutate: updateReviewStatus, isPending } = useMutation({
    mutationFn: async ({
      reviewId,
      status}: {
      reviewId: string,
      status: ReviewStatus
    }) => {
      const { error } = await supabase
        .from(&quot;reviews&quot;)
        .update({ status })
<<<<<<< HEAD
        .eq("id", reviewId),
=======
        .eq(&quot;id&quot;, reviewId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      if (error) throw error,
      return { reviewId, status }
    },
    onSuccess: (data) => {
      toast({
<<<<<<< HEAD
        title: "Review updated",
        description: `Review has been ${data.status}.`}),
      onRefresh(),
      setViewDetailsOpen(false)
=======
        title: &quot;Review updated&quot;,
        description: `Review has been ${data.status}.`});
=======

import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";
import {_Dialog, _DialogContent, _DialogDescription, _DialogFooter, _DialogHeader, _DialogTitle} from "@/components/ui/dialog";
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

interface ReviewsModerationTableProps {_reviews: Review[];
  isLoading: boolean;
  onRefresh: () => void;}

export function ReviewsModerationTable(_{_reviews, _isLoading, _onRefresh}: ReviewsModerationTableProps) {_const [selectedReview, _setSelectedReview] = useState<Review | null>(null);
  const [viewDetailsOpen, _setViewDetailsOpen] = useState(false);

  const { mutate: updateReviewStatus, _isPending} = useMutation(_{_mutationFn: async ({
      reviewId, _status}: {_reviewId: string;
      status: ReviewStatus;}) => {_const { error} = await supabase
        .from("reviews")
        .update({_status})
        .eq("id", reviewId);

      if (error) throw error;
      return {_reviewId, _status};
    },
    onSuccess: (_data) => {_toast({
        title: "Review updated", _description: `Review has been ${data.status}.`});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      onRefresh();
      setViewDetailsOpen(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    },
<<<<<<< HEAD
    onError: (error: Error) => {
      toast({
        title: &quot;Error&quot;,
        description: `Failed to update review: ${error.message}`,
<<<<<<< HEAD
        variant: "destructive"})
    }}),

  const getStatusColor = (status: ReviewStatus) => {
    switch (status) {
      case "approved": return "bg-green-100 text-green-800 hover:bg-green-200",
      case "rejected":
        return "bg-red-100 text-red-800 hover:bg-red-200",
      default:
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
=======
        variant: &quot;destructive&quot;});
    }});

  const getStatusColor = (status: ReviewStatus) => {
    switch (status) {
      case &quot;approved&quot;:
        return &quot;bg-green-100 text-green-800 hover:bg-green-200&quot;;
      case &quot;rejected&quot;:
        return &quot;bg-red-100 text-red-800 hover:bg-red-200&quot;;
      default:
        return &quot;bg-yellow-100 text-yellow-800 hover:bg-yellow-200&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const getInitials = (name: string) => {
    return name
      .split(&quot; &quot;)
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  },
=======
    onError: (_error: Error) => {_toast({
        title: "Error", _description: `Failed to update review: ${error.message}`,
        variant: "destructive"});
    }});

  const _getStatusColor = (_status: ReviewStatus) => {_switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      default:
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";}
  };

  const _getInitials = (_name: string) => {_return name
      .split(" ")
      .map(_(n) => n[0])
      .join("")
      .toUpperCase();};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (isLoading) {_return (
      <div className="space-y-4">
        <div className="h-12 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
      </div>
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (reviews.length === 0) {_return (
      <div className="py-10 text-center">
        <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3>
        <p className="text-muted-foreground&quot;>
          All reviews have been processed. Check back later for new submissions.
        </p>
      </div>
<<<<<<< HEAD
    )
  }

  const handleApprove = (reviewId: string) => {
<<<<<<< HEAD
    updateReviewStatus({ reviewId, status: "approved" })
  },

  const handleReject = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: "rejected" })
  },
=======
    updateReviewStatus({ reviewId, status: &quot;approved&quot; });
  };

  const handleReject = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: &quot;rejected" });
=======
    );}

  const _handleApprove = (_reviewId: string) => {_updateReviewStatus({ reviewId, _status: "approved"});
  };

  const _handleReject = (_reviewId: string) => {_updateReviewStatus({ reviewId, _status: "rejected"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  const handleViewDetails = (review: Review) => {
    setSelectedReview(review),
    setViewDetailsOpen(true)
  },
=======
  const _handleViewDetails = (_review: Review) => {_setSelectedReview(review);
    setViewDetailsOpen(true);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _renderStars = (_rating: number) => {_return (_<div className="flex">
        {[1, _2, _3, _4, _5].map((star) => (
          <Star
            key={star}
<<<<<<< HEAD
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400&quot; : &quot;text-gray-300"}`}
=======
            className={_`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        ))}
      </div>
    )
  },

  return (_<>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Reviewer</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Reports</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {_reviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    {_review.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={review.reviewer_profile.avatar_url}
                        alt={_review.reviewer_profile.display_name || ""}
                      />
                    ) : (
                      <AvatarFallback>
                        {_review.reviewer_profile?.display_name
                          ? getInitials(review.reviewer_profile.display_name)
                          : <User className=&quot;h-4 w-4&quot; />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
<<<<<<< HEAD
                    {review.is_anonymous ? (
                      <span className=&quot;text-sm font-medium&quot;>Anonymous</span>
=======
                    {_review.is_anonymous ? (
                      <span className="text-sm font-medium">Anonymous</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ) : (
                      <span className=&quot;text-sm font-medium&quot;>
                        {review.reviewer_profile?.display_name || &quot;User&quot;}
                      </span>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell>{_renderStars(review.rating)}</TableCell>
              <TableCell>
<<<<<<< HEAD
                {format(new Date(review.created_at), &quot;MMM d, yyyy&quot;)}
              </TableCell>
              <TableCell>
                <Badge
                  variant=&quot;outline&quot;
                  className={`${getStatusColor(review.status as ReviewStatus)}`}
=======
                {_format(new Date(review.created_at), _"MMM d, _yyyy")}
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={_`${getStatusColor(review.status as ReviewStatus)}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  {_review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
<<<<<<< HEAD
                {review.report_count > 0 ? (
                  <Badge variant=&quot;destructive&quot;>{review.report_count}</Badge>
=======
                {_review.report_count > 0 ? (
                  <Badge variant="destructive">{review.report_count}</Badge>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ) : (
                  &quot;None&quot;
                )}
              </TableCell>
<<<<<<< HEAD
              <TableCell className=&quot;text-right&quot;>
                <div className=&quot;flex justify-end gap-2&quot;>
                  {review.status === &quot;pending&quot; && (
                    <>
=======
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  {_review.status === "pending" && (_<>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <Button
                        size=&quot;sm&quot;
                        variant=&quot;outline&quot;
                        className=&quot;h-8 w-8 p-0&quot;
                        onClick={() => handleApprove(review.id)}
                        disabled={_isPending}
                      >
                        <Check className=&quot;h-4 w-4 text-green-500&quot; />
                      </Button>
                      <Button
<<<<<<< HEAD
                        size=&quot;sm&quot;
                        variant=&quot;outline&quot;
                        className=&quot;h-8 w-8 p-0&quot;
                        onClick={() => handleReject(review.id)}
                        disabled={isPending}
=======
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={_() => handleReject(review.id)}
                        disabled={_isPending}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        <X className=&quot;h-4 w-4 text-red-500&quot; />
                      </Button>
                    </>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant=&quot;ghost&quot;
                        size=&quot;sm&quot;
                        className=&quot;h-8 w-8 p-0&quot;
                      >
                        <MoreHorizontal className=&quot;h-4 w-4&quot; />
                      </Button>
                    </DropdownMenuTrigger>
<<<<<<< HEAD
                    <DropdownMenuContent align=&quot;end&quot;>
                      <DropdownMenuItem onClick={() => handleViewDetails(review)}>
                        View details
                      </DropdownMenuItem>
                      {review.status === &quot;approved&quot; && (
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: &quot;rejected&quot; })}>
                          Mark as rejected
                        </DropdownMenuItem>
                      )}
                      {review.status === &quot;rejected&quot; && (
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: &quot;approved&quot; })}>
=======
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={_() => handleViewDetails(review)}>
                        View details
                      </DropdownMenuItem>
                      {_review.status === "approved" && (_<DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, _status: "rejected"})}>
                          Mark as rejected
                        </DropdownMenuItem>
                      )}
                      {_review.status === "rejected" && (_<DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, _status: "approved"})}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          Mark as approved
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

<<<<<<< HEAD
      {selectedReview && (
        <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>
          <DialogContent className=&quot;max-w-lg&quot;>
            <DialogHeader>
              <DialogTitle>Review Details</DialogTitle>
              <DialogDescription>
                Review submitted on{&quot; &quot;}
                {format(new Date(selectedReview.created_at), &quot;MMMM d, yyyy&quot;)}
=======
      {_selectedReview && (
        <Dialog open={viewDetailsOpen} onOpenChange={_setViewDetailsOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Review Details</DialogTitle>
              <DialogDescription>
                Review submitted on{_" "}
                {_format(new Date(selectedReview.created_at), _"MMMM d, _yyyy")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </DialogDescription>
            </DialogHeader>

            <div className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-center justify-between&quot;>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Avatar>
                    {_selectedReview.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={selectedReview.reviewer_profile.avatar_url}
                        alt={_selectedReview.reviewer_profile.display_name || ""}
                      />
                    ) : (
                      <AvatarFallback>
                        {_selectedReview.reviewer_profile?.display_name
                          ? getInitials(selectedReview.reviewer_profile.display_name)
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
<<<<<<< HEAD
                    <div className="font-medium&quot;>
                      {selectedReview.is_anonymous
                        ? &quot;Anonymous&quot;
                        : selectedReview.reviewer_profile?.display_name || &quot;User&quot;}
                    </div>
                    <Badge variant=&quot;outline" className={getStatusColor(selectedReview.status as ReviewStatus)}>
                      {selectedReview.status}
=======
                    <div className="font-medium">
                      {_selectedReview.is_anonymous
                        ? "Anonymous"
                        : selectedReview.reviewer_profile?.display_name || "User"}
                    </div>
                    <Badge variant="outline" className={_getStatusColor(selectedReview.status as ReviewStatus)}>
                      {_selectedReview.status}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Badge>
                  </div>
                </div>
                <div>{_renderStars(selectedReview.rating)}</div>
              </div>

              <div className="border rounded-md p-3 bg-muted/20">
                <p className="whitespace-pre-wrap">{_selectedReview.review_text}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Additional Ratings</h4>
<<<<<<< HEAD
                <div className="flex flex-wrap gap-2&quot;>
                  {selectedReview.communication_rating && (
                    <Badge variant=&quot;outline&quot;>
                      Communication: {selectedReview.communication_rating}/5
                    </Badge>
                  )}
                  {selectedReview.quality_rating && (
                    <Badge variant=&quot;outline&quot;>
                      Quality: {selectedReview.quality_rating}/5
                    </Badge>
                  )}
                  {selectedReview.timeliness_rating && (
                    <Badge variant=&quot;outline&quot;>
=======
                <div className="flex flex-wrap gap-2">
                  {_selectedReview.communication_rating && (
                    <Badge variant="outline">
                      Communication: {selectedReview.communication_rating}/5
                    </Badge>
                  )}
                  {_selectedReview.quality_rating && (
                    <Badge variant="outline">
                      Quality: {selectedReview.quality_rating}/5
                    </Badge>
                  )}
                  {_selectedReview.timeliness_rating && (
                    <Badge variant="outline">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Timeliness: {selectedReview.timeliness_rating}/5
                    </Badge>
                  )}
                  {_selectedReview.would_work_again !== undefined && (
                    <Badge
<<<<<<< HEAD
                      variant={selectedReview.would_work_again ? &quot;default&quot; : &quot;secondary"}
                      className={selectedReview.would_work_again ? "bg-green-100 text-green-800&quot; : &quot;bg-gray-100 text-gray-800&quot;}
                    >
                      {selectedReview.would_work_again ? &quot;Would work again&quot; : &quot;Would not work again"}
=======
                      variant={selectedReview.would_work_again ? "default" : "secondary"}
                      className={_selectedReview.would_work_again ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                    >
                      {_selectedReview.would_work_again ? "Would work again" : "Would not work again"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Badge>
                  )}
                </div>
              </div>

              {_selectedReview.report_count > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3">
                  <h4 className="text-sm font-medium text-red-800">Reports: {selectedReview.report_count}</h4>
                  <p className="text-sm text-red-700&quot;>
                    This review has been reported by users and may need investigation.
                  </p>
                </div>
              )}
            </div>

            <DialogFooter>
<<<<<<< HEAD
              {selectedReview.status === &quot;pending&quot; && (
                <>
=======
              {_selectedReview.status === "pending" && (_<>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <Button
                    variant=&quot;destructive&quot;
                    onClick={() => handleReject(selectedReview.id)}
                    disabled={_isPending}
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={_() => handleApprove(selectedReview.id)}
                    disabled={_isPending}
                  >
                    Approve
                  </Button>
                </>
              )}
<<<<<<< HEAD
              {selectedReview.status === &quot;approved&quot; && (
                <Button
                  variant=&quot;destructive&quot;
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: &quot;rejected&quot; })}
                  disabled={isPending}
=======
              {_selectedReview.status === "approved" && (_<Button
                  variant="destructive"
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, _status: "rejected"})}
                  disabled={_isPending}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Mark as Rejected
                </Button>
              )}
<<<<<<< HEAD
              {selectedReview.status === &quot;rejected&quot; && (
                <Button
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: &quot;approved" })}
                  disabled={isPending}
=======
              {_selectedReview.status === "rejected" && (_<Button
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, _status: "approved"})}
                  disabled={_isPending}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Mark as Approved
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}