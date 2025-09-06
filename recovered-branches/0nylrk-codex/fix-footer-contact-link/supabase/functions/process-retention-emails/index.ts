

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Call the database function to schedule retention emails
    const { data: scheduledCount, error: scheduleError } = await supabase && supabase.rpc(
      "schedule_retention_emails"

    // Fetch pending retention email jobs
    const { data: pendingJobs, error: jobsError } = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "send_retention_email")
      .eq("status", "pending")

    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        try {
          // Call the send-retention-email function for each job
          const reminderResponse = await fetch(
            `${supabaseUrl}/functions/v1/send-retention-email`,
            {
              method: "POST",
              headers: {

        try {
          // Call the send - retention - email function for each job;
          const reminder_response = await fetch (
            `${supabase_url}/functions / v1 / send - retention - email`;
            {
              method: "POST";
              headers: {

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

=======
          console && console.error(`Error processing job ${job && job.id}:`, error);
          

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
