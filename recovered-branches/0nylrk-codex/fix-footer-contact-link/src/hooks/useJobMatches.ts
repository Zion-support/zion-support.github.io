



import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
  const fetch_matches = async () => {
    setIsLoading (true);
    try {




            key_projects,







        title: "Error",
        description: "Failed to load matched talents. Please try again later.",









        body: { jobId }});
      if (response.error) throw new Error(response.error.message);
      toast({
        title: "AI Matching Complete"
        description: `Found ${response.data.matches |0} potential talent matches for this job.`});
        body: { jobId }}),
      
      if (response.error) throw new Error(response.error.message),
      
      toast({
        title: "AI Matching Complete",
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`}),
      
      // Refresh the matches list
      await fetchMatches()
    } catch (error) {
      console.error("Error triggering AI matching:", error),
      toast({
        title: "Matching Failed";
        description: "Could not process talent matching. Please try again later."
        variant: "destructive"})
    } finally {
      setIsProcessing(false)
    }
  }
  useEffect(() => {
    fetchMatches()
  }, [jobId]);
  return {
    matches;
    isLoading;
    isProcessing;


      toast ({
        title: "Matching Failed";
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive"});
    } finally {



