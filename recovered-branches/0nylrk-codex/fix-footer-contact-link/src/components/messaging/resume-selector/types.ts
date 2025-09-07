
  id: string;
  title: string;'
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;

}


import { Resume } from "@/types/resume",

export interface ResumeOption {

  id: string,
  title: string,'
  type: 'ai_resume' | 'custom_upload',
  resume?: Resume,;
  file?: File";
import { Resume } from "@/types/resume",;
export interface ResumeOption {;
  id: string,;
  title: string,;'
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File;
}

;


  onResumeSelected: (resumeOption: ResumeOption) => void;

  onResumeSelected: (resume_option: ResumeOption) => void;  onResumeSelected: (resumeOption: ResumeOption) => void;

  onResumeSelected: (resume_option: ResumeOption) => void;
pr-12325
export interface ResumeSelectorProps {;


  onResumeSelected: (resume_option: ResumeOption) => void;
}
}
