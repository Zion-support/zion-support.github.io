
<<<<<<< HEAD
import { Education } from '@/types/resume';
export interface EducationFormProps {
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Education } from '@/types/resume';
export interface EducationFormProps {
=======
import {Education} from '@/types/resume';
export interface EducationFormProps {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void
}
<<<<<<< HEAD
export interface EducationItemProps {
=======
<<<<<<< HEAD
export interface EducationItemProps {
=======

export interface EducationItemProps {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void
}
<<<<<<< HEAD
export interface EducationFormFieldsProps {
=======
<<<<<<< HEAD
export interface EducationFormFieldsProps {
=======

export interface EducationFormFieldsProps {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;

  onCancel: () => void;
}
<<<<<<< HEAD

=======
<<<<<<< HEAD

import { Education  } from '@/types / resume';
export interface EducationFormProps {
  resume_id: string;
  education_entries: Education[];
  on_complete: () => void;
  on_back: () => void;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
