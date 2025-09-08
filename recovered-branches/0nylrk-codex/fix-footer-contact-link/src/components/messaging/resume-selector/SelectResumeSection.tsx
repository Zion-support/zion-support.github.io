<<<<<<< HEAD


=======
"resumeOptions": ResumeOption[],
  "selectedResume": ResumeOption | null,
  "handleResumeSelect": ("resumeId": string) => void,
  "handleDownloadResume": () => void,
  "isLoading": boolean
}

export function SelectResumeSection({;
}
import React from 'react';'
  resumeOptions;
  selectedResume;
  handleResumeSelect;
  handleDownloadResume;import React from 'react';'
import { FileText } from 'lucide-react';'
import { ResumeOption } from '../resume-selector/types',;'
import { ResumePreviewCard } from './ResumePreviewCard',;'
import { Resume } from '@/types/resume',;'
interface SelectResumeSectionProps {;
  }
  "resumeOptions": ResumeOption[],;
  "selectedResume": ResumeOption | null,;
  "handleResumeSelect": ("resumeId": string) => void,;
  "handleDownloadResume": () => void,;
  "isLoading": boolean;
}
                  : 'bg-zion-blue-dark/30 "hover":bg-zion-blue-dark/50''
              }`}`
>>>>>>> origin/cursor/delete-old-data-records-6bba
  resumeOptions: ResumeOption[],
  selectedResume: ResumeOption | null,
  handleResumeSelect: (resumeId: string) => void,
  handleDownloadResume: () => void,
  isLoading: boolean
<<<<<<< HEAD
=======
resumeOptions: ResumeOption[],
  selectedResume: ResumeOption | null,
  handleResumeSelect: (resumeId: string) => void,
  handleDownloadResume: () => void,
  isLoading: boolean;
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

export function SelectResumeSection({;
import React from 'react';
  resumeOptions;
  selectedResume;
  handleResumeSelect;
<<<<<<< HEAD



=======
  handleDownloadResume;

>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react',;
import { FileText } from 'lucide-react',;
import { ResumeOption } from '../resume-selector/types',;
import { ResumePreviewCard } from './ResumePreviewCard',;

<<<<<<< HEAD
=======
import React from 'react',;

import { FileText } from 'lucide-react',;
import { ResumeOption } from '../resume-selector/types',;
import { ResumePreviewCard } from './ResumePreviewCard',;

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Resume } from '@/types/resume',;
interface SelectResumeSectionProps {;
  resumeOptions: ResumeOption[],;
  selectedResume: ResumeOption | null,;
resumeOptions: ResumeOption[],
  selectedResume: ResumeOption | null,
  handleResumeSelect: (resumeId: string) => void,
  handleDownloadResume: () => void,
  isLoading: boolean;
}

<<<<<<< HEAD
=======
  resumeOptions: ResumeOption[]
  selectedResume: ResumeOption | null;
  handleResumeSelect: (resumeId: string) => void;
  handleDownloadResume: () => void;
  isLoading: boolean;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
                selectedResume?.id === option && option.id '
                  ? 'bg-zion-purple/20 border border-zion-purple' 
>>>>>>> origin/cursor/delete-old-data-records-6bba


  resumeOptions: ResumeOption[]
  selectedResume: ResumeOption | null
  handleResumeSelect: (resumeId: string) => void
  handleDownloadResume: () => void

  isLoading: boolean
}
export function SelectResumeSection({

resumeOptions,
  selectedResume,
  handleResumeSelect,
  handleDownloadResume,
  isLoading
}: SelectResumeSectionProps) {
  return (
    <div className="space-y-2">
      {resumeOptions.length === 0 ? (
        <p className="text-sm text-zion-slate">No saved resumes found.</p>
      ) : (
        <>
          {resumeOptions.map((option) => (
            <button
              key={option.id}
              className={`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id
                  ? 'bg-zion-purple/20 border border-zion-purple'

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {FileText} from 'lucide-react';
import {ResumeOption} from '../resume - selector / types';
import {ResumePreviewCard} from './ResumePreviewCard';

                selectedResume?.id === option && option.id 
                  ? 'bg-zion-purple/20 border border-zion-purple' 

                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
              }`}
              onClick={() => handleResumeSelect(option && option.id)}
            >;
              <div className="flex items-center">;"
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;"
                <span className="text-white">{option && option.title}</span>;"
              </div>;
            </button>;
          ))}
            <ResumePreviewCard,
resume={selectedResume && selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading} />;
          )}
        </>;
<<<<<<< HEAD



=======
      )}



    </div>;
  );
}


import React from 'react',;
import { FileText } from 'lucide-react',;
import { ResumeOption } from '../resume-selector/types',;
import { ResumePreviewCard } from './ResumePreviewCard',;
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Resume } from '@/types/resume',;
;
interface SelectResumeSectionProps {;
  resumeOptions:ResumeOption[],;
  selectedResume:ResumeOption | null,;
  handleResumeSelect:(resumeId:string) => void,;
  handleDownloadResume:() => void,;
  isLoading:boolean;
}
;

<<<<<<< HEAD
export function SelectResumeSection({;
  resumeOptions,;
  selectedResume,;
  handleResumeSelect,;
  handleDownloadResume,;
  isLoading;
} SelectResumeSectionProps) {;
  return (;
    <div className="space-y-2">;
      {resumeOptions.length === 0 ? (;
        <p className="text-sm text-zion-slate">No saved resumes found.</p>;
      ) :(;
        <>;
          {resumeOptions.map((option) => (;
            <button;
              key={option.id}
              className={`w-full text-left p-3 rounded-md transition ${;
                selectedResume?.id === option.id ;
                  ? 'bg-zion-purple/20 border border-zion-purple' ;
                  :'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50';
              }`}
              onClick={() => handleResumeSelect(option.id)}
            >;
              <div className="flex items-center">;
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <span className="text-white">{option.title}</span>;
              </div>;
            </button>;
          ))}

<<<<<<< HEAD
          ;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (;
            <ResumePreviewCard;
              resume={selectedResume.resume as Resume}              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
          )}
        </>;
      )}
    </div>;
  ),;}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

}



<<<<<<< HEAD
=======
      )}
    </div>
  )
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
