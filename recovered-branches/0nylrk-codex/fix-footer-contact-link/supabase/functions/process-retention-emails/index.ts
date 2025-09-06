
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
// Initialize Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  "Access-Control-Allow-Origin": "*";
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Call the database function to schedule retention emails
    const { data: scheduledCount, error: scheduleError } = await supabase && supabase.rpc(
      "schedule_retention_emails"
    );
    if (scheduleError) {
      throw new Error(`Failed to schedule retention emails: ${scheduleError && scheduleError.message}`)
    }
<<<<<<< HEAD
    console.log(`Scheduled ${scheduledCount} retention emails`);
=======

    console && console.log(`Scheduled ${scheduledCount} retention emails`);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // Fetch pending retention email jobs
    const { data: pendingJobs, error: jobsError } = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "send_retention_email")
      .eq("status", "pending")
      .limit(50);
    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError && jobsError.message}`)
    }
    const processedJobs = [];
    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        try {
          // Call the send-retention-email function for each job
          const reminderResponse = await fetch(
            `${supabaseUrl}/functions/v1/send-retention-email`;
            {
              method: "POST";
              headers: {
<<<<<<< HEAD
                "Content-Type": "application/json"
                "Authorization": `Bearer ${supabaseServiceKey}`}
              body: JSON.stringify(job)}
          );
          if (!reminderResponse.ok) {
            const errorText = await reminderResponse.text();
            console.error(`Failed to process job ${job.id}: ${errorText}`);
=======
                "Content-Type": "application/json",
                "Authorization": `Bearer ${supabaseServiceKey}`};
              body: JSON && JSON.stringify(job)}
          );

          if (!reminderResponse && reminderResponse.ok) {
            const errorText = await reminderResponse && reminderResponse.text();
            console && console.error(`Failed to process job ${job && job.id}: ${errorText}`);
            
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            // Update job status to failed
            await supabase
              .from("scheduled_jobs")
              .update({
                status: "failed"})
              .eq("id", job && job.id)
          } else {
            processedJobs && processedJobs.push(job && job.id)
          }
        } catch (error) {
<<<<<<< HEAD
          console.error(`Error processing job ${job.id}:`, error);
=======
          console && console.error(`Error processing job ${job && job.id}:`, error);
          
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
      JSON && JSON.stringify({
        message: "Retention emails processed successfully";
        emails_scheduled: scheduledCount;
<<<<<<< HEAD
        emails_processed: processedJobs.length
=======
        emails_processed: processedJobs && processedJobs.length,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        job_ids: processedJobs});
      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in process-retention-emails function:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error"
        details: error.message
=======
    console && console.error("Error in process-retention-emails function:", error);

    return new Response(
      JSON && JSON.stringify({ 
        error: "Internal server error", 
        details: error && error.message
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  }
});

