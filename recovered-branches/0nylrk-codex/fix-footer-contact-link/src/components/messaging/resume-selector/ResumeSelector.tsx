<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React, { useState, useEffect } from './react';
import { Button  } from '@/components / ui / button';
import { RadioGroup, RadioGroupItem  } from '@/components / ui / radio - group';
import { Label  } from '@/components / ui / label';
import { Plus, Loader2  } from './lucide-react';
import { use_resume  } from '@/hooks / use_resume';
import { exportResumeToPDF  } from '@/utils / pdf_export';
import { toast  } from '@/components / ui / use - toast';

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

export function ResumeSelector(): any ({ onResumeSelected }: ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<;
    "recent" | "select" | "upload";
  >("recent");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(;
    null,;

export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {

  const [selectedOption, setSelectedOption] = useState<
    "recent" | "select" | "upload"
  >("recent");
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(
    null
  );
import { toast  } from '@/components / ui / use - toast';  );
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);

  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { resume, fetchResume } = useResume();import React, { useState, useEffect } from "react";
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

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  const { resume, fetchResume } = useResume();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

<<<<<<< HEAD
=======
=======
import React, { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",
import { Label } from "@/components/ui/label";
import { Plus, Loader2  } from 'lucide-react';
import { useResume } from "@/hooks/useResume",
import { exportResumeToPDF } from "@/utils/pdfExport",
import { toast } from "@/components/ui/use-toast";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { ResumePreviewCard  } from './ResumePreviewCard';
import { UploadSection  } from './UploadSection';
import { SelectResumeSection  } from './SelectResumeSection';
=======



import { ResumePreviewCard  } from './ResumePreviewCard';'
import { UploadSection  } from './UploadSection';'
import { SelectResumeSection  } from './SelectResumeSection';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ResumeOption, ResumeSelectorProps  } from './types';



  );
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState, useEffect } from './react';
import { Button  } from '@/components / ui / button';
import { RadioGroup, RadioGroupItem  } from '@/components / ui / radio - group';
import { Label  } from '@/components / ui / label';
import { Plus, Loader2  } from './lucide-react';
import { use_resume  } from '@/hooks / use_resume';
import { exportResumeToPDF  } from '@/utils / pdf_export';
import { toast  } from '@/components / ui / use - toast';  );
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);

  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
  const { resume, fetchResume } = useResume();import React, { useState, useEffect } from "react";
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
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),
  const [customFile, setCustomFile] = useState<File | null>(null),
  const [isLoading, setIsLoading] = useState(false),
<<<<<<< HEAD

<<<<<<< HEAD
  const { resume, fetchResume } = useResume(),
<<<<<<< HEAD
=======
  const { resume, fetchResume } = useResume();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
  const { resume, fetchResume } = useResume();



import React, { useState, useEffect } from "react";"
import { Button } from "@/components/ui/button";"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";"
import { Label } from "@/components/ui/label";"
import { Plus, Loader2 } from "lucide-react";"
import { useResume } from "@/hooks/useResume";"
import { exportResumeToPDF } from "@/utils/pdfExport";"
import { toast } from "@/components/ui/use-toast";"
import { ResumePreviewCard } from "./ResumePreviewCard";"
import { UploadSection } from "./UploadSection";"
import { SelectResumeSection } from "./SelectResumeSection";"
import { ResumeOption, ResumeSelectorProps } from "./types";

'
import React, { useState, useEffect } from 'react',"
import { Button } from "@/components/ui/button","
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group","
import { Label } from "@/components/ui/label",'
import { Plus, Loader2 } from 'lucide-react',"
import { useResume } from "@/hooks/useResume","
import { exportResumeToPDF } from "@/utils/pdfExport","
import { toast } from "@/components/ui/use-toast",'
import { ResumePreviewCard } from './ResumePreviewCard','
import { UploadSection } from './UploadSection','
import { SelectResumeSection } from './SelectResumeSection','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ResumeOption, ResumeSelectorProps } from './types',

export function ResumeSelector() { return null; }
  const { resume, fetchResume } = useResume(),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  const { resume, fetchResume } = useResume(),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Fetch resume data when component mounts
  useEffect(() => {

    const loadResumes = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  // Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  // Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  ;
;
  // Fetch resume data when component mounts;
  useEffect(() => {}
    const loadResumes = async () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsLoading(true);
      try {;
        await fetchResume();
      } catch (error) {;"
        console && console.error("Error loading resumes:", error);
      } finally {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        setIsLoading(false);
      }
    }
    loadResumes();
  }, [fetchResume]);

export /**;
 * ResumeSelector - Function description;
 */
function ResumeSelector() {}
  const [selected_option, setSelectedOption] = useState<;"
    "recent" | "select" | "upload";"
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
  useEffect (() => {}
    const load_resumes = async () => {}
      setIsLoading (true);
      try {}
        await fetch_resume ();
      } catch (error) {"
        console.error ("Error loading resumes:", error);
      } finally {}
        setIsLoading (false);
      }
    }
;
    load_resumes ();
  }, [fetch_resume]);
