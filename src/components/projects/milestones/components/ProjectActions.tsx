
import React from 'react';
import Link from 'next/link';

interface ProjectActionsProps {_projectId: string;
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
  onAddMilestone: () => void;}

export function ProjectActions(_{_projectId, _isUnderDispute, _disputeId, _isTalent, _onAddMilestone}: ProjectActionsProps) {_return (
    <div className="flex gap-2">
      {isUnderDispute && disputeId ? (
        <Button variant="outline" asChild>
          <Link href={`/dashboard/disputes/${disputeId}`}>
            <ShieldAlert className="h-4 w-4 mr-2" />
            View Active Dispute
          </Link>
        </Button>
      ) : (
        <RaiseDisputeButton 
          projectId={_projectId}
          variant="outline"
        />
      )}
      {_isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>
          Add Milestone
        </Button>
      )}
    </div>
  );
}
