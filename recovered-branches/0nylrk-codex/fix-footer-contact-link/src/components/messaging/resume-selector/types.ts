<<<<<<< HEAD

import { Resume } from "@/types/resume";
=======
import { Resume  } from '@/types / resume';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface ResumeOption {
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File
}
export interface ResumeSelectorProps {
<<<<<<< HEAD
  onResumeSelected: (resumeOption: ResumeOption) => void;
=======
  onResumeSelected: (resume_option: ResumeOption) => void;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}