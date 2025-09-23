
<<<<<<< HEAD
import React from 'react';
import {
=======
import React from "react";
import {

  Dialog
  DialogContent
  DialogDescription
  DialogHeader
  DialogTitle

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
<<<<<<< HEAD
  DialogTitle,
} from '@/components/ui/dialog';
import { ApplyForm } from './ApplyForm';
import { ApplyToJobModalProps } from './types';

export function ApplyToJobModal({ job, isOpen, onClose, onApplySuccess }: ApplyToJobModalProps) {
=======
DialogTitle,;









} from "@/components/ui/dialog";
import { ApplyForm } from "./ApplyForm";
import { ApplyToJobModalProps } from "./types";
export function ApplyToJobModal({
  job
  isOpen
  onClose
  onApplySuccess
}: ApplyToJobModalProps) {

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
=======

        <ApplyForm
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
          job={job}
          onClose={onClose}
          onApplySuccess={onApplySuccess}
        />
      </DialogContent>
    </Dialog>
<<<<<<< HEAD
  );
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






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


  );
>>>>>>> origin/feature/merge-conflicts-and-improvements

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  );


>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
}
