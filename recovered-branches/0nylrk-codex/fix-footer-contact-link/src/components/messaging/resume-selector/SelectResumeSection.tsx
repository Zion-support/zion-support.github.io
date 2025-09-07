<<<<<<< HEAD
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
=======
<<<<<<< HEAD



<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
import { FileText  } from 'lucide-react';
import { ResumeOption  } from '../resume-selector/types';
import { ResumePreviewCard  } from './ResumePreviewCard';
import { Resume } from '@/types/resume';
interface SelectResumeSectionProps {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  resumeOptions: ResumeOption[],
  selectedResume: ResumeOption | null,
  handleResumeSelect: (resumeId: string) => void,
  handleDownloadResume: () => void,
  isLoading: boolean
=======
resumeOptions: ResumeOption[],
  selectedResume: ResumeOption | null,
  handleResumeSelect: (resumeId: string) => void,
  handleDownloadResume: () => void,
  isLoading: boolean;

>>>>>>> origin/chore/fix-lint-and-merge
}

export function SelectResumeSection({;
import React from 'react';
  resumeOptions;
  selectedResume;
  handleResumeSelect;
<<<<<<< HEAD
  handleDownloadResume;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react',;
import { FileText } from 'lucide-react',;
import { ResumeOption } from '../resume-selector/types',;
import { ResumePreviewCard } from './ResumePreviewCard',;
=======

import React from 'react',;

import { FileText } from 'lucide-react',;
import { ResumeOption } from '../resume-selector/types',;
import { ResumePreviewCard } from './ResumePreviewCard',;

>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  resumeOptions: ResumeOption[]
  selectedResume: ResumeOption | null;
  handleResumeSelect: (resumeId: string) => void;
  handleDownloadResume: () => void;
  isLoading: boolean;
}

import {FileText} from 'lucide-react';
import {ResumeOption} from '../resume - selector / types';

import {ResumePreviewCard} from './ResumePreviewCard';

                selectedResume?.id === option && option.id '
                  ? 'bg-zion-purple/20 border border-zion-purple' 
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  resumeOptions: ResumeOption[]
  selectedResume: ResumeOption | null
  handleResumeSelect: (resumeId: string) => void
  handleDownloadResume: () => void

  isLoading: boolean
}
export function SelectResumeSection({
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {FileText} from 'lucide-react';
import {ResumeOption} from '../resume - selector / types';
import {ResumePreviewCard} from './ResumePreviewCard';

                selectedResume?.id === option && option.id 
                  ? 'bg-zion-purple/20 border border-zion-purple' 

                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
              }`}
>>>>>>> origin/resolved-merge-conflicts
              onClick={() => handleResumeSelect(option && option.id)}
            >;
              <div className="flex items-center">;"
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;"
<<<<<<< HEAD
                <span className="text-white">{option && option.title}</span>;"
=======
                <span className="text-white">{option && option.title}</span>;
>>>>>>> origin/resolved-merge-conflicts
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
      )}
=======
<<<<<<< HEAD
      )}
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge

=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge

=======
>>>>>>> origin/resolved-merge-conflicts

    </div>;
  );
}


import React from 'react',;
import { FileText } from 'lucide-react',;
import { ResumeOption } from '../resume-selector/types',;
import { ResumePreviewCard } from './ResumePreviewCard',;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                <span className="text-white">{option.title}</span>;
              </div>;
            </button>;
          ))}
<<<<<<< HEAD
          ;
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
          ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              resume={selectedResume.resume as Resume}

              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
</ResumePreviewCard>
        </>;

      )}
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> origin/resolved-merge-conflicts
 key= {
  option.id 
}className= {
  `w-full text-left p-3 rounded-md transition $ {
  selectedResume?.id === option.id ? 'bg-zion-purple/20 border border-zion-purple' : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50' 
}` 
}onClick= {
  () => handleResumeSelect (option.id) 
}> </div> </button>) ) 
}{
  selectedResume?.type === 'ai resume' && selectedResume.resume && (<ResumePreviewCard resume= {
  selectedResume.resume as Resume 
}onDownload= {
  handleDownloadResume 
}isLoading= {
  isLoading 
}/>) 
}</>) 
}</div>) 
}
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
            <ResumePreviewCard
              resume={selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />
          )}
        </>
      )}
    </div>
  )
}
<<<<<<< HEAD
      )}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
