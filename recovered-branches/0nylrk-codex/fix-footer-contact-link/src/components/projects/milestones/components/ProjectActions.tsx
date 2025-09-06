
<<<<<<< HEAD

import React from 'react';


  projectId: string
  isUnderDispute: boolean
  disputeId?: string;
  isTalent: boolean




=======
=======



import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {ShieldAlert} from "lucide-react";
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from 'react',
import { Button } from '@/components/ui/button',
import { Link } from 'react-router-dom',
import { ShieldAlert } from "lucide-react",
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
interface ProjectActionsProps {
  projectId: string,
  isUnderDispute: boolean,
  disputeId?: string,
  isTalent: boolean,
<<<<<<< HEAD
  onAddMilestone: () => void
}


export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,

=======

  onAddMilestone: () => void
}



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  onAddMilestone
}: ProjectActionsProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (


        <RaiseDisputeButton
          projectId={projectId}
          variant="outline"
        />;



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      )}
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>
          Add Milestone
        </Button>
      )}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    </div>
  )
}


