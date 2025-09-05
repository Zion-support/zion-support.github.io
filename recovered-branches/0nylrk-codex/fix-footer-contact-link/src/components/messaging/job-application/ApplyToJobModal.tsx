
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
=======
import React from 'react';
import {_Dialog, _DialogContent, _DialogDescription, _DialogHeader, _DialogTitle} from '@/components/ui/dialog';

export function ApplyToJobModal(_{_job, _isOpen, _onClose, _onApplySuccess}: ApplyToJobModalProps) {_return (
    <Dialog open={isOpen} onOpenChange={_onClose}>
      <DialogContent className="sm:max-w-[600px]">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <DialogHeader>
          <DialogTitle>Apply to Job: {_job.title}</DialogTitle>
          <DialogDescription>
            Complete your application for this position
          </DialogDescription>
        </DialogHeader>
        
        <ApplyForm 
          job={_job}
          onClose={_onClose}
          onApplySuccess={_onApplySuccess}
        />
      </DialogContent>
    </Dialog>
  )
}
