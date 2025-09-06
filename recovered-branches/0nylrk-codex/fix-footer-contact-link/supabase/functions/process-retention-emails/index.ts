
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
// Initialize Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,

=======

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  "Access-Control-Allow-Origin": "*";
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
<<<<<<< HEAD
=======


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
=======
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Call the database function to schedule retention emails
<<<<<<< HEAD
    const { data: scheduledCount, error: scheduleError } = await supabase && supabase.rpc(
      "schedule_retention_emails"

=======
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    ),


    console && console.log(`Scheduled ${scheduledCount} retention emails`);


    // // // console.log(`Scheduled ${scheduledCount} retention emails`),



<<<<<<< HEAD
=======
    );
    if (scheduleError) {
      throw new Error(`Failed to schedule retention emails: ${scheduleError && scheduleError.message}`)
    }
    console && console.log(`Scheduled ${scheduledCount} retention emails`);
    const { data: scheduledCount, error: scheduleError } = await supabase.rpc(
      "schedule_retention_emails"
    );
    if (scheduleError) {
      throw new Error(`Failed to schedule retention emails: ${scheduleError.message}`)
    }
    console.log(`Scheduled ${scheduledCount} retention emails`);
    ),

    if (scheduleError) {
      throw new Error(`Failed to schedule retention emails: ${scheduleError.message}`)
    }

    // // // console.log(`Scheduled ${scheduledCount} retention emails`),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // Fetch pending retention email jobs
    const { data: pendingJobs, error: jobsError } = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "send_retention_email")
      .eq("status", "pending")
<<<<<<< HEAD


=======
      .limit(50);
    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`)
    }
    const processedJobs = [];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      .limit(50),

    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`)
    }

    const processedJobs = [],

