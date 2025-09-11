<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Plus, Loader2 } from 'lucide-react'import { useResume } from "@/hooks/useResume"
import { exportResumeToPDF } from "@/utils/pdfExport"
import { toast } from "@/components/ui/use-toast"
import { ResumePreviewCard } from './ResumePreviewCard'
import { UploadSection } from './UploadSection'
import { SelectResumeSection } from './SelectResumeSection'
import { ResumeOption, ResumeSelectorProps } from './types'
import {logErrorToProduction} from '@/utils/productionLogger'
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {

  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent')
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null)
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([])
  const [customFile, setCustomFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { resume, fetchResume } = useResume()

import React, { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",
import { Label } from "@/components/ui/label",
import { Plus, Loader2 } from 'lucide-react'
import { useResume } from "@/hooks/useResume",
import { exportResumeToPDF } from "@/utils/pdfExport",
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Fetch resume data when component mounts
  useEffect((,) => {
    const loadResumes = async () => {

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Button  } from '@/components / ui / button';
import { RadioGroup, RadioGroupItem  } from '@/components / ui / radio - group';
import { Label  } from '@/components / ui / label';
import { Plus, Loader2 } from 'lucide-react'import { use_resume  } from '@/hooks / use_resume';
import { exportResumeToPDF  } from '@/utils / pdf_export';
import { toast  } from '@/components / ui / use - toast';
import { ResumePreviewCard } from './ResumePreviewCard';
import { UploadSection } from './UploadSection';
import { SelectResumeSection } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps } from './types';
import {logErrorToProduction} from '@/utils / production_logger';
export /**
 * ResumeSelector - Function description
 */
function ResumeSelector() {
  const [selected_option, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent');
  const [selected_resume, setSelectedResume] = useState < ResumeOption | null>(null);
  const [resume_options, setResumeOptions] = useState < ResumeOption[]>([]);
  const [custom_file, setCustomFile] = useState < File | null>(null);
  const [is_loading, setIsLoading] = useState (false);
  const { resume, fetch_resume } = use_resume ();
  // Fetch resume data when component mounts;
  useEffect ((, ) => {
    const load_resumes = async () => {
      setIsLoading (true);


      setIsLoading(true),

      try {
import { toast } from "@/components/ui/use-toast";
import { ResumePreviewCard  } from './ResumePreviewCard';
import { UploadSection  } from './UploadSection';
import { SelectResumeSection  } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps  } from './types';
import { logErrorToProduction } from '@/utils/productionLogger';
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {

  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent')
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null)
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([])
  const [customFile, setCustomFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { resume, fetchResume } = useResume()
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
  
  // Fetch resume data when component mounts
  useEffect(() => {
    const loadResumes = async () => {
      setIsLoading(true)
      setIsLoading(true),
      setIsLoading(true),
      try {
        await fetchResume()
      } catch (error) {
        logErrorToProduction('Error loading resumes:', { data: error })
      } finally {
        setIsLoading(false)
      }
    }
            return;
      }
}

  )
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ;
};
  );
};
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react',;
import { Button } from "@/components/ui/button",;
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;
import { Label } from "@/components/ui/label",;
import { Plus, Loader2 } from 'lucide-react';
import { useResume } from "@/hooks/useResume",;
import { exportResumeToPDF } from "@/utils/pdfExport",;
import { toast } from "@/components/ui/use-toast",;
import { ResumePreviewCard } from './ResumePreviewCard',;
import { UploadSection } from './UploadSection',;
import { SelectResumeSection } from './SelectResumeSection',;
import { ResumeOption, ResumeSelectorProps } from './types',;
import {logErrorToProduction} from '@/utils/productionLogger',;
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),;
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),;
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),;
  const [customFile, setCustomFile] = useState<File | null>(null),;
  const [isLoading, setIsLoading] = useState(false),;
  const { resume, fetchResume } = useResume(),;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;
      setIsLoading(true),;
      try {;
        await fetchResume();
      } catch (error) {;
        logErrorToProduction('Error loading resumes:', { data: error });
      } finally {;
        setIsLoading(false);
      }
    },;
    loadResumes();
  }, [fetchResume]),;
  // Update resume options when resume data changes;
  useEffect(() => {;
    if (resume) {;
      const options: ResumeOption[] = [{;
        id: resume.id || 'current',;
        title: resume.basic_info.title,;
        type: 'ai_resume',;
        resume: resume;
      }],;
      setResumeOptions(options),;
      // Pre-select the most recent resume;
      if (options.length > 0 && selectedOption === 'recent' && options[0]) {;
        setSelectedResume(options[0]),;
        onResumeSelected(options[0]);
      }
<<<<<<< HEAD
    }
  }, [resume, selectedOption, onResumeSelected]),;
  // Handle radio option change;
  const handleOptionChange = (value: 'recent' | 'select' | 'upload') => {;
    setSelectedOption(value),;
    if (value === 'recent' && resumeOptions.length > 0 && resumeOptions[0]) {;
      setSelectedResume(resumeOptions[0]),;
      onResumeSelected(resumeOptions[0]);
    } else if (value === 'select') {;
      // Reset selection until user chooses;
      setSelectedResume(null);
    } else if (value === 'upload') {;
      setSelectedResume(null);
    }
  },;
  // Handle resume selection change;
  const handleResumeSelect = (resumeId: string) => {;
    const selected = resumeOptions.find(opt => opt.id === resumeId),;
    if (selected) {;
      setSelectedResume(selected),;
      onResumeSelected(selected);
    }
  },
  
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0],
=======
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Plus, Loader2 } from 'lucide-react';
import { useResume } from '@/hooks/useResume';
import { exportResumeToPDF } from '@/utils/pdfExport';
import { toast } from '@/components/ui/use-toast';

