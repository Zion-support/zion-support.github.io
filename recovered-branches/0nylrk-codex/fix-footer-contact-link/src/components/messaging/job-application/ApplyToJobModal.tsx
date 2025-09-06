
import React from "react";
import {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  Dialog
  DialogContent
  DialogDescription
  DialogHeader
  DialogTitle
<<<<<<< HEAD
=======
=======
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
DialogTitle,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
=======
<<<<<<< HEAD
        <ApplyForm
          job={job}
          onClose={onClose}
          onApplySuccess={onApplySuccess}
        />
      </DialogContent>
<<<<<<< HEAD
    </Dialog>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



=======
import React from './react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components / ui / dialog';
import { ApplyForm  } from './ApplyForm';
import { ApplyToJobModalProps  } from './types';
export /**
 * ApplyToJobModal - Function description
 */
function ApplyToJobModal() {
  return (
    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="sm:max - w-[600px]">;
        <DialogHeader>;
          <DialogTitle > Apply to Job: {job.title}</DialogTitle>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          <DialogDescription>;
            Complete your application for this position;
          </DialogDescription>;
        </DialogHeader>;

        <ApplyForm
        <ApplyForm;
          job={job}
          on_close={on_close}
          onApplySuccess={onApplySuccess}
        />;
      </DialogContent>;
    </Dialog>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  );
}