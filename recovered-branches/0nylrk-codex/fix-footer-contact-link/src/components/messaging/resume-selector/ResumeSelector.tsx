
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React, { useState, useEffect } from './react';
import { Button  } from '@/components / ui / button';
import { RadioGroup, RadioGroupItem  } from '@/components / ui / radio - group';
import { Label  } from '@/components / ui / label';
import { Plus, Loader2  } from './lucide-react';
import { use_resume  } from '@/hooks / use_resume';
import { exportResumeToPDF  } from '@/utils / pdf_export';
import { toast  } from '@/components / ui / use - toast';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { ResumePreviewCard  } from './ResumePreviewCard';
import { UploadSection  } from './UploadSection';
import { SelectResumeSection  } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps  } from './types';
<<<<<<< HEAD
<<<<<<< HEAD
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {

  const [selectedOption, setSelectedOption] = useState<
    "recent" | "select" | "upload"
  >("recent");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(
    null
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function ResumeSelector(): any ({ onResumeSelected }: ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<;
    "recent" | "select" | "upload";
  >("recent");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(;
    null,;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);

  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { resume, fetchResume } = useResume();
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import { ResumePreviewCard  } from './ResumePreviewCard';
import { UploadSection  } from './UploadSection';
import { SelectResumeSection  } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps  } from './types';
export function ResumeSelector(): any ({ onResumeSelected }: ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<;
    "recent" | "select" | "upload";
  >("recent");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(;
    null,;
  );
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { resume, fetchResume } = useResume();
  
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Fetch resume data when component mounts
  useEffect(() => {

    const loadResumes = async () => {
<<<<<<< HEAD


  // Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;

  // Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;
      setIsLoading(true);
      try {;
        await fetchResume();
      } catch (error) {;
        console && console.error("Error loading resumes:", error);
      } finally {;
=======
      setIsLoading(true),
      try {
        await fetchResume()
      } catch (error) {
        console.error("Error loading resumes:", error)
      } finally {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setIsLoading(false);
      }
    }
    loadResumes();
  }, [fetchResume]);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {
          id: resume.id |"current"
          title: resume.basic_info.title
          type: "ai_resume"
          resume: resume
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      ];
      // Pre-select the most recent resume;
      if (options && options.length > 0 && selectedOption === "recent") {;
        setSelectedResume(options[0]);
        onResumeSelected(options[0]);

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ];


      // Pre-select the most recent resume;
      if (options && options.length > 0 && selectedOption === "recent") {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setSelectedResume(options[0]);
        onResumeSelected(options[0]);
      }
    }
  }, [resume, selectedOption, onResumeSelected]);
<<<<<<< HEAD
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
  }
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
  };

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0],
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Check if it's a PDF file
      if (file.type !== "application/pdf") {
        toast({

  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Handle resume selection change;
  const handleResumeSelect = (resumeId: string) => {;
    const selected = resumeOptions && resumeOptions.find((opt) => opt && opt.id === resumeId);
    if (selected) {;
      (setSelectedResume(selected), onResumeSelected(selected));
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Handle custom file upload;
  const handleFileUpload = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    if (e && e.target.files && e && e.target.files[0]) {;
      const file = e && e.target.files[0];
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Check if it's a PDF file;
      if (file && file.type !== "application/pdf") {;
        toast({;
          title: "Invalid file type",;
          description: "Please upload a PDF file",;
          variant: "destructive",;
        });
        return;
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Create a custom resume option;
      const customOption: ResumeOption = {;
        id: "custom-upload",;
        title: file && file.name,;
        type: "custom_upload",;
        file: file,;
      };
<<<<<<< HEAD
<<<<<<< HEAD
      
      // Check if it's a PDF file
      if (file.type !== 'application/pdf') {
        toast({
          title: "Invalid file type"
          description: "Please upload a PDF file"
          variant: "destructive"
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setCustomFile(file);
      setSelectedResume(customOption);
      onResumeSelected(customOption);
    }
<<<<<<< HEAD
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
          title: "Invalid file type",
          description: "Please upload a PDF file",

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          title: "Invalid file type",
          description: "Please upload a PDF file",

<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
    } catch (error) {
      console.error('Error downloading PDF:', error),
      toast({
=======
    } catch (error) {
      console.error("Error downloading PDF:", error);
      toast({
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: "Download failed"
        description: "There was an error downloading your resume."
        variant: "destructive"
      });
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: "Download failed",
        description: "There was an error downloading your resume.",
        variant: "destructive"
      })
<<<<<<< HEAD

<<<<<<< HEAD

  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {
      setIsLoading(false)
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
<<<<<<< HEAD


  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Handle "Generate Resume Now" button;
  const handleGenerateResume = () => {;
    window && window.open("/dashboard/talent/portfolio_blank");
  };
<<<<<<< HEAD
  return (
    <div className="space-y-4">;
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>;
=======

  return (
    <div className="space-y-4">;
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <RadioGroup
        value={selectedOption}
        onValueChange={(value) =>;
          handleOptionChange(value as "recent" | "select" | "upload");
        }
<<<<<<< HEAD
    } finally {
      setIsLoading(false)
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  // Handle "Generate Resume Now" button
  const handleGenerateResume = () => {
    window.open("/dashboard/talent/portfolio_blank");
  }

  return (
<<<<<<< HEAD
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>
      <RadioGroup
        value={selectedOption}
        onValueChange={(value) =>
          handleOptionChange(value as "recent" | "select" | "upload")
        }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <div className="space-y-4">;
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>;


      <RadioGroup
        value={selectedOption}
        onValueChange={(value) =>;
          handleOptionChange(value as "recent" | "select" | "upload");
        }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      
      <RadioGroup 
        value={selectedOption} 
        onValueChange={(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recent" id="recent" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Label htmlFor="recent" className="text-white">
            Use most recent AI Resume
          </Label>
        </div>
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        


=======
        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="select" id="select" />
          <Label htmlFor="select" className="text-white">
            Select from saved versions
          </Label>
        </div>
<<<<<<< HEAD


        


=======
        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upload" id="upload" />
          <Label htmlFor="upload" className="text-white">
            Upload a custom resume (PDF)
          </Label>
        </div>
      </RadioGroup>
<<<<<<< HEAD


<<<<<<< HEAD
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
      {selectedOption === "recent" && resume && (
        <ResumePreviewCard
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      {/* Resume selection options based on radio selection */}
      {selectedOption === "recent" && resume && (
        <ResumePreviewCard
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
;
    try {;
      setIsLoading(true),;
      const pdfBlob = await exportResumeToPDF(selectedResume.resume),;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        className="space-y-3";
      >;
        <div className="flex items-center space-x-2">;
          <RadioGroupItem value="recent" id="recent" />;
<<<<<<< HEAD
<<<<<<< HEAD

      {selectedOption === "select" && (;

      {selectedOption === "select" && (;
        <SelectResumeSection



      {selectedOption === "select" && (
        <SelectResumeSection

;
      {selectedOption === 'select' && (;
        <SelectResumeSection;


          resumeOptions={resumeOptions}
          selectedResume={selectedResume}
          <Label htmlFor="recent" className="text-white">Use most recent AI Resume</Label>;
        </div>;
        ;
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

      {selectedOption === "upload" && (;

      {selectedOption === "upload" && (;
        <UploadSection



      {selectedOption === "upload" && (
        <UploadSection

;
      {selectedOption === 'upload' && (;
        <UploadSection;


          customFile={customFile}
          onFileUpload={handleFileUpload}
      ;
      {selectedOption === 'upload' && (;
        <UploadSection;
          customFile={customFile}          onFileUpload={handleFileUpload}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
      )}


<<<<<<< HEAD
<<<<<<< HEAD
;


;

      ;
      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">;
          className="text-zion-purple border-zion-purple/20">;
        <Button ;
          variant="outline";
          onClick={handleGenerateResume}
          className="text-zion-purple border-zion-purple/20";
        >;
          <Plus className="h-4 w-4 mr-2" />;
          Generate Resume Now;
        </Button>;
      </div>;
    </div>;
      {/* Resume selection options based on radio selection */}
      {selectedOption === 'recent' && resume && (;
        <ResumePreviewCard;
          resume={resume}
          onDownload={handleDownloadResume}
          isLoading={isLoading}
        />
      )}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {selectedOption === "select" && (;

        <SelectResumeSection
=======


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      {selectedOption === "select" && (
        <SelectResumeSection
;
      {selectedOption === 'select' && (;
        <SelectResumeSection;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          resumeOptions={resumeOptions}
          selectedResume={selectedResume}
          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          isLoading={isLoading}
<<<<<<< HEAD
<<<<<<< HEAD
        />
      )}

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
      )}


      {selectedOption === "upload" && (;

        <UploadSection
=======



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {selectedOption === "upload" && (
        <UploadSection
;
      {selectedOption === 'upload' && (;
        <UploadSection;
<<<<<<< HEAD
<<<<<<< HEAD
          customFile={customFile}
          onFileUpload={handleFileUpload}
        />
      )}
;

;
      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">
        <Button 
          variant="outline"
          onClick={handleGenerateResume}
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          customFile={customFile}
          onFileUpload={handleFileUpload}
        />;
      )}


;

<<<<<<< HEAD
=======

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="text-zion-purple border-zion-purple/20"
        >
          <Plus className="h-4 w-4 mr-2" />
          Generate Resume Now
        </Button>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
;
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
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
  )
}
;
<<<<<<< HEAD
=======

  )
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
