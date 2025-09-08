
import React, { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",
import { Label } from "@/components/ui/label",
import { Plus, Loader2 } from 'lucide-react'
import { useResume } from "@/hooks/useResume",
import { exportResumeToPDF } from "@/utils/pdfExport",
import { toast } from "@/components/ui/use-toast";
import { ResumePreviewCard  } from './ResumePreviewCard';
import { UploadSection  } from './UploadSection';
import { SelectResumeSection  } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps  } from './types';
import { logErrorToProduction } from '@/utils/productionLogger';
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {
<<<<<<< HEAD

  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { resume, fetchResume } = useResume();
  // Fetch resume data when component mounts
  useEffect(() => {
    const loadResumes = null;
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>
      
      <RadioGroup 
        value={selectedOption} 
        onValueChange={(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}
        className="space-y-3"><div className="flex items-center space-x-2">
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
          className="text-zion-purple border-zion-purple/20"><Plus className="h-4 w-4 mr-2" />
          Generate Resume Now
        </Button>
      </div>
    </div>
=======
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent')
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null)
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([])
  const [customFile, setCustomFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { resume, fetchResume } = useResume()
  // Fetch resume data when component mounts
  useEffect((,) => {
    const loadResumes = async () => {
      setIsLoading(true)
      try {
        await fetchResume()
      } catch (error) {
        logErrorToProduction('Error loading resumes:', { data: error })
      } finally {
        setIsLoading(false)
      }
    }
            return
      }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  )
}