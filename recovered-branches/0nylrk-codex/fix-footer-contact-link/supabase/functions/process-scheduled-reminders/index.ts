
<<<<<<< HEAD
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
=======
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":
<<<<<<< HEAD
    "authorization, x-client-info, apikey, content-type"}
=======
    "authorization, x-client-info, apikey, content-type"},

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
serve(async (req: Request) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {
    const supabase = createClient(
      supabaseUrl,
      supabaseServiceKey
<<<<<<< HEAD
    );
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc("create_scheduled_reminders");
=======
    ),
    
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc("create_scheduled_reminders"),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (error) {
      console.error("Failed to create scheduled reminders:", error),
      return new Response(
        JSON.stringify({ error: "Failed to create scheduled reminders", details: error }),
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
<<<<<<< HEAD
      .lt("scheduled_for", new Date().toISOString());
=======
      .lt("scheduled_for", new Date().toISOString()),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (jobsError) {
      console.error("Failed to fetch pending jobs:", jobsError),
      return new Response(
        JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError }),
        {
          status: 500
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
<<<<<<< HEAD
    const processedJobs = [];
=======
    
    const processedJobs = [],
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        // Call the send-onboarding-reminder function for each job
        const reminderResponse = await fetch(
          `${supabaseUrl}/functions/v1/send-onboarding-reminder`,
          {
            method: "POST",
            headers: {
<<<<<<< HEAD
              "Content-Type": "application/json"
              "Authorization": `Bearer ${supabaseServiceKey}`}
            body: JSON.stringify(job.payload)}
        );
=======
              "Content-Type": "application/json",
              "Authorization": `Bearer ${supabaseServiceKey}`},
            body: JSON.stringify(job.payload)}
        ),
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        if (reminderResponse.ok) {
          // Update job status to completed
          const { error: updateError } = await supabase
            .from("scheduled_jobs")
            .update({
              status: "completed"
              completed_at: new Date().toISOString()})
<<<<<<< HEAD
            .eq("id", job.id);
=======
            .eq("id", job.id),
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          if (updateError) {
            console.error("Failed to update job status:", updateError)
          } else {
            processedJobs.push(job.id)
          }
        } else {
          console.error("Failed to send reminder for job:", job.id),
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
<<<<<<< HEAD
        message: "Reminders processed successfully";
        processed_jobs: processedJobs.length
        job_ids: processedJobs});
=======
        message: "Reminders processed successfully",
        processed_jobs: processedJobs.length,
        job_ids: processedJobs}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
    console.error(error),
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
<<<<<<< HEAD
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
