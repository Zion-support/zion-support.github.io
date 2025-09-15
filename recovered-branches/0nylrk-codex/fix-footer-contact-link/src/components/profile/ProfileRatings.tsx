
<<<<<<< HEAD
import { useStateuseEffect } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> origin/auto/autonomy-17186719616
import { Star } from "lucide-react";
import { ReviewStats } from "@/components/reviews/ReviewStats";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { useReviews } from "@/hooks/useReviews";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { TabsContentTabsListTabsTrigger } from "@/components/ui/tabs";
=======
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
>>>>>>> origin/auto/autonomy-17186719616

interface ProfileRatingsProps {
  userId: string;
  averageRating?: number;
  ratingCount?: number;
}

<<<<<<< HEAD
export function ProfileRatings({ userIdaverageRating = 0ratingCount = 0 }: ProfileRatingsProps) {
  const { reviewsisLoadingfetchUserReviewsreportReview } = useReviews();
  const [ratingDistributionsetRatingDistribution] = useState<Record<number>>({});
=======
export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({});
>>>>>>> origin/auto/autonomy-17186719616
  
  // Calculate rating distribution
  useEffect(() => {
    if (reviews.length > 0) {
<<<<<<< HEAD
      const distribution: Record<number> = { 1: 02: 03: 04: 05: 0 };
=======
      const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
>>>>>>> origin/auto/autonomy-17186719616
      
      reviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
        }
      });
      
      setRatingDistribution(distribution);
    }
<<<<<<< HEAD
  }[reviews]);
=======
  }, [reviews]);
>>>>>>> origin/auto/autonomy-17186719616
  
  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId);
<<<<<<< HEAD
  }[userId]);
=======
  }, [userId]);
>>>>>>> origin/auto/autonomy-17186719616
  
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
