import { useState } from &quot;react&quot;;
import { useMutation } from &quot;@tanstack/react-query&quot;;
import { Check, X, User, Star, MoreHorizontal } from 'lucide-react'
import { format } from &quot;date-fns&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { Review, ReviewStatus } from &quot;@/types/reviews&quot;;

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from &quot;@/components/ui/table&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle} from &quot;@/components/ui/dialog&quot;;
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from &quot;@/components/ui/dropdown-menu&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

interface ReviewsModerationTableProps {
  reviews: Review[];
  isLoading: boolean;
  onRefresh: () => void;
}

export function ReviewsModerationTable({
  reviews,
  isLoading,
  onRefresh}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);

  const { mutate: updateReviewStatus, isPending } = useMutation({
    mutationFn: async ({
      reviewId,
      status}: {
      reviewId: string;
      status: ReviewStatus;
    }) => {
      const { error } = await supabase
        .from(&quot;reviews&quot;)
        .update({ status })
        .eq(&quot;id&quot;, reviewId);

      if (error) throw error;
      return { reviewId, status };
    },
    onSuccess: (data) => {
      toast({
        title: &quot;Review updated&quot;,
        description: `Review has been ${data.status}.`});
      onRefresh();
      setViewDetailsOpen(false);
    },
    onError: (error: Error) => {
      toast({
        title: &quot;Error&quot;,
        description: `Failed to update review: ${error.message}`,
        variant: &quot;destructive&quot;});
    }});


  const getInitials = (name: string) => {
    return name
      .split(&quot; &quot;)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-12 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="py-10 text-center">
        <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3>
        <p className="text-muted-foreground&quot;>
          All reviews have been processed. Check back later for new submissions.
        </p>
      </div>
    );
  }

  const handleApprove = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: &quot;approved&quot; });
  };

  const handleReject = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: &quot;rejected" });
  };

  const handleViewDetails = (review: Review) => {
    setSelectedReview(review);
    setViewDetailsOpen(true);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400&quot; : &quot;text-gray-300"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
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
          {reviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    {review.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={review.reviewer_profile.avatar_url}
                        alt={review.reviewer_profile.display_name || ""}
                      />
                    ) : (
                      <AvatarFallback>
                        {review.reviewer_profile?.display_name
                          ? getInitials(review.reviewer_profile.display_name)
                          : <User className=&quot;h-4 w-4&quot; />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    {review.is_anonymous ? (
                      <span className=&quot;text-sm font-medium&quot;>Anonymous</span>
                    ) : (
                      <span className=&quot;text-sm font-medium&quot;>
                        {review.reviewer_profile?.display_name || &quot;User&quot;}
                      </span>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell>{renderStars(review.rating)}</TableCell>
              <TableCell>
                {format(new Date(review.created_at), &quot;MMM d, yyyy&quot;)}
              </TableCell>
              <TableCell>
                <Badge
                  variant=&quot;outline&quot;
                >
                  {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                {review.report_count > 0 ? (
                  <Badge variant=&quot;destructive&quot;>{review.report_count}</Badge>
                ) : (
                  &quot;None&quot;
                )}
              </TableCell>
              <TableCell className=&quot;text-right&quot;>
                <div className=&quot;flex justify-end gap-2&quot;>
                  {review.status === &quot;pending&quot; && (
                    <>
                      <Button
                        size=&quot;sm&quot;
                        variant=&quot;outline&quot;
                        className=&quot;h-8 w-8 p-0&quot;
                        onClick={() => handleApprove(review.id)}
                        disabled={isPending}
                      >
                        <Check className=&quot;h-4 w-4 text-green-500&quot; />
                      </Button>
                      <Button
                        size=&quot;sm&quot;
                        variant=&quot;outline&quot;
                        className=&quot;h-8 w-8 p-0&quot;
                        onClick={() => handleReject(review.id)}
                        disabled={isPending}
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

      {selectedReview && (
        <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>
          <DialogContent className=&quot;max-w-lg&quot;>
            <DialogHeader>
              <DialogTitle>Review Details</DialogTitle>
              <DialogDescription>
                Review submitted on{&quot; &quot;}
                {format(new Date(selectedReview.created_at), &quot;MMMM d, yyyy&quot;)}
              </DialogDescription>
            </DialogHeader>

            <div className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-center justify-between&quot;>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Avatar>
                    {selectedReview.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={selectedReview.reviewer_profile.avatar_url}
                        alt={selectedReview.reviewer_profile.display_name || ""}
                      />
                    ) : (
                      <AvatarFallback>
                        {selectedReview.reviewer_profile?.display_name
                          ? getInitials(selectedReview.reviewer_profile.display_name)
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <div className="font-medium&quot;>
                      {selectedReview.is_anonymous
                        ? &quot;Anonymous&quot;
                        : selectedReview.reviewer_profile?.display_name || &quot;User&quot;}
                    </div>
                    <Badge variant=&quot;outline">
                      {selectedReview.status}
                    </Badge>
                  </div>
                </div>
                <div>{renderStars(selectedReview.rating)}</div>
              </div>

              <div className="border rounded-md p-3 bg-muted/20">
                <p className="whitespace-pre-wrap">{selectedReview.review_text}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Additional Ratings</h4>
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
                      Timeliness: {selectedReview.timeliness_rating}/5
                    </Badge>
                  )}
                  {selectedReview.would_work_again !== undefined && (
                    <Badge
                      variant={selectedReview.would_work_again ? &quot;default&quot; : &quot;secondary&quot;}
                    >
                      {selectedReview.would_work_again ? &quot;Would work again&quot; : &quot;Would not work again"}
                    </Badge>
                  )}
                </div>
              </div>

              {selectedReview.report_count > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3">
                  <h4 className="text-sm font-medium text-red-800">Reports: {selectedReview.report_count}</h4>
                  <p className="text-sm text-red-700&quot;>
                    This review has been reported by users and may need investigation.
                  </p>
                </div>
              )}
            </div>

            <DialogFooter>
              {selectedReview.status === &quot;pending&quot; && (
                <>
                  <Button
                    variant=&quot;destructive&quot;
                    onClick={() => handleReject(selectedReview.id)}
                    disabled={isPending}
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={() => handleApprove(selectedReview.id)}
                    disabled={isPending}
                  >
                    Approve
                  </Button>
                </>
              )}
              {selectedReview.status === &quot;approved&quot; && (
                <Button
                  variant=&quot;destructive&quot;
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: &quot;rejected&quot; })}
                  disabled={isPending}
                >
                  Mark as Rejected
                </Button>
              )}
              {selectedReview.status === &quot;rejected&quot; && (
                <Button
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: &quot;approved" })}
                  disabled={isPending}
                >
                  Mark as Approved
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}