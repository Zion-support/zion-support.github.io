<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx


<<<<<<< HEAD
=======
<<<<<<< HEAD

import React, { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",
import { Label } from "@/components/ui/label";
import { Plus, Loader2  } from 'lucide-react';
import { useResume } from "@/hooks/useResume",
import { exportResumeToPDF } from "@/utils/pdfExport",
import { toast } from "@/components/ui/use-toast";
import { ResumePreviewCard  } from './ResumePreviewCard';
import { UploadSection  } from './UploadSection';
import { SelectResumeSection  } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps  } from './types';
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {

  const [selectedOption, setSelectedOption] = useState<
    "recent" | "select" | "upload"
  >("recent");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(
    null
  );
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);

  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { resume, fetchResume } = useResume();
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
import React, { useState, useEffect } from './react';
import { Button  } from '@/components / ui / button';
import { RadioGroup, RadioGroupItem  } from '@/components / ui / radio - group';
import { Label  } from '@/components / ui / label';
import { Plus, Loader2  } from './lucide-react';
import { use_resume  } from '@/hooks / use_resume';
import { exportResumeToPDF  } from '@/utils / pdf_export';
import { toast  } from '@/components / ui / use - toast';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
import { ResumePreviewCard  } from './ResumePreviewCard';
import { UploadSection  } from './UploadSection';
import { SelectResumeSection  } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps  } from './types';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
export function ResumeSelector(): any ({ onResumeSelected }: ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<;
    "recent" | "select" | "upload";
  >("recent");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(;
    null,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
  );
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { resume, fetchResume } = useResume();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Fetch resume data when component mounts
  useEffect(() => {

    const loadResumes = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======


  // Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;

========
  // Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
      setIsLoading(true);
      try {;
        await fetchResume();
      } catch (error) {;
        console && console.error("Error loading resumes:", error);
      } finally {;
        setIsLoading(false);
      }
    }
    loadResumes();
  }, [fetchResume]);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
        {
          id: resume.id |"current"
          title: resume.basic_info.title
          type: "ai_resume"
          resume: resume
        }
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
      ];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx


      // Pre-select the most recent resume;
      if (options && options.length > 0 && selectedOption === "recent") {;

        setSelectedResume(options[0]);
        onResumeSelected(options[0]);
      }
    }
  }, [resume, selectedOption, onResumeSelected]);

