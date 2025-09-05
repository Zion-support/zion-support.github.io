

export interface StepProps {_id: string;
  label: string;}

export interface NavigationButtonsProps {_onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean;}

export interface ResumeProgressProps {_resume: Resume | null;
  progress: number;}

export interface CreateResumeFormProps {_onCreateResume: (_title: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;}

export interface EmptyResumeProps {_onCreateClick: () => void;}
