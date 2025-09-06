




export interface StepProps {
  id: string;
  label: string
}


export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;




export interface StepProps {
  id: string;
  label: string


export interface NavigationButtonsProps {;






  onBack?: () => void;
  onNext?: () => void;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  isNextDisabled?: boolean;



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


}
;
export interface ResumeProgressProps {;
  resume: Resume | null,;
  progress: number;
}





;
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;





}
export interface EmptyResumeProps {

  onCreateClick: () => void
}
;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