========
      // Pre-select the most recent resume;
      if (options && options.length > 0 && selectedOption === "recent") {;
        setSelectedResume(options[0]);
        onResumeSelected(options[0]);
=======
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

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
;
export function ResumeSelector({ onResumeSelected } ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),;
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),;
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),;
  const [customFile, setCustomFile] = useState<File | null>(null),;
  const [isLoading, setIsLoading] = useState(false),;
  ;
  const { resume, fetchResume } = useResume(),;
  ;
  // Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;
      setIsLoading(true),;
      try {;
        await fetchResume(),;
      } catch (error) {;
        console.error("Error loading resumes:", error),;
      } finally {;
        setIsLoading(false),;
      }
    },;
    ;
    loadResumes(),;
  }, [fetchResume]),;
  ;
  // Update resume options when resume data changes;
  useEffect(() => {;
    if (resume) {;
      const options:ResumeOption[] = [{;
        id:resume.id || 'current',;
        title:resume.basic_info.title,;
        type:'ai_resume',;
        resume:resume;
      }],;
      ;
      setResumeOptions(options),;
      ;
      // Pre-select the most recent resume;
      if (options.length > 0 && selectedOption === 'recent') {;
        setSelectedResume(options[0]),;
        onResumeSelected(options[0]),;
      }
    }
  }, [resume, selectedOption, onResumeSelected]),;
  ;
  // Handle radio option change;
  const handleOptionChange = (value:'recent' | 'select' | 'upload') => {;
    setSelectedOption(value),;
    ;
    if (value === 'recent' && resumeOptions.length > 0) {;
      setSelectedResume(resumeOptions[0]),;
      onResumeSelected(resumeOptions[0]);
    } else if (value === 'select') {;
      // Reset selection until user chooses;
      setSelectedResume(null),;
    } else if (value === 'upload') {;
      setSelectedResume(null),;
    }
  },;
  ;
  // Handle resume selection change;
  const handleResumeSelect = (resumeId:string) => {;
    const selected = resumeOptions.find(opt => opt.id === resumeId),;
    if (selected) {;
      setSelectedResume(selected),;
      onResumeSelected(selected);
    }
  },;
  ;
  // Handle custom file upload;
  const handleFileUpload = (e:React.ChangeEvent<HTMLInputElement>) => {;
    if (e.target.files && e.target.files[0]) {;
      const file = e.target.files[0],;
      ;
      // Check if it's a PDF file;
      if (file.type !== 'application/pdf') {;
        toast({;
          title:"Invalid file type",;
          description:"Please upload a PDF file",;
          variant:"destructive";
        }),;
        return,;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }
      ;
      // Create a custom resume option;
      const customOption:ResumeOption = {;
        id:'custom-upload',;
        title:file.name,;
        type:'custom_upload',;
        file:file;
      },;
      ;
      setCustomFile(file),;
      setSelectedResume(customOption),;
      onResumeSelected(customOption),;
    }
<<<<<<< HEAD
  }, [resume, selectedOption, onResumeSelected]);
  // Handle radio option change;
  const handleOptionChange = (value: "recent" | "select" | "upload") => {;
    setSelectedOption(value);
    if (value === "recent" && resumeOptions && resumeOptions.length > 0) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
      (setSelectedResume(resumeOptions[0]), onResumeSelected(resumeOptions[0]));
    } else if (value === "select") {;
      // Reset selection until user chooses;
      setSelectedResume(null);
    } else if (value === "upload") {;
      setSelectedResume(null);
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setIsLoading(true),
      try {
        await fetchResume()
      } catch (error) {
        console.error("Error loading resumes:", error)
      } finally {
<<<<<<< HEAD
<<<<<<< HEAD

=======

  };


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        setIsLoading(false);
      }
    }
    loadResumes();
  }, [fetchResume]);
  // Update resume options when resume data changes
  useEffect(() => {
    if (resume) {
      const options: ResumeOption[] = [
        {
          id: resume.id |"current"
          title: resume.basic_info.title
          type: "ai_resume"
          resume: resume
        }
      ];
      setResumeOptions(options);
      // Pre-select the most recent resume
      if (options.length > 0 && selectedOption === "recent") {
        setSelectedResume(options[0]);
        onResumeSelected(options[0]);
      }
    }
  }, [resume, selectedOption, onResumeSelected]);
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0],
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Check if it's a PDF file
      if (file.type !== "application/pdf") {
        toast({

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setCustomFile(file);
      setSelectedResume(customOption);
      onResumeSelected(customOption);
    }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


          title: "Invalid file type",
          description: "Please upload a PDF file",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
    
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    } catch (error) {
      console.error("Error downloading PDF:", error);
      toast({

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
      });
    } finally {;
      setIsLoading(false);
=======

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        title: "Download failed",
        description: "There was an error downloading your resume.",
        variant: "destructive"
      })
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    } finally {
      setIsLoading(false)
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
<<<<<<< HEAD

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
  };
  // Handle "Generate Resume Now" button;
  const handleGenerateResume = () => {;
    window && window.open("/dashboard/talent/portfolio_blank");
  };
  return (
    <div className="space-y-4">;
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
      <RadioGroup
        value={selectedOption}
        onValueChange={(value) =>;
          handleOptionChange(value as "recent" | "select" | "upload");
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  
  // Handle "Generate Resume Now" button
  const handleGenerateResume = () => {
    window.open('/dashboard/talent/portfolio_blank')
  },
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recent" id="recent" />
<<<<<<< HEAD
          <Label htmlFor="recent" className="text-white">
            Use most recent AI Resume
          </Label>
        </div>

<<<<<<< HEAD
=======

        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="select" id="select" />
          <Label htmlFor="select" className="text-white">
            Select from saved versions
          </Label>
        </div>

<<<<<<< HEAD
=======

        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upload" id="upload" />
          <Label htmlFor="upload" className="text-white">
            Upload a custom resume (PDF)
          </Label>
        </div>
      </RadioGroup>

<<<<<<< HEAD
=======
=======

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      
;
    try {;
      setIsLoading(true),;
      const pdfBlob = await exportResumeToPDF(selectedResume.resume),;
<<<<<<< HEAD
========
=======
  },;
  ;
  // Handle resume download;
  const handleDownloadResume = async () => {;
    if (!selectedResume || selectedResume.type !== 'ai_resume' || !selectedResume.resume) {;
      return,;
    }
    ;
    try {;
      setIsLoading(true),;
      const pdfBlob = await exportResumeToPDF(selectedResume.resume),;
      ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Create download link;
      const url = URL.createObjectURL(pdfBlob),;
      const link = document.createElement('a'),;
      link.href = url,;
      link.download = `${selectedResume.title || 'Resume'}.pdf`,;
      document.body.appendChild(link),;
      link.click(),;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

========
      ;
      // Clean up;
      document.body.removeChild(link),;
      URL.revokeObjectURL(url),;
      ;
      toast({;
        title:"Success!",;
        description:"Your resume has been downloaded."}),;
    } catch (error) {;
      console.error('Error downloading PDF:', error),;
      toast({;
        title:"Download failed",;
        description:"There was an error downloading your resume.",;
        variant:"destructive";
      }),;
    } finally {;
      setIsLoading(false),;
    }
  },;
  ;
  // Handle "Generate Resume Now" button;
  const handleGenerateResume = () => {;
    window.open('/dashboard/talent/portfolio_blank'),;
  },;
  ;
  return (;
    <div className="space-y-4">;
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>;
      ;
      <RadioGroup ;
        value={selectedOption} ;
        onValueChange={(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        className="space-y-3";
      >;
        <div className="flex items-center space-x-2">;
          <RadioGroupItem value="recent" id="recent" />;
<<<<<<< HEAD
<<<<<<< HEAD
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
            Upload a custom resume (PDF);
          </Label>;
        </div>;
      </RadioGroup>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

      {/* Resume selection options based on radio selection */}
      {selectedOption === 'recent' && resume && (;
        <ResumePreviewCard;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          resume={resume}
          onDownload={handleDownloadResume}
          isLoading={isLoading}
        />;
      )}

<<<<<<< HEAD
=======

      {selectedOption === "select" && (;

========
      {selectedOption === "select" && (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
        <SelectResumeSection
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {selectedOption === "select" && (
        <SelectResumeSection

;
      {selectedOption === 'select' && (;
        <SelectResumeSection;

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          resumeOptions={resumeOptions}
          selectedResume={selectedResume}
=======
          <Label htmlFor="recent" className="text-white">Use most recent AI Resume</Label>;
        </div>;
        ;
=======
          <Label htmlFor="recent" className="text-white">Use most recent AI Resume</Label>;
        </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="flex items-center space-x-2">;
          <RadioGroupItem value="select" id="select" />;
          <Label htmlFor="select" className="text-white">Select from saved versions</Label>;
        </div>;
<<<<<<< HEAD
        ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="flex items-center space-x-2">;
          <RadioGroupItem value="upload" id="upload" />;
          <Label htmlFor="upload" className="text-white">Upload a custom resume (PDF)</Label>;
        </div>;
      </RadioGroup>;
<<<<<<< HEAD
      ;
      {/* Resume selection options based on radio selection */}
      {selectedOption === 'recent' && resume && (;
        <ResumePreviewCard;
          resume={resume}          onDownload={handleDownloadResume}
          isLoading={isLoading}
        />;
      )}
      ;
      {selectedOption === 'select' && (;
        <SelectResumeSection;
          resumeOptions={resumeOptions}          selectedResume={selectedResume}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          isLoading={isLoading}
        />;
      )}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
=======

      {selectedOption === "upload" && (;

========
      {selectedOption === "upload" && (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
        <UploadSection
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {selectedOption === "upload" && (
        <UploadSection

;
      {selectedOption === 'upload' && (;
        <UploadSection;

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          customFile={customFile}
          onFileUpload={handleFileUpload}
=======
      ;
      {selectedOption === 'upload' && (;
        <UploadSection;
          customFile={customFile}          onFileUpload={handleFileUpload}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        />;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
<<<<<<< HEAD
=======


;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

;

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">;
<<<<<<< HEAD
        <Button
          variant="outline"
          onClick={handleGenerateResume}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

========
          className="text-zion-purple border-zion-purple/20">;
=======
        <Button ;
          variant="outline";
          onClick={handleGenerateResume}
          className="text-zion-purple border-zion-purple/20";
        >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <Plus className="h-4 w-4 mr-2" />;
          Generate Resume Now;
        </Button>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx

}
=======
=======
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
      {selectedOption === "select" && (
        <SelectResumeSection
=======
;
      {selectedOption === 'select' && (;
        <SelectResumeSection;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          resumeOptions={resumeOptions}
          selectedResume={selectedResume}
          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          isLoading={isLoading}
        />
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {selectedOption === "upload" && (
        <UploadSection
=======
;
      {selectedOption === 'upload' && (;
        <UploadSection;
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

=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">
        <Button 
          variant="outline"
          onClick={handleGenerateResume}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          className="text-zion-purple border-zion-purple/20"
        >
          <Plus className="h-4 w-4 mr-2" />
          Generate Resume Now
        </Button>
      </div>
    </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  )
}
;
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),; export function ResumeSelector ({
  onResumeSelected 
}: ResumeSelectorProps) {
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'> ('recent');
const [selectedResume, setSelectedResume] = useState<ResumeOption | null> (null);
const [resumeOptions, setResumeOptions] = useState<ResumeOption[]> ([]);
const [customFile, setCustomFile] = useState<File | null> (null);
const [isLoading, setIsLoading] = useState (false);
const {
  resume, fetchResume 
}= useResume ();
//Fetch resume data when component mounts useEffect ( () => {
  const loadResumes = async () => {
  setIsLoading (true);
try {
  await fetchResume () 
}catch (error) {
  
}finally {
  setIsLoading (false) 
}
};
}, [fetchResume]);
//Update resume options when resume data changes useEffect ( () => {
  if (resume) {
  const options: ResumeOption[] = [ {
  setResumeOptions (options);
//Pre-select the most recent resume 
}
}, [resume, selectedOption, onResumeSelected]);
//Handle radio option change //Check if it's a PDF file if (file.type !== 'application/pdf') {
  toast ({
  return;
}//Create a custom resume option setCustomFile (file);
setSelectedResume (customOption);
onResumeSelected (customOption) 
}
};
//Handle resume download 
}catch (error) {
  console.error ('Error downloading PDF:', error);
toast ({
  
}finally {
  setIsLoading (false) 
}
};
//Handle "Generate Resume Now" button const handleGenerateResume = () => {
  window.open ('/dashboard/talent/portfolio blank') 
};
return (<div className="space-y-4" > <h3 className="text-lg font-medium text-white" >Attach Resume</h3> <RadioGroup value= {
  selectedOption 
}onValueChange= {
  (value) => handleOptionChange (value as 'recent'| 'select'| 'upload') 
}className="space-y-3" flex items-center space-x-2"> <RadioGroupItem value=" recent"id=" recent"/> <Label htmlFor=" recent"className=" text-white">Use most recent AI Resume</Label> </div> <div className=" flex items-center space-x-2"> <RadioGroupItem value=" select"id=" select"/> <Label htmlFor=" select"className=" text-white">Select from saved versions</Label> </div> <div className=" flex items-center space-x-2"> <RadioGroupItem value=" upload"id=" upload"/> <Label htmlFor=" upload"className=" text-white">Upload a custom resume (PDF) </Label> </div> </RadioGroup> {
  /* Resume selection options based on radio selection */ 
}{
  selectedOption === 'recent'&& resume && (<ResumePreviewCard resume= {
  resume 
}onDownload= {
  handleDownloadResume 
}isLoading= {
  isLoading 
}/>) 
}{
  selectedOption === 'select'&& (<SelectResumeSection resumeOptions= {
  resumeOptions 
}selectedResume= {
  selectedResume 
}handleResumeSelect= {
  handleResumeSelect 
}handleDownloadResume= {
  handleDownloadResume 
}isLoading= {
  isLoading 
}/>) 
}{
  selectedOption === 'upload' && (<UploadSection customFile= {
  customFile 
}onFileUpload= {
  handleFileUpload 
}/>) 
}> <Plus className=" h-4 w-4 mr-2" /> Generate Resume Now </Button> </div> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/resume-selector/ResumeSelector.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
