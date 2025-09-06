






import {Education} from '@/types/resume';
export interface EducationFormProps {;



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



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






import { Education  } from '@/types / resume';
export interface EducationFormProps {
  resume_id: string;
  education_entries: Education[];
  on_complete: () => void;
  on_back: () => void;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



