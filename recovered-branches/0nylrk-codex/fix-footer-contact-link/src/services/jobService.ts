
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
=======
import { supabase } from "@/integrations/supabase/client",
import { toast } from "sonner",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export async function createJob(jobData: any) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .insert([jobData])
      .select()
<<<<<<< HEAD
      .single();
    if (error) throw error;
    return data
  } catch (error: any) {
    console.error("Error creating job:", error);
    throw new Error(error.message |"Failed to create job")
=======
      .single(),
      
    if (error) throw error,
    return data
  } catch (error: any) {
    console.error("Error creating job:", error),
    throw new Error(error.message || "Failed to create job")
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
export async function updateJob(jobId: string, jobData: any) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .update(jobData)
      .eq('id', jobId)
      .select()
<<<<<<< HEAD
      .single();
    if (error) throw error;
    return data
  } catch (error: any) {
    console.error("Error updating job:", error);
    throw new Error(error.message |"Failed to update job")
=======
      .single(),
      
    if (error) throw error,
    return data
  } catch (error: any) {
    console.error("Error updating job:", error),
    throw new Error(error.message || "Failed to update job")
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
export async function getJobById(jobId: string) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', jobId)
<<<<<<< HEAD
      .single();
    if (error) throw error;
=======
      .single(),
      
    if (error) throw error,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    return data
  } catch (error: any) {
    console.error("Error fetching job:", error),
    toast.error("Failed to load job details"),
    return null
<<<<<<< HEAD
  }
}
=======
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "sonner",;
export async function createJob(jobData: any) {;
  try {;
    const { data, error } = await supabase;
      .from('jobs');
      .insert([jobData]);
      .select();
      .single(),;
    if (error) throw error,;
    return data;
  } catch (error: any) {;
    console.error("Error creating job:", error),;
    throw new Error(error.message || "Failed to create job");
  }
}
;
export async function updateJob(jobId: string, jobData: any) {;
  try {;
    const { data, error } = await supabase;
      .from('jobs');
      .update(jobData);
      .eq('id', jobId);
      .select();
      .single(),;
    if (error) throw error,;
    return data;
  } catch (error: any) {;
    console.error("Error updating job:", error),;
    throw new Error(error.message || "Failed to update job");
  }
}
;
export async function getJobById(jobId: string) {;
  try {;
    const { data, error } = await supabase;
      .from('jobs');
      .select('*');
      .eq('id', jobId);
      .single(),;
    if (error) throw error,;
    return data;
  } catch (error: any) {;
    console.error("Error fetching job:", error);
    toast.error("Failed to load job details");
    return null;
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
