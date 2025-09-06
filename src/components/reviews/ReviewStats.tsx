<<<<<<< HEAD
import { Star } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
interface ReviewStatsProps {
  averageRating: number;
  totalReviews: number;
  ratingDistribution?: Record<number, number>
=======
import { Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ReviewStatsProps {
  averageRating: number;
  totalReviews: number;
  ratingDistribution?: Record<number, number>;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function ReviewStats({
  averageRating
  totalReviews
  ratingDistribution
}: ReviewStatsProps) {
  // Format the average rating to one decimal place
  const formattedRating = null;
  return (
    <div className='bg-card border rounded-lg p-4'>
      <div className='flex items-center justify-between mb-4'>
        <div>
          <h3 className='text-xl font-bold'>{formattedRating}</h3>
          <div className='flex items-center'>
            <div className='flex mr-2'>
              {[1, 2, 3, 4, 5].map(i => (                <Star
                  key = {i,}
                  className={`h-4 w-4 ${
                    i <= Math.round(averageRating)
                      ? 'fill-yellow-400 text-yellow-400'
<<<<<<< HEAD
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
                      : 'text-gray-300'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  }`}
                />
              ))}
            </div>
            <span className='text-sm text-muted-foreground'>
<<<<<<< HEAD
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}            <span className="text-sm text-muted-foreground">
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
=======
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </span>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      {ratingDistribution && (
        <div className='space-y-2'>
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating} className='flex items-center gap-2'>
              <div className='w-6 text-sm text-right'>{rating}</div>
              <Star className='h-3 w-3 text-yellow-400' />
              <Progress
<<<<<<< HEAD
                value={getPercentage(ratingDistribution[rating] |0)}
                className='h-2'        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating,) => (
            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress
                value = {getPercentage(ratingDistribution[rating] |0),}
                className="h-2"
              />
              <div className='w-8 text-xs text-muted-foreground'>                {ratingDistribution[rating] |0}              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] |0}
=======
                value={getPercentage(ratingDistribution[rating] || 0)}
                className='h-2'
              />
              <div className='w-8 text-xs text-muted-foreground'>
                {ratingDistribution[rating] || 0}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
<<<<<<< HEAD
  )
}</div>)
}</div>)
}"}
=======
  );

}</div>) ;
}</div>) ;
}"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
