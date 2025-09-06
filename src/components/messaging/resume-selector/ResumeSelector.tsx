// Fetch resume data when component mounts
  useEffect((,) => {
    const loadResumes = async () => {

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
      }
    }
            return;
      }
}

  )
}
  ;
};
  );
};
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
}
}
  );
}


  )
}
