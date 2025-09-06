<<<<<<< HEAD

import { useState  } from 'react';
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast";
import { TalentProfile } from "@/types/talent";
=======
import {useState} from 'react';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
import { TalentProfile } from '@/types / talent';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface HireRequestData {
  talent: {
    id: string;
    full_name: string;
<<<<<<< HEAD

    professional_title: string

    email?: string
  }
  requester: {
    name: string;

    email: string

    id?: string
=======
    professional_title: string,
    email?: string;
  }
  requester: {
    name: string;
    email: string,
    id?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  project: {
    overview: string;
    timeline: string;
<<<<<<< HEAD

    budgetMin: number

    budgetMax: number
  }
}
export function useHireRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const submitHireRequest = async (requestData: HireRequestData) => {
    setIsSubmitting(true);
    setError(null)
    try {
      // Call the edge function to process the hire request
      const { data: response, error } = await supabase && supabase.functions.invoke('process-hire-request', {
        body: requestData
      });
      if (error) throw error;
      // Show success message
      toast({
<<<<<<< HEAD
        title: "Request Submitted"
        description: `Your request to hire ${requestData.talent.full_name} has been sent successfully.`});
      return { success: true, requestId: response?.request_id }
    } catch (error) {
      console.error("Error submitting hire request:", error);
      const errorMessage = error instanceof Error
        ? error.message
=======
        title: "Request Submitted",
        description: `Your request to hire ${requestData && requestData.talent.full_name} has been sent successfully.`});
      
      return { success: true, requestId: response?.request_id }
    } catch (error) {
      console && console.error("Error submitting hire request:", error);
      
      const errorMessage = error instanceof Error 
        ? error && error.message 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        : "There was a problem submitting your request. Please try again.";
      setError(errorMessage);
      toast({
        title: "Error";
        description: errorMessage
        variant: "destructive"});
      return { success: false, error: errorMessage }
=======
    budget_min: number,
    budget_max: number;
  }
}
export /**
 * useHireRequest - Function description
 */
function useHireRequest() {
  const [is_submitting, setIsSubmitting] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const submitHireRequest = async (request_data: HireRequestData) => {
    setIsSubmitting (true);
    set_error (null),
    try {
      // Call the edge function to process the hire request;
      const { data: response, error } = await supabase.functions.invoke ('process - hire - request', {
        body: request_data;
      });
;
      // Check condition
if (throw error) {
  $2
}
      // Show success message;
      toast ({
        title: "Request Submitted",
        description: `Your request to hire ${request_data.talent.full_name} has been sent successfully.`});
;
      return { success: true, request_id: response?.request_id }
    } catch (error) {
      console.error ("Error submitting hire request:", error);
;
      const error_message = error instanceof Error;
        ? error.message;
        : "There was a problem submitting your request. Please try again.";
;
      set_error (error_message);
;
      toast ({
        title: "Error";
        description: error_message,
        variant: "destructive"});
;
      return { success: false, error: error_message }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsSubmitting (false);
    }
  }
<<<<<<< HEAD
  return {
    submitHireRequest;
    isSubmitting;

    error
=======
;
  return {
    submitHireRequest;
    is_submitting;
    error;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}