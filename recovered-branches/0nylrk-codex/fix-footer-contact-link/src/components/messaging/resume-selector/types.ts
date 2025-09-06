
<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Resume  } from '@/types / resume';

export interface ResumeOption {
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File
<<<<<<< HEAD
}
export interface ResumeSelectorProps {



import { Resume } from "@/types/resume",
=======
}import { Resume } from "@/types/resume",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

export interface ResumeSelectorProps {;


  onResumeSelected: (resumeOption: ResumeOption) => void;
=======
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resume_option: ResumeOption) => void;  onResumeSelected: (resumeOption: ResumeOption) => void;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  onResumeSelected: (resume_option: ResumeOption) => void;
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resume_option: ResumeOption) => void;
export interface ResumeSelectorProps {;
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resume_option: ResumeOption) => void;
}