
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.7.1&quot;;

const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;)!;
const supabaseServiceKey = Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;)!;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;:
    &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req: Request) => {
  // Handle CORS
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, {
      status: 204,
      headers: corsHeaders});
  }
  
  try {
    const supabase = createClient(
      supabaseUrl,
      supabaseServiceKey
    );
    
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc(&quot;create_scheduled_reminders&quot;);
    
    if (error) {
      console.error(&quot;Failed to create scheduled reminders:&quot;, error);
      return new Response(
        JSON.stringify({ error: &quot;Failed to create scheduled reminders&quot;, details: error }),
        {
          status: 500,
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
      );
    }
    
    // Process pending reminder jobs
    const { data: pendingJobs, error: jobsError } = await supabase
      .from(&quot;scheduled_jobs&quot;)
      .select(&quot;id, payload&quot;)
      .eq(&quot;job_type&quot;, &quot;onboarding_reminder&quot;)
      .eq(&quot;status&quot;, &quot;pending&quot;)
      .lt(&quot;scheduled_for&quot;, new Date().toISOString());
    
    if (jobsError) {
      console.error(&quot;Failed to fetch pending jobs:&quot;, jobsError);
      return new Response(
        JSON.stringify({ error: &quot;Failed to fetch pending jobs&quot;, details: jobsError }),
        {
          status: 500,
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
      );
    }
    
    const processedJobs = [];
    
    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        // Call the send-onboarding-reminder function for each job
        const reminderResponse = await fetch(
          `${supabaseUrl}/functions/v1/send-onboarding-reminder`,
          {
            method: &quot;POST&quot;,
            headers: {
              &quot;Content-Type&quot;: &quot;application/json&quot;,
              &quot;Authorization&quot;: `Bearer ${supabaseServiceKey}`},
            body: JSON.stringify(job.payload)}
        );
        
        if (reminderResponse.ok) {
          // Update job status to completed
          const { error: updateError } = await supabase
            .from(&quot;scheduled_jobs&quot;)
            .update({
              status: &quot;completed&quot;,
              completed_at: new Date().toISOString()})
            .eq(&quot;id&quot;, job.id);
          
          if (updateError) {
            console.error(&quot;Failed to update job status:&quot;, updateError);
          } else {
            processedJobs.push(job.id);
          }
        } else {
          console.error(&quot;Failed to send reminder for job:&quot;, job.id);
          // Update job status to failed
          await supabase
            .from(&quot;scheduled_jobs&quot;)
            .update({
              status: &quot;failed&quot;})
            .eq(&quot;id&quot;, job.id);
        }
      }
    }
    
    return new Response(
      JSON.stringify({
        message: &quot;Reminders processed successfully&quot;,
        processed_jobs: processedJobs.length,
        job_ids: processedJobs}),
      {
        status: 200,
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: &quot;Internal server error&quot;, details: error.message }),
      {
        status: 500,
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
    );
  }
});
