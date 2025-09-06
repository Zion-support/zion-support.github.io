
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts
import {useState} from 'react';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
import { TalentProfile } from '@/types / talent';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState  } from 'react';
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast";
import { TalentProfile } from "@/types/talent";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface HireRequestData {
  talent: {
    id: string;
    full_name: string;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts
    professional_title: string,
    email?: string;
  }
  requester: {
    name: string;
    email: string,
    id?: string;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts
=======

    professional_title: string

    email?: string
  }
  requester: {
    name: string;

    email: string

    id?: string
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  project: {
    overview: string;
    timeline: string;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts


=======

    budgetMin: number

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from 'react';
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {TalentProfile} from "@/types/talent";
export interface HireRequestData {
  talent: {;
    id: string;
    full_name: string;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react',
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { TalentProfile } from "@/types/talent",
export interface HireRequestData {
  talent: {
    id: string,
    full_name: string,
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    budgetMax: number
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

=======


export function useHireRequest() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    budgetMax: number
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function useHireRequest() {

export function useHireRequest() {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const submitHireRequest = async (requestData: HireRequestData) => {
    setIsSubmitting(true);
    setError(null)
    try {
      // Call the edge function to process the hire request
<<<<<<< HEAD
      const { data: response, error } = await supabase && supabase.functions.invoke('process-hire-request', {
        body: requestData

<<<<<<< HEAD
=======
=======

      }),
      

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      if (error) throw error;
      // Show success message
      toast({

<<<<<<< HEAD
      setError(errorMessage);
      toast({

=======
      const { data: response, error } = await supabase.functions.invoke('process-hire-request', {
        body: requestData
      });
      }),
      
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
        title: "Request Submitted",
        description: `Your request to hire ${requestData.talent.full_name} has been sent successfully.`}),
      
      return { success: true, requestId: response?.request_id }
    } catch (error) {
      console.error("Error submitting hire request:", error),
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : "There was a problem submitting your request. Please try again.",
      
      setError(errorMessage);
      toast({
        title: "Error";
        description: errorMessage
        variant: "destructive"});
        title: "Error",
        description: errorMessage,
        variant: "destructive"}),
      
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      return { success: false, error: errorMessage }
    } finally {
      setIsSubmitting(false)
    }
  }
  return {
    submitHireRequest;
    isSubmitting;

    error
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
}
        title: "Error",
        description: errorMessage,
        variant: "destructive"}),
      
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

  }
}
;

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts
        title: "Request Submitted",
        description: `Your request to hire ${requestData && requestData.talent.full_name} has been sent successfully.`});
      return { success: true, requestId: response?.request_id }
    } catch (error) {
      console && console.error("Error submitting hire request:", error);
      const errorMessage = error instanceof Error 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts

========
        ? error && error.message 
        : "There was a problem submitting your request. Please try again.";
      setError(errorMessage);
=======

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
      
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      toast({
        title: &quot;Error&quot;,
        description: errorMessage,
        variant: "destructive"}),      
      return { success: false, error: errorMessage }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts

    } finally {
      setIsSubmitting (false);
    }
  }

========
    } finally {
      setIsSubmitting (false);
    }
<<<<<<< HEAD
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts
;
  return {
    submitHireRequest;
    is_submitting;
    error;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts

=======
        ? error.message 
        : "There was a problem submitting your request. Please try again.",
      

      setError(errorMessage);
      toast({

        title: "Error",
        description: errorMessage,
        variant: "destructive"}),
      

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  },
  
  return {
    submitHireRequest,
    isSubmitting,
    error
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useHireRequest.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
