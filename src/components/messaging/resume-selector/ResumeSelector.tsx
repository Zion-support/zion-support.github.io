
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

export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {

  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),
  const [customFile, setCustomFile] = useState<File | null>(null),
  const [isLoading, setIsLoading] = useState(false),
  
  const { resume, fetchResume } = useResume(),
=======
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

  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent');
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { resume, fetchResume } = useResume();
>>>>>>> origin/auto/autonomy-17186719616
  
  // Fetch resume data when component mounts
  useEffect(() => {
    const loadResumes = async () => {
<<<<<<< HEAD
      setIsLoading(true),
      try {
        await fetchResume(),
      } catch (error) {
        logErrorToProduction('Error loading resumes:', { data: error }),
      } finally {
        setIsLoading(false),
      }
    },
    
    loadResumes(),
  }, [fetchResume]),
=======
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
>>>>>>> origin/auto/autonomy-17186719616
  
  // Update resume options when resume data changes
  useEffect(() => {
    if (resume) {
      const options: ResumeOption[] = [{
        id: resume.id || 'current',
        title: resume.basic_info.title,
        type: 'ai_resume',
        resume: resume
<<<<<<< HEAD
      }],
      
      setResumeOptions(options),
      
      // Pre-select the most recent resume
      if (options.length > 0 && selectedOption === 'recent' && options[0]) {
        setSelectedResume(options[0]),
        onResumeSelected(options[0]),
      }
    }
  }, [resume, selectedOption, onResumeSelected]),
  
  // Handle radio option change
  const handleOptionChange = (value: 'recent' | 'select' | 'upload') => {
    setSelectedOption(value),
    
    if (value === 'recent' && resumeOptions.length > 0 && resumeOptions[0]) {
      setSelectedResume(resumeOptions[0]),
      onResumeSelected(resumeOptions[0])
    } else if (value === 'select') {
      // Reset selection until user chooses
      setSelectedResume(null),
    } else if (value === 'upload') {
      setSelectedResume(null),
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
=======
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
>>>>>>> origin/auto/autonomy-17186719616
  
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
<<<<<<< HEAD
      const file = e.target.files[0],
=======
      const file = e.target.files[0];
>>>>>>> origin/auto/autonomy-17186719616
      
      // Check if it's a PDF file
      if (file.type !== 'application/pdf') {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive"
<<<<<<< HEAD
        }),
        return,
=======
        });
        return;
>>>>>>> origin/auto/autonomy-17186719616
      }
      
      // Create a custom resume option
      const customOption: ResumeOption = {
        id: 'custom-upload',
        title: file.name,
        type: 'custom_upload',
        file: file
<<<<<<< HEAD
      },
      
      setCustomFile(file),
      setSelectedResume(customOption),
      onResumeSelected(customOption),
    }
  },
=======
      };
      
      setCustomFile(file);
      setSelectedResume(customOption);
      onResumeSelected(customOption);
    }
  };
>>>>>>> origin/auto/autonomy-17186719616
  
  // Handle resume download
  const handleDownloadResume = async () => {
    if (!selectedResume || selectedResume.type !== 'ai_resume' || !selectedResume.resume) {
<<<<<<< HEAD
      return,
    }
  };

  const handleExport = async () => {
    if (!selectedResume) return;
    
    try {
      await exportResumeToPDF(selectedResume);
      toast({
        title: "Success!",
        description: "Your resume has been downloaded."}),
    } catch (error) {
=======
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
        title: "Success!",
        description: "Your resume has been downloaded.",
      });
    } catch (error) {
      logErrorToProduction('Error downloading PDF:', { data: error });
>>>>>>> origin/auto/autonomy-17186719616
      toast({
        title: "Download failed",
        description: "There was an error downloading your resume.",
        variant: "destructive"
<<<<<<< HEAD
      }),
    } finally {
      setIsLoading(false),
    }
  },
  
  // Handle "Generate Resume Now" button
  const handleGenerateResume = () => {
    window.open('/dashboard/talent/portfolio_blank'),
  },
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Select Resume</h2>
        <div className="space-x-2">
          <Button
            variant="outline"
            onClick={() => document.getElementById('file-upload')?.click()}
            disabled={uploading}
          >
            <Plus className="h-4 w-4 mr-2" />
            {uploading ? 'Uploading...' : 'Upload New'}
          </Button>
          {selectedResume && (
            <Button onClick={handleExport}>
              Export PDF
            </Button>
          )}
        </div>
      </div>

      <input
        id="file-upload"
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileUpload}
        className="hidden"
      />

      <RadioGroup
        value={selectedResume?.id || ''}
        onValueChange={(value) => {
          const resume = resumes.find(r => r.id === value);
          onResumeSelect(resume || null);
        }}
      >
        <div className="space-y-3">
          {resumes.map((resume) => (
            <div key={resume.id} className="flex items-center space-x-3">
              <RadioGroupItem value={resume.id} id={resume.id} />
              <Label htmlFor={resume.id} className="flex-1 cursor-pointer">
                <div className="p-3 border rounded-lg hover:bg-gray-50">
                  <h3 className="font-medium">{resume.title}</h3>
                  <p className="text-sm text-gray-500">{resume.description}</p>
                  <div className="flex items-center space-x-4 mt-1 text-xs text-gray-400">
                    <span>Modified: {resume.lastModified}</span>
                    <span>{resume.fileSize}</span>
                  </div>
                </div>
              </Label>
            </div>
          ))}
=======
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle "Generate Resume Now" button
  const handleGenerateResume = () => {
    window.open('/dashboard/talent/portfolio', '_blank');
  };
  
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
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
