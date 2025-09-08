
import {Resume} from "@/types/resume";
export interface StepProps {
  id: string;
  label: string

import { Resume } from "@/types/resume";
export interface StepProps {};
  id: string;
  label: string;

}
export interface NavigationButtonsProps {};
export interface NavigationButtonsProps {;

  on_back?: () => void;
  on_next?: () => void;

export interface StepProps {

  id: string;
  label: string





export interface NavigationButtonsProps {;
  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;

}

export interface ResumeProgressProps {
  resume: Resume | null;


  onCreateResume: (title: string) => Promise < void>;
  on_cancel: () => void;
  is_loading: boolean;

}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}

}

export interface ResumeProgressProps {
  resume: Resume | null,
  progress: number

}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;


;
export interface NavigationButtonsProps {;
  onBack?: () => void,;
  onNext?: () => void,;
  isNextDisabled?: boolean,;
  backLabel?: string,;
  nextLabel?: string,;
  isLoading?: boolean;



}
export interface ResumeProgressProps {
  resume: Resume | null;

  progress: number;

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;

}

}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}

export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
;

}

  progress: number
}
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean

;
export interface ResumeProgressProps {;
  resume: Resume | null,;

  progress: number;
}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;



}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
  onCreateClick: () => void
}
;






