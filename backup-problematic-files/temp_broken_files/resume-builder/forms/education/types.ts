
import { Education } from '@/types/resume';
;
export interface EducationFormProps {;
  resumeId:string;
  educationEntries:Education[];
  onComplete:() => void;
  onBack:() => void;}
;
export interface EducationItemProps {;
  education:Education;
  onEdit:(education:Education) => void;
  onDelete:(id:string) => void;
}
;
export interface EducationFormFieldsProps {;
  isEditing:boolean;
  onSubmit:(data:any) => Promise<void>;
  onCancel:() => void;
} 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
