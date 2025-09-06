<<<<<<< HEAD
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx


<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Check, X, User, Star, MoreHorizontal } from 'lucide-react'
import { format } from "date-fns",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client";
import { Review, ReviewStatus } from "@/types/reviews";
import {
<<<<<<< HEAD

  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; import {
  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
} from '@/components/ui/dialog'
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
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
  reviews
  isLoading
  onRefresh
}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false)
  const { mutate: updateReviewStatus, isPending } = useMutation({
    mutationFn: async ({
      reviewId
      status
    }: {
      reviewId: string

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      status: ReviewStatus
    }) => {      const { error } = await supabase
        .from('reviews')
        .update({ status })
        .eq("id", reviewId);
      if (error) throw error;
      return { reviewId, status }

    }
    onSuccess: data => {      toast({
        title: 'Review updated'
        description: `Review has been ${data.status}.`
      })
      onRefresh()

      setViewDetailsOpen(false)
    }
    onError: (error: Error,) => {
      toast({

        title: 'Error'
        description: `Failed to update review: ${error.message}`
        variant: 'destructive'
      })
    }
  })
  const getInitials = (name: string,) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,;
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; import {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",
import { useMutation } from "@tanstack/react-query",
import { Check, X, User, Star, MoreHorizontal } from 'lucide-react'
import { format } from "date-fns",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { Review, ReviewStatus } from "@/types/reviews",

<<<<<<< HEAD
========
<<<<<<< HEAD
import { useState } from 'react';
import { use_mutation } from '@tanstack / react - query';
import { Check, X, User, Star, MoreHorizontal } from 'lucide-react';
import { format } from 'date - fns';
import { toast } from '@/hooks / use - toast';
import { supabase } from '@/integrations / supabase / client';
import { Review, ReviewStatus } from '@/types / reviews';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
import {
<<<<<<< HEAD

  Dialog,
=======
>>>>>>>   Dialog,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import {
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  Dialog,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx
      })
      onRefresh()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      })
      onRefresh()
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
      });
      on_refresh ();
      setViewDetailsOpen (false);
    },
    on_error: (error: Error, ) => {
      toast ({
        title: 'Error',
        description: `Failed to update review: ${error.message}`,
        variant: 'destructive',
      });
    },
  });
  const get_initials = (name: string, ) =>: any {
    return name;
      .split (' ');
      .map (number => n[0]);
      .join ('');
      .toUpperCase ();
  }
  // Check condition
if ( {) {
  $2
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
}


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

      if (error) throw error,
      return { reviewId, status }
    },
    onSuccess: (data) => {
      toast({
        title: "Review updated",
        description: `Review has been ${data.status}.`}),
      onRefresh(),
<<<<<<< HEAD
<<<<<<< HEAD

      setViewDetailsOpen(false)
=======
>>>>>>>       setViewDetailsOpen(false)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      setViewDetailsOpen(false)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `Failed to update review: ${error.message}`,
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        variant: "destructive"})
    }}),

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        variant: "destructive"})
    }}),


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  },

<<<<<<< HEAD
<<<<<<< HEAD
  if (isLoading) {
=======
>>>>>>>   if (isLoading) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return (
      <div className='space - y-4'>;
        <div className='h - 12 w - full bg - muted rounded animate - pulse' />;
        <div className='h - 16 w - full bg - muted rounded animate - pulse' />;
        <div className='h - 16 w - full bg - muted rounded animate - pulse' />;
        <div className='h - 16 w - full bg - muted rounded animate - pulse' />;
      </div>);
  }
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
  // Check condition
