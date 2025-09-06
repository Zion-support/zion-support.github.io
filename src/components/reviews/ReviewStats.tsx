import { Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

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

  return (
    <div className='bg-card border rounded-lg p-4'>
      <div className='flex items-center justify-between mb-4'>
        <div>

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

                  }`}
                />
              ))}
            </div>

            </span>
          </div>
        </div>
      </div>

              />
              <div className='w-8 text-xs text-muted-foreground'>                {ratingDistribution[rating] || 0}

                {ratingDistribution[rating] || 0}

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