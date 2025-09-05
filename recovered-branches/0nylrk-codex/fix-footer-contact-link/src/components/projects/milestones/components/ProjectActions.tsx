
<<<<<<< HEAD
import React from 'react',
import { Button } from '@/components/ui/button',
import { Link } from 'react-router-dom',
import { ShieldAlert } from "lucide-react",
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
=======
import React from 'react';
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldAlert } from &quot;lucide-react&quot;;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ProjectActionsProps {
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
=======

interface ProjectActionsProps {_projectId: string;
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
  onAddMilestone: () => void;}

export function ProjectActions(_{_projectId, _isUnderDispute, _disputeId, _isTalent, _onAddMilestone}: ProjectActionsProps) {_return (
    <div className="flex gap-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      {isUnderDispute && disputeId ? (
        <Button variant=&quot;outline&quot; asChild>
          <Link to={`/dashboard/disputes/${disputeId}`}>
            <ShieldAlert className=&quot;h-4 w-4 mr-2&quot; />
            View Active Dispute
          </Link>
        </Button>
      ) : (
        <RaiseDisputeButton 
<<<<<<< HEAD
          projectId={projectId}
          variant=&quot;outline&quot;
=======
          projectId={_projectId}
          variant="outline"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      )}
      {_isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>
          Add Milestone
        </Button>
      )}
    </div>
  )
}
