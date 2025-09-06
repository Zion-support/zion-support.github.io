<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import { Resume  } from '@/types / resume';

export interface ResumeOption {
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Resume } from "@/types/resume";
export interface ResumeOption {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File
}
<<<<<<< HEAD
export interface ResumeSelectorProps {


<<<<<<< HEAD

=======

=======


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

<<<<<<< HEAD
export interface ResumeSelectorProps {;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  onResumeSelected: (resumeOption: ResumeOption) => void;
=======
  onResumeSelected: (resume_option: ResumeOption) => void;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resume_option: ResumeOption) => void;
export interface ResumeSelectorProps {;
  onResumeSelected: (resumeOption: ResumeOption) => void;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resume_option: ResumeOption) => void;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}