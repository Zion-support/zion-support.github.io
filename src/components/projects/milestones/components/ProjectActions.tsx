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

<<<<<<< HEAD
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

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
xport function ProjectActions({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>>   onAddMilestone
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  onAddMilestone
>>>>>>> }: ProjectActionsProps) {
=======
onAddMilestone
}: ProjectActionsProps) {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

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

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
  onAddMilestone
}: ProjectActionsProps) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
    <div className="flex gap-2">
      {isUnderDispute && disputeId ? (
        <Button variant="outline" asChild>
          <Link href={`/dashboard/disputes/${disputeId}`}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <ShieldAlert className='h-4 w-4 mr-2' />            View Active Dispute
          </Link>
        </Button>
      ) : (
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />
            <ShieldAlert className="h-4 w-4 mr-2" />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            View Active Dispute
          </Link>
        </Button>
      ) : (
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    </div>;
  );
};



<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> >>>>>>>       )}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <RaiseDisputeButton projectId={projectId} variant='outline' />
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>Add Milestone</Button>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
      )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>;
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
