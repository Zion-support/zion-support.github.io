






  




  return (

import { useState } from "react",;
import { Star } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReviewsList } from "@/components/reviews/ReviewsList",;
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal",;
import { useReviews } from "@/hooks/useReviews",;
import { Project } from "@/types/projects",;
import { useAuth } from "@/hooks/useAuth",;
;
interface ProjectReviewSectionProps {;
  project:Project;
}
;
export function ProjectReviewSection({ project } ProjectReviewSectionProps) {;
  const { user } = useAuth(),;
  const { reviews, userReview, isLoading, reportReview } = useReviews(project.id),;
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false),;
  ;
  const isCompleted = project.status === "completed",;
  const isClient = user?.id === project.client_id,;
  const isTalent = user?.id === project.talent_id,;
  ;
  const clientProfile = project.client_profile,;
  const talentProfile = project.talent_profile,;
  ;
  // Determine who the current user needs to review;
  const revieweeId = isClient ? project.talent_id :project.client_id,;
  const revieweeName = isClient ;
    ? talentProfile?.full_name || "Talent" ;
    :clientProfile?.display_name || "Client",;
  ;
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,;
  const hasLeftReview = userReview != null,;
  ;
  return (;

                    )}
                  </div>;
                ) : null}
                ) :hasLeftReview ? (;
                  <div className="bg-muted/20 rounded-lg p-4 text-center">;
                    <h3 className="font-medium mb-2">Thank you for your review!</h3>;
                    <p className="text-sm text-muted-foreground mb-3">;
                      Your review is {userReview.status === "approved" ? "published" :"pending approval"}
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
              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}





