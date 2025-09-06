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

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}: SelectResumeSectionProps) {
  return (
    <div className="space-y-2">
      {resumeOptions.length === 0 ? (
        <p className="text-sm text-zion-slate">No saved resumes found.</p>
      ) : (
        <>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {resumeOptions.map(option => (            <button
              key = {option.id,}
              className={`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id
                  ? 'bg-zion-purple/20 border border-zion-purple'
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
              }`}
              onClick = {(,) => handleResumeSelect(option.id),}
<<<<<<< HEAD
>>>>>>>             >
=======
=======
          {resumeOptions.map((option) => (
            <button
              key={option.id}
              className={`w-full text-left p-3 rounded-md transition ${;
                selectedResume?.id === option.id;
                  ? 'bg-zion-purple/20 border border-zion-purple';
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50';
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <button
              key={option.id}
              className={`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id
                  ? 'bg-zion-purple/20 border border-zion-purple'
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
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
<<<<<<< HEAD

          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (
>>>>>>>             <ResumePreviewCard
=======
          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (
            <ResumePreviewCard
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              resume = {selectedResume.resume as Resume,}
              onDownload = {handleDownloadResume,}
              isLoading = {isLoading,}
            />
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (;
            <ResumePreviewCard;
              resume={selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
<<<<<<< HEAD
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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
