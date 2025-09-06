export interface StepProps {
  id: string;
  label: string
}
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;
  isNextDisabled?: boolean;
}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}
export interface CreateResumeFormProps {
}
export interface EmptyResumeProps {
  onCreateClick: () => void;
}