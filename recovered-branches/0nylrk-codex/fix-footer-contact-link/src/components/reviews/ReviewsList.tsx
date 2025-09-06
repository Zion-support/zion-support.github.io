<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewsList.tsx


<<<<<<< HEAD
<<<<<<< HEAD
import {Review} from "@/types/reviews";
import {ReviewCard} from "./ReviewCard";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import { Review } from "@/types/reviews",
import { ReviewCard } from "./ReviewCard",

<<<<<<< HEAD
=======
=======
=======
import { Review } from "@/types/reviews";
import { ReviewCard } from "./ReviewCard";
import { Review } from "@/types/reviews",
import { ReviewCard } from "./ReviewCard",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {Review} from "@/types/reviews";
import {ReviewCard} from "./ReviewCard";
import { Review } from "@/types/reviews",
import { ReviewCard } from "./ReviewCard",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import { Review } from "@/types/reviews";
import { ReviewCard } from "./ReviewCard";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ReviewsListProps {
  reviews: Review[];
  isLoading: boolean;
  onReportReview: (reviewId: string, reason: string) => Promise<boolean>
}
export function ReviewsList({
  reviews
  isLoading
  onReportReview
<<<<<<< HEAD
}: ReviewsListProps) {
  if (isLoading) {
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewsList.tsx
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
    return (
      <div className="space - y-4">;
        {Array (3);
          .fill (0);
          .map ((_, i) => (
            <div;
              key={i}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewsList.tsx
<<<<<<< HEAD
=======

import { Review } from "@/types/reviews";
import { ReviewCard } from "./ReviewCard";
interface ReviewsListProps {
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
      <div className="space-y-4">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

import { Review } from "@/types/reviews",;
import { ReviewCard } from "./ReviewCard",;
=======

========
              className="border rounded - lg p - 4 bg - card animate - pulse";
            >;
              <div className="flex items - center gap - 3 mb - 3">;
                <div className="h - 10 w - 10 rounded - full bg - muted"></div>;
                <div>;
                  <div className="h - 4 w - 24 bg - muted rounded mb - 2"></div>;
                  <div className="h - 3 w - 16 bg - muted rounded"></div>;
                </div>;
              </div>;
              <div className="h - 20 bg - muted rounded mb - 3"></div>;
              <div className="flex gap - 2">;
                <div className="h - 6 w - 16 bg - muted rounded"></div>;
                <div className="h - 6 w - 16 bg - muted rounded"></div>;
              </div>;
            </div>))}
      </div>);
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewsList.tsx
import {Review} from "@/types/reviews";
import {ReviewCard} from "./ReviewCard";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ReviewsListProps {;
  reviews: Review[],;
  isLoading: boolean,;
  onReportReview: (reviewId: string, reason: string) => Promise<boolean>;
}
export function ReviewsList(): any ({ reviews, isLoading, onReportReview }: ReviewsListProps) {;
  if (isLoading) {;
    return (
=======

import { Review } from "@/types/reviews",;
import { ReviewCard } from "./ReviewCard",;
;
interface ReviewsListProps {;
  reviews:Review[],;
  isLoading:boolean,;
  onReportReview:(reviewId:string, reason:string) => Promise<boolean>;
}
;
export function ReviewsList({ reviews, isLoading, onReportReview } ReviewsListProps) {;
  if (isLoading) {;
    return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
))}
      </div>
    );
  }
=======
          ))}
      </div>
    );
  }
            <div className="h-20 bg-muted rounded mb-3"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-muted rounded"></div>
              <div className="h-6 w-16 bg-muted rounded"></div>
            </div>
          </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Review } from "@/types/reviews",;
import { ReviewCard } from "./ReviewCard",;
interface ReviewsListProps {;
  reviews: Review[],;
  isLoading: boolean;
  onReportReview: (reviewId: string, reason: string) => Promise<boolean>;
}
;
export function ReviewsList({ reviews, isLoading, onReportReview }: ReviewsListProps) {;
  if (isLoading) {;
    return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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

            <div className="h-20 bg-muted rounded mb-3"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-muted rounded"></div>
              <div className="h-6 w-16 bg-muted rounded"></div>
            </div>
          </div>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

        ))}
      </div>;
<<<<<<< HEAD
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewsList.tsx

<<<<<<< HEAD
  if (reviews.length === 0) {
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewsList.tsx
  if (reviews && reviews.length === 0) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return (
=======
    ),;
  }
  ;
  if (reviews.length === 0) {;
    return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <div className="text-center py-8 border rounded-lg bg-muted/20">;
        <h3 className="text-lg font-medium mb-1">No Reviews Yet</h3>;
        <p className="text-muted-foreground">;
          Once reviews are submitted and approved, they will appear here.;
        </p>;
      </div>;
<<<<<<< HEAD
    );
  }
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewsList.tsx

========
    <div className="space-y-4">;
      {reviews && reviews.map((review) => (;
        <ReviewCard
          key={review && review.id} 
          review={review} 
          onReport={onReportReview} 
        />;
      ))}
    </div>;
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewsList.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewsList.tsx

=======
    <div className="space-y-4">
      {reviews.map((review) => (

<<<<<<< HEAD
      ))}
    </div>

=======
        <ReviewCard 
          key={review.id} 
          review={review} 
          onReport={onReportReview} 
        />

      ))}
    </div>

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
    ),;
  }
  ;
  return (;
    <div className="space-y-4">;
      {reviews.map((review) => (;
        <ReviewCard ;
          key={review.id} ;
          review={review} ;
          onReport={onReportReview} ;
        />;
      ))}
    </div>;
  ),;}
 interface ReviewsListProps {
  reviews: Review[];
isLoading: boolean;
onReportReview: (reviewId: string, reason: string) => Promise<boolean> 
}reviews, isLoading, onReportReview 
}: ReviewsListProps) {
  if (isLoading) {
  return (<div> <div className="h-4 w-24 bg-muted rounded mb-2" ></div> <div className="h-3 w-16 bg-muted rounded" ></div> </div> </div> <div className="h-20 bg-muted rounded mb-3" ></div> <div className="flex gap-2" > <div className="h-6 w-16 bg-muted rounded" ></div> <div className="h-6 w-16 bg-muted rounded" ></div> </div> </div>) ) 
}</div>) 
}<ReviewCard key= {
  review.id 
}review= {
  review 
}onReport= {
  onReportReview 
}/>) ) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewsList.tsx
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        ))}
      </div>;
    );
  }
<<<<<<< HEAD

=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
return (
    <div className="space-y-4">
      {reviews.map((review) => (
<<<<<<< HEAD

        <ReviewCard key={review.id} review={review} onReport={onReportReview} />
      ))}
    </div>
);
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        <ReviewCard key={review.id} review={review} onReport={onReportReview} />
        <ReviewCard 
          key={review.id} 
          review={review} 
          onReport={onReportReview} 
        />
      ))}
    </div>
  );
}
  )
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
