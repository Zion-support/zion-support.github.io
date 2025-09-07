import {Education} from '@/types/resume';
export interface EducationFormProps {;

export interface EducationFormProps {

<<<<<<< HEAD
import { Education } from '@/types/resume';
export interface EducationFormProps {
import {Education} from '@/types/resume';
export interface EducationFormProps {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;

import { Education } from "@/types/resume";
export interface EducationFormProps {};
  resumeId: string;

  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void;
}
<<<<<<< HEAD
export interface EducationItemProps {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  education: Education;

}
  resumeId: string;,
  educationEntries: Education[];
  onComplete: () => void;,
  onBack: () => void;
}"
  // TODO: Implement
export interface EducationItemProps {
  // TODO: Implement
export interface EducationItemProps {;

  education: Education;,
  onEdit: (education: Education) => void;,
  onDelete: (id: string) => void;

export interface EducationFormFieldsProps {;
<<<<<<< HEAD
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
=======

  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}

import { Education  } from '@/types / resume';
export interface EducationFormProps {};
  resume_id: string;
  education_entries: Education[];
  on_complete: () => void;

import { Education } from '@/types/resume',;
export interface EducationFormProps {;
  resumeId: string,;
  educationEntries: Education[],;
  onComplete: () => void,;
  onBack: () => void;

;

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