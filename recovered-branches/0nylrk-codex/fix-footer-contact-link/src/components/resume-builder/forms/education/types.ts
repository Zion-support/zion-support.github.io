
import { Education } from '@/types/resume';
export interface EducationFormProps {
import {Education} from '@/types/resume';
export interface EducationFormProps {;
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void
}
export interface EducationItemProps {

export interface EducationItemProps {;
  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void
}
export interface EducationFormFieldsProps {

export interface EducationFormFieldsProps {;
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;

  onCancel: () => void;
}

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
