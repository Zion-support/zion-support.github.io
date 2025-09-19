import { useState, useEffect, useCallback } from 'react', // Added useCallback,
import { supabase } from '@/integrations/supabase/client';
export default function Page() {,
);
      setMatches([]), // Clear matches on error,
    } finally {,
      setIsLoading(false);
    }
  }, [jobId]), // jobId is a dependency of fetchMatches,
  const triggerAIMatching = async () => {,
    setIsProcessing(true);
    try {,
      const response = await supabase.functions.invoke('job-talent-matcher', {,
        body: { jobId ,}
      });
      if(response.error) throw new Error(response.error.message);
      toast({,
        title: "AI Matching Complete";
        description: `Found ${response.data.matches || 0,} potential talent matches for this job.`,
      });
      await fetchMatches();
    } catch(error) {,
      console.error("Error triggering AI matching:", error);
      toast({,
        title: "Matching Failed";
        description: "Could not process talent matching.Please try again later.";
        variant: "destructive",});
    } finally {,
      setIsProcessing(false);
    }
  };
  useEffect(() => {,
  // TODO: Add dependencies if needed,}, []);
    if(jobId) { // Ensure jobId is present before fetching,
      fetchMatches();
    }
  }, [jobId, fetchMatches]), // Added fetchMatches,
  return {,
    matches;
    isLoading;
    isProcessing;
    triggerAIMatching;
    refetch: fetchMatche s // Added refetch,};
}
,