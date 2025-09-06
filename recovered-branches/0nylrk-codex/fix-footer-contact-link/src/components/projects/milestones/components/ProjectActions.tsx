
<<<<<<< HEAD
import React from 'react';
import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {ShieldAlert} from "lucide-react";
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
=======
import React from 'react',
import { Button } from '@/components/ui/button',
import { Link } from 'react-router-dom',
import { ShieldAlert } from "lucide-react",
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface ProjectActionsProps {
  projectId: string,
  isUnderDispute: boolean,
  disputeId?: string,
  isTalent: boolean,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  onAddMilestone: () => void
}

<<<<<<< HEAD
export function ProjectActions({;
  projectId;
  isUnderDispute;
  disputeId;
  isTalent;
=======
export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  onAddMilestone
}: ProjectActionsProps) {
  return (
    <div className="flex gap-2">
      {isUnderDispute && disputeId ? (
        <Button variant="outline" asChild>
          <Link to={`/dashboard/disputes/${disputeId}`}>
            <ShieldAlert className="h-4 w-4 mr-2" />
            View Active Dispute
          </Link>
        </Button>
      ) : (
        <RaiseDisputeButton
          projectId={projectId}
          variant="outline"
        />
<<<<<<< HEAD
=======
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { Link } from 'react-router-dom',;
import { ShieldAlert } from "lucide-react",;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
interface ProjectActionsProps {;
  projectId: string,;
  isUnderDispute: boolean,;
  disputeId?: string,;
  isTalent: boolean,;
  onAddMilestone: () => void;
}
;
export function ProjectActions({;
  projectId,;
  isUnderDispute,;
  disputeId;
  isTalent;
  onAddMilestone;
}: ProjectActionsProps) {;
  return (;
    <div className="flex gap-2">;
      {isUnderDispute && disputeId ? (;
        <Button variant="outline" asChild>;
          <Link to={`/dashboard/disputes/${disputeId}`}>;
            <ShieldAlert className="h-4 w-4 mr-2" />;
            View Active Dispute;
          </Link>;
        </Button>;
      ) : (;
        <RaiseDisputeButton;
          projectId={projectId}
          variant="outline";
        />;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      )}
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>
          Add Milestone
        </Button>
      )}
    </div>
  )
}