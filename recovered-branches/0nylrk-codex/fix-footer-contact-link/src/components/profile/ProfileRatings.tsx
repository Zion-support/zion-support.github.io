
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState, useEffect} from "react";
import {Star} from "lucide-react";
import {ReviewStats} from "@/components/reviews/ReviewStats";
import {ReviewsList} from "@/components/reviews/ReviewsList";
import {useReviews} from "@/hooks/useReviews";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  averageRating?: number;
  ratingCount?: number;
}


<<<<<<< HEAD
        }
      });
;
      setRatingDistribution (distribution);
    }

  }, [reviews]);
import { useState, useEffect } from "react",
import { Star } from "lucide-react",
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
interface ProfileRatingsProps {
  userId: string;
  averageRating?: number;
  ratingCount?: number;
}

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
    fetchUserReviews(userId);
  }, [userId]);


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ProfileRatingsProps {
  userId: string,
  averageRating?: number,
  ratingCount?: number
}


<<<<<<< HEAD


=======
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<
    Record<number, number>
  >({});


        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };


          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
        }
      });

      setRatingDistribution(distribution);
    }
  }, [reviews]);

>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId]),
<<<<<<< HEAD

=======
  
  return ("
    <div className="space-y-6">"
      <div className="flex flex-col md:flex-row gap-6">"
        <div className="md:w-1/3">
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <ReviewStats

            averageRating={averageRating}
            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}
<<<<<<< HEAD
=======

          />
        </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}


            <TabsContent value="critical">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating < 4)}
=======

                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>

            <TabsContent value="positive">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating >= 4)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
<<<<<<< HEAD
          </Tabs>
        </div>
      </div>
    </div>

  );



=======


;
  // Fetch reviews when component mounts;
  useEffect (() => {
    fetchUserReviews (user_id);
  }, [user_id]);
;
  return (

          <ReviewStats;
            average_rating={average_rating}
            total_reviews={rating_count}
            rating_distribution={rating_distribution}
          />;
        </div>;

              <TabsTrigger value="all">;
                All Reviews ({reviews.length});
              </TabsTrigger>;
              <TabsTrigger value="positive">Positive</TabsTrigger>;
              <TabsTrigger value="critical">Critical</TabsTrigger>;
            </TabsList>;
            <TabsContent value="all">;
              <ReviewsList;
                reviews={reviews}
                is_loading={is_loading}
                onReportReview={report_review}
              />;
            </TabsContent>;
            <TabsContent value="positive">;
              <ReviewsList;
                reviews={reviews.filter ((r) => r.rating >= 4)}
                is_loading={is_loading}
                onReportReview={report_review}
              />;
            </TabsContent>;
            <TabsContent value="critical">;
              <ReviewsList;
                reviews={reviews.filter ((r) => r.rating < 4)}
                is_loading={is_loading}
                onReportReview={report_review}
            ;
            <TabsContent value="critical">;
              <ReviewsList;
                reviews={reviews.filter((r) => r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />;
            </TabsContent>;
          </Tabs>;
        </div>;

}/> </TabsContent> </Tabs> </div> </div> </div>) 
}
}

}
}
;

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
