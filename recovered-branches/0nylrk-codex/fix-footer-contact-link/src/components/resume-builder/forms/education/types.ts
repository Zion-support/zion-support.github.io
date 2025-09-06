
<<<<<<< HEAD
import { Education } from '@/types/resume';
export interface EducationFormProps {
import {Education} from '@/types/resume';
export interface EducationFormProps {;
=======

import {Education} from '@/types/resume';
export interface EducationFormProps {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void
}
<<<<<<< HEAD
export interface EducationItemProps {

export interface EducationItemProps {;
=======



export interface EducationItemProps {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void
}
<<<<<<< HEAD
export interface EducationFormFieldsProps {

export interface EducationFormFieldsProps {;
=======



export interface EducationFormFieldsProps {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;

  onCancel: () => void;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======


import { Education  } from '@/types / resume';
export interface EducationFormProps {
  resume_id: string;
  education_entries: Education[];
  on_complete: () => void;
  on_back: () => void;
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { Education } from '@/types/resume',;
export interface EducationFormProps {;
  resumeId: string,;
  educationEntries: Education[],;
  onComplete: () => void,;
  onBack: () => void;

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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
