
<<<<<<< HEAD
<<<<<<< HEAD
import { Education } from '@/types/resume';
export interface EducationFormProps {
=======
import {Education} from '@/types/resume';
export interface EducationFormProps {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void
}
<<<<<<< HEAD
export interface EducationItemProps {
=======

export interface EducationItemProps {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void
}
<<<<<<< HEAD
export interface EducationFormFieldsProps {
=======

export interface EducationFormFieldsProps {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;

  onCancel: () => void;
}
<<<<<<< HEAD

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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
