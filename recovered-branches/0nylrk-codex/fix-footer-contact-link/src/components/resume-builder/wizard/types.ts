
<<<<<<< HEAD

import {Resume} from "@/types/resume";
=======
import { Resume  } from '@/types / resume';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

export interface StepProps {
  id: string;
  label: string
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  onBack?: () => void;
  onNext?: () => void;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  isNextDisabled?: boolean;
<<<<<<< HEAD
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean

=======

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
=======

=======
}

export interface ResumeProgressProps {
  resume: Resume | null,
  progress: number
}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void,
  isLoading: boolean
=======
import { Resume } from "@/types/resume",
export interface StepProps {
  id: string,
  label: string

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
=======
=======
}
;
export interface ResumeProgressProps {;
  resume: Resume | null,;
  progress: number;
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;

<<<<<<< HEAD
}
export interface EmptyResumeProps {

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export interface EmptyResumeProps {

  onCreateClick: () => void
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
