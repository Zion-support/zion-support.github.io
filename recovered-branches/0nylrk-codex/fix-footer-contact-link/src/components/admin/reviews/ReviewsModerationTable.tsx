
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {Check, X, User, Star, MoreHorizontal} from "lucide-react";
import {format} from "date-fns";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {Review, ReviewStatus} from "@/types/reviews";
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { useState } from "react",
import { useMutation } from "@tanstack/react-query",
import { Check, X, User, Star, MoreHorizontal } from "lucide-react",
import { format } from "date-fns",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { Review, ReviewStatus } from "@/types/reviews",
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle} from "@/components/ui/dialog",
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface ReviewsModerationTableProps {
  reviews: Review[]
  isLoading: boolean

  onRefresh: () => void
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



  onRefresh}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),

  const [viewDetailsOpen, setViewDetailsOpen] = useState(false),



<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export function ReviewsModerationTable({;
  reviews;
  isLoading;
export function ReviewsModerationTable({
  reviews,
  isLoading,




  onRefresh}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false),

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const { mutate: updateReviewStatus, isPending } = useMutation({
    mutationFn: async ({

      reviewId
      status}: {
      reviewId: string

      status: ReviewStatus
    }) => {
      const { error } = await supabase
        .from("reviews")
        .update({ status })
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
        .eq("id", reviewId);
      if (error) throw error;
      return { reviewId, status }
    }
    onSuccess: (data) => {
      toast({

        title: "Review updated"
        description: `Review has been ${data.status}.`})

      onRefresh();
      setViewDetailsOpen(false)
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .eq("id", reviewId),

      if (error) throw error,
      return { reviewId, status }
    },
    onSuccess: (data) => {
      toast({
        title: "Review updated",
        description: `Review has been ${data.status}.`}),
      onRefresh(),
      setViewDetailsOpen(false)
    },
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    onError: (error: Error) => {
      toast({

        title: "Error"
        description: `Failed to update review: ${error.message}`
        variant: "destructive"})
<<<<<<< HEAD
=======
<<<<<<< HEAD

    }}),


<<<<<<< HEAD
=======
    }});
    }}),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const getStatusColor = (status: ReviewStatus) => {
    switch (status) {
      case "approved": return "bg-green-100 text-green-800 hover:bg-green-200",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      case "rejected":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      default:
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD

  },


<<<<<<< HEAD
=======
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
<<<<<<< HEAD
                        src={review.reviewer_profile.avatar_url}
                        alt={review.reviewer_profile.display_name |""}

=======
<<<<<<< HEAD

  },


<<<<<<< HEAD
=======
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  }
  const handleApprove = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: "approved" })

<<<<<<< HEAD
=======
  }
  const handleReject = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: "rejected" })
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },

  const handleReject = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: "rejected" })
  },

<<<<<<< HEAD

  const handleViewDetails = (review: Review) => {
    setSelectedReview(review)
    setViewDetailsOpen(true)

  },


=======
  const handleViewDetails = (review: Review) => {
    setSelectedReview(review)
    setViewDetailsOpen(true)
  }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
<<<<<<< HEAD


=======
=======

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
                        alt={review.reviewer_profile.display_name |""}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                        src={review.reviewer_profile.avatar_url}
                        alt={review.reviewer_profile.display_name |""}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface ReviewsModerationTableProps {;
  reviews: Review[],;
  isLoading: boolean,;
  onRefresh: () => void;
}
<<<<<<< HEAD
        .eq("id", reviewId);
      if (error) throw error;
      return { reviewId, status }
=======
<<<<<<< HEAD
<<<<<<< HEAD

export function ReviewsModerationTable(): any ({;
  reviews;
  isLoading;
  onRefresh}: ReviewsModerationTableProps) {;
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);

