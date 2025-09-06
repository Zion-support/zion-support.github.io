<<<<<<< HEAD
import React from 'react';
import { AddMilestoneForm } from '../AddMilestoneForm';

interface MilestoneCreatorProps {
  onSubmit: (data: any) => Promise<void>;
  isSubmitting: boolean;
  onCancel: () => void;
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | null;
  projectType?: string;
}

export function MilestoneCreator({
  onSubmit,
  isSubmitting,
  onCancel,
  projectScope,
  projectStartDate,
  projectEndDate,
  projectType,
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
  );
}
=======
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
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
