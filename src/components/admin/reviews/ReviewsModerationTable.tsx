<<<<<<< HEAD
import { useState } from "react",;
import { useMutation } from "@tanstack/react-query",;
import { Check, X, User, Star, MoreHorizontal } from 'lucide-react';
import { format } from "date-fns",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { Review, ReviewStatus } from "@/types/reviews",;
;
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
;
interface ReviewsModerationTableProps {;
  reviews:Review[],;
  isLoading:boolean,;
  onRefresh:() => void;
}
;
export function ReviewsModerationTable({;
  reviews,;
  isLoading,;
  onRefresh} ReviewsModerationTableProps) {;
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),;
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false),;
;
  const { mutate:updateReviewStatus, isPending } = useMutation({;
    mutationFn:async ({;
      reviewId,;
      status} {;
      reviewId:string,;
      status:ReviewStatus;
    }) => {;
      const { error } = await supabase;
        .from("reviews");
        .update({ status });
        .eq("id", reviewId),;
;
      if (error) throw error,;
      return { reviewId, status },;
    },;
    onSuccess:(data) => {;
      toast({;
        title:"Review updated",;
        description:`Review has been ${data.status}.`}),;
      onRefresh(),;
      setViewDetailsOpen(false),;
    },;
    onError:(error:Error) => {;
      toast({;
        title:"Error",;
        description:`Failed to update review:${error.message}`,;
        variant:"destructive"}),;
    }}),;
;
;
  const getInitials = (name:string) => {;
    return name;
      .split(" ");
      .map((n) => n[0]);
      .join("");
      .toUpperCase();
  },;
;
  if (isLoading) {;
    return (;
      <div className="space-y-4">;
        <div className="h-12 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
      </div>;
    ),;
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
    ),;
  }
;
  const handleApprove = (reviewId:string) => {;
    updateReviewStatus({ reviewId, status:"approved" }),;
  },;
;
  const handleReject = (reviewId:string) => {;
    updateReviewStatus({ reviewId, status:"rejected" }),;
  },;
;
  const handleViewDetails = (review:Review) => {;
    setSelectedReview(review),;
    setViewDetailsOpen(true);
  },;
;
  const renderStars = (rating:number) => {;
    return (;
      <div className="flex">;
        {[1, 2, 3, 4, 5].map((star) => (;
          <Star;
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" :"text-gray-300"}`}
          />;
        ))}
      </div>;
    ),;
  },;
;
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
                      />;
                    ) :(;
                      <AvatarFallback>;
                        {review.reviewer_profile?.display_name;
                          ? getInitials(review.reviewer_profile.display_name);
                          :<User className="h-4 w-4" />}
                      </AvatarFallback>;
                    )}
                  </Avatar>;
                  <div>;
                    {review.is_anonymous ? (;
                      <span className="text-sm font-medium">Anonymous</span>;
                    ) :(;
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
                >;
                  {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                </Badge>;
              </TableCell>;
              <TableCell>;
                {review.report_count > 0 ? (;
                  <Badge variant="destructive">{review.report_count}</Badge>;
                ) :(;
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
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId:review.id, status:"rejected" })}>;
                          Mark as rejected;
                        </DropdownMenuItem>;
                      )}
                      {review.status === "rejected" && (;
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId:review.id, status:"approved" })}>;
                          Mark as approved;
                        </DropdownMenuItem>;