if ( {) {
  $2
}
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
    return (
      <div className='py - 10 text - center'>;
        <h3 className='text - lg font - medium mb - 2'>No reviews to moderate</h3>;
        <p className='text - muted - foreground'>;
          All reviews have been processed. Check back later for new submissions.;
        </p>;
      </div>);
  }
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

  const handle_approve = (review_id: string) =>: any {
    updateReviewStatus ({ review_id, status: 'approved' });

========
  const handle_approve = (review_id: string) =>: any {
    updateReviewStatus ({ review_id, status: 'approved' });
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
  }
  const handle_reject = (review_id: string) =>: any {
    updateReviewStatus ({ review_id, status: 'rejected' });
  }
  const handleViewDetails = (review: Review) =>: any {
    setSelectedReview (review);
    setViewDetailsOpen (true);
  }
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

========
=======
import { useState } from "react",;
import { useMutation } from "@tanstack/react-query",;
import { Check, X, User, Star, MoreHorizontal } from 'lucide-react';
import { format } from "date-fns",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { Review, ReviewStatus } from "@/types/reviews",;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD
  TableRow,;
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';import {;
=======
  TableRow} from "@/components/ui/table",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
<<<<<<< HEAD
  DialogTitle,;
} from '@/components/ui/dialog';
=======
  DialogTitle} from "@/components/ui/dialog",;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
<<<<<<< HEAD
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
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
    return (
      <div className='flex'>;
        {[1, 2, 3, 4, 5].map(star => (;
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}          />;
        ))}
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
  const render_stars = (rating: number, ) =>: any {
    return (
      <div className='flex'>;
        {[1, 2, 3, 4, 5].map (star => (
          <Star;
            key={star}
            className={`h - 4 w - 4 ${star <= rating ? 'fill - yellow - 400 text - yellow - 400' : 'text - gray - 300'}`}          />))}
      </div>);
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
  }
      </div>;
    );
  };
  return (
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <>;
      <Table>;
        <TableHeader>;
          <TableRow>;

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

=======
  }
  const handleApprove = (reviewId: string) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
                        alt={review.reviewer_profile.display_name |''}                      />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
                        alt={review.reviewer_profile.display_name |''}                      />
=======
  }

  const handleApprove = (reviewId: string) => {
=======
                        alt={review.reviewer_profile.display_name || ''}                      />
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    updateReviewStatus({ reviewId, status: "approved" })
  },

  const handleReject = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: "rejected" })
  },

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
<<<<<<< HEAD
========
                        src={review && review.reviewer_profile.avatar_url}
                        alt={review && review.reviewer_profile.display_name || ''}                      />;
                    ) : (;
                      <AvatarFallback>;
                        {review && review.reviewer_profile?.display_name ? (;
                          getInitials(review && review.reviewer_profile.display_name);
                        ) : (;
                          <User className='h-4 w-4' />;
                        )}
=======
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <TableHead>Reviewer</TableHead>;
            <TableHead>Rating</TableHead>;
            <TableHead>Date</TableHead>;
            <TableHead>Status</TableHead>;
            <TableHead>Reports</TableHead>;
            <TableHead className="text-right">Actions</TableHead>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx
========
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                      />;
                    ) :(;
                      <AvatarFallback>;
                        {review.reviewer_profile?.display_name;
                          ? getInitials(review.reviewer_profile.display_name);
                          :<User className="h-4 w-4" />}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </AvatarFallback>;
                    )}
                  </Avatar>;
                  <div>;
