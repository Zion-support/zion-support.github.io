<<<<<<< HEAD
=======
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

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
<<<<<<< HEAD
  onAddMilestone: () => void
=======
  onAddMilestone: () => void;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function ProjectActions({
<<<<<<< HEAD
  projectId;
  isUnderDispute;
  disputeId;
  isTalent;
=======
  projectId
  isUnderDispute
  disputeId
  isTalent
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  onAddMilestone
}: ProjectActionsProps) {
  return (
    <div className='flex gap-2'>
      {isUnderDispute && disputeId ? (
        <Button variant='outline' asChild>
          <Link href={`/dashboard/disputes/${disputeId}`}>
<<<<<<< HEAD
            <ShieldAlert className='h-4 w-4 mr-2' />            View Active Dispute
          </Link>
        </Button>
      ) : (
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />
=======
            <ShieldAlert className='h-4 w-4 mr-2' />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            View Active Dispute
          </Link>
        </Button>
      ) : (
        <RaiseDisputeButton projectId={projectId} variant='outline' />
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>Add Milestone</Button>
      )}
    </div>
<<<<<<< HEAD
  )
}
      )}
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>
          Add Milestone
        </Button>
      )}
    </div>
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
