<<<<<<< HEAD
import { Education } from '@/types/resume';

export interface EducationFormProps {
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void;
}

export interface EducationItemProps {
  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void;
}

export interface EducationFormFieldsProps {
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}
=======
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
