<<<<<<< HEAD
<<<<<<< HEAD

import { Resume } from "@/types/resume";
import { Resume } from "@/types/resume",
import {Resume} from "@/types/resume";
export interface StepProps {
  id: string;
  label: string
import { Resume } from "@/types/resume";
export interface StepProps {};
  id: string;
  label: string;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export interface NavigationButtonsProps {};
export interface NavigationButtonsProps {;
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface StepProps {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface StepProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  label: string

export interface NavigationButtonsProps {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}

export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;

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
;

import { Resume } from "@/types/resume";"
export interface StepProps {
  // TODO: Implement
}
  id: string;,
  label: string;

}

export interface NavigationButtonsProps {

  // TODO: Implement
export interface NavigationButtonsProps {;
  // TODO: Implement
  on_back?: () => void;
  on_next?: () => void;
"
import { Resume } from "@/types/resume",""
import {Resume} from "@/types/resume";"
  // TODO: Implement

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
<<<<<<< HEAD
  backLabel?: string;
  nextLabel?: string;
<<<<<<< HEAD
  isLoading?: boolean
}

export interface ResumeProgressProps {
  resume: Resume | null,
  progress: number
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}

export interface ResumeProgressProps {
  resume: Resume | null;

  progress: number;
}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
<<<<<<< HEAD
<<<<<<< HEAD
  onCancel: () => void,
  isLoading: boolean
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

=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export interface ResumeProgressProps {
  resume: Resume | null;
=======
  isLoading?: boolean;}

}

export interface ResumeProgressProps {

  // TODO: Implement
  resume: Resume | null;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  progress: number;

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
isLoading: boolean

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  isLoading: boolean;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}

export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
;
export interface ResumeProgressProps {;
  resume: Resume | null,;
progress: number;
}

  progress: number
}
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
export interface ResumeProgressProps {;
  resume: Resume | null,;
  progress: number
=======
  progress: number
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;

<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export interface EmptyResumeProps {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
  onCreateClick: () => void
}
;

}
export interface EmptyResumeProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  onCreateClick: () => void;
}
;
</void>
</void>"
pr-12325

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

}
export interface EmptyResumeProps {};
  onCreateClick: () => void;
}
;

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
