<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";


import { useState } from "react",
import { useMutation } from "@tanstack/react-query",
import { Check, X, User, Star, MoreHorizontal } from "lucide-react",
import { format } from "date-fns",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { Review, ReviewStatus } from "@/types/reviews",

<<<<<<< HEAD


import {


=======
import {

>>>>>>> origin/cursor/delete-old-data-records-6bba
  Table,
  TableBody,
  TableCell,

  TableHead,
<<<<<<< HEAD

  TableRow} from "@/components/ui/table","
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar","
  }

  Dialog,
  DialogContent,
  DialogDescription,

  DialogFooter,

  DialogTitle} from "@/components/ui/dialog","
  }

  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",



interface ReviewsModerationTableProps {

}





  onRefresh}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),

  const [viewDetailsOpen, setViewDetailsOpen] = useState(false),

export function ReviewsModerationTable({;
  reviews;
  isLoading;
export function ReviewsModerationTable({}
  reviews,
  isLoading,




=======
  TableHeader,

>>>>>>> origin/cursor/delete-old-data-records-6bba
        .eq("id", reviewId),

      if (error) throw error,
      return { reviewId, status }
    },
    onSuccess: (data) => {}
      toast({"
        title: "Review updated",
        description: `Review has been ${data.status}.`}),
      onRefresh(),
      setViewDetailsOpen(false)
    },
<<<<<<< HEAD



=======
  onRefresh}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false),

