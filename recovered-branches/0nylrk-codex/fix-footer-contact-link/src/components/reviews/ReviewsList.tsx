<<<<<<< HEAD
<<<<<<< HEAD

import { Review } from "@/types/reviews";
import { ReviewCard } from "./ReviewCard";
import { Review } from "@/types/reviews",
import { ReviewCard } from "./ReviewCard",
import {Review} from "@/types/reviews";
import {ReviewCard} from "./ReviewCard";
import { Review } from "@/types/reviews",
import { ReviewCard } from "./ReviewCard",

import { Review } from "@/types/reviews",
import { ReviewCard } from "./ReviewCard",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ReviewsListProps {
  reviews: Review[];
  isLoading: boolean;
  onReportReview: (reviewId: string, reason: string) => Promise<boolean>
}
export function ReviewsList({
  reviews
  isLoading
  onReportReview
}: ReviewsListProps) {
  if (isLoading) {
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { Review } from "@/types/reviews";
=======
import { Review } from "@/types/reviews";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ReviewCard } from "./ReviewCard";
interface ReviewsListProps {}
  reviews: Review[];
  isLoading: boolean;
  onReportReview: (reviewId: string, reason: string) => Promise<boolean>;
}

export function ReviewsList({
  reviews,
  isLoading,
  onReportReview,
}: ReviewsListProps) {
  if (isLoading) {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="space - y-4">;
=======
      <div className="space-y-4">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        {Array (3);
          .fill (0);
          .map ((_, i) => (
            <div;
<<<<<<< HEAD
              key={i}
              className="border rounded-lg p-4 bg-card animate-pulse"
=======
              key={i}              className="border rounded-lg p-4 bg-card animate-pulse"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <div className="h-4 w-24 bg-muted rounded mb-2"></div>
                  <div className="h-3 w-16 bg-muted rounded"></div>
                </div>
              </div>
              <div className="h-20 bg-muted rounded mb-3"></div>
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-muted rounded"></div>
                <div className="h-6 w-16 bg-muted rounded"></div>
              </div>
            </div>
<div className="h-20 bg-muted rounded mb-3"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-muted rounded"></div>
              <div className="h-6 w-16 bg-muted rounded"></div>
            </div>
          </div>
import { Review } from "@/types/reviews",;
import { ReviewCard } from "./ReviewCard",;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return (
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      <div className="space-y-4">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
import {Review} from "@/types/reviews";
import {ReviewCard} from "./ReviewCard";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ReviewsListProps {;
  reviews: Review[],;
isLoading: boolean;
  onReportReview: (reviewId: string, reason: string) => Promise<boolean>;
}
<<<<<<< HEAD

export function ReviewsList(): any ({ reviews, isLoading, onReportReview }: ReviewsListProps) {;
  if (isLoading) {;
    return (
      <div className="space-y-4">;
        {Array(3).fill(0).map((_, i) => (;
          <div key={i} className="border rounded-lg p-4 bg-card animate-pulse">;
            <div className="flex items-center gap-3 mb-3">;
              <div className="h-10 w-10 rounded-full bg-muted"></div>;
              <div>;
                <div className="h-4 w-24 bg-muted rounded mb-2"></div>;
                <div className="h-3 w-16 bg-muted rounded"></div>;
              </div>;
            </div>;
            <div className="h-20 bg-muted rounded mb-3"></div>;
            <div className="flex gap-2">;
              <div className="h-6 w-16 bg-muted rounded"></div>;
              <div className="h-6 w-16 bg-muted rounded"></div>;
            </div>;
          </div>;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              className="border rounded-lg p-4 bg-card animate-pulse"
=======
              key={i}              className="border rounded-lg p-4 bg-card animate-pulse"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <div className="h-4 w-24 bg-muted rounded mb-2"></div>
                  <div className="h-3 w-16 bg-muted rounded"></div>
                </div>
              </div>
              <div className="h-20 bg-muted rounded mb-3"></div>
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-muted rounded"></div>
                <div className="h-6 w-16 bg-muted rounded"></div>
              </div>
            </div>
<div className="h-20 bg-muted rounded mb-3"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-muted rounded"></div>
              <div className="h-6 w-16 bg-muted rounded"></div>
            </div>
          </div>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        ))}
<<<<<<< HEAD
      </div>;
      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    );
  }

  if (reviews.length === 0) {}
    return ("
      <div className="text-center py-8 border rounded-lg bg-muted/20">"
        <h3 className="text-lg font-medium mb-1">No Reviews Yet</h3>"
        <p className="text-muted-foreground">
          Once reviews are submitted and approved, they will appear here.
        </p>
      </div>
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD

  return (

  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <div className="text - center py - 8 border rounded - lg bg - muted / 20">;"
        <h3 className="text - lg font - medium mb - 1">No Reviews Yet</h3>;"
        <p className="text - muted - foreground">;
          Once reviews are submitted and approved, they will appear here.;
        </p>;
      </div>);
  }
return ("
    <div className="space - y-4">;
      {reviews.map ((review) => (
        <ReviewCard key={review.id} review={review} on_report={onReportReview} />))}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} onReport={onReportReview} />
      ))}
    </div>
  );
}
;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}
;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
;

}
;
pr-12325
</ReviewCard>
    </div>);"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
