




  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File
}



export interface ResumeSelectorProps {






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





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


  onResumeSelected: (resumeOption: ResumeOption) => void;
>>>>>>> origin/feature/merge-conflicts-and-improvements

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  onResumeSelected: (resumeOption: ResumeOption) => void;


}