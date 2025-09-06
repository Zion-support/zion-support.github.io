<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4


export function SelectResumeSection({

  resumeOptions
  selectedResume
  handleResumeSelect
  handleDownloadResume

=======
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function SelectResumeSection({
  resumeOptions,
  selectedResume,
  handleResumeSelect,
  handleDownloadResume,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  isLoading
}: SelectResumeSectionProps) {
  return (
    <div className="space-y-2">
      {resumeOptions.length === 0 ? (
        <p className="text-sm text-zion-slate">No saved resumes found.</p>
      ) : (
        <>



          {resumeOptions.map((option) => (
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            <button
              key={option.id}
              className={`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id 
                  ? 'bg-zion-purple/20 border border-zion-purple' 
                  : 'bg-zion-blue-dark/30 hover: bg-zion-blue-dark/50',
              }`}
              onClick={() => handleResumeSelect(option.id)}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            >
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
                <span className="text-white">{option.title}</span>
              </div>
            </button>
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======

          
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            <ResumePreviewCard
              resume={selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import { FileText } from 'lucide-react';
import { ResumeOption } from '../resume - selector / types';
import { ResumePreviewCard } from './ResumePreviewCard';
import { Resume } from '@/types / resume';
interface SelectResumeSectionProps {
  resume_options: ResumeOption[];
  selected_resume: ResumeOption | null;
  handleResumeSelect: (resume_id: string) => void;
  handleDownloadResume: () => void;
  is_loading: boolean;
export /**
 * SelectResumeSection - Function description
 */
function SelectResumeSection() {
  return (
    <div className='space - y-2'>;
      {resume_options.length === 0 ? (
        <p className='text - sm text - zion - slate'>No saved resumes found.</p>) : (
        <>;
          {resume_options.map (option => (            <button;
              key = {option.id, }
              className={`w - full text - left p - 3 rounded - md transition ${
                selected_resume?.id === option.id;
                  ? 'bg - zion - purple / 20 border border - zion - purple';
                  : 'bg - zion - blue - dark / 30 hover:bg - zion - blue - dark / 50';
              }`}
              on_click = {(, ) => handleResumeSelect (option.id), }
            >;
              <div className='flex items - center'>;
                <FileText className='h - 4 w - 4 mr - 2 text - zion - cyan' />;
                <span className='text - white'>{option.title}</span>;
              </div>;
            </button>))}
          {resume_options.map ((option) => (
            <button;
              key={option.id}
              className={`w - full text - left p - 3 rounded - md transition ${
                selected_resume?.id === option.id;
                  ? 'bg - zion - purple / 20 border border - zion - purple';
                  : 'bg - zion - blue - dark / 30 hover:bg - zion - blue - dark / 50';
              }`}
              on_click={() => handleResumeSelect (option.id)}
            >;
              <div className="flex items - center">;
                <FileText className="h - 4 w - 4 mr - 2 text - zion - cyan" />;
                <span className="text - white">{option.title}</span>;
              </div>;
            </button>))}
          {selected_resume?.type === 'ai_resume' && selected_resume.resume && (
            <ResumePreviewCard;
              resume = {selected_resume.resume as Resume, }
              on_download = {handleDownloadResume, }
              is_loading = {is_loading, }
            />)}
        </>)}
    </div>);
}}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
            />;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          )}
        </>
      )}
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
  )
}}
}
=======
  );
}};
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
