




import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {toast} from "sonner";

<<<<<<< HEAD
<<<<<<< HEAD
export const useJobApplications = (jobId?: string) => {;


export const useJobApplications = (jobId?: string) => {
export const useJobApplications = (jobId?: string) => {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export const useJobApplications = (jobId?: string) => {;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { user } = useAuth();
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const fetchApplications = async () => {
    if (!user) {
      setIsLoading(false);
      return
    }
    try {
<<<<<<< HEAD


<<<<<<< HEAD

  const fetchApplications = async () => {
    if (!user) {
      setIsLoading(false),
      return
    }
    try {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setIsLoading(true);
      let query = supabase
        .from("job_applications")
        .select(`
          *;
          job: jobs(*)
          talent_profile:profiles!talent_id(id, display_name, avatar_url, bio)
        `)
        .order("created_at", { ascending: false });
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Filter by job if jobId is provided
      if (jobId) {
        query = query && query.eq("job_id", jobId)
      }
      // For talent users, only fetch their own applications

      if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        query = query && query.eq("talent_id", user && user.id)
      } 
      // For client users, fetch applications for their jobs
      else if (user && user.userType === "employer" || user && user.userType === "buyer") {
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (!jobId) {
          // Fix: Convert the subquery to a proper array or string
          const { data: jobIds } = await supabase
            .from("jobs")
            .select("id")
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            .eq("client_id", user.id);
            .eq("client_id", user.id),
          
          if (jobIds && jobIds.length > 0) {
<<<<<<< HEAD
            const jobIdArray = jobIds.map(job => job.id),
            query = query.in("job_id", jobIdArray)
=======
            const jobIdArray = jobIds && jobIds.map(job => job && job.id);
            query = query && query.in("job_id", jobIdArray)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          skills: []
        } : undefined
      }));
      setApplications(transformedData as JobApplication[]);
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
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
=======
      console.error("Error fetching applications:", err);
      setError("Failed to fetch applications: " + err.message)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast.error("Failed to fetch applications")
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
      toast && toast.error("You must be logged in to apply for jobs");
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  },
  
  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
<<<<<<< HEAD
      toast.error("You must be logged in to apply for jobs"),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      toast && toast.error("You must be logged in to apply for jobs");
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return false
    }
    try {
      const { data, error } = await supabase
        .from("job_applications")
        .insert({
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          job_id: jobId;
          talent_id: user.id;
          resume_id: resumeId;
          cover_letter: coverLetter
          status: "new"
        })
        .select()
        .single();
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          job_id: jobId,
          talent_id: user.id,
          resume_id: resumeId,
          cover_letter: coverLetter,
          status: "new"
        })
        .select()
        .single(),
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (error) {
        if (error.code === '23505') { // Unique violation
          toast.error("You have already applied to this job")
        } else {
          throw error
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        }
        return false
      }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        } else {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          throw error;
        }
        return false;
      }



<<<<<<< HEAD
<<<<<<< HEAD
      
=======

      
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Add the new application to the local state
      const newApplication = data as JobApplication;
      setApplications(prev => [newApplication, ...prev]);

      
      toast && toast.success("Application submitted successfully");
      return true
    } catch (err: any) {
      console && console.error("Error applying to job:", err);
      toast && toast.error("Failed to submit application: " + err && err.message),
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return false
    }
  },
  
<<<<<<< HEAD
=======

      return false
    }
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({ status })
<<<<<<< HEAD

<<<<<<< HEAD
        .eq("id", applicationId);
      if (error) throw error;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        .eq("id", applicationId);
      if (error) throw error;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .eq("id", applicationId),
      
      if (error) throw error,
      
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Update the local state
      setApplications(prev =>
        prev.map(app => app.id === applicationId ? { ...app, status } : app)
      );
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      toast && toast.success(`Application status updated to ${status}`);
      return true
    } catch (err: any) {
      console && console.error("Error updating application status:", err);
      toast && toast.error("Failed to update application status: " + err && err.message),

      return false
    }
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (error) throw error;
      
      if (error) throw error,
      
      // Update the local state
<<<<<<< HEAD
      setApplications(prev =>
        prev.map(app => app.id === applicationId ?
=======

      setApplications(prev => 
        prev && prev.map(app => app && app.id === applicationId ? 

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          { ...app, status: "viewed", viewed_at: new Date().toISOString() } : app
        )
      );
      ),
      
      return true
    } catch (err) {
<<<<<<< HEAD
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
=======
      console && console.error("Error marking application as viewed:", err);
      return false
    }
  }
;
  const updateApplicationStatus = async (application_id: string, status: ApplicationStatus) => {
    try {
      const { error } = await supabase;
        .from ("job_applications");
        .update ({ status });
        .eq ("id", application_id);
;
      // Check condition
if (throw error) {
  $2
}
      // Update the local state;
      set_applications (prev =>;
        prev.map (app => app.id === application_id ? { ...app, status } : app));
;
      toast.success (`Application status updated to ${status}`);
      return true;
    } catch (err: any) {
      console.error ("Error updating application status:", err);
      toast.error ("Failed to update application status: " + err.message),
      return false;
    }
  }
;
  const markApplicationAsViewed = async (application_id: string) => {
    try {
      const { error } = await supabase;
        .from ("job_applications");
        .update ({
          status: "viewed",
          viewed_at: new Date ().toISOString ();
        });
        .eq ("id", application_id);
        .is ("viewed_at", null), // Only update if not already viewed;
      // Check condition
if (throw error) {
  $2
}
      // Update the local state;
      set_applications (prev =>;
        prev.map (app => app.id === application_id ?;
          { ...app, status: "viewed", viewed_at: new Date ().toISOString () } : app));
;
      return true;
    } catch (err) {
      console.error ("Error marking application as viewed:", err);
      return false;
    }
  }
;
  // Fetch applications when component mounts or dependencies change;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      fetch_applications ();
    }
  }, [user, job_id]);
;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return {
    applications;
    is_loading;
    error;
    refetch: fetch_applications;
    applyToJob;
<<<<<<< HEAD
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
=======

    updateApplicationStatus,
    markApplicationAsViewed;
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
