
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { Resume } from "@/types/resume";
import { Resume } from "@/types/resume",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {Resume} from "@/types/resume";
export interface StepProps {
  id: string;
  label: string
<<<<<<< HEAD


export interface NavigationButtonsProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
}
export interface NavigationButtonsProps {

export interface NavigationButtonsProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  onBack?: () => void;
  onNext?: () => void;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  isNextDisabled?: boolean;
<<<<<<< HEAD
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

export interface ResumeProgressProps {
  resume: Resume | null,
  progress: number
=======
import { Resume } from "@/types/resume";
export interface StepProps {
  id: string;
  label: string

}
export interface NavigationButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;
isLoading?: boolean
}

export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
<<<<<<< HEAD
  onCancel: () => void,
  isLoading: boolean
import { Resume } from "@/types/resume",
export interface StepProps {
  id: string,
  label: string
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
onCancel: () => void,
  isLoading: boolean
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
;
export interface ResumeProgressProps {;
  resume: Resume | null,;
  progress: number;
}
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}

export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
<<<<<<< HEAD

<<<<<<< HEAD
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
=======
}
export interface EmptyResumeProps {

  onCreateClick: () => void;
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
  onCreateClick: () => void
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
