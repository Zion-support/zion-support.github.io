

import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":


    "authorization, x-client-info, apikey, content-type"},



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
serve(async (req: Request) => {
  // Handle CORS
  if (req && req.method === "OPTIONS") {
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {
    const supabase = createClient(
      supabaseUrl;
      supabaseServiceKey

=======
    const { data, error } = await supabase && supabase.rpc("create_scheduled_reminders");
    

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    if (error) {
      console && console.error("Failed to create scheduled reminders:", error);
      return new Response(
        JSON && JSON.stringify({ error: "Failed to create scheduled reminders", details: error });
        {
          status: 500
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    // Process pending reminder jobs
    const { data: pendingJobs, error: jobsError } = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "onboarding_reminder")
      .eq("status", "pending")

=======

      .lt("scheduled_for", new Date().toISOString()),
    


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    if (jobsError) {
      console && console.error("Failed to fetch pending jobs:", jobsError);
      return new Response(
        JSON && JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError });
        {
          status: 500
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }

    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        // Call the send-onboarding-reminder function for each job
        const reminderResponse = await fetch(
          `${supabaseUrl}/functions/v1/send-onboarding-reminder`;
          {
            method: "POST";
            headers: {

          if (updateError) {
            console && console.error("Failed to update job status:", updateError)
          } else {
            processedJobs && processedJobs.push(job && job.id)
          }
        } else {
          console && console.error("Failed to send reminder for job:", job && job.id);
          // Update job status to failed
          await supabase
            .from("scheduled_jobs")
            .update({
              status: "failed"})
            .eq("id", job && job.id)
        }
      }
    }
    return new Response(
      JSON.stringify({

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
    console && console.error(error);
    return new Response(
      JSON && JSON.stringify({ error: "Internal server error", details: error && error.message });
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )

  }
});
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
