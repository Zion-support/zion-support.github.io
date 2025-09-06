
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
