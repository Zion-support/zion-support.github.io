
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void
}
  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void
}
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

;
