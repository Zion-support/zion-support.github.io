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

import { Project } from "@/types/projects";
import { useAuth } from "@/hooks/useAuth";
interface ProjectReviewSectionProps {
  project: Project;
}
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
<<<<<<< HEAD
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
=======
<<<<<<< HEAD

import {useState} from "react";
import {Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReviewsList} from "@/components/reviews/ReviewsList";
import {LeaveReviewModal} from "@/components/reviews/LeaveReviewModal";
import {useReviews} from "@/hooks/useReviews";
import {Project} from "@/types/projects";
import {useAuth} from "@/hooks/useAuth";
=======
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal";
import { useReviews } from "@/hooks/useReviews";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { Project } from "@/types/projects";
import { useAuth } from "@/hooks/useAuth";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from "react",
import { Star } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal",
import { useReviews } from "@/hooks/useReviews",
import { Project } from "@/types/projects",

<<<<<<< HEAD
import { useState } from "react";
import { Star } from "lucide-react";
=======
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
>>>>>>> merged-prs-20250907-203621
} from "@/components/ui/card";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal";
import { useReviews } from "@/hooks/useReviews";
import { Project } from "@/types/projects";
import { useAuth } from "@/hooks/useAuth";
<<<<<<< HEAD
interface ProjectReviewSectionProps {
  project: Project}

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
=======

import { Project } from "@/types/projects";
import { useAuth } from "@/hooks/useAuth";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface ProjectReviewSectionProps {
  project: Project;
}

<<<<<<< HEAD
const { user } = useAuth();
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
  const isCompleted = project.status === "completed";
  const isClient = user?.id === project.client_id;
  const isTalent = user?.id === project.talent_id;
  const clientProfile = project.client_profile;
  const talentProfile = project.talent_profile;
  // Determine who the current user needs to review
  const revieweeId = isClient ? project.talent_id : project.client_id;
  const revieweeName = isClient
    ? talentProfile?.full_name |"Talent"
    : clientProfile?.display_name |"Client";
  const canLeaveReview = isCompleted && (isClient |isTalent) && !userReview;
  const hasLeftReview = userReview != null;

  const { user } = useAuth(),
  const { reviews, userReview, isLoading, reportReview } = useReviews(project.id),
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false),
  
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { Button } from "@/components/ui/button";
import {}

<<<<<<< HEAD
=======
interface ProjectReviewSectionProps {
  project: Project;
}



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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <CardContent>
        {isCompleted ? (
          <div className="space-y-6">
            {(isClient |isTalent) && (
              <div className="border-b pb-4 mb-4">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
=======
=======
import { useState  } from './react';
import { Star  } from './lucide-react';
import { Button  } from '@/components / ui / button';
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Card,
  CardContent,
  CardDescription,
  CardHeader,

  const { user } = useAuth();
  const { reviews, userReview, isLoading, reportReview } = useReviews(
    project.id,
  );
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

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

export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {;
  const { user } = useAuth();
  const { reviews, userReview, isLoading, reportReview } = useReviews(project.id);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {
  const { user } = useAuth();

  const { user } = useAuth(),
  const { reviews, userReview, isLoading, reportReview } = useReviews(project.id),
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false),

interface ProjectReviewSectionProps {
  // TODO: Implement
  project: Project;

}

export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {}
  const { user } = useAuth();
  const { reviews, userReview, isLoading, reportReview } = useReviews(
    project.id,)
  );
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      ;
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

              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}
            />

            </p>
          </div>
      </CardContent>
=======
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
            <ReviewsList
              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}
<<<<<<< HEAD
=======
<<<<<<< HEAD
            ;
            <ReviewsList;
              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}
            />;
          </div>;
        ) :(;
=======

            />;
          </div>;
        ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="bg-muted/20 rounded-lg p-6 text-center">;
            <h3 className="font-medium mb-2">Reviews will be available once the project is completed</h3>;
            <p className="text-sm text-muted-foreground">;
              After the project is marked as completed, both parties will be able to leave reviews;
            </p>;
          </div>;
        )}
      </CardContent>;
<<<<<<< HEAD
      {(isClient || isTalent) && (;

      {(isClient || isTalent) && (

        <LeaveReviewModal
          projectId={project && project.id}
      ;
      {/* Review Modal */}
      {(isClient || isTalent) && (;
        <LeaveReviewModal;
          projectId={project.id}
>>>>>>> merged-prs-20250907-203621
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
        <LeaveReviewModal
          projectId={project.id}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      {/* Review Modal */}
      {(isClient || isTalent) && (;

      {/* Review Modal */}
      {(isClient || isTalent) && (;

      {(isClient || isTalent) && (

        <LeaveReviewModal
        <LeaveReviewModal;
          projectId={project && project.id}
<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
          revieweeId={revieweeId}
          revieweeName={revieweeName}
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
        />;
      )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </Card>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
  ),;}
 interface ProjectReviewSectionProps {
  project: Project 
}export function ProjectReviewSection ({
  project 
}: ProjectReviewSectionProps) {
  const {
  user 
}= useAuth ();
const {
  reviews, userReview, isLoading, reportReview 
}= useReviews (project.id);
const [isReviewModalOpen, setIsReviewModalOpen] = useState (false);
const clientProfile = project.client profile;
const talentProfile = project.talent profile;
//Determine who the current user needs to review const revieweeId = isClient ? project.talent id : project.client id;
const revieweeName = isClient ? talentProfile?.full name || "Talent" : clientProfile?.display name || "Client";
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Star className=" h-5 w-5 text-yellow-400"/> Reviews </CardTitle> <CardDescription> Reviews are visible once the project is completed and both parties submit feedback </CardDescription> </CardHeader> <CardContent> {
  canLeaveReview ? (<div className=" bg-muted/20 rounded-lg p-4 text-center"> <h3 className=" font-medium mb-2">Share your experience</h3> <p className=" text-sm text-muted-foreground mb-3"> Your review will help build a trustworthy community </p> <Button onClick= {
  () => setIsReviewModalOpen (true) 
}> Leave Review </Button> </div> Edit Review </Button>) 
}</div>) : null 
}</div>) 
}<ReviewsList reviews= {
  reviews 
}isLoading= {
  isLoading 
}onReportReview= {
  reportReview 
}/> </div>) : (<div className=" bg-muted/20 rounded-lg p-6 text-center"> <h3 className=" font-medium mb-2">Reviews will be available once the project is completed</h3> <p className=" text-sm text-muted-foreground" > After the project is marked as completed, both parties will be able to leave reviews </p> </div>) 
}</CardContent> {
  /* Review Modal */ 
}{
  (isClient || isTalent) && (<LeaveReviewModal projectId= {
  project.id 
}revieweeId= {
  revieweeId 
}revieweeName= {
  revieweeName 
}isOpen= {
  isReviewModalOpen 
}onClose= {
  () => setIsReviewModalOpen (false) 
}/>) 
}</Card>) 
}
>>>>>>> merged-prs-20250907-203621
        />
      )}
    </Card>
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
