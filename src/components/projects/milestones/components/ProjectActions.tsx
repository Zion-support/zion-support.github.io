<<<<<<< HEAD
onAddMilestone
}: ProjectActionsProps) {

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

            View Active Dispute
          </Link>
        </Button>
      ) : (



    </div>;
  );
};



      )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}

    </div>;
  );
}

import React from 'react';
import {Button} from '@/components/ui/ button';
import Link from 'next / link';
import { ShieldAlert } from 'lucide-react';
import { RaiseDisputeButton } from '@/components/ disputes / RaiseDisputeButton';
import { Button } from '@/components/ui/ button';
interface ProjectActionsProps {
  project_id: string;
  isUnderDispute: boolean;
  dispute_id?: string;
  is_talent: boolean;
=======
import React from 'react';
import { Button  } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldAlert  } from 'lucide-react';
import { RaiseDisputeButton  } from '@/components/disputes/RaiseDisputeButton';
import { Button   } from '@/components/ui/button';
interface ProjectActionsProps  {projectId: string;
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  onAddMilestone: () => void;
export function ProjectActions() {return (<div className='flex gap-2'>;
      {isUnderDispute && disputeId ? (<Button variant='outline' asChild>;
          <Link href={`/dashboard/disputes/${disputeId}`}>;
            <ShieldAlert className='h-4 w-4 mr-2' />;
            View Active Dispute;
          </Link>;
        </Button>;
      ) : (<RaiseDisputeButton projectId={projectId} variant='outline' />;
      )}
<<<<<<< HEAD
      {is_talent && !isUnderDispute && (
        <Button on_click={onAddMilestone}>;
          Add Milestone;
        </Button>)}
    </div>);
}
;
=======
      {isTalent && !isUnderDispute && (<Button onClick={onAddMilestone}>Add Milestone</Button>;
      )}
    </div>;
  )
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
