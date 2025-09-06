



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  onBack?: () => void;
  onNext?: () => void;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  isNextDisabled?: boolean;

  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean

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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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
export interface ResumeProgressProps {
  resume: Resume | null;
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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
