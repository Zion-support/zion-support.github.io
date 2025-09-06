<<<<<<< HEAD
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { TalentProfile } from '@/types/talent';

export interface HireRequestData {
=======
 export interface HireRequestData {
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  talent: {
  id: string;
full name: string;
professional title: string;
email?: string 
};
requester: {
  name: string;
email: string;
id?: string 
};
project: {
  overview: string;
timeline: string;
budgetMin: number;
budgetMax: number 
}
<<<<<<< HEAD

export function useHireRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitHireRequest = async (requestData: HireRequestData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Call the edge function to process the hire request
      const { data: response, error } = await supabase.functions.invoke(
        'process-hire-request',
        {
          body: requestData,
        }
      );

      if (error) throw error;

      // Show success message
      toast({
        title: 'Request Submitted',
        description: `Your request to hire ${requestData.talent.full_name} has been sent successfully.`,
      });

      return { success: true, requestId: response?.request_id };
    } catch (error) {
      console.error('Error submitting hire request:', error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : 'There was a problem submitting your request. Please try again.';

      setError(errorMessage);

      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });

      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitHireRequest,
    isSubmitting,
    error,
  };
=======
}export function useHireRequest () {
  const [isSubmitting, setIsSubmitting] = useState (false);
const [error, setError] = useState<string | null> (null);
const submitHireRequest = async (requestData: HireRequestData) => {
  setIsSubmitting (true);
setError (null);
try {
  //Call the edge function to process the hire request const {
  data: response, error 
}= await supabase.functions.invoke ('process-hire-request', {
  body: requestData 
});
// Show success message return {
  success: true, requestId: response?.request id 
}
}catch (error) {
  ? error.message : "There was a problem submitting your request. Please try again.";
toast ({
  return {
  success: false, error: errorMessage 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
}
}finally {
  setIsSubmitting (false) 
}
};
return {
  submitHireRequest;
isSubmitting;
error 
}
}