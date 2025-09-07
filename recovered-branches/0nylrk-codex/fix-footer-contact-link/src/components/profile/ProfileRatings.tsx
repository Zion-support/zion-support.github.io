<<<<<<< HEAD
=======
<<<<<<< HEAD

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { ReviewStats } from "@/components/reviews/ReviewStats";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { useReviews } from "@/hooks/useReviews";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
interface ProfileRatingsProps {
  userId: string,
  averageRating?: number,
  ratingCount?: number
}

export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews($2);
  const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({}),
  
  // Calculate rating distribution
  useEffect(() => {
    if (reviews.length > 0) {
      const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0},
      
      reviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { Star } from "lucide-react",
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState, useEffect} from "react";
import {Star} from "lucide-react";
import {ReviewStats} from "@/components/reviews/ReviewStats";
import {ReviewsList} from "@/components/reviews/ReviewsList";
import {useReviews} from "@/hooks/useReviews";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
<<<<<<< HEAD
=======
<<<<<<< HEAD
  averageRating?: number;
  ratingCount?: number;
}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  averageRating?: number;
  ratingCount?: number;
}

<<<<<<< HEAD
interface ProfileRatingsProps {
  userId: string,
  averageRating?: number,
  ratingCount?: number

}

export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {;

interface ProfileRatingsProps {

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

  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId]),

  return ("
    <div className="space-y-6">"
      <div className="flex flex-col md:flex-row gap-6">"
        <div className="md:w-1/3">

          <ReviewStats;

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

          <Tabs defaultValue="all">
            <TabsList className="mb-4">

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

              <ReviewsList

                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}
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

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
import { useState, useEffect  } from './react';
import { Star  } from './lucide-react';
import { ReviewStats  } from '@/components / reviews / ReviewStats';
import { ReviewsList  } from '@/components / reviews / ReviewsList';
import { use_reviews  } from '@/hooks / use_reviews';
import { Button  } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
interface ProfileRatingsProps {
  user_id: string;
  average_rating?: number;
  rating_count?: number;
}
export /**
 * ProfileRatings - Function description
 */
function ProfileRatings() {
  const { reviews, is_loading, fetchUserReviews, report_review } = use_reviews ();
  const [rating_distribution, setRatingDistribution] = useState<;
    Record < number, number>;
  >({});
;
  // Calculate rating distribution;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      const distribution: Record < number, number> = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      }
;
      reviews.for_each ((review) => {
        // Check condition
if ( {) {
  $2
}
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
>>>>>>> merged-prs-20250907-203621
        }
      });
;
      setRatingDistribution (distribution);
    }
<<<<<<< HEAD
  }, [reviews]),
  
=======
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

<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ProfileRatingsProps {
  userId: string,
  averageRating?: number,
  ratingCount?: number
}

<<<<<<< HEAD
}

export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {;

interface ProfileRatingsProps {

  userId: string;
  averageRating?: number;
  ratingCount?: number;
}

export function ProfileRatings({}
  userId,
  averageRating = 0,
  ratingCount = 0,
}: ProfileRatingsProps) {};
=======
<<<<<<< HEAD
export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<
    Record<number, number>
  >({});

<<<<<<< HEAD
  // Calculate rating distribution;
  useEffect(() => {}
    if (reviews.length > 0) {}
      const distribution: Record<number, number> = {}

=======
  // Calculate rating distribution
  useEffect(() => {
    if (reviews.length > 0) {
      const distribution: Record<number, number> = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };

<<<<<<< HEAD
=======
      reviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
        }
      });

      setRatingDistribution(distribution);
    }
  }, [reviews]);
<<<<<<< HEAD
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> merged-prs-20250907-203621
  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId]),
<<<<<<< HEAD
  
=======

<<<<<<< HEAD
  return ("
    <div className="space-y-6">"
      <div className="flex flex-col md:flex-row gap-6">"
        <div className="md:w-1/3">

          <ReviewStats;

>>>>>>> merged-prs-20250907-203621
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
<<<<<<< HEAD
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}
=======
=======
<<<<<<< HEAD
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <div className="space-y-6">;
      <div className="flex flex-col md:flex-row gap-6">;
        <div className="md:w-1/3">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <ReviewStats

            averageRating={averageRating}
            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}
<<<<<<< HEAD
          />
        </div>
=======
<<<<<<< HEAD
          />;
        </div>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          <Tabs defaultValue="all">
            <TabsList className="mb-4">

<<<<<<< HEAD
              <TabsTrigger value="all">
                All Reviews ({reviews.length})
              </TabsTrigger>"
              <TabsTrigger value="positive">Positive</TabsTrigger>"
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
"
            <TabsContent value="all">
              <ReviewsList;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="md:w-2/3">;
          <Tabs defaultValue="all">;
            <TabsList className="mb-4">;
              <TabsTrigger value="all">All Reviews ({reviews && reviews.length})</TabsTrigger>;
              <TabsTrigger value="positive">Positive</TabsTrigger>;
              <TabsTrigger value="critical">Critical</TabsTrigger>;
            </TabsList>;
