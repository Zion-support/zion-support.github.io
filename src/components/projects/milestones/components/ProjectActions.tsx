<<<<<<< HEAD


export function ProjectActions({
=======
import React from 'react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import { ShieldAlert } from 'lucide-react'
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton'
import { Button } from '@/components/ui/button'
interface ProjectActionsProps {
  projectId: string
  isUnderDispute: boolean
  disputeId?: string
  isTalent: boolean
  onAddMilestone: () => void

import React from 'react';
import { Button  } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react'
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {
  projectId: string;
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
  onAddMilestone: () => void
export function ProjectActions({

  projectId
  isUnderDispute
  disputeId
  isTalent

xport function ProjectActions({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
<<<<<<< HEAD

=======
>>>>>>>   onAddMilestone
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  onAddMilestone
>>>>>>> }: ProjectActionsProps) {

  onAddMilestone: () => void;

export function ProjectActions(): any ({;
  projectId,;
  isUnderDispute,;
  disputeId,;
  isTalent,;
  onAddMilestone,;
}: ProjectActionsProps) {;

  return (
    <div className='flex gap-2'>;
      {isUnderDispute && disputeId ? (;
        <Button variant='outline' asChild>;
          <Link href={`/dashboard/disputes/${disputeId}`}>;
            <ShieldAlert className='h-4 w-4 mr-2' />            View Active Dispute;
          </Link>;
        </Button>;
      ) : (;
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />;
            View Active Dispute;
          </Link>;
        </Button>;
      ) : (;
        <RaiseDisputeButton projectId={projectId} variant='outline' />;
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>Add Milestone</Button>;

  return (
    <div className="flex gap-2">
      {isUnderDispute && disputeId ? (
        <Button variant="outline" asChild>
          <Link href={`/dashboard/disputes/${disputeId}`}>
<<<<<<< HEAD

            View Active Dispute
          </Link>
        </Button>
      ) : (

=======
            <ShieldAlert className='h-4 w-4 mr-2' />            View Active Dispute
          </Link>
        </Button>
      ) : (
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />
>>>>>>>             View Active Dispute
          </Link>
        </Button>
      ) : (
    </div>
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <RaiseDisputeButton 
          projectId={projectId}
          variant="outline"
        />
ursor/fix-website-loading-errors-and-merge-6662
    </div>;
  );
};



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> >>>>>>>       )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}

    </div>;
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
