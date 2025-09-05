
<<<<<<< HEAD
import { Resume } from "@/types/resume",
=======
import { Resume } from &quot;@/types/resume&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface StepProps {
  id: string,
  label: string
}

export interface NavigationButtonsProps {
  onBack?: () => void,
  onNext?: () => void,
  isNextDisabled?: boolean,
  backLabel?: string,
  nextLabel?: string,
  isLoading?: boolean
}

export interface ResumeProgressProps {
  resume: Resume | null,
  progress: number
}

export interface CreateResumeFormProps {
  onCreateResume: (title: string) => Promise<void>,
  onCancel: () => void,
  isLoading: boolean
}

export interface EmptyResumeProps {
  onCreateClick: () => void
}
