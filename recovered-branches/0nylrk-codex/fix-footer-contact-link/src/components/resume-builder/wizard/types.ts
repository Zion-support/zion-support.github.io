import { Resume  } from '@/types / resume';
export interface StepProps {
  id: string;
  label: string
}
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;
import {Resume} from "@/types/resume";
export interface StepProps {
  id: string;
  label: string


export interface NavigationButtonsProps {;

  onBack?: () => void;
  onNext?: () => void;
import {Resume} from "@/types/resume";
  isNextDisabled?: boolean;

  back_label?: string;
  next_label?: string;
  is_loading?: boolean;

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
  onCancel: () => void,
  isLoading: boolean
import { Resume } from "@/types/resume",
export interface StepProps {
  id: string,
  label: string

import { Resume } from "@/types/resume",;
export interface StepProps {;
  id: string,;
  label: string;
}
;
export interface NavigationButtonsProps {;
  onBack?: () => void,;
  onNext?: () => void,;
  isNextDisabled?: boolean,;
  backLabel?: string,;
  nextLabel?: string,;
  isLoading?: boolean;

}
;
export interface ResumeProgressProps {;
  resume: Resume | null,;
  progress: number;
}

;
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;


}
export interface EmptyResumeProps {

  onCreateClick: () => void
}
;