=======
;
export function ReviewsModerationTable({;
  reviews,;
  isLoading,;
  onRefresh}: ReviewsModerationTableProps) {;
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),;
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const { mutate: updateReviewStatus, isPending } = useMutation({;
    mutationFn: async ({;
      reviewId,;
      status}: {;
      reviewId: string,;
      status: ReviewStatus;
<<<<<<< HEAD
=======
import { useState } from "react",;
import { useMutation } from "@tanstack/react-query",;
import { Check, X, User, Star, MoreHorizontal } from "lucide-react",;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }) => {;
      const { error } = await supabase;
        .from("reviews");
        .update({ status });
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        .eq("id", reviewId);
      if (error) throw error;
      return { reviewId, status }

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    };
    onSuccess: (data) => {;
      toast({;
        title: "Review updated",;
        description: `Review has been ${data && data.status}.`}),;
      onRefresh();
      setViewDetailsOpen(false);
    };
    onError: (error: Error) => {;
      toast({;
        title: "Error",;
        description: `Failed to update review: ${error && error.message}`,;
        variant: "destructive"});
    }});

  const getStatusColor = (status: ReviewStatus) => {;
    switch (status) {;
      case "approved": return "bg-green-100 text-green-800 hover:bg-green-200";
<<<<<<< HEAD
=======
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
  const getStatusColor = (status:ReviewStatus) => {;
    switch (status) {;
      case "approved":return "bg-green-100 text-green-800 hover:bg-green-200",;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      case "rejected":;
        return "bg-red-100 text-red-800 hover:bg-red-200",;
      default:;
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    }
<<<<<<< HEAD
  };

=======
  },;
;
  const getInitials = (name:string) => {;
  },;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const getInitials = (name: string) => {;
    return name;
      .split(" ");
      .map((n) => n[0]);
      .join("");
      .toUpperCase();
<<<<<<< HEAD
  };

  if (isLoading) {;

    return (
=======
    return (
  },;
;
  if (isLoading) {;
    return (;
  },;
  if (isLoading) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        .eq("id", reviewId);
      if (error) throw error;
      return { reviewId, status }
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="space-y-4">;
        <div className="h-12 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    );
  }
    return (
<<<<<<< HEAD
=======
  if (reviews && reviews.length === 0) {;
    return (
    ),;
  }
;
  if (reviews.length === 0) {;
    return (;
    );
  }
;
  if (reviews.length === 0) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="py-10 text-center">;
        <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3>;
        <p className="text-muted-foreground">;
          All reviews have been processed. Check back later for new submissions.;
        </p>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    );
  }


  const handleApprove = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: "approved" });
  };

  const handleReject = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: "rejected" });
  };

=======
  const handleApprove = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: "approved" });
  };
  const handleReject = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: "rejected" });
  };
    );
  }
;
  const handleApprove = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: "approved" });
  },;
  const handleReject = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: "rejected" });
  },;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleViewDetails = (review: Review) => {;
    setSelectedReview(review),;
    setViewDetailsOpen(true);
  };
<<<<<<< HEAD

  const renderStars = (rating: number) => {;

=======
  const renderStars = (rating: number) => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    );
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return (
      <div className="flex">;
        {[1, 2, 3, 4, 5].map((star) => (;
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />;
        ))}
<<<<<<< HEAD
<<<<<<< HEAD

      </div>;
    );
  };


=======
=======
      </div>;
    );
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState } from './react';
import { use_mutation } from '@tanstack / react - query';
import { Check, X, User, Star, MoreHorizontal } from './lucide-react';
import { format } from './date - fns';
import { toast } from '@/hooks / use - toast';
import { supabase } from '@/integrations / supabase / client';
import { Review, ReviewStatus } from '@/types / reviews';
;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components / ui / dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components / ui / dropdown - menu';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
interface ReviewsModerationTableProps {
  reviews: Review[],
  is_loading: boolean,
  on_refresh: () => void;
}
export /**
 * ReviewsModerationTable - Function description
 */
