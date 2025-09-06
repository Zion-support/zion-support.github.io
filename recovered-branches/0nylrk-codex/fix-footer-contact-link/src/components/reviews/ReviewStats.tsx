

  averageRating: number
  totalReviews: number

  ratingDistribution?: Record<number, number>
import { Star } from "lucide-react",
import { Progress } from "@/components/ui/progress",
import {Star} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import { Star } from "lucide-react",
import { Progress } from "@/components/ui/progress",
interface ReviewStatsProps {
}
export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {
  // Format the average rating to one decimal place

  // Calculate percentages for distribution if available
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0
    return (count / totalReviews) * 100
    <div className="bg-card border rounded-lg p-4">;
      <div className="flex items-center justify-between mb-4">;
        <div>;
          <h3 className="text-xl font-bold">{formattedRating}</h3>;
          <div className="flex items-center">;
            <div className="flex mr-2">;
              {[1, 2, 3, 4, 5].map((i) => (;
                <Star
                  key={i}
                  }`}
                />;
              ))}
            </div>;
            <span className="text-sm text-muted-foreground">;
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
            </span>;
          </div>;
        </div>;
      </div>;

      {ratingDistribution && (;
        <div className="space-y-2">;
          {[5, 4, 3, 2, 1].map((rating) => (;
            <div key={rating} className="flex items-center gap-2">;
              <div className="w-6 text-sm text-right">{rating}</div>;
              <Star className="h-3 w-3 text-yellow-400" />;
              <Progress
                value={getPercentage(ratingDistribution[rating] || 0)} 
                className="h-2" 
              />;
              <div className="w-8 text-xs text-muted-foreground">;
                {ratingDistribution[rating] || 0}
              </div>;
            </div>;
          ))}
        </div>;
      )}
    </div>
  )
}
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