<<<<<<< HEAD
=======
    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        try {
          // Call the send-retention-email function for each job
          const reminderResponse = await fetch(
            `${supabaseUrl}/functions/v1/send-retention-email`,
            {
              method: "POST",
              headers: {


      .limit(50),

    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`)
    }

    const processedJobs = [],

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
=======
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.45.0';
// Initialize Supabase client;
const supabase_url = Deno.env.get ("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = create_client (supabase_url, supabaseServiceKey);
;
const cors_headers = {
  "Access - Control - Allow - Origin": "*";
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    // Call the database function to schedule retention emails;
    const { data: scheduled_count, error: schedule_error } = await supabase.rpc (
      "schedule_retention_emails");
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Failed to schedule retention emails: ${schedule_error.message}`);
    }
    console.log (`Scheduled ${scheduled_count} retention emails`);
;
    // Fetch pending retention email jobs;
    const { data: pending_jobs, error: jobs_error } = await supabase;
      .from ("scheduled_jobs");
      .select ("id, payload");
      .eq ("job_type", "send_retention_email");
      .eq ("status", "pending");
      .limit (50);
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Failed to fetch pending jobs: ${jobs_error.message}`);
    }
    const processed_jobs = [];
;
    // Check condition
if ( {) {
  $2
}
      for (const job of pending_jobs) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        try {
          // Call the send - retention - email function for each job;
          const reminder_response = await fetch (
            `${supabase_url}/functions / v1 / send - retention - email`;
            {
              method: "POST";
              headers: {
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


                "Content-Type": "application/json",
                "Authorization": `Bearer ${supabaseServiceKey}`};
              body: JSON && JSON.stringify(job)}
          );

          if (!reminderResponse && reminderResponse.ok) {
            const errorText = await reminderResponse && reminderResponse.text();
            console && console.error(`Failed to process job ${job && job.id}: ${errorText}`);
<<<<<<< HEAD
            



=======
                "Content-Type": "application/json"
                "Authorization": `Bearer ${supabaseServiceKey}`}
              body: JSON.stringify(job)}
          );
          if (!reminderResponse.ok) {
            const errorText = await reminderResponse.text();
            console.error(`Failed to process job ${job.id}: ${errorText}`);
                "Content-Type": "application/json",
                "Authorization": `Bearer ${supabaseServiceKey}`},
              body: JSON.stringify(job)}
          ),

          if (!reminderResponse.ok) {
            const errorText = await reminderResponse.text(),
            console.error(`Failed to process job ${job.id}: ${errorText}`),
            
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            // Update job status to failed
            await supabase
              .from("scheduled_jobs")
              .update({
                status: "failed"})
<<<<<<< HEAD
              .eq("id", job && job.id)
          } else {
            processedJobs && processedJobs.push(job && job.id)
          }
        } catch (error) {

          console && console.error(`Error processing job ${job && job.id}:`, error);
          

=======
=======
          console && console.error(`Error processing job ${job && job.id}:`, error);
          

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          console.error(`Error processing job ${job.id}:`, error),
          

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          console && console.error(`Error processing job ${job && job.id}:`, error);
              .eq("id", job.id)
          } else {
            processedJobs.push(job.id)
          }
        } catch (error) {
          console.error(`Error processing job ${job.id}:`, error);
          console.error(`Error processing job ${job.id}:`, error),
          
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          // Update job status to failed
          await supabase
            .from("scheduled_jobs")
            .update({
              status: "failed"})
<<<<<<< HEAD
            .eq("id", job && job.id)
=======
            .eq("id", job.id)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        }
      }
    }
    return new Response(

        emails_processed: processedJobs && processedJobs.length,

<<<<<<< HEAD
=======
      JSON && JSON.stringify({
        message: "Retention emails processed successfully";
        emails_scheduled: scheduledCount;
        emails_processed: processedJobs && processedJobs.length,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        job_ids: processedJobs});
      JSON.stringify({

<<<<<<< HEAD
=======
      JSON.stringify({
        message: "Retention emails processed successfully";
        emails_scheduled: scheduledCount;
        emails_processed: processedJobs.length
        job_ids: processedJobs});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        message: "Retention emails processed successfully",
        emails_scheduled: scheduledCount,
        emails_processed: processedJobs.length,
        job_ids: processedJobs}),
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {


    console.error("Error in process-retention-emails function:", error),



<<<<<<< HEAD
=======
    console.error("Error in process-retention-emails function:", error);
    console.error("Error in process-retention-emails function:", error),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return new Response(
      JSON.stringify({
        error: "Internal server error"
        details: error.message
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    console && console.error("Error in process-retention-emails function:", error);

    return new Response(
      JSON && JSON.stringify({ 
        error: "Internal server error", 
        details: error && error.message
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
<<<<<<< HEAD
=======
      }),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
<<<<<<< HEAD

=======
  }
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                "Content - Type": "application / json",
                "Authorization": `Bearer ${supabaseServiceKey}`}
              body: JSON.stringify (job)}
          );


<<<<<<< HEAD
=======
=======
  }
});

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

;
          // Check condition
if ( {) {
  $2
}
            const error_text = await reminder_response.text ();
            console.error (`Failed to process job ${job.id}: ${error_text}`);
;
            // Update job status to failed;
            await supabase;
              .from ("scheduled_jobs");
              .update ({
                status: "failed"});
              .eq ("id", job.id);
          } else {
            processed_jobs.push (job.id);
          }
        } catch (error) {
          console.error (`Error processing job ${job.id}:`, error);
;
          // Update job status to failed;
          await supabase;
            .from ("scheduled_jobs");
            .update ({
              status: "failed"});
            .eq ("id", job.id);
        }
      }
    }
    return new Response (
      JSON.stringify ({
        message: "Retention emails processed successfully";
        emails_scheduled: scheduled_count;
        emails_processed: processed_jobs.length,
        job_ids: processed_jobs});
      {
        status: 200,
        headers: { "Content - Type": "application / json", ...cors_headers }}
    );
  } catch (error) {
    console.error ("Error in process - retention - emails function:", error);
;
    return new Response (
      JSON.stringify ({
        error: "Internal server error",
        details: error.message;
      });
      {
        status: 500,
        headers: { "Content - Type": "application / json", ...cors_headers }}
    );
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



  }
});
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0",;
;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    // Call the database function to schedule retention emails;
    const { data:scheduledCount, error:scheduleError } = await supabase.rpc(;
      "schedule_retention_emails";
    ),;
;
    if (scheduleError) {;
      throw new Error(`Failed to schedule retention emails:${scheduleError.message}`),;
    }
;
    // // // console.log(`Scheduled ${scheduledCount} retention emails`),;
;
    // Fetch pending retention email jobs;
    const { data:pendingJobs, error:jobsError } = await supabase;
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
  }
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