function ReviewsModerationTable() {
  const [selected_review, setSelectedReview] = useState < Review | null>(null);
  const [viewDetailsOpen, setViewDetailsOpen] = useState (false);
;
  const { mutate: updateReviewStatus, is_pending } = use_mutation ({
    mutation_fn: async ({
      review_id,
      status}: {
      review_id: string,
      status: ReviewStatus;
  }
;
  const get_initials = (name: string) =>: any {
    return name;
      .split (" ");
      .map ((n) => n[0]);
      .join ("");
      .toUpperCase ();
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="space - y-4">;
        <div className="h - 12 w - full bg - muted rounded animate - pulse" />;
        <div className="h - 16 w - full bg - muted rounded animate - pulse" />;
        <div className="h - 16 w - full bg - muted rounded animate - pulse" />;
        <div className="h - 16 w - full bg - muted rounded animate - pulse" />;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="py - 10 text - center">;
        <h3 className="text - lg font - medium mb - 2">No reviews to moderate</h3>;
        <p className="text - muted - foreground">;
          All reviews have been processed. Check back later for new submissions.;
        </p>;
  const handle_reject = (review_id: string) =>: any {
    updateReviewStatus ({ review_id, status: "rejected" });
  }
;
  const handleViewDetails = (review: Review) =>: any {
    setSelectedReview (review),
    setViewDetailsOpen (true);
  }
;
  const render_stars = (rating: number) =>: any {
    return (
      <div className="flex">;
        {[1, 2, 3, 4, 5].map ((star) => (
          <Star;
            key={star}
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />;
        ))}
      </div>;
    );
  };
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    <>;
      <Table>;
        <TableHeader>;
          <TableRow>;
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
                    {review.reviewer_profile?.avatar_url ? (;
                      <AvatarImage;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                        src={review.reviewer_profile.avatar_url}
                        alt={review.reviewer_profile.display_name |""}
                      />
                    ) : (
                      <AvatarFallback>
                        {review.reviewer_profile?.display_name
                          ? getInitials(review.reviewer_profile.display_name)
<<<<<<< HEAD
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>;
                    )}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                        src={review && review.reviewer_profile.avatar_url}
                        alt={review && review.reviewer_profile.display_name || ""}
                      />;
                    ) : (;
                      <AvatarFallback>;
                        {review && review.reviewer_profile?.display_name;
                          ? getInitials(review && review.reviewer_profile.display_name);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>;
                    )}

                  </Avatar>;
                  <div>;
                    {review && review.is_anonymous ? (;
                      <span className="text-sm font-medium">Anonymous</span>;
                    ) : (;
                      <span className="text-sm font-medium">;
                        {review && review.reviewer_profile?.display_name || "User"}
                      </span>;

=======
                        src={review && review.reviewer_profile.avatar_url}
                        alt={review && review.reviewer_profile.display_name || ""}
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
                  </Avatar>;
                  <div>;
                    {review.is_anonymous ? (;
                      <span className="text-sm font-medium">Anonymous</span>;
                    ) :(;
                      <span className="text-sm font-medium">;
                        {review.reviewer_profile?.display_name || "User"}
                      </span>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>;
                    )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                    )}
                  </div>;
                </div>;
              </TableCell>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <TableCell>{renderStars(review && review.rating)}</TableCell>;
              <TableCell>;
                {format(new Date(review && review.created_at), "MMM d, yyyy")}
              </TableCell>;
              <TableCell>;
                <Badge
                  variant="outline"
                  className={`${getStatusColor(review && review.status as ReviewStatus)}`}>;
                  {review && review.status.charAt(0).toUpperCase() + review && review.status.slice(1)}
                </Badge>;
              </TableCell>;
              <TableCell>;
                {review && review.report_count > 0 ? (;
                  <Badge variant="destructive">{review && review.report_count}</Badge>;
                ) : (;
<<<<<<< HEAD
=======
              <TableCell>{renderStars(review.rating)}</TableCell>;
              <TableCell>;
                {format(new Date(review.created_at), "MMM d, yyyy")}
              </TableCell>;
              <TableCell>;
                <Badge;
                  variant="outline";
                  className={`${getStatusColor(review.status as ReviewStatus)}`}
                >;
                  {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                </Badge>;
              </TableCell>;
              <TableCell>;
                {review.report_count > 0 ? (;
                  <Badge variant="destructive">{review.report_count}</Badge>;
                ) :(;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  "None";
                )}
              </TableCell>;
              <TableCell className="text-right">;
                <div className="flex justify-end gap-2">;
<<<<<<< HEAD
<<<<<<< HEAD
                  {review && review.status === "pending" && (;
                    <>;
=======
                        src={review.reviewer_profile.avatar_url}
                        alt={review.reviewer_profile.display_name || ""}
                      />
                    ) : (
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
                      <span className="text-sm font-medium">
                        {review.reviewer_profile?.display_name |"User"}
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
                  className={`${getStatusColor(review.status as ReviewStatus)}`}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  {review && review.status === "pending" && (;
                    <>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
                        onClick={() => handleApprove(review && review.id)}
=======
                  {review.status === "pending" && (;
                    <>;
                      <Button;
                        size="sm";
                        variant="outline";
                        className="h-8 w-8 p-0";
                        onClick={() => handleApprove(review.id)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                        disabled={isPending}
                      >;
                        <Check className="h-4 w-4 text-green-500" />;
                      </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
                        onClick={() => handleApprove(review.id)}
                        disabled={isPending}
                      >
                        <Check className="h-4 w-4 text-green-500" />
                      </Button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
                        onClick={() => handleReject(review && review.id)}
=======
                      <Button;
                        size="sm";
                        variant="outline";
                        className="h-8 w-8 p-0";
                        onClick={() => handleReject(review.id)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                        disabled={isPending}
                      >;
                        <X className="h-4 w-4 text-red-500" />;
                      </Button>;
                    </>;
                  )}
                  <DropdownMenu>;
                    <DropdownMenuTrigger asChild>;
<<<<<<< HEAD
<<<<<<< HEAD
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0">;
=======
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="h-8 w-8 p-0";
                      >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                        <MoreHorizontal className="h-4 w-4" />;
                      </Button>;
                    </DropdownMenuTrigger>;
                    <DropdownMenuContent align="end">;
                      <DropdownMenuItem onClick={() => handleViewDetails(review)}>;
                        View details;
                      </DropdownMenuItem>;
<<<<<<< HEAD
<<<<<<< HEAD
                      {review && review.status === "approved" && (;
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review && review.id, status: "rejected" })}>;
                          Mark as rejected;
                        </DropdownMenuItem>;
                      )}
                      {review && review.status === "rejected" && (;
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review && review.id, status: "approved" })}>;
                          Mark as approved;
                        </DropdownMenuItem>;
                      )}

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <TableHead > Reviewer</TableHead>;
            <TableHead > Rating</TableHead>;
            <TableHead > Date</TableHead>;
            <TableHead > Status</TableHead>;
            <TableHead > Reports</TableHead>;
            <TableHead className="text - right">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {reviews.map ((review) => (
            <TableRow key={review.id}>;
              <TableCell>;
                <div className="flex items - center gap - 2">;
                  <Avatar className="h - 8 w - 8">;
                    {review.reviewer_profile?.avatar_url ? (
                      <AvatarImage;
                        src={review.reviewer_profile.avatar_url}
                        alt={review.reviewer_profile.display_name || ""}
                      />) : (
                      <AvatarFallback>;
                        {review.reviewer_profile?.display_name;
                          ? get_initials (review.reviewer_profile.display_name);
                          : <User className="h - 4 w - 4" />}
                      </AvatarFallback>)}
                  </Avatar>;
                  <div>;
                    {review.is_anonymous ? (
                      <span className="text - sm font - medium">Anonymous</span>) : (
                      <span className="text - sm font - medium">;
                        {review.reviewer_profile?.display_name || "User"}
                      </span>)}
                  </div>;
                </div>;
              </TableCell>;
              <TableCell>{render_stars (review.rating)}</TableCell>;
              <TableCell>;
                {format (new Date (review.created_at), "MMM d, yyyy")}
              </TableCell>;
              <TableCell>;
                <Badge;
                  variant="outline";
                  className={`${getStatusColor (review.status as ReviewStatus)}`}
                >;
                  {review.status.char_at (0).toUpperCase () + review.status.slice (1)}
                </Badge>;
              </TableCell>;
              <TableCell>;
                {review.report_count > 0 ? (
                  <Badge variant="destructive">{review.report_count}</Badge>) : (
                  "None")}
              </TableCell>;
              <TableCell className="text - right">;
                <div className="flex justify - end gap - 2">;
                  {review.status === "pending" && (
                    <>;
                      <Button;
                        size="sm";
                        variant="outline";
                        className="h - 8 w - 8 p - 0";
                        on_click={() => handle_approve (review.id)}
                        disabled={is_pending}
                      >;
                        <Check className="h - 4 w - 4 text - green - 500" />;
                      </Button>;
                      <Button;
                        size="sm";
                        variant="outline";
                        className="h - 8 w - 8 p - 0";
                        on_click={() => handle_reject (review.id)}
                        disabled={is_pending}
                      >;
                        <X className="h - 4 w - 4 text - red - 500" />;
                      </Button>;
                    </>)}
                  <DropdownMenu>;
                    <DropdownMenuTrigger as_child>;
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="h - 8 w - 8 p - 0";
                      >;
                        <MoreHorizontal className="h - 4 w - 4" />;
                      </Button>;
                    </DropdownMenuTrigger>;
                    <DropdownMenuContent align="end">;
                      <DropdownMenuItem on_click={() => handleViewDetails (review)}>;
                        View details;
                      </DropdownMenuItem>;
                      {review.status === "approved" && (
                        <DropdownMenuItem on_click={() => updateReviewStatus ({ review_id: review.id, status: "rejected" })}>;
                          Mark as rejected;
                        </DropdownMenuItem>)}
                      {review.status === "rejected" && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
                        onClick={() => handleReject(review.id)}
                        disabled={isPending}
                      >
                        <X className="h-4 w-4 text-red-500" />
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
                      {review.status === "approved" && (
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: "rejected" })}>
                          Mark as rejected
                        </DropdownMenuItem>
                      )}
                      {review.status === "rejected" && (
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: "approved" })}>
                          Mark as approved
                        </DropdownMenuItem>
                      )}
                        <DropdownMenuItem on_click={() => updateReviewStatus ({ review_id: review.id, status: "approved" })}>;
                          Mark as approved;
                        </DropdownMenuItem>)}

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                      {review.status === "approved" && (;
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId:review.id, status:"rejected" })}>;
                          Mark as rejected;
                        </DropdownMenuItem>;
                      )}
                      {review.status === "rejected" && (;
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId:review.id, status:"approved" })}>;
                          Mark as approved;
                        </DropdownMenuItem>;                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
              </TableCell>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

            </TableRow>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          ))}

        </TableBody>;
      </Table>;

