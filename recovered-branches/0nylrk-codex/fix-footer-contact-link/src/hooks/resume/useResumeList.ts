
import { useState, useEffect  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume  } from '@/types/resume';
import { useAuth } from '@/hooks/useAuth';
export function useResumeList() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),
  const [resumes, setResumes] = useState<Resume[]>([]),
  
  const fetchResumes = null;
    fetchResumes
  }
}
;