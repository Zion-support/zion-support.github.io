
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { Star } from "lucide-react",
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
interface ProfileRatingsProps {
  userId: string;
=======
import {useState, useEffect} from "react";
import {Star} from "lucide-react";
import {ReviewStats} from "@/components/reviews/ReviewStats";
import {ReviewsList} from "@/components/reviews/ReviewsList";
import {useReviews} from "@/hooks/useReviews";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

interface ProfileRatingsProps {;
  userId: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  averageRating?: number;
  ratingCount?: number;
}

<<<<<<< HEAD
export function ProfileRatings({
  userId
  averageRating = 0
  ratingCount = 0
}: ProfileRatingsProps) {
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<
    Record<number, number>
  >({});
  // Calculate rating distribution
  useEffect(() => {
    if (reviews.length > 0) {
      const distribution: Record<number, number> = {
        1: 0
        2: 0
        3: 0
        4: 0
        5: 0
      }
      reviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] |0) + 1;
        }
      });
      setRatingDistribution(distribution);
    }
  }, [reviews]);
  // Fetch reviews when component mounts
  useEffect(() => {
=======
export function ProfileRatings(): any ({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {;
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({});

  // Calculate rating distribution;
  useEffect(() => {;
    if (reviews && reviews.length > 0) {;
      const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

      reviews && reviews.forEach((review) => {;
        if (review && review.rating >= 1 && review && review.rating <= 5) {;
          distribution[review && review.rating] = (distribution[review && review.rating] || 0) + 1;
        }
      });

      setRatingDistribution(distribution);
    }
  }, [reviews]);

  // Fetch reviews when component mounts;
  useEffect(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    fetchUserReviews(userId);
  }, [userId]);

  return (
    <div className="space-y-6">;
      <div className="flex flex-col md:flex-row gap-6">;
        <div className="md:w-1/3">;
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}
<<<<<<< HEAD
          />
        </div>
        <div className="md:w-2/3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">
                All Reviews ({reviews.length})
              </TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
=======
          />;
        </div>;

        <div className="md:w-2/3">;
          <Tabs defaultValue="all">;
            <TabsList className="mb-4">;
              <TabsTrigger value="all">All Reviews ({reviews && reviews.length})</TabsTrigger>;
              <TabsTrigger value="positive">Positive</TabsTrigger>;
              <TabsTrigger value="critical">Critical</TabsTrigger>;
            </TabsList>;

            <TabsContent value="all">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <ReviewsList
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}
<<<<<<< HEAD
              />
            </TabsContent>
            <TabsContent value="positive">
=======
              />;
            </TabsContent>;

            <TabsContent value="positive">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <ReviewsList
                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
<<<<<<< HEAD
              />
            </TabsContent>
            <TabsContent value="critical">
=======
              />;
            </TabsContent>;

            <TabsContent value="critical">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <ReviewsList
                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
<<<<<<< HEAD
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
=======
              />;
            </TabsContent>;
          </Tabs>;
        </div>;
      </div>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
