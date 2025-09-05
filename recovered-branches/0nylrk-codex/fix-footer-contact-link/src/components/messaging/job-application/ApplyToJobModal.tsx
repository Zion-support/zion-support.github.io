
<<<<<<< HEAD
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
      <DialogContent className=&quot;sm:max-w-[600px]&quot;>
        <DialogHeader>
          <DialogTitle>Apply to Job: {job.title}</DialogTitle>
          <DialogDescription>
            Complete your application for this position
          </DialogDescription>
        </DialogHeader>
        
        <ApplyForm 
=======
import React from 'react',;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;
  DialogTitle} from '@/components/ui/dialog',;
import { ApplyForm } from './ApplyForm',;
import { ApplyToJobModalProps } from './types';
export function ApplyToJobModal({ job, isOpen, onClose, onApplySuccess }: ApplyToJobModalProps) {;
  return (;
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-[600px]">;
        <DialogHeader>;
          <DialogTitle>Apply to Job: {job.title}</DialogTitle>;
          <DialogDescription>;
            Complete your application for this position;
          </DialogDescription>;
        </DialogHeader>;
        <ApplyForm;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          job={job}
          onClose={onClose}
          onApplySuccess={onApplySuccess}
        />;
      </DialogContent>;
    </Dialog>;
  );
}
;