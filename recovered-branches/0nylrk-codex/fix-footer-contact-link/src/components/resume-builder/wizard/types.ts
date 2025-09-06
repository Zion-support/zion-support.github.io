<<<<<<< HEAD

import { Resume } from "@/types/resume";
=======
import { Resume  } from '@/types / resume';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface StepProps {
  id: string;
  label: string
}
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;
  isNextDisabled?: boolean;
<<<<<<< HEAD
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean
=======
  back_label?: string;
  next_label?: string;
  is_loading?: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}
export interface CreateResumeFormProps {
<<<<<<< HEAD
  onCreateResume: (title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean
=======
  onCreateResume: (title: string) => Promise < void>;
  on_cancel: () => void;
  is_loading: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}