<<<<<<< HEAD
                    {review && review.is_anonymous ? (;
                      <span className='text-sm font-medium'>Anonymous</span>;
                    ) : (;
                      <span className='text-sm font-medium'>;
                        {review && review.reviewer_profile?.display_name || 'User'}
=======
                    {review.is_anonymous ? (;
                      <span className="text-sm font-medium">Anonymous</span>;
                    ) :(;
                      <span className="text-sm font-medium">;
                        {review.reviewer_profile?.display_name || "User"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </span>;
                    )}
                  </div>;
                </div>;
              </TableCell>;
<<<<<<< HEAD
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </Button>;
                    </>;
                  )}
                  <DropdownMenu>;
                    <DropdownMenuTrigger asChild>;
<<<<<<< HEAD
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
            <TableHead > Reviewer</TableHead>;
            <TableHead > Rating</TableHead>;
            <TableHead > Date</TableHead>;
            <TableHead > Status</TableHead>;
            <TableHead > Reports</TableHead>;
            <TableHead className='text - right'>Actions</TableHead>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {reviews.map (review => (            <TableRow key={review.id}>;
              <TableCell>;
                <div className='flex items - center gap - 2'>;
                  <Avatar className='h - 8 w - 8'>;
                    {review.reviewer_profile?.avatar_url ? (
                      <AvatarImage;
                        src={review.reviewer_profile.avatar_url}
                        alt={review.reviewer_profile.display_name || ""}
                      />
<<<<<<< HEAD

                    ) : (
=======
>>>>>>>                     ) : (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                      />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    ) : (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <AvatarFallback>
                        {review.reviewer_profile?.display_name
                          ? getInitials(review.reviewer_profile.display_name)
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    {review.is_anonymous ? (
                      <span className="text-sm font-medium">Anonymous</span>
                    ) : (
<<<<<<< HEAD
<<<<<<< HEAD

=======
                      <span className='text-sm font-medium'>
                        {review.reviewer_profile?.display_name |'User'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                      <span className='text-sm font-medium'>
                        {review.reviewer_profile?.display_name |'User'}
=======
                      <span className="text-sm font-medium">
                        {review.reviewer_profile?.display_name || "User"}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                  <Badge variant='destructive'>{review.report_count}</Badge>) : (
                  'None')}
              </TableCell>;
              <TableCell className='text - right'>;
                <div className='flex justify - end gap - 2'>;
                  {review.status === 'pending' && (
                    <>;
                      <Button;
                        size='sm';
                        variant='outline';
                        className='h - 8 w - 8 p - 0';
                        on_click={() => handle_approve (review.id)}
                        disabled={is_pending}                      >;
                        <Check className='h - 4 w - 4 text - green - 500' />;
                      </Button>;
                      <Button;
                        size='sm';
                        variant='outline';
                        className='h - 8 w - 8 p - 0';
                        on_click={() => handle_reject (review.id)}
                        disabled={is_pending}                      >;
                        <X className='h - 4 w - 4 text - red - 500' />;
                      </Button>;
                    </>)}
                  <DropdownMenu>;
                    <DropdownMenuTrigger as_child>;
                      <Button variant='ghost' size='sm' className='h - 8 w - 8 p - 0'>;
                        <MoreHorizontal className='h - 4 w - 4' />;
                      </Button>;
                    </DropdownMenuTrigger>;
                    <DropdownMenuContent align='end'>;
                      <DropdownMenuItem;
                        on_click={() => handleViewDetails (review)}
                      >;
                        View details;
                      </DropdownMenuItem>;
                      {review.status === 'approved' && (
                        <DropdownMenuItem;
                          on_click={() =>;
                            updateReviewStatus ({
                              review_id: review.id,
                              status: 'rejected',
                            });
                          }
                        >;
                          Mark as rejected;
                        </DropdownMenuItem>)}
                      {review.status === 'rejected' && (
                        <DropdownMenuItem;
                          on_click={() =>;
                            updateReviewStatus ({
                              review_id: review.id,
                              status: 'approved',
                            });
                          }
                        >                          Mark as approved;
                        </DropdownMenuItem>)}
=======
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
                        </DropdownMenuItem>;                      )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
              </TableCell>;

=======
                  <Badge variant="destructive">{review.report_count}</Badge>
                ) : (
                  "None"
                )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  {review.status === "pending" && (
                    <>
                      <Button
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

                      </Button>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>                       </Button>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

                      )}
                    </DropdownMenuContent>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>                       )}
                      )}
>>>>>>>                     </DropdownMenuContent>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      )}
                    </DropdownMenuContent>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
