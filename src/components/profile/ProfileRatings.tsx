
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",

  return (


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
  useEffect(() => {;
    fetchUserReviews(userId);
  }, [userId]);


  return (
    <div className='space-y-6'>
      <div className='flex flex-col md:flex-row gap-6'>
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
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
            ratingDistribution={ratingDistribution}
          />
        </div>
        
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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


=======
<<<<<<< HEAD
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
<<<<<<< HEAD
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
