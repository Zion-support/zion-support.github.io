import { Education } from "@/types/resume";
export interface EducationFormProps {
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void;
}
=======
=======
import { Education } from "@/types/resume";
export interface EducationFormProps {

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;

import { Education } from "@/types/resume";
export interface EducationFormProps {};
  resumeId: string;

  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void;
<<<<<<< HEAD
}






export interface EducationItemProps {;

  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void;
}


=======


>>>>>>> origin/cursor/delete-old-data-records-6bba

  education: Education;,
  onEdit: (education: Education) => void;,
  onDelete: (id: string) => void;

export interface EducationFormFieldsProps {;
<<<<<<< HEAD



=======
import { Education } from '@/types/resume';
export interface EducationFormProps {
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
onBack: () => void
}

  education: Education;

}
  resumeId: string;,
  educationEntries: Education[];
  onComplete: () => void;,
  onBack: () => void;
}"
  // TODO: Implement
export interface EducationItemProps {

>>>>>>> origin/cursor/delete-old-data-records-6bba
  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Education  } from '@/types / resume';
export interface EducationFormProps {};
  resume_id: string;
  education_entries: Education[];
  on_complete: () => void;

<<<<<<< HEAD
  on_back: () => void;




=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Education } from '@/types/resume',;
export interface EducationFormProps {;
  resumeId: string,;
  educationEntries: Education[],;
  onComplete: () => void,;
  onBack: () => void;

<<<<<<< HEAD



=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
