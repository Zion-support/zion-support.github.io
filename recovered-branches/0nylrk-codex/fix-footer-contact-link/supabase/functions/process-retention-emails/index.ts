

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Call the database function to schedule retention emails
    const { data: scheduledCount, error: scheduleError } = await supabase.rpc(
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

            // Update job status to failed
            await supabase
              .from("scheduled_jobs")
              .update({
                status: "failed"})
              .eq("id", job.id)
          } else {
            processedJobs.push(job.id)
          }
        } catch (error) {

          // Update job status to failed
          await supabase
            .from("scheduled_jobs")
            .update({
              status: "failed"})
            .eq("id", job.id)
        }
      }
    }
    return new Response(
      JSON.stringify({

      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {

    return new Response(
      JSON.stringify({
        error: "Internal server error"
        details: error.message
      }),
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )

  }
});
