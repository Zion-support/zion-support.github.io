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
      onRefresh();
      setViewDetailsOpen(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    },
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

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-12 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
      </div>
    )
  }

  if (reviews.length === 0) {
    return (
      <div className="py-10 text-center">
        <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3>
        <p className="text-muted-foreground&quot;>
          All reviews have been processed. Check back later for new submissions.
        </p>
      </div>
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
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleViewDetails = (review: Review) => {
    setSelectedReview(review),
    setViewDetailsOpen(true)
  },

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400&quot; : &quot;text-gray-300"}`}
          />
=======
import { useState } from "react",;
import { useMutation } from "@tanstack/react-query",;
import { Check, X, User, Star, MoreHorizontal } from "lucide-react",;
import { format } from "date-fns",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { Review, ReviewStatus } from "@/types/reviews",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle} from "@/components/ui/dialog",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
interface ReviewsModerationTableProps {;
  reviews: Review[],;
  isLoading: boolean,;
  onRefresh: () => void;
}
;
export function ReviewsModerationTable({;
  reviews,;
  isLoading,;
  onRefresh}: ReviewsModerationTableProps) {;
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),;
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false),;
  const { mutate: updateReviewStatus, isPending } = useMutation({;
    mutationFn: async ({;
      reviewId,;
      status}: {;
      reviewId: string,;
      status: ReviewStatus;
    }) => {;
      const { error } = await supabase;
        .from("reviews");
        .update({ status });
        .eq("id", reviewId),;
      if (error) throw error,;
      return { reviewId, status }
    },;
    onSuccess: (data) => {;
      toast({;
        title: "Review updated",;
        description: `Review has been ${data.status}.`}),;
      onRefresh(),;
      setViewDetailsOpen(false);
    },;
    onError: (error: Error) => {;
      toast({;
        title: "Error",;
        description: `Failed to update review: ${error.message}`,;
        variant: "destructive"});
    }}),;
  const getStatusColor = (status: ReviewStatus) => {;
    switch (status) {;
      case "approved": return "bg-green-100 text-green-800 hover:bg-green-200",;
      case "rejected":;
        return "bg-red-100 text-red-800 hover:bg-red-200",;
      default:;
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    }
  },;
  const getInitials = (name: string) => {;
    return name;
      .split(" ");
      .map((n) => n[0]);
      .join("");
      .toUpperCase();
  },;
  if (isLoading) {;
    return (;
      <div className="space-y-4">;
        <div className="h-12 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
      </div>;
    );
  }
;
  if (reviews.length === 0) {;
    return (;
      <div className="py-10 text-center">;
        <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3>;
        <p className="text-muted-foreground">;
          All reviews have been processed. Check back later for new submissions.;
        </p>;
      </div>;
    );
  }
