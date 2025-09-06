
<<<<<<< HEAD



import React from 'react';
import { Button  } from '@/components/ui/button';
import { Link  } from 'react-router-dom';
import { ShieldAlert } from "lucide-react";
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {

  projectId: string
  isUnderDispute: boolean
  disputeId?: string;
  isTalent: boolean

=======
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {ShieldAlert} from "lucide-react";
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react',
import { Button } from '@/components/ui/button',
import { Link } from 'react-router-dom',
import { ShieldAlert } from "lucide-react",
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',


<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ProjectActionsProps {
  projectId: string,
  isUnderDispute: boolean,
  disputeId?: string,
  isTalent: boolean,
  onAddMilestone: () => void
}

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  onAddMilestone
}: ProjectActionsProps) {
<<<<<<< HEAD
  return (

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <RaiseDisputeButton
          projectId={projectId}
          variant="outline"
        />
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
export function ProjectActions(): any ({;
  projectId;
  isUnderDispute;
  disputeId;
  isTalent;
  onAddMilestone;
}: ProjectActionsProps) {;
<<<<<<< HEAD
  return (

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
  return (;
=======
  return (;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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



      ) : (;
<<<<<<< HEAD
        <RaiseDisputeButton;
          projectId={projectId}
          variant="outline";
        />;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <RaiseDisputeButton
          projectId={projectId}
          variant="outline"
        />;



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      )}
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>
          Add Milestone
        </Button>
      )}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    </div>
  )
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>;
  ),;}
 interface ProjectActionsProps {
  projectId: string;
isUnderDispute: boolean;
disputeId?: string;
isTalent: boolean;
onAddMilestone: () => void 
}export function ProjectActions ({
  projectId;
isUnderDispute;
disputeId;
isTalent;
onAddMilestone 
}: ProjectActionsProps) {
  return (<div className="flex gap-2" > isUnderDispute && disputeId ? (<Button variant="outline" asChild> <Link to= {
  `/dashboard/disputes/$ {
  disputeId 
}` 
}> <ShieldAlert className="h-4 w-4 mr-2" /> View Active Dispute </Link> </Button>) : (<RaiseDisputeButton />) 
}{
  isTalent && !isUnderDispute && (<Button onClick= {
  onAddMilestone 
}> Add Milestone </Button>) 
}</div>) 
}
    </div>
  )
}
<<<<<<< HEAD
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
