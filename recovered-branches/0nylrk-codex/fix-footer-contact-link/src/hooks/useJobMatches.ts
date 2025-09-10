<<<<<<< HEAD:src/hooks/useJobMatches.ts
import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
export default function Page() {;
);
      setMatches([]); // Clear matches on error;
} finally {;
      setIsLoading(false);
}
  }, [jobId]); // jobId is a dependency of fetchMatches;

  const triggerAIMatching = async () => {;
    setIsProcessing(true);
    try {;
      const response = await supabase.functions.invoke('job-talent-matcher', {;
        body: { jobId },,
});
      if(response.error) throw new Error(response.error.message);
      toast({;
        title: "AI Matching Complete",
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`,,
});
      await fetchMatches();
} catch(error) {;
      console.error("Error triggering AI matching:", error);
      toast({;
        title: "Matching Failed",
        description: "Could not process talent matching.Please try again later.",
        variant: "destructive",,
});
} finally {;
      setIsProcessing(false);
}
  };
  useEffect(() => {
  // TODO: Add dependencies if needed;
}, []);
    if(jobId) { // Ensure jobId is present before fetching;
      fetchMatches();
}
  }, [jobId, fetchMatches]); // Added fetchMatches;

  return {;
    matches,
    isLoading,
    isProcessing,
    triggerAIMatching,
    refetch: fetchMatches // Added refetch;
};
=======

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { JobMatch } from "@/types/jobs";
import { JobMatch } from "@/types/jobs",
export function useJobMatches(jobId: string) {
  const [matches, setMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [isProcessing, setIsProcessing] = useState(false),          talent_profile:talent_id(
            id,
            user_id,
            full_name,
            professional_title,
            profile_picture_url,
            hourly_rate,
            bio,
            years_experience,
            key_projects,            skills
          )
        `)
        .eq("job_id", jobId)  const triggerAIMatching = async () => {
    setIsProcessing(true),
    try {
      const response = await supabase.functions.invoke('job-talent-matcher', {
        body: { jobId },
      });
      
      if (response.error) throw new Error(response.error.message);
      
      toast({
        title: "AI Matching Complete",
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`,
      });
      
      // Refresh the matches list
      await fetchMatches();
    } catch (error) {
      console.error("Error triggering AI matching:", error);
      toast({
        title: "Matching Failed",
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, [jobId]);

  return {
    matches,
    isLoading,
    isProcessing,
    triggerAIMatching
  };
>>>>>>> origin/automation/changelog:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobMatches.ts
}
;
      if (throw new Error (response.error.message)) {}
  $2;
}
      toast ({"
        title: "AI Matching Complete",`
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`});
;
      // Refresh the matches list;
      await fetch_matches ();
    } catch (error) {"
      console.error ("Error triggering AI matching:", error);

