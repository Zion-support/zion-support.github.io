<<<<<<< HEAD
import { useState, useEffect } from 'react'
=======

import { useState, useEffect } from "react",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
interface ProfileRatingsProps {

  userId: string
averageRating?: number
ratingCount?: number
}export function ProfileRatings ({
  userId,  averageRating = 0, ratingCount = 0
}: ProfileRatingsProps) {
  const {
  reviews, isLoading,  fetchUserReviews, reportReview
}= useReviews ()
const [ratingDistribution, setRatingDistribution] = useState<Record<number number>> ({
})
//Calculate rating distribution useEffect ( () => {
  if (reviews.length > 0) {
  const distribution: Record<number number> = {
  1: 0, 2: 0, 3: 0,  4: 0, 5: 0
}
reviews.forEach ( (review) => {
  if (review.rating >= 1 && review.rating <= 5) {
  distribution[review.rating] = (distribution[review.rating] |0) + 1
export function ProfileRatings({
  userId
  averageRating = 0
  ratingCount = 0
}: ProfileRatingsProps) {
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews()
  const [ratingDistribution, setRatingDistribution] = useState<
    Record<number, number>
  >({})
  // Calculate rating distribution
  useEffect((,) => {
    if (reviews.length > 0) {
      const distribution: Record<number, number> = {
        1: 0
        2: 0
        3: 0
        4: 0
        5: 0
      }
      reviews.forEach(review => {        if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] |0) + 1
        }
      })
      setRatingDistribution(distribution)
    }
  }, [reviews])
  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId])
  return (
    <div className='space-y-6'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='md:w-1/3'>          <ReviewStats
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId])
<<<<<<< HEAD
=======
  return (
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  return (
=======
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

interface ProfileRatingsProps {
  userId: string,
  averageRating?: number,
  ratingCount?: number
import { useState, useEffect } from "react",;
import { Star } from 'lucide-react';
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
  
  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId]),
  
  return (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
=======
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { ReviewStats } from '@/components/reviews/ReviewStats';
import { ReviewsList } from '@/components/reviews/ReviewsList';
import { useReviews } from '@/hooks/useReviews';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProfileRatingsProps {
  userId: string;
averageRating?: number;
ratingCount?: number ;
}export function ProfileRatings ({;
  userId,  averageRating = 0, ratingCount = 0 ;
}: ProfileRatingsProps) {;
  const {;
  reviews, isLoading,  fetchUserReviews, reportReview ;
}= useReviews ();
const [ratingDistribution, setRatingDistribution] = useState<Record<number number>> ({;
  ;
});
//Calculate rating distribution useEffect ( () => {;
  if (reviews.length > 0) {;
  const distribution: Record<number number> = {;
  1: 0, 2: 0, 3: 0,  4: 0, 5: 0 ;
};
reviews.forEach ( (review) => {;
  if (review.rating >= 1 && review.rating <= 5) {;
  distribution[review.rating] = (distribution[review.rating] || 0) + 1 ;
}
}
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

      reviews.forEach(review => {
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

  return (
    <div className='space-y-6'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='md:w-1/3'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}
<<<<<<< HEAD
            ratingDistribution={ratingDistribution}          />
        </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        <div className='md:w-2/3'>
          <Tabs defaultValue='all'>
            <TabsList className='mb-4'>
              <TabsTrigger value='all'>
                All Reviews ({reviews.length})
              </TabsTrigger>
              <TabsTrigger value='positive'>Positive</TabsTrigger>
              <TabsTrigger value='critical'>Critical</TabsTrigger>
            </TabsList>
<<<<<<< HEAD
            <TabsContent value='all'>              <ReviewsList
=======
            <TabsContent value='all'>              <ReviewsList        
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="md:w-2/3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
=======

            <TabsContent value='all'>
              <ReviewsList
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}              />
            </TabsContent>
            <TabsContent value='positive'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating >= 4)}                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
<<<<<<< HEAD
            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}                isLoading={isLoading}                reviews={reviews.filter((r) => r.rating >= 4)}
<<<<<<< HEAD
=======
            
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <TabsContent value="positive">
              <ReviewsList
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                reviews={reviews.filter((r) => r.rating >= 4)}
=======

            <TabsContent value='positive'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating >= 4)}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
<<<<<<< HEAD
            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}                reviews={reviews.filter((r) => r.rating < 4)}
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            <TabsContent value="critical">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating < 4)}
=======

            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                isLoading={isLoading}
                onReportReview={reportReview}
<<<<<<< HEAD
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}, [reviews])
//Fetch reviews when component mounts return (<div className="space-y-6" > <div className="flex flex-col md:flex-row gap-6" > <div className="md:w-1/3" > <ReviewStats averageRating= {
  averageRating
}totalReviews= {
  ratingCount
}ratingDistribution= {
  ratingDistribution "
}/> </div> </TabsList> <TabsContent value="all" > <ReviewsList reviews= {
  reviews
}isLoading= {
  isLoading
}onReportReview= {
  reportReview "
}/> </TabsContent> <TabsContent value="positive" > <ReviewsList reviews= {
  reviews.filter ( (r) => r.rating >= 4)
}isLoading= {
  isLoading
}onReportReview= {
  reportReview "
}/> </TabsContent> <TabsContent value="critical" > <ReviewsList reviews= {
  reviews.filter ( (r) => r.rating < 4)
}isLoading= {
  isLoading
}onReportReview= {
<<<<<<< HEAD
  reportReview
}/> </TabsContent> </Tabs> </div> </div> </div>)
}"}
=======
<<<<<<< HEAD
  );

}, [reviews]);
//Fetch reviews when component mounts return (<div className="space-y-6" > <div className="flex flex-col md:flex-row gap-6" > <div className="md:w-1/3" > <ReviewStats averageRating= {;
  averageRating ;
}totalReviews= {;
  ratingCount ;
}ratingDistribution= {;
  ratingDistribution ";
}/> </div> </TabsList> <TabsContent value="all" > <ReviewsList reviews= {;
  reviews ;
}isLoading= {;
  isLoading ;
}onReportReview= {;
  reportReview ";
}/> </TabsContent> <TabsContent value="positive" > <ReviewsList reviews= {;
  reviews.filter ( (r) => r.rating >= 4) ;
}isLoading= {;
  isLoading ;
}onReportReview= {;
  reportReview ";
}/> </TabsContent> <TabsContent value="critical" > <ReviewsList reviews= {;
  reviews.filter ( (r) => r.rating < 4) ;
}isLoading= {;
  isLoading ;
}onReportReview= {;
  reportReview ;
}/> </TabsContent> </Tabs> </div> </div> </div>) ;
}"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  reportReview ;
}/> </TabsContent> </Tabs> </div> </div> </div>) ;
}"};
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
              />;
            </TabsContent>;
          </Tabs>;
        </div>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
