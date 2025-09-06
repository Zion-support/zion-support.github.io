<<<<<<< HEAD
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
=======

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD
  DialogDescription,;
} from '@/components/ui/dialog';
import { DisputeForm } from './DisputeForm';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useRouter } from 'next/router';
import { ShieldAlert } from 'lucide-react';

=======
  DialogDescription} from "@/components/ui/dialog",
import { DisputeForm } from "./DisputeForm";
import { useRouter } from 'next/router';
import { ShieldAlert } from 'lucide-react';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface RaiseDisputeButtonProps {
  projectId: string;
  milestoneId?: string;
  variant?:
    | 'default'
    | 'outline'
    | 'secondary'
    | 'destructive'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;

export function RaiseDisputeButton({
  projectId,
  milestoneId,
  variant = 'outline',
  size,
  className,
}: RaiseDisputeButtonProps) {
<<<<<<< HEAD
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const handleDisputeCreated = (disputeId: string) => {
    setIsDialogOpen(false);
    router.push(`/dashboard/disputes/${disputeId}`);
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => setIsDialogOpen(true)}
=======
  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const router = useRouter(),
  
  const handleDisputeCreated = (disputeId: string,) => {
    setIsDialogOpen(false),
    router.push(`/dashboard/disputes/${disputeId}`)
  },
  
  return (
    <>
      <Button 
        variant = {variant,}
        size = {size,}
        className = {className,}
        onClick = {(,) => setIsDialogOpen(true),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      >
        <ShieldAlert className='h-4 w-4 mr-2' />
        Raise Dispute
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='sm:max-w-[550px]'>
          <DialogHeader>
            <DialogTitle>Raise a Dispute</DialogTitle>
            <DialogDescription>
              Please provide details about the issue you're experiencing with
              this project.
            </DialogDescription>
          </DialogHeader>
<<<<<<< HEAD

          <DisputeForm
            projectId={projectId}
            milestoneId={milestoneId}
            onDisputeCreated={handleDisputeCreated}
            onCancel={() => setIsDialogOpen(false)}
=======
          
          <DisputeForm 
            projectId = {projectId,}
            milestoneId = {milestoneId,}
            onDisputeCreated = {handleDisputeCreated,}
            onCancel = {() => setIsDialogOpen(false),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
          />
        </DialogContent>
      </Dialog>
    </>
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
