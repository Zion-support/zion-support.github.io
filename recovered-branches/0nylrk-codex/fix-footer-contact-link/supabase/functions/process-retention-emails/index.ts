
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
// Initialize Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  "Access-Control-Allow-Origin": "*";
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

<<<<<<< HEAD
<<<<<<< HEAD
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Call the database function to schedule retention emails
<<<<<<< HEAD
<<<<<<< HEAD

=======
    const { data: scheduledCount, error: scheduleError } = await supabase && supabase.rpc(
      "schedule_retention_emails"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    ),


    console && console.log(`Scheduled ${scheduledCount} retention emails`);


    // // // console.log(`Scheduled ${scheduledCount} retention emails`),



<<<<<<< HEAD
    );
    if (scheduleError) {
      throw new Error(`Failed to schedule retention emails: ${scheduleError && scheduleError.message}`)
    }
    console && console.log(`Scheduled ${scheduledCount} retention emails`);
    const { data: scheduledCount, error: scheduleError } = await supabase.rpc(
      "schedule_retention_emails"
=======
    const { data: scheduledCount, error: scheduleError } = await supabase && supabase.rpc(
      "schedule_retention_emails"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
    if (scheduleError) {
      throw new Error(`Failed to schedule retention emails: ${scheduleError.message}`)
    }
    console.log(`Scheduled ${scheduledCount} retention emails`);
    ),

<<<<<<< HEAD
    if (scheduleError) {
      throw new Error(`Failed to schedule retention emails: ${scheduleError.message}`)
    }

    // // // console.log(`Scheduled ${scheduledCount} retention emails`),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    console && console.log(`Scheduled ${scheduledCount} retention emails`);


    // // // console.log(`Scheduled ${scheduledCount} retention emails`),

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Fetch pending retention email jobs
    const { data: pendingJobs, error: jobsError } = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "send_retention_email")
      .eq("status", "pending")
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .limit(50);
    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`)
    }
    const processedJobs = [];
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .limit(50),

    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`)
    }

    const processedJobs = [],

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


      .limit(50),

    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`)
    }

    const processedJobs = [],

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
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
        try {
          // Call the send - retention - email function for each job;
          const reminder_response = await fetch (
            `${supabase_url}/functions / v1 / send - retention - email`;
            {
              method: "POST";
              headers: {


                "Content-Type": "application/json",
                "Authorization": `Bearer ${supabaseServiceKey}`};
              body: JSON && JSON.stringify(job)}
          );
          if (!reminderResponse && reminderResponse.ok) {
            const errorText = await reminderResponse && reminderResponse.text();
            console && console.error(`Failed to process job ${job && job.id}: ${errorText}`);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
          if (!reminderResponse.ok) {
            const errorText = await reminderResponse.text(),
            console.error(`Failed to process job ${job.id}: ${errorText}`),
            
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


                "Content-Type": "application/json",
                "Authorization": `Bearer ${supabaseServiceKey}`};
              body: JSON && JSON.stringify(job)}
          );

          if (!reminderResponse && reminderResponse.ok) {
            const errorText = await reminderResponse && reminderResponse.text();
            console && console.error(`Failed to process job ${job && job.id}: ${errorText}`);
            
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            // Update job status to failed
            await supabase
              .from("scheduled_jobs")
              .update({
                status: "failed"})
<<<<<<< HEAD
<<<<<<< HEAD
          console && console.error(`Error processing job ${job && job.id}:`, error);
          


          console.error(`Error processing job ${job.id}:`, error),
          

          console && console.error(`Error processing job ${job && job.id}:`, error);
              .eq("id", job.id)
          } else {
            processedJobs.push(job.id)
          }
        } catch (error) {
          console.error(`Error processing job ${job.id}:`, error);
          console.error(`Error processing job ${job.id}:`, error),
          
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              .eq("id", job && job.id)
          } else {
            processedJobs && processedJobs.push(job && job.id)
          }
        } catch (error) {
<<<<<<< HEAD

          console && console.error(`Error processing job ${job && job.id}:`, error);
          

=======

          console.error(`Error processing job ${job.id}:`, error),
          

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          console.error(`Error processing job ${job.id}:`, error);
          console.error(`Error processing job ${job.id}:`, error),
          
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          // Update job status to failed
          await supabase
            .from("scheduled_jobs")
            .update({
              status: "failed"})
<<<<<<< HEAD
<<<<<<< HEAD
            .eq("id", job.id)
=======
            .eq("id", job && job.id)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            .eq("id", job && job.id)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      }
    }
    return new Response(
<<<<<<< HEAD

        emails_processed: processedJobs && processedJobs.length,

<<<<<<< HEAD
      JSON && JSON.stringify({
        message: "Retention emails processed successfully";
        emails_scheduled: scheduledCount;
        emails_processed: processedJobs && processedJobs.length,
        job_ids: processedJobs});
      JSON.stringify({

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      JSON.stringify({
        message: "Retention emails processed successfully";
        emails_scheduled: scheduledCount;
        emails_processed: processedJobs.length
        job_ids: processedJobs});
<<<<<<< HEAD
=======
        job_ids: processedJobs});
=======
      JSON.stringify({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        message: "Retention emails processed successfully",
        emails_scheduled: scheduledCount,
        emails_processed: processedJobs.length,
        job_ids: processedJobs}),
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
<<<<<<< HEAD


    console.error("Error in process-retention-emails function:", error),



<<<<<<< HEAD
    console.error("Error in process-retention-emails function:", error);
    console.error("Error in process-retention-emails function:", error),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    console.error("Error in process-retention-emails function:", error);
    console.error("Error in process-retention-emails function:", error),

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return new Response(
      JSON.stringify({
        error: "Internal server error"
        details: error.message
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    console && console.error("Error in process-retention-emails function:", error);
=======
=======
    console && console.error("Error in process-retention-emails function:", error);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return new Response(
      JSON && JSON.stringify({ 
        error: "Internal server error", 
        details: error && error.message
<<<<<<< HEAD
      });
<<<<<<< HEAD
      }),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
<<<<<<< HEAD
<<<<<<< HEAD
  }
});
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                "Content - Type": "application / json",
                "Authorization": `Bearer ${supabaseServiceKey}`}
              body: JSON.stringify (job)}
          );
<<<<<<< HEAD


<<<<<<< HEAD
  }
});

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD


  }
});
;

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
