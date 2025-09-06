<<<<<<< HEAD

<<<<<<< HEAD
import { Resume } from "@/types/resume";
import { Resume } from "@/types/resume",
import {Resume} from "@/types/resume";
=======
import { Resume  } from '@/types / resume';

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export interface StepProps {
  id: string;
  label: string
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface NavigationButtonsProps {

export interface NavigationButtonsProps {;
=======
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;
<<<<<<< HEAD
=======

import { Resume } from "@/types/resume",

=======
import {Resume} from "@/types/resume";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface StepProps {
  id: string;
  label: string


export interface NavigationButtonsProps {;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}
export interface CreateResumeFormProps {
<<<<<<< HEAD

  onCreateResume: (title: string) => Promise < void>;
  on_cancel: () => void;
  is_loading: boolean;

}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
;
export interface ResumeProgressProps {;
  resume: Resume | null,;
  progress: number;
}
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
;
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
<<<<<<< HEAD
}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
  onCreateClick: () => void
}
;
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export interface EmptyResumeProps {

  onCreateClick: () => void
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
