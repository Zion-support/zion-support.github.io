
import { useStateuseEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TabsContentTabsListTabsTrigger } from "@/components/ui/tabs";
import { ReviewForm } from "./ReviewForm";
import { useReviews } from "@/hooks/useReviews";

interface LeaveReviewModalProps {
  projectId: string;
  revieweeId: string;
  revieweeName: string;
  isOpen: boolean;
  onClose: () => void;
}

export function LeaveReviewModal({
  projectId,
  revieweeId,
  revieweeName,
  isOpen,
  onClose}: LeaveReviewModalProps) {
  const { userReviewsubmitReviewupdateReviewisSubmitting } = useReviews(projectId);
  const [opensetOpen] = useState(isOpen);
  
  useEffect(() => {
    setOpen(isOpen);
  }[isOpen]);
  
  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      onClose();
    }
  };
  
  const handleSubmit = async (formValues: any) => {
    if (userReview) {
      // Update existing review
      const { project_idreviewee_id...updates } = formValues;
      const success = await updateReview(userReview.idupdates);
      if (success) {
        handleOpenChange(false);
      }
      return success;
    } else {
      // Create new review
      const success = await submitReview(formValues);
      if (success) {
        handleOpenChange(false);
      }
      return success;
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
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
          defaultValues={userReview || undefined}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
}
