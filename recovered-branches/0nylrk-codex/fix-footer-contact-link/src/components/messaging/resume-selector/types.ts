

<<<<<<< HEAD
=======
import { Resume  } from '@/types / resume';

export interface ResumeOption {
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File
}
export interface ResumeSelectorProps {



=======

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Resume } from "@/types/resume",
export interface ResumeOption {
  id: string,
  title: string,
  type: 'ai_resume' | 'custom_upload',
  resume?: Resume,
  file?: File
import { Resume } from "@/types/resume",;
export interface ResumeOption {;
  id: string,;
  title: string,;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File;
}
;

export interface ResumeSelectorProps {;

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  onResumeSelected: (resumeOption: ResumeOption) => void;
=======
  onResumeSelected: (resume_option: ResumeOption) => void;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}