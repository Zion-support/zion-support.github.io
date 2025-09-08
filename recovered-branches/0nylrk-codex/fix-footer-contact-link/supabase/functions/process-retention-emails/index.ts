
// Initialize Supabase client



serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {

    const { data: scheduledCount, error: scheduleError } = await supabase && supabase.rpc(
      "schedule_retention_emails"










        try {


                "Authorization": `Bearer ${supabaseServiceKey}`};
              body: JSON && JSON.stringify(job)}
          );
          if (!reminderResponse && reminderResponse.ok) {
            const errorText = await reminderResponse && reminderResponse.text();
            console && console.error(`Failed to process job ${job && job.id}: ${errorText}`);
                "Content-Type": "application/json"
                "Authorization": `Bearer ${supabaseServiceKey}`}
              body: JSON.stringify(job)}
          );
          if (!reminderResponse.ok) {
            const errorText = await reminderResponse.text();
            console.error(`Failed to process job ${job.id}: ${errorText}`);
                "Content-Type": "application/json",
            


                status: "failed"})


        message: "Retention emails processed successfully",

        emails_scheduled: scheduledCount,
        emails_processed: processedJobs.length,
        job_ids: processedJobs}),








      });





const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }


;
          // Check condition
if ( {) {
  $2
}
            const error_text = await reminder_response.text ();
            console.error (`Failed to process job ${job.id}: ${error_text}`);
;



