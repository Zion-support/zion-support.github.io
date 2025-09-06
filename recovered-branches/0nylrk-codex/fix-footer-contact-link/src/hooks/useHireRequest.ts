
import { useState  } from 'react';
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast";
import { TalentProfile } from "@/types/talent";
export interface HireRequestData {
  talent: {
<<<<<<< HEAD
    id: string;
    full_name: string;
<<<<<<< HEAD
    professional_title: string;
=======
    professional_title: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    email?: string
  }
  requester: {
    name: string;
<<<<<<< HEAD
    email: string;
=======
    email: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    id?: string
  }
  project: {
    overview: string;
    timeline: string;
<<<<<<< HEAD
    budgetMin: number;
=======
    budgetMin: number
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    budgetMax: number
  }
}
=======
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

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function useHireRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
  const [error, setError] = useState<string | null>(null),

  const submitHireRequest = null;
=======
  const [error, setError] = useState<string | null>(null);
  const submitHireRequest = async (requestData: HireRequestData) => {
    setIsSubmitting(true);
    setError(null)
    try {
      // Call the edge function to process the hire request
      const { data: response, error } = await supabase.functions.invoke('process-hire-request', {
        body: requestData
      });
      if (error) throw error;
      // Show success message
      toast({
        title: "Request Submitted"
        description: `Your request to hire ${requestData.talent.full_name} has been sent successfully.`});
      return { success: true, requestId: response?.request_id }
    } catch (error) {
      console.error("Error submitting hire request:", error);
      const errorMessage = error instanceof Error
        ? error.message
        : "There was a problem submitting your request. Please try again.";
      setError(errorMessage);
      toast({
        title: "Error";
        description: errorMessage
        variant: "destructive"});
      return { success: false, error: errorMessage }
    } finally {
      setIsSubmitting(false)
    }
  }
  return {
<<<<<<< HEAD
    submitHireRequest;
    isSubmitting;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    error
  }
}
=======
    submitHireRequest,
    isSubmitting,
    error,
  };

}finally {
  setIsSubmitting (false) 

};

  submitHireRequest;
isSubmitting;
error 
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
