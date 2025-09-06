<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react';
import { Button  } from '@/components/ui/button';
import { Link  } from 'react-router-dom';
import { ShieldAlert } from "lucide-react";
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {
=======
=======



import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {ShieldAlert} from "lucide-react";
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  projectId: string
  isUnderDispute: boolean
  disputeId?: string;
  isTalent: boolean

<<<<<<< HEAD
import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {ShieldAlert} from "lucide-react";
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
=======
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from 'react',
import { Button } from '@/components/ui/button',
import { Link } from 'react-router-dom',
import { ShieldAlert } from "lucide-react",
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface ProjectActionsProps {
  projectId: string,
  isUnderDispute: boolean,
  disputeId?: string,
  isTalent: boolean,
  onAddMilestone: () => void
}
<<<<<<< HEAD
<<<<<<< HEAD

export function ProjectActions({;
  projectId;
  isUnderDispute;
  disputeId;
  isTalent;
export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
import React from 'react';
  projectId;
  isUnderDispute;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  disputeId;
  isTalent;
  onAddMilestone;
}: ProjectActionsProps) {;
  return (
        <RaiseDisputeButton
          projectId={projectId}
          variant="outline"
        />;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
