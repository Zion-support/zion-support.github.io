<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,;
} from '@/components/ui/dialog';
import { ApplyForm } from './ApplyForm';
import { ApplyToJobModalProps } from './types';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import React from "react";
import {
<<<<<<< HEAD
  Dialog
  DialogContent
  DialogDescription
  DialogHeader
  DialogTitle
=======
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
DialogTitle,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
    </Dialog>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import React from 'react',
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle} from '@/components/ui/dialog',
import { ApplyForm } from './ApplyForm',
import { ApplyToJobModalProps } from './types',
export function ApplyToJobModal({ job, isOpen, onClose, onApplySuccess }: ApplyToJobModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Apply to Job: {job.title}</DialogTitle>
          <DialogDescription>
            Complete your application for this position
          </DialogDescription>
        </DialogHeader>
        
        <ApplyForm 
          job={job}
          onClose={onClose}
          onApplySuccess={onApplySuccess}
        />;
      </DialogContent>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    </Dialog>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
}