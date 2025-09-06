<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {Check, X, User, Star, MoreHorizontal} from "lucide-react";
import {format} from "date-fns";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {Review, ReviewStatus} from "@/types/reviews";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface ReviewsModerationTableProps {
=======
import { Button } from "@/components/ui/button",interface ReviewsModerationTableProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { Button } from "@/components/ui/button",interface ReviewsModerationTableProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  reviews: Review[]
  isLoading: boolean

  onRefresh: () => void
}

export function ReviewsModerationTable({;
  reviews;
  isLoading;
export function ReviewsModerationTable({
  reviews,
  isLoading,

<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  onRefresh}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD
=======

=======
        .eq("id", reviewId);
      if (error) throw error;
      return { reviewId, status }
    }
    onSuccess: (data) => {
      toast({

<<<<<<< HEAD
=======
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
=======
  onRefresh}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  onRefresh}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    onError: (error: Error) => {
      toast({

        title: "Error"
        description: `Failed to update review: ${error.message}`
        variant: "destructive"})  },

  const handleReject = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: "rejected" })
  },

  const handleViewDetails = (review: Review) => {
    setSelectedReview(review)
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
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface ReviewsModerationTableProps {;
  reviews: Review[],;
  isLoading: boolean,;
  onRefresh: () => void;
}
        .eq("id", reviewId);
      if (error) throw error;
      return { reviewId, status }  const { mutate: updateReviewStatus, isPending } = useMutation({;
    mutationFn: async ({;
      reviewId,;
      status}: {;
      reviewId: string,;
      status: ReviewStatus;
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
    }) => {;
      const { error } = await supabase;
        .from("reviews");
        .update({ status });
        .eq("id", reviewId);
      if (error) throw error;
      return { reviewId, status }
      case "rejected":;
        return "bg-red-100 text-red-800 hover:bg-red-200",;
      default:;
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    }
  };
  const getInitials = (name: string) => {;
    return name;
      .split(" ");
      .map((n) => n[0]);
      .join("");
      .toUpperCase()
};

  if (isLoading) {;

    return (        .eq("id", reviewId);
      if (error) throw error;
      return { reviewId, status }
    return (
      <div className="space-y-4">;
        <div className="h-12 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
      </div>;
      <div className="py-10 text-center">;
        <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3>;
        <p className="text-muted-foreground">;
          All reviews have been processed. Check back later for new submissions.;
        </p>;
      </div>;
    );
  }

  const handleApprove = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: "approved" })
};

  const handleReject = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: "rejected" })
};
  const handleViewDetails = (review: Review) => {;
    setSelectedReview(review),;
    setViewDetailsOpen(true)
};

<<<<<<< HEAD
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


