
<<<<<<< HEAD

<<<<<<< HEAD
=======
import { Resume  } from '@/types / resume';

export interface ResumeOption {
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Resume } from "@/types/resume";
export interface ResumeOption {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File
}
export interface ResumeSelectorProps {
<<<<<<< HEAD



=======
<<<<<<< HEAD
export interface ResumeSelectorProps {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6


<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  onResumeSelected: (resumeOption: ResumeOption) => void;
=======
  onResumeSelected: (resume_option: ResumeOption) => void;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface ResumeSelectorProps {;
  onResumeSelected: (resumeOption: ResumeOption) => void;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}