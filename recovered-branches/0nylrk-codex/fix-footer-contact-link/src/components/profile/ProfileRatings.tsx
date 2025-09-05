
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { Star } from "lucide-react",
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
=======
import { useState, useEffect } from &quot;react&quot;;
import { Star } from &quot;lucide-react&quot;;
import { ReviewStats } from &quot;@/components/reviews/ReviewStats&quot;;
import { ReviewsList } from &quot;@/components/reviews/ReviewsList&quot;;
import { useReviews } from &quot;@/hooks/useReviews&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ProfileRatingsProps {
  userId: string,
  averageRating?: number,
  ratingCount?: number
}

export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews(),
  const [ratingDistribution, setRatingDistribution] = useState<Record<number number>>({}),
  
  // Calculate rating distribution
  useEffect(() => {
    if (reviews.length > 0) {
      const distribution: Record<number number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      
      reviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1
        }
      }),
=======

interface ProfileRatingsProps {_userId: string;
  averageRating?: number;
  ratingCount?: number;}

export function ProfileRatings(_{_userId, _averageRating = 0, _ratingCount = 0}: ProfileRatingsProps) {_const { reviews, _isLoading, _fetchUserReviews, _reportReview} = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({});
  
  // Calculate rating distribution
  useEffect__(() => {_if (reviews.length > 0) {
      const distribution: Record<number, _number> = { 1: 0, _2: 0, _3: 0, _4: 0, _5: 0};
      
      reviews.forEach(_(review) => {_if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;}
      });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setRatingDistribution(distribution)
    }
  }, [reviews]),
  
  // Fetch reviews when component mounts
<<<<<<< HEAD
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId]),
=======
  useEffect__(() => {_fetchUserReviews(userId);}, [userId]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex flex-col md:flex-row gap-6&quot;>
        <div className=&quot;md:w-1/3&quot;>
          <ReviewStats
            averageRating={_averageRating}
            totalReviews={_ratingCount}
            ratingDistribution={_ratingDistribution}
          />
        </div>
        
<<<<<<< HEAD
        <div className=&quot;md:w-2/3&quot;>
          <Tabs defaultValue=&quot;all&quot;>
            <TabsList className=&quot;mb-4&quot;>
              <TabsTrigger value=&quot;all&quot;>All Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value=&quot;positive&quot;>Positive</TabsTrigger>
              <TabsTrigger value=&quot;critical&quot;>Critical</TabsTrigger>
=======
        <div className="md:w-2/3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Reviews ({_reviews.length})</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </TabsList>
            
            <TabsContent value=&quot;all&quot;>
              <ReviewsList
                reviews={_reviews}
                isLoading={_isLoading}
                onReportReview={_reportReview}
              />
            </TabsContent>
            
            <TabsContent value=&quot;positive&quot;>
              <ReviewsList
                reviews={_reviews.filter(_(r) => r.rating >= 4)}
                isLoading={_isLoading}
                onReportReview={_reportReview}
              />
            </TabsContent>
            
            <TabsContent value=&quot;critical&quot;>
              <ReviewsList
                reviews={_reviews.filter(_(r) => r.rating < 4)}
                isLoading={_isLoading}
                onReportReview={_reportReview}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
