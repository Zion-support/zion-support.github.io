<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import {Education} from '@/types/resume';
export interface EducationFormProps {;
<<<<<<< HEAD


  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void
}
=======
=======
import { Education } from "@/types/resume";
export interface EducationFormProps {
>>>>>>> main
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void;
}
export interface EducationItemProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



export interface EducationItemProps {;
<<<<<<< HEAD


  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void
}
=======
  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void;
}
export interface EducationFormFieldsProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



export interface EducationFormFieldsProps {;
<<<<<<< HEAD


=======
import { Education } from '@/types/resume';
export interface EducationFormProps {
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
onBack: () => void
}
export interface EducationItemProps {
  education: Education;
  onEdit: (education: Education) => void;
onDelete: (id: string) => void
}
export interface EducationFormFieldsProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Education  } from '@/types / resume';
export interface EducationFormProps {
  resume_id: string;
  education_entries: Education[];
  on_complete: () => void;
  on_back: () => void;

<<<<<<< HEAD
=======
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Education } from '@/types/resume',;
export interface EducationFormProps {;
  resumeId: string,;
  educationEntries: Education[],;
  onComplete: () => void,;
  onBack: () => void;

<<<<<<< HEAD
}
export interface EducationItemProps {
  education: Education;
  on_edit: (education: Education) => void;
  on_delete: (id: string) => void;
}
export interface EducationFormFieldsProps {
  is_editing: boolean;
  on_submit: (data: any) => Promise < void>;
  on_cancel: () => void;
}

;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

}
;
export interface EducationItemProps {;
  education: Education,;
  onEdit: (education: Education) => void,;
  onDelete: (id: string) => void;
}
;
export interface EducationFormFieldsProps {;
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
