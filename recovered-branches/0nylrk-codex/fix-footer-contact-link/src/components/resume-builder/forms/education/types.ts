
<<<<<<< HEAD
import { Education } from '@/types/resume',
export interface EducationFormProps {
  resumeId: string,
  educationEntries: Education[],
  onComplete: () => void,
  onBack: () => void
}

export interface EducationItemProps {
  education: Education,
  onEdit: (education: Education) => void,
  onDelete: (id: string) => void
}

export interface EducationFormFieldsProps {
  isEditing: boolean,
  onSubmit: (data: any) => Promise<void>,
  onCancel: () => void
}
=======

export interface EducationFormProps {_resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void;}

export interface EducationItemProps {_education: Education;
  onEdit: (_education: Education) => void;
  onDelete: (_id: string) => void;}

export interface EducationFormFieldsProps {_isEditing: boolean;
  onSubmit: (_data: unknown) => Promise<void>;
  onCancel: () => void;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
