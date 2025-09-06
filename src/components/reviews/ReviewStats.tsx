<<<<<<< HEAD
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
  const formattedRating = null;
=======
  const formattedRating = averageRating.toFixed(1)
  // Calculate percentages for distribution if available
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0
    return (count / totalReviews) * 100
  }
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


<<<<<<< HEAD
=======
export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {
  // Format the average rating to one decimal place
  const formattedRating = averageRating.toFixed(1),
  
  // Calculate percentages for distribution if available
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0,
    return (count / totalReviews) * 100
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="bg-card border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          <h3 className="text-xl font-bold">{formattedRating}</h3>
          <div className="flex items-center">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300";
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                  }`}
                />
              ))}
            </div>


            <span className="text-sm text-muted-foreground">
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </span>
          </div>
        </div>
      </div>

      
      {ratingDistribution && (
<<<<<<< HEAD
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (

=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress
                value = {getPercentage(ratingDistribution[rating] |0),}
                className="h-2"
              />

              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] || 0}

              </div>
            </div>
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            </span>;
          </div>;
        </div>;
      </div>;


=======


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
      
      {ratingDistribution && (
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress 
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                value = {getPercentage(ratingDistribution[rating] || 0),}
                className="h-2" 
              />
              <div className='w-8 text-xs text-muted-foreground'>                {ratingDistribution[rating] || 0}              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] || 0}
              </div>
            </div>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                value={getPercentage(ratingDistribution[rating] || 0)} 
                className="h-2" 
              />
              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] || 0}
              </div>;
            </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          ))}
        </div>;
      )}
<<<<<<< HEAD

    </div>;
  );

}</div>) ;
}</div>) ;
=======
<<<<<<< HEAD
    </div>
  )
<<<<<<< HEAD
}</div>)
}</div>)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}"}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

}</div>) ;
}</div>) ;
}"};
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    </div>;
  );
}
;
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
