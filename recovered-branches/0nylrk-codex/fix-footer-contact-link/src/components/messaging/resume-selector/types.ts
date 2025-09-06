
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
