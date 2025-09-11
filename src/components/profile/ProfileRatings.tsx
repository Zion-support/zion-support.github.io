<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react'
import { useState, useEffect } from 'react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

      })

<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
=======
import { useState, useEffect } from "react";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
=======
import { useState, useEffect } from "react";
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { useReviews } from "@/hooks/useReviews";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

  // Fetch reviews when component mounts;
<<<<<<< HEAD
  useEffect(() => {;
    fetchUserReviews(userId);
  }, [userId]);


<<<<<<< HEAD
  return (
    <div className='space-y-6'>;
      <div className='flex flex-col md:flex-row gap-6'>;
        <div className='md:w-1/3'>          <ReviewStats



  return (
    <div className="space-y-6">;
      <div className="flex flex-col md:flex-row gap-6">;
        <div className="md:w-1/3">;
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}
            <TabsContent value='all'>              <ReviewsList

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
            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}                isLoading={isLoading}                reviews={reviews.filter((r) => r.rating >= 4)}
            <TabsContent value="positive">
              <ReviewsList
            ratingDistribution={ratingDistribution}
          />
        </div>
        
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className='space-y-6'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='md:w-1/3'>          <ReviewStats
<<<<<<< HEAD
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
  useEffect(() => {
    fetchUserReviews(userId)
  }, [userId])
  return (
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
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
export function ProfileRatings("props": "any) {;
  const { reviews", isLoading, fetchUserReviews, reportReview } = useReviews();
export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) {;
  const { reviews, isLoading, fetchUserReviews, reportReview } = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({});
  // Calculate rating distribution;
  useEffect(() => {;
  // "TODO": "Add dependencies if needed;
"}, []);
    if(reviews.length > 0) {;
      const "distribution": "Recor d<number", number> = { "1": "0", "2": "0", "3": "0", "4": "0", "5": "0 "};
      ;
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
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}
<<<<<<< HEAD
            ratingDistribution={ratingDistribution}          />
        </div>
        <div className='md:w-2/3'>
          <Tabs defaultValue='all'>
            <TabsList className='mb-4'>
              <TabsTrigger value='all'>
                All Reviews ({reviews.length})
              </TabsTrigger>
              <TabsTrigger value='positive'>Positive</TabsTrigger>
              <TabsTrigger value='critical'>Critical</TabsTrigger>
            </TabsList>
            <TabsContent value='all'>              <ReviewsList
            <TabsContent value='all'>              <ReviewsList        
=======
=======
  useEffect(() => {;
    fetchUserReviews(userId);
  }, [userId]);


  return (
    <div className='space-y-6'>;
      <div className='flex flex-col md:flex-row gap-6'>;
        <div className='md:w-1/3'>          <ReviewStats



  return (
    <div className="space-y-6">;
      <div className="flex flex-col md:flex-row gap-6">;
        <div className="md:w-1/3">;
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            ratingDistribution={ratingDistribution}
          />
        </div>
        
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="md:w-2/3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
<<<<<<< HEAD
<<<<<<< HEAD
=======

              <ReviewsList

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              <ReviewsList

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}              />
            </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}                reviews={reviews.filter((r) => r.rating < 4)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                isLoading={isLoading}
                onReportReview={reportReview}              />;
            </TabsContent>;

            <TabsContent value='positive'>;


              <ReviewsList
                reviews={reviews && reviews.filter(r => r && r.rating >= 4)}                isLoading={isLoading}
                onReportReview={reportReview}


              />;
            </TabsContent>;

            <TabsContent value='critical'>;
=======
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            <TabsContent value='critical'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <ReviewsList
                reviews={reviews && reviews.filter(r => r && r.rating < 4)}                isLoading={isLoading}                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}

            <TabsContent value="positive">;


              <ReviewsList
                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}

<<<<<<< HEAD
<<<<<<< HEAD
            
            <TabsContent value="critical">
                reviews={reviews.filter((r) => r.rating < 4)}
                onReportReview={reportReview}
  reportReview
}/> </TabsContent> </Tabs> </div> </div> </div>)
}"}
            <TabsContent value='positive'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating >= 4)}                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}                isLoading={isLoading}                reviews={reviews.filter((r) => r.rating >= 4)}
            
            <TabsContent value="positive">
              <ReviewsList
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
                reviews={reviews.filter((r) => r.rating >= 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}                reviews={reviews.filter((r) => r.rating < 4)}
            
            <TabsContent value="critical">
              <ReviewsList
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            
            <TabsContent value="positive">
              <ReviewsList
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                reviews={reviews.filter((r) => r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}

              />;
            </TabsContent>;

            <TabsContent value='critical'>;
              <ReviewsList
                reviews={reviews && reviews.filter(r => r && r.rating < 4)}                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}

            <TabsContent value="critical">;

              <ReviewsList
                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  reportReview ;
}/> </TabsContent> </Tabs> </div> </div> </div>) ;
}"};
}
}
}


import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { ReviewStats } from '@/components / reviews / ReviewStats';
import { ReviewsList } from '@/components / reviews / ReviewsList';
import { use_reviews } from '@/hooks / use_reviews';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
interface ProfileRatingsProps {
  user_id: string;
average_rating?: number;
rating_count?: number;
}export /**
 * ProfileRatings - Function description
 */
