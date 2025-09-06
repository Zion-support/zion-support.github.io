<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
<<<<<<< HEAD
DialogTitle,;
=======
  DialogTitle,
>>>>>>> main
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
  );
}