
<<<<<<< HEAD
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
>>>>>>> main

  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | null;
<<<<<<< HEAD
  projectType?: string
}
<<<<<<< HEAD
export function MilestoneCreator({
=======

export function MilestoneCreator({;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  projectType?: string;
}


export function MilestoneCreator(): any ({;

=======



export function MilestoneCreator({;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
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
<<<<<<< HEAD
    <AddMilestoneForm
=======
    <AddMilestoneForm 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  projectType
}: MilestoneCreatorProps) {
  return (

    <AddMilestoneForm 

>>>>>>> main
=======
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
  return (;
    <AddMilestoneForm;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      onCancel={onCancel}
      projectScope={projectScope}
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
      projectType={projectType}
<<<<<<< HEAD
    />
  )
}
=======

    />;
  );
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
