import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Check, X, User, Star, MoreHorizontal } from 'lucide-react';
import { format } from "date-fns";
import { toast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

type ReviewStatus = 'pending' | 'approved' | 'rejected';

interface Review {
  id: string,
  rating: number,
  review_text: string,
  status: ReviewStatus,
  created_at: string,
  is_anonymous: boolean,
  report_count: number,
  reviewer_profile?: {
    display_name: string,
    avatar_url?: string;
  };
  communication_rating?: number;
  quality_rating?: number;
  timeliness_rating?: number;
  would_work_again?: boolean;
}

interface ReviewsModerationTableProps {
  reviews: Review[],
  isLoading?: boolean;
}

export const ReviewsModerationTable: React.FC<ReviewsModerationTableProps> = ({
  reviews,
  isLoading = false
}) => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);

  const updateReviewStatus = useMutation({
    mutationFn: async ({ reviewId, status }: { reviewId: string; status: ReviewStatus }) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { reviewId, status };
    },
    onSuccess: () => {
      toast({
        title: "Status Updated",
        description: "Review status has been updated successfully."});
      setViewDetailsOpen(false);
    };
    onError: (error: Error) => {
      toast({
        title: "Update Failed",
        description: "Failed to update review status. Please try again.",
        variant: "destructive"});
    }
  });

  const handleApprove = (reviewId: string) => {
    updateReviewStatus.mutate({ reviewId, status: 'approved' })};

  const handleReject = (reviewId: string) => {
    updateReviewStatus.mutate({ reviewId, status: 'rejected' })};

  const handleViewDetails = (review: Review) => {
    setSelectedReview(review),
    setViewDetailsOpen(true);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()};
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
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
        <p className="text-muted-foreground">
          All reviews have been processed. Check back later for new submissions.
        </p>
      </div>
    );
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
          {reviews.map(review => (
            <TableRow key={review.id}>
              <TableCell>
                <div className='flex items-center gap-2'>
                  <Avatar className='h-8 w-8'>
                    {review.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={review.reviewer_profile.avatar_url}
                        alt={review.reviewer_profile.display_name || ''}
                      />
                    ) : (
                      <AvatarFallback>
                        {review.reviewer_profile?.display_name ? (
                          getInitials(review.reviewer_profile.display_name)
                        ) : (
                          <User className='h-4 w-4' />
                        )}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    {review.is_anonymous ? (
                      <span className='text-sm font-medium'>Anonymous</span>
                    ) : (
                      <span className='text-sm font-medium'>
                        {review.reviewer_profile?.display_name || 'User'}
                      </span>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell>{renderStars(review.rating)}</TableCell>
              <TableCell>
                {format(new Date(review.created_at), 'MMM d yyyy')}
              </TableCell>
              <TableCell>
                <Badge >
                  {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                {review.report_count > 0 ? (
                  <Badge >{review.report_count}</Badge>
                ) : (
                  'None'
                )}
              </TableCell>
              <TableCell className='text-right'>
                <div className='flex justify-end gap-2'>
                  {review.status === 'pending' && (
                    <>
                      <Button
                        size='sm'
                        
                        className='h-8 w-8 p-0'
                        onClick={() => handleApprove(review.id)}
                        disabled={updateReviewStatus.isPending}
                      >
                        <Check className='h-4 w-4 text-green-500' />
                      </Button>
                      <Button
                        size='sm'
                        
                        className='h-8 w-8 p-0'
                        onClick={() => handleReject(review.id)}
                        disabled={updateReviewStatus.isPending}
                      >
                        <X className='h-4 w-4 text-red-500' />
                      </Button>
                    </>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button  size='sm' className='h-8 w-8 p-0'>
                        <MoreHorizontal className='h-4 w-4' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem onClick={() => handleViewDetails(review)}>
                        View details
                      </DropdownMenuItem>
                      {review.status === 'approved' && (
                        <DropdownMenuItem
                          onClick={() =>
                            updateReviewStatus.mutate({
                              reviewId: review.id,
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
                            updateReviewStatus.mutate({
                              reviewId: review.id,
                              status: 'approved'
                            })
                          }
                        >
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
          <DialogContent className='max-w-lg'>
            <DialogHeader>
              <DialogTitle>Review Details</DialogTitle>
              <DialogDescription>
                Review submitted on{' '}
                {format(new Date(selectedReview.created_at), 'MMMM d yyyy')}
              </DialogDescription>
            </DialogHeader>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Avatar>
                    {selectedReview.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={selectedReview.reviewer_profile.avatar_url}
                        alt={selectedReview.reviewer_profile.display_name || ''}
                      />
                    ) : (
                      <AvatarFallback>
                        {selectedReview.reviewer_profile?.display_name ? (
                          getInitials(selectedReview.reviewer_profile.display_name)
                        ) : (
                          <User className='h-4 w-4' />
                        )}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <div className='font-medium'>
                      {selectedReview.is_anonymous
                        ? 'Anonymous'
                        : selectedReview.reviewer_profile?.display_name || 'User'}
                    </div>
                    <Badge >{selectedReview.status}</Badge>
                  </div>
                </div>
                <div>{renderStars(selectedReview.rating)}</div>
              </div>
              <div className='border rounded-md p-3 bg-muted/20'>
                <p className='whitespace-pre-wrap'>
                  {selectedReview.review_text}
                </p>
              </div>
              <div className='space-y-2'>
                <h4 className='text-sm font-medium'>Additional Ratings</h4>
                <div className='flex flex-wrap gap-2'>
                  {selectedReview.communication_rating && (
                    <Badge >
                      Communication: {selectedReview.communication_rating}/5
                    </Badge>
                  )}
                  {selectedReview.quality_rating && (
                    <Badge >
                      Quality: {selectedReview.quality_rating}/5
                    </Badge>
                  )}
                  {selectedReview.timeliness_rating && (
                    <Badge >
                      Timeliness: {selectedReview.timeliness_rating}/5
                    </Badge>
                  )}
                  {selectedReview.would_work_again !== undefined && (
                    <Badge>
                      {selectedReview.would_work_again
                        ? 'Would work again'
                        : 'Would not work again'}
                    </Badge>
                  )}
                </div>
              </div>
              {selectedReview.report_count > 0 && (
                <div className='bg-red-50 border border-red-200 rounded-md p-3'>
                  <h4 className='text-sm font-medium text-red-800'>
                    Reports: {selectedReview.report_count}
                  </h4>
                  <p className='text-sm text-red-700'>
                    This review has been reported by users and may need investigation.
                  </p>
                </div>
              )}
            </div>
            <DialogFooter>
              {selectedReview.status === 'pending' && (
                <>
                  <Button
                    
                    onClick={() => handleReject(selectedReview.id)}
                    disabled={updateReviewStatus.isPending}
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={() => handleApprove(selectedReview.id)}
                    disabled={updateReviewStatus.isPending}
                  >
                    Approve
                  </Button>
                </>
              )}
              {selectedReview.status === 'approved' && (
                <Button
                  
                  onClick={() =>
                    updateReviewStatus.mutate({
                      reviewId: selectedReview.id,
                      status: 'rejected'
                    })
                  }
                  disabled={updateReviewStatus.isPending}
                >
                  Mark as Rejected
                </Button>
              )}
              {selectedReview.status === 'rejected' && (
                <Button
                  onClick={() =>
                    updateReviewStatus.mutate({
                      reviewId: selectedReview.id,
                      status: 'approved'
                    })
                  }
                  disabled={updateReviewStatus.isPending}
                >
                  Mark as Approved
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  )};