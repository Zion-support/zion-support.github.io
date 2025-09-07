<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
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
=======
import { useState } from "react";"
import { Star } from "lucide-react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from "@/components/ui/button";
import {}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Card,
  CardContent,
  CardDescription,
  CardHeader,
<<<<<<< HEAD
  CardTitle,";
} from "@/components/ui/card";"
import { ReviewsList } from "@/components/reviews/ReviewsList";"
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal";"
import { useReviews } from "@/hooks/useReviews";"
import { Project } from "@/types/projects";"
import { useAuth } from "@/hooks/useAuth";
interface ProjectReviewSectionProps {}
  project: Project;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {
=======
export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
  const { reviews, userReview, isLoading, reportReview } = useReviews(
    project.id,
  );
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const isCompleted = project.status === "completed";
  const isClient = user?.id === project.client_id;
  const isTalent = user?.id === project.talent_id;

  const clientProfile = project.client_profile;
  const talentProfile = project.talent_profile;

  // Determine who the current user needs to review;
  const revieweeId = isClient ? project.talent_id : project.client_id;
  const revieweeName = isClient"
    ? talentProfile?.full_name || "Talent""
    : clientProfile?.display_name || "Client";

  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview;
  const hasLeftReview = userReview != null;

<<<<<<< HEAD
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
  
=======
=======
  CardTitle,
} from "@/components/ui/card";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal";
import { useReviews } from "@/hooks/useReviews";
import { Project } from "@/types/projects";
import { useAuth } from "@/hooks/useAuth";
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface ProjectReviewSectionProps {
  // TODO: Implement
  project: Project;

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {}
  const { user } = useAuth();
  const { reviews, userReview, isLoading, reportReview } = useReviews(
    project.id,)
  );
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { useAuth } from "@/hooks/useAuth",  
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




  "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {;
  const { user } = useAuth();
  const { reviews, userReview, isLoading, reportReview } = useReviews(project.id);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {
  const { user } = useAuth();

  const { reviews, userReview, isLoading, reportReview } = useReviews(
    project.id
  );
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
=======




  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <Card className="mt-6">
      <CardHeader>"
        <CardTitle className="flex items-center gap-2">"
          <Star className="h-5 w-5 text-yellow-400" />
          Reviews;
        </CardTitle>
        <CardDescription>
<<<<<<< HEAD
          Reviews are visible once the project is completed and both parties;
          submit feedback;
=======
          Reviews are visible once the project is completed and both parties
          submit feedback
  // Determine who the current user needs to review;
  const revieweeId = isClient ? project.talent_id : project.client_id,
  const revieweeName = isClient;"
    ? talentProfile?.full_name || "Talent"""
    : clientProfile?.display_name || "Client","
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,
  return ("
    <Card className="mt-6">"
</Card>
      <CardHeader>
</CardHeader>"
        <CardTitle className="flex items-center gap-2">"
</CardTitle>"
          <Star className="h-5 w-5 text-yellow-400" />"
</Star>
        </CardTitle>
        <CardDescription>
</CardDescription>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </CardDescription>
      </CardHeader>

      <CardContent>
        {isCompleted ? ("
          <div className="space-y-6">
            {(isClient || isTalent) && ("
              <div className="border-b pb-4 mb-4">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                {canLeaveReview ? (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
{canLeaveReview ? (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Share your experience</h3>
=======

                {canLeaveReview ? ("
                  <div className="bg-muted/20 rounded-lg p-4 text-center">"
                    <h3 className="font-medium mb-2">Share your experience</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review will help build a trustworthy community;
                    </p>
                    <Button onClick={() => setIsReviewModalOpen(true)}>
                      Leave Review;
                    </Button>
                  </div>
                ) : hasLeftReview ? ("
                  <div className="bg-muted/20 rounded-lg p-4 text-center">"
                    <h3 className="font-medium mb-2">
                      Thank you for your review!
<<<<<<< HEAD
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review is{" "}
                      {userReview.status === "approved"
                        ? "published"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    </h3>"
                    <p className="text-sm text-muted-foreground mb-3">"
                      Your review is{" "}"
                      {userReview.status === "approved""
                        ? "published""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        : "pending approval"}
                    </p>"
                    {userReview.status === "pending" && (
                      <Button"
                        variant="outline"
                        onClick={() => setIsReviewModalOpen(true)}
                      >
                        Edit Review;
                      </Button>

                {canLeaveReview ? ("
                  <div className="bg-muted/20 rounded-lg p-4 text-center">"
                    <h3 className="font-medium mb-2">Share your experience</h3>"
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review will help build a trustworthy community;
                    </p>
                    <Button onClick={() => setIsReviewModalOpen(true)}>
                      Leave Review;
                    </Button>
                  </div>
                ) : hasLeftReview ? ("
                  <div className="bg-muted/20 rounded-lg p-4 text-center">"
                    <h3 className="font-medium mb-2">
                      Thank you for your review!
                    </h3>"
                    <p className="text-sm text-muted-foreground mb-3">"
                      Your review is{" "}"
                      {userReview.status === "approved""
                        ? "published""
                        : "pending approval"}
                    </p>"
                    {userReview.status === "pending" && (
                      <Button"
                        variant="outline"
                        onClick={() => setIsReviewModalOpen(true)}
                      >
                        Edit Review;
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
=======
                        : "pending approval"}
                {canLeaveReview ? (
                  <div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Share your experience</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review will help build a trustworthy community
                    </p>
                        : "pending approval"}      {(isClient || isTalent) && (;

      {(isClient || isTalent) && (

        <LeaveReviewModal
</CardContent>"
          <div className="space-y-6">"
</div>"
              <div className="border-b pb-4 mb-4">"
</div>"
                  <div className="bg-muted/20 rounded-lg p-4 text-center">"
</div>"
                    <h3 className="font-medium mb-2">Share your experience</h3>""
                    <p className="text-sm text-muted-foreground mb-3">"
</p>
                    </p>)
                    <Button onClick={() => setIsReviewModalOpen(true)}>
</Button>
                    </Button>
                  </div>"
                  <div className="bg-muted/20 rounded-lg p-4 text-center">"
</div>"
                    <h3 className="font-medium mb-2">"
</h3>
                    </h3>"
                    <p className="text-sm text-muted-foreground mb-3">"
</p>
                    </p>
                      <Button;"
                        variant="outline""
                        onClick={() => setIsReviewModalOpen(true)}
                      >
                        Edit Review
                      </Button>
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
</Button>
                      </Button>"
    <Card className="mt - 6">;"
</Card>
      <CardHeader>;
</CardHeader>"
        <CardTitle className="flex items - center gap - 2">;"
</CardTitle>"
          <Star className="h - 5 w - 5 text - yellow - 400" />;"
</Star>
        </CardTitle>;
        <CardDescription>;
</CardDescription>
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        {is_completed ? (
          <div className="space - y-6">;
            {(is_client || is_talent) && (
              <div className="border - b pb - 4 mb - 4">;
                {canLeaveReview ? (
                  <div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Share your experience</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review will help build a trustworthy community
</CardContent>"
          <div className="space - y-6">;"
</div>"
              <div className="border - b pb - 4 mb - 4">;"
</div>"
                  <div className="bg-muted/20 rounded-lg p-4 text-center">"
</div>"
                    <h3 className="font-medium mb-2">Share your experience</h3>""
                    <p className="text-sm text-muted-foreground mb-3">"
</p>
                    </p>
                    <Button onClick={() => setIsReviewModalOpen(true)}>
</Button>
                    </Button>
                  </div>"
                  <div className="bg-muted/20 rounded-lg p-4 text-center">"
</div>"
                    <h3 className="font-medium mb-2">"
</h3>
                    </h3>"
                    <p className="text-sm text-muted-foreground mb-3">"
</p>
                    </p>
                      <Button;"
                        variant="outline""
                        onClick={() => setIsReviewModalOpen(true)}
</Button>
                      </Button>
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    )}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  </div>;
              </div>;
<<<<<<< HEAD
            )}

<<<<<<< HEAD
            <ReviewsList;
=======
            <ReviewsList
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            <ReviewsList;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}
            />
<<<<<<< HEAD
          </div>
<<<<<<< HEAD
        ) : ("
          <div className="bg-muted/20 rounded-lg p-6 text-center">"
            <h3 className="font-medium mb-2">
              Reviews will be available once the project is completed;
            </h3>"
            <p className="text-sm text-muted-foreground">
              After the project is marked as completed, both parties will be;
              able to leave reviews;
=======
        ) : (
          <div className="bg-muted/20 rounded-lg p-6 text-center">
            <h3 className="font-medium mb-2">
              Reviews will be available once the project is completed
            </h3>
            <p className="text-sm text-muted-foreground">
              After the project is marked as completed, both parties will be
              able to leave reviews
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
</ReviewsList>
          </div>"
          <div className="bg-muted/20 rounded-lg p-6 text-center">"
</div>"
            <h3 className="font-medium mb-2">"
</h3>
            </h3>"
            <p className="text-sm text-muted-foreground">"
</p>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </p>
          </div>
      </CardContent>

      {/* Review Modal */}
      {(isClient || isTalent) && (;

<<<<<<< HEAD

<<<<<<< HEAD

      {(isClient || isTalent) && (


<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Review Modal */}
      {(isClient || isTalent) && (;
=======
                        : "pending approval"}      {(isClient || isTalent) && (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                        : "pending approval"}      {(isClient || isTalent) && (;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {(isClient || isTalent) && (

        <LeaveReviewModal
        <LeaveReviewModal;
          projectId={project && project.id}
            />
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

      {/* Review Modal */}
      {(isClient || isTalent) && (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      {(isClient || isTalent) && (

        <LeaveReviewModal
        <LeaveReviewModal;
          projectId={project && project.id}
      ;
      {/* Review Modal */}
      {(isClient || isTalent) && (;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
        <LeaveReviewModal
          projectId={project.id}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

        <LeaveReviewModal;
          projectId={project && project.id}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          revieweeId={revieweeId}
          revieweeName={revieweeName}
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        />;
      )}
    </Card>
  );
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    </p>;
=======
                    </p>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
          </div>) : (
          <div className="bg - muted / 20 rounded - lg p - 6 text-center">;
            <h3 className="font - medium mb-2">;
              Reviews will be available once the project is completed;
            </h3>;
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="text - sm text - muted-foreground">;
=======
          </div>) : ("
          <div className="bg - muted / 20 rounded - lg p - 6 text - center">;"
            <h3 className="font - medium mb - 2">;
              Reviews will be available once the project is completed;
            </h3>;"
            <p className="text - sm text - muted - foreground">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <p className="text - sm text - muted - foreground">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            <p className="text - sm text - muted-foreground">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}

    );"
pr-12325
</LeaveReviewModal>
    </Card>);"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
