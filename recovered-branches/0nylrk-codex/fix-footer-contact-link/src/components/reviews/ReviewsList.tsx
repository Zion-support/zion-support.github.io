
<<<<<<< HEAD
<<<<<<< HEAD
import { Review } from "@/types/reviews",
import { ReviewCard } from "./ReviewCard",
=======
import { Review } from &quot;@/types/reviews&quot;;
import { ReviewCard } from &quot;./ReviewCard&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ReviewsListProps {
  reviews: Review[],
  isLoading: boolean,
  onReportReview: (reviewId: string, reason: string) => Promise<boolean>
}

export function ReviewsList({ reviews, isLoading, onReportReview }: ReviewsListProps) {
  if (isLoading) {
    return (
      <div className=&quot;space-y-4&quot;>
        {Array(3).fill(0).map((_, i) => (
          <div key={i} className=&quot;border rounded-lg p-4 bg-card animate-pulse&quot;>
            <div className=&quot;flex items-center gap-3 mb-3&quot;>
              <div className=&quot;h-10 w-10 rounded-full bg-muted&quot;></div>
              <div>
                <div className=&quot;h-4 w-24 bg-muted rounded mb-2&quot;></div>
                <div className=&quot;h-3 w-16 bg-muted rounded&quot;></div>
              </div>
            </div>
            <div className=&quot;h-20 bg-muted rounded mb-3&quot;></div>
            <div className=&quot;flex gap-2&quot;>
              <div className=&quot;h-6 w-16 bg-muted rounded&quot;></div>
              <div className=&quot;h-6 w-16 bg-muted rounded&quot;></div>
            </div>
          </div>
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        ))}
      </div>;
    );
  }
<<<<<<< HEAD
  
  if (reviews.length === 0) {
    return (
      <div className=&quot;text-center py-8 border rounded-lg bg-muted/20&quot;>
        <h3 className=&quot;text-lg font-medium mb-1&quot;>No Reviews Yet</h3>
        <p className=&quot;text-muted-foreground&quot;>
          Once reviews are submitted and approved, they will appear here.
        </p>
      </div>
    )
  }
  
  return (
    <div className=&quot;space-y-4&quot;>
      {reviews.map((review) => (
        <ReviewCard 
          key={review.id} 
          review={review} 
          onReport={onReportReview} 
        />
=======
;
  if (reviews.length === 0) {;
    return (;
      <div className="text-center py-8 border rounded-lg bg-muted/20">;
        <h3 className="text-lg font-medium mb-1">No Reviews Yet</h3>;
        <p className="text-muted-foreground">;
          Once reviews are submitted and approved, they will appear here.;
        </p>;
      </div>;
    );
  }
;
  return (;
    <div className="space-y-4">;
      {reviews.map((review) => (;
        <ReviewCard;
          key={review.id} ;
          review={review} ;
          onReport={onReportReview} ;
        />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      ))}
    </div>;
  );
}
;