import { Resume } from "@/types/resume";
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
export interface StepProps {
  id: string;
  label: string


export interface NavigationButtonsProps {;

  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean;
=======
  id: string;
  label: string

export interface NavigationButtonsProps {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

export interface ResumeProgressProps {
  resume: Resume | null;
<<<<<<< HEAD
  progress: number;
}

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

;
=======
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
  progress: number
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;

<<<<<<< HEAD

  onCancel: () => void;
  isLoading: boolean;
}


=======
  isLoading: boolean;
}

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
  onCreateClick: () => void
}
;

}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}
;

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
