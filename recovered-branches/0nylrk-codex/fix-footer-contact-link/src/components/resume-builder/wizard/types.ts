import { Resume } from "@/types/resume";
export interface StepProps {
  id: string;
  label: string;
}


export interface NavigationButtonsProps {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean;
}

export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number;
}

export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

}
export interface EmptyResumeProps {};
  onCreateClick: () => void;
}
;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export interface EmptyResumeProps {

  onCreateClick: () => void
}
;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
