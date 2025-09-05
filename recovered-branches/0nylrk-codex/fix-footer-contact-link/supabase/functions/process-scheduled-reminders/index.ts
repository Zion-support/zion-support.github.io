
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"},
=======
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.7.1&quot;;

const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;)!;
const supabaseServiceKey = Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;)!;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;:
    &quot;authorization, x-client-info, apikey, content-type&quot;};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

serve(async (req: Request) => {
  // Handle CORS
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, {
      status: 204,
      headers: corsHeaders})
  }
  
  try {
    const supabase = createClient(
      supabaseUrl,
      supabaseServiceKey
    ),
    
    // Run the database function to create scheduled reminders
<<<<<<< HEAD
    const { data, error } = await supabase.rpc("create_scheduled_reminders"),
    
    if (error) {
      console.error("Failed to create scheduled reminders:", error),
=======
    const { data, error } = await supabase.rpc(&quot;create_scheduled_reminders&quot;);
    
    if (error) {
      console.error(&quot;Failed to create scheduled reminders:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      return new Response(
        JSON.stringify({ error: &quot;Failed to create scheduled reminders&quot;, details: error }),
        {
          status: 500,
<<<<<<< HEAD
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
=======
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
      );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    // Process pending reminder jobs
    const { data: pendingJobs, error: jobsError } = await supabase
<<<<<<< HEAD
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "onboarding_reminder")
      .eq("status", "pending")
      .lt("scheduled_for", new Date().toISOString()),
    
    if (jobsError) {
      console.error("Failed to fetch pending jobs:", jobsError),
=======
      .from(&quot;scheduled_jobs&quot;)
      .select(&quot;id, payload&quot;)
      .eq(&quot;job_type&quot;, &quot;onboarding_reminder&quot;)
      .eq(&quot;status&quot;, &quot;pending&quot;)
      .lt(&quot;scheduled_for&quot;, new Date().toISOString());
    
    if (jobsError) {
      console.error(&quot;Failed to fetch pending jobs:&quot;, jobsError);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      return new Response(
        JSON.stringify({ error: &quot;Failed to fetch pending jobs&quot;, details: jobsError }),
        {
          status: 500,
<<<<<<< HEAD
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
=======
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
      );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    const processedJobs = [],
    
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
        ),
        
        if (reminderResponse.ok) {
          // Update job status to completed
          const { error: updateError } = await supabase
            .from(&quot;scheduled_jobs&quot;)
            .update({
              status: &quot;completed&quot;,
              completed_at: new Date().toISOString()})
<<<<<<< HEAD
            .eq("id", job.id),
          
          if (updateError) {
            console.error("Failed to update job status:", updateError)
=======
            .eq(&quot;id&quot;, job.id);
          
          if (updateError) {
            console.error(&quot;Failed to update job status:&quot;, updateError);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          } else {
            processedJobs.push(job.id)
          }
        } else {
<<<<<<< HEAD
          console.error("Failed to send reminder for job:", job.id),
=======
          console.error(&quot;Failed to send reminder for job:&quot;, job.id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          // Update job status to failed
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
      JSON.stringify({
        message: &quot;Reminders processed successfully&quot;,
        processed_jobs: processedJobs.length,
        job_ids: processedJobs}),
      {
        status: 200,
<<<<<<< HEAD
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
=======
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  } catch (error) {
    console.error(error),
    return new Response(
      JSON.stringify({ error: &quot;Internal server error&quot;, details: error.message }),
      {
        status: 500,
<<<<<<< HEAD
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
=======
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",;
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers":;
    "authorization, x-client-info, apikey, content-type"},;
serve(async (req: Request) => {;
  // Handle CORS;
  if (req.method === "OPTIONS") {;
    return new Response(null, {;
      status: 204,;
      headers: corsHeaders});
  }
;
  try {;
    const supabase = createClient(;
      supabaseUrl,;
      supabaseServiceKey;
    ),;
    // Run the database function to create scheduled reminders;
    const { data, error } = await supabase.rpc("create_scheduled_reminders"),;
    if (error) {;
      console.error("Failed to create scheduled reminders:", error),;
      return new Response(;
        JSON.stringify({ error: "Failed to create scheduled reminders", details: error }),;
        {;
          status: 500,;
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      );
    }
;
    // Process pending reminder jobs;
    const { data: pendingJobs, error: jobsError } = await supabase;
      .from("scheduled_jobs");
      .select("id, payload");
      .eq("job_type", "onboarding_reminder");
      .eq("status", "pending");
      .lt("scheduled_for", new Date().toISOString()),;
    if (jobsError) {;
      console.error("Failed to fetch pending jobs:", jobsError),;
      return new Response(;
        JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError }),;
        {;
          status: 500,;
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      );
    }
;
    const processedJobs = [],;
    if (pendingJobs && pendingJobs.length > 0) {;
      for (const job of pendingJobs) {;
        // Call the send-onboarding-reminder function for each job;
        const reminderResponse = await fetch(;
          `${supabaseUrl}/functions/v1/send-onboarding-reminder`,;
          {;
            method: "POST",;
            headers: {;
              "Content-Type": "application/json",;
              "Authorization": `Bearer ${supabaseServiceKey}`},;
            body: JSON.stringify(job.payload)}
        ),;
        if (reminderResponse.ok) {;
          // Update job status to completed;
          const { error: updateError } = await supabase;
            .from("scheduled_jobs");
            .update({;
              status: "completed",;
              completed_at: new Date().toISOString()});
            .eq("id", job.id),;
          if (updateError) {;
            console.error("Failed to update job status:", updateError);
          } else {;
            processedJobs.push(job.id);
          }
        } else {;
          console.error("Failed to send reminder for job:", job.id),;
          // Update job status to failed;
          await supabase;
            .from("scheduled_jobs");
            .update({;
              status: "failed"});
            .eq("id", job.id);
        }
      }
    }
;
    return new Response(;
      JSON.stringify({;
        message: "Reminders processed successfully",;
        processed_jobs: processedJobs.length,;
        job_ids: processedJobs}),;
      {;
        status: 200,;
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    );
  } catch (error) {;
    console.error(error),;
    return new Response(;
      JSON.stringify({ error: "Internal server error", details: error.message }),;
      {;
        status: 500,;
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
});