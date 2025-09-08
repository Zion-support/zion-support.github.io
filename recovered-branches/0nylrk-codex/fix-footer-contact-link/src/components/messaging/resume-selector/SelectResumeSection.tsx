









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
          ;
