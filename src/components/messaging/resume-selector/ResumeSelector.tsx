<<<<<<< HEAD
=======
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React, { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group",
import { Label } from "@/components/ui/label",
import { Plus, Loader2 } from 'lucide-react'
import { useResume } from "@/hooks/useResume",
import { exportResumeToPDF } from "@/utils/pdfExport",
<<<<<<< HEAD
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
=======
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
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // Fetch resume data when component mounts
  useEffect((,) => {
    const loadResumes = async () => {
<<<<<<< HEAD
      setIsLoading(true)
=======
      setIsLoading(true),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      try {
        await fetchResume()
      } catch (error) {
        logErrorToProduction('Error loading resumes:', { data: error })
      } finally {
        setIsLoading(false)
<<<<<<< HEAD
      }
    }
            return;
      }
<<<<<<< HEAD
}

  )
}
=======

      setIsLoading(true),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======
        setIsLoading(false)

  ;
};
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
