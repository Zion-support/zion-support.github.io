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
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



import { Review } from "@/types/reviews",
import { ReviewCard } from "./ReviewCard",

=======
import {Review} from "@/types/reviews";
import {ReviewCard} from "./ReviewCard";
=======
import { Review } from "@/types/reviews",
import { ReviewCard } from "./ReviewCard",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
import { ReviewCard } from "./ReviewCard";
interface ReviewsListProps {
  reviews: Review[];
  isLoading: boolean;
  onReportReview: (reviewId: string, reason: string) => Promise<boolean>;
}
<<<<<<< HEAD

export function ReviewsList({
  reviews,
  isLoading,
  onReportReview,
}: ReviewsListProps) {
  if (isLoading) {
    return (
<<<<<<< HEAD
      <div className="space - y-4">;
        {Array (3);
          .fill (0);
          .map ((_, i) => (
            <div;
              key={i}
              className="border rounded-lg p-4 bg-card animate-pulse"
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
<<<<<<< HEAD
            <div className="h-20 bg-muted rounded mb-3"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-muted rounded"></div>
              <div className="h-6 w-16 bg-muted rounded"></div>
            </div>
          </div>
<<<<<<< HEAD
import { Review } from "@/types/reviews",;
import { ReviewCard } from "./ReviewCard",;
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { Review  } from '@/types / reviews';
import { ReviewCard  } from './ReviewCard';
interface ReviewsListProps {
  reviews: Review[];
  is_loading: boolean;
  onReportReview: (review_id: string, reason: string) => Promise < boolean>;
}
export /**
 * ReviewsList - Function description
 */
function ReviewsList() {
  // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD

import {Review} from "@/types/reviews";
import {ReviewCard} from "./ReviewCard";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ReviewsListProps {;
  reviews: Review[],;
<<<<<<< HEAD
  isLoading: boolean;
  onReportReview: (reviewId: string, reason: string) => Promise<boolean>;
}
<<<<<<< HEAD

export function ReviewsList(): any ({ reviews, isLoading, onReportReview }: ReviewsListProps) {;
  if (isLoading) {;
    return (
=======
;
export function ReviewsList({ reviews, isLoading, onReportReview }: ReviewsListProps) {;
  if (isLoading) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              className="border rounded-lg p-4 bg-card animate-pulse"
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
<<<<<<< HEAD

            <div className="h-20 bg-muted rounded mb-3"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-muted rounded"></div>
              <div className="h-6 w-16 bg-muted rounded"></div>
            </div>
          </div>


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        ))}
<<<<<<< HEAD
<<<<<<< HEAD
      </div>;
=======
          ))}
      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 border rounded-lg bg-muted/20">
        <h3 className="text-lg font-medium mb-1">No Reviews Yet</h3>
        <p className="text-muted-foreground">
          Once reviews are submitted and approved, they will appear here.
        </p>
      </div>
    );
  }

=======
=======
          ))}
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 border rounded-lg bg-muted/20">
        <h3 className="text-lg font-medium mb-1">No Reviews Yet</h3>
        <p className="text-muted-foreground">
          Once reviews are submitted and approved, they will appear here.
        </p>
      </div>
    );
  }

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (

  // Check condition
if ( {) {
  $2
}
    return (
      <div className="text - center py - 8 border rounded - lg bg - muted / 20">;
        <h3 className="text - lg font - medium mb - 1">No Reviews Yet</h3>;
        <p className="text - muted - foreground">;
          Once reviews are submitted and approved, they will appear here.;
        </p>;
      </div>);
  }
  return (
    <div className="space - y-4">;
      {reviews.map ((review) => (
        <ReviewCard key={review.id} review={review} on_report={onReportReview} />))}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} onReport={onReportReview} />
      ))}
    </div>
  );
}
;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
