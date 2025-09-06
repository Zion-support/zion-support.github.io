
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
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;

  onCancel: () => void;
}

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
