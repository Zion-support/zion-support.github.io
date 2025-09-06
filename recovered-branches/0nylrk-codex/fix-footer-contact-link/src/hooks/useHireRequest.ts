
import { useState } from 'react',;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { TalentProfile } from "@/types/talent",;
;
export interface HireRequestData {;
  talent:{;
    id:string,;
    full_name:string,;
    professional_title:string,;
    email?:string;
  },;
  requester:{;
    name:string,;
    email:string,;
    id?:string;
  },;
  project:{;
    overview:string,;
    timeline:string,;
    budgetMin:number,;
    budgetMax:number;
  },;
}
;
export function useHireRequest() {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
;
  const submitHireRequest = async (requestData:HireRequestData) => {;
    setIsSubmitting(true),;
    setError(null),;
    ;
    try {;
      // Call the edge function to process the hire request;
      const { data:response, error } = await supabase.functions.invoke('process-hire-request', {;
        body:requestData;
      }),;
      ;
      if (error) throw error,;
      ;
      // Show success message;
      toast({;
        title:"Request Submitted",;
        description:`Your request to hire ${requestData.talent.full_name} has been sent successfully.`}),;
      ;
      return { success:true, requestId:response?.request_id },;
    } catch (error) {;
      console.error("Error submitting hire request:", error),;
      ;
      const errorMessage = error instanceof Error ;
        ? error.message ;
        :"There was a problem submitting your request. Please try again.",;
      ;
      setError(errorMessage),;
      ;
      toast({;
        title:"Error",;
        description:errorMessage,;
        variant:"destructive"}),;
      ;
      return { success:false, error:errorMessage },;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
  ;
  return {;
    submitHireRequest,;
    isSubmitting,;
    error;
  },;  talent: {
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

export function useHireRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [error, setError] = useState<string | null>(null),

  const submitHireRequest = async (requestData: HireRequestData) => {
    setIsSubmitting(true),
    setError(null),
    
    try {
      // Call the edge function to process the hire request
      const { data: response, error } = await supabase.functions.invoke('process-hire-request', {
        body: requestData
      }),

export interface HireRequestData {_talent: {
    id: string;
    full_name: string;
    professional_title: string;
    email?: string;};
  requester: {_name: string;
    email: string;
    id?: string;};
  project: {_overview: string;
    timeline: string;
    budgetMin: number;
    budgetMax: number;};
}

export function useHireRequest() {_const [isSubmitting, _setIsSubmitting] = useState(false);
  const [error, _setError] = useState<string | null>(null);

  const _submitHireRequest = async (_requestData: HireRequestData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Call the edge function to process the hire request
      const { data: response, _error} = await supabase.functions.invoke(_'process-hire-request', _{_body: requestData});
      
      if (error) throw error,
      
      // Show success message
      toast({
        title: "Request Submitted",
        description: `Your request to hire ${requestData.talent.full_name} has been sent successfully.`}),      
      return { success: true, requestId: response?.request_id }
    } catch (error) {
      console.error("Error submitting hire request:", error),
      
      const errorMessage = error instanceof Error         ? error.message 
        : "There was a problem submitting your request. Please try again.",
      console.error(&quot;Error submitting hire request:&quot;, error);
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : &quot;There was a problem submitting your request. Please try again.&quot;;
      
      setError(errorMessage),
      
      toast({
        title: &quot;Error&quot;,
        description: errorMessage,
        variant: "destructive"}),      
      return { success: false, error: errorMessage }
    } finally {
      setIsSubmitting(false)
    }
  },
  
  return {
    submitHireRequest,
    isSubmitting,
    error
  }
        title: "Error", _description: errorMessage, _variant: "destructive"});
      
      return {_success: false, _error: errorMessage};
    } finally {_setIsSubmitting(false);}
  };
  
  return {_submitHireRequest, _isSubmitting, _error};
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