;
  // Update resume options when resume data changes;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      const options: ResumeOption[] = [;



        {"
          id: resume.id |"current"
          title: resume.basic_info.title"
          type: "ai_resume"
          resume: resume;
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



  // Update resume options when resume data changes;
  useEffect(() => {;
    if (resume) {;
      const options: ResumeOption[] = [;
        {;"
          id: resume && resume.id || "current",;
          title: resume && resume.basic_info.title,;"
          type: "ai_resume",;
          resume: resume,;
        },;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      ];

        setSelectedResume(options[0]);
        onResumeSelected(options[0]);
<<<<<<< HEAD
      }
    }
  }, [resume, selectedOption, onResumeSelected]);


  // Handle radio option change;
  const handleOptionChange = (value: "recent" | "select" | "upload") => {;
    setSelectedOption(value);

    if (value === "recent" && resumeOptions && resumeOptions.length > 0) {;

=======
      // Pre-select the most recent resume;
      if (options && options.length > 0 && selectedOption === "recent") {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        setSelectedResume(options[0]);
=======
          setIsLoading(false);
      }
    }
    loadResumes();
  }, [fetchResume]);        setSelectedResume(options[0]);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          setIsLoading(false);
      }
    }
    loadResumes();
  }, [fetchResume]);        setSelectedResume(options[0]);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
// Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

export /**
 * ResumeSelector - Function description
 */
function ResumeSelector() {
          setIsLoading(false);
      }
    }
    loadResumes();
  }, [fetchResume]);        setSelectedResume(options[0]);
        onResumeSelected(options[0]);

import React, { useState, useEffect } from 'react',;
import { Button } from "@/components/ui/button",;
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;
import { Label } from "@/components/ui/label",;
import { Plus, Loader2 } from 'lucide-react',;
import { useResume } from "@/hooks/useResume",;
import { exportResumeToPDF } from "@/utils/pdfExport",;
import { toast } from "@/components/ui/use-toast",;
import { toast  } from '@/components / ui / use - toast';
import { ResumePreviewCard  } from './ResumePreviewCard';
import { UploadSection  } from './UploadSection';
import { SelectResumeSection  } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps  } from './types';
export function ResumeSelector(): any ({ onResumeSelected }: ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<;
    "recent" | "select" | "upload";""
  >("recent");"
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(;
)
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);


  const [customFile, setCustomFile] = useState<File | null>(null);
"
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),

  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),

  const [customFile, setCustomFile] = useState<File | null>(null),

  const [selected_option, setSelectedOption] = useState<;

import React, { useState, useEffect } from './react';''
import { Button  } from '@/components / ui / button';''
import { RadioGroup, RadioGroupItem  } from '@/components / ui / radio - group';''
import { Label  } from '@/components / ui / label';''
import { Plus, Loader2  } from './lucide-react';''
import { use_resume  } from '@/hooks / use_resume';''
import { exportResumeToPDF  } from '@/utils / pdf_export';''
import { toast  } from '@/components / ui / use - toast';''
import { ResumePreviewCard  } from './ResumePreviewCard';''
import { UploadSection  } from './UploadSection';''
import { SelectResumeSection  } from './SelectResumeSection';''
import { ResumeOption, ResumeSelectorProps  } from './types';'
export function ResumeSelector(): any ({ onResumeSelected }: ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<;'
    "recent" | "select" | "upload";""
  >("recent");"
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(;
</ResumeOption>)
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);
</ResumeOption>

  const [customFile, setCustomFile] = useState<File | null>(null);
</File>"
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),'
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),
</ResumeOption>
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),
</ResumeOption>
  const [customFile, setCustomFile] = useState<File | null>(null),
</File>
  const [selected_option, setSelectedOption] = useState<;'
    "recent" | "select" | "upload";""
  >("recent");"
  const [selected_resume, setSelectedResume] = useState < ResumeOption | null>(
    null,)
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
  // TODO: Implement
}
        await fetch_resume ();
      } catch (error) {"
        console.error ("Error loading resumes:", error);"
      } finally {
  // TODO: Implement
        setIsLoading (false);
    load_resumes ();
  }, [fetch_resume]);
  // Update resume options when resume data changes;
    // Check condition;
if ( {) {
  $2;
}
        setIsLoading (false);
      }
    }
;
    load_resumes ();
  }, [fetch_resume]);
