
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======

// Initialize Supabase client
const _supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const _supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const _supabase = createClient(supabaseUrl, supabaseServiceKey);

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
<<<<<<< HEAD
    return new Response(null, { headers: corsHeaders })
=======
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.45.0&quot;;

// Initialize Supabase client
const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;)!;
const supabaseServiceKey = Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;)!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  try {
    // Call the database function to schedule retention emails
    const { data: scheduledCount, error: scheduleError } = await supabase.rpc(
<<<<<<< HEAD
      "schedule_retention_emails"
    ),
=======
      &quot;schedule_retention_emails&quot;
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    if (scheduleError) {
      throw new Error(`Failed to schedule retention emails: ${scheduleError.message}`)
    }

<<<<<<< HEAD
    // // // console.log(`Scheduled ${scheduledCount} retention emails`),
=======
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_// Call the database function to schedule retention emails
    const { data: scheduledCount, _error: scheduleError} = await supabase.rpc(_"schedule_retention_emails");

    if (scheduleError) {_throw new Error(`Failed to schedule retention emails: ${scheduleError.message}`);
    }

    
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Fetch pending retention email jobs
    const {_data: pendingJobs, _error: jobsError} = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "send_retention_email")
      .eq("status", "pending")
      .limit(50),
=======
    // console.log(`Scheduled ${scheduledCount} retention emails`);

    // Fetch pending retention email jobs
    const { data: pendingJobs, error: jobsError } = await supabase
      .from(&quot;scheduled_jobs&quot;)
      .select(&quot;id, payload&quot;)
      .eq(&quot;job_type&quot;, &quot;send_retention_email&quot;)
      .eq(&quot;status&quot;, &quot;pending&quot;)
      .limit(50);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`)
    }

    const processedJobs = [],
=======
    if (jobsError) {_throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`);
    }

    const _processedJobs = [];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    if (pendingJobs && pendingJobs.length > 0) {_for (const job of pendingJobs) {
        try {
          // Call the send-retention-email function for each job
<<<<<<< HEAD
          const reminderResponse = await fetch(
            `${supabaseUrl}/functions/v1/send-retention-email`,
            {
              method: &quot;POST&quot;,
              headers: {
                &quot;Content-Type&quot;: &quot;application/json&quot;,
                &quot;Authorization&quot;: `Bearer ${supabaseServiceKey}`},
              body: JSON.stringify(job)}
          ),

          if (!reminderResponse.ok) {
            const errorText = await reminderResponse.text(),
            console.error(`Failed to process job ${job.id}: ${errorText}`),
=======
          const _reminderResponse = await fetch(_`${supabaseUrl}/functions/v1/send-retention-email`, _{_method: "POST", _headers: {
                "Content-Type": "application/json", _"Authorization": `Bearer ${supabaseServiceKey}`}, _body: JSON.stringify(job)}
          );

          if (!reminderResponse.ok) {_const _errorText = await reminderResponse.text();
            
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            
            // Update job status to failed
            await supabase
              .from(&quot;scheduled_jobs&quot;)
              .update({
<<<<<<< HEAD
                status: "failed"})
<<<<<<< HEAD
              .eq("id", job.id)
=======
                status: &quot;failed&quot;})
              .eq(&quot;id&quot;, job.id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          } else {
            processedJobs.push(job.id)
          }
        } catch (error) {
          console.error(`Error processing job ${job.id}:`, error),
          
          // Update job status to failed
=======
              .eq("id", job.id);
          } else {_processedJobs.push(job.id);}
        } catch (error) {_// Update job status to failed
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          await supabase
            .from(&quot;scheduled_jobs&quot;)
            .update({
<<<<<<< HEAD
              status: "failed"})
            .eq("id", job.id)
=======
              status: &quot;failed&quot;})
            .eq(&quot;id&quot;, job.id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
      }
    }

    return new Response(
<<<<<<< HEAD
      JSON.stringify({
        message: &quot;Retention emails processed successfully&quot;,
        emails_scheduled: scheduledCount,
        emails_processed: processedJobs.length,
        job_ids: processedJobs}),
      {
        status: 200,
<<<<<<< HEAD
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
    console.error("Error in process-retention-emails function:", error),
=======
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
    );
  } catch (error) {
    console.error(&quot;Error in process-retention-emails function:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    return new Response(
      JSON.stringify({ 
        error: &quot;Internal server error&quot;, 
        details: error.message
      }),
      {
        status: 500,
<<<<<<< HEAD
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
=======
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
=======
      JSON.stringify({_message: "Retention emails processed successfully", _emails_scheduled: scheduledCount, _emails_processed: processedJobs.length, _job_ids: processedJobs}),
      {_status: 200, _headers: { "Content-Type": "application/json", _...corsHeaders}}
    );
  } catch (error) {_return new Response(
      JSON.stringify({ 
        error: "Internal server error", _details: error.message}),
      {_status: 500, _headers: { "Content-Type": "application/json", _...corsHeaders}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}),
