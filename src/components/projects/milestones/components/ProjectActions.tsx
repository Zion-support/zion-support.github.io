
import React from 'react';
import { Button  } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react'
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {;
  projectId: string;
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
<<<<<<< HEAD
  onAddMilestone: () => void
export function ProjectActions({

  projectId
  isUnderDispute
  disputeId
  isTalent

  onAddMilestone
}: ProjectActionsProps) {
=======
  onAddMilestone: () => void;

export function ProjectActions(): any ({;
  projectId,;
  isUnderDispute,;
  disputeId,;
  isTalent,;
  onAddMilestone,;
}: ProjectActionsProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
      )}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
