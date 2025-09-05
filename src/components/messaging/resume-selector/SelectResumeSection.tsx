
import React from 'react',;
import { FileText } from 'lucide-react';
import { ResumeOption } from '../resume-selector/types',;
import { ResumePreviewCard } from './ResumePreviewCard',;
import { Resume } from '@/types/resume',;
interface SelectResumeSectionProps {;
  resumeOptions: ResumeOption[],;
  selectedResume: ResumeOption | null,;
  handleResumeSelect: (resumeId: string) => void,;
  handleDownloadResume: () => void,;
  isLoading: boolean;
}
<<<<<<< HEAD

export function SelectResumeSection({
  resumeOptions,
  selectedResume,
  handleResumeSelect,
  handleDownloadResume,
  isLoading
}: SelectResumeSectionProps) {
  return (
    <div className=&quot;space-y-2&quot;>
      {resumeOptions.length === 0 ? (
        <p className=&quot;text-sm text-zion-slate&quot;>No saved resumes found.</p>
      ) : (
        <>
          {resumeOptions.map((option) => (
            <button
=======
;
export function SelectResumeSection({;
  resumeOptions,;
  selectedResume,;
  handleResumeSelect;
  handleDownloadResume;
  isLoading;
}: SelectResumeSectionProps) {;
  return (;
    <div className="space-y-2">;
      {resumeOptions.length === 0 ? (;
        <p className="text-sm text-zion-slate">No saved resumes found.</p>;
      ) : (;
        <>;
          {resumeOptions.map((option) => (;
            <button;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              key={option.id}
              className={`w-full text-left p-3 rounded-md transition ${;
                selectedResume?.id === option.id;
                  ? 'bg-zion-purple/20 border border-zion-purple';
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50';
              }`}
              onClick={() => handleResumeSelect(option.id)}
<<<<<<< HEAD
            >
              <div className=&quot;flex items-center&quot;>
                <FileText className=&quot;h-4 w-4 mr-2 text-zion-cyan&quot; />
                <span className=&quot;text-white&quot;>{option.title}</span>
              </div>
            </button>
=======
            >;
              <div className="flex items-center">;
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;
                <span className="text-white">{option.title}</span>;
              </div>;
            </button>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          ))}
;
          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (;
            <ResumePreviewCard;
              resume={selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
          )}
        </>;
      )}
    </div>;
  );
}
;