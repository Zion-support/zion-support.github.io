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

  return (
    <div className="bg-card border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>

=======
  
>>>>>>>   return (
    <div className="bg-card border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
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
>>>>>>>                   }`}
                />
              ))}
            </div>
            <span className='text-sm text-muted-foreground'>
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}            <span className="text-sm text-muted-foreground">
>>>>>>>               {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  }`}
                />
              ))}
            </div>

<<<<<<< HEAD
=======

            <span className="text-sm text-muted-foreground">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>             </span>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {ratingDistribution && (
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (

            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress 

=======
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
            </span>;
          </div>;
        </div>;
      </div>;



>>>>>>>       
      {ratingDistribution && (
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
>>>>>>>             <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress 
                value = {getPercentage(ratingDistribution[rating] || 0),}
                className="h-2" 
              />
              <div className='w-8 text-xs text-muted-foreground'>                {ratingDistribution[rating] || 0}              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] || 0}
              </div>
            </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                value={getPercentage(ratingDistribution[rating] || 0)} 
                className="h-2" 
              />
              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] || 0}
              </div>;
            </div>;
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
            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress 


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
