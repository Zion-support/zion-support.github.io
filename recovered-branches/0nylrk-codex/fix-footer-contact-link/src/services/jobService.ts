
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "sonner",;
;
export async function createJob(jobData:any) {;
  try {;
    const { data, error } = await supabase;
      .from('jobs');
      .insert([jobData]);
      .select();
      .single(),;
      ;
    if (error) throw error,;
    return data,;
  } catch (error:any) {;
    console.error("Error creating job:", error),;
    throw new Error(error.message || "Failed to create job"),;
  }
}
;
export async function updateJob(jobId:string, jobData:any) {;
  try {;
    const { data, error } = await supabase;
      .from('jobs');
      .update(jobData);
      .eq('id', jobId);
      .select();
      .single(),;
      ;
    if (error) throw error,;
    return data,;
  } catch (error:any) {;
    console.error("Error updating job:", error),;
    throw new Error(error.message || "Failed to update job"),;
  }
}
;
export async function getJobById(jobId:string) {;
  try {;
    const { data, error } = await supabase;
      .from('jobs');
      .select('*');
      .eq('id', jobId);
      .single(),;
      ;
    if (error) throw error,;
    return data,;
  } catch (error:any) {;
    console.error("Error fetching job:", error),;
    toast.error("Failed to load job details"),;
    return null,;
  }
=======
import { supabase } from "@/integrations/supabase/client",
import { toast } from "sonner",export async function createJob(jobData: any) {
  try {
    const { data, error } = await supabase

export async function createJob(_jobData: unknown) {_try {
    const { data, _error} = await supabase
      .from('jobs')
      .insert([jobData])
      .select()
      .single(),
      
    if (error) throw error,
    return data
  } catch (error: any) {
    console.error("Error creating job:", error),
    throw new Error(error.message || "Failed to create job")  }
    if (error) throw error;
    return data;
  } catch (error: unknown) {_throw new Error(error.message || "Failed to create job");}
}

export async function updateJob(_jobId: string, _jobData: unknown) {_try {
    const { data, _error} = await supabase
      .from('jobs')
      .update(jobData)
      .eq('id', jobId)
      .select()
      .single(),
      
    if (error) throw error,
    return data
  } catch (error: any) {
    console.error("Error updating job:", error),
    throw new Error(error.message || "Failed to update job")  }
    if (error) throw error;
    return data;
  } catch (error: unknown) {_throw new Error(error.message || "Failed to update job");}
}

export async function getJobById(_jobId: string) {_try {
    const { data, _error} = await supabase
      .from('jobs')
      .select('*')
      .eq('id', jobId)
      .single(),
      
    if (error) throw error,
    return data
  } catch (error: any) {
    console.error("Error fetching job:", error),
    toast.error("Failed to load job details"),
    return null  }
    if (error) throw error;
    return data;
  } catch (error: unknown) {_toast.error("Failed to load job details");
    return null;}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
