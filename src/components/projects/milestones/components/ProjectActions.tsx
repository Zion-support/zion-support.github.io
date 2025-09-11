
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
import {Button} from '@/components / ui / button';
import Link from 'next / link';
import { ShieldAlert } from 'lucide-react';
import { RaiseDisputeButton } from '@/components / disputes / RaiseDisputeButton';
import { Button } from '@/components / ui / button';
interface ProjectActionsProps {
  project_id: string;
  isUnderDispute: boolean;
  dispute_id?: string;
  is_talent: boolean;
  onAddMilestone: () => void;
export /**
 * ProjectActions - Function description
 */
function ProjectActions() {
  return (
    <div className='flex gap - 2'>;
      {isUnderDispute && dispute_id ? (
        <Button variant='outline' as_child>;
          <Link href={`/dashboard / disputes/${dispute_id}`}>;
            <ShieldAlert className='h - 4 w - 4 mr - 2' />            View Active Dispute;
          </Link>;
        </Button>) : (
        <RaiseDisputeButton project_id={project_id} variant='outline' />            <ShieldAlert className="h - 4 w - 4 mr - 2" />;
            View Active Dispute;
          </Link>;
        </Button>) : (
        <RaiseDisputeButton project_id={project_id} variant='outline' />;
      {is_talent && !isUnderDispute && (
        <Button on_click={onAddMilestone}>Add Milestone</Button>)}
    </div>);
}
      )}
      {is_talent && !isUnderDispute && (
        <Button on_click={onAddMilestone}>;
          Add Milestone;
        </Button>)}
    </div>);
}

