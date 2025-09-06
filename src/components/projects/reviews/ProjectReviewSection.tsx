<<<<<<< HEAD

=======
import { Project  } from '@/types/projects';
import { useState } from "react",
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { Project } from '@/types/projects'
import { useState } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  const revieweeId = isClient ? project.talent_id : project.client_id
  const revieweeName = isClient
    ? talentProfile?.full_name |'Talent'
    : clientProfile?.full_name |'Client'
  const canLeaveReview = isCompleted && (isClient |isTalent) && !userReview
  const hasLeftReview = userReview != null
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

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
<<<<<<< HEAD

  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,
  
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
<<<<<<< HEAD
=======
>>>>>>> 
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <Card className="mt-6">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (
    <Card className='mt-6'>
>>>>>>>       <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Star className='h-5 w-5 text-yellow-400' />
=======
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-400" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Reviews
        </CardTitle>
        <CardDescription>
          Reviews are visible once the project is completed and both parties submit feedback
        </CardDescription>
      </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD

      <CardContent>
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <CardContent>
        {isCompleted ? (
          <div className='space-y-6'>
            {(isClient |isTalent) && (
              <div className='border-b pb-4 mb-4'>
<<<<<<< HEAD
      
>>>>>>>       <CardContent>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      <CardContent>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {isCompleted ? (
          <div className="space-y-6">
            {(isClient || isTalent) && (
              <div className="border-b pb-4 mb-4">
<<<<<<< HEAD
<<<<<<< HEAD

                {canLeaveReview ? (
=======
>>>>>>>                 {canLeaveReview ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Share your experience</h3>
                    <p className="text-sm text-muted-foreground mb-3">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                {canLeaveReview ? (
                  <div className='bg-muted/20 rounded-lg p-4 text-center'>
                    <h3 className='font-medium mb-2'>Share your experience</h3>
                    <p className='text-sm text-muted-foreground mb-3'>
>>>>>>>                       Your review will help build a trustworthy community
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                {canLeaveReview ? (
                  <div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Share your experience</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review will help build a trustworthy community
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </p>
                    <Button onClick={() => setIsReviewModalOpen(true)}>
                      Leave Review
                    </Button>
                  </div>
                ) : hasLeftReview ? (
<<<<<<< HEAD

import { useState } from 'react';
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Thank you for your review!</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review is {userReview.status === "approved" ? "published" : "pending approval"}
                    </p>
<<<<<<< HEAD
<<<<<<< HEAD

                    )}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    {userReview.status === 'pending' && (
                      <Button
                        variant='outline'
                        onClick={() => setIsReviewModalOpen(true)}
                      >                        Edit Review
                      </Button>
<<<<<<< HEAD
>>>>>>>                     )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  </div>
                ) : null}
              </div>
            )}
<<<<<<< HEAD

            <ReviewsList
              reviews = {reviews,}
              isLoading = {isLoading,}
              onReportReview = {reportReview,}

=======
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
                    {userReview.status === "pending" && (
                      <Button variant="outline" onClick={() => setIsReviewModalOpen(true)}>
                        Edit Review
                      </Button>
import { Project } from '@/types/projects',;
import { useState } from "react",;
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
                  <div className="bg-muted/20 rounded-lg p-4 text-center">;
                    <h3 className="font-medium mb-2">Thank you for your review!</h3>;
                    <p className="text-sm text-muted-foreground mb-3">;
                      Your review is {userReview.status === "approved" ? "published" : "pending approval"}
                    </p>;
                    {userReview.status === "pending" && (;
                      <Button variant="outline" onClick={() => setIsReviewModalOpen(true)}>;
                        Edit Review;
                      </Button>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    )}
                  </div>
                ) : null}
              </div>
            )}
<<<<<<< HEAD





>>>>>>>             <ReviewsList
              reviews = {reviews,}
              isLoading = {isLoading,}
              onReportReview = {reportReview,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <ReviewsList
              reviews = {reviews,}
              isLoading = {isLoading,}
              onReportReview = {reportReview,}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
            <ReviewsList;
              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}
<<<<<<< HEAD
<<<<<<< HEAD

            />
=======
>>>>>>>             />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

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
=======
    </Card>
  )
}
}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
>>>>>>>       </CardContent>;
=======
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
<<<<<<< HEAD
    </Card>
  )
}
}
=======
    </Card>;
  );
};
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      </CardContent>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
