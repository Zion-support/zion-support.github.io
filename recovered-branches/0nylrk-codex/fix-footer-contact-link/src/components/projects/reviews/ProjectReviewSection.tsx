<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal";
import { useReviews } from "@/hooks/useReviews";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
import {useState} from "react";
import {Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReviewsList} from "@/components/reviews/ReviewsList";
import {LeaveReviewModal} from "@/components/reviews/LeaveReviewModal";
import {useReviews} from "@/hooks/useReviews";
import {Project} from "@/types/projects";
import {useAuth} from "@/hooks/useAuth";
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


import {useState} from "react";
import {Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReviewsList} from "@/components/reviews/ReviewsList";
import {LeaveReviewModal} from "@/components/reviews/LeaveReviewModal";
import {useReviews} from "@/hooks/useReviews";
import {Project} from "@/types/projects";
import {useAuth} from "@/hooks/useAuth";
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from "react",
import { Star } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal",
import { useReviews } from "@/hooks/useReviews",
import { Project } from "@/types/projects",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal";
import { useReviews } from "@/hooks/useReviews";
import { Project } from "@/types/projects";
import { useAuth } from "@/hooks/useAuth";
interface ProjectReviewSectionProps {
  project: Project;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {
  const { user } = useAuth();
  const { reviews, userReview, isLoading, reportReview } = useReviews(
    project.id,
  );
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  const isCompleted = project.status === "completed";
  const isClient = user?.id === project.client_id;
  const isTalent = user?.id === project.talent_id;

  const clientProfile = project.client_profile;
  const talentProfile = project.talent_profile;

  // Determine who the current user needs to review
  const revieweeId = isClient ? project.talent_id : project.client_id;
  const revieweeName = isClient
    ? talentProfile?.full_name || "Talent"
    : clientProfile?.display_name || "Client";

  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview;
  const hasLeftReview = userReview != null;

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {;
  const { user } = useAuth();
  const { reviews, userReview, isLoading, reportReview } = useReviews(project.id);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {
  const { user } = useAuth();

<<<<<<< HEAD

=======
  const { reviews, userReview, isLoading, reportReview } = useReviews(
    project.id
  );
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
<<<<<<< HEAD
=======
export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user } = useAuth(),
  const { reviews, userReview, isLoading, reportReview } = useReviews(project.id),
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  
  const isCompleted = project.status === "completed",
  const isClient = user?.id === project.client_id,
  const isTalent = user?.id === project.talent_id,
  
  const clientProfile = project.client_profile,
  const talentProfile = project.talent_profile,
  
  // Determine who the current user needs to review
  const revieweeId = isClient ? project.talent_id : project.client_id,
  const revieweeName = isClient 
    ? talentProfile?.full_name || "Talent" 
    : clientProfile?.display_name || "Client",
  
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,
  
<<<<<<< HEAD
=======

  const isCompleted = project.status === "completed";
  const isClient = user?.id === project.client_id;
  const isTalent = user?.id === project.talent_id;

  const clientProfile = project.client_profile;
  const talentProfile = project.talent_profile;

  // Determine who the current user needs to review
  const revieweeId = isClient ? project.talent_id : project.client_id;
  const revieweeName = isClient
    ? talentProfile?.full_name || "Talent"
    : clientProfile?.display_name || "Client";

  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview;
  const hasLeftReview = userReview != null;

>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
        {isCompleted ? (
          <div className="space-y-6">
            {(isClient || isTalent) && (
              <div className="border-b pb-4 mb-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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
                    <h3 className="font-medium mb-2">
                      Thank you for your review!
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review is{" "}
                      {userReview.status === "approved"
                        ? "published"
                        : "pending approval"}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
                    <h3 className="font-medium mb-2">
                      Thank you for your review!
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review is{" "}
                      {userReview.status === "approved"
                        ? "published"
                        : "pending approval"}
                    </p>
                    {userReview.status === "pending" && (
                      <Button
                        variant="outline"
                        onClick={() => setIsReviewModalOpen(true)}
                      >
                        Edit Review
                      </Button>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { useState  } from './react';
import { Star  } from './lucide-react';
import { Button  } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { ReviewsList  } from '@/components / reviews / ReviewsList';
import { LeaveReviewModal  } from '@/components / reviews / LeaveReviewModal';
import { use_reviews  } from '@/hooks / use_reviews';
import { Project  } from '@/types / projects';
import { use_auth  } from '@/hooks / use_auth';
interface ProjectReviewSectionProps {
  project: Project;
}
export /**
 * ProjectReviewSection - Function description
 */
function ProjectReviewSection() {
  const { user } = use_auth ();
  const { reviews, user_review, is_loading, report_review } = use_reviews (
    project.id,
  );
  const [isReviewModalOpen, setIsReviewModalOpen] = useState (false);
;
  const is_completed = project.status === "completed";
  const is_client = user?.id === project.client_id;
  const is_talent = user?.id === project.talent_id;
;
  const client_profile = project.client_profile;
  const talent_profile = project.talent_profile;
;
  // Determine who the current user needs to review;
  const reviewee_id = is_client ? project.talent_id : project.client_id;
  const reviewee_name = is_client;
    ? talent_profile?.full_name || "Talent";
    : client_profile?.display_name || "Client";
;
  const canLeaveReview = is_completed && (is_client || is_talent) && !user_review;
  const hasLeftReview = user_review != null;
;
  return (
    <Card className="mt - 6">;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Star className="h - 5 w - 5 text - yellow - 400" />;
          Reviews;
        </CardTitle>;
        <CardDescription>;
          Reviews are visible once the project is completed and both parties;
          submit feedback;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        {is_completed ? (
          <div className="space - y-6">;
            {(is_client || is_talent) && (
              <div className="border - b pb - 4 mb - 4">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
                    <h3 className="font-medium mb-2">
                      Thank you for your review!
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review is{" "}
                      {userReview.status === "approved"
                        ? "published"
                        : "pending approval"}
                    </p>
                    {userReview.status === "pending" && (
                      <Button
                        variant="outline"
                        onClick={() => setIsReviewModalOpen(true)}
                      >
                        Edit Review
                      </Button>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {useState} from "react";
import {Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReviewsList} from "@/components/reviews/ReviewsList";
import {LeaveReviewModal} from "@/components/reviews/LeaveReviewModal";
import {useReviews} from "@/hooks/useReviews";
import {Project} from "@/types/projects";
import {useAuth} from "@/hooks/useAuth";

import { useState } from "react",;
import { Star } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReviewsList } from "@/components/reviews/ReviewsList",;
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal",;
import { useReviews } from "@/hooks/useReviews",;
import { Project } from "@/types/projects",;
import { useAuth } from "@/hooks/useAuth",;

interface ProjectReviewSectionProps {;
  project: Project;
}
export function ProjectReviewSection(): any ({ project }: ProjectReviewSectionProps) {;
  const { user } = useAuth();
  const { reviews, userReview, isLoading, reportReview } = useReviews(project && project.id);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const isCompleted = project && project.status === "completed";
  const isClient = user?.id === project && project.client_id;
  const isTalent = user?.id === project && project.talent_id;
  const clientProfile = project && project.client_profile;
  const talentProfile = project && project.talent_profile;
  // Determine who the current user needs to review;
  const revieweeId = isClient ? project && project.talent_id : project && project.client_id;
  const revieweeName = isClient ;
    ? talentProfile?.full_name || "Talent" ;
    : clientProfile?.display_name || "Client";
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview;
  const hasLeftReview = userReview != null;
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <Card className="mt-6">;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Star className="h-5 w-5 text-yellow-400" />;
          Reviews;
        </CardTitle>;
        <CardDescription>;
          Reviews are visible once the project is completed and both parties submit feedback;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <CardContent>;
        {isCompleted ? (;
          <div className="space-y-6">;
            {(isClient || isTalent) && (;
              <div className="border-b pb-4 mb-4">;
                {canLeaveReview ? (;
                  <div className="bg-muted/20 rounded-lg p-4 text-center">;
                    <h3 className="font-medium mb-2">Share your experience</h3>;
                    <p className="text-sm text-muted-foreground mb-3">;
                      Your review will help build a trustworthy community;
                    </p>;
                    <Button onClick={() => setIsReviewModalOpen(true)}>;
                      Leave Review;
                    </Button>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                ) : hasLeftReview ? (;
                  <div className="bg-muted/20 rounded-lg p-4 text-center">;
                    <h3 className="font-medium mb-2">Thank you for your review!</h3>;
                    <p className="text-sm text-muted-foreground mb-3">;
                      Your review is {userReview && userReview.status === "approved" ? "published" : "pending approval"}
                    </p>;
                    {userReview && userReview.status === "pending" && (;
                      <Button variant="outline" onClick={() => setIsReviewModalOpen(true)}>;
                        Edit Review;
                      </Button>;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                    )}
                  </div>;
                ) : null}
              </div>;
            )}

            <ReviewsList
              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}
            />
          </div>
        ) : (
          <div className="bg-muted/20 rounded-lg p-6 text-center">
            <h3 className="font-medium mb-2">
              Reviews will be available once the project is completed
            </h3>
            <p className="text-sm text-muted-foreground">
              After the project is marked as completed, both parties will be
              able to leave reviews
            </p>
          </div>
        )}
      </CardContent>

      {/* Review Modal */}
      {(isClient || isTalent) && (;

=======

      {(isClient || isTalent) && (

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <LeaveReviewModal
          projectId={project && project.id}
=======
            />
          </div>
        ) : (
          <div className="bg-muted/20 rounded-lg p-6 text-center">
            <h3 className="font-medium mb-2">
              Reviews will be available once the project is completed
            </h3>
            <p className="text-sm text-muted-foreground">
              After the project is marked as completed, both parties will be
              able to leave reviews
            </p>
          </div>
        )}
      </CardContent>
<<<<<<< HEAD
=======

>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Review Modal */}
      {(isClient || isTalent) && (;

      {(isClient || isTalent) && (

        <LeaveReviewModal
          projectId={project && project.id}
<<<<<<< HEAD
      ;
      {/* Review Modal */}
      {(isClient || isTalent) && (;
        <LeaveReviewModal;
          projectId={project.id}
            />
          </div>
        ) : (
          <div className="bg-muted/20 rounded-lg p-6 text-center">
            <h3 className="font-medium mb-2">
              Reviews will be available once the project is completed
            </h3>
            <p className="text-sm text-muted-foreground">
              After the project is marked as completed, both parties will be
              able to leave reviews
            </p>
          </div>
        )}
      </CardContent>

      {/* Review Modal */}
      {(isClient |isTalent) && (
      {(isClient || isTalent) && (
        <LeaveReviewModal
          projectId={project.id}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          revieweeId={revieweeId}
          revieweeName={revieweeName}
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
<<<<<<< HEAD
        />;
      )}
    </Card>
  );
}

<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    </p>;
                    {user_review.status === "pending" && (
                      <Button;
                        variant="outline";
                        on_click={() => setIsReviewModalOpen (true)}
                      >;
                        Edit Review;
                      </Button>)}
                  </div>) : null}
              </div>)}
            <ReviewsList;
              reviews={reviews}
              is_loading={is_loading}
              onReportReview={report_review}
            />;
          </div>) : (
          <div className="bg - muted / 20 rounded - lg p - 6 text - center">;
            <h3 className="font - medium mb - 2">;
              Reviews will be available once the project is completed;
            </h3>;
            <p className="text - sm text - muted - foreground">;
              After the project is marked as completed, both parties will be;
              able to leave reviews;
            </p>;
          </div>)}
      </CardContent>;
      {/* Review Modal */}
      {(is_client || is_talent) && (
        <LeaveReviewModal;
          project_id={project.id}
          reviewee_id={reviewee_id}
          reviewee_name={reviewee_name}
          is_open={isReviewModalOpen}
          on_close={() => setIsReviewModalOpen (false)}
        />)}
    </Card>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
