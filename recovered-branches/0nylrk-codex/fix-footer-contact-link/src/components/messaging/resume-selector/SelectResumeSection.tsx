


<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { FileText  } from 'lucide-react';
import { ResumeOption  } from '../resume-selector/types';
import { ResumePreviewCard  } from './ResumePreviewCard';
import { Resume } from '@/types/resume';
interface SelectResumeSectionProps {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  resumeOptions: ResumeOption[],
  selectedResume: ResumeOption | null,
  handleResumeSelect: (resumeId: string) => void,
  handleDownloadResume: () => void,
  isLoading: boolean
}

export function SelectResumeSection({;
  resumeOptions;
  selectedResume;
  handleResumeSelect;
  handleDownloadResume;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react',;
import { FileText } from 'lucide-react',;
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {FileText} from 'lucide-react';
import {ResumeOption} from '../resume - selector / types';
import {ResumePreviewCard} from './ResumePreviewCard';

                selectedResume?.id === option && option.id 
                  ? 'bg-zion-purple/20 border border-zion-purple' 

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


          {selectedResume?.type === 'ai_resume' && selectedResume && selectedResume.resume && (;

            <ResumePreviewCard
              resume={selectedResume && selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
          )}
        </>;
      )}

    </div>;
  );
}

<<<<<<< HEAD

import React from 'react',;
import { FileText } from 'lucide-react',;
import { ResumeOption } from '../resume-selector/types',;
import { ResumePreviewCard } from './ResumePreviewCard',;
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
                <span className="text-white">{option.title}</span>;
              </div>;
            </button>;
          ))}
          ;
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
import {Resume} from '@/types / resume';
interface SelectResumeSectionProps {
  resume_options: ResumeOption[],
  selected_resume: ResumeOption | null,
  handleResumeSelect: (resume_id: string) => void,
  handleDownloadResume: () => void,
  is_loading: boolean;
}
export /**
 * SelectResumeSection - Function description
 */
function SelectResumeSection() {
  return (
    <div className="space - y-2">;
      {resume_options.length === 0 ? (
        <p className="text - sm text - zion - slate">No saved resumes found.</p>) : (
        <>;
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
              resume={selected_resume.resume as Resume}
              on_download={handleDownloadResume}
              is_loading={is_loading}
            />)}
        </>)}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
