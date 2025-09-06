
import React from 'react';
<<<<<<< HEAD
import { Button  } from '@/components/ui/button';
import { Link  } from 'react-router-dom';
import { ShieldAlert } from "lucide-react";
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {

  projectId: string
  isUnderDispute: boolean
  disputeId?: string;
  isTalent: boolean

  onAddMilestone: () => void
}
export function ProjectActions({
=======
import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {ShieldAlert} from "lucide-react";
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {;
  projectId: string,;
  isUnderDispute: boolean,;
  disputeId?: string;
  isTalent: boolean,;
  onAddMilestone: () => void;
}

export function ProjectActions(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  projectId;
  isUnderDispute;
  disputeId;
  isTalent;
  onAddMilestone;
}: ProjectActionsProps) {;
  return (
<<<<<<< HEAD
    <div className="flex gap-2">
      {isUnderDispute && disputeId ? (
        <Button variant="outline" asChild>
          <Link to={`/dashboard/disputes/${disputeId}`}>
            <ShieldAlert className="h-4 w-4 mr-2" />
            View Active Dispute
          </Link>
        </Button>
      ) : (
=======
    <div className="flex gap-2">;
      {isUnderDispute && disputeId ? (;
        <Button variant="outline" asChild>;
          <Link to={`/dashboard/disputes/${disputeId}`}>;
            <ShieldAlert className="h-4 w-4 mr-2" />;
            View Active Dispute;
          </Link>;
        </Button>;
      ) : (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <RaiseDisputeButton
          projectId={projectId}
          variant="outline"
        />;
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