>>>>>>> origin/cursor/delete-old-data-records-6bba
    onError: (error: Error) => {
      toast({

    onError: (error: Error) => {}
      toast({}
"
        title: "Error"`
        description: `Failed to update review: ${error.message}`"
        variant: "destructive"})


<<<<<<< HEAD
    }}),



=======
  const getStatusColor = (status: ReviewStatus) => {}
    switch (status) {"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      case "approved": return "bg-green-100 text-green-800 hover:bg-green-200",

"
      case "rejected":"
        return "bg-red-100 text-red-800 hover:bg-red-200"
      default:"
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
    }


<<<<<<< HEAD
  },



=======
  const getInitials = (name: string) => {}
    return name"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      .split(" ")
      .map((n) => n[0])"
      .join("")
      .toUpperCase()

<<<<<<< HEAD

  },



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
      </div>
    )
  }
  if (reviews.length === 0) {}
    return ("
      <div className="py-10 text-center">"
        <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3>"
        <p className="text-muted-foreground">
          All reviews have been processed. Check back later for new submissions.
        </p>
      </div>
    )
  }
  const handleApprove = (reviewId: string) => {"
    updateReviewStatus({ reviewId, status: "approved" })

<<<<<<< HEAD


=======
  }
  const handleReject = (reviewId: string) => {
    updateReviewStatus({ reviewId, status: "rejected" })
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  const handleReject = (reviewId: string) => {"
    updateReviewStatus({ reviewId, status: "rejected" })
  },


<<<<<<< HEAD
=======
  const handleViewDetails = (review: Review) => {
    setSelectedReview(review)
    setViewDetailsOpen(true)

  },

>>>>>>> origin/cursor/delete-old-data-records-6bba

  const renderStars = (rating: number) => {
    return (

      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star;
            key={star}"`
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />

<<<<<<< HEAD
=======

                        src={review.reviewer_profile.avatar_url}"
                        alt={review.reviewer_profile.display_name |""}
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
    mutationFn: async ({;
      reviewId,;
      status}: {;
      reviewId: string,;
      status: ReviewStatus;


  TableHeader,;"
  TableRow} from "@/components/ui/table",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;

  DialogHeader,;"
  DialogTitle} from "@/components/ui/dialog",;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;"
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;

interface ReviewsModerationTableProps {;
  reviews: Review[],;
  isLoading: boolean,;
  onRefresh: () => void;
}

    mutationFn: async ({;
      reviewId,;
      status}: {;
      reviewId: string,;
      status: ReviewStatus;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

  TableRow} from "@/components/ui/table",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import {;

=======
  TableRow} from "@/components/ui/table",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
<<<<<<< HEAD

  DialogTitle} from "@/components/ui/dialog",;
import {;

=======
  DialogTitle} from "@/components/ui/dialog",;"
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ReviewsModerationTableProps {;
  reviews: Review[],;
  isLoading: boolean,;
  onRefresh: () => void;
}
<<<<<<< HEAD

export function ReviewsModerationTable({;
  reviews,;
  isLoading,;
  onRefresh}: ReviewsModerationTableProps) {;
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),;
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false),;
=======
;

>>>>>>> origin/cursor/delete-old-data-records-6bba


  const { mutate: updateReviewStatus, isPending } = useMutation({;
    mutationFn: async ({;
<<<<<<< HEAD

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
=======
      reviewId,;

>>>>>>> origin/cursor/delete-old-data-records-6bba

    }) => {;
      const { error } = await supabase;"
        .from("reviews");
        .update({ status });


<<<<<<< HEAD
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

      case "rejected":;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        return "bg-red-100 text-red-800 hover:bg-red-200",;
      default:;"
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    }


  const getInitials = (name: string) => {;
    return name;"
      .split(" ");
      .map((n) => n[0]);"
      .join("");

<<<<<<< HEAD
      .toUpperCase();

=======

  if (isLoading) {;

    return (

>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="space-y-4">;
        <div className="h-12 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
        <div className="h-16 w-full bg-muted rounded animate-pulse" />;
      </div>;
  if (reviews && reviews.length === 0) {;
    return (
    ),;
  }
;
  if (reviews.length === 0) {;
    return (;
    );
  }

<<<<<<< HEAD

=======
    return (
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="py-10 text-center">;
        <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3>;

        <p className="text-muted-foreground">;
          All reviews have been processed. Check back later for new submissions.;
        </p>;
      </div>;

<<<<<<< HEAD
  const handleApprove = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: "approved" });
  };
  const handleReject = (reviewId: string) => {;
    updateReviewStatus({ reviewId, status: "rejected" });
  };

    );
  }



=======

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
    return (
    return ("
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="flex">;
        {[1, 2, 3, 4, 5].map((star) => (;
          <Star;
            key={star}"`

            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />;
        ))}
<<<<<<< HEAD



=======
      </div>;
    );
  };
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from './react';

import { use_mutation } from '@tanstack / react - query';
import { Check, X, User, Star, MoreHorizontal } from './lucide-react';
import { format } from './date - fns';
import { toast } from '@/hooks / use - toast';
import { supabase } from '@/integrations / supabase / client';

import { Review, ReviewStatus } from '@/types / reviews';
;'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';'
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components / ui / dialog';'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components / ui / dropdown - menu';'
import { Badge } from '@/components / ui / badge';'
import { Button } from '@/components / ui / button';
interface ReviewsModerationTableProps {}
  reviews: Review[],
  is_loading: boolean,
  on_refresh: () => void;
}
export /**;
 * ReviewsModerationTable - Function description;
 */
function ReviewsModerationTable() {}
  const [selected_review, setSelectedReview] = useState < Review | null>(null);
  const [viewDetailsOpen, setViewDetailsOpen] = useState (false);
;
  const { mutate: updateReviewStatus, is_pending } = use_mutation ({}
    mutation_fn: async ({}
      review_id,
      status}: {}
      review_id: string,
      status: ReviewStatus;
  }
;
  const get_initials = (name: string) =>: any {}
    return name;"
      .split (" ");
      .map ((n) => n[0]);"
      .join ("");
      .toUpperCase ();
  }
;
  // Check condition;
if ( {) {}
  $2;
}

      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}

          All reviews have been processed. Check back later for new submissions.;
        </p>;
  const handle_reject = (review_id: string) =>: any {"
    updateReviewStatus ({ review_id, status: "rejected" });
  }
;
  const handleViewDetails = (review: Review) =>: any {}
    setSelectedReview (review),
    setViewDetailsOpen (true);
  }
;
  const render_stars = (rating: number) =>: any {}
    return ("
      <div className="flex">;
        {[1, 2, 3, 4, 5].map ((star) => (
          <Star;
            key={star}

<<<<<<< HEAD
            className={`h - 4 w - 4 ${star <= rating ? "fill - yellow - 400 text - yellow - 400" : "text - gray - 300"}`}
          />))}
      </div>);
  }
