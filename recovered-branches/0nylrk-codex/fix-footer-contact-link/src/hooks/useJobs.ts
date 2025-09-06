

=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import {useState, useEffect} from "react";
import {supabase} from "@/integrations/supabase/client";
import {Job, JobStatus} from "@/types/jobs";
import {toast} from "sonner";
import {useAuth} from "./useAuth";
import {createJob, updateJob, getJobById} from "@/services/jobService";

  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const clientId = userId || user?.id,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const fetchJobs = async () => {
    if (!clientId) {
      setIsLoading(false);
      return
    }
    try {

      let query = supabase
        .from("jobs")
        .select("*")
        .eq("client_id", clientId)

      setError(null)
    } catch (err: any) {
      console.error("Error fetching jobs:", err),
      setError("Failed to fetch jobs. Please try again."),
      toast.error("Failed to fetch jobs")
    } finally {
      setIsLoading(false)
    }

  const updateJobStatus = async (jobId: string, newStatus: JobStatus) => {
    try {
      const { error: updateError } = await supabase
        .from("jobs")
        .update({ status: newStatus })
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only update their own jobs

      // Update local state
      setJobs(jobs && jobs.map(job => job && job.id === jobId ? {...job, status: newStatus} : job));
      toast && toast.success("Job status updated successfully");
      return true
    } catch (err: any) {
      console && console.error("Error updating job status:", err);
      toast && toast.error("Failed to update job status");
      return false
    }

  const deleteJob = async (jobId: string) => {
    try {
      const { error: deleteError } = await supabase
        .from("jobs")
        .delete()
        .eq("id", jobId)
        .eq("client_id", clientId), // Ensure user can only delete their own jobs

<<<<<<< HEAD
      // Update local state
      setJobs(jobs && jobs.filter(job => job && job.id !== jobId));
      toast && toast.success("Job deleted successfully");
      return true
    } catch (err: any) {
      console && console.error("Error deleting job:", err);
      toast && toast.error("Failed to delete job");
      return false

  }
};
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
