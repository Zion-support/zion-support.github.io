
import { Star } from 'lucide-react'
import { ReviewStats } from "@/components/reviews/ReviewStats",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { useReviews } from "@/hooks/useReviews",

  return (

    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <ReviewStats
            averageRating={averageRating}
            totalReviews={ratingCount}

=======

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
<<<<<<< HEAD