>>>>>>>                   <Avatar>
                    {selectedReview.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={selectedReview.reviewer_profile.avatar_url}
                        alt={selectedReview.reviewer_profile.display_name |''}                      />
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
=======

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <Avatar>
                    {selectedReview.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={selectedReview.reviewer_profile.avatar_url}
<<<<<<< HEAD

<<<<<<< HEAD
                    ) : (
=======

                        alt={selectedReview.reviewer_profile.display_name || ''}                      />


>>>>>>>                     ) : (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
                        alt={selectedReview.reviewer_profile.display_name |''}                      />
=======
                        alt={selectedReview.reviewer_profile.display_name || ''}                      />
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    ) : (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <AvatarFallback>
                        {selectedReview.reviewer_profile?.display_name ? (
                          getInitials(
                            selectedReview.reviewer_profile.display_name
                          )
                        ) : (
                          <User className='h-4 w-4' />
                        )}
                      </AvatarFallback>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        alt={selectedReview.reviewer_profile.display_name || ""}
                      />;
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
                    ) : (;
                      <AvatarFallback>;
                        {selectedReview && selectedReview.reviewer_profile?.display_name ? (;
                          getInitials(;
                            selectedReview && selectedReview.reviewer_profile.display_name;
                          );
                        ) : (;
                          <User className='h-4 w-4' />;
                        )}
=======
            </TableRow>;
          ))}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </AvatarFallback>;
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx
<<<<<<< HEAD

                    )}
=======
>>>>>>>                     )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </Avatar>
                  <div>
                    <div className="font-medium">
                      {selectedReview.is_anonymous
<<<<<<< HEAD
<<<<<<< HEAD

=======
                        ? 'Anonymous'
                        : selectedReview.reviewer_profile?.display_name |
                          'User'}
=======
                        ? "Anonymous"
                        : selectedReview.reviewer_profile?.display_name || "User"}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </div>
                    <Badge variant="outline">
                      {selectedReview.status}
                    </Badge>
<<<<<<< HEAD
=======
                        ? 'Anonymous'
                        : selectedReview.reviewer_profile?.display_name |
                          'User'}
ursor/fix-website-loading-errors-and-merge-6662
                    )}


                        ? "Anonymous"
                        : selectedReview.reviewer_profile?.display_name || "User"}


