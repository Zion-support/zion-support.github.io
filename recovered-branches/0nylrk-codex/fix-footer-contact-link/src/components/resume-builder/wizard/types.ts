
import { Resume  } from '@/types / resume';

export interface StepProps {
  id: string;
  label: string
}
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;
import { Resume } from "@/types/resume";
import { Resume } from "@/types/resume",
import {Resume} from "@/types/resume";
import { Resume } from "@/types/resume",

=======
import {Resume} from "@/types/resume";export interface StepProps {
  id: string;
  label: string

export interface NavigationButtonsProps {;
  onBack?: () => void;
  onNext?: () => void;
=======

export interface NavigationButtonsProps {;

  onBack?: () => void;
  onNext?: () => void;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======}

export interface ResumeProgressProps {
  resume: Resume | null,
  progress: number
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
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
=======}
;
export interface ResumeProgressProps {;
  resume: Resume | null,;
  progress: number;
}
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export interface EmptyResumeProps {

  onCreateClick: () => void
}
;

  onCreateClick: () => void;
}
}
;

=======}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
  onCreateClick: () => void
}
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