;
  // Update resume options when resume data changes;
  useEffect (() => {
    // Check condition;
if ( {) {
  $2;
}
      const options: ResumeOption[] = [;

        {
          id: resume.id |"current"
          title: resume.basic_info.title
          type: "ai_resume"
          resume: resume
        }

        {"
          id: resume.id |"current"",
  title: resume.basic_info.title;"
          type: "ai_resume"",
  resume: resume;
  // Update resume options when resume data changes;
  useEffect(() => {;
    if (resume) {;]
        }
  // Update resume options when resume data changes;
  useEffect(() => {;
    if (resume) {;]
      const options: ResumeOption[] = [;
        {;"
          id: resume && resume.id || "current",;"
          title: resume && resume.basic_info.title,;"
          type: "ai_resume",;"
          resume: resume,;
        },;]
      ];


      // Pre-select the most recent resume;"
      if (options && options.length > 0 && selectedOption === "recent") {;"
        setSelectedResume(options[0]);
        onResumeSelected(options[0]);
      }
    }
  }, [resume, selectedOption, onResumeSelected]);

  // Handle radio option change;
  const handleOptionChange = (value: "recent" | "select" | "upload") => {;
    setSelectedOption(value);

    if (value === "recent" && resumeOptions && resumeOptions.length > 0) {;

// Pre-select the most recent resume;
      if (options && options.length > 0 && selectedOption === "recent") {;
        setSelectedResume(options[0]);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        onResumeSelected(options[0]);


  // Handle radio option change;"
  const handleOptionChange = (value: "recent" | "select" | "upload") => {;"
    setSelectedOption(value);
    if (value === "recent" && resumeOptions && resumeOptions.length > 0) {;"
import React, { useState, useEffect } from 'react',;
import { Button } from "@/components/ui/button",;""
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;""
import { Label } from "@/components/ui/label",;""
import { Plus, Loader2 } from 'lucide-react',;
import { useResume } from "@/hooks/useResume",;""
import { exportResumeToPDF } from "@/utils/pdfExport",;""
import { toast } from "@/components/ui/use-toast",;""
pr-12325
import { ResumePreviewCard } from './ResumePreviewCard',;
import { UploadSection } from './UploadSection',;
import { SelectResumeSection } from './SelectResumeSection',;
=======
'
import React, { useState, useEffect } from 'react',;"
import { Button } from "@/components/ui/button",;"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;"
import { Label } from "@/components/ui/label",;'
import { Plus, Loader2 } from 'lucide-react',;"
import { useResume } from "@/hooks/useResume",;"
import { exportResumeToPDF } from "@/utils/pdfExport",;"
import { toast } from "@/components/ui/use-toast",;'
import { ResumePreviewCard } from './ResumePreviewCard',;'
import { UploadSection } from './UploadSection',;'
import { SelectResumeSection } from './SelectResumeSection',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ResumeOption, ResumeSelectorProps } from './types',;
;
export function ResumeSelector() { return null; }
  const { resume, fetchResume } = useResume(),;
  ;
  // Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;
      setIsLoading(true),;
      try {;
        await fetchResume(),;
      } catch (error) {;"
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
      const options:ResumeOption[] = [{;'
        id:resume.id || 'current',;
        title:resume.basic_info.title,;'
        type:'ai_resume',;
        resume:resume;
      }],;
      ;
      setResumeOptions(options),;
      ;
      // Pre-select the most recent resume;'
      if (options.length > 0 && selectedOption === 'recent') {;
        setSelectedResume(options[0]),;
        onResumeSelected(options[0]),;
      }
    }
<<<<<<< HEAD
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
          title:"Invalid file type",,
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      (setSelectedResume(resumeOptions[0]), onResumeSelected(resumeOptions[0]));
=======

      (setSelectedResume(resumeOptions[0]), onResumeSelected(resumeOptions[0]));"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    } else if (value === "select") {;
      // Reset selection until user chooses;
      setSelectedResume(null);"
    } else if (value === "upload") {;
      setSelectedResume(null);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      (setSelectedResume(resumeOptions[0]), onResumeSelected(resumeOptions[0]));
    } else if (value === "select") {;
      // Reset selection until user chooses;
      setSelectedResume(null);
    } else if (value === "upload") {;
      setSelectedResume(null);
    }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
};

=======


  }
  // Handle custom file upload;
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {}
    if (e.target.files && e.target.files[0]) {}
      const file = e.target.files[0];
  };



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsLoading(true),
      try {}
        await fetchResume()
      } catch (error) {"
        console.error("Error loading resumes:", error)
      } finally {}
  };

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD
      setIsLoading(true),
      try {
        await fetchResume()
      } catch (error) {
        console.error("Error loading resumes:", error)
      } finally {

=======
  };

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  }
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
  };
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======



        setIsLoading(false)'
