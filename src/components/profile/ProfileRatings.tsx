<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useState, useEffect } from 'react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useEffect } from 'react'

import { useState, useEffect } from "react",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",
<<<<<<< HEAD
<<<<<<< HEAD

  return (
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

interface ProfileRatingsProps {
  userId: string,
  averageRating?: number;
  ratingCount?: number
}


export function ProfileRatings({ userId, averageRating = 0, ratingCount = 0 }: ProfileRatingsProps) { const { reviews, isLoading, fetchUserReviews, reportReview  } = useReviews(),
  const [ ratingDistribution, setRatingDistribution ] = useState<Record<number, number>>({}),

  
  // Calculate rating distribution
  useEffect(() => {
<<<<<<< HEAD
    fetchUserReviews(userId)
  }, [userId]),
  
  return (

    <div className="space-y-6">
=======
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
  useEffect(() => {;
    fetchUserReviews(userId);
  }, [userId]);


>>>>>>>   return (
>>>>>>>     <div className="space-y-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}
<<<<<<< HEAD

=======
            <TabsContent value='all'>              <ReviewsList
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

            <TabsContent value="positive">
              <ReviewsList

=======
            <TabsContent value="positive">
              <ReviewsList
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            ratingDistribution={ratingDistribution}
          />
        </div>
        
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  return (

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
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className="md:w-2/3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
<<<<<<< HEAD

              <ReviewsList

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                reviews={reviews}
                isLoading={isLoading}
                onReportReview={reportReview}              />
            </TabsContent>
<<<<<<< HEAD


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
<<<<<<< HEAD

                reviews={reviews.filter((r) => r.rating >= 4)}
=======
>>>>>>>                 reviews={reviews.filter((r) => r.rating >= 4)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
<<<<<<< HEAD

            <TabsContent value="critical">
              <ReviewsList
                reviews={reviews.filter((r) => r.rating < 4)}
=======
            <TabsContent value='critical'>
              <ReviewsList
                reviews={reviews.filter(r => r.rating < 4)}                reviews={reviews.filter((r) => r.rating < 4)}
>>>>>>>             
>>>>>>>             <TabsContent value="critical">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
              <ReviewsList
                reviews={reviews && reviews.filter(r => r && r.rating < 4)}                isLoading={isLoading}                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}

            <TabsContent value="positive">;


              <ReviewsList
                reviews={reviews && reviews.filter((r) => r && r.rating >= 4)}

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
            
            <TabsContent value="critical">
>>>>>>>               <ReviewsList
                reviews={reviews.filter((r) => r.rating < 4)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>                 isLoading={isLoading}
                onReportReview={reportReview}
<<<<<<< HEAD

=======
  reportReview
}/> </TabsContent> </Tabs> </div> </div> </div>)
}"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
                reviews={reviews.filter((r) => r.rating < 4)}
                isLoading={isLoading}
                onReportReview={reportReview}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
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
  reportReview
}/> </TabsContent> </Tabs> </div> </div> </div>)
}"}
  reportReview ;
}/> </TabsContent> </Tabs> </div> </div> </div>) ;
}"};
}
}
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              />;
            </TabsContent>;
          </Tabs>;
        </div>;
      </div>;
<<<<<<< HEAD


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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
