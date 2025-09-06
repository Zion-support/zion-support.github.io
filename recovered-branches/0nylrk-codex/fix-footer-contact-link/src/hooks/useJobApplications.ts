
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {JobApplication, ApplicationStatus} from "@/types/jobs";
import {toast} from "sonner";
<<<<<<< HEAD

<<<<<<< HEAD
=======

export const useJobApplications = (jobId?: string) => {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export const useJobApplications = (jobId?: string) => {
=======
export const useJobApplications = (jobId?: string) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { user } = useAuth();
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const fetchApplications = async () => {
    if (!user) {
      setIsLoading(false);
      return
    }
    try {

<<<<<<< HEAD
=======

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const fetchApplications = async () => {
    if (!user) {
      setIsLoading(false),
      return
    }
    try {
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Filter by job if jobId is provided
      if (jobId) {
        query = query && query.eq("job_id", jobId)
      }
      // For talent users, only fetch their own applications

      if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
========
if (user && user.userType === "jobSeeker" || user && user.userType === "creator") {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
        query = query && query.eq("talent_id", user && user.id)
      } 
      // For client users, fetch applications for their jobs
      else if (user && user.userType === "employer" || user && user.userType === "buyer") {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        if (!jobId) {
          // Fix: Convert the subquery to a proper array or string
          const { data: jobIds } = await supabase
            .from("jobs")
            .select("id")
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

<<<<<<< HEAD
=======
            .eq("client_id", user && user.id);
          

=======

            .eq("client_id", user.id),
          

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
            .eq("client_id", user && user.id);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
          if (jobIds && jobIds.length > 0) {
            const jobIdArray = jobIds && jobIds.map(job => job && job.id);
            query = query && query.in("job_id", jobIdArray)
          }
        }
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

<<<<<<< HEAD
=======
========
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
      // Transform the data to match our application types
      const transformedData = data && data.map((app: any) => ({
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

        ...app;

========
        ...app;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
        talent_profile: app && app.talent_profile ? {
          ...app && app.talent_profile;
          full_name: app && app.talent_profile.display_name;
          profile_picture_url: app && app.talent_profile.avatar_url,
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
=======
<<<<<<< HEAD
            .eq("client_id", user.id);
=======
            .eq("client_id", user.id),
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          if (jobIds && jobIds.length > 0) {
            const jobIdArray = jobIds.map(job => job.id),
            query = query.in("job_id", jobIdArray)
          }
        }
      }
<<<<<<< HEAD
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
=======
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Transform the data to match our application types
      const transformedData = data.map((app: any) => ({
        ...app,
        talent_profile: app.talent_profile ? {
<<<<<<< HEAD
          ...app.talent_profile;
          full_name: app.talent_profile.display_name;
          profile_picture_url: app.talent_profile.avatar_url
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          skills: []
        } : undefined
      }));
      setApplications(transformedData as JobApplication[]);
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

      console && console.error("Error fetching applications:", err);
      setError("Failed to fetch applications: " + err && err.message),
      toast && toast.error("Failed to fetch applications")

=======
========
      console && console.error("Error fetching applications:", err);
      setError("Failed to fetch applications: " + err && err.message),
      toast && toast.error("Failed to fetch applications")
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts


      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Transform the data to match our application types
      const transformedData = data.map((app: any) => ({
        ...app,
        talent_profile: app.talent_profile ? {

<<<<<<< HEAD
=======
      console.error("Error fetching applications:", err);
      setError("Failed to fetch applications: " + err.message)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast.error("Failed to fetch applications")
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======
  },
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
      toast && toast.error("You must be logged in to apply for jobs");
=======
<<<<<<< HEAD
  }
=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
      toast.error("You must be logged in to apply for jobs"),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return false
    }
    try {
      const { data, error } = await supabase
        .from("job_applications")
        .insert({
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          job_id: jobId,
          talent_id: user.id,
          resume_id: resumeId,
          cover_letter: coverLetter,
          status: "new"
        })
        .select()
        .single(),
      
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      if (error) {
        if (error.code === '23505') { // Unique violation
          toast.error("You have already applied to this job")
        } else {
          throw error
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        }
        return false
      }

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
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
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
        return false
      }
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          throw error;
        }
        return false;
      }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

<<<<<<< HEAD
=======



      
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Add the new application to the local state
      const newApplication = data as JobApplication;
      setApplications(prev => [newApplication, ...prev]);

      
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
      toast && toast.success("Application submitted successfully");
      return true
    } catch (err: any) {
      console && console.error("Error applying to job:", err);
      toast && toast.error("Failed to submit application: " + err && err.message),
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
      return false
=======

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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
<<<<<<< HEAD
  },

=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      
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
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {
    try {
      const { error } = await supabase
        .from("job_applications")
        .update({ status })
<<<<<<< HEAD

<<<<<<< HEAD
      // Update the local state
      setApplications(prev =>
        prev.map(app => app.id === applicationId ? { ...app, status } : app)

=======

=======
<<<<<<< HEAD
        .eq("id", applicationId);
      if (error) throw error;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        .eq("id", applicationId),
      
      if (error) throw error,
      
<<<<<<< HEAD


      // Update the local state

========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
      if (error) throw error;
      // Update the local state
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
      setApplications(prev => 
        prev && prev.map(app => app && app.id === applicationId ? { ...app, status } : app)
      );
      toast && toast.success(`Application status updated to ${status}`);
      return true
    } catch (err: any) {
      console && console.error("Error updating application status:", err);
      toast && toast.error("Failed to update application status: " + err && err.message),
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Update the local state
      setApplications(prev =>
        prev.map(app => app.id === applicationId ? { ...app, status } : app)
<<<<<<< HEAD
      );
      toast.success(`Application status updated to ${status}`);
      return true
    } catch (err: any) {
      console.error("Error updating application status:", err);
      toast.error("Failed to update application status: " + err.message)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return false
    }
  }
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

<<<<<<< HEAD
=======

      
      if (error) throw error,
      


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Update the local state

      setApplications(prev => 
        prev && prev.map(app => app && app.id === applicationId ? 

========
      if (error) throw error;
      // Update the local state
      setApplications(prev => 
        prev && prev.map(app => app && app.id === applicationId ? 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
          { ...app, status: "viewed", viewed_at: new Date().toISOString() } : app
        )

<<<<<<< HEAD
=======

      ),
      


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return true
    } catch (err) {
      console && console.error("Error marking application as viewed:", err);
      return false
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

<<<<<<< HEAD
=======
========
=======
<<<<<<< HEAD
      if (error) throw error;
=======
      
      if (error) throw error,
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Update the local state
      setApplications(prev =>
        prev.map(app => app.id === applicationId ?
          { ...app, status: "viewed", viewed_at: new Date().toISOString() } : app
        )
<<<<<<< HEAD
      );
=======
      ),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return true
    } catch (err) {
      console.error("Error marking application as viewed:", err),
      return false
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }
  // Fetch applications when component mounts or dependencies change
  useEffect(() => {
    if (user) {
      fetchApplications()
    }
  }, [user, jobId]);
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
      // Add the new application to the local state;
      const new_application = data as JobApplication;
      set_applications (prev => [new_application, ...prev]);
;
      toast.success ("Application submitted successfully");
      return true;
    } catch (err: any) {
      console.error ("Error applying to job:", err);
      toast.error ("Failed to submit application: " + err.message),
      return false;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
  return {
    applications;
    is_loading;
    error;
    refetch: fetch_applications;
    applyToJob;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
    updateApplicationStatus,
    markApplicationAsViewed;
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  return {
    applications;
    isLoading;
    error;
    refetch: fetchApplications;
    applyToJob;
    updateApplicationStatus
    markApplicationAsViewed
<<<<<<< HEAD
  }
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  }
};

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useJobApplications.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
