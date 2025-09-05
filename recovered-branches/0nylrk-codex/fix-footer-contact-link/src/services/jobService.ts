
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;sonner&quot;;

export async function createJob(jobData: any) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .insert([jobData])
      .select()
      .single();
      
    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error(&quot;Error creating job:&quot;, error);
    throw new Error(error.message || &quot;Failed to create job&quot;);
  }
}

export async function updateJob(jobId: string, jobData: any) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .update(jobData)
      .eq('id', jobId)
      .select()
      .single();
      
    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error(&quot;Error updating job:&quot;, error);
    throw new Error(error.message || &quot;Failed to update job&quot;);
  }
}

export async function getJobById(jobId: string) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', jobId)
      .single();
      
    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error(&quot;Error fetching job:&quot;, error);
    toast.error(&quot;Failed to load job details&quot;);
    return null;
  }
}