>>>>>>>                     </div>
                    <Badge variant='outline'>{selectedReview.status}</Badge>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>
                </div>
                <div>{renderStars(selectedReview.rating)}</div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

                  {selectedReview.communication_rating && (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className='border rounded-md p-3 bg-muted/20'>
                <p className='whitespace-pre-wrap'>
                  {selectedReview.review_text}
                </p>
              </div>
              <div className='space-y-2'>
                <h4 className='text-sm font-medium'>Additional Ratings</h4>
                <div className='flex flex-wrap gap-2'>
<<<<<<< HEAD
>>>>>>>                   {selectedReview.communication_rating && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

              <div className="border rounded-md p-3 bg-muted/20">
                <p className="whitespace-pre-wrap">{selectedReview.review_text}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Additional Ratings</h4>
                <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {selectedReview.communication_rating && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <Badge variant="outline">
                      Communication: {selectedReview.communication_rating}/5
                    </Badge>
                  )}
                  {selectedReview.quality_rating && (
                    <Badge variant="outline">
                      Quality: {selectedReview.quality_rating}/5
                    </Badge>
                  )}
                  {selectedReview.timeliness_rating && (
                    <Badge variant="outline">
                      Timeliness: {selectedReview.timeliness_rating}/5
                    </Badge>
                  )}
                  {selectedReview.would_work_again !== undefined && (
                    <Badge
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      variant={
                        selectedReview.would_work_again
                          ? 'default'
                          : 'secondary'
                      }                    >
                      {selectedReview.would_work_again
                        ? 'Would work again'
                        : 'Would not work again'}
<<<<<<< HEAD
>>>>>>>                     </Badge>
ursor/fix-website-loading-errors-and-merge-6662
                  {selectedReview.communication_rating && (
                    <Badge variant='outline'>
                      Communication: {selectedReview.communication_rating}/5
                    </Badge>
========
                    )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
                  </Avatar>;
                  <div>;
<<<<<<< HEAD
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
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx


                      variant={selectedReview.would_work_again ? "default" : "secondary"}
                    >
                      {selectedReview.would_work_again ? "Would work again" : "Would not work again"}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                    </Badge>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                   )}

========
                      variant={
                        selectedReview && selectedReview.would_work_again
                          ? 'default'
                          : 'secondary'
                      }>;
                      {selectedReview && selectedReview.would_work_again;
                        ? 'Would work again';
                        : 'Would not work again'}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </Badge>;
                  )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
                </div>;
              </div>;
<<<<<<< HEAD
              {selectedReview && selectedReview.report_count > 0 && (;
                <div className='bg-red-50 border border-red-200 rounded-md p-3'>;
                  <h4 className='text-sm font-medium text-red-800'>;
                    Reports: {selectedReview && selectedReview.report_count}
                  </h4>;
                  <p className='text-sm text-red-700'>;
                    This review has been reported by users and may need;
                    investigation.;
=======
;
              {selectedReview.report_count > 0 && (;
                <div className="bg-red-50 border border-red-200 rounded-md p-3">;
                  <h4 className="text-sm font-medium text-red-800">Reports:{selectedReview.report_count}</h4>;
                  <p className="text-sm text-red-700">;
                    This review has been reported by users and may need investigation.;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </p>;
                </div>;
              )}
            </div>;
<<<<<<< HEAD
            <DialogFooter>;
              {selectedReview && selectedReview.status === 'pending' && (;
                <>;
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
                  <Button
<<<<<<< HEAD

              )}
=======
=======
=======
                      variant={selectedReview.would_work_again ? "default" : "secondary"}
                    >
                      {selectedReview.would_work_again ? "Would work again" : "Would not work again"}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    variant='destructive'
                    onClick={() => handleReject(selectedReview.id)}
                    disabled={isPending}                  >
                    Reject
                  </Button>
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
<<<<<<< HEAD
>>>>>>>               )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                    variant="destructive"
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
              {selectedReview.status === "approved" && (
                <Button
                  variant="destructive"
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: "rejected" })}
                  disabled={isPending}
                >;
                  Mark as Rejected;
                </Button>;
              )}
              {selectedReview.status === "rejected" && (
                <Button
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: "approved" })}
                  disabled={isPending}
                >;
                  Mark as Approved;
                </Button>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
    </>
  )
}
})
  return (<div className="space-y-4"> <div className="h-12 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> </div> if (reviews.length === 0) {"
  return (<div className="py-10 text-center"> <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3> <p className="text-muted-foreground" > All reviews have been processed. Check back later for new submissions. </p> </div>
}
  return (<div className="flex"> {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  [1, 2, 3,  4, 5].map ( (star) => (<Star key= {
  star
}/>) )
}</div>)
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  [1, 2, 3,  4, 5].map ( (star) => (<Star key= {;
  star ;
}/>) ) ;
}</div>) ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

}</Avatar> <div> </Badge> </div> </div> <div> {
=======
}</AvatarFallback>)
ursor/fix-website-loading-errors-and-merge-6662
                    Reject;
                  </Button>;
                  <Button
                    onClick = {() => handleApprove(selectedReview && selectedReview.id),}
                    disabled = {isPending,}
=======
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
                    onClick={() => handleApprove(selectedReview.id)}                    disabled={isPending}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  >;
                    Approve;
                  </Button>;
                </>;
              )}
