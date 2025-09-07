import { Education } from "@/types/resume";
export interface EducationFormProps {
  resumeId: string;
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void;
<<<<<<< HEAD
}
import { Education } from "@/types/resume";
export interface EducationFormProps {
  resumeId: string;
=======
}  resumeId: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  educationEntries: Education[];
  onComplete: () => void;
  onBack: () => void;
}
export interface EducationItemProps {

<<<<<<< HEAD


export interface EducationItemProps {;


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void;
}
<<<<<<< HEAD



export interface EducationFormFieldsProps {;



=======
  education: Education;
  onEdit: (education: Education) => void;
  onDelete: (id: string) => void;
}
export interface EducationFormFieldsProps {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  isEditing: boolean;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Education  } from '@/types / resume';
export interface EducationFormProps {
  resume_id: string;
  education_entries: Education[];
  on_complete: () => void;
<<<<<<< HEAD
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
=======
  on_back: () => void;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
