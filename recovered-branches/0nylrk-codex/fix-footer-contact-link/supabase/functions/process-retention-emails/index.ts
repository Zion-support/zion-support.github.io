
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  "Access-Control-Allow-Origin": "*";
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Call the database function to schedule retention emails
    const { data: scheduledCount, error: scheduleError } = await supabase.rpc(
      "schedule_retention_emails"
<<<<<<< HEAD
    );
    if (scheduleError) {
      throw new Error(`Failed to schedule retention emails: ${scheduleError.message}`)
    }
    console.log(`Scheduled ${scheduledCount} retention emails`);
=======
    ),

    if (scheduleError) {
      throw new Error(`Failed to schedule retention emails: ${scheduleError.message}`)
    }

    // // // console.log(`Scheduled ${scheduledCount} retention emails`),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Fetch pending retention email jobs
    const { data: pendingJobs, error: jobsError } = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "send_retention_email")
      .eq("status", "pending")
<<<<<<< HEAD
      .limit(50);
    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`)
    }
    const processedJobs = [];
=======
      .limit(50),

    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`)
    }

    const processedJobs = [],

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        try {
          // Call the send-retention-email function for each job
          const reminderResponse = await fetch(
            `${supabaseUrl}/functions/v1/send-retention-email`,
            {
              method: "POST",
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
                "Authorization": `Bearer ${supabaseServiceKey}`},
              body: JSON.stringify(job)}
          ),

          if (!reminderResponse.ok) {
            const errorText = await reminderResponse.text(),
            console.error(`Failed to process job ${job.id}: ${errorText}`),
            
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
          console.error(`Error processing job ${job.id}:`, error);
=======
          console.error(`Error processing job ${job.id}:`, error),
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
        message: "Retention emails processed successfully";
        emails_scheduled: scheduledCount;
        emails_processed: processedJobs.length
        job_ids: processedJobs});
=======
        message: "Retention emails processed successfully",
        emails_scheduled: scheduledCount,
        emails_processed: processedJobs.length,
        job_ids: processedJobs}),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in process-retention-emails function:", error);
=======
    console.error("Error in process-retention-emails function:", error),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    return new Response(
      JSON.stringify({
        error: "Internal server error"
        details: error.message
      }),
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
<<<<<<< HEAD
<<<<<<< HEAD
  }
});

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    // Call the database function to schedule retention emails;
    const { data: scheduledCount, error: scheduleError } = await supabase.rpc(;
      "schedule_retention_emails";
    ),;
    if (scheduleError) {;
      throw new Error(`Failed to schedule retention emails: ${scheduleError.message}`);
    }
;
    // // // console.log(`Scheduled ${scheduledCount} retention emails`),;
    // Fetch pending retention email jobs;
    const { data: pendingJobs, error: jobsError } = await supabase;
      .from("scheduled_jobs");
      .select("id, payload");
      .eq("job_type", "send_retention_email");
      .eq("status", "pending");
      .limit(50),;
    if (jobsError) {;
      throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`);
    }
;
    const processedJobs = [],;
    if (pendingJobs && pendingJobs.length > 0) {;
      for (const job of pendingJobs) {;
        try {;
          // Call the send-retention-email function for each job;
          const reminderResponse = await fetch(;
            `${supabaseUrl}/functions/v1/send-retention-email`,;
            {;
              method: "POST",;
              headers: {;
                "Content-Type": "application/json",;
                "Authorization": `Bearer ${supabaseServiceKey}`},;
              body: JSON.stringify(job)}
          ),;
          if (!reminderResponse.ok) {;
            const errorText = await reminderResponse.text(),;
            console.error(`Failed to process job ${job.id}: ${errorText}`),;
            // Update job status to failed;
            await supabase;
              .from("scheduled_jobs");
              .update({;
                status: "failed"});
              .eq("id", job.id);
          } else {;
            processedJobs.push(job.id);
          }
        } catch (error) {;
          console.error(`Error processing job ${job.id}:`, error),;
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
        message: "Retention emails processed successfully",;
        emails_scheduled: scheduledCount,;
        emails_processed: processedJobs.length,;
        job_ids: processedJobs}),;
      {;
        status: 200,;
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    );
  } catch (error) {;
    console.error("Error in process-retention-emails function:", error),;
    return new Response(;
      JSON.stringify({;
        error: "Internal server error",;
        details: error.message;
      }),;
      {;
        status: 500,;
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
