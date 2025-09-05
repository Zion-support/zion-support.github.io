
<<<<<<< HEAD
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
  isLoading?:boolean,;
=======
import { Resume } from "@/types/resume",export interface StepProps {
  id: string,
  label: string
}

export interface NavigationButtonsProps {
  onBack?: () => void,
  onNext?: () => void,
  isNextDisabled?: boolean,
  backLabel?: string,
  nextLabel?: string,
  isLoading?: boolean
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
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
