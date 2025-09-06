import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Check, X, User, Star, MoreHorizontal } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Review, ReviewStatus } from '@/types/reviews';

import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
} from '@/components/ui/dialog';
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
interface ReviewsModerationTableProps {;
  reviews: Review[];
isLoading: boolean;
onRefresh: () => void ;
}export function ReviewsModerationTable(): any ({;
  reviews;
isLoading;
onRefresh ;
}: ReviewsModerationTableProps) {;
  const [selectedReview, setSelectedReview] = useState<Review | null> (null);
const [viewDetailsOpen,  setViewDetailsOpen] = useState (false);
const {;
  mutate: updateReviewStatus, isPending ;
}= useMutation ({;
  mutationFn: async ({;
  reviewId;
status ;
}: {;
  reviewId: string;
status: ReviewStatus ;
}) => {;
  const {;
  error ;
}= await supabase .from ("reviews") .update ({;
  status ;
}) if (error) throw error;
return {;
  reviewId, status ;

export function ReviewsModerationTable(): any ({;
  reviews,;
  isLoading,;
  onRefresh,;
}: ReviewsModerationTableProps) {;
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);

  const { mutate: updateReviewStatus, isPending } = useMutation({;
    mutationFn: async ({;
      reviewId,;
      status,;
    }: {;
      reviewId: string;
      status: ReviewStatus;
    }) => {      const { error } = await supabase;
        .from('reviews');
        .update({ status });
        .eq('id', reviewId);

      if (error) throw error;
      return { reviewId, status };
    },;
    onSuccess: data => {      toast({;
        title: 'Review updated',;
        description: `Review has been ${data && data.status}.`,;
      });
      onRefresh();
      setViewDetailsOpen(false);
    },;
    onError: (error: Error,) => {;
      toast({;
        title: 'Error',;
        description: `Failed to update review: ${error && error.message}`,;
        variant: 'destructive',;
      });
    },;
  });

  const getInitials = (name: string,) => {;
    return name;
      .split(' ');
      .map(n => n[0]);
      .join('');
      .toUpperCase();
  };
  if (isLoading) {;
    return (
      <div className='space-y-4'>;
        <div className='h-12 w-full bg-muted rounded animate-pulse' />;
        <div className='h-16 w-full bg-muted rounded animate-pulse' />;
        <div className='h-16 w-full bg-muted rounded animate-pulse' />;
        <div className='h-16 w-full bg-muted rounded animate-pulse' />;
      </div>;
    );
  }

  if (reviews && reviews.length === 0) {;
    return (
      <div className='py-10 text-center'>;
        <h3 className='text-lg font-medium mb-2'>No reviews to moderate</h3>;
        <p className='text-muted-foreground'>;
          All reviews have been processed. Check back later for new submissions.;
        </p>;
      </div>;
    );
  }

  const handleApprove = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: 'approved' });
  };

  const handleReject = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: 'rejected' });
  };

  const handleViewDetails = (review: Review) => {;
    setSelectedReview(review);
    setViewDetailsOpen(true);
  };
  const renderStars = (rating: number,) => {;
    return (
      <div className='flex'>;
        {[1, 2, 3, 4, 5].map(star => (;
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}          />;
        ))}
      </div>;
    );
  };

  return (
    <>;
      <Table>;
        <TableHeader>;
          <TableRow>;
            <TableHead>Reviewer</TableHead>;
            <TableHead>Rating</TableHead>;
            <TableHead>Date</TableHead>;
            <TableHead>Status</TableHead>;
            <TableHead>Reports</TableHead>;
            <TableHead className='text-right'>Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {reviews && reviews.map(review => (            <TableRow key={review && review.id}>;
              <TableCell>;
                <div className='flex items-center gap-2'>;
                  <Avatar className='h-8 w-8'>;
                    {review && review.reviewer_profile?.avatar_url ? (;
                      <AvatarImage
                        src={review && review.reviewer_profile.avatar_url}
                        alt={review && review.reviewer_profile.display_name || ''}                      />;
                    ) : (;
                      <AvatarFallback>;
                        {review && review.reviewer_profile?.display_name ? (;
                          getInitials(review && review.reviewer_profile.display_name);
                        ) : (;
                          <User className='h-4 w-4' />;
                        )}
                      </AvatarFallback>;
                    )}
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
              </TableCell>;
              <TableCell className='text-right'>;
                <div className='flex justify-end gap-2'>;
                  {review && review.status === 'pending' && (;
                    <>;
                      <Button
                        size='sm'
                        variant='outline'
                        className='h-8 w-8 p-0'
                        onClick={() => handleApprove(review && review.id)}
                        disabled={isPending}                      >;
                        <Check className='h-4 w-4 text-green-500' />;
                      </Button>;
                      <Button
                        size='sm'
                        variant='outline'
                        className='h-8 w-8 p-0'
                        onClick={() => handleReject(review && review.id)}
                        disabled={isPending}                      >;
                        <X className='h-4 w-4 text-red-500' />;
                      </Button>;
                    </>;
                  )}
                  <DropdownMenu>;
                    <DropdownMenuTrigger asChild>;
                      <Button variant='ghost' size='sm' className='h-8 w-8 p-0'>;
                        <MoreHorizontal className='h-4 w-4' />;
                      </Button>;
                    </DropdownMenuTrigger>;
                    <DropdownMenuContent align='end'>;
                      <DropdownMenuItem
                        onClick={() => handleViewDetails(review)}
                      >;
                        View details;
                      </DropdownMenuItem>;
                      {review && review.status === 'approved' && (;
                        <DropdownMenuItem
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
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
              </TableCell>;
            </TableRow>;
          ))}
        </TableBody>;
      </Table>;

      {selectedReview && (;
        <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>;
          <DialogContent className='max-w-lg'>;
            <DialogHeader>;
              <DialogTitle>Review Details</DialogTitle>;
              <DialogDescription>;
                Review submitted on{' '}
                {format(new Date(selectedReview && selectedReview.created_at), 'MMMM d, yyyy')}
              </DialogDescription>;
            </DialogHeader>;

            <div className='space-y-4'>;
              <div className='flex items-center justify-between'>;
                <div className='flex items-center gap-2'>;
                  <Avatar>;
                    {selectedReview && selectedReview.reviewer_profile?.avatar_url ? (;
                      <AvatarImage
                        src={selectedReview && selectedReview.reviewer_profile.avatar_url}
                        alt={selectedReview && selectedReview.reviewer_profile.display_name || ''}                      />;
                    ) : (;
                      <AvatarFallback>;
                        {selectedReview && selectedReview.reviewer_profile?.display_name ? (;
                          getInitials(;
                            selectedReview && selectedReview.reviewer_profile.display_name;
                          );
                        ) : (;
                          <User className='h-4 w-4' />;
                        )}
                      </AvatarFallback>;
                    )}
                  </Avatar>;
                  <div>;
                    <div className='font-medium'>;
                      {selectedReview && selectedReview.is_anonymous;
                        ? 'Anonymous';
                        : selectedReview && selectedReview.reviewer_profile?.display_name ||;
                          'User'}
                    </div>;
                    <Badge variant='outline'>{selectedReview && selectedReview.status}</Badge>;
                  </div>;
                </div>;
                <div>{renderStars(selectedReview && selectedReview.rating)}</div>;
              </div>;

              <div className='border rounded-md p-3 bg-muted/20'>;
                <p className='whitespace-pre-wrap'>;
                  {selectedReview && selectedReview.review_text}
                </p>;
              </div>;

              <div className='space-y-2'>;
                <h4 className='text-sm font-medium'>Additional Ratings</h4>;
                <div className='flex flex-wrap gap-2'>;
                  {selectedReview && selectedReview.communication_rating && (;
                    <Badge variant='outline'>;
                      Communication: {selectedReview && selectedReview.communication_rating}/5;
                    </Badge>;
                  )}
                  {selectedReview && selectedReview.quality_rating && (;
                    <Badge variant='outline'>;
                      Quality: {selectedReview && selectedReview.quality_rating}/5;
                    </Badge>;
                  )}
                  {selectedReview && selectedReview.timeliness_rating && (;
                    <Badge variant='outline'>;
                      Timeliness: {selectedReview && selectedReview.timeliness_rating}/5;
                    </Badge>;
                  )}
                  {selectedReview && selectedReview.would_work_again !== undefined && (;
                    <Badge
                      variant={
                        selectedReview && selectedReview.would_work_again
                          ? 'default'
                          : 'secondary'
                      }>;
                      {selectedReview && selectedReview.would_work_again;
                        ? 'Would work again';
                        : 'Would not work again'}
                    </Badge>;
                  )}
                </div>;
              </div>;

              {selectedReview && selectedReview.report_count > 0 && (;
                <div className='bg-red-50 border border-red-200 rounded-md p-3'>;
                  <h4 className='text-sm font-medium text-red-800'>;
                    Reports: {selectedReview && selectedReview.report_count}
                  </h4>;
                  <p className='text-sm text-red-700'>;
                    This review has been reported by users and may need;
                    investigation.;
                  </p>;
                </div>;
              )}
            </div>;

            <DialogFooter>;
              {selectedReview && selectedReview.status === 'pending' && (;
                <>;
                  <Button
                    variant='destructive'
                    onClick={() => handleReject(selectedReview && selectedReview.id)}
                    disabled={isPending}                  >;
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
              )}
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      )}
    </>;
  );

};

});
  return (<div className="space-y-4"> <div className="h-12 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> </div> if (reviews && reviews.length === 0) {";
  return (<div className="py-10 text-center"> <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3> <p className="text-muted-foreground" > All reviews have been processed. Check back later for new submissions. </p> </div> ;
};
  return (<div className="flex"> {;
  [1, 2, 3,  4, 5].map ( (star) => (<Starkey= {
  star 
}/>) ) ;
}</div>) ;
};";
return (<> <Table> <TableHeader> <TableRow> <TableHead>Reviewer</TableHead> <TableHead>Rating</TableHead> <TableHead>Date</TableHead> <TableHead>Status</TableHead> <TableHead>Reports</TableHead> <TableHead className="text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  reviews && reviews.map ( (review) => (<TableRowkey= {
  review && review.id "
}> <TableCell> <div className="flex items-center gap-2"> <Avatar className="h-8 w-8"> {;
  review && review.reviewer profile?.avatar url ? (<AvatarImagesrc= {
  review && review.reviewer profile && profile.avatar url 
}alt= {"
  review && review.reviewer profile && profile.display name || "" 
}/>) : (<AvatarFallback> {";
  review && review.reviewer profile?.display name ? getInitials (review && review.reviewer profile && profile.display name) : <User className=" h-4 w-4"/> ;
}</AvatarFallback>) ";
}</Avatar> <div>) : (<span className=" text-sm font-medium"> {";
  review && review.reviewer profile?.display name || " User" ;
}</span>) ;
}</div> </div> </TableCell> <TableCell> {;
  renderStars (review && review.rating) ";
}</TableCell> <TableCell> </TableCell> <TableCell> <Badge variant=" outline"> {;
  review && review.status.charAt (0) .toUpperCase () + review && review.status.slice (1) ";
}</Badge> </TableCell> <TableCell>) : (" None") ";
}</TableCell> <Buttonsize=" sm"variant=" outline"className=" h-8 w-8 p-0"onClick={
  () => handleApprove (review && review.id) ;
}disabled= {;
  isPending ";
}> <Check className=" h-4 w-4 text-green-500"/> </Button> <Button > <X className=" h-4 w-4 text-red-500"/> </Button> </>) ";
}<DropdownMenu> <DropdownMenuTrigger asChild> <Button variant=" ghost"size=" sm"className=" h-8 w-8 p-0"> <MoreHorizontal className=" h-4 w-4"/> </Button> </DropdownMenuTrigger> Mark as approved </DropdownMenuItem>) ;
}</DropdownMenuContent> </DropdownMenu> </div> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </DialogDescription> </DialogHeader> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div className=" flex items-center gap-2"> <Avatar> {;
  selectedReview && selectedReview.reviewer profile?.avatar url ? (<AvatarImagesrc= {
  selectedReview && selectedReview.reviewer profile && profile.avatar url 
}alt= {"
  selectedReview && selectedReview.reviewer profile && profile.display name || "" 
}/>) : (<AvatarFallback> {";
  selectedReview && selectedReview.reviewer profile?.display name ? getInitials (selectedReview && selectedReview.reviewer profile && profile.display name) : <User className="h-4 w-4"/> ;
}</AvatarFallback>) ;
}</Avatar> <div> </Badge> </div> </div> <div> {;
  renderStars (selectedReview && selectedReview.rating) ";
}</div> </div> <div className="border rounded-md p-3 bg-muted/20"> <p className="whitespace-pre-wrap"> {;
  selectedReview && selectedReview.review text ";
}</p> </div> <div className="space-y-2"> <h4 className="text-sm font-medium">Additional Ratings</h4> Timeliness: {;
  selectedReview && selectedReview.timeliness rating ;
}/5 </Badge>) ;
}{;
  selectedReview && selectedReview.would work again !== undefined && (<Badgevariant= {"
  selectedReview && selectedReview.would work again ? " default": " secondary" 
}> </Badge>) ;
}</div> </div> {";
  selectedReview && selectedReview.report count > 0 && (<div className="bg-red-50 border border-red-200 rounded-md p-3"> <h4 className="text-sm font-medium text-red-800">Reports: {;
  selectedReview && selectedReview.report count ";
}</h4> <p className="text-sm text-red-700"> This review has been reported by users and may need investigation. </p> </div>) ";
}</div> <DialogFooter> <Buttonvariant=" destructive" onClick={
  () => handleReject (selectedReview && selectedReview.id) ;
}disabled= {;
  isPending ;
}> Reject </Button> <ButtononClick={
  () => handleApprove (selectedReview && selectedReview.id) ;
}disabled= {;
  isPending ;
}> Approve </Button> </>) ;
}> Mark as Rejected </Button>) ;
}> Mark as Approved </Button>) ;
}</DialogFooter> </DialogContent> </Dialog>) ;
}</>) ;
}"}
