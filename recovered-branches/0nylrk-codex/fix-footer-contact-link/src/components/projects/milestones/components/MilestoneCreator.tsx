<<<<<<< HEAD

import {AddMilestoneForm} from '../AddMilestoneForm';
interface MilestoneCreatorProps {;
  onSubmit: (data: any) => Promise<void>,;
  isSubmitting: boolean,;
  onCancel: () => void,;

  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | null;
  projectType?: string;
}


export function MilestoneCreator(): any ({;

=======

=======
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | null;
  projectType?: string;
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export function MilestoneCreator({;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export function MilestoneCreator(): any ({;

import React from 'react';
import { AddMilestoneForm } from '../AddMilestoneForm';
interface MilestoneCreatorProps {

  onSubmit: (data: any) => Promise<void>
  isSubmitting: boolean
  onCancel: () => void

  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | null;
  projectType?: string
}
export function MilestoneCreator({

export function MilestoneCreator({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  onSubmit;
  isSubmitting;
  onCancel;
  projectScope;
  projectStartDate;
  projectEndDate;
<<<<<<< HEAD
=======
    <AddMilestoneForm 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  projectType
}: MilestoneCreatorProps) {
  return (
<<<<<<< HEAD

    <AddMilestoneForm 

=======
=======
    <AddMilestoneForm
    <AddMilestoneForm 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from 'react',;
import { AddMilestoneForm } from '../AddMilestoneForm',;
interface MilestoneCreatorProps {;
  onSubmit: (data: any) => Promise<void>,;
  isSubmitting: boolean,;
  onCancel: () => void,;
  projectScope?: string,;
  projectStartDate?: string,;
  projectEndDate?: string | null,;
  projectType?: string;
}
;
export function MilestoneCreator({;
  onSubmit,;
  isSubmitting,;
  onCancel,;
  projectScope,;
  projectStartDate;
  projectEndDate;
  projectType;
}: MilestoneCreatorProps) {;
<<<<<<< HEAD
  return (;
    <AddMilestoneForm;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      onCancel={onCancel}
      projectScope={projectScope}
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
      projectType={projectType}
<<<<<<< HEAD

    />;
  );
}

=======
=======
    />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
