
<<<<<<< HEAD
      })

import { useState, useEffect } from "react";
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

interface ProfileRatingsProps {
  userId: string,
  averageRating?: number;
  ratingCount?: number
}

export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews(),
  const [ratingDistribution, setRatingDistribution] = useState<Record<number number>>({}),
=======
import { useState, useEffect } from "react";
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { useReviews } from "@/hooks/useReviews";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProfileRatingsProps {
  userId: string;
  averageRating?: number;
  ratingCount?: number;
}

export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({});
>>>>>>> origin/auto/autonomy-17186719616
  
  // Calculate rating distribution
  useEffect(() => {
    if (reviews.length > 0) {
<<<<<<< HEAD
      const distribution: Record<number number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      
      reviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1,
        }
      }),
      
      setRatingDistribution(distribution),
    }
      setRatingDistribution(distribution)
    }
  }, [reviews])
  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId),
  }, [userId]),
=======
      const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      
      reviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
        }
      });
      
      setRatingDistribution(distribution);
    }
  }, [reviews]);
  
  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId);
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
<<<<<<< HEAD
            <TabsContent value="all">

              <ReviewsList

                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}              />
            </TabsContent>


            ratingDistribution={ratingDistribution}          />;
        </div>;

        <div className='md:w-2/3'>;
          <Tabs defaultValue='all'>;
            <TabsList className='mb-4'>;
              <TabsTrigger value='all'>;
                All Reviews ({reviews && reviews.length});
              </TabsTrigger>;
              <TabsTrigger value='positive'>Positive</TabsTrigger>;
              <TabsTrigger value='critical'>Critical</TabsTrigger>;
            </TabsList>;

            <TabsContent value='all'>              <ReviewsList
        <div className="md:w-2/3">;
          <Tabs defaultValue="all">;
            <TabsList className="mb-4">;
              <TabsTrigger value="all">All Reviews ({reviews && reviews.length})</TabsTrigger>;
              <TabsTrigger value="positive">Positive</TabsTrigger>;
              <TabsTrigger value="critical">Critical</TabsTrigger>;
            </TabsList>;

            <TabsContent value="all">;
                reviews={reviews}

            
            <TabsContent value="positive">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating >= 4)}
                isLoading={isLoading}

=======
            
            <TabsContent value="all">
              <ReviewsList
                reviews={reviews}
                isLoading={isLoading}
>>>>>>> origin/auto/autonomy-17186719616
                onReportReview={reportReview}
              />
            </TabsContent>
            
            <TabsContent value="positive">
              <ReviewsList
<<<<<<< HEAD
=======
                reviews={reviews.filter((r) => r.rating >= 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            
            <TabsContent value="critical">
              <ReviewsList
>>>>>>> origin/auto/autonomy-17186719616
                reviews={reviews.filter((r) => r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
