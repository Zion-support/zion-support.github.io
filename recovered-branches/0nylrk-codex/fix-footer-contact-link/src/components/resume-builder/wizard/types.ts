
import { Resume  } from '@/types / resume';

export interface StepProps {
  id: string;
  label: string
}
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;

import { Resume } from "@/types/resume",

import { Resume } from "@/types/resume";
import { Resume } from "@/types/resume",
import {Resume} from "@/types/resume";
<<<<<<< HEAD
export interface StepProps {
  id: string;
  label: string
}
export interface NavigationButtonsProps {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface StepProps {
  id: string;
  label: string

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export interface NavigationButtonsProps {;
  onBack?: () => void;
  onNext?: () => void;
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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
<<<<<<< HEAD
onCancel: () => void,
  isLoading: boolean
=======
  onCancel: () => void,
  isLoading: boolean
=======
import { Resume } from "@/types/resume",
export interface StepProps {
  id: string,
  label: string

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
;
export interface ResumeProgressProps {;
  resume: Resume | null,;
  progress: number;
}
<<<<<<< HEAD
}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}

export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;

<<<<<<< HEAD
}
export interface EmptyResumeProps {

  onCreateClick: () => void
}
;

}
export interface EmptyResumeProps {

  onCreateClick: () => void;
}
}
;

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
  onCreateClick: () => void
}
;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
