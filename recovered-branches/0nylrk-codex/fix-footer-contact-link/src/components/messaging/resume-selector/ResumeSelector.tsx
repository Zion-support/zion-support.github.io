<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",
import { Label } from "@/components/ui/label";
import { Plus, Loader2  } from 'lucide-react';
import { useResume } from "@/hooks/useResume",
import { exportResumeToPDF } from "@/utils/pdfExport",
import { toast } from "@/components/ui/use-toast";
=======


import React, { useState, useEffect } from './react';
import { Button  } from '@/components / ui / button';
import { RadioGroup, RadioGroupItem  } from '@/components / ui / radio - group';
import { Label  } from '@/components / ui / label';
import { Plus, Loader2  } from './lucide-react';
import { use_resume  } from '@/hooks / use_resume';
import { exportResumeToPDF  } from '@/utils / pdf_export';
import { toast  } from '@/components / ui / use - toast';

>>>>>>> main
import { ResumePreviewCard  } from './ResumePreviewCard';
import { UploadSection  } from './UploadSection';
import { SelectResumeSection  } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps  } from './types';
<<<<<<< HEAD
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {

  const [selectedOption, setSelectedOption] = useState<
    "recent" | "select" | "upload"
  >("recent");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(
    null
=======

export function ResumeSelector(): any ({ onResumeSelected }: ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<;
    "recent" | "select" | "upload";
  >("recent");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(;
    null,;

>>>>>>> main
  );
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);

  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { resume, fetchResume } = useResume();
<<<<<<< HEAD
=======
=======

>>>>>>> main
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Plus, Loader2 } from "lucide-react";
import { useResume } from "@/hooks/useResume";
import { exportResumeToPDF } from "@/utils/pdfExport";
import { toast } from "@/components/ui/use-toast";
import { ResumePreviewCard } from "./ResumePreviewCard";
import { UploadSection } from "./UploadSection";
import { SelectResumeSection } from "./SelectResumeSection";
import { ResumeOption, ResumeSelectorProps } from "./types";
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {
  const [selectedOption, setSelectedOption] = useState<
    "recent" | "select" | "upload";
  >("recent");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(
    null,
  );
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { resume, fetchResume } = useResume();

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React, { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",
import { Label } from "@/components/ui/label",
import { Plus, Loader2 } from 'lucide-react',
import { useResume } from "@/hooks/useResume",
import { exportResumeToPDF } from "@/utils/pdfExport",
import { toast } from "@/components/ui/use-toast",
import { ResumePreviewCard } from './ResumePreviewCard',
import { UploadSection } from './UploadSection',
import { SelectResumeSection } from './SelectResumeSection',
import { ResumeOption, ResumeSelectorProps } from './types',

export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),
  const [customFile, setCustomFile] = useState<File | null>(null),
  const [isLoading, setIsLoading] = useState(false),
  
  const { resume, fetchResume } = useResume(),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> main
  // Fetch resume data when component mounts
  useEffect(() => {

    const loadResumes = async () => {
<<<<<<< HEAD
      setIsLoading(true),
      try {
        await fetchResume()
      } catch (error) {
        console.error("Error loading resumes:", error)
      } finally {
<<<<<<< HEAD
=======


  // Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;

      setIsLoading(true);
      try {;
        await fetchResume();
      } catch (error) {;
        console && console.error("Error loading resumes:", error);
      } finally {;
>>>>>>> main
        setIsLoading(false);
      }
    }
    loadResumes();
  }, [fetchResume]);
<<<<<<< HEAD
  // Update resume options when resume data changes
  useEffect(() => {
    if (resume) {
      const options: ResumeOption[] = [
=======

export /**
 * ResumeSelector - Function description
 */
function ResumeSelector() {
  const [selected_option, setSelectedOption] = useState<;
    "recent" | "select" | "upload";
  >("recent");
  const [selected_resume, setSelectedResume] = useState < ResumeOption | null>(
    null,
  );
  const [resume_options, setResumeOptions] = useState < ResumeOption[]>([]);
  const [custom_file, setCustomFile] = useState < File | null>(null);
  const [is_loading, setIsLoading] = useState (false);
;
  const { resume, fetch_resume } = use_resume ();
;
  // Fetch resume data when component mounts;
  useEffect (() => {
    const load_resumes = async () => {
      setIsLoading (true);
      try {
        await fetch_resume ();
      } catch (error) {
        console.error ("Error loading resumes:", error);
      } finally {
        setIsLoading (false);
      }
    }
;
    load_resumes ();
  }, [fetch_resume]);
;
  // Update resume options when resume data changes;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      const options: ResumeOption[] = [;

>>>>>>> main
        {
          id: resume.id |"current"
          title: resume.basic_info.title
          type: "ai_resume"
          resume: resume
        }
<<<<<<< HEAD
      ];
      setResumeOptions(options);
      // Pre-select the most recent resume
      if (options.length > 0 && selectedOption === "recent") {
=======
=======

  // Update resume options when resume data changes;
  useEffect(() => {;
    if (resume) {;
      const options: ResumeOption[] = [;
        {;
          id: resume && resume.id || "current",;
          title: resume && resume.basic_info.title,;
          type: "ai_resume",;
          resume: resume,;
        },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ];


      // Pre-select the most recent resume;
      if (options && options.length > 0 && selectedOption === "recent") {;

>>>>>>> main
        setSelectedResume(options[0]);
        onResumeSelected(options[0]);
      }
    }
  }, [resume, selectedOption, onResumeSelected]);
<<<<<<< HEAD
  // Handle radio option change
  const handleOptionChange = (value: "recent" | "select" | "upload") => {
    setSelectedOption(value);
    if (value === "recent" && resumeOptions.length > 0) {
      (setSelectedResume(resumeOptions[0]), onResumeSelected(resumeOptions[0]));
    } else if (value === "select") {
      // Reset selection until user chooses
      setSelectedResume(null);
    } else if (value === "upload") {
      setSelectedResume(null);
    }
  }
  // Handle resume selection change
  const handleResumeSelect = (resumeId: string) => {
    const selected = resumeOptions.find((opt) => opt.id === resumeId);
    if (selected) {
      (setSelectedResume(selected), onResumeSelected(selected));
    }
<<<<<<< HEAD
  }
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
=======
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


  // Handle radio option change;
  const handleOptionChange = (value: "recent" | "select" | "upload") => {;
    setSelectedOption(value);

    if (value === "recent" && resumeOptions && resumeOptions.length > 0) {;

      (setSelectedResume(resumeOptions[0]), onResumeSelected(resumeOptions[0]));
    } else if (value === "select") {;
      // Reset selection until user chooses;
      setSelectedResume(null);
    } else if (value === "upload") {;
      setSelectedResume(null);
    }

      setIsLoading(true),
      try {
        await fetchResume()
      } catch (error) {
        console.error("Error loading resumes:", error)
      } finally {

  };


>>>>>>> main
=======
        setIsLoading(false)
import React, { useState, useEffect } from 'react',;
import { Button } from "@/components/ui/button",;
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;
import { Label } from "@/components/ui/label",;
import { Plus, Loader2 } from 'lucide-react',;
import { useResume } from "@/hooks/useResume",;
import { exportResumeToPDF } from "@/utils/pdfExport",;
import { toast } from "@/components/ui/use-toast",;
import { ResumePreviewCard } from './ResumePreviewCard',;
import { UploadSection } from './UploadSection',;
import { SelectResumeSection } from './SelectResumeSection',;
import { ResumeOption, ResumeSelectorProps } from './types',;
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),;
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),;
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),;
  const [customFile, setCustomFile] = useState<File | null>(null),;
  const [isLoading, setIsLoading] = useState(false),;
  const { resume, fetchResume } = useResume(),;
  // Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;
      setIsLoading(true),;
      try {;
        await fetchResume();
      } catch (error) {;
        console.error("Error loading resumes:", error);
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
      if (options.length > 0 && selectedOption === 'recent') {;
        setSelectedResume(options[0]),;
        onResumeSelected(options[0]);
      }
    }
  }, [resume, selectedOption, onResumeSelected]),;
  // Handle radio option change;
  const handleOptionChange = (value: 'recent' | 'select' | 'upload') => {;
    setSelectedOption(value),;
    if (value === 'recent' && resumeOptions.length > 0) {;
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
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0],
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
      // Check if it's a PDF file
      if (file.type !== 'application/pdf') {
        toast({
<<<<<<< HEAD
<<<<<<< HEAD
          title: "Invalid file type"
          description: "Please upload a PDF file"
          variant: "destructive"
=======
          title: "Invalid file type",
          description: "Please upload a PDF file",
<<<<<<< HEAD
          variant: "destructive",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        });
        return;
      }
      // Create a custom resume option
      const customOption: ResumeOption = {
        id: "custom-upload"
        title: file.name
        type: "custom_upload"
        file: file
      }
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      // Check if it's a PDF file
      if (file.type !== "application/pdf") {
        toast({

  };

  // Handle resume selection change;
  const handleResumeSelect = (resumeId: string) => {;
    const selected = resumeOptions && resumeOptions.find((opt) => opt && opt.id === resumeId);
    if (selected) {;
      (setSelectedResume(selected), onResumeSelected(selected));
    }
  };

  // Handle custom file upload;
  const handleFileUpload = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    if (e && e.target.files && e && e.target.files[0]) {;
      const file = e && e.target.files[0];

      // Check if it's a PDF file;
      if (file && file.type !== "application/pdf") {;
        toast({;
          title: "Invalid file type",;
          description: "Please upload a PDF file",;
          variant: "destructive",;
        });
        return;
      }

      // Create a custom resume option;
      const customOption: ResumeOption = {;
        id: "custom-upload",;
        title: file && file.name,;
        type: "custom_upload",;
        file: file,;
      };


>>>>>>> main
      setCustomFile(file);
      setSelectedResume(customOption);
      onResumeSelected(customOption);
    }
<<<<<<< HEAD
  }
  // Handle resume download
  const handleDownloadResume = async () => {
    if (
      !selectedResume |
      selectedResume.type !== "ai_resume" |
      !selectedResume.resume
    ) {
      return;
    }
<<<<<<< HEAD
    try {
      setIsLoading(true);
      const pdfBlob = await exportResumeToPDF(selectedResume.resume);
      // Create download link
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${selectedResume.title |"Resume"}.pdf`;
      document.body.appendChild(link);
      link.click();
      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast({
        title: "Success!"
        description: "Your resume has been downloaded."
      });
=======
          title: "Invalid file type",
          description: "Please upload a PDF file",
=======

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          variant: "destructive"
        }),
        return
  },;
  // Handle custom file upload;
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {;
    if (e.target.files && e.target.files[0]) {;
      const file = e.target.files[0],;
      // Check if it's a PDF file;
      if (file.type !== 'application/pdf') {;
        toast({;
          title: "Invalid file type",;
          description: "Please upload a PDF file",;
          variant: "destructive";
        }),;
        return;
      }
;
      // Create a custom resume option;
      const customOption: ResumeOption = {;
        id: 'custom-upload',;
        title: file.name,;
        type: 'custom_upload',;
        file: file;
      },;
      setCustomFile(file),;
      setSelectedResume(customOption),;
      onResumeSelected(customOption);
    }
  },;
  // Handle resume download;
  const handleDownloadResume = async () => {;
    if (!selectedResume || selectedResume.type !== 'ai_resume' || !selectedResume.resume) {;
      return;
    }
    
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


          title: "Invalid file type",
          description: "Please upload a PDF file",

>>>>>>> main
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
        title: "Success!",
        description: "Your resume has been downloaded."})
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    } catch (error) {
      console.error('Error downloading PDF:', error),
      toast({
<<<<<<< HEAD
        title: "Download failed"
        description: "There was an error downloading your resume."
        variant: "destructive"
      });
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    } catch (error) {
      console.error("Error downloading PDF:", error);
      toast({

  };

  // Handle resume download;
  const handleDownloadResume = async () => {;
    if (;
      !selectedResume ||;
      selectedResume && selectedResume.type !== "ai_resume" ||;
      !selectedResume && selectedResume.resume;
    ) {;
      return;
    }

    try {;
      setIsLoading(true);
      const pdfBlob = await exportResumeToPDF(selectedResume && selectedResume.resume);

      // Create download link;
      const url = URL && URL.createObjectURL(pdfBlob);
      const link = document && document.createElement("a");
      link && link.href = url;
      link && link.download = `${selectedResume && selectedResume.title || "Resume"}.pdf`;
      document && document.body.appendChild(link);
      link && link.click();

      // Clean up;
      document && document.body.removeChild(link);
      URL && URL.revokeObjectURL(url);

      toast({;
        title: "Success!",;
        description: "Your resume has been downloaded.",;
      });
    } catch (error) {;
      console && console.error("Error downloading PDF:", error);
      toast({;
        title: "Download failed",;
        description: "There was an error downloading your resume.",;
        variant: "destructive",;

      });
    } finally {;
      setIsLoading(false);
=======

>>>>>>> main
        title: "Download failed",
        description: "There was an error downloading your resume.",
        variant: "destructive"
      })
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  }
  // Handle "Generate Resume Now" button
  const handleGenerateResume = () => {
    window.open("/dashboard/talent/portfolio_blank");
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>
      <RadioGroup
        value={selectedOption}
        onValueChange={(value) =>
          handleOptionChange(value as "recent" | "select" | "upload")
        }
=======
=======

    } finally {
      setIsLoading(false)
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }


  };

  // Handle "Generate Resume Now" button;
  const handleGenerateResume = () => {;
    window && window.open("/dashboard/talent/portfolio_blank");
  };

  return (
    <div className="space-y-4">;
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>;


      <RadioGroup
        value={selectedOption}
        onValueChange={(value) =>;
          handleOptionChange(value as "recent" | "select" | "upload");
        }

>>>>>>> main
  },
  
  // Handle "Generate Resume Now" button
  const handleGenerateResume = () => {
    window.open('/dashboard/talent/portfolio_blank')
  },
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>
<<<<<<< HEAD
<<<<<<< HEAD
      <RadioGroup
        value={selectedOption}
        onValueChange={(value) =>
          handleOptionChange(value as "recent" | "select" | "upload")
        }
=======
      
      <RadioGroup 
        value={selectedOption} 
        onValueChange={(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recent" id="recent" />
<<<<<<< HEAD
          <Label htmlFor="recent" className="text-white">Use most recent AI Resume</Label>
        </div>
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="select" id="select" />
          <Label htmlFor="select" className="text-white">Select from saved versions</Label>
        </div>
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upload" id="upload" />
          <Label htmlFor="upload" className="text-white">Upload a custom resume (PDF)</Label>
        </div>
      </RadioGroup>
<<<<<<< HEAD
      {/* Resume selection options based on radio selection */}
      {selectedOption === "recent" && resume && (
        <ResumePreviewCard
=======
=======
          <Label htmlFor="recent" className="text-white">
            Use most recent AI Resume
          </Label>
        </div>


        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="select" id="select" />
          <Label htmlFor="select" className="text-white">
            Select from saved versions
          </Label>
        </div>


        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upload" id="upload" />
          <Label htmlFor="upload" className="text-white">
            Upload a custom resume (PDF)
          </Label>
        </div>
      </RadioGroup>

=======

>>>>>>> main
      
;
    try {;
      setIsLoading(true),;
      const pdfBlob = await exportResumeToPDF(selectedResume.resume),;
      // Create download link;
      const url = URL.createObjectURL(pdfBlob),;
      const link = document.createElement('a'),;
      link.href = url,;
      link.download = `${selectedResume.title || 'Resume'}.pdf`,;
      document.body.appendChild(link),;
      link.click(),;
      // Clean up;
      document.body.removeChild(link),;
      URL.revokeObjectURL(url),;
      toast({;
        title: "Success!",;
        description: "Your resume has been downloaded."});
    } catch (error) {;
      console.error('Error downloading PDF:', error),;
      toast({;
        title: "Download failed",;
        description: "There was an error downloading your resume.",;
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }
  };
  // Handle "Generate Resume Now" button;
  const handleGenerateResume = () => {;
    window.open('/dashboard/talent/portfolio_blank');
  };
  return (;
    <div className="space-y-4">;
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>;
      <RadioGroup;
        value={selectedOption} ;
        onValueChange={(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}
<<<<<<< HEAD
=======

>>>>>>> main
        className="space-y-3";
      >;
        <div className="flex items-center space-x-2">;
          <RadioGroupItem value="recent" id="recent" />;
<<<<<<< HEAD
          <Label htmlFor="recent" className="text-white">Use most recent AI Resume</Label>;
        </div>;
        <div className="flex items-center space-x-2">;
          <RadioGroupItem value="select" id="select" />;
          <Label htmlFor="select" className="text-white">Select from saved versions</Label>;
        </div>;
        <div className="flex items-center space-x-2">;
          <RadioGroupItem value="upload" id="upload" />;
          <Label htmlFor="upload" className="text-white">Upload a custom resume (PDF)</Label>;
        </div>;
      </RadioGroup>;
      {/* Resume selection options based on radio selection */}
      {selectedOption === 'recent' && resume && (;
        <ResumePreviewCard;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          resume={resume}
          onDownload={handleDownloadResume}
          isLoading={isLoading}
        />
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          <Label htmlFor="recent" className="text-white">;
            Use most recent AI Resume;
          </Label>;
        </div>;

        <div className="flex items-center space-x-2">;
          <RadioGroupItem value="select" id="select" />;
          <Label htmlFor="select" className="text-white">;
            Select from saved versions;
          </Label>;
        </div>;

        <div className="flex items-center space-x-2">;
          <RadioGroupItem value="upload" id="upload" />;
          <Label htmlFor="upload" className="text-white">;
=======
;
      setResumeOptions (options);
;
      // Pre - select the most recent resume;
      // Check condition
if ( {) {
  $2
}
        setSelectedResume (options[0]);
        onResumeSelected (options[0]);
      }
    }
  }, [resume, selected_option, onResumeSelected]);
;
  // Handle radio option change;
  const handleOptionChange = (value: "recent" | "select" | "upload") =>: any {
    setSelectedOption (value);
;
    // Check condition
if ( {) {
  $2
}
      (setSelectedResume (resume_options[0]), onResumeSelected (resume_options[0]));
    } else // Check condition
if ( {) {
  $2
}
      // Reset selection until user chooses;
      setSelectedResume (null);
    } else // Check condition
if ( {) {
  $2
}
      setSelectedResume (null);
    }
  }
;
  // Handle resume selection change;
  const handleResumeSelect = (resume_id: string) =>: any {
    const selected = resume_options.find ((opt) => opt.id === resume_id);
    // Check condition
if ( {) {
  $2
}
      (setSelectedResume (selected), onResumeSelected (selected));
    }
  }
;
  // Handle custom file upload;
  const handleFileUpload = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    // Check condition
if ( {) {
  $2
}
      const file = e.target.files[0];
;
      // Check if it's a PDF file;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
        return;
      }
      // Create a custom resume option;
      const custom_option: ResumeOption = {
        id: "custom - upload",
        title: file.name,
        type: "custom_upload",
        file: file,
      }
;
      setCustomFile (file);
      setSelectedResume (custom_option);
      onResumeSelected (custom_option);
    }
  }
;
  // Handle resume download;
  const handleDownloadResume = async () => {
    // Check condition
if ( {) {
  $2
}
      return;
    }
    try {
      setIsLoading (true);
      const pdf_blob = await exportResumeToPDF (selected_resume.resume);
;
      // Create download link;
      const url = URL.createObjectURL (pdf_blob);
      const link = document.create_element ("a");
      link.href = url;
      link.download = `${selected_resume.title || "Resume"}.pdf`;
      document.body.append_child (link);
      link.click ();
;
      // Clean up;
      document.body.remove_child (link);
      URL.revokeObjectURL (url);
;
      toast ({
        title: "Success!",
        description: "Your resume has been downloaded.",
      });
    } catch (error) {
      console.error ("Error downloading PDF:", error);
      toast ({
        title: "Download failed",
        description: "There was an error downloading your resume.",
        variant: "destructive",
      });
    } finally {
      setIsLoading (false);
    }
  }
;
  // Handle "Generate Resume Now" button;
  const handleGenerateResume = () =>: any {
    window.open ("/dashboard / talent / portfolio_blank");
  }
;
  return (
    <div className="space - y-4">;
      <h3 className="text - lg font - medium text - white">Attach Resume</h3>;
      <RadioGroup;
        value={selected_option}
        onValueChange={(value) =>;
          handleOptionChange (value as "recent" | "select" | "upload");
        }
        className="space - y-3";
      >;
        <div className="flex items - center space - x-2">;
          <RadioGroupItem value="recent" id="recent" />;
          <Label html_for="recent" className="text - white">;
            Use most recent AI Resume;
          </Label>;
        </div>;
        <div className="flex items - center space - x-2">;
          <RadioGroupItem value="select" id="select" />;
          <Label html_for="select" className="text - white">;
            Select from saved versions;
          </Label>;
        </div>;
        <div className="flex items - center space - x-2">;
          <RadioGroupItem value="upload" id="upload" />;
          <Label html_for="upload" className="text - white">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            Upload a custom resume (PDF);
          </Label>;
        </div>;
      </RadioGroup>;

      {/* Resume selection options based on radio selection */}
      {selectedOption === 'recent' && resume && (;
        <ResumePreviewCard;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          resume={resume}
          onDownload={handleDownloadResume}
          isLoading={isLoading}
        />;
      )}


      {selectedOption === "select" && (;

        <SelectResumeSection
=======



>>>>>>> main
      {selectedOption === "select" && (
        <SelectResumeSection
=======
;
      {selectedOption === 'select' && (;
        <SelectResumeSection;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
          resumeOptions={resumeOptions}
          selectedResume={selectedResume}
          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          isLoading={isLoading}
<<<<<<< HEAD
        />
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        />;
      )}


      {selectedOption === "upload" && (;

        <UploadSection
=======



>>>>>>> main
      {selectedOption === "upload" && (
        <UploadSection
=======
;
      {selectedOption === 'upload' && (;
        <UploadSection;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          customFile={customFile}
          onFileUpload={handleFileUpload}
        />
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          customFile={customFile}
          onFileUpload={handleFileUpload}
        />;
      )}


;

>>>>>>> main
=======

=======
;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">
        <Button 
          variant="outline"
          onClick={handleGenerateResume}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">;
        <Button
          variant="outline"
          onClick={handleGenerateResume}

      {/* Resume selection options based on radio selection */}
      {selected_option === "recent" && resume && (
        <ResumePreviewCard;
          resume={resume}
          on_download={handleDownloadResume}
          is_loading={is_loading}
        />)}
      {selected_option === "select" && (
        <SelectResumeSection;
          resume_options={resume_options}
          selected_resume={selected_resume}
          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          is_loading={is_loading}
        />)}
      {selected_option === "upload" && (
        <UploadSection;
          custom_file={custom_file}
          onFileUpload={handleFileUpload}
        />)}
      {/* Generate Resume Now button */}
      <div className="flex justify - between items - center pt - 2">;
        <Button;
          variant="outline";
          on_click={handleGenerateResume}
          className="text - zion - purple border - zion - purple / 20";
        >;
          <Plus className="h - 4 w - 4 mr - 2" />;
          Generate Resume Now;
        </Button>;
      </div>;
    </div>);

}
=======
>>>>>>> main
          className="text-zion-purple border-zion-purple/20"
        >
          <Plus className="h-4 w-4 mr-2" />
          Generate Resume Now
        </Button>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
  )
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  )
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
