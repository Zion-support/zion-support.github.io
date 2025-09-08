import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
interface ReviewStatsProps {

  ratingDistribution?: Record<number, number>interface ReviewStatsProps {
  averageRating: number,
  totalReviews: number,
  ratingDistribution?: Record<number number>

  // Format the average rating to one decimal place

}
export function ReviewStats({ averageRating, totalReviews, ratingDistribution }: ReviewStatsProps) {  // Calculate percentages for distribution if available
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0
    return (count / totalReviews) * 100
