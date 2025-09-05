
import React from 'react';

interface SelectResumeSectionProps {_resumeOptions: ResumeOption[];
  selectedResume: ResumeOption | null;
  handleResumeSelect: (_resumeId: string) => void;
  handleDownloadResume: () => void;
  isLoading: boolean;}

export function SelectResumeSection(_{_resumeOptions, _selectedResume, _handleResumeSelect, _handleDownloadResume, _isLoading}: SelectResumeSectionProps) {_return (
    <div className="space-y-2">
      {resumeOptions.length === 0 ? (
        <p className="text-sm text-zion-slate">No saved resumes found.</p>
      ) : (_<>
          {resumeOptions.map((option) => (_<button
              key={option.id}
              className={_`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id 
                  ? 'bg-zion-purple/20 border border-zion-purple' 
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'}`}
              onClick={_() => handleResumeSelect(option.id)}
            >
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
                <span className="text-white">{_option.title}</span>
              </div>
            </button>
          ))}
          
          {_selectedResume?.type === 'ai_resume' && selectedResume.resume && (
            <ResumePreviewCard
              resume={selectedResume.resume as Resume}
              onDownload={_handleDownloadResume}
              isLoading={_isLoading}
            />
          )}
        </>
      )}
    </div>
  );
}
