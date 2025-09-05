
<<<<<<< HEAD
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import { toast } from "sonner",
=======
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export async function createJob(jobData: any) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .insert([jobData])
      .select()
      .single(),
      
    if (error) throw error,
    return data
  } catch (error: any) {
<<<<<<< HEAD
    console.error("Error creating job:", error),
    throw new Error(error.message || "Failed to create job")
=======
    console.error(&quot;Error creating job:&quot;, error);
    throw new Error(error.message || &quot;Failed to create job&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}

export async function updateJob(jobId: string, jobData: any) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .update(jobData)
      .eq('id', jobId)
      .select()
      .single(),
      
    if (error) throw error,
    return data
  } catch (error: any) {
<<<<<<< HEAD
    console.error("Error updating job:", error),
    throw new Error(error.message || "Failed to update job")
=======
    console.error(&quot;Error updating job:&quot;, error);
    throw new Error(error.message || &quot;Failed to update job&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}

export async function getJobById(jobId: string) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', jobId)
      .single(),
      
    if (error) throw error,
    return data
  } catch (error: any) {
<<<<<<< HEAD
    console.error("Error fetching job:", error),
    toast.error("Failed to load job details"),
    return null
=======
    console.error(&quot;Error fetching job:&quot;, error);
    toast.error(&quot;Failed to load job details&quot;);
    return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
}
;