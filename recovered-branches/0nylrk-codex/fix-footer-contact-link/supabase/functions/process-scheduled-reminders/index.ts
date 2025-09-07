
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const supabaseUrl = $2;
const supabaseServiceKey = $2;
const corsHeaders = $2;
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"},

serve(async (req: Request) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders})
  }
  try {
    const supabase = createClient($2);
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc($2);
    if (error) {
      console.error($2);
      return new Response($2);
        {
          status: 500
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    // Process pending reminder jobs
    const { data: pendingJobs, error: jobsError} = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "onboarding_reminder")
      .eq("status", "pending")
      .lt("scheduled_for", new Date().toISOString()),
    
    if (jobsError) {
      console.error($2);
      return new Response($2);
        {
          status: 500
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    
    const processedJobs = $2;
    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        // Call the send-onboarding-reminder function for each job
        const reminderResponse = $2;
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              "Authorization": `Bearer ${supabaseServiceKey}`}
            body: JSON.stringify(job.payload)}
        ),
        
        if (reminderResponse.ok) {
          // Update job status to completed
          const { error: updateError} = await supabase
            .from("scheduled_jobs")
            .update({
              status: "completed"
              completed_at: new Date().toISOString()})
            .eq($2);
          if (updateError) {
            console.error("Failed to update job status:", updateError)
          } else {
            processedJobs.push(job.id)
          }
        } else {
          console.error($2);
          // Update job status to failed
          await supabase
            .from("scheduled_jobs")
            .update({
              status: "failed"})
            .eq("id", job.id)
        }
      }
    }
    
    return new Response($2);
      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
    console.error($2);
    return new Response($2);
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  }
}),