import React, { useState, useEffect } from 'react',;"
import { Button } from "@/components/ui/button",;"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;"
import { Label } from "@/components/ui/label",;'
import { Plus, Loader2 } from 'lucide-react',;"
import { useResume } from "@/hooks/useResume",;"
import { exportResumeToPDF } from "@/utils/pdfExport",;"
import { toast } from "@/components/ui/use-toast",;'
import { ResumePreviewCard } from './ResumePreviewCard',;'
import { UploadSection } from './UploadSection',;'
import { SelectResumeSection } from './SelectResumeSection',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ResumeOption, ResumeSelectorProps } from './types',;
export function ResumeSelector() { return null; }
=======
import { ResumeOption, ResumeSelectorProps } from './types',;
export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),;
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),;
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),;
  const [customFile, setCustomFile] = useState<File | null>(null),;
  const [isLoading, setIsLoading] = useState(false),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { resume, fetchResume } = useResume(),;
  // Fetch resume data when component mounts;
  useEffect(() => {;
    const loadResumes = async () => {;
      setIsLoading(true),;
      try {;
        await fetchResume();
<<<<<<< HEAD
      } catch (error) {;"
=======
      } catch (error) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      const options: ResumeOption[] = [{;'
        id: resume.id || 'current',;
        title: resume.basic_info.title,;'
=======
      const options: ResumeOption[] = [{;
        id: resume.id || 'current',;
        title: resume.basic_info.title,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        type: 'ai_resume',;
        resume: resume;
      }],;
      setResumeOptions(options),;
<<<<<<< HEAD
      // Pre-select the most recent resume;'
=======
      // Pre-select the most recent resume;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      if (options.length > 0 && selectedOption === 'recent') {;
        setSelectedResume(options[0]),;
        onResumeSelected(options[0]);
      }
    }
  }, [resume, selectedOption, onResumeSelected]),;
<<<<<<< HEAD
  // Handle radio option change;'
  const handleOptionChange = (value: 'recent' | 'select' | 'upload') => {;
    setSelectedOption(value),;'
    if (value === 'recent' && resumeOptions.length > 0) {;
      setSelectedResume(resumeOptions[0]),;
      onResumeSelected(resumeOptions[0]);'
    } else if (value === 'select') {;
      // Reset selection until user chooses;
      setSelectedResume(null);'
=======
  // Handle radio option change;
  const handleOptionChange = (value: 'recent' | 'select' | 'upload') => {;
    setSelectedOption(value),;
    if (value === 'recent' && resumeOptions.length > 0) {;
      setSelectedResume(resumeOptions[0]),;
      onResumeSelected(resumeOptions[0]);
    } else if (value === 'select') {;
      // Reset selection until user chooses;
      setSelectedResume(null);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      // Check if it's a PDF file
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file type"
          description: "Please upload a PDF file"
          variant: "destructive"
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Check if it's a PDF file
      if (file.type !== "application/pdf") {
        toast({
=======
  // Handle custom file upload;
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {}
    if (e.target.files && e.target.files[0]) {}
      const file = e.target.files[0],
      
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


'
      // Check if it's a PDF file"
      if (file.type !== "application/pdf") {}
        toast({}
  };

  // Handle resume selection change;
  const handleResumeSelect = (resumeId: string) => {;
    const selected = resumeOptions && resumeOptions.find((opt) => opt && opt.id === resumeId);
    if (selected) {;
      (setSelectedResume(selected), onResumeSelected(selected));
    }
"
          variant: "destructive"
        }),
        return;
  },;
  // Handle custom file upload;
  const handleFileUpload = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    if (e && e.target.files && e && e.target.files[0]) {;
      const file = e && e.target.files[0];
'
      // Check if it's a PDF file;"
      if (file && file.type !== "application/pdf") {;
<<<<<<< HEAD
        toast({;
<<<<<<< HEAD
<<<<<<< HEAD
          title: "Invalid file type",,
  description: "Please upload a PDF file",;
=======
        toast({;"
          title: "Invalid file type",;"
          description: "Please upload a PDF file",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          title: "Invalid file type",;
          description: "Please upload a PDF file",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          title: "Invalid file type",,
  description: "Please upload a PDF file",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          variant: "destructive",;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        });
        return;
<<<<<<< HEAD
<<<<<<< HEAD
      }      setCustomFile(file);
      setSelectedResume(customOption);
      onResumeSelected(customOption);
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    try {
=======
      }
=======
      }

      // Create a custom resume option;
      const customOption: ResumeOption = {;
        id: "custom-upload",;
        title: file && file.name,;
        type: "custom_upload",;
        file: file,;
      };

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
      setCustomFile(file);
      setSelectedResume(customOption);
      onResumeSelected(customOption);
    }
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
<<<<<<< HEAD
    

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      }      setCustomFile(file);
      setSelectedResume(customOption);
      onResumeSelected(customOption);
    }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a



      setCustomFile(file);
      setSelectedResume(customOption);
      onResumeSelected(customOption);
    }

    try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsLoading(true);
      const pdfBlob = await exportResumeToPDF(selectedResume.resume);
      // Create download link;
      const url = URL.createObjectURL(pdfBlob);"
      const link = document.createElement("a");
      link.href = url;"
      link.download = `${selectedResume.title |"Resume"}.pdf`;
      document.body.appendChild(link);
      link.click();
      // Clean up;
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast({"
        title: "Success!""
        description: "Your resume has been downloaded."
      });"
          title: "Invalid file type","
          description: "Please upload a PDF file",
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          variant: "destructive"
        }),
        return;
  },;
  // Handle custom file upload;
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {;
    if (e.target.files && e.target.files[0]) {;
      const file = e.target.files[0],;'
      // Check if it's a PDF file;'
      if (file.type !== 'application/pdf') {;
        toast({;"
          title: "Invalid file type",;"
          description: "Please upload a PDF file",;"
          variant: "destructive";
        }),;
        return;
      }
;
      // Create a custom resume option;
      const customOption: ResumeOption = {;'
        id: 'custom-upload',;
        title: file.name,;'
        type: 'custom_upload',;
        file: file;
      },;
      setCustomFile(file),;
      setSelectedResume(customOption),;
      onResumeSelected(customOption);
    }
  },;
  // Handle resume download;
  const handleDownloadResume = async () => {;'
    if (!selectedResume || selectedResume.type !== 'ai_resume' || !selectedResume.resume) {;
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

"
          title: "Invalid file type","
          description: "Please upload a PDF file",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
    try {
      setIsLoading(true),
      const pdfBlob = await exportResumeToPDF(selectedResume.resume),
<<<<<<< HEAD

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Create download link
      const url = URL.createObjectURL(pdfBlob),
=======



    try {}
      setIsLoading(true),
      const pdfBlob = await exportResumeToPDF(selectedResume.resume),
      
      // Create download link;
      const url = URL.createObjectURL(pdfBlob),'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      const link = document.createElement('a'),
      link.href = url,'`
      link.download = `${selectedResume.title || 'Resume'}.pdf`,
      document.body.appendChild(link),
      link.click(),
<<<<<<< HEAD
<<<<<<< HEAD

      // Clean up
      document.body.removeChild(link),
      URL.revokeObjectURL(url),

=======
      // Clean up
      document.body.removeChild(link),
      URL.revokeObjectURL(url),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      toast({
        title: "Success!",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        description: "Your resume has been downloaded."})
<<<<<<< HEAD
=======
        description: "Your resume has been downloaded."})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    } catch (error) {
      console.error("Error downloading PDF:", error);
      toast({
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      
      // Clean up;
      document.body.removeChild(link),
      URL.revokeObjectURL(url),
      
      toast({"
        title: "Success!","
        description: "Your resume has been downloaded."})
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



    } catch (error) {"
      console.error("Error downloading PDF:", error);
      toast({}
      });


"
        title: "Download failed","
        description: "There was an error downloading your resume.","
        variant: "destructive"
      })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    } finally {
      setIsLoading(false)
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  };
"
  // Handle "Generate Resume Now" button;
  const handleGenerateResume = () => {;"
    window && window.open("/dashboard/talent/portfolio_blank");
  };

  return ("
    <div className="space-y-4">;"
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>;

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <RadioGroup
=======
        description: "Your resume has been downloaded."})        title: "Download failed",
