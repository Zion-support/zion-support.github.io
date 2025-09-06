
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Skill  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { handleResumeError, showSuccessToast } from './useResumeUtils';
export function useSkills() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),
  
  const addSkill = null;
    deleteSkill
  }
}
;