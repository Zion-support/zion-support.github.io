<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState, useEffect } from "react",
import { Star } from "lucide-react",
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
import {useState, useEffect} from "react";
import {Star} from "lucide-react";
import {ReviewStats} from "@/components/reviews/ReviewStats";
import {ReviewsList} from "@/components/reviews/ReviewsList";
import {useReviews} from "@/hooks/useReviews";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
interface ProfileRatingsProps {;
  userId: string,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx

  averageRating?: number;
  ratingCount?: number;
}


========
  averageRating?: number;
  ratingCount?: number;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
        }
      });
;
      setRatingDistribution (distribution);
    }
  }, [reviews]);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ProfileRatingsProps {
  userId: string,
  averageRating?: number,
  ratingCount?: number

<<<<<<< HEAD
<<<<<<< HEAD
=======
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<
    Record<number, number>
  >({});

  // Calculate rating distribution
  useEffect(() => {
    if (reviews.length > 0) {
      const distribution: Record<number, number> = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };

      reviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
        }
      });

      setRatingDistribution(distribution);
    }
  }, [reviews]);

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId]),
<<<<<<< HEAD
<<<<<<< HEAD

=======
  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <div className="space-y-6">;
      <div className="flex flex-col md:flex-row gap-6">;
        <div className="md:w-1/3">;
=======

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
              <ReviewsList
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
              />;
            </TabsContent>;
<<<<<<< HEAD
            <TabsContent value="positive">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
              <ReviewsList
                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}
=======
            ;
            <TabsContent value="positive">;
              <ReviewsList;
                reviews={reviews.filter((r) => r.rating >= 4)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                isLoading={isLoading}
                onReportReview={reportReview}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
              />;
            </TabsContent>;
<<<<<<< HEAD
            <TabsContent value="critical">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
              <ReviewsList
                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD

=======

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
;
  // Fetch reviews when component mounts;
  useEffect (() => {
    fetchUserReviews (user_id);
  }, [user_id]);
;
  return (
    <div className="space - y-6">;
      <div className="flex flex - col md:flex - row gap - 6">;
        <div className="md:w - 1/3">;
          <ReviewStats;
            average_rating={average_rating}
            total_reviews={rating_count}
            rating_distribution={rating_distribution}
          />;
        </div>;
        <div className="md:w - 2/3">;
          <Tabs default_value="all">;
            <TabsList className="mb - 4">;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx

========
=======
            ;
            <TabsContent value="critical">;
              <ReviewsList;
                reviews={reviews.filter((r) => r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
              />;
            </TabsContent>;
          </Tabs>;
        </div>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
    </div>);
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx

=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileRatings.tsx
=======
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