<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
=======
=======
=======
      </div>;
    );
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState } from './react';
=======
  const renderStars = (rating: number) => {;import { useState } from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const renderStars = (rating: number) => {;import { useState } from './react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
      <div className="space-y-4">;
        <div className="h - 12 w - full bg - muted rounded animate-pulse" />;
        <div className="h - 16 w - full bg - muted rounded animate-pulse" />;
        <div className="h - 16 w - full bg - muted rounded animate-pulse" />;
        <div className="h - 16 w - full bg - muted rounded animate-pulse" />;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="py - 10 text-center">;
        <h3 className="text - lg font - medium mb-2">No reviews to moderate</h3>;
        <p className="text - muted-foreground">;
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
<<<<<<< HEAD
<<<<<<< HEAD
  return (
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <>;
      <Table>;
        <TableHeader>;
          <TableRow>;
<<<<<<< HEAD

<<<<<<< HEAD
                    {review.reviewer_profile?.avatar_url ? (;
                      <AvatarImage;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                        src={review.reviewer_profile.avatar_url}
                        alt={review.reviewer_profile.display_name |""}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                        src={review.reviewer_profile.avatar_url}
                        alt={review.reviewer_profile.display_name |""}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      />
                    ) : (
                      <AvatarFallback>
                        {review.reviewer_profile?.display_name
                          ? getInitials(review.reviewer_profile.display_name)
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          : <User className="h-4 w-4" />}
=======
  return (    <>;
      <Table>;
        <TableHeader>;
          <TableRow>;                          : <User className="h-4 w-4" />}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (    <>;
      <Table>;
        <TableHeader>;
          <TableRow>;                          : <User className="h-4 w-4" />}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      </AvatarFallback>;
                    )}
                    )}
                  </div>;
                </div>;
              </TableCell>;
                  "None";
                )}
              </TableCell>;
              <TableCell className="text-right">;
                <div className="flex justify-end gap-2">;
                  {review && review.status === "pending" && (;
                    <>;                  {review && review.status === "pending" && (;
                    <>;
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"                        disabled={isPending}
                      >;
                        <X className="h-4 w-4 text-red-500" />;
                      </Button>;
                    </>;
                  )}
                  <DropdownMenu>;
                    <DropdownMenuTrigger asChild>;
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0">;                        <MoreHorizontal className="h-4 w-4" />;
                      </Button>;
                    </DropdownMenuTrigger>;
                    <DropdownMenuContent align="end">;
                      <DropdownMenuItem onClick={() => handleViewDetails(review)}>;
                        View details;
                      </DropdownMenuItem>;
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
            <TableHead > Reviewer</TableHead>;
            <TableHead > Rating</TableHead>;
            <TableHead > Date</TableHead>;
            <TableHead > Status</TableHead>;
            <TableHead > Reports</TableHead>;
            <TableHead className="text-right">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {reviews.map ((review) => (
            <TableRow key={review.id}>;
              <TableCell>;
                <div className="flex items - center gap-2">;
                  <Avatar className="h - 8 w-8">;
                    {review.reviewer_profile?.avatar_url ? (
                      <AvatarImage;
                        src={review.reviewer_profile.avatar_url}
                        alt={review.reviewer_profile.display_name || ""}
                      />) : (
                      <AvatarFallback>;
                        {review.reviewer_profile?.display_name;
                          ? get_initials (review.reviewer_profile.display_name);
                          : <User className="h - 4 w-4" />}
                      </AvatarFallback>)}
                  </Avatar>;
                  <div>;
                    {review.is_anonymous ? (
                      <span className="text - sm font-medium">Anonymous</span>) : (
                      <span className="text - sm font-medium">;
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
              <TableCell className="text-right">;
                <div className="flex justify - end gap-2">;
                  {review.status === "pending" && (
                    <>;
                      <Button;
                        size="sm";
                        variant="outline";
                        className="h - 8 w - 8 p-0";
                        on_click={() => handle_approve (review.id)}
                        disabled={is_pending}
                      >;
                        <Check className="h - 4 w - 4 text - green-500" />;
                      </Button>;
                      <Button;
                        size="sm";
                        variant="outline";
                        className="h - 8 w - 8 p-0";
                        on_click={() => handle_reject (review.id)}
                        disabled={is_pending}
                      >;
                        <X className="h - 4 w - 4 text - red-500" />;
                      </Button>;
                    </>)}
                  <DropdownMenu>;
                    <DropdownMenuTrigger as_child>;
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="h - 8 w - 8 p-0";
                      >;
                        <MoreHorizontal className="h - 4 w-4" />;
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
<<<<<<< HEAD
<<<<<<< HEAD
                      {review.status === "rejected" && (
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
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
              </TableCell>;
<<<<<<< HEAD
<<<<<<< HEAD

            </TableRow>;
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          ))}

=======
                      {review.status === "rejected" && (                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
              </TableCell>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                      {review.status === "rejected" && (                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
              </TableCell>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </TableBody>;
      </Table>;
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
<<<<<<< HEAD
<<<<<<< HEAD
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
  );
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======
                    </Badge>;}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    </Badge>;}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
