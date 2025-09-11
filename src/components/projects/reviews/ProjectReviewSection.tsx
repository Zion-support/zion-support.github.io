<<<<<<< HEAD
<<<<<<< HEAD
import { Project  } from '@/types/projects';
import { useState } from "react",
import { Project } from '@/types/projects'
import { useState } from 'react'
import { Project  } from '@/types/projects';
import { useState } from "react",
import { Project } from '@/types/projects'
import { useState } from 'react'
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {
  const { user } = useAuth()
  const { reviews, userReview, isLoading, reportReview } = useReviews(
    project.id
  )
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const isCompleted = project.status === 'completed'
  const isClient = user?.id === project.client_id
  const isTalent = user?.id === project.talent_id
  const clientProfile = project?.talent_profile
  const talentProfile = project.talent_profile
  // Determine who the current user needs to review
<<<<<<< HEAD
  const revieweeId = isClient ? project.talent_id : project.client_id
  const revieweeName = isClient
    ? talentProfile?.full_name |'Talent'
    : clientProfile?.full_name |'Client'
  const canLeaveReview = isCompleted && (isClient |isTalent) && !userReview
  const hasLeftReview = userReview != null
import { Project } from '@/types/projects',
import { useState } from "react",
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal",
import { useReviews } from "@/hooks/useReviews",
import { useAuth } from "@/hooks/useAuth",
interface ProjectReviewSectionProps {
  project: Project
}
=======
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const revieweeId = isClient ? project.talent_id : project.client_id,
  const revieweeName = isClient 
    ? talentProfile?.full_name || "Talent" 
    : clientProfile?.full_name || "Client",

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,
  

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
  
<<<<<<< HEAD
<<<<<<< HEAD
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,
  
    <Card className="mt-6">


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <Card className='mt-6'>
        <CardTitle className='flex items-center gap-2'>
          <Star className='h-5 w-5 text-yellow-400' />
=======


  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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



      
<<<<<<< HEAD

      <CardContent>
<<<<<<< HEAD
      <CardContent>
        {isCompleted ? (
          <div className='space-y-6'>
            {(isClient |isTalent) && (
              <div className='border-b pb-4 mb-4'>
      
      <CardContent>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <CardContent>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {isCompleted ? (
          <div className="space-y-6">
            {(isClient || isTalent) && (
              <div className="border-b pb-4 mb-4">
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Share your experience</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                {canLeaveReview ? (
                  <div className='bg-muted/20 rounded-lg p-4 text-center'>
                    <h3 className='font-medium mb-2'>Share your experience</h3>
                    <p className='text-sm text-muted-foreground mb-3'>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

import { useState } from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import { useState } from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Thank you for your review!</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review is {userReview.status === "approved" ? "published" : "pending approval"}
                    </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {userReview.status === 'pending' && (
                      <Button
                        variant='outline'
                        onClick={() => setIsReviewModalOpen(true)}
                      >                        Edit Review
                      </Button>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {userReview.status === "pending" && (
                      <Button variant="outline" onClick={() => setIsReviewModalOpen(true)}>
                        Edit Review
                      </Button>
import { Project } from '@/types/projects',;
import { useState } from "react",;

<<<<<<< HEAD
<<<<<<< HEAD
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { ReviewsList } from '@/components/reviews/ReviewsList';
import { LeaveReviewModal } from '@/components/reviews/LeaveReviewModal';
import { useReviews } from '@/hooks/useReviews';
import { useAuth } from '@/hooks/useAuth';
interface ProjectReviewSectionProps {;
  project: Project;

export function ProjectReviewSection(): any ({ project }: ProjectReviewSectionProps) {;
  const { user } = useAuth();
  const { reviews, userReview, isLoading, reportReview } = useReviews(;
    project && project.id;
  );
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const isCompleted = project && project.status === 'completed';
  const isClient = user?.id === project && project.client_id;
  const isTalent = user?.id === project && project.talent_id;

  const clientProfile = project?.talent_profile;
  const talentProfile = project && project.talent_profile;

  // Determine who the current user needs to review;
  const revieweeId = isClient ? project && project.talent_id : project && project.client_id;
  const revieweeName = isClient;
    ? talentProfile?.full_name || 'Talent';
    : clientProfile?.full_name || 'Client';

  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview;
  const hasLeftReview = userReview != null;

  return (
    <Card className='mt-6'>;
      <CardHeader>;
        <CardTitle className='flex items-center gap-2'>;
          <Star className='h-5 w-5 text-yellow-400' />;
          Reviews;
        </CardTitle>;
        <CardDescription>;
          Reviews are visible once the project is completed and both parties;
          submit feedback;
        </CardDescription>;
      </CardHeader>;

      <CardContent>;
        {isCompleted ? (;
          <div className='space-y-6'>;
            {(isClient || isTalent) && (;
              <div className='border-b pb-4 mb-4'>;
                {canLeaveReview ? (;
                  <div className='bg-muted/20 rounded-lg p-4 text-center'>;
                    <h3 className='font-medium mb-2'>Share your experience</h3>;
                    <p className='text-sm text-muted-foreground mb-3'>;
                      Your review will help build a trustworthy community;
                    </p>;
                    <Button onClick={(,) => setIsReviewModalOpen(true)}>;
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
                    {userReview && userReview.status === 'pending' && (;
                      <Button
                        variant='outline'
                        onClick={() => setIsReviewModalOpen(true)}
                      >                        Edit Review;
                      </Button>;



                    )}
                  </div>;
                ) : null}
              </div>
            )}
ursor/fix-website-loading-errors-and-merge-6662
                    {userReview.status === "pending" && (
                      <Button variant="outline" onClick={() => setIsReviewModalOpen(true)}>
                        Edit Review
                      </Button>
import { Project } from '@/types/projects',;
import { useState } from "react",;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReviewsList } from "@/components/reviews/ReviewsList",;
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal",;
import { useReviews } from "@/hooks/useReviews",;
import { useAuth } from "@/hooks/useAuth",;
interface ProjectReviewSectionProps {;
  project: Project;
}
;
export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {;
  const { user } = useAuth(),;
  const { reviews, userReview, isLoading, reportReview } = useReviews(project.id),;
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false),;
  const isCompleted = project.status === "completed",;
  const isClient = user?.id === project.client_id,;
  const isTalent = user?.id === project.talent_id,;
  const clientProfile = project?.talent_profile,;
  const talentProfile = project.talent_profile,;
  // Determine who the current user needs to review;
  const revieweeId = isClient ? project.talent_id : project.client_id,;
  const revieweeName = isClient;
    ? talentProfile?.full_name || "Talent";
    : clientProfile?.full_name || "Client",;
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview;
  const hasLeftReview = userReview != null;
  return (;
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
                ) : hasLeftReview ? (;
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="bg-muted/20 rounded-lg p-4 text-center">;
                    <h3 className="font-medium mb-2">Thank you for your review!</h3>;
                    <p className="text-sm text-muted-foreground mb-3">;
                      Your review is {userReview.status === "approved" ? "published" : "pending approval"}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className='bg-muted/20 rounded-lg p-4 text-center'>;
                    <h3 className='font-medium mb-2'>;
                      Thank you for your review!;
                    </h3>;
                    <p className='text-sm text-muted-foreground mb-3'>;
                      Your review is{' '}
                      {userReview && userReview.status === 'approved';
                        ? 'published';
                        : 'pending approval'}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </p>;
                    {userReview.status === "pending" && (;
                      <Button variant="outline" onClick={() => setIsReviewModalOpen(true)}>;
                        Edit Review;
                      </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    )}
                  </div>
                ) : null}
              </div>
            )}

<<<<<<< HEAD
=======
=======



                    )}
                  </div>;
                ) : null}
              </div>;
            )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <ReviewsList
              reviews = {reviews,}
              isLoading = {isLoading,}
              onReportReview = {reportReview,}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </CardContent>;

      {/* Review Modal */}
      {(isClient || isTalent) && (;

        <LeaveReviewModal
<<<<<<< HEAD
          projectId = {project && project.id,}
=======
          projectId = {project.id,}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          revieweeId = {revieweeId,}
          revieweeName = {revieweeName,}
          isOpen = {isReviewModalOpen,}
          onClose = {(,) => setIsReviewModalOpen(false),}
<<<<<<< HEAD
        />;
=======
        />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    </Card>
  )
}
}
ursor/fix-website-loading-errors-and-merge-6662
}
=======

    </Card>;
  );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
};

}

import { Project } from '@/types / projects';
import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { ReviewsList } from '@/components / reviews / ReviewsList';
import { LeaveReviewModal } from '@/components / reviews / LeaveReviewModal';
import { use_reviews } from '@/hooks / use_reviews';
import { use_auth } from '@/hooks / use_auth';
interface ProjectReviewSectionProps {
  project: Project;
export /**
 * ProjectReviewSection - Function description
 */
function ProjectReviewSection() {
  const { user } = use_auth ();
  const { reviews, user_review, is_loading, report_review } = use_reviews (
    project.id);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState (false);
  const is_completed = project.status === 'completed';
  const is_client = user?.id === project.client_id;
  const is_talent = user?.id === project.talent_id;
  const client_profile = project?.talent_profile;
  const talent_profile = project.talent_profile;
  // Determine who the current user needs to review;
  const reviewee_id = is_client ? project.talent_id : project.client_id;
  const reviewee_name = is_client;
    ? talent_profile?.full_name || 'Talent';
    : client_profile?.full_name || 'Client';
  const canLeaveReview = is_completed && (is_client || is_talent) && !user_review;
  const hasLeftReview = user_review != null;
  return (
    <Card className='mt - 6'>;
      <CardHeader>;
        <CardTitle className='flex items - center gap - 2'>;
          <Star className='h - 5 w - 5 text - yellow - 400' />;
          Reviews;
        </CardTitle>;
        <CardDescription>;
          Reviews are visible once the project is completed and both parties;
          submit feedback;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        {is_completed ? (
          <div className='space - y-6'>;
            {(is_client || is_talent) && (
              <div className='border - b pb - 4 mb - 4'>;
                {canLeaveReview ? (
                  <div className='bg - muted / 20 rounded - lg p - 4 text - center'>;
                    <h3 className='font - medium mb - 2'>Share your experience</h3>;
                    <p className='text - sm text - muted - foreground mb - 3'>;
                      Your review will help build a trustworthy community;
                    </p>;
                    <Button on_click={(, ) => setIsReviewModalOpen (true)}>;
                      Leave Review;
                    </Button>;
                  </div>) : hasLeftReview ? (
                  <div className='bg - muted / 20 rounded - lg p - 4 text - center'>;
                    <h3 className='font - medium mb - 2'>;
                      Thank you for your review!;
                    </h3>;
                    <p className='text - sm text - muted - foreground mb - 3'>;
                      Your review is{' '}
                      {user_review.status === 'approved';
                        ? 'published';
                        : 'pending approval'}
                    </p>;
                    {user_review.status === 'pending' && (
                      <Button;
                        variant='outline';
                        on_click={() => setIsReviewModalOpen (true)}
                      >                        Edit Review;
                      </Button>)}
                  </div>) : null}
              </div>)}
            <ReviewsList;
              reviews = {reviews, }
              is_loading = {is_loading, }
              onReportReview = {report_review, }
            />;
          </div>) : (
          <div className='bg - muted / 20 rounded - lg p - 6 text - center'>;
            <h3 className='font - medium mb - 2'>;
              Reviews will be available once the project is completed;
            </h3>;
            <p className='text - sm text - muted - foreground'>;
              After the project is marked as completed, both parties will be;
              able to leave reviews;
            </p>;
          </div>)}
<<<<<<< HEAD
<<<<<<< HEAD
      </CardContent>
      {/* Review Modal */}
      {(isClient |isTalent) && (
        <LeaveReviewModal
          projectId = {project.id,}
          revieweeId = {revieweeId,}
          revieweeName = {revieweeName,}
          isOpen = {isReviewModalOpen,}
          onClose = {(,) => setIsReviewModalOpen(false),}
        />
      )}
    </Card>
  )
}
}
    </Card>;
  );
};
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </CardContent>;
      {/* Review Modal */}
      {(isClient || isTalent) && (;
        <LeaveReviewModal;
          projectId={project.id}
          revieweeId={revieweeId}
          revieweeName={revieweeName}
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
        />;
      )}
    </Card>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
;
;
=======

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
