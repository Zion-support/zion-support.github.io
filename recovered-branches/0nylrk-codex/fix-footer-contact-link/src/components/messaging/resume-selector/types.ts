
import { Resume } from &quot;@/types/resume&quot;;

export interface ResumeOption {
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File;
}

export interface ResumeSelectorProps {
  onResumeSelected: (resumeOption: ResumeOption) => void;
}
