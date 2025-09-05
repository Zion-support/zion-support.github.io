
<<<<<<< HEAD
import { useState } from "react",
import { Star } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal",
import { useReviews } from "@/hooks/useReviews",
import { Project } from "@/types/projects",
import { useAuth } from "@/hooks/useAuth",
=======
import { useState } from &quot;react&quot;;
import { Star } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { ReviewsList } from &quot;@/components/reviews/ReviewsList&quot;;
import { LeaveReviewModal } from &quot;@/components/reviews/LeaveReviewModal&quot;;
import { useReviews } from &quot;@/hooks/useReviews&quot;;
import { Project } from &quot;@/types/projects&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ProjectReviewSectionProps {
  project: Project
}

export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {
  const { user } = useAuth(),
  const { reviews, userReview, isLoading, reportReview } = useReviews(project.id),
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false),
  
<<<<<<< HEAD
  const isCompleted = project.status === "completed",
  const isClient = user?.id === project.client_id,
  const isTalent = user?.id === project.talent_id,
=======
  const isCompleted = project.status === &quot;completed&quot;;
  const isClient = user?.id === project.client_id;
  const isTalent = user?.id === project.talent_id;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const clientProfile = project.client_profile,
  const talentProfile = project.talent_profile,
  
  // Determine who the current user needs to review
  const revieweeId = isClient ? project.talent_id : project.client_id,
  const revieweeName = isClient 
<<<<<<< HEAD
    ? talentProfile?.full_name || "Talent" 
    : clientProfile?.display_name || "Client",
=======
    ? talentProfile?.full_name || &quot;Talent&quot; 
    : clientProfile?.display_name || &quot;Client&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,
  
  return (
    <Card className=&quot;mt-6&quot;>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <Star className=&quot;h-5 w-5 text-yellow-400&quot; />
          Reviews
        </CardTitle>
        <CardDescription>
          Reviews are visible once the project is completed and both parties submit feedback
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {isCompleted ? (
          <div className=&quot;space-y-6&quot;>
            {(isClient || isTalent) && (
              <div className=&quot;border-b pb-4 mb-4&quot;>
                {canLeaveReview ? (
                  <div className=&quot;bg-muted/20 rounded-lg p-4 text-center&quot;>
                    <h3 className=&quot;font-medium mb-2&quot;>Share your experience</h3>
                    <p className=&quot;text-sm text-muted-foreground mb-3&quot;>
                      Your review will help build a trustworthy community
                    </p>
                    <Button onClick={() => setIsReviewModalOpen(true)}>
                      Leave Review
                    </Button>
                  </div>
                ) : hasLeftReview ? (
                  <div className=&quot;bg-muted/20 rounded-lg p-4 text-center&quot;>
                    <h3 className=&quot;font-medium mb-2&quot;>Thank you for your review!</h3>
                    <p className=&quot;text-sm text-muted-foreground mb-3&quot;>
                      Your review is {userReview.status === &quot;approved&quot; ? &quot;published&quot; : &quot;pending approval&quot;}
                    </p>
                    {userReview.status === &quot;pending&quot; && (
                      <Button variant=&quot;outline&quot; onClick={() => setIsReviewModalOpen(true)}>
                        Edit Review
                      </Button>
                    )}
                  </div>
                ) : null}
              </div>
            )}
            
            <ReviewsList
              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}
            />
          </div>
        ) : (
          <div className=&quot;bg-muted/20 rounded-lg p-6 text-center&quot;>
            <h3 className=&quot;font-medium mb-2&quot;>Reviews will be available once the project is completed</h3>
            <p className=&quot;text-sm text-muted-foreground&quot;>
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
