
import { Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { ReviewsList } from '@/components/reviews/ReviewsList'
import { LeaveReviewModal } from '@/components/reviews/LeaveReviewModal'
import { useReviews } from '@/hooks/useReviews'
import { useAuth } from '@/hooks/useAuth'
interface ProjectReviewSectionProps {
  project: Project
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-400" />
          Reviews
        </CardTitle>
        <CardDescription>
          Reviews are visible once the project is completed and both parties submit feedback
        </CardDescription>
      </CardHeader>

=======


      

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      <CardContent>
        {isCompleted ? (
          <div className="space-y-6">
            {(isClient || isTalent) && (
              <div className="border-b pb-4 mb-4">

                    )}
                  </div>
                ) : null}
              </div>
            )}

            <ReviewsList
              reviews = {reviews,}
              isLoading = {isLoading,}
              onReportReview = {reportReview,}

            />
          </div>
        ) : (
          <div className="bg-muted/20 rounded-lg p-6 text-center">
            <h3 className="font-medium mb-2">Reviews will be available once the project is completed</h3>
            <p className="text-sm text-muted-foreground">
              After the project is marked as completed, both parties will be able to leave reviews
            </p>
          </div>
        )}
<<<<<<< HEAD
