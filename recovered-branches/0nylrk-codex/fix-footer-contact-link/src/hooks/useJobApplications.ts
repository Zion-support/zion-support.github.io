

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {toast} from "sonner";
<<<<<<< HEAD
export const useJobApplications = (jobId?: string) => {
export const useJobApplications = (jobId?: string) => {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export const useJobApplications = (jobId?: string) => {;


<<<<<<< HEAD
=======
export const useJobApplications = (jobId?: string) => {;


export const useJobApplications = (jobId?: string) => {
export const useJobApplications = (jobId?: string) => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const { user } = useAuth();
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const fetchApplications = async () => {
    if (!user) {
      setIsLoading(false);
      return
    }
    try {

      let query = supabase
        .from("job_applications")
        .select(`
          *;
          job: jobs(*)
          talent_profile:profiles!talent_id(id, display_name, avatar_url, bio)
<<<<<<< HEAD
<<<<<<< HEAD
        `)
<<<<<<< HEAD
        .order("created_at", { ascending: false });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Filter by job if jobId is provided
      if (jobId) {
        query = query && query.eq("job_id", jobId)
      }
      // For talent users, only fetch their own applications
<<<<<<< HEAD

      if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
=======
if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        query = query && query.eq("talent_id", user && user.id)
      } 
      // For client users, fetch applications for their jobs
      else if (user && user.userType === "employer" || user && user.userType === "buyer") {
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        if (!jobId) {
=======
        `)        if (!jobId) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        `)        if (!jobId) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          // Fix: Convert the subquery to a proper array or string
          const { data: jobIds } = await supabase
            .from("jobs")
            .select("id")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            .eq("client_id", user && user.id);
          


            .eq("client_id", user.id),
          

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            .eq("client_id", user && user.id);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          if (jobIds && jobIds.length > 0) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            const jobIdArray = jobIds && jobIds.map(job => job && job.id);
            query = query && query.in("job_id", jobIdArray)
          }
        }
      }
        ...app;import { useState, useEffect } from './react';
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
            .eq("client_id", user.id);
            .eq("client_id", user.id),
          
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          if (jobIds && jobIds.length > 0) {
            const jobIdArray = jobIds.map(job => job.id),
            query = query.in("job_id", jobIdArray)
          }
        }
      }
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        ...app;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        ...app;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        ...app;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          skills: []
        } : undefined
      }));
      setApplications(transformedData as JobApplication[]);
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      console && console.error("Error fetching applications:", err);
      setError("Failed to fetch applications: " + err && err.message),
      toast && toast.error("Failed to fetch applications")
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
=======
      console && console.error("Error fetching applications:", err);
      setError("Failed to fetch applications: " + err && err.message),
      toast && toast.error("Failed to fetch applications")
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Transform the data to match our application types
      const transformedData = data.map((app: any) => ({
        ...app,
<<<<<<< HEAD
<<<<<<< HEAD
        talent_profile: app.talent_profile ? {

<<<<<<< HEAD
=======
=======
      console.error("Error fetching applications:", err);
      setError("Failed to fetch applications: " + err.message)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      toast.error("Failed to fetch applications")
    } finally {
      setIsLoading (false);
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
      toast && toast.error("You must be logged in to apply for jobs");
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  },
  
  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
      toast.error("You must be logged in to apply for jobs"),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return false
    }
    try {
      const { data, error } = await supabase
        .from("job_applications")
        .insert({
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
          job_id: jobId;
          talent_id: user.id;
          resume_id: resumeId;
          cover_letter: coverLetter
          status: "new"
        })
        .select()
        .single();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      if (error) {
        if (error.code === '23505') { // Unique violation
          toast.error("You have already applied to this job")
        } else {
          throw error
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
=======
        talent_profile: app.talent_profile ? {        }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        talent_profile: app.talent_profile ? {        }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        }
        return false
      }

      // Add the new application to the local state
      const newApplication = data as JobApplication,
      setApplications(prev => [newApplication, ...prev]),

<<<<<<< HEAD
      toast.success("Application submitted successfully"),
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        } else {
=======
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        } else {
=======
        } else {        } else {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        } else {        } else {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        }
        return false;
      }

<<<<<<< HEAD
<<<<<<< HEAD



      
      // Add the new application to the local state
      const newApplication = data as JobApplication;
      setApplications(prev => [newApplication, ...prev]);
      toast.success("Application submitted successfully");
      return true
    } catch (err: any) {
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          throw error;
        }
        return false;
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      
      // Add the new application to the local state
      const newApplication = data as JobApplication;
      setApplications(prev => [newApplication, ...prev]);

      
      toast && toast.success("Application submitted successfully");
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return true
    } catch (err: any) {
      console && console.error("Error applying to job:", err);
      toast && toast.error("Failed to submit application: " + err && err.message),
<<<<<<< HEAD

      return false
    }
  }
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return false
    }
  },
<<<<<<< HEAD

=======
  
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {
    try {
=======
          try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const { error } = await supabase
        .from("job_applications")
        .update({ status })

<<<<<<< HEAD
      // Update the local state
      setApplications(prev =>
        prev.map(app => app.id === applicationId ? { ...app, status } : app)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
        .eq("id", applicationId);
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          try {
      const { error } = await supabase
        .from("job_applications")
        .update({ status })

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        .eq("id", applicationId),
      
      if (error) throw error,
      

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
  }      ),
      
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const markApplicationAsViewed = async (applicationId: string) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({
          status: "viewed"
          viewed_at: new Date().toISOString()
        })
        .eq("id", applicationId)
<<<<<<< HEAD
<<<<<<< HEAD
        .is("viewed_at", null), // Only update if not already viewed
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      
      if (error) throw error,
      

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      // Update the local state

      setApplications(prev => 
        prev && prev.map(app => app && app.id === applicationId ? 

<<<<<<< HEAD
=======
      if (error) throw error;
      // Update the local state
      setApplications(prev => 
        prev && prev.map(app => app && app.id === applicationId ? 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      // Update the local state
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          { ...app, status: "viewed", viewed_at: new Date().toISOString() } : app
        )
<<<<<<< HEAD

=======
=======
        .is("viewed_at", null), // Only update if not already viewed        )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        .is("viewed_at", null), // Only update if not already viewed        )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return true
    } catch (err) {
      console && console.error("Error marking application as viewed:", err);
      return false

  }
};
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      // Add the new application to the local state;
      const new_application = data as JobApplication;
      set_applications (prev => [new_application, ...prev]);
;
      toast.success ("Application submitted successfully");
      return true;
    } catch (err: any) {
      console.error ("Error applying to job:", err);
      toast.error ("Failed to submit application: " + err.message),
      return false;    }
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
  return {
    applications;
    is_loading;
    error;
    refetch: fetch_applications;
    applyToJob;

    updateApplicationStatus,
    markApplicationAsViewed;

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


  }
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
