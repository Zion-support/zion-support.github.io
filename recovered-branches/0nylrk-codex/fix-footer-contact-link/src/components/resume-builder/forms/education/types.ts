
<<<<<<< HEAD
import { Education } from '@/types/resume',;
;
export interface EducationFormProps {;
  resumeId:string,;
  educationEntries:Education[],;
  onComplete:() => void,;
  onBack:() => void;
=======
import { Education } from '@/types/resume',
export interface EducationFormProps {
  resumeId: string,
  educationEntries: Education[],
  onComplete: () => void,
  onBack: () => void
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface EducationItemProps {;
  education:Education,;
  onEdit:(education:Education) => void,;
  onDelete:(id:string) => void;
}
<<<<<<< HEAD
;
export interface EducationFormFieldsProps {;
  isEditing:boolean,;
  onSubmit:(data:any) => Promise<void>,;
  onCancel:() => void;
}
=======

export interface EducationFormFieldsProps {
  isEditing: boolean,
  onSubmit: (data: any) => Promise<void>,
  onCancel: () => void
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
