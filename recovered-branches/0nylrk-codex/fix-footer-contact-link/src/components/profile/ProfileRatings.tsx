<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState, useEffect} from "react";
import {Star} from "lucide-react";
import {ReviewStats} from "@/components/reviews/ReviewStats";
import {ReviewsList} from "@/components/reviews/ReviewsList";
import {useReviews} from "@/hooks/useReviews";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
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
  averageRating?: number;
  ratingCount?: number;
}

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ProfileRatingsProps {
  userId: string,
  averageRating?: number,
  ratingCount?: number

}

export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {;
=======
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { ReviewStats } from "@/components/reviews/ReviewStats";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { useReviews } from "@/hooks/useReviews";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
interface ProfileRatingsProps {
=======

import {useState, useEffect} from "react";"
import {Star} from "lucide-react";"
import {ReviewStats} from "@/components/reviews/ReviewStats";"
import {ReviewsList} from "@/components/reviews/ReviewsList";"
import {useReviews} from "@/hooks/useReviews";"
import {Button} from "@/components/ui/button";"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
interface ProfileRatingsProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  userId: string;
  averageRating?: number;
  ratingCount?: number;
}

export function ProfileRatings({}
  userId,
  averageRating = 0,
  ratingCount = 0,
}: ProfileRatingsProps) {};
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<
    Record<number, number>
  >({});

  // Calculate rating distribution;
  useEffect(() => {}
    if (reviews.length > 0) {}
      const distribution: Record<number, number> = {}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };

reviews.forEach((review) => {}
        if (review.rating >= 1 && review.rating <= 5) {}
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
        }
      });

      setRatingDistribution(distribution);
    }
  }, [reviews]);
<<<<<<< HEAD
import { useState, useEffect } from "react",;
import { Star } from "lucide-react",;
import { ReviewStats } from "@/components/reviews/ReviewStats",;
import { ReviewsList } from "@/components/reviews/ReviewsList",;
import { useReviews } from "@/hooks/useReviews",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
interface ProfileRatingsProps {;
  userId: string,;
  averageRating?: number,;
  ratingCount?: number;
}
;
export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {;
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews(),;
  const [ratingDistribution, setRatingDistribution] = useState<Record<number number>>({}),;
  // Calculate rating distribution;
  useEffect(() => {;
    if (reviews.length > 0) {;
      const distribution: Record<number number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },;
      reviews.forEach((review) => {;
        if (review.rating >= 1 && review.rating <= 5) {;
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
        }
      }),;
      setRatingDistribution(distribution);
    }
  }, [reviews]),
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId]),

  return ("
    <div className="space-y-6">"
      <div className="flex flex-col md:flex-row gap-6">"
        <div className="md:w-1/3">

          <ReviewStats;
=======

  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId);
  }, [userId]);

  return (
    <div className="space-y-6">;
      <div className="flex flex-col md:flex-row gap-6">;
        <div className="md:w-1/3">;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <ReviewStats
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            averageRating={averageRating}
            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}
          />
        </div>
<<<<<<< HEAD
        <div className="md:w-2/3">
=======

        <div className="md:w-2/3">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
=======
"
        <div className="md:w-2/3">"
          <Tabs defaultValue="all">"
            <TabsList className="mb-4">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <TabsTrigger value="all">
                All Reviews ({reviews.length})
              </TabsTrigger>"
              <TabsTrigger value="positive">Positive</TabsTrigger>"
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
"
            <TabsContent value="all">
              <ReviewsList;
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}
<<<<<<< HEAD
              <ReviewsList
=======
              />
            </TabsContent>
"
            <TabsContent value="positive">
              <ReviewsList;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
/>;
            </TabsContent>;

            <TabsContent value="critical">;

              <ReviewsList
                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
/>
            </TabsContent>
"
            <TabsContent value="critical">
              <ReviewsList;
                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              />

