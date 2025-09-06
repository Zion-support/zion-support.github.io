




import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {toast} from "sonner";

<<<<<<< HEAD
export const useJobApplications = (jobId?: string) => {;


export const useJobApplications = (jobId?: string) => {
export const useJobApplications = (jobId?: string) => {;
=======

export const useJobApplications = (jobId?: string) => {;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { user } = useAuth();
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const fetchApplications = async () => {
    if (!user) {
      setIsLoading(false);
      return
    }
    try {


<<<<<<< HEAD

  const fetchApplications = async () => {
    if (!user) {
      setIsLoading(false),
      return
    }
    try {
      setIsLoading(true);
      let query = supabase
        .from("job_applications")
        .select(`
          *;
          job: jobs(*)
          talent_profile:profiles!talent_id(id, display_name, avatar_url, bio)
        `)
        .order("created_at", { ascending: false });
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setIsLoading(true),
      
      let query = supabase
        .from("job_applications")
        .select(`
          *,
          job:jobs(*),
          talent_profile:profiles!talent_id(id, display_name, avatar_url, bio)
        `)
        .order("created_at", { ascending: false }),
      
<<<<<<< HEAD
if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
=======


      // Filter by job if jobId is provided
      if (jobId) {
        query = query && query.eq("job_id", jobId)
      }
      // For talent users, only fetch their own applications

      if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        query = query && query.eq("talent_id", user && user.id)
      } 
      // For client users, fetch applications for their jobs
      else if (user && user.userType === "employer" || user && user.userType === "buyer") {
<<<<<<< HEAD
      // Filter by job if jobId is provided
      if (jobId) {
        query = query.eq("job_id", jobId)
      }
      // For talent users, only fetch their own applications
      if (user.userType === "jobSeeker" |user.userType === "creator") {
        query = query.eq("talent_id", user.id)
      }
      // For client users, fetch applications for their jobs
      else if (user.userType === "employer" |user.userType === "buyer") {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        if (!jobId) {
          // Fix: Convert the subquery to a proper array or string
          const { data: jobIds } = await supabase
            .from("jobs")
            .select("id")
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
            .eq("client_id", user.id);
            .eq("client_id", user.id),
          
          if (jobIds && jobIds.length > 0) {
            const jobIdArray = jobIds.map(job => job.id),
            query = query.in("job_id", jobIdArray)
          }
        }
      }
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
      // Transform the data to match our application types
      const transformedData = data.map((app: any) => ({
        ...app,
        talent_profile: app.talent_profile ? {
          ...app.talent_profile;
          full_name: app.talent_profile.display_name;
          profile_picture_url: app.talent_profile.avatar_url
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          skills: []
        } : undefined
      }));
      setApplications(transformedData as JobApplication[]);
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      console && console.error("Error fetching applications:", err);
      setError("Failed to fetch applications: " + err && err.message),
      toast && toast.error("Failed to fetch applications")
          profile_picture_url: app.talent_profile.avatar_url,
          skills: [];
        } : undefined;
      }));
;
      set_applications (transformed_data as JobApplication[]);
      set_error (null);
    } catch (err: any) {
      console.error ("Error fetching applications:", err);
      set_error ("Failed to fetch applications: " + err.message),
      toast.error ("Failed to fetch applications");
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
      console.error("Error fetching applications:", err);
      setError("Failed to fetch applications: " + err.message)
=======


      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      

      // Transform the data to match our application types
      const transformedData = data.map((app: any) => ({
        ...app,
        talent_profile: app.talent_profile ? {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ...app.talent_profile,
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast.error("Failed to fetch applications")
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
      toast && toast.error("You must be logged in to apply for jobs");
<<<<<<< HEAD
  }
  },
  
  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
      toast.error("You must be logged in to apply for jobs"),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return false
    }
    try {
      const { data, error } = await supabase
        .from("job_applications")
        .insert({

<<<<<<< HEAD
          job_id: jobId;
          talent_id: user.id;
          resume_id: resumeId;
          cover_letter: coverLetter
          status: "new"
        })
        .select()
        .single();
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          job_id: jobId,
          talent_id: user.id,
          resume_id: resumeId,
          cover_letter: coverLetter,
          status: "new"
        })
        .select()
        .single(),
      
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (error) {
        if (error.code === '23505') { // Unique violation
          toast.error("You have already applied to this job")
        } else {
          throw error
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { toast } from "sonner",;
export const useJobApplications = (jobId?: string) => {;
  const { user } = useAuth(),;
  const [applications, setApplications] = useState<JobApplication[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const fetchApplications = async () => {;
    if (!user) {;
      setIsLoading(false),;
      return;
    }
;
    try {;
      setIsLoading(true),;
      let query = supabase;
        .from("job_applications");
        .select(`;
          *,;
          job:jobs(*),;
          talent_profile:profiles!talent_id(id, display_name, avatar_url, bio);
        `);
        .order("created_at", { ascending: false }),;
      // Filter by job if jobId is provided;
      if (jobId) {;
        query = query.eq("job_id", jobId);
      }
;
      // For talent users, only fetch their own applications;
      if (user.userType === "jobSeeker" || user.userType === "creator") {;
        query = query.eq("talent_id", user.id);
      } ;
      // For client users, fetch applications for their jobs;
      else if (user.userType === "employer" || user.userType === "buyer") {;
        if (!jobId) {;
          // Fix: Convert the subquery to a proper array or string;
          const { data: jobIds } = await supabase;
            .from("jobs");
            .select("id");
            .eq("client_id", user.id),;
          if (jobIds && jobIds.length > 0) {;
            const jobIdArray = jobIds.map(job => job.id),;
            query = query.in("job_id", jobIdArray);
          }

<<<<<<< HEAD
=======

        }
        return false
      }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
        } else {
        }
        return false
      }
      // Add the new application to the local state
      const newApplication = data as JobApplication;
      setApplications(prev => [newApplication, ...prev]);
      toast.success("Application submitted successfully");
      return true
    } catch (err: any) {
      console.error("Error applying to job:", err);
      toast.error("Failed to submit application: " + err.message)
      return false
    }
  }
;
      const { data, error: fetchError } = await query,;
      if (fetchError) throw fetchError,;
      // Transform the data to match our application types;
      const transformedData = data.map((app: any) => ({;
        ...app,;
        talent_profile: app.talent_profile ? {;
          ...app.talent_profile,;
          full_name: app.talent_profile.display_name,;
          profile_picture_url: app.talent_profile.avatar_url,;
          skills: [];
        } : undefined;
      })),;
      setApplications(transformedData as JobApplication[]),;
      setError(null);
    } catch (err: any) {;
      console.error("Error fetching applications:", err),;
      setError("Failed to fetch applications: " + err.message),;
      toast.error("Failed to fetch applications");
    } finally {;
      setIsLoading(false);
    }
  },;
  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {;
    if (!user) {;
      toast.error("You must be logged in to apply for jobs"),;
      return false;
    }
;
    try {;
      const { data, error } = await supabase;
        .from("job_applications");
        .insert({;
          job_id: jobId,;
          talent_id: user.id,;
          resume_id: resumeId,;
          cover_letter: coverLetter,;
          status: "new";
        });
        .select();
        .single(),;
      if (error) {;
        if (error.code === '23505') { // Unique violation;
          toast.error("You have already applied to this job");
        } else {;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        } else {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          throw error;
        }
        return false;
      }



<<<<<<< HEAD
      
=======

      
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Add the new application to the local state
      const newApplication = data as JobApplication;
      setApplications(prev => [newApplication, ...prev]);

      
      toast && toast.success("Application submitted successfully");
      return true
    } catch (err: any) {
      console && console.error("Error applying to job:", err);
      toast && toast.error("Failed to submit application: " + err && err.message),
<<<<<<< HEAD
      return false

import { useState, useEffect } from "react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { JobApplication, ApplicationStatus } from "@/types/jobs",;
import { toast } from "sonner",;
;
export const useJobApplications = (jobId?:string) => {;
  const { user } = useAuth(),;
  const [applications, setApplications] = useState<JobApplication[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
;
  const fetchApplications = async () => {;
    if (!user) {;
      setIsLoading(false),;
      return,;
    }
  }
      
      // Add the new application to the local state
      const newApplication = data as JobApplication,
      setApplications(prev => [newApplication, ...prev]),
      
      toast.success("Application submitted successfully"),
      return true
    } catch (err: any) {
      console.error("Error applying to job:", err),
      toast.error("Failed to submit application: " + err.message),
      return false
    }
  },
  
=======

      return false
    }
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({ status })

<<<<<<< HEAD
        .eq("id", applicationId);
      if (error) throw error;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq("id", applicationId),
      
      if (error) throw error,
      
<<<<<<< HEAD
;
    try {;
      setIsLoading(true),;
      ;
      let query = supabase;
        .from("job_applications");
        .select(`;
          *,;
          job:jobs(*),;
          talent_profile:profiles!talent_id(id, display_name, avatar_url, bio);
        `);
        .order("created_at", { ascending:false }),;
      ;
      // Filter by job if jobId is provided;
      if (jobId) {;
        query = query.eq("job_id", jobId),;
      }
      ;
      // For talent users, only fetch their own applications;
      if (user.userType === "jobSeeker" || user.userType === "creator") {;
        query = query.eq("talent_id", user.id),;
      } ;
      // For client users, fetch applications for their jobs;
      else if (user.userType === "employer" || user.userType === "buyer") {;
        if (!jobId) {;
          // Fix:Convert the subquery to a proper array or string;
          const { data:jobIds } = await supabase;
            .from("jobs");
            .select("id");
            .eq("client_id", user.id),;
          ;
          if (jobIds && jobIds.length > 0) {;
            const jobIdArray = jobIds.map(job => job.id),;
            query = query.in("job_id", jobIdArray),;
          }
        }
      }
      ;
      const { data, error:fetchError } = await query,;
      ;
      if (fetchError) throw fetchError,;
      ;
      // Transform the data to match our application types;
      const transformedData = data.map((app:any) => ({;
        ...app,;
        talent_profile:app.talent_profile ? {;
          ...app.talent_profile,;
          full_name:app.talent_profile.display_name,;
          profile_picture_url:app.talent_profile.avatar_url,;
          skills:[];
        } undefined;
      })),;
      ;
      setApplications(transformedData as JobApplication[]),;
      setError(null),;
    } catch (err:any) {;
      console.error("Error fetching applications:", err),;
      setError("Failed to fetch applications:" + err.message),;
      toast.error("Failed to fetch applications");
    } finally {;
      setIsLoading(false),;
    }
  },;
  ;
  const applyToJob = async (jobId:string, coverLetter:string, resumeId?:string) => {;
    if (!user) {;
      toast.error("You must be logged in to apply for jobs"),;
      return false,;
    }
    ;
    try {;
      const { data, error } = await supabase;
        .from("job_applications");
        .insert({;
          job_id:jobId,;
          talent_id:user.id,;
          resume_id:resumeId,;
          cover_letter:coverLetter,;
          status:"new";
        });
        .select();
        .single(),;
      ;
      if (error) {;
        if (error.code === '23505') { // Unique violation;
          toast.error("You have already applied to this job"),;
        } else {;
          throw error,;
        }
        return false,;
      }
      ;
      // Add the new application to the local state;
      const newApplication = data as JobApplication,;
      setApplications(prev => [newApplication, ...prev]),;
      ;
      toast.success("Application submitted successfully"),;
      return true,;
    } catch (err:any) {;
      console.error("Error applying to job:", err),;
      toast.error("Failed to submit application:" + err.message),;
      return false;
    }
  },;
  ;
  const updateApplicationStatus = async (applicationId:string, status:ApplicationStatus) => {;
    try {;
      const { error } = await supabase;
        .from("job_applications");
        .update({ status });
        .eq("id", applicationId),;
      ;
      if (error) throw error,;
      ;
      // Update the local state;
      setApplications(prev => ;
        prev.map(app => app.id === applicationId ? { ...app, status } app);
      ),;
      ;
      toast.success(`Application status updated to ${status}`),;
      return true,;
    } catch (err:any) {;
      console.error("Error updating application status:", err),;
      toast.error("Failed to update application status:" + err.message),;
      return false;
    }
  },;
  ;
  const markApplicationAsViewed = async (applicationId:string) => {;
    try {;
      const { error } = await supabase;
        .from("job_applications");
        .update({ ;
          status:"viewed", ;
          viewed_at:new Date().toISOString() ;
        });
        .eq("id", applicationId);
      // Update the local state
      setApplications(prev =>
        prev.map(app => app.id === applicationId ? { ...app, status } : app)
      );
      toast.success(`Application status updated to ${status}`);
      return true
    } catch (err: any) {
      console.error("Error updating application status:", err);
      toast.error("Failed to update application status: " + err.message)
      return false
    }
  }
=======


      // Update the local state

      setApplications(prev => 
        prev && prev.map(app => app && app.id === applicationId ? { ...app, status } : app)
      );
      
      toast && toast.success(`Application status updated to ${status}`);
      return true
    } catch (err: any) {
      console && console.error("Error updating application status:", err);
      toast && toast.error("Failed to update application status: " + err && err.message),

      return false
    }
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ),
      
      toast.success(`Application status updated to ${status}`),
      return true
    } catch (err: any) {
      console.error("Error updating application status:", err),
      toast.error("Failed to update application status: " + err.message),
      return false
    }
  },
  
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

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
      if (error) throw error;
      
      if (error) throw error,
      
      // Update the local state
      setApplications(prev =>
        prev.map(app => app.id === applicationId ?
          { ...app, status: "viewed", viewed_at: new Date().toISOString() } : app
        )
      );
      ),
      
      return true
    } catch (err) {
      console.error("Error marking application as viewed:", err),
      return false
    }
  }
  // Fetch applications when component mounts or dependencies change
  useEffect(() => {
    if (user) {
      fetchApplications()
    }
  }, [user, jobId]);
  return {
    applications;
    is_loading;
    error;
    refetch: fetch_applications;
    applyToJob;
    updateApplicationStatus,
    markApplicationAsViewed;


<<<<<<< HEAD
  return {
    applications;
    isLoading;
    error;
    refetch: fetchApplications;
    applyToJob;
    updateApplicationStatus
    markApplicationAsViewed
  }
}

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
}
;
<<<<<<< HEAD
        .is("viewed_at", null), // Only update if not already viewed;
      ;
      if (error) throw error,;
      ;
      // Update the local state;
      setApplications(prev => ;
        prev.map(app => app.id === applicationId ? ;
          { ...app, status:"viewed", viewed_at:new Date().toISOString() } app;
        );
      ),;
      ;
      return true,;
    } catch (err) {;
      console.error("Error marking application as viewed:", err),;
      return false,;
    }
  },;
  ;
  // Fetch applications when component mounts or dependencies change;
  useEffect(() => {;
    if (user) {;
      fetchApplications(),;
    }
  }, [user, jobId]),;
  ;
  return {;
    applications,;
    isLoading,;
    error,;
    refetch:fetchApplications,;
    applyToJob,;
    updateApplicationStatus,;
    markApplicationAsViewed;
  },;
},; export const useJobApplications = (jobId?: string) => {
  const {
  user 
}= useAuth ();
const [applications, setApplications] = useState<JobApplication[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const [error, setError] = useState<string | null> (null);
const fetchApplications = async () => {
  if (!user) {
  setIsLoading (false);
return 
}try {
  setIsLoading (true);
let query = supabase .from ("job applications") 
}//For client users, fetch applications for their jobs else if (user.userType === "employer" || user.userType === "buyer") {
  if (!jobId) {
  //Fix: Convert the subquery to a proper array or string const {
  data: jobIds 
}= await supabase .from ("jobs") .select ("id") .eq ("client id", user.id);
if (jobIds && jobIds.length > 0) {
  const jobIdArray = jobIds.map (job => job.id);
query = query.in ("job id", jobIdArray) 
}else {
  throw error 
}return false;
}//Add the new application to the local state const newApplication = data as JobApplication;
setApplications (prev => [newApplication, ...prev]);
}
};
const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {
  try {
  const {
  error 
}= await supabase .from ("job applications") .update ({
  status 
}) //Update the local state setApplications (prev => 
}
};
const markApplicationAsViewed = async (applicationId: string) => {
  try {
  const {
  error 
}= await supabase .from ("job applications") .update ({
  status: "viewed";
viewed at: new Date () .toISOString () 
}) .eq ("id", applicationId) .is ("viewed at", null), //Only update if not already viewed //Update the local state setApplications (prev => prev.map (app => app.id === applicationId ?) );
}
};
// Fetch applications when component mounts or dependencies change useEffect ( () => {
  if (user) {
  fetchApplications () 
}
}, [user, jobId]);
return {
  applications;
isLoading;
error;
refetch: fetchApplications;
applyToJob;
updateApplicationStatus;
markApplicationAsViewed 
}
};
  }
};
  }
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
