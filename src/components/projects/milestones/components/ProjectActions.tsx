<<<<<<< HEAD
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

<<<<<<< HEAD
xport function ProjectActions({
=======
import React from 'react',;
import { Button } from '@/components/ui/button',;
import Link from 'next/link',;
import { ShieldAlert } from 'lucide-react';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
interface ProjectActionsProps {;
  projectId: string,;
  isUnderDispute: boolean,;
  disputeId?: string,;
  isTalent: boolean,;
  onAddMilestone: () => void;
}

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

=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function ProjectActions({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
<<<<<<< HEAD
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />
      )}
=======
  onAddMilestone
}: ProjectActionsProps) {
  return (
    <div className="flex gap-2">
      {isUnderDispute && disputeId ? (
        <Button variant="outline" asChild>
          <Link href={`/dashboard/disputes/${disputeId}`}>
<<<<<<< HEAD
            <ShieldAlert className='h-4 w-4 mr-2' />            View Active Dispute
          </Link>
        </Button>
      ) : (
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />
            <ShieldAlert className="h-4 w-4 mr-2" />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            View Active Dispute
          </Link>
        </Button>
      ) : (
<<<<<<< HEAD
            <ShieldAlert className='h-4 w-4 mr-2' />            View Active Dispute
          </Link>
        </Button>
      ) : (
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />
          </Link>
        </Button>
      ) : (
    </div>
  )
}
=======



    </div>;
  );
};



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <RaiseDisputeButton 
          projectId={projectId}
          variant="outline"
        />
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662

    </div>;
  );
};



        <RaiseDisputeButton projectId={projectId} variant='outline' />
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>Add Milestone</Button>
      )}
    </div>
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
    </div>;
  );
};
        <RaiseDisputeButton 
          projectId={projectId}
          variant="outline"
        />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}
<<<<<<< HEAD
    </div>;
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
