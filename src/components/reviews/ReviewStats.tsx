<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
  const formattedRating = null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Star } from 'lucide-react'
import { Progress } from "@/components/ui/progress",
interface ReviewStatsProps {
  averageRating: number,
  totalReviews: number,
  ratingDistribution?: Record<number number>
}

export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {
  // Format the average rating to one decimal place
  const formattedRating = averageRating.toFixed(1),
  
  // Calculate percentages for distribution if available
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0,
    return (count / totalReviews) * 100
  },
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Star } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
interface ReviewStatsProps {
  averageRating: number;
  totalReviews: number;
  ratingDistribution?: Record<number, number>
export function ReviewStats({
  averageRating
  totalReviews
  ratingDistribution
}: ReviewStatsProps) {
  // Format the average rating to one decimal place
  const formattedRating = null;
  const formattedRating = averageRating.toFixed(1)
  // Calculate percentages for distribution if available
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0
    return (count / totalReviews) * 100
  }

import { Star } from 'lucide-react'
import { Progress } from "@/components/ui/progress",
interface ReviewStatsProps {
  averageRating: number,
  totalReviews: number,
  ratingDistribution?: Record<number number>
}

export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {
  // Format the average rating to one decimal place
  const formattedRating = averageRating.toFixed(1),
  
  // Calculate percentages for distribution if available
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0,
    return (count / totalReviews) * 100
  },
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="bg-card border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
  
>>>>>>>   return (
    <div className="bg-card border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <h3 className='text-xl font-bold'>{formattedRating}</h3>
          <div className='flex items-center'>
            <div className='flex mr-2'>
              {[1, 2, 3, 4, 5].map(i => (                <Star
                  key = {i,}
                  className={`h-4 w-4 ${
                    i <= Math.round(averageRating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'                  }`}
                />
              ))}
            </div>
            <span className='text-sm text-muted-foreground'>
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}            </span>
          </div>
        </div>
      </div>
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                   }`}
                />
              ))}
            </div>
            <span className='text-sm text-muted-foreground'>
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}            <span className="text-sm text-muted-foreground">
>>>>>>>               {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <h3 className="text-xl font-bold">{formattedRating}</h3>
=======
<h3 className="text-xl font-bold">{formattedRating}</h3>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <div className="flex items-center">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
import { Star } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
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
    <div className="bg-card border rounded-lg p-4">;
      <div className="flex items-center justify-between mb-4">;
        <div>;
          <h3 className="text-xl font-bold">{formattedRating}</h3>;
          <div className="flex items-center">;
            <div className="flex mr-2">;
              {[1, 2, 3, 4, 5].map((i) => (;
                <Star;
                  key={i}
                  className={`h-4 w-4 ${;
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  }`}
                />
              ))}
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

            <span className="text-sm text-muted-foreground">


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>             </span>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <span className='text-sm text-muted-foreground'>
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}            <span className="text-sm text-muted-foreground">
            <span className="text-sm text-muted-foreground">
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
=======
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            </span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      {ratingDistribution && (
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (

            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress 

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {ratingDistribution && (
        <div className='space-y-2'>
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating} className='flex items-center gap-2'>
              <div className='w-6 text-sm text-right'>{rating}</div>
              <Star className='h-3 w-3 text-yellow-400' />
              <Progress
                value={getPercentage(ratingDistribution[rating] |0)}
                className='h-2'        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating,) => (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress
                value = {getPercentage(ratingDistribution[rating] |0),}
                className="h-2"
              />
<<<<<<< HEAD

              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] || 0}

              </div>
            </div>
<<<<<<< HEAD
=======
import { Star } from 'lucide-react';
import { Progress } from '@/components / ui / progress';
import { Progress  } from '@/components / ui / progress';
interface ReviewStatsProps {
  average_rating: number;
  total_reviews: number;
  rating_distribution?: Record < number, number>;
export /**
 * ReviewStats - Function description
 */
function ReviewStats() {
  // Format the average rating to one decimal place;
  const formatted_rating = average_rating.to_fixed (1);
  // Calculate percentages for distribution if available;
  const get_percentage = (count: number) =>: any {
    // Check condition
if (return 0) {
  $2
}
    return (count / total_reviews) * 100;
  }
  return (
    <div className='bg - card border rounded - lg p - 4'>;
      <div className='flex items - center justify - between mb - 4'>;
        <div>;
          <h3 className='text - xl font - bold'>{formatted_rating}</h3>;
          <div className='flex items - center'>;
            <div className='flex mr - 2'>;
              {[1, 2, 3, 4, 5].map (index => (                <Star;
                  key = {i, }
                  className={`h - 4 w - 4 ${
                    i <= Math.round (average_rating);
                      ? 'fill - yellow - 400 text - yellow - 400';
                      : 'text - gray - 300'                  }`}
                />))}
            </div>;
            <span className='text - sm text - muted - foreground'>;
              {total_reviews} {total_reviews === 1 ? 'review' : 'reviews'}            </span>;
          </div>;
        </div>;
      </div>;
                    i <= Math.round (average_rating) ? "fill - yellow - 400 text - yellow - 400" : "text - gray - 300";
                  }`}
                />))}
            </div>;
            <span className='text - sm text - muted - foreground'>;
              {total_reviews} {total_reviews === 1 ? 'review' : 'reviews'}            <span className="text - sm text - muted - foreground">;
              {total_reviews} {total_reviews === 1 ? "review" : "reviews"}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            </span>;
          </div>;
        </div>;
      </div>;


