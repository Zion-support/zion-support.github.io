<<<<<<< HEAD

<<<<<<< HEAD
import {Resume} from "@/types/resume";
=======
import { Resume } from "@/types/resume";
>>>>>>> main
export interface StepProps {
  id: string;
  label: string;
}
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;
=======

import { Resume } from "@/types/resume",

=======
import {Resume} from "@/types/resume";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface StepProps {
  id: string;
  label: string


export interface NavigationButtonsProps {;

  onBack?: () => void;
  onNext?: () => void;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  isNextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean;
}

export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number;
}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
<<<<<<< HEAD
  onCancel: () => void,
  isLoading: boolean
=======
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

=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  onCancel: () => void;
  isLoading: boolean;
>>>>>>> main
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
