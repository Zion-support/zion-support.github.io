
<<<<<<< HEAD
<<<<<<< HEAD
import { Resume } from "@/types/resume",
=======
import { Resume } from &quot;@/types/resume&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface ResumeOption {
  id: string,
  title: string,
  type: 'ai_resume' | 'custom_upload',
  resume?: Resume,
  file?: File
}

export interface ResumeSelectorProps {
  onResumeSelected: (resumeOption: ResumeOption) => void
}
=======

export interface ResumeOption {_id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File;}

export interface ResumeSelectorProps {_onResumeSelected: (_resumeOption: ResumeOption) => void;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
