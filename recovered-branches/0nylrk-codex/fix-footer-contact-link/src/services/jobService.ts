

import {supabase} from "@/integrations/supabase/client";
import {toast} from "sonner";

import { supabase } from "@/integrations/supabase/client",
import { toast } from "sonner",

export async function createJob(jobData: any) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .insert([jobData])

    if (error) throw error,
    return data
  } catch (error: any) {
    console.error("Error creating job:", error),
    throw new Error(error.message || "Failed to create job")

  }
}
export async function updateJob(jobId: string, jobData: any) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .update(jobData)
      .eq('id', jobId)

    if (error) throw error,
    return data
  } catch (error: any) {
    console.error("Error updating job:", error),
    throw new Error(error.message || "Failed to update job")

  }
}
export async function getJobById(jobId: string) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')

    if (error) throw error,

    return data
  } catch (error: any) {
    console && console.error("Error fetching job:", error);
    toast && toast.error("Failed to load job details");
    return null

