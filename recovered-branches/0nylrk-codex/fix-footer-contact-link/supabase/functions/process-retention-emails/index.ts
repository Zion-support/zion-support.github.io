

// Initialize Supabase client
const _supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const _supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const _supabase = createClient(supabaseUrl, supabaseServiceKey);

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_// Call the database function to schedule retention emails
    const { data: scheduledCount, _error: scheduleError} = await supabase.rpc(_"schedule_retention_emails");

    if (scheduleError) {_throw new Error(`Failed to schedule retention emails: ${scheduleError.message}`);
    }

    

    // Fetch pending retention email jobs
    const {_data: pendingJobs, _error: jobsError} = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "send_retention_email")
      .eq("status", "pending")
      .limit(50);

    if (jobsError) {_throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`);
    }

    const _processedJobs = [];

    if (pendingJobs && pendingJobs.length > 0) {_for (const job of pendingJobs) {
        try {
          // Call the send-retention-email function for each job
          const _reminderResponse = await fetch(_`${supabaseUrl}/functions/v1/send-retention-email`, _{_method: "POST", _headers: {
                "Content-Type": "application/json", _"Authorization": `Bearer ${supabaseServiceKey}`}, _body: JSON.stringify(job)}
          );

          if (!reminderResponse.ok) {_const _errorText = await reminderResponse.text();
            
            
            // Update job status to failed
            await supabase
              .from("scheduled_jobs")
              .update({
                status: "failed"})
              .eq("id", job.id);
          } else {_processedJobs.push(job.id);}
        } catch (error) {_// Update job status to failed
          await supabase
            .from("scheduled_jobs")
            .update({
              status: "failed"})
            .eq("id", job.id);
        }
      }
    }

    return new Response(
      JSON.stringify({_message: "Retention emails processed successfully", _emails_scheduled: scheduledCount, _emails_processed: processedJobs.length, _job_ids: processedJobs}),
      {_status: 200, _headers: { "Content-Type": "application/json", _...corsHeaders}}
    );
  } catch (error) {_return new Response(
      JSON.stringify({ 
        error: "Internal server error", _details: error.message}),
      {_status: 500, _headers: { "Content-Type": "application/json", _...corsHeaders}}
    );
  }
});
