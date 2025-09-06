import React from 'react';
<<<<<<< HEAD
import { AddMilestoneForm } from '../AddMilestoneForm';
interface MilestoneCreatorProps {
<<<<<<< HEAD

  onSubmit: (data: any) => Promise<void>
  isSubmitting: boolean
  onCancel: () => void

=======
import {AddMilestoneForm} from '../AddMilestoneForm';
interface MilestoneCreatorProps {;
  onSubmit: (data: any) => Promise<void>,;
  isSubmitting: boolean,;
  onCancel: () => void,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | null;
  projectType?: string;
}
<<<<<<< HEAD
export function MilestoneCreator({
=======

export function MilestoneCreator(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  onSubmit;
  isSubmitting;
  onCancel;
  projectScope;
  projectStartDate;
  projectEndDate;
  projectType;
}: MilestoneCreatorProps) {;
  return (
    <AddMilestoneForm
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