<<<<<<< HEAD
              {selectedReview && selectedReview.status === 'approved' && (;
                <Button
                  variant='destructive'
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
                  onClick={() =>;
                    updateReviewStatus({;
                      reviewId: selectedReview && selectedReview.id,;
                      status: 'rejected',;
                    });
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
                  }
                  disabled={isPending}                >;
                  Mark as Rejected;
                </Button>;
              )}
              {selectedReview && selectedReview.status === 'rejected' && (;
                <Button
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
                  onClick={() =>;
                    updateReviewStatus({;
                      reviewId: selectedReview && selectedReview.id,;
                      status: 'approved',;
                    });
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
                  }
                  disabled={isPending}                >;
                  Mark as Approved;
                </Button>;



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              )}
=======
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
                </Button>;              )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      )}
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx


  [1, 2, 3,  4, 5].map ( (star) => (<Star key= {;
  star ;
}/>) ) ;
}</div>) ;


};"
return (<> <Table> <TableHeader> <TableRow> <TableHead>Reviewer</TableHead> <TableHead>Rating</TableHead> <TableHead>Date</TableHead> <TableHead>Status</TableHead> <TableHead>Reports</TableHead> <TableHead className="text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
            </TableRow>))}
        </TableBody>;
      </Table>;
      {selected_review && (
        <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>;
          <DialogContent className='max - w-lg'>;
            <DialogHeader>;
              <DialogTitle > Review Details</DialogTitle>;
              <DialogDescription>;
                Review submitted on{' '}
                {format (new Date (selected_review.created_at), 'MMMM d, yyyy')}
              </DialogDescription>;
            </DialogHeader>;
            <div className='space - y-4'>;
              <div className='flex items - center justify - between'>;
                <div className='flex items - center gap - 2'>;
                  <Avatar>;
                    {selected_review.reviewer_profile?.avatar_url ? (
                      <AvatarImage;
                        src={selected_review.reviewer_profile.avatar_url}
                        alt={selected_review.reviewer_profile.display_name || ''}                      />) : (
                      <AvatarFallback>;
                        {selected_review.reviewer_profile?.display_name ? (
                          get_initials (
                            selected_review.reviewer_profile.display_name)) : (
                          <User className='h - 4 w - 4' />)}
                      </AvatarFallback>)}
                  </Avatar>;
                  <div>;
                    <div className='font - medium'>;
                      {selected_review.is_anonymous;
                        ? 'Anonymous';
                        : selected_review.reviewer_profile?.display_name ||;
                          'User'}
                    </div>;
                    <Badge variant='outline'>{selected_review.status}</Badge>;
                  </div>;
                </div>;
                <div>{render_stars (selected_review.rating)}</div>;
              </div>;
              <div className='border rounded - md p - 3 bg - muted / 20'>;
                <p className='whitespace - pre - wrap'>;
                  {selected_review.review_text}
                </p>;
              </div>;
              <div className='space - y-2'>;
                <h4 className='text - sm font - medium'>Additional Ratings</h4>;
                <div className='flex flex - wrap gap - 2'>;
                  {selected_review.communication_rating && (
                    <Badge variant='outline'>;
                      Communication: {selected_review.communication_rating}/5;
                    </Badge>)}
                  {selected_review.quality_rating && (
                    <Badge variant='outline'>;
                      Quality: {selected_review.quality_rating}/5;
                    </Badge>)}
                  {selected_review.timeliness_rating && (
                    <Badge variant='outline'>;
                      Timeliness: {selected_review.timeliness_rating}/5;
                    </Badge>)}
                  {selected_review.would_work_again !== undefined && (
                    <Badge;
                      variant={
                        selected_review.would_work_again;
                          ? 'default';
                          : 'secondary';
                      }                    >;
                      {selected_review.would_work_again;
                        ? 'Would work again';
                        : 'Would not work again'}
                    </Badge>)}
                </div>;
              </div>;
              {selected_review.report_count > 0 && (
                <div className='bg - red - 50 border border - red - 200 rounded - md p - 3'>;
                  <h4 className='text - sm font - medium text - red - 800'>;
                    Reports: {selected_review.report_count}
                  </h4>;
                  <p className='text - sm text - red - 700'>;
                    This review has been reported by users and may need;
                    investigation.;
                  </p>;
                </div>)}
            </div>;
            <DialogFooter>;
              {selected_review.status === 'pending' && (
                <>;
                  <Button;
                    variant='destructive';
                    on_click={() => handle_reject (selected_review.id)}
                    disabled={is_pending}                  >;
                    Reject;
                  </Button>;
                  <Button;
                    on_click = {() => handle_approve (selected_review.id), }
                    disabled = {is_pending, }
                  >;
                    Approve;
                  </Button>;
                </>)}
              {selected_review.status === 'approved' && (
                <Button;
                  variant='destructive';
                  on_click={() =>;
                    updateReviewStatus ({
                      review_id: selected_review.id,
                      status: 'rejected',
                    });
                  }
                  disabled={is_pending}                >;
                  Mark as Rejected;
                </Button>)}
              {selected_review.status === 'rejected' && (
                <Button;
                  on_click={() =>;
                    updateReviewStatus ({
                      review_id: selected_review.id,
                      status: 'approved',
                    });
                  }
                  disabled={is_pending}                >;
                  Mark as Approved;
                </Button>)}
            </DialogFooter>;
          </DialogContent>;
        </Dialog>)}
    </>);
}
});
  return (<div className="space - y-4"> <div className="h - 12 w - full bg - muted rounded animate - pulse" /> <div className="h - 16 w - full bg - muted rounded animate - pulse" /> <div className="h - 16 w - full bg - muted rounded animate - pulse" /> <div className="h - 16 w - full bg - muted rounded animate - pulse" /> </div> // Check condition
if ( {") {
  $2
}
  return (<div className="py - 10 text - center"> <h3 className="text - lg font - medium mb - 2">No reviews to moderate</h3> <p className="text - muted - foreground" > All reviews have been processed. Check back later for new submissions. </p> </div>;
}
  return (<div className="flex"> {
  [1, 2, 3,  4, 5].map ( (star) => (<Star key= {
  star;
}/>) );
}</div>);
}";
return (<> <Table> <TableHeader> <TableRow> <TableHead > Reviewer</TableHead> <TableHead > Rating</TableHead> <TableHead > Date</TableHead> <TableHead > Status</TableHead> <TableHead > Reports</TableHead> <TableHead className="text - right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  reviews.map ( (review) => (<TableRow key= {
  review.id ";
}> <TableCell> <div className="flex items - center gap - 2"> <Avatar className="h - 8 w - 8"> {
  review.reviewer profile?.avatar url ? (<AvatarImage src= {
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
  review.reviewer profile.avatar url;
}alt= {";
  review.reviewer profile.display name || "";
}/>) : (<AvatarFallback> {";
  review.reviewer profile?.display name ? get_initials (review.reviewer profile.display name) : <User className=" h - 4 w - 4"/>;
}</AvatarFallback>) ";
}</Avatar> <div>) : (<span className=" text - sm font - medium"> {";
  review.reviewer profile?.display name || " User";
}</span>);
<<<<<<<< HEAD:src/components/admin/reviews/ReviewsModerationTable.tsx

}</div> </div> </TableCell> <TableCell> {
  render_stars (review.rating) ";
}</TableCell> <TableCell> </TableCell> <TableCell> <Badge variant=" outline"> {


}</AvatarFallback>) 


