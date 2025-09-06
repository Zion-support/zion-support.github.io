
import { Resume } from "@/types/resume";
import { Resume } from "@/types/resume",
import {Resume} from "@/types/resume";
export interface StepProps {
  id: string;
  label: string
}
export interface NavigationButtonsProps {

export interface NavigationButtonsProps {;
  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean
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
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
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
  onCreateClick: () => void;
}
  onCreateClick: () => void
}
;
