<<<<<<< HEAD

<<<<<<< HEAD
import { Resume } from "@/types/resume";
export interface ResumeOption {
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import { Resume } from "@/types/resume";
export interface ResumeOption {;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  onResumeSelected: (resumeOption: ResumeOption) => void;
}