<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Initialize Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,

<<<<<<< HEAD
=======

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  "Access-Control-Allow-Origin": "*";
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
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
=======
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Call the database function to schedule retention emails
<<<<<<< HEAD
<<<<<<< HEAD
    const { data: scheduledCount, error: scheduleError } = await supabase && supabase.rpc(
      "schedule_retention_emails"

=======
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    ),


    console && console.log(`Scheduled ${scheduledCount} retention emails`);


    // // // console.log(`Scheduled ${scheduledCount} retention emails`),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Fetch pending retention email jobs
    const { data: pendingJobs, error: jobsError } = await supabase
      .from("scheduled_jobs")
      .select("id, payload")
      .eq("job_type", "send_retention_email")
      .eq("status", "pending")
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
      .limit(50);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError && jobsError.message}`)
    }
<<<<<<< HEAD
    const processedJobs = [];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      .limit(50),

    if (jobsError) {
      throw new Error(`Failed to fetch pending jobs: ${jobsError.message}`)
    }

    const processedJobs = [],
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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

<<<<<<< HEAD
        try {
          // Call the send-retention-email function for each job
          const reminderResponse = await fetch(
            `${supabaseUrl}/functions/v1/send-retention-email`,
            {
              method: "POST",
              headers: {
=======

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
=======
    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        try {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          // Call the send - retention - email function for each job;
          const reminder_response = await fetch (
            `${supabase_url}/functions / v1 / send - retention - email`;
            {
              method: "POST";
              headers: {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


                "Content-Type": "application/json",
                "Authorization": `Bearer ${supabaseServiceKey}`};
              body: JSON && JSON.stringify(job)}
          );

          if (!reminderResponse && reminderResponse.ok) {
            const errorText = await reminderResponse && reminderResponse.text();
            console && console.error(`Failed to process job ${job && job.id}: ${errorText}`);
<<<<<<< HEAD
<<<<<<< HEAD
            



=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
=======
          if (!reminderResponse.ok) {
            const errorText = await reminderResponse.text(),
            console.error(`Failed to process job ${job.id}: ${errorText}`),
            
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            // Update job status to failed
            await supabase
              .from("scheduled_jobs")
              .update({
                status: "failed"})
<<<<<<< HEAD
<<<<<<< HEAD
              .eq("id", job && job.id)
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          } else {
            processedJobs && processedJobs.push(job && job.id)
          }
        } catch (error) {
<<<<<<< HEAD

=======
          console.error(`Error processing job ${job.id}:`, error);
          console.error(`Error processing job ${job.id}:`, error),
          
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          // Update job status to failed
          await supabase
            .from("scheduled_jobs")
            .update({
              status: "failed"})
<<<<<<< HEAD
<<<<<<< HEAD
            .eq("id", job && job.id)
=======
            .eq("id", job.id)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            .eq("id", job && job.id)
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        }
      }
    }
    return new Response(
<<<<<<< HEAD

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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
<<<<<<< HEAD
=======
<<<<<<< HEAD


    console.error("Error in process-retention-emails function:", error),



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    console.error("Error in process-retention-emails function:", error);
    console.error("Error in process-retention-emails function:", error),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return new Response(
      JSON.stringify({
        error: "Internal server error"
        details: error.message
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      });
<<<<<<< HEAD
=======
      }),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
<<<<<<< HEAD
  }
});
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
  }
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                "Content - Type": "application / json",
                "Authorization": `Bearer ${supabaseServiceKey}`}
              body: JSON.stringify (job)}
          );
<<<<<<< HEAD


<<<<<<< HEAD
=======
=======
  }
});

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



  }
});
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
