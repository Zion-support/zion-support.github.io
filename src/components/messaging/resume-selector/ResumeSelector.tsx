<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import React, { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",
import { Label } from "@/components/ui/label",
import { Plus, Loader2 } from 'lucide-react'
import { useResume } from "@/hooks/useResume",
import { exportResumeToPDF } from "@/utils/pdfExport",
<<<<<<< HEAD

  // Fetch resume data when component mounts
  useEffect(() => {
    const loadResumes = async () => {

      try {
=======
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
>>>>>>>   // Fetch resume data when component mounts
  useEffect(() => {
    const loadResumes = async () => {
      setIsLoading(true)
>>>>>>>       try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        await fetchResume()
      } catch (error) {
        logErrorToProduction('Error loading resumes:', { data: error })
      } finally {
        setIsLoading(false)
<<<<<<< HEAD

import React, { useState, useEffect } from 'react',;
=======
}

  )
}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      try {
        await fetch_resume ();
      } catch (error) {
        logErrorToProduction ('Error loading resumes:', { data: error });
      } finally {

import { ResumePreviewCard } from './ResumePreviewCard';
import { UploadSection } from './UploadSection';
import { SelectResumeSection } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps } from './types';
import {logErrorToProduction} from '@/utils/productionLogger';
export function ResumeSelector(): any ({ onResumeSelected }: ResumeSelectorProps) {;

  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent');
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { resume, fetchResume } = useResume();

        setIsLoading(false)

  ;
};
  );
};

>>>>>>> import React, { useState, useEffect } from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

  // Fetch resume data when component mounts;
  useEffect((,) => {;
    const loadResumes = async () => {;
      setIsLoading(true);
      try {;
        await fetchResume();
      } catch (error) {;
        logErrorToProduction('Error loading resumes:', { data: error });
      } finally {;
        setIsLoading(false);
      }
    };

            return;
      }

}
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}


  )
}
;
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
