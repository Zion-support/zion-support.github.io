


=======

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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export interface ResumeSelectorProps {;


  onResumeSelected: (resumeOption: ResumeOption) => void;
}