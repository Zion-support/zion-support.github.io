
<<<<<<< HEAD

  projectStartDate?: string;
  projectEndDate?: string | null;

  projectType?: string;
}

=======
projectScope?: string;
  projectStartDate?: string;
  projectEndDate?: string | null;
  projectType?: string
}
export function MilestoneCreator({

export function MilestoneCreator({;
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function MilestoneCreator({;

export function MilestoneCreator({;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onSubmit;
  isSubmitting;
  onCancel;
  projectScope;
  projectStartDate;
  projectEndDate;
<<<<<<< HEAD


=======

<AddMilestoneForm

>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <AddMilestoneForm

<<<<<<< HEAD
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



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      onCancel={onCancel}
      projectScope={projectScope}
<<<<<<< HEAD

      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
      projectType={projectType}



=======
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
      projectType={projectType}


  on_submit: (data: any) => Promise < void>,
>>>>>>> origin/cursor/delete-old-data-records-6bba
