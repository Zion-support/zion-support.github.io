<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { Resume  } from '@/types / resume';

export interface ResumeOption {
<<<<<<< HEAD
import { Resume } from "@/types/resume";
export interface ResumeOption {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File
}
export interface ResumeSelectorProps {


<<<<<<< HEAD
=======

=======

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resume_option: ResumeOption) => void;
export interface ResumeSelectorProps {;
  onResumeSelected: (resumeOption: ResumeOption) => void;
=======
export interface ResumeSelectorProps {;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  onResumeSelected: (resumeOption: ResumeOption) => void;
=======
  onResumeSelected: (resume_option: ResumeOption) => void;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}