<<<<<<< HEAD
import { Resume  } from '@/types / resume';
export interface StepProps {
  id: string;
  label: string
}
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;
  isNextDisabled?: boolean;
  back_label?: string;
  next_label?: string;
  is_loading?: boolean;
}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise < void>;
  on_cancel: () => void;
  is_loading: boolean;
=======

import { Resume } from "@/types/resume",;
;
export interface StepProps {;
  id:string,;
  label:string;
}
;
export interface NavigationButtonsProps {;
  onBack?:() => void,;
  onNext?:() => void,;
  isNextDisabled?:boolean,;
  backLabel?:string,;
  nextLabel?:string,;
  isLoading?:boolean,;}
;
export interface ResumeProgressProps {;
  resume:Resume | null,;
  progress:number;
}
;
export interface CreateResumeFormProps {;
  onCreateResume:(title:string) => Promise<void>,;
  onCancel:() => void,;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
