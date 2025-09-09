import { useState, useEffect, useCallback } from 'react'; // Added useCallback;
import { supabase } from '@/integrations/supabase/client';
;
export default function Page() {};
  return null;
}
}
      ;
      const { data, error: fetchError } = await query;

      if(fetchError) throw fetchError;

      setJobs(data as Job[] || []); // Ensure data is not null;
      setError(null);,
} catch(err: unknown) {};
} finally {};
}
  }, [clientId, status]); // Dependencies for fetchJobs;

  const updateJobStatus = async(jobId: string, newStatus: JobStatus) => {};
      const { error: updateError } = await supabase;
        .from("jobs");
        .update({ status: newStatus });
        .eq("id", jobId);
        .eq("client_id", clientId); ;

      if(updateError) throw updateError;

      setJobs(prevJobs => prevJobs.map(job => job.id === jobId ? {...job, status: newStatus} : job));
      toast.success("Job status updated successfully");
      return true;
    } catch (err: any) {
      logErrorToProduction('Error updating job status:', { data: err });
      toast.error("Failed to update job status");
      return false;
    }
  };
  ;
  const deleteJob = async(jobId: string) => {};
      const { error: deleteError } = await supabase;
        .from("jobs");
        .delete();
        .eq("id", jobId);
        .eq("client_id", clientId); ;

      if(deleteError) throw deleteError;

      setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
      toast.success("Job deleted successfully");
      return true;
    } catch (err: any) {
      logErrorToProduction('Error deleting job:', { data: err });
      toast.error("Failed to delete job");
      return false;
    }
  };
  
  // Fetch jobs when component mounts or dependencies change
  useEffect(() => {
    fetchJobs();
  }, [clientId, status]);
  
  return {
    jobs,
    isLoading,
    error,
    refetch: fetchJobs,
    updateJobStatus,
    deleteJob,
    createJob,
    updateJob,
    getJobById
  };
};
