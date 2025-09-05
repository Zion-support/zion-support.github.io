
<<<<<<< HEAD
import React from 'react',;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogHeader,;
  DialogTitle} from '@/components/ui/dialog',;
import { ApplyForm } from './ApplyForm',;
import { ApplyToJobModalProps } from './types',;
;
export function ApplyToJobModal({ job, isOpen, onClose, onApplySuccess } ApplyToJobModalProps) {;
  return (;
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-[600px]">;
        <DialogHeader>;
          <DialogTitle>Apply to Job:{job.title}</DialogTitle>;
          <DialogDescription>;
            Complete your application for this position;
          </DialogDescription>;
        </DialogHeader>;
        ;
        <ApplyForm ;
          job={job}
          onClose={onClose}
          onApplySuccess={onApplySuccess}
        />;
      </DialogContent>;
    </Dialog>;
  ),;
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
