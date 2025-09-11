
import { Resume  } from '@/types / resume';

export interface StepProps {
  id: string;
  label: string
}
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;
<<<<<<< HEAD

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
=======
=======

import { Resume } from "@/types/resume",

=======
import {Resume} from "@/types/resume";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface StepProps {
  id: string;
  label: string

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export interface NavigationButtonsProps {;
  onBack?: () => void;
  onNext?: () => void;
=======

export interface NavigationButtonsProps {;

  onBack?: () => void;
  onNext?: () => void;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

=======
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

export interface ResumeProgressProps {
  resume: Resume | null,
  progress: number
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
<<<<<<< HEAD
<<<<<<< HEAD
onCancel: () => void,
  isLoading: boolean
=======
  onCancel: () => void,
  isLoading: boolean
=======
=======
  onCancel: () => void,
  isLoading: boolean
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Resume } from "@/types/resume",
export interface StepProps {
  id: string,
  label: string

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
;
export interface ResumeProgressProps {;
  resume: Resume | null,;
  progress: number;
}
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export interface EmptyResumeProps {

  onCreateClick: () => void
}
;

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
