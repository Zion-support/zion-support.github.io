import { FileText } from 'lucide-react';

interface ResumeOption {
  id: string;
  title: string;
  description: string;
  lastModified: string;
  fileSize: string;
  url: string;
}

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
              }`}
              onClick={() => handleResumeSelect(option.id)}

            >
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
                <span className="text-white">{option.title}</span>
              </div>
            </button>
          ))}

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
  );
}};
};

    </div>;
  );
}

;
