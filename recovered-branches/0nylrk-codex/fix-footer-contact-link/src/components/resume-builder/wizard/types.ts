import { Resume } from "@/types/resume";"
export interface StepProps {
  // TODO: Implement
}
  id: string;,
  label: string;
export interface NavigationButtonsProps {
  // TODO: Implement
export interface NavigationButtonsProps {;
  // TODO: Implement
  on_back?: () => void;
  on_next?: () => void;
"
import { Resume } from "@/types/resume",""
import {Resume} from "@/types/resume";"
  // TODO: Implement

  onBack?: () => void;
  onNext?: () => void;
  isNextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;
  isLoading?: boolean;

export interface ResumeProgressProps {
  // TODO: Implement
  resume: Resume | null;,
  progress: number;

export interface CreateResumeFormProps {;
  onCreateResume: (title: string) => Promise<void>;
</void>
</void>"