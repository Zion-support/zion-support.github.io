
<<<<<<< HEAD
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { Link } from 'react-router-dom',;
import { ShieldAlert } from "lucide-react",;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
;
interface ProjectActionsProps {;
  projectId:string,;
  isUnderDispute:boolean,;
  disputeId?:string,;
  isTalent:boolean,;
  onAddMilestone:() => void;
}
;
export function ProjectActions({;
  projectId,;
  isUnderDispute,;
  disputeId,;
  isTalent,;
  onAddMilestone;
} ProjectActionsProps) {;
  return (;
    <div className="flex gap-2">;
      {isUnderDispute && disputeId ? (;
        <Button variant="outline" asChild>;
          <Link to={`/dashboard/disputes/${disputeId}`}>;
            <ShieldAlert className="h-4 w-4 mr-2" />;
            View Active Dispute;
          </Link>;
        </Button>;
      ) :(;
        <RaiseDisputeButton ;
          projectId={projectId}
          variant="outline";
        />;
      )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}
    </div>;
  ),;
=======
import React from 'react',
import { Button } from '@/components/ui/button',
import { Link } from 'react-router-dom',
import { ShieldAlert } from "lucide-react",
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',interface ProjectActionsProps {
  projectId: string,
  isUnderDispute: boolean,
  disputeId?: string,
  isTalent: boolean,
  onAddMilestone: () => void
}

export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
  onAddMilestone
}: ProjectActionsProps) {
  return (
    <div className=&quot;flex gap-2&quot;>

interface ProjectActionsProps {_projectId: string;
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
  onAddMilestone: () => void;}

export function ProjectActions(_{_projectId, _isUnderDispute, _disputeId, _isTalent, _onAddMilestone}: ProjectActionsProps) {_return (
    <div className="flex gap-2">
      {isUnderDispute && disputeId ? (
        <Button variant=&quot;outline&quot; asChild>
          <Link to={`/dashboard/disputes/${disputeId}`}>
            <ShieldAlert className=&quot;h-4 w-4 mr-2&quot; />
            View Active Dispute
          </Link>
        </Button>
      ) : (
        <RaiseDisputeButton 
          projectId={projectId}
          variant=&quot;outline&quot;        />
      )}
      {_isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>
          Add Milestone
        </Button>
      )}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
