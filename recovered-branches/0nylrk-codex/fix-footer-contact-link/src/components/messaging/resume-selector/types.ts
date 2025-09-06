

import { Resume  } from '@/types / resume';

export interface ResumeOption {
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface ResumeSelectorProps {


<<<<<<< HEAD

=======

=======


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resume_option: ResumeOption) => void;
=======
<<<<<<< HEAD

<<<<<<< HEAD
export interface ResumeSelectorProps {;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resume_option: ResumeOption) => void;
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resume_option: ResumeOption) => void;
export interface ResumeSelectorProps {;
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resume_option: ResumeOption) => void;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}