=======
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
});
    } finally {;
      setIsLoading(false);

    } catch (error) {
      console.error('Error downloading PDF:', error),
      toast({
        title: "Download failed"
        description: "There was an error downloading your resume."
        variant: "destructive"
      });
        title: "Download failed",
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        description: "Your resume has been downloaded."})        title: "Download failed",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        description: "There was an error downloading your resume.",
        variant: "destructive"
      })

    } finally {
      setIsLoading(false)
<<<<<<< HEAD
    }      <RadioGroup
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        description: "Your resume has been downloaded."})        title: "Download failed",
        description: "There was an error downloading your resume.",
        variant: "destructive"
      })
=======
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
    }      <RadioGroup
        value={selectedOption}
        onValueChange={(value) =>;
          handleOptionChange(value as "recent" | "select" | "upload");
        }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    } finally {
      setIsLoading(false)
    }      <RadioGroup
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      <RadioGroup;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        value={selectedOption}
        onValueChange={(value) =>;"
          handleOptionChange(value as "recent" | "select" | "upload");
        }
<<<<<<< HEAD
    } finally {
=======

    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsLoading(false)
    }
  }"
  // Handle "Generate Resume Now" button;
  const handleGenerateResume = () => {"
    window.open("/dashboard/talent/portfolio_blank");
  }

<<<<<<< HEAD
  return ("
    <div className="space-y-4">;"
=======

  return (
    <div className="space-y-4">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>;

      });
    } finally {;
      setIsLoading(false);
    }
      <RadioGroup;
        value={selectedOption}
        onValueChange={(value) =>"
          handleOptionChange(value as "recent" | "select" | "upload")
<<<<<<< HEAD
<<<<<<< HEAD
        }

  },
  "
  // Handle "Generate Resume Now" button;
  const handleGenerateResume = () => {'
    window.open('/dashboard/talent/portfolio_blank')
  },
  
  return ("
    <div className="space-y-4">"
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      <RadioGroup
        value={selectedOption}
        onValueChange={(value) =>
          handleOptionChange(value as "recent" | "select" | "upload")
        }
<<<<<<< HEAD
=======
  },
  // Handle "Generate Resume Now" button
  const handleGenerateResume = () => {
    window.open('/dashboard/talent/portfolio_blank')
  },
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>

