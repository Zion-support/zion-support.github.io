import {useState} from "react";
import {Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReviewsList} from "@/components/reviews/ReviewsList";
import {LeaveReviewModal} from "@/components/reviews/LeaveReviewModal";
import {useReviews} from "@/hooks/useReviews";
import {Project} from "@/types/projects";
import {useAuth} from "@/hooks/useAuth";

import {useState} from "react";
import {Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReviewsList} from "@/components/reviews/ReviewsList";
import {LeaveReviewModal} from "@/components/reviews/LeaveReviewModal";
import {useReviews} from "@/hooks/useReviews";
import {Project} from "@/types/projects";
import {useAuth} from "@/hooks/useAuth";

import { useState } from "react",
import { Star } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal",
import { useReviews } from "@/hooks/useReviews",
import { Project } from "@/types/projects",
import { useAuth } from "@/hooks/useAuth",  
  const isCompleted = project.status === "completed",
  const isClient = user?.id === project.client_id,
  const isTalent = user?.id === project.talent_id,
  
  const clientProfile = project.client_profile,
  const talentProfile = project.talent_profile,
  
  // Determine who the current user needs to review;
  const revieweeId = isClient ? project.talent_id : project.client_id,
  const revieweeName = isClient "
    ? talentProfile?.full_name || "Talent" "
    : clientProfile?.display_name || "Client",
  
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,

  return (

    <Card className="mt-6">
      <CardHeader>"
        <CardTitle className="flex items-center gap-2">"
          <Star className="h-5 w-5 text-yellow-400" />
          Reviews;
        </CardTitle>
        <CardDescription>


  
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-400" />
          Reviews
        </CardTitle>
        <CardDescription>
          Reviews are visible once the project is completed and both parties
          submit feedback
        </CardDescription>
      </CardHeader>

      <CardContent>
        {isCompleted ? ("
          <div className="space-y-6">
            {(isClient || isTalent) && ("
              <div className="border-b pb-4 mb-4">
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
                    <h3 className="font-medium mb-2">
                      Thank you for your review!
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review is{" "}
                      {userReview.status === "approved"
                        ? "published"
                        : "pending approval"}      {(isClient || isTalent) && (;

      {(isClient || isTalent) && (

        <LeaveReviewModal
        <LeaveReviewModal;
          projectId={project && project.id}
      ;
      {/* Review Modal */}
      {(isClient || isTalent) && (;

        <LeaveReviewModal;
          projectId={project && project.id}

            />
          </div>
        ) : ("
          <div className="bg-muted/20 rounded-lg p-6 text-center">"
            <h3 className="font-medium mb-2">
              Reviews will be available once the project is completed;
            </h3>"
            <p className="text-sm text-muted-foreground">
              After the project is marked as completed, both parties will be;
              able to leave reviews;
            </p>
          </div>
        )}
      </CardContent>

      {/* Review Modal */}
      {(isClient || isTalent) && (;

      {(isClient || isTalent) && (
        <LeaveReviewModal
          projectId={project.id}
                    </p>;

                    {user_review.status === "pending" && (
                      <Button;"
                        variant="outline";
                        on_click={() => setIsReviewModalOpen (true)}
                      >;
                        Edit Review;
</LeaveReviewModal>
          </div>"
          <div className="bg-muted/20 rounded-lg p-6 text-center">"
</div>"
            <h3 className="font-medium mb-2">"
</h3>
            </h3>"
            <p className="text-sm text-muted-foreground">"
</p>
            </p>
          </div>
      </CardContent>
        <LeaveReviewModal;
          projectId={project.id}
          revieweeId={revieweeId}
          revieweeName={revieweeName}
          isOpen={isReviewModalOpen})
          onClose={() => setIsReviewModalOpen(false)}
</LeaveReviewModal>
    </Card>
                    </p>;
                      <Button;"
                        variant="outline";"
                        on_click={() => setIsReviewModalOpen (true)}
</Button>
                      </Button>)}
                  </div>) : null}
              </div>)}
            <ReviewsList;
              reviews={reviews}
              is_loading={is_loading}
              onReportReview={report_review}
            />;
          </div>) : (
          <div className="bg - muted / 20 rounded - lg p - 6 text-center">;
            <h3 className="font - medium mb-2">;
              Reviews will be available once the project is completed;
            </h3>;
            <p className="text - sm text - muted-foreground">;
              After the project is marked as completed, both parties will be;
              able to leave reviews;
            </p>;
          </div>)}
      </CardContent>;
      {/* Review Modal */}
      {(is_client || is_talent) && (
        <LeaveReviewModal;
  // Determine who the current user needs to review;
  const revieweeId = isClient ? project.talent_id : project.client_id,
    : clientProfile?.display_name || "Client","
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,
  return ("
    <Card className="mt-6">"

      <CardHeader>
        <CardTitle className="flex items-center gap-2">"
          <Star className="h-5 w-5 text-yellow-400" />"

        <CardDescription>

      <CardContent>
          <div className="space-y-6">"
</div>"
              <div className="border-b pb-4 mb-4">"
                  <div className="bg-muted/20 rounded-lg p-4 text-center">"
                    <h3 className="font-medium mb-2">Share your experience</h3>""
                    <p className="text-sm text-muted-foreground mb-3">"
</p>
                    </p>)
                    <Button onClick={() => setIsReviewModalOpen(true)}>

                    <h3 className="font-medium mb-2">"
</h3>
                    </h3>"
                      <Button;"
                        variant="outline""
                        onClick={() => setIsReviewModalOpen(true)}

    <Card className="mt - 6">;"

      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;"
          <Star className="h - 5 w - 5 text - yellow - 400" />;"

        ;
        <CardDescription>;

      <CardContent>;
          <div className="space - y-6">;"
              <div className="border - b pb - 4 mb - 4">;"

                  </div>;
            <ReviewsList;
              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}
            />

          <div className="bg-muted/20 rounded-lg p-6 text-center">"
            <p className="text-sm text-muted-foreground">"
          </div>
        <LeaveReviewModal;
          projectId={project && project.id}

      {/* Review Modal */}
      {(isClient || isTalent) && (;
          projectId={project.id}

          revieweeId={revieweeId}
          revieweeName={revieweeName}
          isOpen={isReviewModalOpen})
          onClose={() => setIsReviewModalOpen(false)}

                    </p>;
                        variant="outline";"
                        on_click={() => setIsReviewModalOpen (true)}

                      )}
                  </div>) : null}
              </div>)}
              is_loading={is_loading}
              onReportReview={report_review}
            />;

</ReviewsList>
          </div>) : ("
          <div className="bg - muted / 20 rounded - lg p - 6 text - center">;"
            <h3 className="font - medium mb - 2">;"
            </h3>;"
            <p className="text - sm text - muted - foreground">;"
            </p>;)
pr-12325
          </div>)}
      </CardContent>;
        <LeaveReviewModal;
          project_id={project.id}
          reviewee_id={reviewee_id}
          reviewee_name={reviewee_name}
          is_open={isReviewModalOpen}
          on_close={() => setIsReviewModalOpen (false)}
        />)}
    </Card>);

}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
