
import React from 'react';
import {_Dialog, _DialogContent, _DialogDescription, _DialogHeader, _DialogTitle} from '@/components/ui/dialog';

export function ApplyToJobModal(_{_job, _isOpen, _onClose, _onApplySuccess}: ApplyToJobModalProps) {_return (
    <Dialog open={isOpen} onOpenChange={_onClose}>
      <DialogContent className="sm:max-w-[600px]">
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
  );
}
