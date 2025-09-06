<<<<<<< HEAD
import { Resume  } from '@/types / resume';
export interface ResumeOption {
  id: string;
=======

import { Resume } from "@/types/resume",;
;
export interface ResumeOption {;
  id:string,;
  title:string,;
  type:'ai_resume' | 'custom_upload',;
  resume?:Resume,;
  file?:File;}
;
export interface ResumeSelectorProps {;
  onResumeSelected:(resumeOption:ResumeOption) => void;
}

export interface ResumeOption {_id: string;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File;}

export interface ResumeSelectorProps {_onResumeSelected: (_resumeOption: ResumeOption) => void;}
 export interface ResumeOption {
  id: string;
title: string;
type: 'ai resume' | 'custom upload';
resume?: Resume;
file?: File 
}export interface ResumeSelectorProps {
  onResumeSelected: (resumeOption: ResumeOption) => void 
}
<<<<<<< HEAD
export interface ResumeSelectorProps {
  onResumeSelected: (resume_option: ResumeOption) => void;
}
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
