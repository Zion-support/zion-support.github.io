<<<<<<< HEAD
=======
import { Resume } from "@/types/resume";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export interface StepProps {
  id: string;
  label: string;
}
export interface NavigationButtonsProps {

export interface NavigationButtonsProps {;
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;

import { Resume } from "@/types/resume",

import {Resume} from "@/types/resume";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface StepProps {
  id: string;
  label: string


export interface NavigationButtonsProps {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
<<<<<<< HEAD
}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
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
=======
  backLabel?: string;
  nextLabel?: string;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  isLoading?: boolean;
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
  progress: number;
}
=======
  progress: number;
}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
;
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onCancel: () => void;
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
;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
  onCreateClick: () => void
}
;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
;

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
