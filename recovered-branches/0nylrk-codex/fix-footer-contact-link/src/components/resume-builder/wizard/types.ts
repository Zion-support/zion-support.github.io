
<<<<<<< HEAD
import { Resume } from "@/types/resume";
=======
import { Resume } from "@/types/resume",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export interface StepProps {
  id: string;
  label: string
<<<<<<< HEAD
}
export interface NavigationButtonsProps {
  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}
<<<<<<< HEAD
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
=======
;
export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}