;
  const handleApprove = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: "approved" });
  },;
  const handleReject = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: "rejected" });
  },;
  const handleViewDetails = (review: Review) => {;
    setSelectedReview(review),;
    setViewDetailsOpen(true);
  };
  const renderStars = (rating: number) => {;
    return (;
      <div className="flex">;
        {[1, 2, 3, 4, 5].map((star) => (;
          <Star;
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        ))}
      </div>;
    );
  };
  return (;
    <>;
      <Table>;
        <TableHeader>;
          <TableRow>;
            <TableHead>Reviewer</TableHead>;
            <TableHead>Rating</TableHead>;
            <TableHead>Date</TableHead>;
            <TableHead>Status</TableHead>;
            <TableHead>Reports</TableHead>;
            <TableHead className="text-right">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {reviews.map((review) => (;
            <TableRow key={review.id}>;
              <TableCell>;
                <div className="flex items-center gap-2">;
                  <Avatar className="h-8 w-8">;
                    {review.reviewer_profile?.avatar_url ? (;
                      <AvatarImage;
                        src={review.reviewer_profile.avatar_url}
                        alt={review.reviewer_profile.display_name || ""}
<<<<<<< HEAD
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
=======
                      />;
                    ) : (;
                      <AvatarFallback>;
                        {review.reviewer_profile?.display_name;
                          ? getInitials(review.reviewer_profile.display_name);
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>;
                    )}
                  </Avatar>;
                  <div>;
                    {review.is_anonymous ? (;
                      <span className="text-sm font-medium">Anonymous</span>;
                    ) : (;
                      <span className="text-sm font-medium">;
                        {review.reviewer_profile?.display_name || "User"}
                      </span>;
                    )}
                  </div>;
                </div>;
              </TableCell>;
              <TableCell>{renderStars(review.rating)}</TableCell>;
              <TableCell>;
                {format(new Date(review.created_at), "MMM d, yyyy")}
              </TableCell>;
              <TableCell>;
                <Badge;
                  variant="outline";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  className={`${getStatusColor(review.status as ReviewStatus)}`}
                >;
                  {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
<<<<<<< HEAD
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
=======
                </Badge>;
              </TableCell>;
              <TableCell>;
                {review.report_count > 0 ? (;
                  <Badge variant="destructive">{review.report_count}</Badge>;
                ) : (;
                  "None";
                )}
              </TableCell>;
              <TableCell className="text-right">;
                <div className="flex justify-end gap-2">;
                  {review.status === "pending" && (;
                    <>;
                      <Button;
                        size="sm";
                        variant="outline";
                        className="h-8 w-8 p-0";
                        onClick={() => handleApprove(review.id)}
                        disabled={isPending}
                      >;
                        <Check className="h-4 w-4 text-green-500" />;
                      </Button>;
                      <Button;
                        size="sm";
                        variant="outline";
                        className="h-8 w-8 p-0";
                        onClick={() => handleReject(review.id)}
                        disabled={isPending}
                      >;
                        <X className="h-4 w-4 text-red-500" />;
                      </Button>;
                    </>;
                  )}
                  <DropdownMenu>;
                    <DropdownMenuTrigger asChild>;
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="h-8 w-8 p-0";
                      >;
                        <MoreHorizontal className="h-4 w-4" />;
                      </Button>;
                    </DropdownMenuTrigger>;
                    <DropdownMenuContent align="end">;
                      <DropdownMenuItem onClick={() => handleViewDetails(review)}>;
                        View details;
                      </DropdownMenuItem>;
                      {review.status === "approved" && (;
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: "rejected" })}>;
                          Mark as rejected;
                        </DropdownMenuItem>;
                      )}
                      {review.status === "rejected" && (;
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: "approved" })}>;
                          Mark as approved;
                        </DropdownMenuItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      )}
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
              </TableCell>;
            </TableRow>;
          ))}
