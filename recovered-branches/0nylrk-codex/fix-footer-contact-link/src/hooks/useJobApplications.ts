
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
import { toast } from "sonner",
=======
import { useState, useEffect } from &quot;react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { JobApplication, ApplicationStatus } from &quot;@/types/jobs&quot;;
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const useJobApplications = (jobId?: string) => {
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
        .from(&quot;job_applications&quot;)
        .select(`
          *,
          job:jobs(*),
          talent_profile:profiles!talent_id(id, display_name, avatar_url, bio)
        `)
<<<<<<< HEAD
        .order("created_at", { ascending: false }),
      
      // Filter by job if jobId is provided
      if (jobId) {
        query = query.eq("job_id", jobId)
      }
      
      // For talent users, only fetch their own applications
      if (user.userType === "jobSeeker" || user.userType === "creator") {
        query = query.eq("talent_id", user.id)
=======
        .order(&quot;created_at&quot;, { ascending: false });
      
      // Filter by job if jobId is provided
      if (jobId) {
        query = query.eq(&quot;job_id&quot;, jobId);
      }
      
      // For talent users, only fetch their own applications
      if (user.userType === &quot;jobSeeker&quot; || user.userType === &quot;creator&quot;) {
        query = query.eq(&quot;talent_id&quot;, user.id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } 
      // For client users, fetch applications for their jobs
      else if (user.userType === &quot;employer&quot; || user.userType === &quot;buyer&quot;) {
        if (!jobId) {
          // Fix: Convert the subquery to a proper array or string
          const { data: jobIds } = await supabase
<<<<<<< HEAD
            .from("jobs")
            .select("id")
            .eq("client_id", user.id),
          
          if (jobIds && jobIds.length > 0) {
            const jobIdArray = jobIds.map(job => job.id),
            query = query.in("job_id", jobIdArray)
=======
            .from(&quot;jobs&quot;)
            .select(&quot;id&quot;)
            .eq(&quot;client_id&quot;, user.id);
          
          if (jobIds && jobIds.length > 0) {
            const jobIdArray = jobIds.map(job => job.id);
            query = query.in(&quot;job_id&quot;, jobIdArray);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          }
        }
      }
      
      const { data, error: fetchError } = await query,
      
      if (fetchError) throw fetchError,
      
      // Transform the data to match our application types
      const transformedData = data.map((app: any) => ({
        ...app,
        talent_profile: app.talent_profile ? {
          ...app.talent_profile,
          full_name: app.talent_profile.display_name,
          profile_picture_url: app.talent_profile.avatar_url,
          skills: []
        } : undefined
      })),
      
      setApplications(transformedData as JobApplication[]),
      setError(null)
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error fetching applications:", err),
      setError("Failed to fetch applications: " + err.message),
      toast.error("Failed to fetch applications")
=======
      console.error(&quot;Error fetching applications:&quot;, err);
      setError(&quot;Failed to fetch applications: &quot; + err.message);
      toast.error(&quot;Failed to fetch applications&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },
  
  const applyToJob = async (jobId: string, coverLetter: string, resumeId?: string) => {
    if (!user) {
<<<<<<< HEAD
      toast.error("You must be logged in to apply for jobs"),
      return false
=======
      toast.error(&quot;You must be logged in to apply for jobs&quot;);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    try {
      const { data, error } = await supabase
        .from(&quot;job_applications&quot;)
        .insert({
          job_id: jobId,
          talent_id: user.id,
          resume_id: resumeId,
          cover_letter: coverLetter,
          status: &quot;new&quot;
        })
        .select()
        .single(),
      
      if (error) {
        if (error.code === '23505') { // Unique violation
<<<<<<< HEAD
          toast.error("You have already applied to this job")
=======
          toast.error(&quot;You have already applied to this job&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        } else {
          throw error
        }
        return false
      }
      
      // Add the new application to the local state
      const newApplication = data as JobApplication,
      setApplications(prev => [newApplication, ...prev]),
      
<<<<<<< HEAD
      toast.success("Application submitted successfully"),
      return true
    } catch (err: any) {
      console.error("Error applying to job:", err),
      toast.error("Failed to submit application: " + err.message),
      return false
=======
      toast.success(&quot;Application submitted successfully&quot;);
      return true;
    } catch (err: any) {
      console.error(&quot;Error applying to job:&quot;, err);
      toast.error(&quot;Failed to submit application: &quot; + err.message);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {
    try {
      const { error } = await supabase
        .from(&quot;job_applications&quot;)
        .update({ status })
<<<<<<< HEAD
        .eq("id", applicationId),
=======
        .eq(&quot;id&quot;, applicationId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      if (error) throw error,
      
      // Update the local state
      setApplications(prev => 
        prev.map(app => app.id === applicationId ? { ...app, status } : app)
      ),
      
      toast.success(`Application status updated to ${status}`),
      return true
    } catch (err: any) {
<<<<<<< HEAD
      console.error("Error updating application status:", err),
      toast.error("Failed to update application status: " + err.message),
      return false
=======
      console.error(&quot;Error updating application status:&quot;, err);
      toast.error(&quot;Failed to update application status: &quot; + err.message);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  const markApplicationAsViewed = async (applicationId: string) => {
    try {
      const { error } = await supabase
        .from(&quot;job_applications&quot;)
        .update({ 
          status: &quot;viewed&quot;, 
          viewed_at: new Date().toISOString() 
        })
<<<<<<< HEAD
        .eq("id", applicationId)
        .is("viewed_at", null), // Only update if not already viewed
=======
        .eq(&quot;id&quot;, applicationId)
        .is(&quot;viewed_at&quot;, null); // Only update if not already viewed
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      if (error) throw error,
      
      // Update the local state
      setApplications(prev => 
        prev.map(app => app.id === applicationId ? 
          { ...app, status: &quot;viewed&quot;, viewed_at: new Date().toISOString() } : app
        )
      ),
      
      return true
    } catch (err) {
<<<<<<< HEAD
      console.error("Error marking application as viewed:", err),
      return false
=======
      console.error(&quot;Error marking application as viewed:&quot;, err);
      return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  // Fetch applications when component mounts or dependencies change
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
