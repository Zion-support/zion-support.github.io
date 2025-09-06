
import React from 'react';
import { AddMilestoneForm } from '../AddMilestoneForm';
interface MilestoneCreatorProps {
<<<<<<< HEAD
  onSubmit: (data: any) => Promise<void>;
  isSubmitting: boolean;
  onCancel: () => void;
=======
  onSubmit: (data: any) => Promise<void>
  isSubmitting: boolean
  onCancel: () => void
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | null;
<<<<<<< HEAD
  projectType?: string
}
=======
  projectType?: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function MilestoneCreator({
  onSubmit;
  isSubmitting;
  onCancel;
  projectScope;
  projectStartDate;
  projectEndDate;
  projectType
}: MilestoneCreatorProps) {
  return (
    <AddMilestoneForm
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      onCancel={onCancel}
      projectScope={projectScope}
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
      projectType={projectType}
    />
  )
}