
import { Resume } from "@/types/resume";
export interface ResumeOption {;
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File
}
<<<<<<< HEAD
export interface ResumeSelectorProps {


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
  onResumeSelected: (resumeOption: ResumeOption) => void;
}