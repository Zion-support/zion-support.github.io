
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState, useEffect  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume  } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';


import {useState, useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
export function useResumeList() {;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [resumes, setResumes] = useState<Resume[]>([]);
  const fetchResumes = async () => {}
    if (!user) {'
      setError('You must be logged in to access resumes');
      return []
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD

    try {
      // Fetch resume list with basic info for the current user
      const { data: resumeData, error: resumeError } = await supabase
        .from('talent_resumes')
        .select('*')
=======

    try {}
      // Fetch resume list with basic info for the current user;
      const { data: resumeData, error: resumeError } = await supabase'
        .from('talent_resumes')'
        .select('*')

          id: resume && resume.id;
          title: resume && resume.title;
          headline: resume && resume.headline,
          summary: resume && resume.summary;
        };

      setResumes(transformedResumes);
      return transformedResumes;
    } catch (e: any) {}
    } finally {}
      setIsLoading (false);
    }
  }
  return {}
>>>>>>> origin/cursor/delete-old-data-records-6bba

    is_loading;
    error;
    resumes;


<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}