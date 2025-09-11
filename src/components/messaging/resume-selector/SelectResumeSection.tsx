<<<<<<< HEAD
<<<<<<< HEAD
export function SelectResumeSection({
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

import React from 'react',;
=======
import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { FileText } from 'lucide-react';

interface ResumeOption {
  id: string;
  title: string;
  description: string;
  lastModified: string;
  fileSize: string;
  url: string;
}

<<<<<<< HEAD
export function SelectResumeSection({
  resumeOptions,
  selectedResume,
  handleResumeSelect,
  handleDownloadResume,
=======
export function SelectResumeSection({
  resumeOptions;
  selectedResume;
  handleResumeSelect;
  handleDownloadResume;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  isLoading
}: SelectResumeSectionProps) {
  return (
    <div className="space-y-2">
      {resumeOptions.length === 0 ? (
        <p className="text-sm text-zion-slate">No saved resumes found.</p>
      ) : (
        <>
          {resumeOptions.map(option => (            <button
              key = {option.id,}
              className={`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id
                  ? 'bg-zion-purple/20 border border-zion-purple'
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
              }`}
              onClick = {(,) => handleResumeSelect(option.id),}
          {resumeOptions.map((option) => (
            <button
              key={option.id}
<<<<<<< HEAD
              className={`w-full text-left p-3 rounded-md transition ${;
                selectedResume?.id === option.id;
                  ? 'bg-zion-purple/20 border border-zion-purple';
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50';
=======
              className={`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id
                  ? 'bg-zion-purple/20 border border-zion-purple'
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          

          

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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (
            <ResumePreviewCard
              resume = {selectedResume.resume as Resume,}
              onDownload = {handleDownloadResume,}
              isLoading = {isLoading,}
            />
;
          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (;
            <ResumePreviewCard;
              resume={selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
<<<<<<< HEAD
            />;
        </>
      )}
  )
}}
}

}
import { FileText } from 'lucide-react';
import { ResumeOption } from '../resume - selector / types';
import { ResumePreviewCard } from './ResumePreviewCard';
import { Resume } from '@/types / resume';
=======
interface Resume {
  id: string;
  title: string;
  description: string;
  lastModified: string;
  fileSize: string;
  url: string;
}

interface ResumePreviewCardProps {
  resume: Resume;
  isSelected: boolean;
  onSelect: (resume: Resume) => void;
}

const ResumePreviewCard: React.FC<ResumePreviewCardProps> = ({
  resume,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={() => onSelect(resume)}
    >
      <div className="flex items-start space-x-3">
        <FileText className="h-8 w-8 text-gray-400" />
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{resume.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{resume.description}</p>
          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
            <span>Modified: {resume.lastModified}</span>
            <span>{resume.fileSize}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SelectResumeSectionProps {
  resumes: ResumeOption[];
  selectedResume: ResumeOption | null;
  onSelectResume: (resume: ResumeOption) => void;
  onUploadNew: () => void;
}

export const SelectResumeSection: React.FC<SelectResumeSectionProps> = ({
  resumes,
  selectedResume,
  onSelectResume,
  onUploadNew,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Select Resume</h3>
        <button
          onClick={onUploadNew}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Upload New
        </button>
      </div>
      
      {resumes.length === 0 ? (
        <div className="text-center py-8">
          <FileText className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No resumes found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Upload your first resume to get started.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resumes.map((resume) => (
            <ResumePreviewCard
              key={resume.id}
              resume={resume}
              isSelected={selectedResume?.id === resume.id}
              onSelect={onSelectResume}
            />
          ))}
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
}};
};

  );
}
;
          )}
        </>
      )}
    </div>
  )
}}
}
  );
}};
};
    </div>;
  );
}
;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}};
};

    </div>;
  );
}
<<<<<<< HEAD
;
=======
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
