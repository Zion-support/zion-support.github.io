
<<<<<<< HEAD
import { Resume } from "@/types/resume";
export interface ResumeOption {
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File
}
export interface ResumeSelectorProps {
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  onResumeSelected: (resumeOption: ResumeOption) => void;
}