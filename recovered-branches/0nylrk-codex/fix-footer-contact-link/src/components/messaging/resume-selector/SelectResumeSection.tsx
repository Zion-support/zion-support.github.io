
import React from 'react';
<<<<<<< HEAD
import { FileText  } from 'lucide-react';
import { ResumeOption  } from '../resume-selector/types';
import { ResumePreviewCard  } from './ResumePreviewCard';
import { Resume } from '@/types/resume';
interface SelectResumeSectionProps {

  resumeOptions: ResumeOption[]
  selectedResume: ResumeOption | null
  handleResumeSelect: (resumeId: string) => void
  handleDownloadResume: () => void

  isLoading: boolean
}
export function SelectResumeSection({
=======
import {FileText} from 'lucide-react';
import {ResumeOption} from '../resume-selector/types';
import {ResumePreviewCard} from './ResumePreviewCard';
import {Resume} from '@/types/resume';
interface SelectResumeSectionProps {;
  resumeOptions: ResumeOption[],;
  selectedResume: ResumeOption | null,;
  handleResumeSelect: (resumeId: string) => void,;
  handleDownloadResume: () => void,;
  isLoading: boolean;
}

export function SelectResumeSection(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  resumeOptions;
  selectedResume;
  handleResumeSelect;
  handleDownloadResume;
  isLoading;
}: SelectResumeSectionProps) {;
  return (
    <div className="space-y-2">;
      {resumeOptions && resumeOptions.length === 0 ? (;
        <p className="text-sm text-zion-slate">No saved resumes found.</p>;
      ) : (;
        <>;
          {resumeOptions && resumeOptions.map((option) => (;
            <button
              key={option && option.id}
              className={`w-full text-left p-3 rounded-md transition ${
<<<<<<< HEAD
                selectedResume?.id === option.id
                  ? 'bg-zion-purple/20 border border-zion-purple'
=======
                selectedResume?.id === option && option.id 
                  ? 'bg-zion-purple/20 border border-zion-purple' 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
              }`}
              onClick={() => handleResumeSelect(option && option.id)}
            >;
              <div className="flex items-center">;
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;
                <span className="text-white">{option && option.title}</span>;
              </div>;
            </button>;
          ))}
<<<<<<< HEAD
          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (
=======

          {selectedResume?.type === 'ai_resume' && selectedResume && selectedResume.resume && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <ResumePreviewCard
              resume={selectedResume && selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
          )}
        </>;
      )}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
