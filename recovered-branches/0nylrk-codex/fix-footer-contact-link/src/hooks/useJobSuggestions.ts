
<<<<<<< HEAD
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {JobMatch} from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {;
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
=======
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD
import { JobMatch } from "@/types/jobs";
export function useJobSuggestions(talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
=======
import { JobMatch } from "@/types/jobs",
export function useJobSuggestions(talentId?: string) {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),
  const [isLoading, setIsLoading] = useState(true),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  useEffect(() => {

    const fetchSuggestedJobs = async () => {
<<<<<<< HEAD
      if (!talentId) return;
      try {
        setIsLoading(true);
=======
      if (!talentId) return,
      
      try {
        setIsLoading(true),
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        // Get job matches with job details
        const { data, error } = await supabase
          .from("job_talent_matches")
          .select(`
            *,
            job:job_id (*)
          `)
          .eq("talent_id", talentId)
<<<<<<< HEAD
          .order("created_at", { ascending: false });
        if (error) throw error;
        setJobMatches(data |[])
=======
          .order("created_at", { ascending: false }),
          
        if (error) throw error,
        
        setJobMatches(data || [])
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      } catch (error) {
        console.error("Error fetching job matches:", error),
        toast({
<<<<<<< HEAD
          title: "Error";
          description: "Failed to load job suggestions"
=======
          title: "Error",
          description: "Failed to load job suggestions",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          variant: "destructive"})
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD
    }
    fetchSuggestedJobs()
  }, [talentId]);
=======
    },
    
    fetchSuggestedJobs()
  }, [talentId]),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {
    try {
      const updates = {
        status
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {})
<<<<<<< HEAD
      }
      const { error } = await supabase
        .from("job_talent_matches")
        .update(updates)
        .eq("id", matchId);
      if (error) throw error;
=======
      },
      
      const { error } = await supabase
        .from("job_talent_matches")
        .update(updates)
        .eq("id", matchId),
        
      if (error) throw error,
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Update local state
      setJobMatches(matches =>
        matches.map(match =>
          match.id === matchId
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match
        )
<<<<<<< HEAD
      );
=======
      ),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Show appropriate message
      if (status === 'applied') {
        toast({
          title: "Application Submitted"
          description: "You've successfully applied to this job"
        })
      } else if (status === 'declined') {
        toast({
          title: "Job Declined"
          description: "This job will be removed from your suggestions"
        })
      }
    } catch (error) {
      console.error("Error updating job match status:", error),
      toast({
<<<<<<< HEAD
        title: "Error";
        description: "Failed to update job status"
        variant: "destructive"})
<<<<<<< HEAD
    }
  }
  // Filter matches by status
  const newMatches = jobMatches.filter(match => match.status === 'new');
  const viewedMatches = jobMatches.filter(match => match.status === 'viewed');
  const appliedMatches = jobMatches.filter(match => match.status === 'applied');
  const declinedMatches = jobMatches.filter(match => match.status === 'declined');
  return {
    jobMatches;
    isLoading;
    updateJobMatchStatus;
    categorizedMatches: {
      newMatches;
      viewedMatches;
      appliedMatches

      declinedMatches
=======
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { JobMatch } from "@/types/jobs",;
export function useJobSuggestions(talentId?: string) {;
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    const fetchSuggestedJobs = async () => {;
      if (!talentId) return,;
      try {;
        setIsLoading(true),;
        // Get job matches with job details;
        const { data, error } = await supabase;
          .from("job_talent_matches");
          .select(`;
            *,;
            job:job_id (*);
          `);
          .eq("talent_id", talentId);
          .order("created_at", { ascending: false }),;
        if (error) throw error,;
        setJobMatches(data || []);
      } catch (error) {;
        console.error("Error fetching job matches:", error),;
        toast({;
          title: "Error",;
          description: "Failed to load job suggestions",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
    },;
    fetchSuggestedJobs();
  }, [talentId]),;
  const updateJobMatchStatus = async (matchId: string, status: 'viewed' | 'applied' | 'declined') => {;
    try {;
      const updates = {;
        status,;
        ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {});
      },;
      const { error } = await supabase;
        .from("job_talent_matches");
        .update(updates);
        .eq("id", matchId),;
      if (error) throw error,;
      // Update local state;
      setJobMatches(matches =>;
        matches.map(match =>;
          match.id === matchId;
            ? { ...match, status, ...(status === 'viewed' ? { viewed_at: new Date().toISOString() } : {}) }
            : match;
        );
      ),;
      // Show appropriate message;
      if (status === 'applied') {;
        toast({;
          title: "Application Submitted",;
          description: "You've successfully applied to this job";
        });
      } else if (status === 'declined') {;
        toast({;
          title: "Job Declined",;
          description: "This job will be removed from your suggestions";
        });
      }
    } catch (error) {;
      console.error("Error updating job match status:", error),;
      toast({;
        title: "Error",;
        description: "Failed to update job status",;
        variant: "destructive"});
    }
  },;
  // Filter matches by status;
  const newMatches = jobMatches.filter(match => match.status === 'new'),;
  const viewedMatches = jobMatches.filter(match => match.status === 'viewed'),;
  const appliedMatches = jobMatches.filter(match => match.status === 'applied'),;
  const declinedMatches = jobMatches.filter(match => match.status === 'declined'),;
  return {;
    jobMatches,;
    isLoading,;
    updateJobMatchStatus,;
    categorizedMatches: {;
      newMatches,;
      viewedMatches;
      appliedMatches;
      declinedMatches;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    }
  }
}