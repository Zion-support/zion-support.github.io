
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",
import { Label } from "@/components/ui/label",
import { Plus, Loader2 } from 'lucide-react'
import { useResume } from "@/hooks/useResume",
import { exportResumeToPDF } from "@/utils/pdfExport",
import { toast } from "@/components/ui/use-toast",
import { ResumePreviewCard } from './ResumePreviewCard',
import { UploadSection } from './UploadSection',
import { SelectResumeSection } from './SelectResumeSection',
import { ResumeOption, ResumeSelectorProps } from './types',
import {logErrorToProduction} from '@/utils/productionLogger',
=======
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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {

  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),
  const [customFile, setCustomFile] = useState<File | null>(null),
  const [isLoading, setIsLoading] = useState(false),
  
  const { resume, fetchResume } = useResume(),
  
  // Fetch resume data when component mounts
  useEffect(() => {
    const loadResumes = async () => {
      setIsLoading(true),
      try {
        await fetchResume()
      } catch (error) {
        logErrorToProduction('Error loading resumes:', { data: error })
      } finally {
        setIsLoading(false)
      }
    },
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    loadResumes()
  }, [fetchResume]),
  
  // Update resume options when resume data changes
  useEffect__(() => {_if (resume) {
      const options: ResumeOption[] = [{
<<<<<<< HEAD
        id: resume.id || 'current',
        title: resume.basic_info.title,
        type: 'ai_resume',
        resume: resume
      }],
=======
        id: resume.id || 'current', _title: resume.basic_info.title, _type: 'ai_resume', _resume: resume}];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setResumeOptions(options),
      
      // Pre-select the most recent resume
<<<<<<< HEAD
      if (options.length > 0 && selectedOption === 'recent' && options[0]) {
        setSelectedResume(options[0]),
        onResumeSelected(options[0])
      }
=======
      if (options.length > 0 && selectedOption === 'recent' && options[0]) {_setSelectedResume(options[0]);
        onResumeSelected(options[0]);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [resume, selectedOption, onResumeSelected]),
  
  // Handle radio option change
<<<<<<< HEAD
  const handleOptionChange = (value: 'recent' | 'select' | 'upload') => {
    setSelectedOption(value),
    
    if (value === 'recent' && resumeOptions.length > 0 && resumeOptions[0]) {
      setSelectedResume(resumeOptions[0]),
      onResumeSelected(resumeOptions[0])
    } else if (value === 'select') {
      // Reset selection until user chooses
      setSelectedResume(null)
    } else if (value === 'upload') {
      setSelectedResume(null)
    }
  },
  
  // Handle resume selection change
  const handleResumeSelect = (resumeId: string) => {
    const selected = resumeOptions.find(opt => opt.id === resumeId),
    if (selected) {
      setSelectedResume(selected),
      onResumeSelected(selected)
    }
  },
  
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0],
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Check if it's a PDF file
      if (file.type !== 'application/pdf') {
        toast({
<<<<<<< HEAD
<<<<<<< HEAD
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive"
        }),
        return
=======
          title: &quot;Invalid file type&quot;,
          description: &quot;Please upload a PDF file&quot;,
          variant: &quot;destructive&quot;
        });
=======
          title: "Invalid file type", _description: "Please upload a PDF file", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      // Create a custom resume option
<<<<<<< HEAD
      const customOption: ResumeOption = {
        id: 'custom-upload',
        title: file.name,
        type: 'custom_upload',
        file: file
      },
=======
      const customOption: ResumeOption = {_id: 'custom-upload', _title: file.name, _type: 'custom_upload', _file: file};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setCustomFile(file),
      setSelectedResume(customOption),
      onResumeSelected(customOption)
    }
  },
  
  // Handle resume download
<<<<<<< HEAD
  const handleDownloadResume = async () => {
    if (!selectedResume || selectedResume.type !== 'ai_resume' || !selectedResume.resume) {
      return
    }
    
    try {
      setIsLoading(true),
      const pdfBlob = await exportResumeToPDF(selectedResume.resume),
      
      // Create download link
      const url = URL.createObjectURL(pdfBlob),
      const link = document.createElement('a'),
      link.href = url,
      link.download = `${selectedResume.title || 'Resume'}.pdf`,
      document.body.appendChild(link),
      link.click(),
      
      // Clean up
      document.body.removeChild(link),
      URL.revokeObjectURL(url),
      
      toast({
<<<<<<< HEAD
        title: "Success!",
        description: "Your resume has been downloaded."})
=======
        title: &quot;Success!&quot;,
        description: &quot;Your resume has been downloaded.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (error) {
      logErrorToProduction('Error downloading PDF:', { data: error }),
      toast({
<<<<<<< HEAD
        title: "Download failed",
        description: "There was an error downloading your resume.",
        variant: "destructive"
      })
=======
        title: &quot;Download failed&quot;,
        description: &quot;There was an error downloading your resume.&quot;,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },
  
  // Handle &quot;Generate Resume Now&quot; button
  const handleGenerateResume = () => {
    window.open('/dashboard/talent/portfolio_blank')
  },
  
  return (
    <div className=&quot;space-y-4&quot;>
      <h3 className=&quot;text-lg font-medium text-white&quot;>Attach Resume</h3>
      
      <RadioGroup 
        value={selectedOption} 
        onValueChange={(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}
        className=&quot;space-y-3&quot;
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
      
<<<<<<< HEAD
      {/* Generate Resume Now button */}
      <div className=&quot;flex justify-between items-center pt-2&quot;>
        <Button 
          variant=&quot;outline&quot;
          onClick={handleGenerateResume}
          className=&quot;text-zion-purple border-zion-purple/20&quot;
=======
      {_/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">
        <Button 
          variant="outline"
          onClick={_handleGenerateResume}
          className="text-zion-purple border-zion-purple/20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <Plus className=&quot;h-4 w-4 mr-2&quot; />
          Generate Resume Now
        </Button>
      </div>
    </div>
  )
}
