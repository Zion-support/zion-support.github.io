

import { useState  } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { supabase  } from '@/integrations/supabase/client';
import { Interview, InterviewRequest, InterviewResponse  } from '@/types/interview';
import { toast  } from '@/components/ui/use-toast';
export function useInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),
  const { user } = useAuth();
  // Request an interview as a client
  const requestInterview = null;

    cancelInterview}
}
;