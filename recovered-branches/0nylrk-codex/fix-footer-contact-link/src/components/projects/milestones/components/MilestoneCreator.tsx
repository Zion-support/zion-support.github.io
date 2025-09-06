
import React from 'react';
<<<<<<< HEAD
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
