<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
import React from 'react';
import { FileText  } from 'lucide-react';
import { ResumeOption  } from '../resume-selector/types';
import { ResumePreviewCard  } from './ResumePreviewCard';
import { Resume } from '@/types/resume';
interface SelectResumeSectionProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  resumeOptions: ResumeOption[],
  selectedResume: ResumeOption | null,
  handleResumeSelect: (resumeId: string) => void,
  handleDownloadResume: () => void,
  isLoading: boolean;
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
=======

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react',;
=======
  handleDownloadResume;import React from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  handleDownloadResume;import React from 'react',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
  handleResumeSelect: (resumeId: string) => void,;
  handleDownloadResume: () => void,;
  isLoading: boolean;
}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




  resumeOptions: ResumeOption[]
  selectedResume: ResumeOption | null;
  handleResumeSelect: (resumeId: string) => void;
  handleDownloadResume: () => void;
  isLoading: boolean;
}
<<<<<<< HEAD
export function SelectResumeSection({
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  resumeOptions,
  selectedResume,
  handleResumeSelect,
  handleDownloadResume,
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {FileText} from 'lucide-react';
import {ResumeOption} from '../resume - selector / types';
=======
export function SelectResumeSection({}
';
import {FileText} from 'lucide-react';'
import {ResumeOption} from '../resume - selector / types';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {ResumePreviewCard} from './ResumePreviewCard';

                selectedResume?.id === option && option.id '
                  ? 'bg-zion-purple/20 border border-zion-purple' 

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
            />
          )}
        </>
      )}
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
