
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
=======
import { Resume } from "@/types/resume",;
export interface ResumeOption {;
  id: string,;
  title: string,;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export interface ResumeSelectorProps {;
  onResumeSelected: (resumeOption: ResumeOption) => void;
}
;