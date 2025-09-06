
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast";
import { TalentProfile } from "@/types/talent";
export interface HireRequestData {
  talent: {
<<<<<<< HEAD
    id: string;
    full_name: string;

    professional_title: string

    email?: string
  }
  requester: {
    name: string;

    email: string

    id?: string
  }
  project: {
    overview: string;
    timeline: string;

    budgetMin: number

=======
import {useState} from 'react';
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {TalentProfile} from "@/types/talent";
export interface HireRequestData {
  talent: {;
    id: string;
    full_name: string;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState } from 'react',
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { TalentProfile } from "@/types/talent",
export interface HireRequestData {
  talent: {
    id: string,
    full_name: string,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    budgetMax: number
  }
}
<<<<<<< HEAD
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
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
export function useHireRequest() {
=======

export function useHireRequest() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const submitHireRequest = async (requestData: HireRequestData) => {
    setIsSubmitting(true);
    setError(null)
    try {
      // Call the edge function to process the hire request
      const { data: response, error } = await supabase.functions.invoke('process-hire-request', {
        body: requestData
<<<<<<< HEAD
      });
=======
      }),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
        : "There was a problem submitting your request. Please try again.";
=======
        title: "Request Submitted",
        description: `Your request to hire ${requestData.talent.full_name} has been sent successfully.`}),
      
      return { success: true, requestId: response?.request_id }
    } catch (error) {
      console.error("Error submitting hire request:", error),
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : "There was a problem submitting your request. Please try again.",
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      setError(errorMessage);
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Error";
        description: errorMessage
        variant: "destructive"});
=======
        title: "Error",
        description: errorMessage,
        variant: "destructive"}),
      
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      return { success: false, error: errorMessage }
    } finally {
      setIsSubmitting(false)
    }
  }
  return {
<<<<<<< HEAD
    submitHireRequest;
    isSubmitting;

    error
<<<<<<< HEAD
  }
}
=======
<<<<<<< HEAD
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
=======
        title: "Error",
        description: errorMessage,
        variant: "destructive"}),
      
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from 'react',;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { TalentProfile } from "@/types/talent",;
export interface HireRequestData {;
  talent: {;
    id: string,;
    full_name: string,;
    professional_title: string,;
    email?: string;
  },;
  requester: {;
    name: string,;
    email: string,;
    id?: string;
  },;
  project: {;
    overview: string,;
    timeline: string,;
    budgetMin: number,;
    budgetMax: number;
  }
}
;
export function useHireRequest() {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const submitHireRequest = async (requestData: HireRequestData) => {;
    setIsSubmitting(true),;
    setError(null),;
    try {;
      // Call the edge function to process the hire request;
      const { data: response, error } = await supabase.functions.invoke('process-hire-request', {;
        body: requestData;
      }),;
      if (error) throw error,;
      // Show success message;
      toast({;
        title: "Request Submitted",;
        description: `Your request to hire ${requestData.talent.full_name} has been sent successfully.`}),;
      return { success: true, requestId: response?.request_id }
    } catch (error) {;
      console.error("Error submitting hire request:", error),;
      const errorMessage = error instanceof Error;
        ? error.message;
        : "There was a problem submitting your request. Please try again.",;
      setError(errorMessage),;
      toast({;
        title: "Error",;
        description: errorMessage,;
        variant: "destructive"}),;
      return { success: false, error: errorMessage }
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return {;
    submitHireRequest;
    isSubmitting;
    error;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
