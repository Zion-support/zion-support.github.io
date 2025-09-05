
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldAlert } from &quot;lucide-react&quot;;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';

interface ProjectActionsProps {
  projectId: string;
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
  onAddMilestone: () => void;
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
          variant=&quot;outline&quot;
        />
      )}
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>
          Add Milestone
        </Button>
      )}
    </div>
  );
}
