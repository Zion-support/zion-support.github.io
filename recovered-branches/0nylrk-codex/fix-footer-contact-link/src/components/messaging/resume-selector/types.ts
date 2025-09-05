
<<<<<<< HEAD
import { Resume } from "@/types/resume",;
;
export interface ResumeOption {;
  id:string,;
  title:string,;
  type:'ai_resume' | 'custom_upload',;
  resume?:Resume,;
  file?:File;
=======
import { Resume } from "@/types/resume",export interface ResumeOption {
  id: string,
  title: string,
  type: 'ai_resume' | 'custom_upload',
  resume?: Resume,
  file?: File
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
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
