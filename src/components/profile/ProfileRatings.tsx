
import { useState, useEffect } from "react",
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
interface ProfileRatingsProps {
  userId: string,
  averageRating?: number,
  ratingCount?: number
}

export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews(),
  const [ratingDistribution, setRatingDistribution] = useState<Record<number number>>({}),
  
  // Calculate rating distribution,
useEffect(() => {
    if (reviews.length > 0) {
      const distribution: Record<number number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      
      reviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1
        }
      }),

interface ProfileRatingsProps {userId: string,
  averageRating?: number;
  ratingCount?: number}

export function ProfileRatings(_{userId, averageRating = 0, ratingCount = 0}: ProfileRatingsProps) {const { reviews, isLoading, fetchUserReviews, reportReview} = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({});
  
  // Calculate rating distribution,
useEffect_(() => {if (reviews.length > 0) {
      const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
      
      reviews.forEach(_(review) => {if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1}
      });
      
      setRatingDistribution(distribution)
    }
  }, [reviews]),
  
  // Fetch reviews when component mounts,
useEffect(() => {
    fetchUserReviews(userId)
  }, [userId]),  
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex flex-col md:flex-row gap-6&quot;>
        <div className=&quot;md:w-1/3&quot;>
          <ReviewStats,
averageRating={averageRating}
            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}
          />
        </div>
        
        <div className=&quot;md:w-2/3&quot;>
          <Tabs defaultValue=&quot;all&quot;>
            <TabsList className=&quot;mb-4&quot;>
              <TabsTrigger value=&quot;all&quot;>All Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value=&quot;positive&quot;>Positive</TabsTrigger>
              <TabsTrigger value=&quot;critical&quot;>Critical</TabsTrigger>            </TabsList>
            
            <TabsContent value=&quot;all&quot;>
              <ReviewsList,
reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            
            <TabsContent value=&quot;positive&quot;>
              <ReviewsList,
reviews={reviews.filter(_(r) => r.rating >= 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            
            <TabsContent value=&quot;critical&quot;>
              <ReviewsList,
reviews={reviews.filter(_(r) => r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
