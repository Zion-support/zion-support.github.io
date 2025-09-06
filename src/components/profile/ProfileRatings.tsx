<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { ReviewStats } from '@/components/reviews/ReviewStats';
import { ReviewsList } from '@/components/reviews/ReviewsList';
import { useReviews } from '@/hooks/useReviews';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
<<<<<<< HEAD
=======
=======

import { useState, useEffect } from "react";
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { useReviews } from "@/hooks/useReviews";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
<<<<<<< HEAD
    <div className='space-y-6'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='md:w-1/3'>          <ReviewStats
=======
<<<<<<< HEAD
    <div className='space-y-6'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='md:w-1/3'>
=======

import { useState, useEffect } from "react";
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { useReviews } from "@/hooks/useReviews";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProfileRatingsProps {
  userId: string,
  averageRating?: number;
  ratingCount?: number
}


export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) { const { reviews, isLoading, fetchUserReviews, reportReview  } = useReviews(),
  const [ ratingDistribution, setRatingDistribution ] = useState<Record<number, number>>({}),

  
  // Calculate rating distribution
  useEffect(() => {
    if (reviews.length > 0) {
      const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      
      reviews.forEach((review) => {
        if (review.rating >= 1 && review.rating <= 5) {
          distribution[ review.rating ] = (distribution[review.rating] || 0) + 1
        }
      });
      
      setRatingDistribution(distribution)
    }
  }, [reviews]);
  
  // Fetch reviews when component mounts
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId]);


  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <ReviewStats
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            averageRating={averageRating}
            totalReviews={ratingCount}
            ratingDistribution={ratingDistribution}
          />
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
            <TabsContent value='all'>
=======
        
        <div className="md:w-2/3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        <div className="md:w-2/3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <ReviewsList
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
<<<<<<< HEAD

            <TabsContent value='positive'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating >= 4)}                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>

            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}                isLoading={isLoading}
=======
<<<<<<< HEAD
<<<<<<< HEAD

            <TabsContent value='positive'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating >= 4)}
=======
            
            <TabsContent value="positive">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating >= 4)}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            
            <TabsContent value="positive">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating >= 4)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD

            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}
=======
            
            <TabsContent value="critical">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating < 4)}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            
            <TabsContent value="critical">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating < 4)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                isLoading={isLoading}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                onReportReview={reportReview}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
<<<<<<< HEAD
}"
=======
}"
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
