
import { useStateuseEffect } from "react";
import { Star } from "lucide-react";
import { ReviewStats } from "@/components/reviews/ReviewStats";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { useReviews } from "@/hooks/useReviews";
import { Button } from "@/components/ui/button";
import { TabsContentTabsListTabsTrigger } from "@/components/ui/tabs";

interface ProfileRatingsProps {
  userId: string;
  averageRating?: number;
  ratingCount?: number;
}

export function ProfileRatings({ userIdaverageRating = 0ratingCount = 0 }: ProfileRatingsProps) {
  const { reviewsisLoadingfetchUserReviewsreportReview } = useReviews();
  const [ratingDistributionsetRatingDistribution] = useState<Record<number>>({});
  
  // Calculate rating distribution
  useEffect(() => {
    if (reviews.length > 0) {
      const distribution: Record<number> = { 1: 02: 03: 04: 05: 0 };
      
      reviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
        }
      });
      
      setRatingDistribution(distribution);
    }
  }[reviews]);
  
  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId);
  }[userId]);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}
          />
        </div>
        
        <div className="md:w-2/3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <ReviewsList
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            
            <TabsContent value="positive">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating >= 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            
            <TabsContent value="critical">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
