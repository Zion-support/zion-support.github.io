

interface ProfileRatingsProps {_userId: string;
  averageRating?: number;
  ratingCount?: number;}

export function ProfileRatings(_{_userId, _averageRating = 0, _ratingCount = 0}: ProfileRatingsProps) {_const { reviews, _isLoading, _fetchUserReviews, _reportReview} = useReviews();
  const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({});
  
  // Calculate rating distribution
  useEffect__(() => {_if (reviews.length > 0) {
      const distribution: Record<number, _number> = { 1: 0, _2: 0, _3: 0, _4: 0, _5: 0};
      
      reviews.forEach(_(review) => {_if (review.rating >= 1 && review.rating <= 5) {
          distribution[review.rating] = (distribution[review.rating] || 0) + 1;}
      });
      
      setRatingDistribution(distribution);
    }
  }, [reviews]);
  
  // Fetch reviews when component mounts
  useEffect__(() => {_fetchUserReviews(userId);}, [userId]);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <ReviewStats
            averageRating={_averageRating}
            totalReviews={_ratingCount}
            ratingDistribution={_ratingDistribution}
          />
        </div>
        
        <div className="md:w-2/3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Reviews ({_reviews.length})</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <ReviewsList
                reviews={_reviews}
                isLoading={_isLoading}
                onReportReview={_reportReview}
              />
            </TabsContent>
            
            <TabsContent value="positive">
              <ReviewsList
                reviews={_reviews.filter(_(r) => r.rating >= 4)}
                isLoading={_isLoading}
                onReportReview={_reportReview}
              />
            </TabsContent>
            
            <TabsContent value="critical">
              <ReviewsList
                reviews={_reviews.filter(_(r) => r.rating < 4)}
                isLoading={_isLoading}
                onReportReview={_reportReview}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
