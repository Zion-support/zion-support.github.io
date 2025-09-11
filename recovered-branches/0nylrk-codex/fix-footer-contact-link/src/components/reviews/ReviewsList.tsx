
<<<<<<< HEAD
<<<<<<< HEAD
import { Review } from "@/types/reviews",
import { ReviewCard } from "./ReviewCard",

import { Review } from "@/types/reviews";
import { ReviewCard } from "./ReviewCard";
import { Review } from "@/types/reviews",
import { ReviewCard } from "./ReviewCard",
import {Review} from "@/types/reviews";
import {ReviewCard} from "./ReviewCard";
import { Review } from "@/types/reviews",
import { ReviewCard } from "./ReviewCard",

import { Review } from "@/types/reviews";
import { ReviewCard } from "./ReviewCard";

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}: ReviewsListProps) {
  if (isLoading) {
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
    return (
      <div className="space - y-4">;
        {Array (3);
          .fill (0);
          .map ((_, i) => (
            <div;
              key={i}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Review} from "@/types/reviews";
import {ReviewCard} from "./ReviewCard";
interface ReviewsListProps {;
  reviews: Review[],;
  isLoading: boolean,;
  onReportReview: (reviewId: string, reason: string) => Promise<boolean>;
}
<<<<<<< HEAD
<<<<<<< HEAD
export function ReviewsList(): any ({ reviews, isLoading, onReportReview }: ReviewsListProps) {;
  if (isLoading) {;
    return (

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
))}
      </div>
    );
  }
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function ReviewsList(): any ({ reviews, isLoading, onReportReview }: ReviewsListProps) {;
  if (isLoading) {;
    return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


        ))}
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    );
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (reviews && reviews.length === 0) {;
    return (
    ),;
  }
  ;
  if (reviews.length === 0) {;
    return (;
=======
    );
  }
  
  if (reviews.length === 0) {
    return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="text-center py-8 border rounded-lg bg-muted/20">;
        <h3 className="text-lg font-medium mb-1">No Reviews Yet</h3>;
        <p className="text-muted-foreground">;
          Once reviews are submitted and approved, they will appear here.;
        </p>;
      </div>;
<<<<<<< HEAD
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
=======
    );
  }

  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    <div className="space-y-4">
      {reviews.map((review) => (

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

<<<<<<< HEAD
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

        ))}
      </div>;
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
return (
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} onReport={onReportReview} />
        <ReviewCard 
          key={review.id} 
          review={review} 
          onReport={onReportReview} 
        />
      ))}
    </div>
<<<<<<< HEAD
  );
}
  )
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
