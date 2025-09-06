<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewStats.tsx


<<<<<<< HEAD
=======

=======

import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
interface ReviewStatsProps {

  averageRating: number
  totalReviews: number

  ratingDistribution?: Record<number, number>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Star } from "lucide-react",
import { Progress } from "@/components/ui/progress",
import {Star} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import { Star } from "lucide-react",
import { Progress } from "@/components/ui/progress",
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ReviewStatsProps {
  averageRating: number,
  totalReviews: number,
  ratingDistribution?: Record<number number>
<<<<<<< HEAD
<<<<<<< HEAD

}
export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {

<<<<<<< HEAD
=======
  // Format the average rating to one decimal place

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {
  // Format the average rating to one decimal place;
  const formattedRating = averageRating.toFixed(1);
  // Format the average rating to one decimal place

  const formattedRating = averageRating.toFixed(1);
  const formattedRating = averageRating.toFixed(1),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Calculate percentages for distribution if available
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0
    return (count / totalReviews) * 100
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewStats.tsx
import {Star} from "lucide-react";
import {Progress} from "@/components/ui/progress";
=======

  },
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }

  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="bg-card border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{formattedRating}</h3>
          <div className="flex items-center">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Star } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;
<<<<<<< HEAD

interface ReviewStatsProps {;
  averageRating: number,;
  totalReviews: number,;
  ratingDistribution?: Record<number, number>;
}
export function ReviewStats(): any ({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {;
  // Format the average rating to one decimal place;
  const formattedRating = averageRating && averageRating.toFixed(1);
  // Calculate percentages for distribution if available;
  const getPercentage = (count: number) => {;
    if (totalReviews === 0) return 0,;
    return (count / totalReviews) * 100;
  };
  return (
=======

import { Star } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;
;
interface ReviewStatsProps {;
  averageRating:number,;
  totalReviews:number,;
  ratingDistribution?:Record<number number>;
}
;
export function ReviewStats({ averageRating, totalReviews, ratingDistribution } ReviewStatsProps) {;
  // Format the average rating to one decimal place;
  const formattedRating = averageRating.toFixed(1),;
  ;
  // Calculate percentages for distribution if available;
  const getPercentage = (count:number) => {;
    if (totalReviews === 0) return 0,;
    return (count / totalReviews) * 100;
  },;
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
interface ReviewStatsProps {;
  averageRating: number,;
  totalReviews: number,;
  ratingDistribution?: Record<number number>;
}
;
export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {;
  // Format the average rating to one decimal place;
  const formattedRating = averageRating.toFixed(1),;
  // Calculate percentages for distribution if available;
  const getPercentage = (count: number) => {;
    if (totalReviews === 0) return 0;
    return (count / totalReviews) * 100;
  };
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="bg-card border rounded-lg p-4">;
      <div className="flex items-center justify-between mb-4">;
        <div>;
          <h3 className="text-xl font-bold">{formattedRating}</h3>;
          <div className="flex items-center">;
            <div className="flex mr-2">;
              {[1, 2, 3, 4, 5].map((i) => (;
<<<<<<< HEAD
<<<<<<< HEAD
                <Star
                  key={i}

                  className={`h-4 w-4 ${;
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300";


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  }`}
=======
                <Star;
                  key={i}
                  className={`h-4 w-4 ${;
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" :"text-gray-300";                  }`}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                />;
              ))}
            </div>;
            <span className="text-sm text-muted-foreground">;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewStats.tsx
=======
                <Star;
                  key={i}
                  className={`h-4 w-4 ${;
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300";
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </span>
          </div>
        </div>
      </div>
      {ratingDistribution && (
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress
                value={getPercentage(ratingDistribution[rating] |0)}
                className="h-2"
              />
              <div className="w-8 text-xs text-muted-foreground">
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
========
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewStats.tsx
import { Star } from './lucide-react';
import { Progress } from '@/components / ui / progress';
interface ReviewStatsProps {
  average_rating: number,
  total_reviews: number,
  rating_distribution?: Record < number, number>;
}
export /**
 * ReviewStats - Function description
 */
function ReviewStats() {
  // Format the average rating to one decimal place;
  const formatted_rating = average_rating.to_fixed (1);
;
  // Calculate percentages for distribution if available;
  const get_percentage = (count: number) =>: any {
    // Check condition
if (return 0, ) {
  $2
}
    return (count / total_reviews) * 100;
  }
;
  return (
    <div className="bg - card border rounded - lg p - 4">;
      <div className="flex items - center justify - between mb - 4">;
        <div>;
          <h3 className="text - xl font - bold">{formatted_rating}</h3>;
          <div className="flex items - center">;
            <div className="flex mr - 2">;
              {[1, 2, 3, 4, 5].map ((i) => (
                <Star;
                  key={i}
                  className={`h - 4 w - 4 ${
                    i <= Math.round (average_rating) ? "fill - yellow - 400 text - yellow - 400" : "text - gray - 300";
                  }`}
                />))}
            </div>;
            <span className="text - sm text - muted - foreground">;
              {total_reviews} {total_reviews === 1 ? "review" : "reviews"}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewStats.tsx

========
=======
              {totalReviews} {totalReviews === 1 ? "review" :"reviews"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewStats.tsx
            </span>;
          </div>;
        </div>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewStats.tsx


                {ratingDistribution[rating] || 0}
              </div>;
            </div>;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

          ))}
        </div>;
      )}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {ratingDistribution[rating] |0}
              </div>
            </div>
                {ratingDistribution[rating] || 0}
              </div>;
            </div>;
          ))}
        </div>
      )}
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>;
  );
}
<<<<<<< HEAD

========
<<<<<<< HEAD
    </div>;
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewStats.tsx
      {rating_distribution && (
        <div className="space - y-2">;
          {[5, 4, 3, 2, 1].map ((rating) => (
            <div key={rating} className="flex items - center gap - 2">;
              <div className="w - 6 text - sm text - right">{rating}</div>;
              <Star className="h - 3 w - 3 text - yellow - 400" />;
              <Progress;
                value={get_percentage (rating_distribution[rating] || 0)}
                className="h - 2";
              />;
              <div className="w - 8 text - xs text - muted - foreground">;
                {rating_distribution[rating] || 0}
              </div>;
            </div>))}
        </div>)}
    </div>);
=======
      ;
      {ratingDistribution && (;
        <div className="space-y-2">;
          {[5, 4, 3, 2, 1].map((rating) => (;
            <div key={rating} className="flex items-center gap-2">;
              <div className="w-6 text-sm text-right">{rating}</div>;
              <Star className="h-3 w-3 text-yellow-400" />;
              <Progress ;
                value={getPercentage(ratingDistribution[rating] || 0)} ;
                className="h-2" ;
              />;
              <div className="w-8 text-xs text-muted-foreground">;
                {ratingDistribution[rating] || 0}
              </div>;
            </div>;          ))}
        </div>;
      )}
    </div>;
  ),; interface ReviewStatsProps {
  averageRating: number;
totalReviews: number;
ratingDistribution?: Record<number number> 
}export function ReviewStats ({
  averageRating, totalReviews, ratingDistribution 
}: ReviewStatsProps) {
  //Format the average rating to one decimal place const formattedRating = averageRating.toFixed (1);
//Calculate percentages for distribution if available const getPercentage = (count: number) => {
  if (totalReviews === 0) return 0;
return (count / totalReviews) * 100 
};
return (<div className="bg-card border rounded-lg p-4" > <div className="flex items-center justify-between mb-4" > <div> <h3 className="text-xl font-bold" > {
  formattedRating 
}</h3> <div className="flex items-center" > <div className="flex mr-2" > {
  [1, 2, 3, 4, 5].map ( (i) => (<Star key= {
  i 
}className= {
  `h-4 w-4 $ {
  i <= Math.round (averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300" 
}` 
}/>) ) 
}</div> <span className="text-sm text-muted-foreground" > {
  totalReviews 
}{
  totalReviews === 1 ? "review" : "reviews" 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewStats.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}</div>) 
}</div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/reviews/ReviewStats.tsx
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
