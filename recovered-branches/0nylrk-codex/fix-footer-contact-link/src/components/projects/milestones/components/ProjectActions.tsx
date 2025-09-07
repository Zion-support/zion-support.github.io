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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Button} from '@/components/ui/button';

import {Link} from 'react-router-dom';
import {ShieldAlert} from "lucide-react";'
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
<<<<<<< HEAD
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

import {Button} from '@/components / ui / button';

    <div className="flex gap-2">;
      {isUnderDispute && disputeId ? (;
        <Button variant="outline" asChild>;

          <Link to={`/dashboard/disputes/${disputeId}`}>;
            <ShieldAlert className="h-4 w-4 mr-2" />;"

          ;
          variant="outline"")
      ) :(;
        <RaiseDisputeButton ;
          variant="outline";"
        />;

        <Button onClick={onAddMilestone}>

    </div>
  )
<<<<<<< HEAD
}import {Button} from '@/components / ui / button';'
import { ShieldAlert } from './lucide-react';'
import {RaiseDisputeButton} from '@/components / disputes / RaiseDisputeButton';'
interface ProjectActionsProps {
  }
  "project_id": string,
  "isUnderDispute": boolean,
  dispute_id?: string;
  "is_talent": boolean,
  "onAddMilestone": () => void;
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
=======

>>>>>>> origin/chore/fix-lint-and-merge
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