
<<<<<<< HEAD
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
;
interface LeaveReviewModalProps {;
  projectId:string,;
  revieweeId:string,;
  revieweeName:string,;
  isOpen:boolean,;
  onClose:() => void;
}
;
export function LeaveReviewModal({;
  projectId,;
  revieweeId,;
  revieweeName,;
  isOpen,;
  onClose} LeaveReviewModalProps) {;
  const { userReview, submitReview, updateReview, isSubmitting } = useReviews(projectId),;
  const [open, setOpen] = useState(isOpen),;
  ;
  useEffect(() => {;
    setOpen(isOpen),;
  }, [isOpen]),;
  ;
  const handleOpenChange = (open:boolean) => {;
    setOpen(open),;
    if (!open) {;
      onClose();
    }
  },;
  ;
  const handleSubmit = async (formValues:any) => {;
    if (userReview) {;
      // Update existing review;
      const { project_id, reviewee_id, ...updates } = formValues,;
      const success = await updateReview(userReview.id, updates),;
      if (success) {;
        handleOpenChange(false),;
      }
      return success,;
    } else {;
      // Create new review;
      const success = await submitReview(formValues),;
      if (success) {;
        handleOpenChange(false),;
      }
      return success,;
    }
  },;
  ;
  return (;
    <Dialog open={open} onOpenChange={handleOpenChange}>;
      <DialogContent className="max-w-md">;
        <DialogHeader>;
          <DialogTitle>;
            {userReview ? "Edit Your Review" :`Rate Your Experience with ${revieweeName}`}
          </DialogTitle>;
          <DialogDescription>;
            Your feedback helps build a trustworthy community. It will be visible after moderation.;
          </DialogDescription>;
        </DialogHeader>;
        ;
        <ReviewForm;
          projectId={projectId}
=======
import { useState, useEffect } from "react",import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { ReviewForm } from "./ReviewForm",
import { useReviews } from "@/hooks/useReviews",interface LeaveReviewModalProps {
  projectId: string,
  revieweeId: string,
  revieweeName: string,
  isOpen: boolean,
  onClose: () => void
}

export function LeaveReviewModal({
  projectId,
  revieweeId,
  revieweeName,
  isOpen,
  onClose}: LeaveReviewModalProps) {
  const { userReview, submitReview, updateReview, isSubmitting } = useReviews(projectId),
  const [open, setOpen] = useState(isOpen),
  
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen]),
  
  const handleOpenChange = (open: boolean) => {
    setOpen(open),
    if (!open) {
      onClose()
    }
  },
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

interface LeaveReviewModalProps {projectId: string,
  revieweeId: string,
  revieweeName: string,
  isOpen: boolean,
  onClose: () => void}

export function LeaveReviewModal(_{projectId, revieweeId, revieweeName, isOpen, onClose}: LeaveReviewModalProps) {const { userReview, submitReview, updateReview, isSubmitting} = useReviews(projectId);
  const [open, setOpen] = useState(isOpen);
  
  useEffect_(() => {setOpen(isOpen)}, [isOpen]);
  
  const handleOpenChange = (open: boolean) => {setOpen(open);
    if (!open) {
      onClose()}
  };
  
  const handleSubmit = async (formValues: unknown) => {if (userReview) {
      // Update existing review,
const { projectid, revieweeid, ...updates } = formValues,
      const success = await updateReview(userReview.id, updates),
      if (success) {
        handleOpenChange(false)
      }
      return success
    } else {
      // Create new review,
const success = await submitReview(formValues),
      if (success) {
        handleOpenChange(false)
      }
      return success    }
  },
  
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className=&quot;max-w-md&quot;>
        <DialogHeader>
          <DialogTitle>
            {userReview ? &quot;Edit Your Review&quot; : `Rate Your Experience with ${revieweeName}`}          </DialogTitle>
          <DialogDescription>
            Your feedback helps build a trustworthy community. It will be visible after moderation.
          </DialogDescription>
        </DialogHeader>
        
        <ReviewForm,
projectId={projectId}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          revieweeId={revieweeId}
          revieweeName={revieweeName}
          onSubmit={handleSubmit}
          defaultValues={userReview || undefined}
          isSubmitting={isSubmitting}
<<<<<<< HEAD
        />;
      </DialogContent>;
    </Dialog>;
  ),;
=======
        />
      </DialogContent>
    </Dialog>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
