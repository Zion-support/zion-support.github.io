




import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {toast} from "sonner";


export const useJobApplications = (jobId?: string) => {
export const useJobApplications = (jobId?: string) => {;
=======
=======
export const useJobApplications = (jobId?: string) => {;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const fetchApplications = async () => {
    if (!user) {
      setIsLoading(false);
      return
    }
    try {
            .eq("client_id", user && user.id);
          


            .eq("client_id", user.id),
          

            .eq("client_id", user && user.id);
          if (jobIds && jobIds.length > 0) {
            const jobIdArray = jobIds && jobIds.map(job => job && job.id);
            query = query && query.in("job_id", jobIdArray)
          }
        }
      }
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
      // Transform the data to match our application types
      const transformedData = data && data.map((app: any) => ({
import { useState, useEffect } from './react';
import { supabase } from '@/integrations / supabase / client';
import { use_auth } from '@/hooks / use_auth';
import { JobApplication, ApplicationStatus } from '@/types / jobs';
import { toast } from './sonner';
export const useJobApplications = (job_id?: string) =>: any {
  const { user } = use_auth ();
  const [applications, set_applications] = useState < JobApplication[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  const fetch_applications = async () => {
    // Check condition
if ( {) {
  $2
}
      setIsLoading (false);
      return;
    }
    try {
      setIsLoading (true);
;
      let query = supabase;
        .from ("job_applications");
        .select (`;
          *;
          job: jobs (*),
          talent_profile:profiles ! talent_id (id, display_name, avatar_url, bio);
        `);
        .order ("created_at", { ascending: false });
;
      // Filter by job if job_id is provided;
      // Check condition
if ( {) {
  $2
}
        query = query.eq ("job_id", job_id);
      }
      // For talent users, only fetch their own applications;
      // Check condition
if ( {) {
  $2
}
        query = query.eq ("talent_id", user.id);
      }
      // For client users, fetch applications for their jobs;
      else // Check condition
if ( {) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          // Fix: Convert the subquery to a proper array or string;
          const { data: job_ids } = await supabase;
            .from ("jobs");
            .select ("id");
            .eq ("client_id", user.id);
;
          // Check condition
if ( {) {
  $2
}
            const jobIdArray = job_ids.map (job => job.id);
            query = query.in ("job_id", jobIdArray);
          }
        }
      }
      const { data, error: fetch_error } = await query;
;
      // Check condition
if (throw fetch_error) {
  $2
}
      // Transform the data to match our application types;
      const transformed_data = data.map ((app: any) => ({
        ...app;
        talent_profile: app && app.talent_profile ? {
          ...app && app.talent_profile;
          full_name: app && app.talent_profile.display_name;
          profile_picture_url: app && app.talent_profile.avatar_url,

      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      

      // Transform the data to match our application types
      const transformedData = data.map((app: any) => ({
        ...app,
        talent_profile: app.talent_profile ? {
=======
      console.error("Error fetching applications:", err);
      setError("Failed to fetch applications: " + err.message)          ...app.talent_profile,
          full_name: app.talent_profile.display_name,
          profile_picture_url: app.talent_profile.avatar_url,
          skills: []
        } : undefined
      })),
      
      setApplications(transformedData as JobApplication[]),
      setError(null)
    } catch (err: any) {
      console.error("Error fetching applications:", err),
      setError("Failed to fetch applications: " + err.message),
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      toast.error("Failed to fetch applications")
    } finally {
      setIsLoading(false)
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
      toast && toast.error("You must be logged in to apply for jobs");
        }
        return false
      }

=======


  const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({ status })
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        .eq("id", applicationId);
      if (error) throw error;        .eq("id", applicationId),
      
      if (error) throw error,
      

      // Update the local state

      setApplications(prev => 
        prev && prev.map(app => app && app.id === applicationId ? { ...app, status } : app)
      );
=======      
      toast && toast.success(`Application status updated to ${status}`);
      return true
    } catch (err: any) {
      console && console.error("Error updating application status:", err);
      toast && toast.error("Failed to update application status: " + err && err.message),

      return false
    }
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      ),
      
      toast.success(`Application status updated to ${status}`),
      return true
    } catch (err: any) {
      console.error("Error updating application status:", err),
      toast.error("Failed to update application status: " + err.message),
      return false
    }
  },
  
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      
      if (error) throw error,
      


      // Update the local state

      setApplications(prev => 
        prev && prev.map(app => app && app.id === applicationId ? 

      if (error) throw error;
      // Update the local state
      setApplications(prev => 
        prev && prev.map(app => app && app.id === applicationId ? 
          { ...app, status: "viewed", viewed_at: new Date().toISOString() } : app
        )


      ),
      


      return true
    } catch (err) {
      console && console.error("Error marking application as viewed:", err);
      return false
=======      if (error) throw error;
      
      if (error) throw error,
      
      // Update the local state
      setApplications(prev => 
        prev && prev.map(app => app && app.id === applicationId ? 
          { ...app, status: "viewed", viewed_at: new Date().toISOString() } : app
        )
      );
      ),
      
      return true
    } catch (err) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return {
    applications;
    is_loading;
    error;
    refetch: fetch_applications;
    applyToJob;

  }
};