import {useState, useEffect} from "react";""
import {Star} from "lucide-react";""
import {ReviewStats} from "@/components/reviews/ReviewStats";""
import {ReviewsList} from "@/components/reviews/ReviewsList";""
import {useReviews} from "@/hooks/useReviews";""
import {Button} from "@/components/ui/button";""
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"

interface ProfileRatingsProps {
  // TODO: Implement
}
  userId: string;
  averageRating?: number;}
  ratingCount?: number;}
}

export function ProfileRatings({
  userId,

  averageRating = 0,
  ratingCount = 0,)
}: ProfileRatingsProps) {
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<
    Record<number, number>
</number>
      const distribution: Record<number, number> = {
</number>
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;

        }
      });

      setRatingDistribution(distribution);
    }
  }, [reviews]);

  // Fetch reviews when component mounts;

  useEffect(() => {
    fetchUserReviews(userId);
  }, [userId]);

  return ("
    <div className="space-y-6">;"
</div>"
      <div className="flex flex-col md:flex-row gap-6">;"
</div>"
        <div className="md:w-1/3">;"
</div>"
    <div className="space-y-6">"
</div>"
      <div className="flex flex-col md:flex-row gap-6">"
</div>"
        <div className="md:w-1/3">"
</div>
          <ReviewStats;
            averageRating={averageRating}

            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}
          />
</ReviewStats>
        </div>

"
        <div className="md:w-2/3">"
</div>"
          <Tabs defaultValue="all">"
</Tabs>"
            <TabsList className="mb-4">"
</TabsList>"
              <TabsTrigger value="all">"
</TabsTrigger>
              </TabsTrigger>"
              <TabsTrigger value="positive">Positive</TabsTrigger>""
              <TabsTrigger value="critical">Critical</TabsTrigger>"
            </TabsList>
"
            <TabsContent value="all">"
</TabsContent>
              <ReviewsList;
                reviews={reviews}

                isLoading={isLoading}
                onReportReview={reportReview}
              />
</ReviewsList>
            </TabsContent>

"
            <TabsContent value="positive">"
</TabsContent>
              <ReviewsList;)
                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}
</ReviewsList>
            </TabsContent>
"
            <TabsContent value="critical">"
</TabsContent>
              <ReviewsList;
                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}
</ReviewsList>

            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
;
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
  // Fetch reviews when component mounts;
  useEffect (() => {
    fetchUserReviews (user_id);
  }, [user_id]);
;
  return (
<<<<<<< HEAD
    <div className="space - y-6">;
      <div className="flex flex - col md:flex - row gap - 6">;
        <div className="md:w - 1/3">;
=======
    <div className="space-y-6">;
      <div className="flex flex - col md:flex - row gap-6">;
        <div className="md:w-1/3">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <ReviewStats;
            average_rating={average_rating}
            total_reviews={rating_count}
            rating_distribution={rating_distribution}
          />;
        </div>;
<<<<<<< HEAD
        <div className="md:w - 2/3">;
          <Tabs default_value="all">;
            <TabsList className="mb - 4">;
=======
        <div className="md:w-2/3">;
          <Tabs default_value="all">;
            <TabsList className="mb-4">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
              />;
            </TabsContent>;
          </Tabs>;
        </div>;
</div>;
<<<<<<< HEAD

    </div>);
}

              />;
            </TabsContent>;
          </Tabs>;
        </div>;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      </div>;    </div>;
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}

    </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  ),; interface ProfileRatingsProps {
=======

}

    </div>;
  ),; interface ProfileRatingsProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  userId: string;
