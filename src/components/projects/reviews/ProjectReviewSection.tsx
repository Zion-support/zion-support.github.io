export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {
  const { user } = useAuth(),
  const { reviews, userReview, isLoading, reportReview } = useReviews(project.id),
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false),
  
  const isCompleted = project.status === "completed",
  const isClient = user?.id === project.client_id,
  const isTalent = user?.id === project.talent_id,
  
  const clientProfile = project?.talent_profile,
  const talentProfile = project.talent_profile,

  // Determine who the current user needs to review
  const revieweeId = isClient ? project.talent_id : project.client_id,
  const revieweeName = isClient 
    ? talentProfile?.full_name || "Talent" 
    : clientProfile?.full_name || "Client",

  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,

export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {
  const { user } = useAuth($2);
  const { reviews, userReview, isLoading, reportReview } = useReviews($2);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState($2);
  const isCompleted = $2;
  const isClient = $2;
  const isTalent = $2;
  const clientProfile = $2;
  const talentProfile = $2;
  // Determine who the current user needs to review
  const revieweeId = $2;
  const revieweeName = $2;
  const canLeaveReview = $2;
  const hasLeftReview = $2;
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

      <CardContent>
        {isCompleted ? (
          <div className="space-y-6">
            {(isClient || isTalent) && (
              <div className="border-b pb-4 mb-4">
                {canLeaveReview ? (
                  <div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Share your experience</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review will help build a trustworthy community
                    </p>
                    <Button onClick={() => setIsReviewModalOpen(true)}>
                      Leave Review
                    </Button>
                  </div>
                ) : hasLeftReview ? (
                  <div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Thank you for your review!</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review is {userReview.status === "approved" ? "published" : "pending approval"}
                    </p>
                    {userReview.status === "pending" && (
                      <Button variant="outline" onClick={() => setIsReviewModalOpen(true)}>
                        Edit Review
                      </Button>
import { Project } from '@/types/projects',;
import { useState } from "react",;

import { Star } from 'lucide-react';

                      Leave Review;
                    </Button>;
                  </div>;
                ) : hasLeftReview ? (;
                  <div className='bg-muted/20 rounded-lg p-4 text-center'>;
                    <h3 className='font-medium mb-2'>;
                      Thank you for your review!;
                    </h3>;
                    <p className='text-sm text-muted-foreground mb-3'>;
                      Your review is{' '}
                      {userReview && userReview.status === 'approved';
                        ? 'published';
                        : 'pending approval'}
                    </p>;
                    {userReview.status === "pending" && (;
                      <Button variant="outline" onClick={() => setIsReviewModalOpen(true)}>;
                        Edit Review;
                      </Button>;

                    )}
                  </div>
                ) : null}
              </div>
            )}

            <ReviewsList
              reviews = {reviews,}
              isLoading = {isLoading,}
              onReportReview = {reportReview,}

      </CardContent>;

      {/* Review Modal */}
      {(isClient || isTalent) && (;

        <LeaveReviewModal

          revieweeId = {revieweeId,}
          revieweeName = {revieweeName,}
          isOpen = {isReviewModalOpen,}
          onClose = {(,) => setIsReviewModalOpen(false),}

      )}

    </Card>;
  );
}

}

;
            <ReviewsList;
              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}

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
      </CardContent>
      
      {/* Review Modal */}
      {(isClient || isTalent) && (
        <LeaveReviewModal
          projectId={project.id}
          revieweeId={revieweeId}
          revieweeName={revieweeName}
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
        />
      )}
    </Card>
  )
}
;