<RadioGroup
        value={selectedOption}
        onValueChange={(value) =>
          handleOptionChange(value as "recent" | "select" | "upload")
        }
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <RadioGroup 
        value={selectedOption} 
        onValueChange={(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        className="space-y-3"
      >"
        <div className="flex items-center space-x-2">"
          <RadioGroupItem value="recent" id="recent" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <Label htmlFor="recent" className="text-white">
            Use most recent AI Resume
          </Label>
        </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


        


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="select" id="select" />
=======


"
        <div className="flex items-center space-x-2">"
          <RadioGroupItem value="select" id="select" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Label htmlFor="select" className="text-white">
            Select from saved versions;
          </Label>
        </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD
        


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upload" id="upload" />
=======
        }        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recent" id="recent" />          <RadioGroupItem value="upload" id="upload" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        }        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recent" id="recent" />          <RadioGroupItem value="upload" id="upload" />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
        <div className="flex items-center space-x-2">"
          <RadioGroupItem value="upload" id="upload" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recent" id="recent" />
          <Label htmlFor="recent" className="text-white">
            Use most recent AI Resume
          </Label>
        </div>


        <div className="flex items-center space-x-2">
          <RadioGroupItem value="select" id="select" />
          <Label htmlFor="select" className="text-white">
            Select from saved versions
          </Label>
        </div>


        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upload" id="upload" />
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        }        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recent" id="recent" />          <RadioGroupItem value="upload" id="upload" />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <Label htmlFor="upload" className="text-white">
            Upload a custom resume (PDF)
          </Label>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      </RadioGroup>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======

          <Label htmlFor="recent" className="text-white">Use most recent AI Resume</Label>
        </div>
        
=======
<Label htmlFor="recent" className="text-white">Use most recent AI Resume</Label>
        </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="select" id="select" />
          <Label htmlFor="select" className="text-white">Select from saved versions</Label>
        </div>