<<<<<<< HEAD
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
=======
        </TableBody>;
      </Table>;
      {selectedReview && (;
        <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>;
          <DialogContent className="max-w-lg">;
            <DialogHeader>;
              <DialogTitle>Review Details</DialogTitle>;
              <DialogDescription>;
                Review submitted on{" "}
                {format(new Date(selectedReview.created_at), "MMMM d, yyyy")}
              </DialogDescription>;
            </DialogHeader>;
            <div className="space-y-4">;
              <div className="flex items-center justify-between">;
                <div className="flex items-center gap-2">;
                  <Avatar>;
                    {selectedReview.reviewer_profile?.avatar_url ? (;
                      <AvatarImage;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                        src={selectedReview.reviewer_profile.avatar_url}
                        alt={selectedReview.reviewer_profile.display_name || ""}
                      />;
                    ) : (;
                      <AvatarFallback>;
                        {selectedReview.reviewer_profile?.display_name;
                          ? getInitials(selectedReview.reviewer_profile.display_name);
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>;
                    )}
<<<<<<< HEAD
                  </Avatar>
                  <div>
                    <div className="font-medium&quot;>
                      {selectedReview.is_anonymous
                        ? &quot;Anonymous&quot;
                        : selectedReview.reviewer_profile?.display_name || &quot;User&quot;}
                    </div>
                    <Badge variant=&quot;outline" className={getStatusColor(selectedReview.status as ReviewStatus)}>
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
                      variant={selectedReview.would_work_again ? &quot;default&quot; : &quot;secondary"}
                      className={selectedReview.would_work_again ? "bg-green-100 text-green-800&quot; : &quot;bg-gray-100 text-gray-800&quot;}
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
=======
                  </Avatar>;
                  <div>;
                    <div className="font-medium">;
                      {selectedReview.is_anonymous;
                        ? "Anonymous";
                        : selectedReview.reviewer_profile?.display_name || "User"}
                    </div>;
                    <Badge variant="outline" className={getStatusColor(selectedReview.status as ReviewStatus)}>;
                      {selectedReview.status}
                    </Badge>;
                  </div>;
                </div>;
                <div>{renderStars(selectedReview.rating)}</div>;
              </div>;
              <div className="border rounded-md p-3 bg-muted/20">;
                <p className="whitespace-pre-wrap">{selectedReview.review_text}</p>;
              </div>;
              <div className="space-y-2">;
                <h4 className="text-sm font-medium">Additional Ratings</h4>;
                <div className="flex flex-wrap gap-2">;
                  {selectedReview.communication_rating && (;
                    <Badge variant="outline">;
                      Communication: {selectedReview.communication_rating}/5;
                    </Badge>;
                  )}
                  {selectedReview.quality_rating && (;
                    <Badge variant="outline">;
                      Quality: {selectedReview.quality_rating}/5;
                    </Badge>;
                  )}
                  {selectedReview.timeliness_rating && (;
                    <Badge variant="outline">;
                      Timeliness: {selectedReview.timeliness_rating}/5;
                    </Badge>;
                  )}
                  {selectedReview.would_work_again !== undefined && (;
                    <Badge;
                      variant={selectedReview.would_work_again ? "default" : "secondary"}
                      className={selectedReview.would_work_again ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                    >;
                      {selectedReview.would_work_again ? "Would work again" : "Would not work again"}
                    </Badge>;
                  )}
                </div>;
              </div>;
              {selectedReview.report_count > 0 && (;
                <div className="bg-red-50 border border-red-200 rounded-md p-3">;
                  <h4 className="text-sm font-medium text-red-800">Reports: {selectedReview.report_count}</h4>;
                  <p className="text-sm text-red-700">;
                    This review has been reported by users and may need investigation.;
                  </p>;
                </div>;
              )}
            </div>;
            <DialogFooter>;
              {selectedReview.status === "pending" && (;
                <>;
                  <Button;
                    variant="destructive";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    onClick={() => handleReject(selectedReview.id)}
                    disabled={isPending}
                  >;
                    Reject;
                  </Button>;
                  <Button;
                    onClick={() => handleApprove(selectedReview.id)}
                    disabled={isPending}
                  >;
                    Approve;
                  </Button>;
                </>;
              )}
<<<<<<< HEAD
              {selectedReview.status === &quot;approved&quot; && (
                <Button
                  variant=&quot;destructive&quot;
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: &quot;rejected&quot; })}
=======
              {selectedReview.status === "approved" && (;
                <Button;
                  variant="destructive";
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: "rejected" })}
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  disabled={isPending}
                >;
                  Mark as Rejected;
                </Button>;
              )}
<<<<<<< HEAD
              {selectedReview.status === &quot;rejected&quot; && (
                <Button
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: &quot;approved" })}
=======
              {selectedReview.status === "rejected" && (;
                <Button;
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: "approved" })}
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  disabled={isPending}
                >;
                  Mark as Approved;
                </Button>;
              )}
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      )}
    </>;
  );
}