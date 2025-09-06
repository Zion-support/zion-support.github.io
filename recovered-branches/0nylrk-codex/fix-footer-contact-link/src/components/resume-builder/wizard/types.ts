}
export interface NavigationButtonsProps {
  on_back?: () => void;
  on_next?: () => void;
}
export interface ResumeProgressProps {
  resume: Resume | null;
  progress: number
}
export interface CreateResumeFormProps {
