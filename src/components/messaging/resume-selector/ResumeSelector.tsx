
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Plus, Loader2 } from 'lucide-react'
import { useResume } from "@/hooks/useResume";
import { exportResumeToPDF } from "@/utils/pdfExport";
import { toast } from "@/components/ui/use-toast";
import { ResumePreviewCard } from './ResumePreviewCard';
import { UploadSection } from './UploadSection';
import { SelectResumeSection } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps } from './types';
import {logErrorToProduction} from '@/utils/productionLogger';
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {

  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),
  const [customFile, setCustomFile] = useState<File | null>(null),
  const [isLoading, setIsLoading] = useState($2);
  const { resume, fetchResume } = useResume($2);
  // Fetch resume data when component mounts
  useEffect(() => {
    const loadResumes = async () => {
      setIsLoading($2);
      try {
        await fetchResume()
      } catch (error) {
        logErrorToProduction('Error loading resumes:', { data: error})
      } finally {
        setIsLoading(false)
      }
    },
    
    loadResumes()
  }, [fetchResume]),
  
  // Update resume options when resume data changes
  useEffect(() => {
    if (resume) {
      const options: ResumeOption[] = [{
        id: resume.id || 'current',
        title: resume.basic_info.title,
        type: 'ai_resume',
        resume: resume}],
      
      setResumeOptions($2);
      // Pre-select the most recent resume
      if (options.length > 0 && selectedOption === 'recent' && options[0]) {
        setSelectedResume($2);
        onResumeSelected(options[0])
      }
    }
  }, [resume, selectedOption, onResumeSelected]),
  
  // Handle radio option change
  const handleOptionChange = (value: 'recent' | 'select' | 'upload') => {
    setSelectedOption($2);
    if (value === 'recent' && resumeOptions.length > 0 && resumeOptions[0]) {
      setSelectedResume($2);
      onResumeSelected(resumeOptions[0])
    } else if (value = $2;
  // Handle resume selection change
  const handleResumeSelect = (resumeId: string) => {
    const selected = resumeOptions.find($2);
    if (selected) {
      setSelectedResume($2);
      onResumeSelected(selected)
    }
  },
  
  // Handle custom file upload
  const handleFileUpload = $2;
      // Check if it's a PDF file
      if (file.type !== 'application/pdf') {
        toast($2);
        return
      }
      
      // Create a custom resume option
      const customOption: ResumeOption = $2;
        title: file.name,
        type: 'custom_upload',
        file: file},
      
      setCustomFile($2);
      setSelectedResume($2);
      onResumeSelected(customOption)
    }
  },
  
  // Handle resume download
  const handleDownloadResume = async () => {
    if (!selectedResume || selectedResume.type !== 'ai_resume' || !selectedResume.resume) {
      return
    }
    
    try {
      setIsLoading($2);
      const pdfBlob = await exportResumeToPDF($2);
      // Create download link
      const url = URL.createObjectURL($2);
      const link = document.createElement($2);
      link.href = $2;
      link.download = $2;
      document.body.appendChild($2);
      link.click($2);
      // Clean up
      document.body.removeChild($2);
      URL.revokeObjectURL($2);
      toast({
        title: "Success!",
        description: "Your resume has been downloaded."})
    } catch (error) {
      logErrorToProduction($2);
      toast({
        title: "Download failed",
        description: "There was an error downloading your resume.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  },
  
  // Handle "Generate Resume Now" button
  const handleGenerateResume = $2;
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>
      
      <RadioGroup 
        value={selectedOption} 
        onValueChange={(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}
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
      <div className="flex justify-between items-center pt-2">
        <Button 
          variant="outline"
          onClick={handleGenerateResume}
          className="text-zion-purple border-zion-purple/20"
        >
          <Plus className="h-4 w-4 mr-2" />
          Generate Resume Now
        </Button>
      </div>
    </div>
  )
}
