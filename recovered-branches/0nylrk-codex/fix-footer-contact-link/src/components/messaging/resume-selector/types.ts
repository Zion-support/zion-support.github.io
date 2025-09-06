<<<<<<< HEAD


import { Resume } from "@/types/resume";
export interface ResumeOption {;

=======


import { Resume  } from '@/types / resume';

export interface ResumeOption {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  file?: File
}
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export interface ResumeSelectorProps {



=======

=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  onResumeSelected: (resumeOption: ResumeOption) => void;

}