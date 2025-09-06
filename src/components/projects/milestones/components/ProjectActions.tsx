<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';

interface ProjectActionsProps {
  projectId: string;
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
  onAddMilestone: () => void;

export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
  onAddMilestone,
}: ProjectActionsProps) {
  return (
    <div className='flex gap-2'>
      {isUnderDispute && disputeId ? (
        <Button variant='outline' asChild>
          <Link href={`/dashboard/disputes/${disputeId}`}>
            <ShieldAlert className='h-4 w-4 mr-2' />
=======

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react'
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {
  projectId: string,
  isUnderDispute: boolean,
  disputeId?: string;
  isTalent: boolean,
  onAddMilestone: () => void
}

export function ProjectActions({
  projectId;
  isUnderDispute;
  disputeId;
  isTalent;
  onAddMilestone
}: ProjectActionsProps) {
  return (
    <div className="flex gap-2">
      {isUnderDispute && disputeId ? (
        <Button variant="outline" asChild>
          <Link href={`/dashboard/disputes/${disputeId}`}>
            <ShieldAlert className="h-4 w-4 mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            View Active Dispute
          </Link>
        </Button>
      ) : (
<<<<<<< HEAD
        <RaiseDisputeButton projectId={projectId} variant='outline' />
      )}
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>Add Milestone</Button>
      )}
    </div>
  );
=======
        <RaiseDisputeButton 
          projectId={projectId}
          variant="outline"
        />
      )}
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>
          Add Milestone
        </Button>
      )}
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
