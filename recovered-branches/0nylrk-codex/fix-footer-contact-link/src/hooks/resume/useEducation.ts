

import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Education  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useEducation() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),
  
  const addEducation = null;

    deleteEducation
  }
}
;