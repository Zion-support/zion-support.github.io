



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void
}

export interface EducationItemProps {

export interface EducationItemProps {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void
}

export interface EducationFormFieldsProps {

export interface EducationFormFieldsProps {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;

  onCancel: () => void;
}



import { Education  } from '@/types / resume';
export interface EducationFormProps {
  resume_id: string;
  education_entries: Education[];
  on_complete: () => void;
  on_back: () => void;

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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