=======
import { useState } from "react",
import { useMutation } from "@tanstack/react-query",
import { Check, X, User, Star, MoreHorizontal } from 'lucide-react'
import { format } from "date-fns",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { Review, ReviewStatus } from "@/types/reviews",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle} from "@/components/ui/dialog",import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",interface ReviewsModerationTableProps {
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
        .eq("id", reviewId),
      if (error) throw error,
      return { reviewId, status }
    },
    onSuccess: (data) => {
      toast({
        title: "Review updated",
        description: `Review has been ${data.status}.`}),
      onRefresh(),
      setViewDetailsOpen(false)      onRefresh();
      setViewDetailsOpen(false)
    },
    onError: (error: Error) => {
      toast({
        title: &quot;Error&quot;,
        description: `Failed to update review: ${error.message}`,
        variant: "destructive"})
    }})    }});

  const getInitials = (name: string) => {
    return name
      .split(&quot; &quot;)
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  },
  if (isLoading) {return (
      <div className="space-y-4">
        <div className="h-12 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
      </div>
    )
  }
  if (reviews.length === 0) {return (
      <div className="py-10 text-center">
        <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3>
        <p className="text-muted-foreground&quot;>
          All reviews have been processed. Check back later for new submissions.
        </p>
      </div>
    )
  }

  const handleApprove = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: "approved" })
  },

  const handleReject = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: "rejected" })
  }  };

  const handleViewDetails = (review: Review) => {
    setSelectedReview(review),
    setViewDetailsOpen(true)
  },
  const renderStars = (rating: number) => {return (_<div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star,
key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400&quot; : &quot;text-gray-300"}`}          />
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
          {reviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    {review.reviewerprofile?.avatarurl ? (
                      <AvatarImage,
src={review.reviewerprofile.avatarurl}
                        alt={review.reviewerprofile.displayname || ""}
                      />
                    ) : (
                      <AvatarFallback>
                        {review.reviewerprofile?.displayname
                          ? getInitials(review.reviewerprofile.displayname)
                          : <User className=&quot;h-4 w-4&quot; />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    {review.isanonymous ? (
                      <span className=&quot;text-sm font-medium&quot;>Anonymous</span>                    ) : (
                      <span className=&quot;text-sm font-medium&quot;>
                        {review.reviewerprofile?.displayname || &quot;User&quot}
                      </span>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell>{renderStars(review.rating)}</TableCell>
              <TableCell>
                {format(new Date(review.createdat), &quot;MMM d, yyyy&quot;)}              </TableCell>
              <TableCell>
                <Badge,
variant=&quot;outline&quot;
                >
                  {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                {review.reportcount > 0 ? (
                  <Badge variant=&quot;destructive&quot;>{review.reportcount}</Badge>                ) : (
                  &quot;None&quot;
                )}
              </TableCell>
              <TableCell className=&quot;text-right&quot;>
                <div className=&quot;flex justify-end gap-2&quot;>
                  {review.status === &quot;pending&quot; && (
                    <>                      <Button,
size=&quot;sm&quot;
                        variant=&quot;outline&quot;
                        className=&quot;h-8 w-8 p-0&quot;
                        onClick={() => handleApprove(review.id)}
                        disabled={isPending}
                      >
                        <Check className=&quot;h-4 w-4 text-green-500&quot; />
                      </Button>
                      <Button,
size=&quot;sm&quot;
                        variant=&quot;outline&quot;
                        className=&quot;h-8 w-8 p-0&quot;
                        onClick={() => handleReject(review.id)}
                        disabled={isPending}                      >
                        <X className=&quot;h-4 w-4 text-red-500&quot; />
                      </Button>
                    </>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button,
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
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: &quot;rejected&quot })}>
                          Mark as rejected
                        </DropdownMenuItem>
                      )}
                      {review.status === &quot;rejected&quot; && (
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: &quot;approved&quot })}>                          Mark as approved
                        </DropdownMenuItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                      )}
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
              </TableCell>;
            </TableRow>;
          ))}
<<<<<<< HEAD
        </TableBody>;
      </Table>;
;
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
;
            <div className="space-y-4">;
              <div className="flex items-center justify-between">;
                <div className="flex items-center gap-2">;
                  <Avatar>;
                    {selectedReview.reviewer_profile?.avatar_url ? (;
                      <AvatarImage;
                        src={selectedReview.reviewer_profile.avatar_url}
                        alt={selectedReview.reviewer_profile.display_name || ""}
                      />;
                    ) :(;
                      <AvatarFallback>;
                        {selectedReview.reviewer_profile?.display_name;
                          ? getInitials(selectedReview.reviewer_profile.display_name);
                          :<User className="h-4 w-4" />}
                      </AvatarFallback>;
                    )}
                  </Avatar>;
                  <div>;
                    <div className="font-medium">;
                      {selectedReview.is_anonymous;
                        ? "Anonymous";
                        :selectedReview.reviewer_profile?.display_name || "User"}
                    </div>;
                    <Badge variant="outline">;
                      {selectedReview.status}
                    </Badge>;
                  </div>;
                </div>;
                <div>{renderStars(selectedReview.rating)}</div>;
              </div>;
;
              <div className="border rounded-md p-3 bg-muted/20">;
                <p className="whitespace-pre-wrap">{selectedReview.review_text}</p>;
              </div>;
;
              <div className="space-y-2">;
                <h4 className="text-sm font-medium">Additional Ratings</h4>;
                <div className="flex flex-wrap gap-2">;
                  {selectedReview.communication_rating && (;
                    <Badge variant="outline">;
                      Communication:{selectedReview.communication_rating}/5;
                    </Badge>;
                  )}
                  {selectedReview.quality_rating && (;
                    <Badge variant="outline">;
                      Quality:{selectedReview.quality_rating}/5;
                    </Badge>;
                  )}
                  {selectedReview.timeliness_rating && (;
                    <Badge variant="outline">;
                      Timeliness:{selectedReview.timeliness_rating}/5;
                    </Badge>;
                  )}
                  {selectedReview.would_work_again !== undefined && (;
                    <Badge;
                      variant={selectedReview.would_work_again ? "default" :"secondary"}
                    >;
                      {selectedReview.would_work_again ? "Would work again" :"Would not work again"}
                    </Badge>;
                  )}
                </div>;
              </div>;
