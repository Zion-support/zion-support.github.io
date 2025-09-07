<<<<<<< HEAD
import React from 'react';
import { AddMilestoneForm } from '../AddMilestoneForm';
interface MilestoneCreatorProps {
  onSubmit: (data: any) => Promise<void>,
  isSubmitting: boolean,
  onCancel: () => void,
  projectScope?: string,
  projectStartDate?: string,
  projectEndDate?: string | null,
  projectType?: string
}
export function MilestoneCreator({
=======
<<<<<<< HEAD
projectScope?: string;
=======
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | null;
  projectType?: string;
}



export function MilestoneCreator({;

export function MilestoneCreator(): any ({;

<<<<<<< HEAD
import React from 'react';
import { AddMilestoneForm } from '../AddMilestoneForm';
interface MilestoneCreatorProps {

  onSubmit: (data: any) => Promise<void>
  isSubmitting: boolean
  onCancel: () => void
=======
import {AddMilestoneForm} from '../AddMilestoneForm';
interface MilestoneCreatorProps {;
  onSubmit: (data: any) => Promise<void>,;
  isSubmitting: boolean,;
  onCancel: () => void,;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  projectScope?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  projectStartDate?: string;
  projectEndDate?: string | null;
<<<<<<< HEAD
  projectType?: string
}
export function MilestoneCreator({

export function MilestoneCreator({;
=======
  projectType?: string;
}

export function MilestoneCreator({;

export function MilestoneCreator({;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  onSubmit;
  isSubmitting;
  onCancel;
  projectScope;
  projectStartDate;
  projectEndDate;
<<<<<<< HEAD
  projectType
}: MilestoneCreatorProps) {
  return (
    <AddMilestoneForm
=======
<<<<<<< HEAD
<AddMilestoneForm

=======
<<<<<<< HEAD
    <AddMilestoneForm 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  projectType
}: MilestoneCreatorProps) {
  return (
<<<<<<< HEAD
    <AddMilestoneForm
    <AddMilestoneForm 
=======

    <AddMilestoneForm 

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react',;

import { AddMilestoneForm } from '../AddMilestoneForm',;
;
interface MilestoneCreatorProps {;
  onSubmit:(data:any) => Promise<void>,;
  isSubmitting:boolean,;
  onCancel:() => void,;
  projectScope?:string,;
  projectStartDate?:string,;
  projectEndDate?:string | null,;
  projectType?:string;
}
;

  projectType;
}: MilestoneCreatorProps) {;
<<<<<<< HEAD
  return (
    <AddMilestoneForm

=======


  return (
    <AddMilestoneForm

import React from 'react',;
import { AddMilestoneForm } from '../AddMilestoneForm',;
;
interface MilestoneCreatorProps {;
  onSubmit:(data:any) => Promise<void>,;
  isSubmitting:boolean,;
  onCancel:() => void,;
  projectScope?:string,;
  projectStartDate?:string,;
  projectEndDate?:string | null,;
  projectType?:string;
}
;
export function MilestoneCreator({;
  onSubmit,;
  isSubmitting,;
  onCancel,;
  projectScope,;
  projectStartDate,;
  projectEndDate,;
  projectType;
} MilestoneCreatorProps) {;
  return (;
    <AddMilestoneForm ;
  return (;
    <AddMilestoneForm;
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      onCancel={onCancel}
      projectScope={projectScope}
<<<<<<< HEAD
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
      projectType={projectType}
    />
  )
}
=======
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
      projectType={projectType}
<<<<<<< HEAD

  on_submit: (data: any) => Promise < void>,
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    />;
  on_submit: (data: any) => Promise < void>,
  is_submitting: boolean,
  on_cancel: () => void,
  project_scope?: string;
  projectStartDate?: string;
  projectEndDate?: string | null;
  project_type?: string;
}
export /**
 * MilestoneCreator - Function description
 */
function MilestoneCreator() {
  return (
    <AddMilestoneForm;
      on_submit={on_submit}
      is_submitting={is_submitting}
      on_cancel={on_cancel}
      project_scope={project_scope}
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
      project_type={project_type}
    />);
}
<<<<<<< HEAD
  ),;}
 export function MilestoneCreator ({
  onSubmit, isSubmitting, onCancel, projectScope, projectStartDate, projectEndDate, projectType 
}: MilestoneCreatorProps) {
  return (<AddMilestoneForm onSubmit= {
  onSubmit 
}isSubmitting= {
  isSubmitting 
}onCancel= {
  onCancel 
}projectScope= {
  projectScope 
}projectStartDate= {
  projectStartDate 
}projectEndDate= {
  projectEndDate 
}projectType= {
  projectType 
}/>) 
}
    />
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
