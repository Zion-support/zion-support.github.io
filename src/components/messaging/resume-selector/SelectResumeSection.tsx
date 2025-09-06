<<<<<<< HEAD


export function SelectResumeSection({
=======
import { FileText } from 'lucide-react'
import { ResumeOption } from '../resume-selector/types'
import { ResumePreviewCard } from './ResumePreviewCard'
import { Resume } from '@/types/resume'
interface SelectResumeSectionProps {
  resumeOptions: ResumeOption[]
  selectedResume: ResumeOption | null
  handleResumeSelect: (resumeId: string) => void
  handleDownloadResume: () => void
  isLoading: boolean

import React from 'react';
import { FileText } from 'lucide-react'
import { ResumeOption  } from '../resume-selector/types';
import { ResumePreviewCard  } from './ResumePreviewCard';
import { Resume } from '@/types/resume';
interface SelectResumeSectionProps {
  resumeOptions: ResumeOption[];
  selectedResume: ResumeOption | null;
  handleResumeSelect: (resumeId: string) => void;
  handleDownloadResume: () => void;
  isLoading: boolean
export function SelectResumeSection({

  resumeOptions
  selectedResume
  handleResumeSelect
  handleDownloadResume

xport function SelectResumeSection({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  resumeOptions,
  selectedResume,
  handleResumeSelect,
  handleDownloadResume,
<<<<<<< HEAD

  isLoading
=======
>>>>>>>   isLoading
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}: SelectResumeSectionProps) {
  return (
    <div className="space-y-2">
      {resumeOptions.length === 0 ? (
        <p className="text-sm text-zion-slate">No saved resumes found.</p>
      ) : (
        <>
<<<<<<< HEAD

=======
          {resumeOptions.map(option => (            <button
              key = {option.id,}
              className={`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id
                  ? 'bg-zion-purple/20 border border-zion-purple'
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
              }`}
              onClick = {(,) => handleResumeSelect(option.id),}
>>>>>>>             >
            <button
              key={option.id}
              className={`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id 
                  ? 'bg-zion-purple/20 border border-zion-purple' 
                  : 'bg-zion-blue-dark/30 hover: bg-zion-blue-dark/50',
              }`}
              onClick={() => handleResumeSelect(option.id)}



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            >
>>>>>>>               <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
                <span className="text-white">{option.title}</span>
              </div>
            </button>
          ))}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {resumeOptions.map((option) => (
            <button
              key={option.id}
              className={`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id
                  ? 'bg-zion-purple/20 border border-zion-purple'
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
              }`}
              onClick={() => handleResumeSelect(option.id)}
            >
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
                <span className="text-white">{option.title}</span>
              </div>
            </button>
          ))}

          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (
>>>>>>>             <ResumePreviewCard
              resume = {selectedResume.resume as Resume,}
              onDownload = {handleDownloadResume,}
              isLoading = {isLoading,}
            />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (;
            <ResumePreviewCard;
              resume={selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
<<<<<<< HEAD

=======
>>>>>>>           )}
        </>
      )}
  )
}}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          )}
        </>
      )}

<<<<<<< HEAD
    </div>;
  );
}
;

=======
  );
}};
};

>>>>>>>     </div>;
  );
}
;
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
