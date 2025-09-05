
import React, {_useState, _useEffect} from 'react';

export function ResumeSelector(_{_onResumeSelected}: ResumeSelectorProps) {_const [selectedOption, _setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent');
  const [selectedResume, _setSelectedResume] = useState<ResumeOption | null>(null);
  const [resumeOptions, _setResumeOptions] = useState<ResumeOption[]>([]);
  const [customFile, _setCustomFile] = useState<File | null>(null);
  const [isLoading, _setIsLoading] = useState(false);
  
  const { resume, _fetchResume} = useResume();
  
  // Fetch resume data when component mounts
  useEffect__(() => {_const _loadResumes = async () => {
      setIsLoading(true);
      try {
        await fetchResume();} catch (error) {_logErrorToProduction('Error loading resumes:', _{ data: error});
      } finally {_setIsLoading(false);}
    };
    
    loadResumes();
  }, [fetchResume]);
  
  // Update resume options when resume data changes
  useEffect__(() => {_if (resume) {
      const options: ResumeOption[] = [{
        id: resume.id || 'current', _title: resume.basic_info.title, _type: 'ai_resume', _resume: resume}];
      
      setResumeOptions(options);
      
      // Pre-select the most recent resume
      if (options.length > 0 && selectedOption === 'recent' && options[0]) {_setSelectedResume(options[0]);
        onResumeSelected(options[0]);}
    }
  }, [resume, selectedOption, onResumeSelected]);
  
  // Handle radio option change
  const _handleOptionChange = (_value: 'recent' | 'select' | 'upload') => {_setSelectedOption(value);
    
    if (value === 'recent' && resumeOptions.length > 0 && resumeOptions[0]) {
      setSelectedResume(resumeOptions[0]);
      onResumeSelected(resumeOptions[0]);} else if (value === 'select') {_// Reset selection until user chooses
      setSelectedResume(null);} else if (value === 'upload') {_setSelectedResume(null);}
  };
  
  // Handle resume selection change
  const _handleResumeSelect = (_resumeId: string) => {_const _selected = resumeOptions.find(opt => opt.id === resumeId);
    if (selected) {
      setSelectedResume(selected);
      onResumeSelected(selected);}
  };
  
  // Handle custom file upload
  const _handleFileUpload = (_e: React.ChangeEvent<HTMLInputElement>) => {_if (e.target.files && e.target.files[0]) {
      const _file = e.target.files[0];
      
      // Check if it's a PDF file
      if (file.type !== 'application/pdf') {
        toast({
          title: "Invalid file type", _description: "Please upload a PDF file", _variant: "destructive"});
        return;
      }
      
      // Create a custom resume option
      const customOption: ResumeOption = {_id: 'custom-upload', _title: file.name, _type: 'custom_upload', _file: file};
      
      setCustomFile(file);
      setSelectedResume(customOption);
      onResumeSelected(customOption);
    }
  };
  
  // Handle resume download
  const _handleDownloadResume = async () => {_if (!selectedResume || selectedResume.type !== 'ai_resume' || !selectedResume.resume) {
      return;}
    
    try {_setIsLoading(true);
      const _pdfBlob = await exportResumeToPDF(selectedResume.resume);
      
      // Create download link
      const _url = window.URL.createObjectURL(pdfBlob);
      const _link = document.createElement('a');
      link.href = url;
      link.download = `${selectedResume.title || 'Resume'}.pdf`;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast({_title: "Success!", _description: "Your resume has been downloaded."});
    } catch (error) {_logErrorToProduction('Error downloading PDF:', _{ data: error});
      toast({_title: "Download failed", _description: "There was an error downloading your resume.", _variant: "destructive"});
    } finally {_setIsLoading(false);}
  };
  
  // Handle "Generate Resume Now" button
  const _handleGenerateResume = () => {_window.open('/dashboard/talent/portfolio', _'_blank');};
  
  return (_<div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>
      
      <RadioGroup 
        value={_selectedOption} 
        onValueChange={_(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recent" id="recent" />
          <Label htmlFor="recent" className="text-white">Use most recent AI Resume</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="select" id="select" />
          <Label htmlFor="select" className="text-white">Select from saved versions</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upload" id="upload" />
          <Label htmlFor="upload" className="text-white">Upload a custom resume (PDF)</Label>
        </div>
      </RadioGroup>
      
      {_/* Resume selection options based on radio selection */}
      {_selectedOption === 'recent' && resume && (
        <ResumePreviewCard
          resume={resume}
          onDownload={_handleDownloadResume}
          isLoading={_isLoading}
        />
      )}
      
      {_selectedOption === 'select' && (
        <SelectResumeSection
          resumeOptions={resumeOptions}
          selectedResume={_selectedResume}
          handleResumeSelect={_handleResumeSelect}
          handleDownloadResume={_handleDownloadResume}
          isLoading={_isLoading}
        />
      )}
      
      {_selectedOption === 'upload' && (
        <UploadSection
          customFile={customFile}
          onFileUpload={_handleFileUpload}
        />
      )}
      
      {_/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">
        <Button 
          variant="outline"
          onClick={_handleGenerateResume}
          className="text-zion-purple border-zion-purple/20"
        >
          <Plus className="h-4 w-4 mr-2" />
          Generate Resume Now
        </Button>
      </div>
    </div>
  );
}
