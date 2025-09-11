

import { Project } from "@/types/projects";
import { useAuth } from "@/hooks/useAuth";
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from "react";
import {Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ReviewsList} from "@/components/reviews/ReviewsList";
import {LeaveReviewModal} from "@/components/reviews/LeaveReviewModal";
import {useReviews} from "@/hooks/useReviews";
import {Project} from "@/types/projects";
import {useAuth} from "@/hooks/useAuth";
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState } from "react",
import { Star } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal",
import { useReviews } from "@/hooks/useReviews",
import { Project } from "@/types/projects",
import { useAuth } from "@/hooks/useAuth",

import { Project } from "@/types/projects";
import { useAuth } from "@/hooks/useAuth";
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

interface ProjectReviewSectionProps {
  project: Project;
}

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  
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
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <CardContent>
        {isCompleted ? (
          <div className="space-y-6">
            {(isClient |isTalent) && (
              <div className="border-b pb-4 mb-4">
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

=======import { useState } from "react",;
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview;
  const hasLeftReview = userReview != null;

  return (    <Card className="mt-6">;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Star className="h-5 w-5 text-yellow-400" />;
          Reviews;
        </CardTitle>;
        <CardDescription>;
          Reviews are visible once the project is completed and both parties submit feedback;
        </CardDescription>;
      </CardHeader>;      <CardContent>;
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
            <ReviewsList
              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}
            />;
          </div>;
        ) : (;
        <LeaveReviewModal
          projectId={project && project.id}
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
=======
      {/* Review Modal */}
      {(isClient |isTalent) && (
      {(isClient || isTalent) && (
        <LeaveReviewModal
      {/* Review Modal */}
      {(isClient || isTalent) && (;

=======

      {(isClient || isTalent) && (
        <LeaveReviewModal
          projectId={project && project.id}=======
          projectId={project && project.id}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          revieweeId={revieweeId}
          revieweeName={revieweeName}
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </Card>;
=======
        />;
      )}

    </Card>;
  );
}

=======                    </p>;
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
<<<<<<< HEAD
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
        />
      )}
    </Card>
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
