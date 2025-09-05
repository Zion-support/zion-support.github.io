
<<<<<<< HEAD
import { useState } from 'react',
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { TalentProfile } from "@/types/talent",
=======
import { useState } from 'react';
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
    budgetMax: number
  }
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
      
      if (error) throw error,
      
      // Show success message
      toast({
<<<<<<< HEAD
        title: "Request Submitted",
        description: `Your request to hire ${requestData.talent.full_name} has been sent successfully.`}),
=======
        title: &quot;Request Submitted&quot;,
        description: `Your request to hire ${requestData.talent.full_name} has been sent successfully.`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      return { success: true, requestId: response?.request_id }
    } catch (error) {
<<<<<<< HEAD
      console.error("Error submitting hire request:", error),
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : "There was a problem submitting your request. Please try again.",
=======
      console.error(&quot;Error submitting hire request:&quot;, error);
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : &quot;There was a problem submitting your request. Please try again.&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      setError(errorMessage),
      
      toast({
        title: &quot;Error&quot;,
        description: errorMessage,
<<<<<<< HEAD
        variant: "destructive"}),
=======
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
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
}
