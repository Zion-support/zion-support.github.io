import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Plus, Loader2 } from 'lucide-react';
import { useResume } from '@/hooks/useResume';
import { exportResumeToPDF } from '@/utils/pdfExport';
import { toast } from '@/components/ui/use-toast';
import { ResumePreviewCard } from './ResumePreviewCard';
import { UploadSection } from './UploadSection';
import { SelectResumeSection } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps } from './types';
import { logErrorToProduction } from '@/utils/productionLogger';

export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent');
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { resume, fetchResume } = useResume();

  useEffect(() => {
    loadResumeOptions();
  }, []);

  const loadResumeOptions = async () => {
    try {
      setIsLoading(true);
      const resumes = await fetchResume();
      const options: ResumeOption[] = resumes.map((resume, index) => ({
        id: resume.id || `resume-${index}`,
        name: resume.title || `Resume ${index + 1}`,
        lastModified: resume.updatedAt || new Date().toISOString(),
        preview: resume.summary || 'No preview available'
      }));
      setResumeOptions(options);
    } catch (error) {
      logErrorToProduction('Failed to load resume options:', { error });
      toast({
        title: 'Error',
        description: 'Failed to load resumes. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResumeSelect = (resume: ResumeOption) => {
    setSelectedResume(resume);
    onResumeSelected(resume);
  };

  const handleFileUpload = (file: File) => {
    setCustomFile(file);
    const resumeOption: ResumeOption = {
      id: `uploaded-${Date.now()}`,
      name: file.name,
      lastModified: new Date().toISOString(),
      preview: 'Uploaded file',
      file: file
    };
    setSelectedResume(resumeOption);
    onResumeSelected(resumeOption);
  };

  const handleExportPDF = async () => {
    if (!selectedResume) return;

    try {
      setIsLoading(true);
      await exportResumeToPDF(selectedResume);
      toast({
        title: 'Success',
        description: 'Resume exported to PDF successfully!'
      });
    } catch (error) {
      logErrorToProduction('PDF export failed:', { error });
      toast({
        title: 'Export Failed',
        description: 'Failed to export resume to PDF. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Select Resume
        </h3>
        <p className="text-gray-600">
          Choose a resume to attach to your message
        </p>
      </div>

      <RadioGroup
        value={selectedOption}
        onValueChange={(value: 'recent' | 'select' | 'upload') => setSelectedOption(value)}
        className="space-y-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recent" id="recent" />
          <Label htmlFor="recent">Use most recent resume</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="select" id="select" />
          <Label htmlFor="select">Select from saved resumes</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upload" id="upload" />
          <Label htmlFor="upload">Upload new resume</Label>
        </div>
      </RadioGroup>

      {selectedOption === 'recent' && resume && (
        <div className="space-y-4">
          <ResumePreviewCard
            resume={{
              id: resume.id || 'recent',
              name: resume.title || 'Most Recent Resume',
              lastModified: resume.updatedAt || new Date().toISOString(),
              preview: resume.summary || 'No preview available'
            }}
            onSelect={() => handleResumeSelect({
              id: resume.id || 'recent',
              name: resume.title || 'Most Recent Resume',
              lastModified: resume.updatedAt || new Date().toISOString(),
              preview: resume.summary || 'No preview available'
            })}
            isSelected={selectedResume?.id === resume.id}
          />
        </div>
      )}

      {selectedOption === 'select' && (
        <SelectResumeSection
          resumes={resumeOptions}
          onSelect={handleResumeSelect}
          selectedResume={selectedResume}
          isLoading={isLoading}
        />
      )}

      {selectedOption === 'upload' && (
        <UploadSection
          onFileUpload={handleFileUpload}
          selectedFile={customFile}
        />
      )}

      {selectedResume && (
        <div className="flex justify-center space-x-4 pt-4 border-t">
          <Button
            onClick={handleExportPDF}
            disabled={isLoading}
            variant="outline"
            size="sm"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Plus className="h-4 w-4 mr-2" />
            )}
            Export PDF
          </Button>
        </div>
      )}
    </div>
  );
}