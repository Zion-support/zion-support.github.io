
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
=======

export async function createJob(_jobData: unknown) {_try {
    const { data, _error} = await supabase
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      .from('jobs')
      .insert([jobData])
      .select()
      .single(),
      
<<<<<<< HEAD
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
=======
    if (error) throw error;
    return data;
  } catch (error: unknown) {_throw new Error(error.message || "Failed to create job");}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export async function updateJob(_jobId: string, _jobData: unknown) {_try {
    const { data, _error} = await supabase
      .from('jobs')
      .update(jobData)
      .eq('id', jobId)
      .select()
      .single(),
      
<<<<<<< HEAD
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
=======
    if (error) throw error;
    return data;
  } catch (error: unknown) {_throw new Error(error.message || "Failed to update job");}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export async function getJobById(_jobId: string) {_try {
    const { data, _error} = await supabase
      .from('jobs')
      .select('*')
      .eq('id', jobId)
      .single(),
      
<<<<<<< HEAD
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
  }
=======
    if (error) throw error;
    return data;
  } catch (error: unknown) {_toast.error("Failed to load job details");
    return null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