>>>>>>> }</Avatar> <div> </Badge> </div> </div> <div> {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}</AvatarFallback>)
=======
}</AvatarFallback>) 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}</Avatar> <div> </Badge> </div> </div> <div> {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

    </>;
  );
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    </>;
  );
}
<<<<<<< HEAD
>>>>>>> 
}


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}</div> </div> </TableCell> <TableCell> {
  render_stars (review.rating) ";
}</TableCell> <TableCell> </TableCell> <TableCell> <Badge variant=" outline"> {
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
=======
    </>;
  ),;}
 import {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
import {;
  Dialog;
DialogContent;
DialogDescription;
DialogFooter;
DialogHeader;
import {;
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
interface ReviewsModerationTableProps {;
  reviews: Review[];
isLoading: boolean;
onRefresh: () => void ;
}export function ReviewsModerationTable ({;
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
}
};
onSuccess: (data) => {;
  toast ({;
  onRefresh ();
setViewDetailsOpen (false);
};
}
});
  return (<div className="space-y-4"> <div className="h-12 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> </div> if (reviews.length === 0) {";
  return (<div className="py-10 text-center"> <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3> <p className="text-muted-foreground" > All reviews have been processed. Check back later for new submissions. </p> </div> ;
};
  return (<div className="flex"> {;
  [1, 2, 3,  4, 5].map ( (star) => (<Star key= {;
  star ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}/>) ) ;
}</div>) ;
};";
return (<> <Table> <TableHeader> <TableRow> <TableHead>Reviewer</TableHead> <TableHead>Rating</TableHead> <TableHead>Date</TableHead> <TableHead>Status</TableHead> <TableHead>Reports</TableHead> <TableHead className="text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
<<<<<<< HEAD
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
=======
  reviews.map ( (review) => (<TableRow key= {;
  review.id ";
}> <TableCell> <div className="flex items-center gap-2"> <Avatar className="h-8 w-8"> {;
  review.reviewer profile?.avatar url ? (<AvatarImage src= {;
  review.reviewer profile.avatar url ;
}alt= {";
  review.reviewer profile.display name || "" ;
}/>) : (<AvatarFallback> {";
  review.reviewer profile?.display name ? getInitials (review.reviewer profile.display name) : <User className=" h-4 w-4"/> ;
}</AvatarFallback>) ";
}</Avatar> <div>) : (<span className=" text-sm font-medium"> {";
  review.reviewer profile?.display name || " User" ;
}</span>) ;
}</div> </div> </TableCell> <TableCell> {;
  renderStars (review.rating) ";
}</TableCell> <TableCell> </TableCell> <TableCell> <Badge variant=" outline"> {;
  review.status.charAt (0) .toUpperCase () + review.status.slice (1) ";
}</Badge> </TableCell> <TableCell>) : (" None") ";
}</TableCell> <Button size=" sm"variant=" outline"className=" h-8 w-8 p-0"onClick={;
  () => handleApprove (review.id) ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}disabled= {;
  isPending ";
}> <Check className=" h-4 w-4 text-green-500"/> </Button> <Button > <X className=" h-4 w-4 text-red-500"/> </Button> </>) ";
}<DropdownMenu> <DropdownMenuTrigger asChild> <Button variant=" ghost"size=" sm"className=" h-8 w-8 p-0"> <MoreHorizontal className=" h-4 w-4"/> </Button> </DropdownMenuTrigger> Mark as approved </DropdownMenuItem>) ;
}</DropdownMenuContent> </DropdownMenu> </div> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </DialogDescription> </DialogHeader> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div className=" flex items-center gap-2"> <Avatar> {;
<<<<<<< HEAD
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
=======
  selectedReview.reviewer profile?.avatar url ? (<AvatarImage src= {;
  selectedReview.reviewer profile.avatar url ;
}alt= {";
  selectedReview.reviewer profile.display name || "" ;
}/>) : (<AvatarFallback> {";
  selectedReview.reviewer profile?.display name ? getInitials (selectedReview.reviewer profile.display name) : <User className="h-4 w-4"/> ;
}</AvatarFallback>) ;
}</Avatar> <div> </Badge> </div> </div> <div> {;
  renderStars (selectedReview.rating) ";
}</div> </div> <div className="border rounded-md p-3 bg-muted/20"> <p className="whitespace-pre-wrap"> {;
  selectedReview.review text ";
}</p> </div> <div className="space-y-2"> <h4 className="text-sm font-medium">Additional Ratings</h4> Timeliness: {;
  selectedReview.timeliness rating ;
}/5 </Badge>) ;
}{;
  selectedReview.would work again !== undefined && (<Badge variant= {";
  selectedReview.would work again ? " default": " secondary" ;
}> </Badge>) ;
}</div> </div> {";
  selectedReview.report count > 0 && (<div className="bg-red-50 border border-red-200 rounded-md p-3"> <h4 className="text-sm font-medium text-red-800">Reports: {;
  selectedReview.report count ";
}</h4> <p className="text-sm text-red-700"> This review has been reported by users and may need investigation. </p> </div>) ";
}</div> <DialogFooter> <Button variant=" destructive" onClick={;
  () => handleReject (selectedReview.id) ;
}disabled= {;
  isPending ;
}> Reject </Button> <Button onClick={;
  () => handleApprove (selectedReview.id) ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}disabled= {;
  isPending ;
}> Approve </Button> </>) ;
}> Mark as Rejected </Button>) ;
}> Mark as Approved </Button>) ;
}</DialogFooter> </DialogContent> </Dialog>) ;
}</>) ;
<<<<<<< HEAD
}"}
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
=======
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/reviews/ReviewsModerationTable.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
