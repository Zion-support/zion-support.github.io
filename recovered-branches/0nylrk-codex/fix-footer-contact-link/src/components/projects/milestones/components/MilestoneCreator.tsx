
<<<<<<< HEAD
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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