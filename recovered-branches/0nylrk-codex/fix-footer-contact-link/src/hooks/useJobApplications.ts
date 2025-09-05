
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { toast } from "sonner",export const useJobApplications = (jobId?: string) => {
  const { user } = useAuth(),
  const [applications, setApplications] = useState<JobApplication[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

  const fetchApplications = async () => {
    if (!user) {
      setIsLoading(false),
      return
    }

    try {
      setIsLoading(true),
      
      let query = supabase
        .from(&quot;jobapplications&quot;)

export const useJobApplications = (jobId?: string) => {const { user} = useAuth();
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchApplications = async () => {if (!user) {
      setIsLoading(false);
      return}

    try {setIsLoading(true);
      
      let query = supabase
        .from("jobapplications")
        .select(`
          *, job:jobs(*), talent_profile:profiles!talentid(id, display_name, avatar_url, bio)
        `)
        .order("createdat", { ascending: false }),
      
      // Filter by job if jobId is provided,
if (jobId) {
        query = query.eq("jobid", jobId)
      }
      
      // For talent users, only fetch their own applications,
if (user.userType === "jobSeeker" || user.userType === "creator") {
        query = query.eq("talentid", user.id)      } 
      // For client users, fetch applications for their jobs,
else if (user.userType === &quot;employer&quot; || user.userType === &quot;buyer&quot;) {
        if (!jobId) {
          // Fix: Convert the subquery to a proper array or string,
const { data: jobIds } = await supabase
        .order("createdat", _{ ascending: false});
      
      // Filter by job if jobId is provided,
if (jobId) {query = query.eq("jobid", jobId)}
      
      // For talent users, only fetch their own applications,
if (user.userType === "jobSeeker" || user.userType === "creator") {query = query.eq("talentid", user.id)} 
      // For client users, fetch applications for their jobs,
else if (user.userType === "employer" || user.userType === "buyer") {if (!jobId) {
          // Fix: Convert the subquery to a proper array or string,
const { data: jobIds} = await supabase
            .from("jobs")
            .select("id")
            .eq("clientid", user.id),
          
          if (jobIds && jobIds.length > 0) {
            const jobIdArray = jobIds.map(job => job.id),
            query = query.in("jobid", jobIdArray)          }
        }
      }
      
      const { data, error: fetchError } = await query,
          if (jobIds && jobIds.length > 0) {const jobIdArray = jobIds.map(job => job.id);
            query = query.in("jobid", jobIdArray)}
        }
      }
      
      const {data, error: fetchError} = await query;
      
      if (fetchError) throw fetchError,
      
      // Transform the data to match our application types,
const transformedData = data.map((app: any) => ({
        ...app,
        talentprofile: app.talentprofile ? {
          ...app.talentprofile,
          fullname: app.talentprofile.displayname,
          profilepicture_url: app.talentprofile.avatarurl,
          skills: []
        } : undefined
      })),
      
      setApplications(transformedData as JobApplication[]),
      setError(null)
    } catch (err: any) {
      console.error("Error fetching applications:", err),
      setError("Failed to fetch applications: " + err.message),
      toast.error("Failed to fetch applications")    } finally {
      setIsLoading(false)
    }
  },
  
  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
      toast.error("You must be logged in to apply for jobs"),
      return false    }
    
    try {
      const { data, error } = await supabase
        .from(&quot;jobapplications&quot;)
        .insert({
          jobid: jobId,
          talentid: user.id,
          resumeid: resumeId,
          coverletter: coverLetter,
          status: &quot;new&quot
        })
      const transformedData = data.map(_(app: unknown) => ({_...app, talent_profile: app.talentprofile ? {
          ...app.talentprofile, full_name: app.talentprofile.displayname, profile_picture_url: app.talentprofile.avatarurl, skills: []} : undefined
      }));
      
      setApplications(transformedData as JobApplication[]);
      setError(null)
    } catch (err: unknown) {setError("Failed to fetch applications: " + err.message);
      toast.error("Failed to fetch applications")} finally {setIsLoading(false)}
  };
  
  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {if (!user) {
      toast.error("You must be logged in to apply for jobs");
      return false}
    
    try {const { data, error} = await supabase
        .from("jobapplications")
        .insert({job_id: jobId, talent_id: user.id, resume_id: resumeId, cover_letter: coverLetter, status: "new"})
        .select()
        .single(),
      
      if (error) {
        if (error.code === '23505') { // Unique violation,
toast.error("You have already applied to this job")        } else {
          throw error
        }
        return false
      }
      
      // Add the new application to the local state,
const newApplication = data as JobApplication,
      setApplications(prev => [newApplication, ...prev]),
      if (error) {if (error.code === '23505') { // Unique violation,
toast.error("You have already applied to this job")} else {throw error}
        return false
      }
      
      // Add the new application to the local state,
const newApplication = data as JobApplication;
      setApplications(prev => [newApplication, ...prev]);
      
      toast.success("Application submitted successfully"),
      return true
    } catch (err: any) {
      console.error("Error applying to job:", err),
      toast.error("Failed to submit application: " + err.message),
      return false    }
  },
  
  const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {
    try {
      const { error } = await supabase
        .from(&quot;jobapplications&quot;)
        .update({ status })
        .eq("id", applicationId)    } catch (err: unknown) {toast.error("Failed to submit application: " + err.message);
      return false}
  };
  
  const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {try {
      const { error} = await supabase
        .from("jobapplications")
        .update({status})
        .eq("id", applicationId);
      
      if (error) throw error,
      
      // Update the local state,
setApplications(prev => 
        prev.map(app => app.id === applicationId ? { ...app, status } : app)
      ),
      
      toast.success(`Application status updated to ${status}`),
      return true
    } catch (err: any) {
      console.error("Error updating application status:", err),
      toast.error("Failed to update application status: " + err.message),
      return false    }
  },
  
  const markApplicationAsViewed = async (applicationId: string) => {
    try {
      const { error } = await supabase
        .from(&quot;jobapplications&quot;)
        .update({ 
          status: &quot;viewed&quot;, 
          viewedat: new Date().toISOString() 
        })
        prev.map(app => app.id === applicationId ? {_...app, status} : app)
      );
      
      toast.success(`Application status updated to ${status}`);
      return true
    } catch (err: unknown) {toast.error("Failed to update application status: " + err.message);
      return false}
  };
  
  const markApplicationAsViewed = async (applicationId: string) => {try {
      const { error} = await supabase
        .from("jobapplications")
        .update({status: "viewed", viewed_at: new Date().toISOString()})
        .eq("id", applicationId)
        .is("viewedat", null), // Only update if not already viewed,
if (error) throw error,
      
      // Update the local state,
setApplications(prev => 
        prev.map(app => app.id === applicationId ? 
          { ...app, status: &quot;viewed&quot;, viewedat: new Date().toISOString() } : app        )
      ),
      
      return true
    } catch (err) {
      console.error("Error marking application as viewed:", err),
      return false    }
  },
  
  // Fetch applications when component mounts or dependencies change,
useEffect(() => {
    if (user) {
      fetchApplications()
    }
  }, [user, jobId]),
  
  return {
    applications,
    isLoading,
    error,
    refetch: fetchApplications,
    applyToJob,
    updateApplicationStatus,
    markApplicationAsViewed
  }
},
      return true
    } catch (err) {return false}
  };
  
  // Fetch applications when component mounts or dependencies change,
useEffect_(() => {if (user) {
      fetchApplications()}
  }, [user, jobId]);
  
  return {applications, isLoading, error, refetch: fetchApplications, applyToJob, updateApplicationStatus, markApplicationAsViewed}
};
