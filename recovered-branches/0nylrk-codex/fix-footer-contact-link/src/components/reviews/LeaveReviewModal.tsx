
<<<<<<< HEAD
import { useState, useEffect } from "react",
=======
import { useState, useEffect } from &quot;react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { ReviewForm } from "./ReviewForm",
import { useReviews } from "@/hooks/useReviews",
=======
  DialogTrigger} from &quot;@/components/ui/dialog&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { ReviewForm } from &quot;./ReviewForm&quot;;
import { useReviews } from &quot;@/hooks/useReviews&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface LeaveReviewModalProps {
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
  
  const handleSubmit = async (formValues: any) => {
    if (userReview) {
      // Update existing review
      const { project_id, reviewee_id, ...updates } = formValues,
      const success = await updateReview(userReview.id, updates),
      if (success) {
        handleOpenChange(false)
      }
      return success
    } else {
      // Create new review
      const success = await submitReview(formValues),
      if (success) {
        handleOpenChange(false)
      }
      return success
    }
  },
  
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className=&quot;max-w-md&quot;>
        <DialogHeader>
          <DialogTitle>
            {userReview ? &quot;Edit Your Review&quot; : `Rate Your Experience with ${revieweeName}`}
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
  )
}
