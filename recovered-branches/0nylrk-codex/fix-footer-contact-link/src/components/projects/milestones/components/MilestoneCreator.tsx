
import React from 'react';
import { AddMilestoneForm } from '../AddMilestoneForm';
interface MilestoneCreatorProps {

  onSubmit: (data: any) => Promise<void>
  isSubmitting: boolean
  onCancel: () => void

  projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | null;
  projectType?: string;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export function MilestoneCreator(): any ({;

<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======



export function MilestoneCreator({;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  onSubmit;
  isSubmitting;
  onCancel;
  projectScope;
  projectStartDate;
  projectEndDate;

  projectType
}: MilestoneCreatorProps) {
  return (

<<<<<<< HEAD
    <AddMilestoneForm
    <AddMilestoneForm 


=======
    <AddMilestoneForm 

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      onCancel={onCancel}
      projectScope={projectScope}
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
      projectType={projectType}

    />;
  );
}