;
  return (
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <>;
      <Table>;
        <TableHeader>;
          <TableRow>;


<<<<<<< HEAD

=======
                        src={review.reviewer_profile.avatar_url}"
                        alt={review.reviewer_profile.display_name |""}
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      />
                    ) : (
                      <AvatarFallback>
                        {review.reviewer_profile?.display_name;
                          ? getInitials(review.reviewer_profile.display_name)

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                          : <User className="h-4 w-4" />}

  return (
    <>;
</Star>
      <Table>;
</Table>
        <TableHeader>;
</TableHeader>
          <TableRow>;
</TableRow>
                      <AvatarImage;

                        src={review.reviewer_profile.avatar_url}"
                        alt={review.reviewer_profile.display_name |""}"
                      />
</AvatarImage>
                      <AvatarFallback>
</AvatarFallback>"
                          : <User className="h-4 w-4" />}"
</User>
                      </AvatarFallback>;
                  </Avatar>;
                  <div>;
</div>"
                      <span className="text-sm font-medium">Anonymous</span>;""
                      <span className="text-sm font-medium">;"
</span>
                      </span>;
            <TableHead>Reviewer</TableHead>;
            <TableHead>Rating</TableHead>;
            <TableHead>Date</TableHead>;
            <TableHead>Status</TableHead>;
            <TableHead>Reports</TableHead>;"
            <TableHead className="text-right">Actions</TableHead>;"
          </TableRow>;
        </TableHeader>;
        <TableBody>;
</TableBody>
            <TableRow key={review.id}>;
</TableRow>
              <TableCell>;
</TableCell>"
                <div className="flex items-center gap-2">;"
</div>"
                  <Avatar className="h-8 w-8">;"
</Avatar>
                      <AvatarImage;
                  </Avatar>;
</AvatarImage>
                  <div>;

                    )}
                  </div>;
                </div>;
              </TableCell>;

              <TableCell>{renderStars(review && review.rating)}</TableCell>;
              <TableCell>;
</TableCell>
              </TableCell>;
              <TableCell>;

                  className={`${getStatusColor(review && review.status as ReviewStatus)}`}>;
