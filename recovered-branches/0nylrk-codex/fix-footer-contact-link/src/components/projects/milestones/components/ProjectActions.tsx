import React from 'react';
  projectId;
  isUnderDispute;
  disputeId;
  isTalent;
  onAddMilestone;
}: ProjectActionsProps) {;
  return (
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
=======
import {Button} from '@/components / ui / button';
import {Link} from 'react-router-dom';
import { ShieldAlert } from './lucide-react';
import {RaiseDisputeButton} from '@/components / disputes / RaiseDisputeButton';
interface ProjectActionsProps {
  project_id: string,
  isUnderDispute: boolean,
  dispute_id?: string;
  is_talent: boolean,
  onAddMilestone: () => void;
}
export /**
 * ProjectActions - Function description
 */
function ProjectActions() {
  return (
    <div className="flex gap - 2">;
      {isUnderDispute && dispute_id ? (
        <Button variant="outline" as_child>;
          <Link to={`/dashboard / disputes/${dispute_id}`}>;
            <ShieldAlert className="h - 4 w - 4 mr - 2" />;
            View Active Dispute;
          </Link>;
        </Button>) : (
        <RaiseDisputeButton;
          project_id={project_id}
          variant="outline";
        />)}
      {is_talent && !isUnderDispute && (
        <Button on_click={onAddMilestone}>;
          Add Milestone;
        </Button>)}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
