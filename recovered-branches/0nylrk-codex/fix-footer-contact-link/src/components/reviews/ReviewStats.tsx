
<<<<<<< HEAD
<<<<<<< HEAD
import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
interface ReviewStatsProps {


  ratingDistribution?: Record<number, number>
import { Star } from "lucide-react",
import { Progress } from "@/components/ui/progress",
import {Star} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import { Star } from "lucide-react",
import { Progress } from "@/components/ui/progress",
=======


import { Star } from "lucide-react",
import { Progress } from "@/components/ui/progress",
=======
import {Star} from "lucide-react";
import {Progress} from "@/components/ui/progress";
=======
import { Star } from "lucide-react",
import { Progress } from "@/components/ui/progress",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface ReviewStatsProps {
  averageRating: number,
  totalReviews: number,
  ratingDistribution?: Record<number number>
}
export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {
  // Format the average rating to one decimal place;
  const formattedRating = averageRating.toFixed(1);
  // Format the average rating to one decimal place

  const formattedRating = averageRating.toFixed(1);
  const formattedRating = averageRating.toFixed(1),
  
  // Calculate percentages for distribution if available
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0
    return (count / totalReviews) * 100
  }

  },
  
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
import { Star } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className="bg-card border rounded-lg p-4">;
      <div className="flex items-center justify-between mb-4">;
        <div>;
          <h3 className="text-xl font-bold">{formattedRating}</h3>;
          <div className="flex items-center">;
            <div className="flex mr-2">;
              {[1, 2, 3, 4, 5].map((i) => (;
                <Star
                  key={i}
<<<<<<< HEAD

                  className={`h-4 w-4 ${;
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300";
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
                  className={`h-4 w-4 ${
                    i <= Math && Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  }`}
                />;
              ))}
            </div>;
            <span className="text-sm text-muted-foreground">;
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
<<<<<<< HEAD
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
                {ratingDistribution[rating] |0}
              </div>
            </div>
                {ratingDistribution[rating] || 0}
              </div>;
            </div>;
          ))}
        </div>;
      )}
    </div>
  )
}
    </div>;
  );
}

=======
            </span>;
          </div>;
        </div>;
      </div>;
          ))}
        </div>;
      )}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
}
<<<<<<< HEAD

=======
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