<<<<<<< HEAD
=======
            </TableRow>;
          ))}
        </TableBody>;
      </Table>;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {selectedReview && (;
        <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>;
          <DialogContent className="max-w-lg">;
            <DialogHeader>;
              <DialogTitle>Review Details</DialogTitle>;
              <DialogDescription>;
                Review submitted on{" "}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {format(new Date(selectedReview && selectedReview.created_at), "MMMM d, yyyy")}
              </DialogDescription>;
            </DialogHeader>;

<<<<<<< HEAD
=======
                {format(new Date(selectedReview.created_at), "MMMM d, yyyy")}
              </DialogDescription>;
            </DialogHeader>;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <div className="space-y-4">;
              <div className="flex items-center justify-between">;
                <div className="flex items-center gap-2">;
                  <Avatar>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    {selectedReview && selectedReview.reviewer_profile?.avatar_url ? (;
                      <AvatarImage
                        src={selectedReview && selectedReview.reviewer_profile.avatar_url}
                        alt={selectedReview && selectedReview.reviewer_profile.display_name || ""}
                      />;
                    ) : (;
                      <AvatarFallback>;
                        {selectedReview && selectedReview.reviewer_profile?.display_name;
                          ? getInitials(selectedReview && selectedReview.reviewer_profile.display_name);

                          : <User className="h-4 w-4" />}
                      </AvatarFallback>;
                    )}
<<<<<<< HEAD
=======
<<<<<<< HEAD

                  </Avatar>;
                  <div>;
                    <div className="font-medium">;
                      {selectedReview && selectedReview.is_anonymous;
                        ? "Anonymous";
                        : selectedReview && selectedReview.reviewer_profile?.display_name || "User"}
                    </div>;
                    <Badge variant="outline" className={getStatusColor(selectedReview && selectedReview.status as ReviewStatus)}>;
                      {selectedReview && selectedReview.status}
                    </Badge>;
                  </div>;
                </div>;
                <div>{renderStars(selectedReview && selectedReview.rating)}</div>;
              </div>;

              <div className="border rounded-md p-3 bg-muted/20">;
                <p className="whitespace-pre-wrap">{selectedReview && selectedReview.review_text}</p>;
              </div>;

              <div className="space-y-2">;
                <h4 className="text-sm font-medium">Additional Ratings</h4>;
                <div className="flex flex-wrap gap-2">;
                  {selectedReview && selectedReview.communication_rating && (;
                    <Badge variant="outline">;
                      Communication: {selectedReview && selectedReview.communication_rating}/5;
                    </Badge>;

=======
                          : <User className="h-4 w-4" />}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                  )}
                  {selectedReview && selectedReview.quality_rating && (;
                    <Badge variant="outline">;
                      Quality: {selectedReview && selectedReview.quality_rating}/5;
                    </Badge>;
                  )}
                  {selectedReview && selectedReview.timeliness_rating && (;
                    <Badge variant="outline">;
                      Timeliness: {selectedReview && selectedReview.timeliness_rating}/5;
                    </Badge>;
                  )}
                  {selectedReview && selectedReview.would_work_again !== undefined && (;
                    <Badge
                      variant={selectedReview && selectedReview.would_work_again ? "default" : "secondary"}
                      className={selectedReview && selectedReview.would_work_again ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>;
                      {selectedReview && selectedReview.would_work_again ? "Would work again" : "Would not work again"}
<<<<<<< HEAD
<<<<<<< HEAD
                    </Badge>;
                  )}

                </div>;
              </div>;

              {selectedReview && selectedReview.report_count > 0 && (;
                <div className="bg-red-50 border border-red-200 rounded-md p-3">;
                  <h4 className="text-sm font-medium text-red-800">Reports: {selectedReview && selectedReview.report_count}</h4>;
=======
                      {selectedReview.is_anonymous;
                        ? "Anonymous";
                        :selectedReview.reviewer_profile?.display_name || "User"}
                    </div>;
                    <Badge variant="outline" className={getStatusColor(selectedReview.status as ReviewStatus)}>;
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
                      className={selectedReview.would_work_again ? "bg-green-100 text-green-800" :"bg-gray-100 text-gray-800"}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <p className="text-sm text-red-700">;
                    This review has been reported by users and may need investigation.;
                  </p>;
                </div>;
              )}
            </div>;
<<<<<<< HEAD

            <DialogFooter>;
              {selectedReview && selectedReview.status === "pending" && (;
                <>;

                  <Button
                    variant="destructive"
                    onClick={() => handleReject(selectedReview && selectedReview.id)}
=======
                  <Button
                    variant="destructive"
                    onClick={() => handleReject(selectedReview && selectedReview.id)}
;
            <DialogFooter>;
              {selectedReview.status === "pending" && (;
                <>;
                  <Button;
                    variant="destructive";
                    onClick={() => handleReject(selectedReview.id)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                    </Badge>;
                  )}
                  <Button
                    variant="destructive"
                    onClick={() => handleReject(selectedReview && selectedReview.id)}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    disabled={isPending}
                  >;
                    Reject;
                  </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Button
                    onClick={() => handleApprove(selectedReview && selectedReview.id)}
                    disabled={isPending}
=======
                  <Button;
                    onClick={() => handleApprove(selectedReview.id)}                    disabled={isPending}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  <Button
                    onClick={() => handleApprove(selectedReview && selectedReview.id)}
                    disabled={isPending}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  >;
                    Approve;
                  </Button>;
                </>;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              {selectedReview && selectedReview.status === "approved" && (;
                <Button
                  variant="destructive"
                  onClick={() => updateReviewStatus({ reviewId: selectedReview && selectedReview.id, status: "rejected" })}
<<<<<<< HEAD
=======
              {selectedReview.status === "approved" && (;
                <Button;
                  variant="destructive";
                  onClick={() => updateReviewStatus({ reviewId:selectedReview.id, status:"rejected" })}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  disabled={isPending}
                >;
                  Mark as Rejected;
                </Button>;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              {selectedReview && selectedReview.status === "rejected" && (;
                <Button
                  onClick={() => updateReviewStatus({ reviewId: selectedReview && selectedReview.id, status: "approved" })}
                  disabled={isPending}
                >;
                  Mark as Approved;
                </Button>;
              )}
<<<<<<< HEAD
=======
              {selectedReview.status === "rejected" && (;
                <Button;
                  onClick={() => updateReviewStatus({ reviewId:selectedReview.id, status:"approved" })}
                  disabled={isPending}
                >;
                  Mark as Approved;
                </Button>;              )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      )}
    </>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  );
            </TableRow>))}
        </TableBody>;
      </Table>;
      {selected_review && (
        <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>;
          <DialogContent className="max - w-lg">;
            <DialogHeader>;
              <DialogTitle > Review Details</DialogTitle>;
              <DialogDescription>;
                Review submitted on{" "}
                {format (new Date (selected_review.created_at), "MMMM d, yyyy")}
              </DialogDescription>;
            </DialogHeader>;
            <div className="space - y-4">;
              <div className="flex items - center justify - between">;
                <div className="flex items - center gap - 2">;
                  <Avatar>;
                    {selected_review.reviewer_profile?.avatar_url ? (
                      <AvatarImage;
                        src={selected_review.reviewer_profile.avatar_url}
                        alt={selected_review.reviewer_profile.display_name || ""}
                      />) : (
                      <AvatarFallback>;
                        {selected_review.reviewer_profile?.display_name;
                          ? get_initials (selected_review.reviewer_profile.display_name);
                          : <User className="h - 4 w - 4" />}
                      </AvatarFallback>)}
                  </Avatar>;
                  <div>;
                    <div className="font - medium">;
                      {selected_review.is_anonymous;
                        ? "Anonymous";
                        : selected_review.reviewer_profile?.display_name || "User"}
                    </div>;
                    <Badge variant="outline" className={getStatusColor (selected_review.status as ReviewStatus)}>;
                      {selected_review.status}
                    </Badge>;
                  </div>;
                </div>;
                <div>{render_stars (selected_review.rating)}</div>;
              </div>;
              <div className="border rounded - md p - 3 bg - muted / 20">;
                <p className="whitespace - pre - wrap">{selected_review.review_text}</p>;
              </div>;
              <div className="space - y-2">;
                <h4 className="text - sm font - medium">Additional Ratings</h4>;
                <div className="flex flex - wrap gap - 2">;
                  {selected_review.communication_rating && (
                    <Badge variant="outline">;
                      Communication: {selected_review.communication_rating}/5;
                    </Badge>)}
                  {selected_review.quality_rating && (
                    <Badge variant="outline">;
                      Quality: {selected_review.quality_rating}/5;
                    </Badge>)}
                  {selected_review.timeliness_rating && (
                    <Badge variant="outline">;
                      Timeliness: {selected_review.timeliness_rating}/5;
                    </Badge>)}
                  {selected_review.would_work_again !== undefined && (
                    <Badge;
                      variant={selected_review.would_work_again ? "default" : "secondary"}
                      className={selected_review.would_work_again ? "bg - green - 100 text - green - 800" : "bg - gray - 100 text - gray - 800"}
                    >;
                      {selected_review.would_work_again ? "Would work again" : "Would not work again"}
                    </Badge>)}
                </div>;
              </div>;
              {selected_review.report_count > 0 && (
                <div className="bg - red - 50 border border - red - 200 rounded - md p - 3">;
                  <h4 className="text - sm font - medium text - red - 800">Reports: {selected_review.report_count}</h4>;
                  <p className="text - sm text - red - 700">;
                    This review has been reported by users and may need investigation.;
                  </p>;
                </div>)}
            </div>;
            <DialogFooter>;
              {selected_review.status === "pending" && (
                <>;
                  <Button;
                    variant="destructive";
                    on_click={() => handle_reject (selected_review.id)}
                    disabled={is_pending}
                  >;
                    Reject;
                  </Button>;
                  <Button;
                    on_click={() => handle_approve (selected_review.id)}
                    disabled={is_pending}
                  >;
                    Approve;
                  </Button>;
                </>)}
              {selected_review.status === "approved" && (
                <Button;
                  variant="destructive";
                  on_click={() => updateReviewStatus ({ review_id: selected_review.id, status: "rejected" })}
                  disabled={is_pending}
                >;
                  Mark as Rejected;
                </Button>)}
              {selected_review.status === "rejected" && (
                <Button;
                  on_click={() => updateReviewStatus ({ review_id: selected_review.id, status: "approved" })}
                  disabled={is_pending}
                >;
                  Mark as Approved;
                </Button>)}
            </DialogFooter>;
          </DialogContent>;
        </Dialog>)}
    </>);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),; import {
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
import {
  Dialog;
DialogContent;
DialogDescription;
DialogFooter;
DialogHeader;
import {
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
interface ReviewsModerationTableProps {
  reviews: Review[];
isLoading: boolean;
onRefresh: () => void 
}export function ReviewsModerationTable ({
  reviews;
isLoading;
onRefresh 
}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null> (null);
const [viewDetailsOpen, setViewDetailsOpen] = useState (false);
const {
  mutate: updateReviewStatus, isPending 
}= useMutation ({
  mutationFn: async ({
  reviewId;
status 
}: {
  reviewId: string;
status: ReviewStatus 
}) => {
  const {
  error 
}= await supabase .from ("reviews") .update ({
  status 
}) if (error) throw error;
return {
  reviewId, status 
}
};
onSuccess: (data) => {
  toast ({
  onRefresh ();
setViewDetailsOpen (false);
};
}
};
const getInitials = (name: string) => {
  return name .split (" ") .map ( (n) => n[0]) .join ("") .toUpperCase () 
};
return (<div className="space-y-4"> <div className="h-12 w-full bg-muted rounded animate-pulse"/> <div className="h-16 w-full bg-muted rounded animate-pulse"/> <div className="h-16 w-full bg-muted rounded animate-pulse"/> <div className="h-16 w-full bg-muted rounded animate-pulse"/> </div> if (reviews.length === 0) {
  return (<div className="py-10 text-center"> <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3> <p className="text-muted-foreground"> All reviews have been processed. Check back later for new submissions. </p> </div> 
};
  return (<div className="flex"> {
  [1, 2, 3, 4, 5].map ( (star) => (<Star key= {
  star 
}/>) ) 
}</div>) 
};
return (<> <Table> <TableHeader> <TableRow> <TableHead>Reviewer</TableHead> <TableHead>Rating</TableHead> <TableHead>Date</TableHead> <TableHead>Status</TableHead> <TableHead>Reports</TableHead> <TableHead className="text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  reviews.map ( (review) => (<TableRow key= {
  review.id 
}> <TableCell> <div className="flex items-center gap-2"> <Avatar className="h-8 w-8"> {
  review.reviewer profile?.avatar url ? (<AvatarImage src= {
  review.reviewer profile.avatar url 
}alt= {
  review.reviewer profile.display name || "" 
}/>) : (<AvatarFallback> {
  review.reviewer profile?.display name ? getInitials (review.reviewer profile.display name) : <User className=" h-4 w-4"/> 
}</AvatarFallback>) 
}</Avatar> <div>) : (<span className=" text-sm font-medium"> {
  review.reviewer profile?.display name || " User" 
}</span>) 
}</div> </div> </TableCell> <TableCell> {
  renderStars (review.rating) 
}</TableCell> <TableCell> > {
  review.status.charAt (0) .toUpperCase () + review.status.slice (1) 
}</Badge> </TableCell> <TableCell>) : (" None") 
}</TableCell> <Button size=" sm"variant=" outline"className=" h-8 w-8 p-0"onClick= {
  () => handleApprove (review.id) 
}disabled= {
  isPending 
}> <Check className=" h-4 w-4 text-green-500"/> </Button> <Button > <X className=" h-4 w-4 text-red-500"/> </Button> </>) 
}<DropdownMenu> <DropdownMenuTrigger asChild> <Button variant=" ghost"size=" sm"className=" h-8 w-8 p-0"> <MoreHorizontal className=" h-4 w-4"/> </Button> </DropdownMenuTrigger> Mark as approved </DropdownMenuItem>) 
}</DropdownMenuContent> </DropdownMenu> </div> </TableCell> </TableRow>) ) 
}</TableBody> </Table> </DialogDescription> </DialogHeader> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div className=" flex items-center gap-2"> <Avatar> {
  selectedReview.reviewer profile?.avatar url ? (<AvatarImage src= {
  selectedReview.reviewer profile.avatar url 
}alt= {
  selectedReview.reviewer profile.display name || "" 
}/>) : (<AvatarFallback> {
  selectedReview.reviewer profile?.display name ? getInitials (selectedReview.reviewer profile.display name) : <User className="h-4 w-4"/> 
}</AvatarFallback>) 
}</Avatar> <div> </Badge> </div> </div> <div> {
  renderStars (selectedReview.rating) 
}</div> </div> <div className="border rounded-md p-3 bg-muted/20"> <p className="whitespace-pre-wrap"> {
  selectedReview.review text 
}</p> </div> <div className="space-y-2"> <h4 className="text-sm font-medium">Additional Ratings</h4> Timeliness: {
  selectedReview.timeliness rating 
}/5 </Badge>) 
}{
  selectedReview.would work again !== undefined && (<Badge </Badge>) 
}</div> </div> {
  selectedReview.report count > 0 && (<div className="bg-red-50 border border-red-200 rounded-md p-3"> <h4 className="text-sm font-medium text-red-800">Reports: {
  selectedReview.report count 
}</h4> <p className="text-sm text-red-700"> This review has been reported by users and may need investigation. </p> </div>) 
}</div> <DialogFooter> <Button variant=" destructive" onClick= {
  () => handleReject (selectedReview.id) 
}disabled= {
  isPending 
}> Reject </Button> <Button onClick= {
  () => handleApprove (selectedReview.id) 
}disabled= {
  isPending 
}> Approve </Button> </>) 
}> Mark as Rejected </Button>) 
}> Mark as Approved </Button>) 
}</DialogFooter> </DialogContent> </Dialog>) 
}</>) 
            </TableRow>;
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
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    {selectedReview.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={selectedReview.reviewer_profile.avatar_url}
                        alt={selectedReview.reviewer_profile.display_name |""}
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
                    <div className="font-medium">
                      {selectedReview.is_anonymous
                        ? "Anonymous"
                        : selectedReview.reviewer_profile?.display_name |"User"}
                    </div>
                    <Badge variant="outline" className={getStatusColor(selectedReview.status as ReviewStatus)}>
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
                <div className="flex flex-wrap gap-2">
                  {selectedReview.communication_rating && (
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
                      variant={selectedReview.would_work_again ? "default" : "secondary"}
                      className={selectedReview.would_work_again ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                    >
                      {selectedReview.would_work_again ? "Would work again" : "Would not work again"}
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
                    variant="destructive"
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
              {selectedReview.status === "approved" && (
                <Button
                  variant="destructive"
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: "rejected" })}
                  disabled={isPending}
                >
                  Mark as Rejected
                </Button>
              )}
              {selectedReview.status === "rejected" && (
                <Button
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: "approved" })}
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
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}