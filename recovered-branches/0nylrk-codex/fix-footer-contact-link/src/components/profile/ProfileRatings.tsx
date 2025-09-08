
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

export function ProfileRatings({
  userId,
  averageRating = 0,
  ratingCount = 0,
}: ProfileRatingsProps) {
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
<<<<<<< HEAD

  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId);
  }, [userId]);

  return (
    <div className="space-y-6">;
      <div className="flex flex-col md:flex-row gap-6">;
        <div className="md:w-1/3">;
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
          />
        </div>


            <TabsContent value="all">
              <ReviewsList
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>


            <TabsContent value="critical">
              <ReviewsList
                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}
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
}

=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    </div>;
  ),; interface ProfileRatingsProps {
  userId: string;
averageRating?: number;
ratingCount?: number 
}export function ProfileRatings ({
  userId, averageRating = 0, ratingCount = 0 
}: ProfileRatingsProps) {
  const {
  reviews, isLoading, fetchUserReviews, reportReview 
}= useReviews ();
const [ratingDistribution, setRatingDistribution] = useState<Record<number number>> ({
  
});
//Calculate rating distribution useEffect ( () => {
  if (reviews.length > 0) {
  const distribution: Record<number number> = {
  1: 0, 2: 0, 3: 0, 4: 0, 5: 0 
};
reviews.forEach ( (review) => {
  if (review.rating >= 1 && review.rating <= 5) {
  distribution[review.rating] = (distribution[review.rating] || 0) + 1 
}

}

});
}
}, [reviews]);
//Fetch reviews when component mounts return (<div className="space-y-6" > <div className="flex flex-col md:flex-row gap-6" > <div className="md:w-1/3" > <ReviewStats averageRating= {
  averageRating 
}totalReviews= {
  ratingCount 
}ratingDistribution= {
  ratingDistribution 
}/> </div> </TabsList> <TabsContent value="all" > <ReviewsList reviews= {
  reviews 
}isLoading= {
  isLoading 
}onReportReview= {
  reportReview 
}/> </TabsContent> <TabsContent value="positive" > <ReviewsList reviews= {
  reviews.filter ( (r) => r.rating >= 4) 
}isLoading= {
  isLoading 
}onReportReview= {
  reportReview 
}/> </TabsContent> <TabsContent value="critical" > <ReviewsList reviews= {
  reviews.filter ( (r) => r.rating < 4) 
}isLoading= {
  isLoading 
}onReportReview= {
  reportReview 
}/> </TabsContent> </Tabs> </div> </div> </div>) 
}
}

}
}
;

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
