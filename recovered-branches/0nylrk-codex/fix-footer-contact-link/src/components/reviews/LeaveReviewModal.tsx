
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import {useState, useEffect} from "react";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ReviewForm} from "./ReviewForm";
import {useReviews} from "@/hooks/useReviews";
=======
import { useState, useEffect } from "react",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import {
  Dialog;
  DialogContent;
  DialogDescription;
  DialogHeader;
  DialogTitle;
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { ReviewForm } from "./ReviewForm";
import { useReviews } from "@/hooks/useReviews";
interface LeaveReviewModalProps {

  projectId: string
  revieweeId: string
  revieweeName: string
  isOpen: boolean

  onClose: () => void
<<<<<<< HEAD
=======
}
export function LeaveReviewModal({
=======
import { ReviewForm } from "./ReviewForm",
import { useReviews } from "@/hooks/useReviews",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface LeaveReviewModalProps {
  projectId: string,
  revieweeId: string,
  revieweeName: string,
  isOpen: boolean,
  onClose: () => void
<<<<<<< HEAD
}

export function LeaveReviewModal({;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  projectId;
  revieweeId;
  revieweeName;
  isOpen;
  onClose}: LeaveReviewModalProps) {
  const { userReview, submitReview, updateReview, isSubmitting } = useReviews(projectId);
  const [open, setOpen] = useState(isOpen);
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen]);

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if (!open) {
      onClose()
    }
  }
  const handleSubmit = async (formValues: any) => {
    if (userReview) {
      // Update existing review
      const { project_id, reviewee_id, ...updates } = formValues;
      const success = await updateReview(userReview.id, updates);
      if (success) {
        handleOpenChange(false)
      }
      return success
    } else {
      // Create new review
      const success = await submitReview(formValues);
      if (success) {
        handleOpenChange(false)
=======
<<<<<<< HEAD
import { useState, useEffect } from "react",
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { ReviewForm } from "./ReviewForm",
import { useReviews } from "@/hooks/useReviews",
interface LeaveReviewModalProps {
  projectId: string,
  revieweeId: string,
  revieweeName: string,
  isOpen: boolean,
  onClose: () => void
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from "react",;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger} from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { ReviewForm } from "./ReviewForm",;
import { useReviews } from "@/hooks/useReviews",;
interface LeaveReviewModalProps {;
  projectId: string,;
  revieweeId: string,;
  revieweeName: string,;
  isOpen: boolean,;
  onClose: () => void;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
export function LeaveReviewModal({
  projectId;
  revieweeId;
  revieweeName;
  isOpen;
  onClose}: LeaveReviewModalProps) {;
  const { userReview, submitReview, updateReview, isSubmitting } = useReviews(projectId);
  const [open, setOpen] = useState(isOpen);
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen]);

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if (!open) {
      onClose()
    }
  }
  const handleSubmit = async (formValues: any) => {
    if (userReview) {
      // Update existing review
      const { project_id, reviewee_id, ...updates } = formValues;
      const success = await updateReview(userReview && userReview.id, updates);
      if (success) {;
        handleOpenChange(false);
      }
      return success;
    } else {;
      // Create new review;
      const success = await submitReview(formValues);
      if (success) {;
        handleOpenChange(false);
<<<<<<< HEAD
      }
      return success;
    }
  }

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
      return success;
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }

=======

  },
=======
  };
=======
  },

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>;
      <DialogContent className="max-w-md">;
        <DialogHeader>;
          <DialogTitle>;
            {userReview ? "Edit Your Review" : `Rate Your Experience with ${revieweeName}`}
          </DialogTitle>
          <DialogDescription>
            Your feedback helps build a trustworthy community. It will be visible after moderation.
          </DialogDescription>
        </DialogHeader>
        <ReviewForm
          projectId={projectId}
          revieweeId={revieweeId}
          revieweeName={revieweeName}
          onSubmit={handleSubmit}
          defaultValues={userReview |undefined}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  )
}
import { useState, useEffect } from './react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { ReviewForm } from './ReviewForm';
import { use_reviews } from '@/hooks / use_reviews';
interface LeaveReviewModalProps {
  project_id: string,
  reviewee_id: string,
  reviewee_name: string,
  is_open: boolean,
  on_close: () => void;
}
export /**
 * LeaveReviewModal - Function description
 */
function LeaveReviewModal() {
  const { user_review, submit_review, update_review, is_submitting } = use_reviews (project_id);
  const [open, set_open] = useState (is_open);
;
  useEffect (() => {
    set_open (is_open);
  }, [is_open]);
;
  const handleOpenChange = (open: boolean) =>: any {
    set_open (open),
    // Check condition
if ( {) {
  $2
}
      on_close ();
    }
  }
;
  const handle_submit = async (form_values: any) => {
    // Check condition
if ( {) {
  $2
}
      // Update existing review;
      const { project_id, reviewee_id, ...updates } = form_values;
      const success = await update_review (user_review.id, updates);
      // Check condition
if ( {) {
  $2
}
        handleOpenChange (false);
      }
      return success;
    } else {
      // Create new review;
      const success = await submit_review (form_values);
      // Check condition
if ( {) {
  $2
}
        handleOpenChange (false);
      }
      return success;
    }
  }
;
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>;
      <DialogContent className="max - w-md">;
        <DialogHeader>;
          <DialogTitle>;
            {user_review ? "Edit Your Review" : `Rate Your Experience with ${reviewee_name}`}
          </DialogTitle>;
          <DialogDescription>;
            Your feedback helps build a trustworthy community. It will be visible after moderation.;
          </DialogDescription>;
        </DialogHeader>;
        <ReviewForm;
          project_id={project_id}
          reviewee_id={reviewee_id}
          reviewee_name={reviewee_name}
          on_submit={handle_submit}
          default_values={user_review || undefined}
          is_submitting={is_submitting}
        />;
      </DialogContent>;
    </Dialog>);
}