<<<<<<< HEAD
            <TabsContent value="all">;
              <ReviewsList

import { useState, useEffect } from "react",;
import { Star } from "lucide-react",;
import { ReviewStats } from "@/components/reviews/ReviewStats",;
import { ReviewsList } from "@/components/reviews/ReviewsList",;
import { useReviews } from "@/hooks/useReviews",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
;
interface ProfileRatingsProps {;
  userId:string,;
  averageRating?:number,;
  ratingCount?:number;
}
;
export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 } ProfileRatingsProps) {;
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews(),;
  const [ratingDistribution, setRatingDistribution] = useState<Record<number number>>({}),;
  ;
  // Calculate rating distribution;
  useEffect(() => {;
    if (reviews.length > 0) {;
      const distribution:Record<number number> = { 1:0, 2:0, 3:0, 4:0, 5:0 },;
      ;
      reviews.forEach((review) => {;
        if (review.rating >= 1 && review.rating <= 5) {;
          distribution[review.rating] = (distribution[review.rating] || 0) + 1,;
        }
      }),;
      ;
      setRatingDistribution(distribution),;
    }
  }, [reviews]),;
  ;
  // Fetch reviews when component mounts;
  useEffect(() => {;
    fetchUserReviews(userId),;
  }, [userId]),;
  ;
  return (;
    <div className="space-y-6">;
      <div className="flex flex-col md:flex-row gap-6">;
        <div className="md:w-1/3">;
          <ReviewStats;
            averageRating={averageRating}
            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}
          />;
        </div>;
        ;
        <div className="md:w-2/3">;
          <Tabs defaultValue="all">;
            <TabsList className="mb-4">;
              <TabsTrigger value="all">All Reviews ({reviews.length})</TabsTrigger>;
              <TabsTrigger value="positive">Positive</TabsTrigger>;
              <TabsTrigger value="critical">Critical</TabsTrigger>;
            </TabsList>;
            ;
            <TabsContent value="all">;
              <ReviewsList;
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}
              />;
            </TabsContent>;
              <ReviewsList
                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}
            ;
            <TabsContent value="positive">;
              <ReviewsList;
                reviews={reviews.filter((r) => r.rating >= 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />;
            </TabsContent>;
              <ReviewsList
                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
            <TabsContent value="all">
              <ReviewsList
                reviews={reviews}
=======

            <TabsContent value="all">
=======

            <TabsContent value="all">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <ReviewsList
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}
<<<<<<< HEAD
              />
            </TabsContent>

            <TabsContent value="positive">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating >= 4)}
>>>>>>> merged-prs-20250907-203621
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>

<<<<<<< HEAD
            <TabsContent value="positive">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating >= 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
=======
>>>>>>> merged-prs-20250907-203621
            <TabsContent value="critical">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
}

=======
<<<<<<< HEAD
  )
}
=======
  );

=======

              <ReviewsList

                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}
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

<<<<<<< HEAD
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

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

              />;
            </TabsContent>;
          </Tabs>;
        </div>;

<<<<<<< HEAD
              />;
            </TabsContent>;
          </Tabs>;
        </div>;

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>;    </div>;

}

    </div>;

<<<<<<< HEAD
=======
  ),; interface ProfileRatingsProps {

  userId: string;
averageRating?: number;
ratingCount?: number;
}export function ProfileRatings ({};
  userId, averageRating = 0, ratingCount = 0;
}: ProfileRatingsProps) {}
  const {}
  reviews, isLoading, fetchUserReviews, reportReview;
}= useReviews ();

});
//Calculate rating distribution useEffect ( () => {}
  if (reviews.length > 0) {}
  const distribution: Record<number number> = {}
  1: 0, 2: 0, 3: 0, 4: 0, 5: 0;
};

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
=======
      </div>;
    </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ),; interface ProfileRatingsProps {

  userId: string;
averageRating?: number;
ratingCount?: number;
}export function ProfileRatings ({};
  userId, averageRating = 0, ratingCount = 0;
}: ProfileRatingsProps) {}
  const {}
  reviews, isLoading, fetchUserReviews, reportReview;
}= useReviews ();

});
//Calculate rating distribution useEffect ( () => {}
  if (reviews.length > 0) {}
  const distribution: Record<number number> = {}
  1: 0, 2: 0, 3: 0, 4: 0, 5: 0;
};

  distribution[review.rating] = (distribution[review.rating] || 0) + 1;
}

}

<<<<<<< HEAD
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
<<<<<<< HEAD
}isLoading= {}
  isLoading;
}onReportReview= {}
  reportReview;
=======
}isLoading= {
  isLoading 
}onReportReview= {
  reportReview 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}/> </TabsContent> </Tabs> </div> </div> </div>) 
}
}

}
}
;
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