<<<<<<< HEAD

>>>>>>>       
      {ratingDistribution && (
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
>>>>>>>             <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress 
=======
              <div className='w-8 text-xs text-muted-foreground'>                {ratingDistribution[rating] |0}              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] |0}
              </div>
            </div>
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      
      {ratingDistribution && (
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
<<<<<<< HEAD
            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress 
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                value = {getPercentage(ratingDistribution[rating] || 0),}
                className="h-2" 
              />
              <div className='w-8 text-xs text-muted-foreground'>                {ratingDistribution[rating] || 0}              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] || 0}
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                value={getPercentage(ratingDistribution[rating] || 0)} 
                className="h-2" 
              />
              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] || 0}
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          ))}
        </div>
      )}
=======
>>>>>>>           ))}
        </div>
      )}
}</div>)
}</div>)
}"}
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress 


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          ))}
        </div>;
      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    </div>;
  );

}</div>) ;
}</div>) ;
}"}

      {rating_distribution && (
        <div className='space - y-2'>;
          {[5, 4, 3, 2, 1].map (rating => (
            <div key={rating} className='flex items - center gap - 2'>;
              <div className='w - 6 text - sm text - right'>{rating}</div>;
              <Star className='h - 3 w - 3 text - yellow - 400' />;
              <Progress;
                value={get_percentage (rating_distribution[rating] || 0)}
                className='h - 2'        <div className="space - y-2">;
          {[5, 4, 3, 2, 1].map ((rating, ) => (
            <div key={rating} className="flex items - center gap - 2">;
              <div className="w - 6 text - sm text - right">{rating}</div>;
              <Star className="h - 3 w - 3 text - yellow - 400" />;
              <Progress;
                value = {get_percentage (rating_distribution[rating] || 0), }
                className="h - 2";
              />;
              <div className='w - 8 text - xs text - muted - foreground'>                {rating_distribution[rating] || 0}              <div className="w - 8 text - xs text - muted - foreground">;
                {rating_distribution[rating] || 0}
              </div>;
            </div>))}
        </div>)}
    </div>);
}</div>);
}</div>);
}"}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }</div>) ;
}</div>) ;
}"};

>>>>>>>     </div>;
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          ))}
        </div>
      )}
    </div>
  )
}</div>)
}</div>)
}"}
}</div>) ;
}</div>) ;
}"};
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

}</div>) ;
}</div>) ;
}"};

    </div>;
  );
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
