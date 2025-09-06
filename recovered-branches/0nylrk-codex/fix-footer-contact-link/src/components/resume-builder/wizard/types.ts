<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { Resume } from "@/types/resume";
import { Resume } from "@/types/resume",
import {Resume} from "@/types/resume";
export interface StepProps {
  id: string;
  label: string
=======
<<<<<<< HEAD
<<<<<<< HEAD

import { Resume  } from '@/types / resume';

=======
<<<<<<< HEAD

<<<<<<< HEAD
import {Resume} from "@/types/resume";
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Resume } from "@/types/resume";
export interface StepProps {};
  id: string;
  label: string;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export interface NavigationButtonsProps {};
export interface NavigationButtonsProps {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface NavigationButtonsProps {
=======
export interface NavigationButtonsProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  on_back?: () => void;
  on_next?: () => void;
"
import { Resume } from "@/types/resume",
";
import {Resume} from "@/types/resume";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface StepProps {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  id: string;
  label: string

export interface NavigationButtonsProps {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



export interface StepProps {};
  id: string;
  label: string;
export interface NavigationButtonsProps {;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
  backLabel?: string;
  nextLabel?: string;
<<<<<<< HEAD
  isLoading?: boolean
=======
<<<<<<< HEAD

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

export interface ResumeProgressProps {
  resume: Resume | null,
  progress: number
=======
  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}

export interface ResumeProgressProps {
  resume: Resume | null;
<<<<<<< HEAD
=======
  isLoading?: boolean;
}

export interface ResumeProgressProps {};
  resume: Resume | null;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  progress: number;
}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  onCancel: () => void,
  isLoading: boolean
=======
import { Resume } from "@/types/resume",
export interface StepProps {
  id: string,
  label: string
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
<<<<<<< HEAD
  onCancel: () => void,
  isLoading: boolean
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Resume } from "@/types/resume",;
export interface StepProps {;
  id: string,;
  label: string;
}
=======
  onCancel: () => void;
  isLoading: boolean;
}



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
export interface ResumeProgressProps {;
  resume: Resume | null,;
<<<<<<< HEAD
  progress: number;
=======
  onCancel: () => void;
  isLoading: boolean;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
export interface ResumeProgressProps {
  resume: Resume | null;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  progress: number
}
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
export interface ResumeProgressProps {;
  resume: Resume | null,;
  progress: number
=======
  progress: number
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;

<<<<<<< HEAD
=======



  onCancel: () => void;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  isLoading: boolean;
}

}
export interface EmptyResumeProps {};
  onCreateClick: () => void;
}
;

}
export interface EmptyResumeProps {};
  onCreateClick: () => void;
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD


}
export interface EmptyResumeProps {};
  onCreateClick: () => void;
}
<<<<<<< HEAD
  onCreateClick: () => void
}
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export interface EmptyResumeProps {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  onCreateClick: () => void;
}
;

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}
export interface EmptyResumeProps {};
  onCreateClick: () => void;
}
;


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
