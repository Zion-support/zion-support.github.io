            <TabsContent value="all">
              <ReviewsList
                reviews={reviews && reviews.filter((r) => r && r.rating < 4)}
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
}
;
  // Fetch reviews when component mounts;
  useEffect (() => {
    fetchUserReviews (user_id);
  }, [user_id]);
;
  return (
    <div className="space-y-6">;
      <div className="flex flex - col md:flex - row gap-6">;
        <div className="md:w-1/3">;
          <ReviewStats;
            average_rating={average_rating}
            total_reviews={rating_count}
            rating_distribution={rating_distribution}
          />;
        </div>;
        <div className="md:w-2/3">;
          <Tabs default_value="all">;
            <TabsList className="mb-4">;
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

              />;
            </TabsContent>;
          </Tabs>;
        </div>;
      </div>;    </div>;
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
