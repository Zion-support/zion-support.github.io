

export function SelectResumeSection({
  resumeOptions;
  selectedResume;
  handleResumeSelect;
  handleDownloadResume;
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            >
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
                <span className="text-white">{option.title}</span>
              </div>
            </button>
          ))}

          
=======

          

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


}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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

  );
}};
};

=======
    </div>;
  );
}
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
