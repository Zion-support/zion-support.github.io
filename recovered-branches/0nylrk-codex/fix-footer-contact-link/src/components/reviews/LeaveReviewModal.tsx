
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {useState, useEffect} from "react";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ReviewForm} from "./ReviewForm";
import {useReviews} from "@/hooks/useReviews";
import { useState, useEffect } from "react",
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  Dialog;
  DialogContent;
  DialogDescription;
  DialogHeader;
  DialogTitle;
  DialogTrigger} from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
  projectId: string
  revieweeId: string
  revieweeName: string
  isOpen: boolean

  onClose: () => void
}
export function LeaveReviewModal({
import { ReviewForm } from "./ReviewForm",
import { useReviews } from "@/hooks/useReviews",
interface LeaveReviewModalProps {
  projectId: string,
  revieweeId: string,
  revieweeName: string,
  isOpen: boolean,
  onClose: () => void
}

export function LeaveReviewModal({;
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
=======
=======
import {useState, useEffect} from "react";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ReviewForm} from "./ReviewForm";
import {useReviews} from "@/hooks/useReviews";
export function LeaveReviewModal(): any ({;
=======

export function LeaveReviewModal(): any ({;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  projectId;
  revieweeId;
  revieweeName;
  isOpen;
  onClose}: LeaveReviewModalProps) {;
  const { userReview, submitReview, updateReview, isSubmitting } = useReviews(projectId);
  const [open, setOpen] = useState(isOpen);
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
  onClose}: LeaveReviewModalProps) {;
  const { userReview, submitReview, updateReview, isSubmitting } = useReviews(projectId),;
  const [open, setOpen] = useState(isOpen),;
  useEffect(() => {;
    setOpen(isOpen);
  }, [isOpen]),;
=======
=======

  useEffect(() => {;
    setOpen(isOpen);
  }, [isOpen]);

  const handleSubmit = async (formValues: any) => {;
    if (userReview) {;
      // Update existing review;

      const { project_id, reviewee_id, ...updates } = formValues;
      const success = await updateReview(userReview && userReview.id, updates);
interface LeaveReviewModalProps {
  projectId: string,
  revieweeId: string,
  revieweeName: string,
  isOpen: boolean,
  onClose: () => void


=======
  },
=======
  };
=======
  },

  
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Dialog open={open} onOpenChange={handleOpenChange}>;
      <DialogContent className="max-w-md">;
        <DialogHeader>;
          <DialogTitle>;
          </DialogTitle>;
          <DialogDescription>;
            Your feedback helps build a trustworthy community. It will be visible after moderation.;
          </DialogDescription>;
        </DialogHeader>;


=======