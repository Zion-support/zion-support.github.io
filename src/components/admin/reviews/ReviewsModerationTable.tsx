=======
import { useState } from "react",
import { useMutation } from "@tanstack/react-query",
import { Check, X, User, Star, MoreHorizontal } from 'lucide-react'
import { format } from "date-fns",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { Review, ReviewStatus } from "@/types/reviews",

import {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
<<<<<<< HEAD
<<<<<<< HEAD
  DialogTitle,
} from '@/components/ui/dialog'
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
interface ReviewsModerationTableProps {
  reviews: Review[]
isLoading: boolean
onRefresh: () => void 
}export function ReviewsModerationTable ({
  reviews
isLoading
onRefresh 
}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null> (null)
const [viewDetailsOpen,  setViewDetailsOpen] = useState (false)
const {
  mutate: updateReviewStatus, isPending 
}= useMutation ({
  mutationFn: async ({
  reviewId
status 
}: {
  reviewId: string
status: ReviewStatus 
}) => {
  const {
  error 
}= await supabase .from ("reviews") .update ({
  status 
}) if (error) throw error
return {
  reviewId, status 
export function ReviewsModerationTable({
  reviews,
  isLoading,
  onRefresh,
}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false)
  const { mutate: updateReviewStatus, isPending } = useMutation({
    mutationFn: async ({
      reviewId,
      status,
    }: {
      reviewId: string
      status: ReviewStatus
    }) => {      const { error } = await supabase
        .from('reviews')
        .update({ status })
        .eq('id', reviewId)
      if (error) throw error
      return { reviewId, status }
    },
    onSuccess: data => {      toast({
        title: 'Review updated',
        description: `Review has been ${data.status}.`,
      })
      onRefresh()
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  DialogTitle} from "@/components/ui/dialog",
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
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
        .from("reviews")
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
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      setViewDetailsOpen(false)
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to update review: ${error.message}`,
<<<<<<< HEAD
<<<<<<< HEAD
        variant: 'destructive',
      })
    },
  })
  const getInitials = (name: string,) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }
        variant: "destructive"})
    }}),
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
        variant: "destructive"})
    }}),
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f


  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  },

<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
        <p className="text-muted-foreground">
          All reviews have been processed. Check back later for new submissions.
        </p>
      </div>
    )
<<<<<<< HEAD
<<<<<<< HEAD
  }
  const handleApprove = (reviewId: string) => {
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    updateReviewStatus({ reviewId, status: 'approved' })
  }
  const handleReject = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: 'rejected' })
  }
  const handleViewDetails = (review: Review) => {
    setSelectedReview(review)
    setViewDetailsOpen(true)
  }
  const renderStars = (rating: number,) => {
    return (
      <div className='flex'>
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}          />
        ))}
      </div>
    )
  }

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
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map(review => (            <TableRow key={review.id}>
              <TableCell>
                <div className='flex items-center gap-2'>
                  <Avatar className='h-8 w-8'>
                    {review.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={review.reviewer_profile.avatar_url}
<<<<<<< HEAD
                        alt={review.reviewer_profile.display_name |''}                      />
  }
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  const handleApprove = (reviewId: string) => {
                        alt={review.reviewer_profile.display_name || ''}                      />
    updateReviewStatus({ reviewId, status: "approved" })
=======
    updateReviewStatus({ reviewId, status: "approved" })
  },

  const handleReject = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: "rejected" })
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  },

  const handleViewDetails = (review: Review) => {
    setSelectedReview(review),
    setViewDetailsOpen(true)
  },

<<<<<<< HEAD
  const handleViewDetails = (review: Review) => {
    setSelectedReview(review),
    setViewDetailsOpen(true)
  },

                      <span className="text-sm font-medium">
                        {review.reviewer_profile?.display_name || "User"}


                      </span>
                  </Avatar>;
                  <div>;
                    {review && review.is_anonymous ? (;
                      <span className='text-sm font-medium'>Anonymous</span>;
                    ) : (;
                      <span className='text-sm font-medium'>;
                        {review && review.reviewer_profile?.display_name || 'User'}
                      </span>;
                    )}
                  </div>;
                </div>;
              </TableCell>;
              <TableCell>{renderStars(review && review.rating)}</TableCell>;
              <TableCell>;
                {format(new Date(review && review.created_at), 'MMM d, yyyy')}
              </TableCell>;
              <TableCell>;
                <Badge variant='outline'>;
                  {review && review.status.charAt(0).toUpperCase() +;
                    review && review.status.slice(1)}
                </Badge>;
              </TableCell>;
              <TableCell>;
                {review && review.report_count > 0 ? (;
                  <Badge variant='destructive'>{review && review.report_count}</Badge>;
                ) : (;
                  'None';
                )}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    updateReviewStatus({ reviewId, status: "approved" })
  },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

                          onClick={() =>;
                            updateReviewStatus({;
                              reviewId: review && review.id,;
                              status: 'rejected',;
                            });

                          }
                        >;
                          Mark as rejected;
                        </DropdownMenuItem>;
                      )}
                      {review && review.status === 'rejected' && (;
                        <DropdownMenuItem

                          onClick={() =>;
                            updateReviewStatus({;
                              reviewId: review && review.id,;
                              status: 'approved',;
                            });

                          }
                        >                          Mark as approved;
                        </DropdownMenuItem>;
                      )}
            <TableHead > Reviewer</TableHead>;
            <TableHead > Rating</TableHead>;
            <TableHead > Date</TableHead>;
            <TableHead > Status</TableHead>;
            <TableHead > Reports</TableHead>;
            <TableHead className='text - right'>Actions</TableHead>;
=======
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
import { useState } from "react",;
import { useMutation } from "@tanstack/react-query",;
import { Check, X, User, Star, MoreHorizontal } from 'lucide-react';
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
                        alt={review.reviewer_profile.display_name || ""}
                      />
=======
                        alt={review.reviewer_profile.display_name || ""}
                      />
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                    ) : (
                      <AvatarFallback>
                        {review.reviewer_profile?.display_name
                          ? getInitials(review.reviewer_profile.display_name)
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
<<<<<<< HEAD
=======
                        alt={review.reviewer_profile.display_name || ''}                      />) : (
                      <AvatarFallback>;
                        {review.reviewer_profile?.display_name ? (
                          get_initials (review.reviewer_profile.display_name)) : (
                          <User className='h - 4 w - 4' />)}
                      </AvatarFallback>)}
                  </Avatar>;
                  <div>;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                    {review.is_anonymous ? (
                      <span className="text-sm font-medium">Anonymous</span>
                    ) : (
                      <span className='text-sm font-medium'>
                        {review.reviewer_profile?.display_name |'User'}
                      <span className="text-sm font-medium">
                        {review.reviewer_profile?.display_name || "User"}
=======
                    {review.is_anonymous ? (
                      <span className="text-sm font-medium">Anonymous</span>
                    ) : (
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                      </span>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell>{renderStars(review.rating)}</TableCell>
              <TableCell>
                {format(new Date(review.created_at), "MMM d, yyyy")}
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                >
                  {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                {review.report_count > 0 ? (
                  <Badge variant="destructive">{review.report_count}</Badge>
                ) : (
                  "None"
                )}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  {review.status === "pending" && (
                    <>
                      <Button
<<<<<<< HEAD
                        size='sm'
                        variant='outline'
                        className='h-8 w-8 p-0'
                        onClick={() => handleApprove(review.id)}
                        disabled={isPending}                      >
                        <Check className='h-4 w-4 text-green-500' />
                      </Button>
                      <Button
                        size='sm'
                        variant='outline'
                        className='h-8 w-8 p-0'
                        onClick={() => handleReject(review.id)}
                        disabled={isPending}                      >
                        <X className='h-4 w-4 text-red-500' />
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => handleApprove(review.id)}
                        disabled={isPending}
                      >
                        <Check className="h-4 w-4 text-green-500" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => handleReject(review.id)}
                        disabled={isPending}
                      >
                        <X className="h-4 w-4 text-red-500" />
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                      </Button>
                    </>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleViewDetails(review)}>
                        View details
                      </DropdownMenuItem>
<<<<<<< HEAD
                      {review.status === 'approved' && (
                        <DropdownMenuItem
                          onClick={() =>
                            updateReviewStatus({
                              reviewId: review.id
                              status: 'rejected'
                            })
                          }
                        >
                          Mark as rejected
                        </DropdownMenuItem>
                      )}
                      {review.status === 'rejected' && (
                        <DropdownMenuItem
                          onClick={() =>
                            updateReviewStatus({
                              reviewId: review.id
                              status: 'approved'
                            })
                          }
                        >                          Mark as approved
                        </DropdownMenuItem>
                      {review.status === "approved" && (
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: "rejected" })}>
                          Mark as rejected
                        </DropdownMenuItem>
                      )}
                      {review.status === "rejected" && (
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: "approved" })}>
                          Mark as approved
                        </DropdownMenuItem>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Review Details</DialogTitle>
              <DialogDescription>
                Review submitted on{" "}
                {format(new Date(selectedReview.created_at), "MMMM d, yyyy")}
              </DialogDescription>
            </DialogHeader>
<<<<<<< HEAD
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  <Avatar>
                    {selectedReview.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={selectedReview.reviewer_profile.avatar_url}
<<<<<<< HEAD
<<<<<<< HEAD
                        alt={selectedReview.reviewer_profile.display_name |''}                      />
                        alt={selectedReview.reviewer_profile.display_name || ''}                      />
=======


                        alt={selectedReview.reviewer_profile.display_name || ''}                      />


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                    ) : (
                      <AvatarFallback>
                        {selectedReview.reviewer_profile?.display_name ? (
                          getInitials(
                            selectedReview.reviewer_profile.display_name
                          )
                        ) : (
                          <User className='h-4 w-4' />
                        )}
                      </AvatarFallback>
=======
                        alt={selectedReview.reviewer_profile.display_name || ""}
                      />;
                    ) : (;
                      <AvatarFallback>;
                        {selectedReview.reviewer_profile?.display_name;
                          ? getInitials(selectedReview.reviewer_profile.display_name);
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                    )}
                  </Avatar>
                  <div>
                    <div className="font-medium">
                      {selectedReview.is_anonymous
<<<<<<< HEAD
                        ? 'Anonymous'
                        : selectedReview.reviewer_profile?.display_name |
                          'User'}
                        ? "Anonymous"
                        : selectedReview.reviewer_profile?.display_name || "User"}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                    </div>
                    <Badge variant="outline">
                      {selectedReview.status}
                    </Badge>
                  </div>
                </div>
                <div>{renderStars(selectedReview.rating)}</div>
              </div>
<<<<<<< HEAD
              <div className='border rounded-md p-3 bg-muted/20'>
                <p className='whitespace-pre-wrap'>
                  {selectedReview.review_text}
                </p>
              </div>
              <div className='space-y-2'>
                <h4 className='text-sm font-medium'>Additional Ratings</h4>
                <div className='flex flex-wrap gap-2'>

              <div className="border rounded-md p-3 bg-muted/20">
                <p className="whitespace-pre-wrap">{selectedReview.review_text}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Additional Ratings</h4>
                <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  {selectedReview.communication_rating && (
                    <Badge variant="outline">
                      Communication: {selectedReview.communication_rating}/5
                    </Badge>
                  )}
                  {selectedReview.quality_rating && (
                    <Badge variant="outline">
                      Quality: {selectedReview.quality_rating}/5
<<<<<<< HEAD
                    </Badge>
                  )}
                  {selectedReview.timeliness_rating && (
                    <Badge variant="outline">
                      Timeliness: {selectedReview.timeliness_rating}/5
                    </Badge>
                  )}
                  {selectedReview.would_work_again !== undefined && (
                    <Badge
                      variant={
                        selectedReview.would_work_again
                          ? 'default'
                          : 'secondary'
                      }                    >
                      {selectedReview.would_work_again
                        ? 'Would work again'
                        : 'Would not work again'}
                      variant={selectedReview.would_work_again ? "default" : "secondary"}
                    >
                      {selectedReview.would_work_again ? "Would work again" : "Would not work again"}
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                    </Badge>
                  )}
                  {selectedReview.timeliness_rating && (
                    <Badge variant="outline">
                      Timeliness: {selectedReview.timeliness_rating}/5
                    </Badge>
                  )}
                  {selectedReview.would_work_again !== undefined && (
                    <Badge
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    </Badge>
                  )}
                </div>
              </div>
              {selectedReview.report_count > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3">
                  <h4 className="text-sm font-medium text-red-800">Reports: {selectedReview.report_count}</h4>
                  <p className="text-sm text-red-700">
                    This review has been reported by users and may need investigation.
                  </p>
                </div>
              )}
            </div>
            <DialogFooter>
              {selectedReview.status === "pending" && (
                <>
                  <Button
<<<<<<< HEAD
                    variant='destructive'
                    onClick={() => handleReject(selectedReview && selectedReview.id)}
                    disabled={isPending}                  >;
                  <Button
                    onClick = {() => handleApprove(selectedReview.id),}
                    disabled = {isPending,}
                  >
                    Approve
                  </Button>
                </>
              )}
              {selectedReview.status === 'approved' && (
                <Button
                  variant='destructive'
                  onClick={() =>
                    updateReviewStatus({
                      reviewId: selectedReview.id
                      status: 'rejected'
                    })
                  }
                  disabled={isPending}                >
                  Mark as Rejected
                </Button>
              )}
              {selectedReview.status === 'rejected' && (
                <Button
                  onClick={() =>
                    updateReviewStatus({
                      reviewId: selectedReview.id
                      status: 'approved'
                    })
                  }
                  disabled={isPending}                >
                  Mark as Approved
                </Button>
                    variant="destructive"
                    onClick={() => handleReject(selectedReview.id)}
                    disabled={isPending}
                  >;
                    Reject;
                  </Button>;
                  <Button
                    onClick = {() => handleApprove(selectedReview && selectedReview.id),}
                    disabled = {isPending,}
                  >;
                    Approve;
                  </Button>;
                </>;
              )}
              {selectedReview && selectedReview.status === 'approved' && (;
                <Button
                  variant='destructive'

                  onClick={() =>;
                    updateReviewStatus({;
                      reviewId: selectedReview && selectedReview.id,;
                      status: 'rejected',;
                    });

                  }
                  disabled={isPending}                >;
                  Mark as Rejected;
                </Button>;
              )}
              {selectedReview && selectedReview.status === 'rejected' && (;
                <Button

                  onClick={() =>;
                    updateReviewStatus({;
                      reviewId: selectedReview && selectedReview.id,;
                      status: 'approved',;
                    });

                  }
                  disabled={isPending}                >;
                  Mark as Approved;
                </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



              )}
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      )}
<<<<<<< HEAD
    </>
  )
}
})
  return (<div className="space-y-4"> <div className="h-12 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> </div> if (reviews.length === 0) {"
  return (<div className="py-10 text-center"> <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3> <p className="text-muted-foreground" > All reviews have been processed. Check back later for new submissions. </p> </div>
}
  return (<div className="flex"> {
  [1, 2, 3,  4, 5].map ( (star) => (<Star key= {
  star
}/>) )
}</div>)
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  [1, 2, 3,  4, 5].map ( (star) => (<Star key= {;
  star ;
}/>) ) ;
}</div>) ;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
};"
return (<> <Table> <TableHeader> <TableRow> <TableHead>Reviewer</TableHead> <TableHead>Rating</TableHead> <TableHead>Date</TableHead> <TableHead>Status</TableHead> <TableHead>Reports</TableHead> <TableHead className="text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  reviews.map ( (review) => (<TableRow key= {
  review.id "
}> <TableCell> <div className="flex items-center gap-2"> <Avatar className="h-8 w-8"> {
  review.reviewer profile?.avatar url ? (<AvatarImage src= {
  review.reviewer profile.avatar url
}alt= {"
  review.reviewer profile.display name |""
}/>) : (<AvatarFallback> {"
  review.reviewer profile?.display name ? getInitials (review.reviewer profile.display name) : <User className=" h-4 w-4"/>
}</AvatarFallback>) "
}</Avatar> <div>) : (<span className=" text-sm font-medium"> {"
  review.reviewer profile?.display name |" User"
}</span>)
}</div> </div> </TableCell> <TableCell> {
  renderStars (review.rating) "
}</TableCell> <TableCell> </TableCell> <TableCell> <Badge variant=" outline"> {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  review.status.charAt (0) .toUpperCase () + review.status.slice (1) "
}</Badge> </TableCell> <TableCell>) : (" None") "
}</TableCell> <Button size=" sm"variant=" outline"className=" h-8 w-8 p-0"onClick={
  () => handleApprove (review.id)
}disabled= {
  isPending "
}> <Check className=" h-4 w-4 text-green-500"/> </Button> <Button > <X className=" h-4 w-4 text-red-500"/> </Button> </>) "
}<DropdownMenu> <DropdownMenuTrigger asChild> <Button variant=" ghost"size=" sm"className=" h-8 w-8 p-0"> <MoreHorizontal className=" h-4 w-4"/> </Button> </DropdownMenuTrigger> Mark as approved </DropdownMenuItem>)
}</DropdownMenuContent> </DropdownMenu> </div> </TableCell> </TableRow>) ) "
}</TableBody> </Table> </DialogDescription> </DialogHeader> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div className=" flex items-center gap-2"> <Avatar> {
  selectedReview.reviewer profile?.avatar url ? (<AvatarImage src= {
  selectedReview.reviewer profile.avatar url
}alt= {"
  selectedReview.reviewer profile.display name |""
}/>) : (<AvatarFallback> {"
  selectedReview.reviewer profile?.display name ? getInitials (selectedReview.reviewer profile.display name) : <User className="h-4 w-4"/>
<<<<<<< HEAD
}</AvatarFallback>)
}</AvatarFallback>) 
=======


}</AvatarFallback>) 


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}</Avatar> <div> </Badge> </div> </div> <div> {
  renderStars (selectedReview.rating) "
}</div> </div> <div className="border rounded-md p-3 bg-muted/20"> <p className="whitespace-pre-wrap"> {
  selectedReview.review text "
}</p> </div> <div className="space-y-2"> <h4 className="text-sm font-medium">Additional Ratings</h4> Timeliness: {
  selectedReview.timeliness rating
}/5 </Badge>)
}{
  selectedReview.would work again !== undefined && (<Badge variant= {"
  selectedReview.would work again ? " default": " secondary"
}> </Badge>)
}</div> </div> {"
  selectedReview.report count > 0 && (<div className="bg-red-50 border border-red-200 rounded-md p-3"> <h4 className="text-sm font-medium text-red-800">Reports: {
  selectedReview.report count "
}</h4> <p className="text-sm text-red-700"> This review has been reported by users and may need investigation. </p> </div>) "
}</div> <DialogFooter> <Button variant=" destructive" onClick={
  () => handleReject (selectedReview.id)
}disabled= {
  isPending
}> Reject </Button> <Button onClick={
  () => handleApprove (selectedReview.id)
}disabled= {
  isPending
}> Approve </Button> </>)
}> Mark as Rejected </Button>)
}> Mark as Approved </Button>)
}</DialogFooter> </DialogContent> </Dialog>)
}</>)
}"}
=======
    </>;
  );
<<<<<<< HEAD
<<<<<<< HEAD



  review.status.char_at (0) .toUpperCase () + review.status.slice (1) ";
}</Badge> </TableCell> <TableCell>) : (" None") ";
}</TableCell> <Button size=" sm"variant=" outline"className=" h - 8 w - 8 p - 0"on_click={
  () => handle_approve (review.id);
}disabled= {
  is_pending ";
}> <Check className=" h - 4 w - 4 text - green - 500"/> </Button> <Button > <X className=" h - 4 w - 4 text - red - 500"/> </Button> </>) ";
}<DropdownMenu> <DropdownMenuTrigger as_child> <Button variant=" ghost"size=" sm"className=" h - 8 w - 8 p - 0"> <MoreHorizontal className=" h - 4 w - 4"/> </Button> </DropdownMenuTrigger> Mark as approved </DropdownMenuItem>);
}</DropdownMenuContent> </DropdownMenu> </div> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </DialogDescription> </DialogHeader> <div className=" space - y-4"> <div className=" flex items - center justify - between"> <div className=" flex items - center gap - 2"> <Avatar> {
  selected_review.reviewer profile?.avatar url ? (<AvatarImage src= {
  selected_review.reviewer profile.avatar url;
}alt= {";
  selected_review.reviewer profile.display name || "";
}/>) : (<AvatarFallback> {";
  selected_review.reviewer profile?.display name ? get_initials (selected_review.reviewer profile.display name) : <User className="h - 4 w - 4"/>;
}</AvatarFallback>);
}</Avatar> <div> </Badge> </div> </div> <div> {
  render_stars (selected_review.rating) ";
}</div> </div> <div className="border rounded - md p - 3 bg - muted / 20"> <p className="whitespace - pre - wrap"> {
  selected_review.review text ";
}</p> </div> <div className="space - y-2"> <h4 className="text - sm font - medium">Additional Ratings</h4> Timeliness: {
  selected_review.timeliness rating;
}/5 </Badge>);
}{
  selected_review.would work again !== undefined && (<Badge variant= {";
  selected_review.would work again ? " default": " secondary";
}> </Badge>);
}</div> </div> {";
  selected_review.report count > 0 && (<div className="bg - red - 50 border border - red - 200 rounded - md p - 3"> <h4 className="text - sm font - medium text - red - 800">Reports: {
  selected_review.report count ";
}</h4> <p className="text - sm text - red - 700"> This review has been reported by users and may need investigation. </p> </div>) ";
}</div> <DialogFooter> <Button variant=" destructive" on_click={
  () => handle_reject (selected_review.id);
}disabled= {
  is_pending;
}> Reject </Button> <Button on_click={
  () => handle_approve (selected_review.id);
}disabled= {
  is_pending;
}> Approve </Button> </>);
}> Mark as Rejected </Button>);
}> Mark as Approved </Button>);
}</DialogFooter> </DialogContent> </Dialog>);
}</>);
}"}
}
=======
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