;
              {selectedReview.report_count > 0 && (;
                <div className="bg-red-50 border border-red-200 rounded-md p-3">;
                  <h4 className="text-sm font-medium text-red-800">Reports:{selectedReview.report_count}</h4>;
                  <p className="text-sm text-red-700">;
                    This review has been reported by users and may need investigation.;
                  </p>;
                </div>;
              )}
            </div>;
;
            <DialogFooter>;
              {selectedReview.status === "pending" && (;
                <>;
                  <Button;
                    variant="destructive";
                    onClick={() => handleReject(selectedReview.id)}
                    disabled={isPending}
                  >;
                    Reject;
                  </Button>;
                  <Button;
                    onClick={() => handleApprove(selectedReview.id)}
=======
        </TableBody>
      </Table>

      {selectedReview && (
        <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>
          <DialogContent className=&quot;max-w-lg&quot;>
            <DialogHeader>
              <DialogTitle>Review Details</DialogTitle>
              <DialogDescription>
                Review submitted on{&quot; &quot}
                {format(new Date(selectedReview.createdat), &quot;MMMM d, yyyy&quot;)}              </DialogDescription>
            </DialogHeader>

            <div className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-center justify-between&quot;>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Avatar>
                    {selectedReview.reviewerprofile?.avatarurl ? (
                      <AvatarImage,
src={selectedReview.reviewerprofile.avatarurl}
                        alt={selectedReview.reviewerprofile.displayname || ""}
                      />
                    ) : (
                      <AvatarFallback>
                        {selectedReview.reviewerprofile?.displayname
                          ? getInitials(selectedReview.reviewerprofile.displayname)
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <div className="font-medium&quot;>
                      {selectedReview.isanonymous
                        ? &quot;Anonymous&quot;
                        : selectedReview.reviewerprofile?.displayname || &quot;User&quot}
                    </div>
                    <Badge variant=&quot;outline">
                      {selectedReview.status}                    </Badge>
                  </div>
                </div>
                <div>{renderStars(selectedReview.rating)}</div>
              </div>

              <div className="border rounded-md p-3 bg-muted/20">
                <p className="whitespace-pre-wrap">{selectedReview.reviewtext}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Additional Ratings</h4>
                <div className="flex flex-wrap gap-2&quot;>
                  {selectedReview.communicationrating && (
                    <Badge variant=&quot;outline&quot;>
                      Communication: {selectedReview.communicationrating}/5
                    </Badge>
                  )}
                  {selectedReview.qualityrating && (
                    <Badge variant=&quot;outline&quot;>
                      Quality: {selectedReview.qualityrating}/5
                    </Badge>
                  )}
                  {selectedReview.timelinessrating && (
                    <Badge variant=&quot;outline&quot;>                      Timeliness: {selectedReview.timelinessrating}/5
                    </Badge>
                  )}
                  {selectedReview.wouldwork_again !== undefined && (
                    <Badge,
variant={selectedReview.wouldwork_again ? &quot;default&quot; : &quot;secondary&quot}
                    >
                      {selectedReview.wouldwork_again ? &quot;Would work again&quot; : &quot;Would not work again"}                    </Badge>
                  )}
                </div>
              </div>

              {selectedReview.reportcount > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3">
                  <h4 className="text-sm font-medium text-red-800">Reports: {selectedReview.reportcount}</h4>
                  <p className="text-sm text-red-700&quot;>
                    This review has been reported by users and may need investigation.
                  </p>
                </div>
              )}
            </div>

            <DialogFooter>
              {selectedReview.status === &quot;pending&quot; && (
                <>                  <Button,
variant=&quot;destructive&quot;
                    onClick={() => handleReject(selectedReview.id)}
                    disabled={isPending}
                  >
                    Reject
                  </Button>
                  <Button,
onClick={_() => handleApprove(selectedReview.id)}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    disabled={isPending}
                  >;
                    Approve;
                  </Button>;
                </>;
              )}
<<<<<<< HEAD
              {selectedReview.status === "approved" && (;
                <Button;
                  variant="destructive";
                  onClick={() => updateReviewStatus({ reviewId:selectedReview.id, status:"rejected" })}
                  disabled={isPending}
                >;
                  Mark as Rejected;
                </Button>;
              )}
              {selectedReview.status === "rejected" && (;
                <Button;
                  onClick={() => updateReviewStatus({ reviewId:selectedReview.id, status:"approved" })}
                  disabled={isPending}
                >;
                  Mark as Approved;
                </Button>;
=======
              {selectedReview.status === &quot;approved&quot; && (
                <Button,
variant=&quot;destructive&quot;
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: &quot;rejected&quot })}
                  disabled={isPending}                >
                  Mark as Rejected
                </Button>
              )}
              {selectedReview.status === &quot;rejected&quot; && (
                <Button,
onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: &quot;approved" })}
                  disabled={isPending}                >
                  Mark as Approved
                </Button>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              )}
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      )}
<<<<<<< HEAD
    </>;
  ),;
=======
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}