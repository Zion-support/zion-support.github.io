<<<<<<< HEAD
import React from 'react';
=======

<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { Button  } from '@/components/ui/button';
import { Link  } from 'react-router-dom';
import { ShieldAlert } from "lucide-react";
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
<<<<<<< HEAD
=======
interface ProjectActionsProps {

  projectId: string
  isUnderDispute: boolean
  disputeId?: string;
  isTalent: boolean

=======



import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {ShieldAlert} from "lucide-react";
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',
import { Button } from '@/components/ui/button',
import { Link } from 'react-router-dom',
import { ShieldAlert } from "lucide-react",
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface ProjectActionsProps {

  projectId: string
  isUnderDispute: boolean
  disputeId?: string;
  isTalent: boolean

  onAddMilestone: () => void
}
<<<<<<< HEAD
export function ProjectActions({
  projectId;
  isUnderDispute;
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function ProjectActions({;
  projectId;
  isUnderDispute;
  disputeId;
  isTalent;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  onAddMilestone
}: ProjectActionsProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

=======
        <RaiseDisputeButton
          projectId={projectId}
          variant="outline"
        />

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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  disputeId;
  isTalent;
  onAddMilestone;
}: ProjectActionsProps) {;
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
        />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}
    </div>
  )
}
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