averageRating?: number;
ratingCount?: number;
}export function ProfileRatings ({};
  userId, averageRating = 0, ratingCount = 0;
}: ProfileRatingsProps) {}
  const {}
  reviews, isLoading, fetchUserReviews, reportReview;
}= useReviews ();
const [ratingDistribution, setRatingDistribution] = useState<Record<number number>> ({}
});
//Calculate rating distribution useEffect ( () => {}
  if (reviews.length > 0) {}
  const distribution: Record<number number> = {}
  1: 0, 2: 0, 3: 0, 4: 0, 5: 0;
};
reviews.forEach ( (review) => {}
  if (review.rating >= 1 && review.rating <= 5) {}
  distribution[review.rating] = (distribution[review.rating] || 0) + 1;
}

}

});
}
}, [reviews]);"
//Fetch reviews when component mounts return (<div className="space-y-6" > <div className="flex flex-col md:flex-row gap-6" > <div className="md:w-1/3" > <ReviewStats averageRating= {}
  averageRating;
}totalReviews= {}
  ratingCount;
}ratingDistribution= {}
  ratingDistribution "
}/> </div> </TabsList> <TabsContent value="all" > <ReviewsList reviews= {}
  reviews;
}isLoading= {}
  isLoading;
}onReportReview= {}
  reportReview "
}/> </TabsContent> <TabsContent value="positive" > <ReviewsList reviews= {}
  reviews.filter ( (r) => r.rating >= 4) 
}isLoading= {}
  isLoading;
}onReportReview= {}
  reportReview "
}/> </TabsContent> <TabsContent value="critical" > <ReviewsList reviews= {}
  reviews.filter ( (r) => r.rating < 4) 
}isLoading= {}
  isLoading;
}onReportReview= {}
  reportReview;
}/> </TabsContent> </Tabs> </div> </div> </div>) 
}
}

}
}
;
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

import {useState, useEffect} from "react";""
import {Star} from "lucide-react";""
import {ReviewStats} from "@/components/reviews/ReviewStats";""
import {ReviewsList} from "@/components/reviews/ReviewsList";""
import {useReviews} from "@/hooks/useReviews";""
import {Button} from "@/components/ui/button";""
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
interface ProfileRatingsProps {
  // TODO: Implement
}
  userId: string;
  averageRating?: number;
  ratingCount?: number;

export function ProfileRatings({
  userId,
  averageRating = 0,
  ratingCount = 0,)
}: ProfileRatingsProps) {
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<
    Record<number, number>
</number>
      const distribution: Record<number, number> = {
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
      });

      setRatingDistribution(distribution);
  }, [reviews]);

  // Fetch reviews when component mounts;
  useEffect(() => {
    fetchUserReviews(userId);
  }, [userId]);

  return ("
    <div className="space-y-6">;"
</div>"
      <div className="flex flex-col md:flex-row gap-6">;"
        <div className="md:w-1/3">;"
    <div className="space-y-6">"
      <div className="flex flex-col md:flex-row gap-6">"
        <div className="md:w-1/3">"
</div>
          <ReviewStats;
            averageRating={averageRating}
            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}
          />

"
        <div className="md:w-2/3">"
          <Tabs defaultValue="all">"
            <TabsList className="mb-4">"
              <TabsTrigger value="all">"

              <TabsTrigger value="positive">Positive""
              <TabsTrigger value="critical">Critical"
            <TabsContent value="all">"

              <ReviewsList;
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}

            <TabsContent value="positive">"

              <ReviewsList;)
                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}

            <TabsContent value="critical">"

                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}

    </div>;
const [ratingDistribution, setRatingDistribution] = useState<Record<number number>> ({

  const distribution: Record<number number> = {
</number>)

}, [reviews]);"
//Fetch reviews when component mounts return (<div className="space-y-6" > <div className="flex flex-col md:flex-row gap-6" > <div className="md:w-1/3" > <ReviewStats averageRating= {"
}/> </div>  <TabsContent value="all" > <ReviewsList reviews= {"
}/>  <TabsContent value="positive" > <ReviewsList reviews= {"
}/>  <TabsContent value="critical" > <ReviewsList reviews= {"
)
  reviews.filter ( (r) => r.rating < 4) 
}isLoading= {
  isLoading;
}onReportReview= {
  reportReview;
}/>   </div> </div> </div>) "
pr-12325
}/> </TabsContent> </Tabs> </div> </div> </div>) "

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
