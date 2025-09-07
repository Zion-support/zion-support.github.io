import React from 'react';
import { Button  } from '@/components/ui/button';
import { Link  } from 'react-router-dom';
import { ShieldAlert } from "lucide-react";
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {


import React from 'react';
import { Button  } from '@/components/ui/button';
import { Link  } from 'react-router-dom';
import { ShieldAlert } from "lucide-react";
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {


import {Button} from '@/components/ui/button';

import {Link} from 'react-router-dom';
import {ShieldAlert} from "lucide-react";'
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';

import React from 'react',
import { Button } from '@/components/ui/button',
import { Link } from 'react-router-dom',
import { ShieldAlert } from "lucide-react",
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',


interface ProjectActionsProps {
  projectId: string,
  isUnderDispute: boolean,
  disputeId?: string,
  isTalent: boolean,


}

export function ProjectActions({;
  projectId;
  isUnderDispute;
  disputeId;
  isTalent;
export function ProjectActions({}
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,

  onAddMilestone
}: ProjectActionsProps) {

interface ProjectActionsProps {
  // TODO: Implement
}
  projectId: string,
  isUnderDispute: boolean,
  disputeId?: string,
  isTalent: boolean,
  onAddMilestone: () => void;


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


  onAddMilestone;)
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

  onAddMilestone
}: ProjectActionsProps) {
  return (


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


    <div className="flex gap-2">;
      {isUnderDispute && disputeId ? (;
        <Button variant="outline" asChild>;
          <Link to={`/dashboard/disputes/${disputeId}`}>;

            <ShieldAlert className="h-4 w-4 mr-2" />;
            View Active Dispute;
          </Link>;
        </Button>;


        />;

      )}
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>
          Add Milestone;
        </Button>
      )}

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
export /**
 * ProjectActions - Function description
 */
function ProjectActions() {
}
return (;
    <div className="flex gap-2">;"
      {isUnderDispute && dispute_id ? (
        <Button variant="outline" as_child>;"
          <Link to={`/dashboard / disputes/${dispute_id}`}>;`
            <ShieldAlert className="h - 4 w - 4 mr-2" />;"

            View Active Dispute;
          </Link>;
        </Button>) : (
        <RaiseDisputeButton;
          project_id={project_id}"
          variant="outline";
        />;
      )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;


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
}> Add Milestone ) 

}</div>)
