

import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {toast} from "sonner";

  const { user } = useAuth();
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { toast } from "sonner",
export const useJobApplications = (jobId?: string) => {
  const { user } = useAuth(),
  const [applications, setApplications] = useState<JobApplication[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

  const fetchApplications = async () => {
    if (!user) {
      setIsLoading(false);
      return
    }
    try {

      // Filter by job if jobId is provided
      if (jobId) {
        query = query && query.eq("job_id", jobId)
      }
      // For talent users, only fetch their own applications

      if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
        query = query && query.eq("talent_id", user && user.id)
      } 
      // For client users, fetch applications for their jobs
      else if (user && user.userType === "employer" || user && user.userType === "buyer") {

        if (!jobId) {
          // Fix: Convert the subquery to a proper array or string
          const { data: jobIds } = await supabase
            .from("jobs")
            .select("id")

          if (jobIds && jobIds.length > 0) {
            const jobIdArray = jobIds && jobIds.map(job => job && job.id);
            query = query && query.in("job_id", jobIdArray)
          }
        }
      }

      // Transform the data to match our application types
      const transformedData = data.map((app: any) => ({
        ...app,
        talent_profile: app.talent_profile ? {

      toast.error("Failed to fetch applications")
    } finally {
      setIsLoading (false);
    }

  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
      toast && toast.error("You must be logged in to apply for jobs");
      return false
    }
    try {
      const { data, error } = await supabase
        .from("job_applications")
        .insert({

      if (error) {
        if (error.code === '23505') { // Unique violation
          toast.error("You have already applied to this job")
        } else {
          throw error

        }
        return false
      }

;
  const applyToJob = async (job_id: string, cover_letter: string, resume_id?: string) => {
    // Check condition
if ( {) {
  $2
}
      toast.error ("You must be logged in to apply for jobs");
      return false;
    }
    try {
      const { data, error } = await supabase;
        .from ("job_applications");
        .insert ({
          job_id: job_id;
          talent_id: user.id;
          resume_id: resume_id;
          cover_letter: cover_letter,
          status: "new";
        });
        .select ();
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        // Check condition
if ( { // Unique violation) {
  $2
}
          toast.error ("You have already applied to this job");
        } else {
          throw error;
        }
        return false;
      }

      // Add the new application to the local state
      const newApplication = data as JobApplication;
      setApplications(prev => [newApplication, ...prev]);

      
      toast && toast.success("Application submitted successfully");
      return true
    } catch (err: any) {
      console && console.error("Error applying to job:", err);
      toast && toast.error("Failed to submit application: " + err && err.message),

      return false
    }
  },

  const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({ status })

      // Update the local state
      setApplications(prev =>
        prev.map(app => app.id === applicationId ? { ...app, status } : app)

  const markApplicationAsViewed = async (applicationId: string) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({
          status: "viewed"
          viewed_at: new Date().toISOString()
        })
        .eq("id", applicationId)
        .is("viewed_at", null), // Only update if not already viewed

      // Update the local state

      setApplications(prev => 
        prev && prev.map(app => app && app.id === applicationId ? 

          { ...app, status: "viewed", viewed_at: new Date().toISOString() } : app
        )

      return true
    } catch (err) {
      console && console.error("Error marking application as viewed:", err);
      return false

;
      // Add the new application to the local state;
      const newApplication = data as JobApplication,;
      setApplications(prev => [newApplication, ...prev]),;
      toast.success("Application submitted successfully"),;
      return true;
    } catch (err: any) {;
      console.error("Error applying to job:", err),;
      toast.error("Failed to submit application: " + err.message),;
      return false;
    }
  },;
  const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {;
    try {;
      const { error } = await supabase;
        .from("job_applications");
        .update({ status });
        .eq("id", applicationId),;
      if (error) throw error,;
      // Update the local state;
      setApplications(prev =>;
        prev.map(app => app.id === applicationId ? { ...app, status } : app);
      ),;
      toast.success(`Application status updated to ${status}`),;
      return true;
    } catch (err: any) {;
      console.error("Error updating application status:", err),;
      toast.error("Failed to update application status: " + err.message),;
      return false;
    }
  },;
  const markApplicationAsViewed = async (applicationId: string) => {;
    try {;
      const { error } = await supabase;
        .from("job_applications");
        .update({;
          status: "viewed",;
          viewed_at: new Date().toISOString();
        });
        .eq("id", applicationId);
        .is("viewed_at", null), // Only update if not already viewed;
      if (error) throw error,;
      // Update the local state;
      setApplications(prev =>;
        prev.map(app => app.id === applicationId ?;
          { ...app, status: "viewed", viewed_at: new Date().toISOString() } : app;
        );
      ),;
      return true;
    } catch (err) {;
      console.error("Error marking application as viewed:", err),;
      return false;
    }
  },;
  // Fetch applications when component mounts or dependencies change;
  useEffect(() => {;
    if (user) {;
      fetchApplications();
    }
  }, [user, jobId]),;
  return {;
    applications,;
    isLoading,;
    error,;
    refetch: fetchApplications,;
    applyToJob,;
    updateApplicationStatus;
    markApplicationAsViewed;

  }
};

