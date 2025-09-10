
import React from "react";
import {

<<<<<<< HEAD
=======
import React from "react";
import {
  Dialog
  DialogContent
  DialogDescription
  DialogHeader
  DialogTitle
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
<<<<<<< HEAD

=======
        <ApplyForm
          job={job}
          onClose={onClose}
          onApplySuccess={onApplySuccess}
        />
      </DialogContent>
    </Dialog>


import React from 'react',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;
import React from './react';
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,';
} from '@/components / ui / dialog';'
import { ApplyForm  } from './ApplyForm';'
import { ApplyToJobModalProps  } from './types';
export /**;
 * ApplyToJobModal - Function description;
 */
function ApplyToJobModal() {}
  return (
    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="sm:max-w-[600px]">;
        <DialogHeader>;
          <DialogTitle > Apply to Job: {job.title}</DialogTitle>;
          <DialogDescription>;
            Complete your application for this position;
          </DialogDescription>;
        </DialogHeader>;

        <ApplyForm;
  );
};