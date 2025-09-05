
import React, { useState, useEffect } from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
import { RadioGroup, RadioGroupItem } from &quot;@/components/ui/radio-group&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Plus, Loader2 } from 'lucide-react'
import { useResume } from &quot;@/hooks/useResume&quot;;
import { exportResumeToPDF } from &quot;@/utils/pdfExport&quot;;
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { ResumePreviewCard } from './ResumePreviewCard';
import { UploadSection } from './UploadSection';
import { SelectResumeSection } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps } from './types';
import {logErrorToProduction} from '@/utils/productionLogger';

export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {

  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent');
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { resume, fetchResume } = useResume();
  
  // Fetch resume data when component mounts
  useEffect(() => {
    const loadResumes = async () => {
      setIsLoading(true);
      try {
        await fetchResume();
      } catch (error) {
        logErrorToProduction('Error loading resumes:', { data: error });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadResumes();
  }, [fetchResume]);
  
  // Update resume options when resume data changes
  useEffect(() => {
    if (resume) {
      const options: ResumeOption[] = [{
        id: resume.id || 'current',
        title: resume.basic_info.title,
        type: 'ai_resume',
        resume: resume
      }];
      
      setResumeOptions(options);
      
      // Pre-select the most recent resume
      if (options.length > 0 && selectedOption === 'recent' && options[0]) {
        setSelectedResume(options[0]);
        onResumeSelected(options[0]);
      }
    }
  }, [resume, selectedOption, onResumeSelected]);
  
  // Handle radio option change
  const handleOptionChange = (value: 'recent' | 'select' | 'upload') => {
    setSelectedOption(value);
    
    if (value === 'recent' && resumeOptions.length > 0 && resumeOptions[0]) {
      setSelectedResume(resumeOptions[0]);
      onResumeSelected(resumeOptions[0]);
    } else if (value === 'select') {
      // Reset selection until user chooses
      setSelectedResume(null);
    } else if (value === 'upload') {
      setSelectedResume(null);
    }
  };
  
  // Handle resume selection change
  const handleResumeSelect = (resumeId: string) => {
    const selected = resumeOptions.find(opt => opt.id === resumeId);
    if (selected) {
      setSelectedResume(selected);
      onResumeSelected(selected);
    }
  };
  
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check if it's a PDF file
      if (file.type !== 'application/pdf') {
        toast({
          title: &quot;Invalid file type&quot;,
          description: &quot;Please upload a PDF file&quot;,
          variant: &quot;destructive&quot;
        });
        return;
      }
      
      // Create a custom resume option
      const customOption: ResumeOption = {
        id: 'custom-upload',
        title: file.name,
        type: 'custom_upload',
        file: file
      };
      
      setCustomFile(file);
      setSelectedResume(customOption);
      onResumeSelected(customOption);
    }
  };
  
  // Handle resume download
  const handleDownloadResume = async () => {
    if (!selectedResume || selectedResume.type !== 'ai_resume' || !selectedResume.resume) {
      return;
    }
    
    try {
      setIsLoading(true);
      const pdfBlob = await exportResumeToPDF(selectedResume.resume);
      
      // Create download link
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedResume.title || 'Resume'}.pdf`;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast({
        title: &quot;Success!&quot;,
        description: &quot;Your resume has been downloaded.&quot;});
    } catch (error) {
      logErrorToProduction('Error downloading PDF:', { data: error });
      toast({
        title: &quot;Download failed&quot;,
        description: &quot;There was an error downloading your resume.&quot;,
        variant: &quot;destructive&quot;
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle &quot;Generate Resume Now&quot; button
  const handleGenerateResume = () => {
    window.open('/dashboard/talent/portfolio', '_blank');
  };
  
  return (
    <div className=&quot;space-y-4&quot;>
      <h3 className=&quot;text-lg font-medium text-white&quot;>Attach Resume</h3>
      
      <RadioGroup 
        value={selectedOption} 
        onValueChange={(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}
        className=&quot;space-y-3&quot;
      >
        <div className=&quot;flex items-center space-x-2&quot;>
          <RadioGroupItem value=&quot;recent&quot; id=&quot;recent&quot; />
          <Label htmlFor=&quot;recent&quot; className=&quot;text-white&quot;>Use most recent AI Resume</Label>
        </div>
        
        <div className=&quot;flex items-center space-x-2&quot;>
          <RadioGroupItem value=&quot;select&quot; id=&quot;select&quot; />
          <Label htmlFor=&quot;select&quot; className=&quot;text-white&quot;>Select from saved versions</Label>
        </div>
        
        <div className=&quot;flex items-center space-x-2&quot;>
          <RadioGroupItem value=&quot;upload&quot; id=&quot;upload&quot; />
          <Label htmlFor=&quot;upload&quot; className=&quot;text-white&quot;>Upload a custom resume (PDF)</Label>
        </div>
      </RadioGroup>
      
      {/* Resume selection options based on radio selection */}
      {selectedOption === 'recent' && resume && (
        <ResumePreviewCard
          resume={resume}
          onDownload={handleDownloadResume}
          isLoading={isLoading}
        />
      )}
      
      {selectedOption === 'select' && (
        <SelectResumeSection
          resumeOptions={resumeOptions}
          selectedResume={selectedResume}
          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          isLoading={isLoading}
        />
      )}
      
      {selectedOption === 'upload' && (
        <UploadSection
          customFile={customFile}
          onFileUpload={handleFileUpload}
        />
      )}
      
      {/* Generate Resume Now button */}
      <div className=&quot;flex justify-between items-center pt-2&quot;>
        <Button 
          variant=&quot;outline&quot;
          onClick={handleGenerateResume}
          className=&quot;text-zion-purple border-zion-purple/20&quot;
        >
          <Plus className=&quot;h-4 w-4 mr-2&quot; />
          Generate Resume Now
        </Button>
      </div>
    </div>
  );
}
