export function SelectResumeSection({
<<<<<<< HEAD
  resumeOptions,
  selectedResume,
  handleResumeSelect,
  handleDownloadResume,
=======
  resumeOptions;
  selectedResume;
  handleResumeSelect;
  handleDownloadResume;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
              className={`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id
                  ? 'bg-zion-purple/20 border border-zion-purple'
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
              }`}
              onClick={() => handleResumeSelect(option.id)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          

          

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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


}
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
            />;


          )}
        </>
      )}
<<<<<<< HEAD
    </div>
  )
}}
}
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  );
}};
};

    </div>;
  );
}
;