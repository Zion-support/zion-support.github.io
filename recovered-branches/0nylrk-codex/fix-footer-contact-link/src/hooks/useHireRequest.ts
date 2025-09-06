
import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { TalentProfile } from "@/types/talent";
export interface HireRequestData {
  talent: {
    id: string,
    full_name: string,
    professional_title: string,
    email?: string
  },
  requester: {
    name: string,
    email: string,
    id?: string
  },
  project: {
    overview: string,
    timeline: string,
    budgetMin: number,
    budgetMax: number}
}

export function useHireRequest() {
  const [isSubmitting, setIsSubmitting] = useState($2);
  const [error, setError] = useState<string | null>(null),

  const submitHireRequest = async (requestData: HireRequestData) => {
    setIsSubmitting($2);
    setError($2);
    try {
      // Call the edge function to process the hire request
      const { data: response, error } = await supabase.functions.invoke($2);
      if (error) throw error,
      
      // Show success message
      toast($2);
      return { success: true, requestId: response ?.request_id }
    } catch (error) {
      console.error($2);
      const errorMessage = $2;
      setError($2);
      toast($2);
      return { success: false, error: errorMessage}
    } finally {
      setIsSubmitting(false)
    }
  },
  
  return {
    submitHireRequest,
    isSubmitting,
    error
  }
}
