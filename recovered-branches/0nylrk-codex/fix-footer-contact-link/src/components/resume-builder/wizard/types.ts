import { Resume } from "@/types/resume";
export interface StepProps {
  id: string;
  label: string;
}
<<<<<<< HEAD
export interface NavigationButtonsProps {

export interface NavigationButtonsProps {;
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;

import { Resume } from "@/types/resume",

import {Resume} from "@/types/resume";
  id: string;
  label: string

export interface NavigationButtonsProps {;
=======

export interface NavigationButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
}

export interface ResumeProgressProps {
  resume: Resume | null;
<<<<<<< HEAD
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
  progress: number
};
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;

  isLoading: boolean;
}

}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
;

}
export interface EmptyResumeProps {

  onCreateClick: () => void;
}
}
}
=======
  progress: number;
}

export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

export interface EmptyResumeProps {
  onCreateClick: () => void;
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-59b1
