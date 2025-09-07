
<<<<<<< HEAD
import React from 'react';

import { FileText  } from 'lucide-react';
import { ResumeOption  } from '../resume-selector/types';
import { ResumePreviewCard  } from './ResumePreviewCard';
import { Resume } from '@/types/resume';

interface SelectResumeSectionProps {
  resumeOptions: ResumeOption[];
  selectedResume: ResumeOption | null;
  handleResumeSelect: (resumeId: string) => void;
  handleDownloadResume: () => void;
=======


pr-12325
  resumeOptions: ResumeOption[],
  selectedResume: ResumeOption | null,
  handleResumeSelect: (resumeId: string) => void,
  handleDownloadResume: () => void,
>>>>>>> origin/main
  isLoading: boolean
  isLoading: boolean;
pr-12325
}

export function SelectResumeSection({;
import React from 'react';
  resumeOptions;
  selectedResume;
  handleResumeSelect;
  handleDownloadResume;import React from 'react',;
  handleDownloadResume;

import React from 'react',;
pr-12325
import { FileText } from 'lucide-react',;
import { ResumeOption } from '../resume-selector/types',;
import { ResumePreviewCard } from './ResumePreviewCard',;
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
export function SelectResumeSection({;
import React from 'react';'
  resumeOptions;
  selectedResume;

  handleResumeSelect;
  handleDownloadResume;
'
import React from 'react',;''
import { FileText } from 'lucide-react',;''
import { ResumeOption } from '../resume-selector/types',;''
import { ResumePreviewCard } from './ResumePreviewCard',;''
import { Resume } from '@/types/resume',;'

interface SelectResumeSectionProps {;
  resumeOptions: ResumeOption[],;
  selectedResume: ResumeOption | null,;)
  handleResumeSelect: (resumeId: string) => void,;
  handleDownloadResume: () => void,;}
  isLoading: boolean;}
}

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
            <ResumePreviewCard
  selectedResume: ResumeOption | null,;)
  handleResumeSelect: (resumeId: string) => void,;
  handleDownloadResume: () => void,;


  selectedResume: ResumeOption | null;
  handleResumeSelect: (resumeId: string) => void;,
  handleDownloadResume: () => void;
export function SelectResumeSection({
import {FileText} from 'lucide-react';
import {ResumeOption} from '../resume - selector / types';
import {ResumePreviewCard} from './ResumePreviewCard';
                selectedResume?.id === option && option.id;
                  ? 'bg-zion-purple/20 border border-zion-purple
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50
              }`})
              onClick={() => handleResumeSelect(option && option.id)}
            >;
              <div className="flex items-center">;"
</div>"
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;"
"
                <span className="text-white">{option && option.title}</span>;"
              </div>;
            </button>;
            <ResumePreviewCard;
pr-12325
              resume={selectedResume && selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
          )}
        </>;
      )}

</ResumePreviewCard>
        </>;
      )}

    </div>;"
    <div className="space-y-2">;"
        <p className="text-sm text-zion-slate">No saved resumes found.</p>;"
        <>;
          {resumeOptions.map((option) => (;
            <button;
              key={option.id}`;
              className={`w-full text-left p-3 rounded-md transition ${;
                selectedResume?.id === option.id ;"
                  ? 'bg-zion-purple/20 border border-zion-purple' ;
                  :'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50';`;
              onClick={() => handleResumeSelect(option.id)}
</button>
                <span className="text-white">{option.title}</span>;"
              resume={selectedResume.resume as Resume}              onDownload={handleDownloadResume}

              </div>;
            </button>;

            <ResumePreviewCard;
resume={selectedResume && selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
</ResumePreviewCard>
        </>;

      )}
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

