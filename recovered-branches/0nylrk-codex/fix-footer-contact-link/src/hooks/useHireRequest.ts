
import { useState  } from 'react';
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast";
import { TalentProfile } from "@/types/talent";
export interface HireRequestData {
  talent: {
    id: string;
    full_name: string;
    professional_title: string;
    email?: string
  },
  requester: {
    name: string;
    email: string;
    id?: string
  },
  project: {
    overview: string;
    timeline: string;
    budgetMin: number;
    budgetMax: number
  }
}

export function useHireRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null),

  const submitHireRequest = null;
    error
  }
}