function ProfileRatings() {
  const {
  reviews, is_loading,  fetchUserReviews, report_review;
}= use_reviews ();
const [rating_distribution, setRatingDistribution] = useState < Record < number number>> ({
});
//Calculate rating distribution useEffect ( () => {
  // Check condition
if ( {) {
  $2
}
  const distribution: Record < number number> = {
  1: 0, 2: 0, 3: 0,  4: 0, 5: 0;
}
reviews.for_each ( (review) => {
  // Check condition
if ( {) {
  $2
}
  distribution[review.rating] = (distribution[review.rating] || 0) + 1;
export /**
 * ProfileRatings - Function description
 */
function ProfileRatings() {
  const { reviews, is_loading, fetchUserReviews, report_review } = use_reviews ();
  const [rating_distribution, setRatingDistribution] = useState<;
    Record < number, number>;
  >({});
  // Calculate rating distribution;
  useEffect ((, ) => {
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
      reviews.for_each (review => {        // Check condition
if ( {) {
  $2
}
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;
        }
      });
      setRatingDistribution (distribution);
    }
  }, [reviews]);
  // Fetch reviews when component mounts;
  useEffect (() => {
    fetchUserReviews (user_id);
  }, [user_id]);
  return (
    <div className='space - y-6'>;
      <div className='flex flex - col md:flex - row gap - 6'>;
        <div className='md:w - 1/3'>          <ReviewStats;
    <div className="space - y-6">;
      <div className="flex flex - col md:flex - row gap - 6">;
        <div className="md:w - 1/3">;
  useEffect (() => {
    fetchUserReviews (user_id);
  }, [user_id]);
  return (
    <div className="space - y-6">;
      <div className="flex flex - col md:flex - row gap - 6">;
        <div className="md:w - 1/3">;
          <ReviewStats;
            average_rating={average_rating}
            total_reviews={rating_count}
            rating_distribution={rating_distribution}          />;
        </div>;
        <div className='md:w - 2/3'>;
          <Tabs default_value='all'>;
            <TabsList className='mb - 4'>;
              <TabsTrigger value='all'>;
                All Reviews ({reviews.length});
              </TabsTrigger>;
              <TabsTrigger value='positive'>Positive</TabsTrigger>;
              <TabsTrigger value='critical'>Critical</TabsTrigger>;
            </TabsList>;
            <TabsContent value='all'>              <ReviewsList;
        <div className="md:w - 2/3">;
          <Tabs default_value="all">;
            <TabsList className="mb - 4">;
              <TabsTrigger value="all">All Reviews ({reviews.length})</TabsTrigger>;
              <TabsTrigger value="positive">Positive</TabsTrigger>;
              <TabsTrigger value="critical">Critical</TabsTrigger>;
            </TabsList>;
            <TabsContent value="all">;
                reviews={reviews}
                is_loading={is_loading}
                onReportReview={report_review}              />;
            </TabsContent>;
            <TabsContent value='positive'>;
              <ReviewsList;
                reviews={reviews.filter (r => r.rating >= 4)}                is_loading={is_loading}
                onReportReview={report_review}
              />;
            </TabsContent>;
            <TabsContent value='critical'>;
              <ReviewsList;
                reviews={reviews.filter (r => r.rating < 4)}                is_loading={is_loading}                reviews={reviews.filter ((r) => r.rating >= 4)}
            <TabsContent value="positive">;
              <ReviewsList;
                reviews={reviews.filter ((r) => r.rating >= 4)}
                is_loading={is_loading}
                onReportReview={report_review}
              />;
            </TabsContent>;
            <TabsContent value='critical'>;
              <ReviewsList;
                reviews={reviews.filter (r => r.rating < 4)}                reviews={reviews.filter ((r) => r.rating < 4)}
            <TabsContent value="critical">;
              <ReviewsList;
                reviews={reviews.filter ((r) => r.rating < 4)}
                is_loading={is_loading}
                onReportReview={report_review}
              />;
            </TabsContent>;
          </Tabs>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
}
;
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    </div>);
}, [reviews]);
//Fetch reviews when component mounts return (<div className="space - y-6" > <div className="flex flex - col md:flex - row gap - 6" > <div className="md:w - 1/3" > <ReviewStats average_rating= {
  average_rating;
}total_reviews= {
  rating_count;
}rating_distribution= {
  rating_distribution ";
}/> </div> </TabsList> <TabsContent value="all" > <ReviewsList reviews= {
  reviews;
}is_loading= {
  is_loading;
}onReportReview= {
  report_review ";
}/> </TabsContent> <TabsContent value="positive" > <ReviewsList reviews= {
  reviews.filter ( (r) => r.rating >= 4);
}is_loading= {
  is_loading;
}onReportReview= {
  report_review ";
}/> </TabsContent> <TabsContent value="critical" > <ReviewsList reviews= {
  reviews.filter ( (r) => r.rating < 4);
}is_loading= {
  is_loading;
}onReportReview= {
  report_review;
}/> </TabsContent> </Tabs> </div> </div> </div>);
}"}
}
<<<<<<< HEAD
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
