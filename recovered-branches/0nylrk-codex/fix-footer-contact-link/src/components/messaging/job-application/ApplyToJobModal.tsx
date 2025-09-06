
import React from "react";
<<<<<<< HEAD
import {
  Dialog
  DialogContent
  DialogDescription
  DialogHeader
  DialogTitle
} from "@/components/ui/dialog";
import { ApplyForm } from "./ApplyForm";
import { ApplyToJobModalProps } from "./types";
export function ApplyToJobModal({
  job
  isOpen
  onClose
  onApplySuccess
}: ApplyToJobModalProps) {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Apply to Job: {job.title}</DialogTitle>
          <DialogDescription>
            Complete your application for this position
          </DialogDescription>
        </DialogHeader>
=======
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;
  DialogTitle,;
} from "@/components/ui/dialog";
import { ApplyForm } from "./ApplyForm";
import { ApplyToJobModalProps } from "./types";
export function ApplyToJobModal(): any ({;
  job,;
  isOpen,;
  onClose,;
  onApplySuccess,;
}: ApplyToJobModalProps) {;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-[600px]">;
        <DialogHeader>;
          <DialogTitle>Apply to Job: {job && job.title}</DialogTitle>;
          <DialogDescription>;
            Complete your application for this position;
          </DialogDescription>;
        </DialogHeader>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <ApplyForm
          job={job}
          onClose={onClose}
          onApplySuccess={onApplySuccess}
        />;
      </DialogContent>;
    </Dialog>;
  );
}