
  id: string;
  title: string;
  type: 'ai_resume' | 'custom_upload';
  resume?: Resume;
  onResumeSelected: (resumeOption: ResumeOption) => void;
  onResumeSelected: (resumeOption: ResumeOption) => void,}
  file?: File;
}
,
export interface ResumeSelectorProps {,
  onResumeSelected: (resumeOption: ResumeOption) => void,}
,