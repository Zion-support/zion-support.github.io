
import React from 'react';

interface MilestoneCreatorProps {_onSubmit: (_data: unknown) => Promise<void>;
  isSubmitting: boolean;
  onCancel: () => void;
  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | null;
  projectType?: string;}

export function MilestoneCreator(_{_onSubmit, _isSubmitting, _onCancel, _projectScope, _projectStartDate, _projectEndDate, _projectType}: MilestoneCreatorProps) {_return (
    <AddMilestoneForm 
      onSubmit={onSubmit}
      isSubmitting={_isSubmitting}
      onCancel={_onCancel}
      projectScope={_projectScope}
      projectStartDate={_projectStartDate}
      projectEndDate={_projectEndDate}
      projectType={_projectType}
    />
  );
}