<<<<<<< HEAD
        
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upload" id="upload" />
          <Label htmlFor="upload" className="text-white">Upload a custom resume (PDF)</Label>
        </div>
      </RadioGroup>
      {/* Resume selection options based on radio selection */}
      {selectedOption === "recent" && resume && (
        <ResumePreviewCard
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      </RadioGroup>

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
    try {;
      setIsLoading(true),;
      const pdfBlob = await exportResumeToPDF(selectedResume.resume),;
<<<<<<< HEAD
<<<<<<< HEAD

      // Create download link;
<<<<<<< HEAD
=======
      </RadioGroup>      // Create download link;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </RadioGroup>      // Create download link;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      // Create download link;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
      // Create download link;
      </RadioGroup>      // Create download link;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const url = URL.createObjectURL(pdfBlob),;
=======
      const url = URL.createObjectURL(pdfBlob),;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      const link = document.createElement('a'),;
      link.href = url,;'`
      link.download = `${selectedResume.title || 'Resume'}.pdf`,;
      document.body.appendChild(link),;
      link.click(),;
      // Clean up;
      document.body.removeChild(link),;
      URL.revokeObjectURL(url),;
<<<<<<< HEAD
      toast({;
        title: "Success!",,
  description: "Your resume has been downloaded."});
    } catch (error) {;
      console.error('Error downloading PDF:', error),;
      toast({;
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Download failed",,
  description: "There was an error downloading your resume.",;
=======
      toast({;"
        title: "Success!",;"
        description: "Your resume has been downloaded."});
    } catch (error) {;'
      console.error('Error downloading PDF:', error),;
      toast({;"
        title: "Download failed",;"
        description: "There was an error downloading your resume.",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Download failed",;
        description: "There was an error downloading your resume.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        title: "Download failed",,
  description: "There was an error downloading your resume.",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }
  };"
  // Handle "Generate Resume Now" button;
<<<<<<< HEAD
  const handleGenerateResume = () => {;
    window.open('/dashboard/talent/portfolio_blank')
};
  return (;
    <div className="space-y-4">;
=======
  const handleGenerateResume = () => {;'
    window.open('/dashboard/talent/portfolio_blank');
  };
  return (;"
    <div className="space-y-4">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>;
      <RadioGroup;
        value={selectedOption} ;'
        onValueChange={(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}
<<<<<<< HEAD
<<<<<<< HEAD
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        className="space-y-3";
      >;"
        <div className="flex items-center space-x-2">;"
          <RadioGroupItem value="recent" id="recent" />;
<<<<<<< HEAD
          <Label htmlFor="recent" className="text-white">;
            Use most recent AI Resume;
          </Label>;
        </div>;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
        <div className="flex items-center space-x-2">;
          <RadioGroupItem value="upload" id="upload" />;
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
          <Label html_for="upload" className="text - white">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            Upload a custom resume (PDF);
=======
          <Label htmlFor="upload" className="text-white">;            Upload a custom resume (PDF);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <Label htmlFor="upload" className="text-white">;            Upload a custom resume (PDF);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <Label htmlFor="upload" className="text-white">;            Upload a custom resume (PDF);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </Label>;
        </div>;
      </RadioGroup>;
<<<<<<< HEAD
      {/* Resume selection options based on radio selection */}
<<<<<<< HEAD
      {selectedOption === 'recent' && resume && (;
        <ResumePreviewCard;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
      {selectedOption === "recent" && resume && (;
        <ResumePreviewCard
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      {/* Resume selection options based on radio selection */}"
      {selectedOption === "recent" && resume && (;
        <ResumePreviewCard;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export function ResumeSelector({ onResumeSelected } ResumeSelectorProps) {;
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),;
"
    if (value === "recent" && resumeOptions && resumeOptions.length > 0) {;"
        setSelectedResume(options[0]);
        onResumeSelected(options[0]);
"
import React, { useState, useEffect } from 'react',;''
import { Button } from "@/components/ui/button",;""
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",;""
import { Label } from "@/components/ui/label",;""
import { Plus, Loader2 } from 'lucide-react',;''
import { useResume } from "@/hooks/useResume",;""
import { exportResumeToPDF } from "@/utils/pdfExport",;""
import { toast } from "@/components/ui/use-toast",;""
import { ResumePreviewCard } from './ResumePreviewCard',;''
import { UploadSection } from './UploadSection',;''
import { SelectResumeSection } from './SelectResumeSection',;''
import { ResumeOption, ResumeSelectorProps } from './types',;'
;
export function ResumeSelector({ onResumeSelected } ResumeSelectorProps) {;'
  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent'),;'
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null),;

  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]),;

  const [customFile, setCustomFile] = useState<File | null>(null),;

  const handleFileUpload = (e:React.ChangeEvent<HTMLInputElement>) => {;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {





  const handleFileUpload = (e: React && React.ChangeEvent<HTMLInputElement>) => {;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {;

    <div className="space-y-4">;"
</div>"
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>;"
      <RadioGroup;
        value={selectedOption}
        onValueChange={(value) =>;
        onValueChange={(value) =>
    <div className="space-y-4">"
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>"

        value={selectedOption} "
        onValueChange={(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}

        <div className="flex items-center space-x-2">"
          <RadioGroupItem value="recent" id="recent" />"
          <Label htmlFor="recent" className="text-white">"

        </div>



          <RadioGroupItem value="select" id="select" />"
          <Label htmlFor="select" className="text-white">"




          <RadioGroupItem value="upload" id="upload" />"
          <Label htmlFor="upload" className="text-white">"

        value={selectedOption} ;"

        <div className="flex items-center space-x-2">;"
          <RadioGroupItem value="recent" id="recent" />;"
          <Label htmlFor="recent" className="text-white">;"

        </div>;"
          <RadioGroupItem value="select" id="select" />;"
          <Label htmlFor="select" className="text-white">;"

          <RadioGroupItem value="upload" id="upload" />;"
          <Label htmlFor="upload" className="text-white">;"

        </div>;
        <ResumePreviewCard;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          resume={resume}
          onDownload={handleDownloadResume}
          isLoading={isLoading}
        />;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      {selectedOption === "select" && (;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <SelectResumeSection;
"
      {selectedOption === "select" && (
        <SelectResumeSection;
;'
      {selectedOption === 'select' && (;
        <SelectResumeSection;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        <SelectResumeSection
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

{selectedOption === "select" && (;

      {selectedOption === "select" && (;
        <SelectResumeSection

      {selectedOption === "select" && (
        <SelectResumeSection
;
      {selectedOption === 'select' && (;
        <SelectResumeSection;

<SelectResumeSection
</ResumePreviewCard>
        <SelectResumeSection;"
      {selectedOption === "select" && ("
        <SelectResumeSection;
;"
      {selectedOption === 'select' && (;


pr-12325
        <SelectResumeSection;

<<<<<<< HEAD
        <SelectResumeSection
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          resumeOptions={resumeOptions}
          selectedResume={selectedResume}
          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          isLoading={isLoading}
        />;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

      {selectedOption === "upload" && (;

resumeOptions={resumeOptions}
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

<<<<<<< HEAD

<<<<<<< HEAD
      {selectedOption === "upload" && (;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <UploadSection
=======
"
      {selectedOption === "upload" && (;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <UploadSection;
"
      {selectedOption === "upload" && (
        <UploadSection;
;'
      {selectedOption === 'upload' && (;
        <UploadSection;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          customFile={customFile}
          onFileUpload={handleFileUpload}
customFile={customFile}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          customFile={customFile}
          onFileUpload={handleFileUpload}
          customFile={customFile}
          onFileUpload={handleFileUpload}
      ;
      {selectedOption === 'upload' && (;
        <UploadSection;
          customFile={customFile}          onFileUpload={handleFileUpload}
        <UploadSection
          customFile={customFile}
          onFileUpload={handleFileUpload}
=======


        <UploadSection;
          customFile={customFile}
          onFileUpload={handleFileUpload}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        />;
      )}
<<<<<<< HEAD

      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">
;

;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;

;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <Button
=======


      {/* Generate Resume Now button */}"
      <div className="flex justify-between items-center pt-2">;
        <Button"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          variant="outline"
          onClick={handleGenerateResume}



      {/* Resume selection options based on radio selection */}"
=======
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">;
        <Button
          variant="outline"
          onClick={handleGenerateResume}

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {selected_option === "recent" && resume && (
        <ResumePreviewCard;
          resume={resume}
          on_download={handleDownloadResume}
          is_loading={is_loading}
<<<<<<< HEAD
        />)}"
=======
        />)}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {selected_option === "select" && (
        <SelectResumeSection;
          resume_options={resume_options}
          selected_resume={selected_resume}
          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          is_loading={is_loading}
<<<<<<< HEAD
        />)}"
=======
        />)}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {selected_option === "upload" && (
        <UploadSection;
          custom_file={custom_file}
          onFileUpload={handleFileUpload}
        />)}
      {/* Generate Resume Now button */}
<<<<<<< HEAD
"
      <div className="flex justify - between items - center pt - 2">;
        <Button;"
          variant="outline";
          on_click={handleGenerateResume}"
          className="text - zion - purple border - zion - purple / 20";
        >;"
=======
      <div className="flex justify - between items - center pt - 2">;
        <Button;
          variant="outline";
          on_click={handleGenerateResume}
          className="text - zion - purple border - zion - purple / 20";
        >;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Plus className="h - 4 w - 4 mr - 2" />;
          Generate Resume Now;
        </Button>;
      </div>;
    </div>);

<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
      <div className="flex justify-between items-center pt-2">
        <Button 
          variant="outline"
          onClick={handleGenerateResume}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<div className="flex justify-between items-center pt-2">
        <Button 
          variant="outline"
          onClick={handleGenerateResume}
</SelectResumeSection>
        <UploadSection;'
      {selectedOption === "upload" && ("
        <UploadSection;
;"
      {selectedOption === 'upload' && (;'
        <UploadSection;



          customFile={customFile}
          onFileUpload={handleFileUpload}
          customFile={customFile}
          onFileUpload={handleFileUpload}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          className="text-zion-purple border-zion-purple/20"
        >"
          <Plus className="h-4 w-4 mr-2" />
          Generate Resume Now;
        </Button>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
}  )
=======

  )
}
;

<<<<<<< HEAD
  )
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
)
}  )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
  );
}
  )
}
;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


}

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

      ;'
      {selectedOption === 'upload' && (;'
        <UploadSection;
          customFile={customFile}          onFileUpload={handleFileUpload}
        <UploadSection;
      {selectedOption === "upload" && ("
      {selectedOption === 'upload' && (;


          customFile={customFile}
          onFileUpload={handleFileUpload}
          customFile={customFile}          onFileUpload={handleFileUpload}

      <div className="flex justify-between items-center pt-2">;"
        <Button;"
          variant="outline""
          onClick={handleGenerateResume}

      {/* Resume selection options based on radio selection */}"
      {selected_option === "recent" && resume && ("
          on_download={handleDownloadResume}
          is_loading={is_loading})
        />)}

          resume_options={resume_options}
          selected_resume={selected_resume}
          is_loading={is_loading}

          custom_file={custom_file}
      <div className="flex justify - between items - center pt - 2">;"
          variant="outline";"
          on_click={handleGenerateResume}"
          className="text - zion - purple border - zion - purple / 20";"
        >;
          <Plus className="h - 4 w - 4 mr - 2" />;"

    </div>);"
          <Plus className="h-4 w-4 mr-2" />"

  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'> ('recent');
const [selectedResume, setSelectedResume] = useState<ResumeOption | null> (null);

const [resumeOptions, setResumeOptions] = useState<ResumeOption[]> ([]);

const [customFile, setCustomFile] = useState<File | null> (null);

return (<div className="space-y-4" > <h3 className="text-lg font-medium text-white" >Attach Resume</h3> <RadioGroup value= {"
</div>)"
}className="space-y-3" flex items-center space-x-2"> <RadioGroupItem value=" recent"id=" recent"/> <Label htmlFor=" recent"className=" text-white">Use most recent AI Resume </div> <div className=" flex items-center space-x-2"> <RadioGroupItem value=" select"id=" select"/> <Label htmlFor=" select"className=" text-white">Select from saved versions </div> <div className=" flex items-center space-x-2"> <RadioGroupItem value=" upload"id=" upload"/> <Label htmlFor=" upload"className=" text-white">Upload a custom resume (PDF)  </div>  {"
  selectedOption === 'recent'&& resume && (<ResumePreviewCard resume= {
  resume;
}onDownload= {
  handleDownloadResume;
}isLoading= {
  isLoading;)
}/>) 

  selectedOption === 'select'&& (<SelectResumeSection resumeOptions= {
  resumeOptions;
}selectedResume= {
  selectedResume;
}handleResumeSelect= {
  handleResumeSelect;
}handleDownloadResume= {

  selectedOption === 'upload' && (<UploadSection customFile= {
  customFile;
}onFileUpload= {
  handleFileUpload;)

}> <Plus className=" h-4 w-4 mr-2" /> Generate Resume Now  </div> </div>)"
pr-12325
}/>) 
</UploadSection>'
}> <Plus className=" h-4 w-4 mr-2" /> Generate Resume Now </Button> </div> </div>)"
</Plus>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
