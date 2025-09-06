>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React from 'react';
import { FileText } from 'lucide-react';
import { ResumeOption } from '../resume-selector/types';
import { ResumePreviewCard } from './ResumePreviewCard';
import { Resume } from '@/types/resume';

<<<<<<< HEAD
interface SelectResumeSectionProps {
  resumeOptions: ResumeOption[];
  selectedResume: ResumeOption | null;
  handleResumeSelect: (resumeId: string) => void;
  handleDownloadResume: () => void;
  isLoading: boolean;
=======
import React from 'react';
import { FileText } from 'lucide-react';
import { ResumeOption } from '../resume-selector/types';
import { ResumePreviewCard } from './ResumePreviewCard';
import { Resume } from '@/types/resume';
interface SelectResumeSectionProps {
  resumeOptions: ResumeOption[],
  selectedResume: ResumeOption | null,
  handleResumeSelect: (resumeId: string,) => void,
  handleDownloadResume: () => void,
  isLoading: boolean
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

export function SelectResumeSection({
  resumeOptions,
  selectedResume,
  handleResumeSelect,
  handleDownloadResume,
  isLoading,
}: SelectResumeSectionProps) {
  return (
    <div className='space-y-2'>
      {resumeOptions.length === 0 ? (
        <p className='text-sm text-zion-slate'>No saved resumes found.</p>
      ) : (
        <>
<<<<<<< HEAD
          {resumeOptions.map(option => (
=======
          {resumeOptions.map((option,) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
            <button
              key = {option.id,}
              className={`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id
                  ? 'bg-zion-purple/20 border border-zion-purple'
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
              }`}
              onClick = {(,) => handleResumeSelect(option.id),}
            >
              <div className='flex items-center'>
                <FileText className='h-4 w-4 mr-2 text-zion-cyan' />
                <span className='text-white'>{option.title}</span>
              </div>
            </button>
          ))}
=======
          
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (
            <ResumePreviewCard
              resume = {selectedResume.resume as Resume,}
              onDownload = {handleDownloadResume,}
              isLoading = {isLoading,}
            />
          )}
        </>
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
};
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
