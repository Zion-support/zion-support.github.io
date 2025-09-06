
import { Resume } from "@/types/resume";
;
export interface StepProps {;
  id:string;
  label:string;
}
;
export interface NavigationButtonsProps {;
  onBack?:() => void;
  onNext?:() => void;
  isNextDisabled?:boolean;
  backLabel?:string;
  nextLabel?:string;
  isLoading?:boolean;}
;
export interface ResumeProgressProps {;
  resume:Resume | null;
  progress:number;
}
;
export interface CreateResumeFormProps {;
  onCreateResume:(title:string) => Promise<void>;
  onCancel:() => void;
  isLoading:boolean;
}
;
export interface EmptyResumeProps {;
  onCreateClick:() => void;
}

export interface StepProps {_id: string;
  label: string;}

export interface NavigationButtonsProps {_onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean;}

export interface ResumeProgressProps {_resume: Resume | null;
  progress: number;}

export interface CreateResumeFormProps {_onCreateResume: (_title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;}

export interface EmptyResumeProps {_onCreateClick: () => void;}
 export interface StepProps {
  id: string;
label: string 
}export interface NavigationButtonsProps {
  onBack?: () => void;
onNext?: () => void;
isNextDisabled?: boolean;
backLabel?: string;
nextLabel?: string;
isLoading?: boolean 
}export interface ResumeProgressProps {
  resume: Resume | null;
progress: number 
}export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
onCancel: () => void;
isLoading: boolean 
}export interface EmptyResumeProps {
  onCreateClick: () => void 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
