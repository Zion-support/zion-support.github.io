
import React from "react";
import {
<<<<<<< HEAD

  Dialog
  DialogContent
  DialogDescription
  DialogHeader
  DialogTitle
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
DialogTitle,;


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

<<<<<<< HEAD
        <ApplyForm
          job={job}
          onClose={onClose}
          onApplySuccess={onApplySuccess}
        />
      </DialogContent>
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4






          <DialogDescription>;
            Complete your application for this position;
          </DialogDescription>;
        </DialogHeader>;

        <ApplyForm;

          job={job}
          on_close={on_close}
          onApplySuccess={onApplySuccess}
        />;
      </DialogContent>;
    </Dialog>;


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  );

}