interface ResumeOption {
  id: string;
  title: string;
  description: string;
  lastModified: string;
  fileSize: string;
  url: string;
}

interface ResumeSelectorProps {
  onResumeSelect: (resume: ResumeOption | null) => void;
  selectedResume: ResumeOption | null;
}

export const ResumeSelector: React.FC<ResumeSelectorProps> = ({
  onResumeSelect,
  selectedResume,
}) => {
  const [resumes, setResumes] = useState<ResumeOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const { resume, updateResume } = useResume();

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockResumes: ResumeOption[] = [
      {
        id: '1',
        title: 'Software Engineer Resume',
        description: 'Updated with latest projects',
        lastModified: '2024-01-15',
        fileSize: '2.1 MB',
        url: '/resumes/software-engineer.pdf',
      },
      {
        id: '2',
        title: 'Product Manager Resume',
        description: 'Senior PM experience',
        lastModified: '2024-01-10',
        fileSize: '1.8 MB',
        url: '/resumes/product-manager.pdf',
      },
    ];
    
    setResumes(mockResumes);
    setLoading(false);
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      // Mock file processing
      await new Promise(resolve => setTimeout(resolve, 2000));
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
      const newResume: ResumeOption = {
        id: Date.now().toString(),
        title: file.name.replace(/\.[^/.]+$/, ''),
        description: 'Recently uploaded',
        lastModified: new Date().toISOString().split('T')[0],
        fileSize: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        url: URL.createObjectURL(file),
      };
      
      setResumes(prev => [newResume, ...prev]);
      onResumeSelect(newResume);
      toast({
        title: 'Resume uploaded successfully',
        description: 'Your resume has been processed and is ready to use.',
      });
    } catch (error) {
      toast({
        title: 'Upload failed',
        description: 'There was an error uploading your resume. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleExport = async () => {
    if (!selectedResume) return;
    
    try {
      await exportResumeToPDF(selectedResume);
      toast({
        title: 'Resume exported',
        description: 'Your resume has been exported to PDF.',
      });
    } catch (error) {
      toast({
        title: 'Export failed',
        description: 'There was an error exporting your resume.',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

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
        </div>
      </RadioGroup>

      {resumes.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No resumes found. Upload your first resume to get started.</p>
        </div>
      )}
    </div>
<<<<<<< HEAD
  )
}
;
;


;
=======
  );
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}
  );
}


  )
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
