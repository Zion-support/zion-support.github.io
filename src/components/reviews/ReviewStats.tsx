import { Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
=======
import { Star } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface ReviewStatsProps {
  averageRating: number;
  totalReviews: number;
  ratingDistribution?: Record<number, number>;

export function ReviewStats({
  averageRating,
  totalReviews,
  ratingDistribution,
}: ReviewStatsProps) {
  // Format the average rating to one decimal place
  const formattedRating = averageRating.toFixed(1);

  // Calculate percentages for distribution if available
<<<<<<< HEAD
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0;
    return (count / totalReviews) * 100;
  };

=======
  const getPercentage = (count: number,) => {
    if (totalReviews === 0) return 0,
    return (count / totalReviews) * 100
  },
  
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
  return (
    <div className='bg-card border rounded-lg p-4'>
      <div className='flex items-center justify-between mb-4'>
        <div>
<<<<<<< HEAD
          <h3 className='text-xl font-bold'>{formattedRating}</h3>
          <div className='flex items-center'>
            <div className='flex mr-2'>
              {[1, 2, 3, 4, 5].map(i => (
=======
          <h3 className="text-xl font-bold">{formattedRating}</h3>
          <div className="flex items-center">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((i,) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
                <Star
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

=======
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  }`}
                />
              ))}
            </div>
<<<<<<< HEAD
            <span className='text-sm text-muted-foreground'>
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
=======
            <span className="text-sm text-muted-foreground">
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </span>
          </div>
        </div>
      </div>
<<<<<<< HEAD

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {ratingDistribution && (
<<<<<<< HEAD
        <div className='space-y-2'>
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating} className='flex items-center gap-2'>
              <div className='w-6 text-sm text-right'>{rating}</div>
              <Star className='h-3 w-3 text-yellow-400' />
              <Progress
                value={getPercentage(ratingDistribution[rating] || 0)}
                className='h-2'
=======
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating,) => (
            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress 
                value = {getPercentage(ratingDistribution[rating] || 0),}
                className="h-2" 
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
              />
              <div className='w-8 text-xs text-muted-foreground'>                {ratingDistribution[rating] || 0}
=======
              <div className="w-8 text-xs text-muted-foreground">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                {ratingDistribution[rating] || 0}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

}</div>) ;
}</div>) ;
}"
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
