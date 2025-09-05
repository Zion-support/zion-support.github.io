
<<<<<<< HEAD
<<<<<<< HEAD
import { Star } from "lucide-react",
import { Progress } from "@/components/ui/progress",
=======
import { Star } from &quot;lucide-react&quot;;
import { Progress } from &quot;@/components/ui/progress&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
  
  return (
    <div className=&quot;bg-card border rounded-lg p-4&quot;>
      <div className=&quot;flex items-center justify-between mb-4&quot;>
        <div>
          <h3 className=&quot;text-xl font-bold&quot;>{formattedRating}</h3>
          <div className=&quot;flex items-center&quot;>
            <div className=&quot;flex mr-2&quot;>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i <= Math.round(averageRating) ? &quot;fill-yellow-400 text-yellow-400&quot; : &quot;text-gray-300&quot;
                  }`}
                />
              ))}
            </div>
            <span className=&quot;text-sm text-muted-foreground&quot;>
              {totalReviews} {totalReviews === 1 ? &quot;review&quot; : &quot;reviews&quot;}
=======

interface ReviewStatsProps {_averageRating: number;
  totalReviews: number;
  ratingDistribution?: Record<number, _number>;}

export function ReviewStats(_{_averageRating, _totalReviews, _ratingDistribution}: ReviewStatsProps) {_// Format the average rating to one decimal place
  const _formattedRating = averageRating.toFixed(1);
  
  // Calculate percentages for distribution if available
  const _getPercentage = (_count: number) => {
    if (totalReviews === 0) return 0;
    return (count / totalReviews) * 100;};
  
  return (_<div className="bg-card border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{_formattedRating}</h3>
          <div className="flex items-center">
            <div className="flex mr-2">
              {_[1, _2, _3, _4, _5].map((i) => (
                <Star
                  key={i}
                  className={_`h-4 w-4 ${
                    i <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {_totalReviews} {_totalReviews === 1 ? "review" : "reviews"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </span>
          </div>
        </div>
      </div>
      
<<<<<<< HEAD
      {ratingDistribution && (
        <div className=&quot;space-y-2&quot;>
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className=&quot;flex items-center gap-2&quot;>
              <div className=&quot;w-6 text-sm text-right&quot;>{rating}</div>
              <Star className=&quot;h-3 w-3 text-yellow-400&quot; />
              <Progress 
                value={getPercentage(ratingDistribution[rating] || 0)} 
                className=&quot;h-2&quot; 
              />
              <div className=&quot;w-8 text-xs text-muted-foreground&quot;>
                {ratingDistribution[rating] || 0}
=======
      {_ratingDistribution && (_<div className="space-y-2">
          {[5, _4, _3, _2, _1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{_rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress 
                value={_getPercentage(ratingDistribution[rating] || 0)} 
                className="h-2" 
              />
              <div className="w-8 text-xs text-muted-foreground">
                {_ratingDistribution[rating] || 0}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
