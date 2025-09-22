<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  resumeOptions: ResumeOption[],
  selectedResume: ResumeOption | null,
  handleResumeSelect: (resumeId: string) => void,
  handleDownloadResume: () => void,
  isLoading: boolean;
=======
import React from 'react';
import { FileText  } from 'lucide-react';
import { ResumeOption  } from '../resume-selector/types';
import { ResumePreviewCard  } from './ResumePreviewCard';
import { Resume } from '@/types/resume';
interface SelectResumeSectionProps {

  isLoading: boolean
  isLoading: boolean;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export function SelectResumeSection({;
import React from 'react';
  resumeOptions;
  selectedResume;
  handleResumeSelect;
<<<<<<< HEAD
<<<<<<< HEAD
  handleDownloadResume;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react',;
=======
  handleDownloadResume;import React from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  handleDownloadResume;import React from 'react',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  handleDownloadResume;

import React from 'react',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  handleDownloadResume;import React from 'react',;
  handleDownloadResume;

import React from 'react',;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { FileText } from 'lucide-react',;
import { ResumeOption } from '../resume-selector/types',;
import { ResumePreviewCard } from './ResumePreviewCard',;
=======

'
import React from 'react',;'
import { FileText } from 'lucide-react',;'
import { ResumeOption } from '../resume-selector/types',;'
import { ResumePreviewCard } from './ResumePreviewCard',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  resumeOptions: ResumeOption[]
  selectedResume: ResumeOption | null;
  handleResumeSelect: (resumeId: string) => void;
  handleDownloadResume: () => void;
  isLoading: boolean;
}
export function SelectResumeSection({
<<<<<<< HEAD
import {FileText} from 'lucide-react';
import {ResumeOption} from '../resume - selector / types';
import {ResumePreviewCard} from './ResumePreviewCard';

                selectedResume?.id === option && option.id '
                  ? 'bg-zion-purple/20 border border-zion-purple' 

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
export function SelectResumeSection({;
import React from 'react';'
  resumeOptions;
  selectedResume;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
import {FileText} from 'lucide-react';
import {ResumeOption} from '../resume - selector / types';
import {ResumePreviewCard} from './ResumePreviewCard';

                selectedResume?.id === option && option.id 
                  ? 'bg-zion-purple/20 border border-zion-purple' 

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
              }`}
              onClick={() => handleResumeSelect(option && option.id)}
            >;
              <div className="flex items-center">;"
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;"
                <span className="text-white">{option && option.title}</span>;
              </div>;
            </button>;
          ))}
<ResumePreviewCard;
              resume={selectedResume && selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
          )}
        </>;
<<<<<<< HEAD
      )}

'
import React from 'react',;'
import { FileText } from 'lucide-react',;'
import { ResumeOption } from '../resume-selector/types',;'
import { ResumePreviewCard } from './ResumePreviewCard',;'
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
export function SelectResumeSection() { return null; }
              key={option.id}`
              className={`w-full text-left p-3 rounded-md transition ${;
                selectedResume?.id === option.id ;'
                  ? 'bg-zion-purple/20 border border-zion-purple' ;'
                  :'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50';`
              }`}
              onClick={() => handleResumeSelect(option.id)}
            >;"
              <div className="flex items-center">;"
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;"
                <span className="text-white">{option.title}</span>;
              </div>;
            </button>;
          ))}
;'
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
key= {}
  option.id;
}className= {}`
  `w-full text-left p-3 rounded-md transition $ {'
  selectedResume?.id === option.id ? 'bg-zion-purple/20 border border-zion-purple' : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50' `
}` 
}onClick= {}
  () => handleResumeSelect (option.id) 
}> </div> </button>) ) 
}{'
  selectedResume?.type === 'ai resume' && selectedResume.resume && (<ResumePreviewCard resume= {}
  selectedResume.resume as Resume;
}onDownload= {}
  handleDownloadResume;
}isLoading= {}
  isLoading;
}/>) 
}</>) 
}</div>) 
}'
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'`
              }`}
              onClick={() => handleResumeSelect(option.id)}
            >"
              <div className="flex items-center">"
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />"
                <span className="text-white">{option.title}</span>
              </div>
            </button>
          ))}'
          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (
            <ResumePreviewCard;
              resume={selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
</ResumePreviewCard>
        </>;

      )}
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>;
}> </div> </button>) ) "
  selectedResume?.type === 'ai resume' && selectedResume.resume && (<ResumePreviewCard resume= {
  selectedResume.resume as Resume;
}onDownload= {
}isLoading= {
  isLoading;)
}/>) 

}</>) 
}</div>) 
              <div className="flex items-center">"
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />"
                <span className="text-white">{option.title}</span>"
              </div>
              resume={selectedResume.resume as Resume}
            />

        </>
    </div>"`;
pr-12325
      )}
    </div>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
