import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
export async function createJob(jobData: any) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .insert([jobData])
      .select()
      .single($2);
    if (error) throw error,
    return data
  } catch (error: any) {
    console.error($2);
    throw new Error(error.message || "Failed to create job")
  }
}
export async function updateJob(jobId: string, jobData: any) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .update(jobData)
      .eq('id', jobId)
      .select()
      .single($2);
    if (error) throw error,
    return data
  } catch (error: any) {
    console.error($2);
    throw new Error(error.message || "Failed to update job")
  }
}
export async function getJobById(jobId: string) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', jobId)
      .single($2);
    if (error) throw error,
    return data
  } catch (error: any) {
    console.error($2);
    toast.error($2);
    return null
  }
}