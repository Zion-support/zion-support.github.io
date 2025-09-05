
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
      <DialogContent className=&quot;sm:max-w-[600px]&quot;>        <DialogHeader>
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