</Badge>
                </Badge>;
              </TableCell>;
              <TableCell>;

                  "None";
                )}
              </TableCell>;"
              <TableCell className="text-right">;"
                <div className="flex justify-end gap-2">;

                  {review && review.status === "pending" && (;
                    <>;
<<<<<<< HEAD
=======

                  {review && review.status === "pending" && (;
                    <>;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"

                        onClick={() => handleApprove(review && review.id)}

                        disabled={isPending}
                      >;
                        <Check className="h-4 w-4 text-green-500" />;
                      </Button>;


                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"

                        onClick={() => handleReject(review && review.id)}

                        disabled={isPending}
                      >;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                        <X className="h-4 w-4 text-red-500" />;

                      </Button>;
                    </>;
                  )}
                  <DropdownMenu>;
                    <DropdownMenuTrigger asChild>;

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <TableHead > Reviewer</TableHead>;
            <TableHead > Rating</TableHead>;
            <TableHead > Date</TableHead>;
            <TableHead > Status</TableHead>;

          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {reviews.map ((review) => (
            <TableRow key={review.id}>;

                    {review.reviewer_profile?.avatar_url ? (
                      <AvatarImage;
                        src={review.reviewer_profile.avatar_url}"
                        alt={review.reviewer_profile.display_name || ""}
                      />) : (
                      <AvatarFallback>;
                        {review.reviewer_profile?.display_name;

                        {review.reviewer_profile?.display_name || "User"}
            <TableHead > Reports</TableHead>;"
            <TableHead className="text - right">Actions</TableHead>;"
          </TableRow>;
        </TableHeader>;
        <TableBody>;
</TableBody>
            <TableRow key={review.id}>;
</TableRow>
              <TableCell>;
</TableCell>"
                <div className="flex items - center gap - 2">;"
</div>"
                  <Avatar className="h - 8 w - 8">;"
</Avatar>
                      <AvatarImage;
                        src={review.reviewer_profile.avatar_url}"
                        alt={review.reviewer_profile.display_name || ""}"
                      />) : (
</AvatarImage>
                      <AvatarFallback>;
</AvatarFallback>"
                          : <User className="h - 4 w - 4" />}"
</User>)
                      </AvatarFallback>)}
                  </Avatar>;
                  <div>;
</div>"
                      <span className="text - sm font - medium">Anonymous</span>) : (""
                      <span className="text - sm font - medium">;"
</span>)

                      </span>)}
                  </div>;
                </div>;
              </TableCell>;

              <TableCell>{render_stars (review.rating)}</TableCell>;
              <TableCell>;"
                {format (new Date (review.created_at), "MMM d, yyyy")}
              </TableCell>;
              <TableCell>;
                <Badge;"
                  variant="outline";`
                  className={`${getStatusColor (review.status as ReviewStatus)}`}
                >;
                  {review.status.char_at (0).toUpperCase () + review.status.slice (1)}
                </Badge>;
              </TableCell>;
              <TableCell>;
                {review.report_count > 0 ? ("
                  <Badge variant="destructive">{review.report_count}</Badge>) : ("
                  "None")}

                      </Button>;
                    </>)}
                  <DropdownMenu>;
                    <DropdownMenuTrigger as_child>;

                      </Button>;
                    </DropdownMenuTrigger>;"
                    <DropdownMenuContent align="end">;
                      <DropdownMenuItem on_click={() => handleViewDetails (review)}>;
                        View details;
                      </DropdownMenuItem>;"
                      {review.status === "approved" && ("
                        <DropdownMenuItem on_click={() => updateReviewStatus ({ review_id: review.id, status: "rejected" })}>;
                          Mark as rejected;

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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: "approved" })}>
                          Mark as approved
                        </DropdownMenuItem>
                      )}
<<<<<<< HEAD

                        <DropdownMenuItem on_click={() => updateReviewStatus ({ review_id: review.id, status: "approved" })}>;
=======


"
                      {review.status === "approved" && (;"
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId:review.id, status:"rejected" })}>;
                          Mark as rejected;
                        </DropdownMenuItem>;
                      )}"
                      {review.status === "rejected" && (;"

                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId:review.id, status:"approved" })}>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                          Mark as approved;
                        </DropdownMenuItem>;                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
              </TableCell>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          ))}

        </TableBody>;
      </Table>;

<<<<<<< HEAD

                  )}
                  {selectedReview && selectedReview.quality_rating && (;

                    <Badge variant="outline">;
                      Quality: {selectedReview && selectedReview.quality_rating}/5;
                    </Badge>;
                  )}

                    <Badge variant="outline">;
                      Timeliness: {selectedReview && selectedReview.timeliness_rating}/5;
                    </Badge>;
                  )}
                  {selectedReview && selectedReview.would_work_again !== undefined && (;

                    <Badge
                      variant={selectedReview && selectedReview.would_work_again ? "default" : "secondary"}
                      className={selectedReview && selectedReview.would_work_again ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>;
                      {selectedReview && selectedReview.would_work_again ? "Would work again" : "Would not work again"}
=======
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
                      <AvatarImage
                        src={selectedReview && selectedReview.reviewer_profile.avatar_url}

                        alt={selectedReview && selectedReview.reviewer_profile.display_name || ""}
                      />;
                    ) : (;
                      <AvatarFallback>;
                        {selectedReview && selectedReview.reviewer_profile?.display_name;
                          ? getInitials(selectedReview && selectedReview.reviewer_profile.display_name);
"
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>;
                    )}

                  )}
                  {selectedReview && selectedReview.quality_rating && (;"

      <Table>;

        <TableHeader>;

          <TableRow>;

: <User className="h-4 w-4" />}
                    {selectedReview.reviewer_profile?.avatar_url ? (;
                      <AvatarImage;

                        src={review.reviewer_profile.avatar_url}"
                        alt={review.reviewer_profile.display_name |""}"

                      <AvatarFallback>
                          : <User className="h-4 w-4" />}"

                  <div>;
                    <div className="font-medium">;

>>>>>>> origin/cursor/delete-old-data-records-6bba

                  <p className="text-sm text-red-700">;
                    This review has been reported by users and may need investigation.;
                  </p>;
                </div>;
              )}
            </div>;

<<<<<<< HEAD

=======
              <TableCell>;
                <div className="flex items-center gap-2">;"
                  <Avatar className="h-8 w-8">;"

                  <Button
                    variant="destructive"
                    onClick={() => handleReject(selectedReview && selectedReview.id)}

>>>>>>> origin/cursor/delete-old-data-records-6bba
                    disabled={isPending}
                  >;
                    Reject;
                  </Button>;


                  >;
                    Approve;
                  </Button>;
                </>;
              )}


                  disabled={isPending}
                >;
                  Mark as Rejected;
                </Button>;
              )}

<<<<<<< HEAD

=======

                  onClick={() => updateReviewStatus({ reviewId: selectedReview && selectedReview.id, status: "approved" })}
                  disabled={isPending}
                >;
                  Mark as Approved;
                </Button>;
              )}


>>>>>>> origin/cursor/delete-old-data-records-6bba
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      )}
    </>;

<<<<<<< HEAD
=======

  );
            </TableRow>))}
        </TableBody>;
      </Table>;
      {selected_review && (
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
              <TableCell>{renderStars(review && review.rating)};

                <Badge;"
                  variant="outline""`;
                  className={`${getStatusColor(review && review.status as ReviewStatus)}`}>;

                  <Badge variant="destructive">{review && review.report_count};"
              ;"
              <TableCell className="text-right">;"
                <div className="flex justify-end gap-2">;"
                    <>;"
                  {review && review.status === "pending" && (;"
                      <Button;"
                        size="sm"""
                        variant="outline"""
                        className="h-8 w-8 p-0"")
                        onClick={() => handleApprove(review && review.id)}
                        <Check className="h-4 w-4 text-green-500" />;"

                        className="h-8 w-8 p-0""
                        onClick={() => handleReject(review && review.id)}
                        <X className="h-4 w-4 text-red-500" />;"

                    </>;
                  )}
                  <DropdownMenu>;

                    <DropdownMenuTrigger asChild>;

                        variant="ghost"""
                        className="h-8 w-8 p-0">;"
                        <MoreHorizontal className="h-4 w-4" />;"

                    <DropdownMenuContent align="end">;"

                      <DropdownMenuItem onClick={() => handleViewDetails(review)}>;

                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review && review.id, status: "rejected" })}>;"

                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review && review.id, status: "approved" })}>;"

            <TableHead > Reviewer;
            <TableHead > Rating;
            <TableHead > Date;
            <TableHead > Status;
            <TableHead > Reports;"
            <TableHead className="text - right">Actions;"

                <div className="flex items - center gap - 2">;"
                  <Avatar className="h - 8 w - 8">;"

                        alt={review.reviewer_profile.display_name || ""}"
                      />) : (

                      <AvatarFallback>;

                    <Badge variant="outline" className={getStatusColor (selected_review.status as ReviewStatus)}>;
                      {selected_review.status}
                    </Badge>;
                  </div>;
                </div>;
                <div>{render_stars (selected_review.rating)}</div>;

                    <Badge variant="outline">;
                      Timeliness: {selected_review.timeliness_rating}/5;
                    </Badge>)}
                  {selected_review.would_work_again !== undefined && (

                      {selected_review.would_work_again ? "Would work again" : "Would not work again"}
                    </Badge>)}
                </div>;
              </div>;

                  <p className="text - sm text - red - 700">;
                    This review has been reported by users and may need investigation.;
                  </p>;
                </div>)}
            </div>;

            <DialogFooter>;

                    variant="destructive""
                    onClick={() => handleReject(selectedReview && selectedReview.id)}

                  <Button;

                    on_click={() => handle_reject (selected_review.id)}

                    on_click={() => handle_approve (selected_review.id)}

                  on_click={() => updateReviewStatus ({ review_id: selected_review.id, status: "rejected" })}
                  disabled={is_pending}
                >;
                  Mark as Rejected;

                  on_click={() => updateReviewStatus ({ review_id: selected_review.id, status: "approved" })}
                  disabled={is_pending}
                >;
                  Mark as Approved;
                </Button>)}
            </DialogFooter>;
          </DialogContent>;
        </Dialog>)}
    </>);


  ),; import {
  // TODO: Implement
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
  // TODO: Implement
  Dialog;
DialogContent;
DialogDescription;
DialogFooter;
DialogHeader;
  // TODO: Implement
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
  // TODO: Implement
  reviews: Review[];,
}export function ReviewsModerationTable ({
  reviews;
isLoading;
onRefresh;)
}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null> (null);
return (<div className="space-y-4"> <div className="h-12 w-full bg-muted rounded animate-pulse"/> <div className="h-16 w-full bg-muted rounded animate-pulse"/> <div className="h-16 w-full bg-muted rounded animate-pulse"/> <div className="h-16 w-full bg-muted rounded animate-pulse"/> </div> if (reviews.length === 0) {""
  return (<div className="py-10 text-center"> <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3> <p className="text-muted-foreground"> All reviews have been processed. Check back later for new submissions. </p> </div>""
  return (<div className="flex"> {"
  [1, 2, 3, 4, 5].map ( (star) => (<Star key= {
  star;)
}/>) ) 

}</div>) "
return (<> <Table> <TableHeader> <TableRow> <TableHead>Reviewer <TableHead>Rating <TableHead>Date <TableHead>Status <TableHead>Reports <TableHead className="text-right">Actions   <TableBody> {"
  reviews.map ( (review) => (<TableRow key= {
  review.id;"
}> <TableCell> <div className="flex items-center gap-2"> <Avatar className="h-8 w-8"> {"

  review.reviewer profile?.avatar url ? (<AvatarImage src= {
  review.reviewer profile.avatar url;
}alt= {"
  review.reviewer profile.display name || """)
}/>) : (<AvatarFallback> {
)"
  review.reviewer profile?.display name ? getInitials (review.reviewer profile.display name) : <User className=" h-4 w-4"/>"

}) "
} <div>) : (<span className=" text-sm font-medium"> {"
}</span>) 
}</div> </div>  <TableCell> {

} <TableCell> > {
}  <TableCell>) : (" None")"
} <Button size=" sm"variant=" outline"className=" h-8 w-8 p-0"onClick= {"
  () => handleApprove (review.id) 
}> <Check className=" h-4 w-4 text-green-500"/>  <Button > <X className=" h-4 w-4 text-red-500"/>  </>)"
}<DropdownMenu> <DropdownMenuTrigger asChild> <Button variant=" ghost"size=" sm"className=" h-8 w-8 p-0"> <MoreHorizontal className=" h-4 w-4"/>   Mark as approved )"

}  </div>  ) ) "
}    <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div className=" flex items-center gap-2"> <Avatar> {"
  selectedReview.reviewer profile?.avatar url ? (<AvatarImage src= {
  selectedReview.reviewer profile.avatar url;
  selectedReview.reviewer profile.display name || """)
  selectedReview.reviewer profile?.display name ? getInitials (selectedReview.reviewer profile.display name) : <User className="h-4 w-4"/>"

}) 
} <div>  </div> </div> <div> {
  renderStars (selectedReview.rating) "
}</div> </div> <div className="border rounded-md p-3 bg-muted/20"> <p className="whitespace-pre-wrap"> {"
}</p> </div> <div className="space-y-2"> <h4 className="text-sm font-medium">Additional Ratings</h4> Timeliness: {"
}/5 ) 
  selectedReview.would work again !== undefined && (<Badge ) 
}</div> </div> {"
  selectedReview.report count > 0 && (<div className="bg-red-50 border border-red-200 rounded-md p-3"> <h4 className="text-sm font-medium text-red-800">Reports: {"
</div>)"
}</h4> <p className="text-sm text-red-700"> This review has been reported by users and may need investigation. </p> </div>)""
}</div> <DialogFooter> <Button variant=" destructive" onClick= {"

}> Reject  <Button onClick= {
  () => handleApprove (selectedReview.id) 

}> Approve  </>) 
}> Mark as Rejected ) 
}> Mark as Approved ) 
}  ) 
}</>) 
        <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>
          <DialogContent className="max-w-lg">"

            <DialogHeader>

              <DialogTitle>Review Details
              <DialogDescription>

              <div className="flex items-center justify-between">"
                <div className="flex items-center gap-2">"
                  <Avatar>

                        src={selectedReview.reviewer_profile.avatar_url}"
                        alt={selectedReview.reviewer_profile.display_name |""}"

                  <div>
                    <div className="font-medium">"
                    <Badge variant="outline" className={getStatusColor(selectedReview.status as ReviewStatus)}>"

                <div>{renderStars(selectedReview.rating)}</div>
              <div className="border rounded-md p-3 bg-muted/20">"
                <p className="whitespace-pre-wrap">{selectedReview.review_text}</p>"
              <div className="space-y-2">"
                <h4 className="text-sm font-medium">Additional Ratings</h4>""
                <div className="flex flex-wrap gap-2">"
                    <Badge variant="outline">"

                      variant={selectedReview.would_work_again ? "default" : "secondary"}""
                      className={selectedReview.would_work_again ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}"

                <div className="bg-red-50 border border-red-200 rounded-md p-3">"
                  <h4 className="text-sm font-medium text-red-800">Reports: {selectedReview.report_count}</h4>""
                  <p className="text-sm text-red-700">"
            <DialogFooter>

                <>
                    onClick={() => handleReject(selectedReview.id)}

                    onClick={() => handleApprove(selectedReview.id)}

              {selectedReview.status === "approved" && ("
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: "rejected" })}"

                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, status: "approved" })}"

}"`;
pr-12325
</Button>
                </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    </>
  )


>>>>>>> origin/cursor/delete-old-data-records-6bba
}