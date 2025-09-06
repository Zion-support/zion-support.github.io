
<<<<<<< HEAD

<<<<<<< HEAD
=======
import {Education} from '@/types/resume';
export interface EducationFormProps {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void
}
<<<<<<< HEAD

=======



export interface EducationItemProps {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void
}
<<<<<<< HEAD

=======



export interface EducationFormFieldsProps {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;

  onCancel: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

import { Education  } from '@/types / resume';
export interface EducationFormProps {
  resume_id: string;
  education_entries: Education[];
  on_complete: () => void;
  on_back: () => void;
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Education } from '@/types/resume',;
export interface EducationFormProps {;
  resumeId: string,;
  educationEntries: Education[],;
  onComplete: () => void,;
  onBack: () => void;
<<<<<<< HEAD

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

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
