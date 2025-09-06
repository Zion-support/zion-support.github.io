
<<<<<<< HEAD
import { useState, useEffect } from "react";
import {
  Dialog;
  DialogContent;
  DialogDescription;
  DialogHeader;
  DialogTitle;
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { ReviewForm } from "./ReviewForm";
import { useReviews } from "@/hooks/useReviews";
interface LeaveReviewModalProps {

  projectId: string
  revieweeId: string
  revieweeName: string
  isOpen: boolean

  onClose: () => void
}
export function LeaveReviewModal({
=======
import {useState, useEffect} from "react";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ReviewForm} from "./ReviewForm";
import {useReviews} from "@/hooks/useReviews";
interface LeaveReviewModalProps {;
  projectId: string,;
  revieweeId: string,;
  revieweeName: string,;
  isOpen: boolean,;
  onClose: () => void;
}

export function LeaveReviewModal(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  projectId;
  revieweeId;
  revieweeName;
  isOpen;
  onClose}: LeaveReviewModalProps) {;
  const { userReview, submitReview, updateReview, isSubmitting } = useReviews(projectId);
  const [open, setOpen] = useState(isOpen);
<<<<<<< HEAD
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
=======

  useEffect(() => {;
    setOpen(isOpen);
  }, [isOpen]);

  const handleOpenChange = (open: boolean) => {;
    setOpen(open),;
    if (!open) {;
      onClose();
    }
  };

  const handleSubmit = async (formValues: any) => {;
    if (userReview) {;
      // Update existing review;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
      }
      return success;
    }
<<<<<<< HEAD
  }
=======
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>;
      <DialogContent className="max-w-md">;
        <DialogHeader>;
          <DialogTitle>;
            {userReview ? "Edit Your Review" : `Rate Your Experience with ${revieweeName}`}
<<<<<<< HEAD
          </DialogTitle>
          <DialogDescription>
            Your feedback helps build a trustworthy community. It will be visible after moderation.
          </DialogDescription>
        </DialogHeader>
=======
          </DialogTitle>;
          <DialogDescription>;
            Your feedback helps build a trustworthy community. It will be visible after moderation.;
          </DialogDescription>;
        </DialogHeader>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <ReviewForm
          projectId={projectId}
          revieweeId={revieweeId}
          revieweeName={revieweeName}
          onSubmit={handleSubmit}
          defaultValues={userReview |undefined}
          isSubmitting={isSubmitting}
<<<<<<< HEAD
        />
      </DialogContent>
    </Dialog>
  )
}
=======
        />;
      </DialogContent>;
    </Dialog>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
