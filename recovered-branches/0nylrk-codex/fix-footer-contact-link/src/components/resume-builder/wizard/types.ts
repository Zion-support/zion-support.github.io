import { Resume  } from '@/types / resume';
export interface StepProps {
  id: string;
  label: string;
}
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;
  isNextDisabled?: boolean;
  back_label?: string;
  next_label?: string;
  is_loading?: boolean;
}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number;
}
export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise < void>;
  on_cancel: () => void;
  is_loading: boolean;
}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}