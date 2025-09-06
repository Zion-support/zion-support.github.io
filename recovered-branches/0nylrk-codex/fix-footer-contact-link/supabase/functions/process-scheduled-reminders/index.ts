
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
=======
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;


>>>>>>> main
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
=======
<<<<<<< HEAD
=======

>>>>>>> main
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":


    "authorization, x-client-info, apikey, content-type"},



serve(async (req: Request) => {
  // Handle CORS
  if (req && req.method === "OPTIONS") {
>>>>>>> main
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {
    const supabase = createClient(
<<<<<<< HEAD
      supabaseUrl,
      supabaseServiceKey
<<<<<<< HEAD
    );
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc("create_scheduled_reminders");
=======
=======
      supabaseUrl;
      supabaseServiceKey

    const { data, error } = await supabase && supabase.rpc("create_scheduled_reminders");
    

=======

>>>>>>> main
    ),
    
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc("create_scheduled_reminders"),
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (error) {
      console.error("Failed to create scheduled reminders:", error),
      return new Response(
        JSON.stringify({ error: "Failed to create scheduled reminders", details: error }),
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    if (error) {
      console && console.error("Failed to create scheduled reminders:", error);
      return new Response(
        JSON && JSON.stringify({ error: "Failed to create scheduled reminders", details: error });
>>>>>>> main
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
<<<<<<< HEAD
      .lt("scheduled_for", new Date().toISOString());
=======
      .lt("scheduled_for", new Date().toISOString()),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (jobsError) {
      console.error("Failed to fetch pending jobs:", jobsError),
      return new Response(
        JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError }),
=======


      .lt("scheduled_for", new Date().toISOString()),
    


    if (jobsError) {
      console && console.error("Failed to fetch pending jobs:", jobsError);
      return new Response(
        JSON && JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError });
>>>>>>> main
        {
          status: 500
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
<<<<<<< HEAD
<<<<<<< HEAD
    const processedJobs = [];
=======
    
    const processedJobs = [],
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


    
    const processedJobs = [],
    


>>>>>>> main
    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        // Call the send-onboarding-reminder function for each job
        const reminderResponse = await fetch(
<<<<<<< HEAD
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
=======
          `${supabaseUrl}/functions/v1/send-onboarding-reminder`;
          {
            method: "POST";
            headers: {

=======


              "Content-Type": "application/json",
              "Authorization": `Bearer ${supabaseServiceKey}`};
            body: JSON && JSON.stringify(job && job.payload)}
        );
        


        if (reminderResponse.ok) {

>>>>>>> main
          // Update job status to completed
          const { error: updateError } = await supabase
            .from("scheduled_jobs")
            .update({
              status: "completed"
              completed_at: new Date().toISOString()})
<<<<<<< HEAD
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
=======

            .eq("id", job && job.id);
          

=======

            .eq("id", job.id),
          

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          if (updateError) {
            console && console.error("Failed to update job status:", updateError)
          } else {
            processedJobs && processedJobs.push(job && job.id)
          }
        } else {
          console && console.error("Failed to send reminder for job:", job && job.id);
>>>>>>> main
          // Update job status to failed
          await supabase
            .from("scheduled_jobs")
            .update({
              status: "failed"})
<<<<<<< HEAD
            .eq("id", job.id)
=======
            .eq("id", job && job.id)
>>>>>>> main
        }
      }
    }
    return new Response(
<<<<<<< HEAD
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
=======

        processed_jobs: processedJobs && processedJobs.length,

        job_ids: processedJobs});
=======
      JSON.stringify({

        message: "Reminders processed successfully",
        processed_jobs: processedJobs.length,
        job_ids: processedJobs}),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
<<<<<<< HEAD
    console.error(error),
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
=======
    console && console.error(error);
    return new Response(
      JSON && JSON.stringify({ error: "Internal server error", details: error && error.message });
>>>>>>> main
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }
});

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.7.1';
const supabase_url = Deno.env.get ("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY")!;
;
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers":;
    "authorization, x - client - info, apikey, content - type"}
;
serve (async (req: Request) => {
=======


>>>>>>> main
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
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

  // Handle CORS;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, {
      status: 204,
      headers: cors_headers});
  }
  try {
    const supabase = create_client (
      supabase_url;
      supabaseServiceKey);
;
    // Run the database function to create scheduled reminders;
    const { data, error } = await supabase.rpc ("create_scheduled_reminders");
;
    // Check condition
if ( {) {
  $2
}
      console.error ("Failed to create scheduled reminders:", error);
      return new Response (
        JSON.stringify ({ error: "Failed to create scheduled reminders", details: error });
        {
          status: 500,
          headers: { "Content - Type": "application / json", ...cors_headers }}
      );
    }
    // Process pending reminder jobs;
    const { data: pending_jobs, error: jobs_error } = await supabase;
      .from ("scheduled_jobs");
      .select ("id, payload");
      .eq ("job_type", "onboarding_reminder");
      .eq ("status", "pending");
      .lt ("scheduled_for", new Date ().toISOString ());
;
    // Check condition
if ( {) {
  $2
}
      console.error ("Failed to fetch pending jobs:", jobs_error);
      return new Response (
        JSON.stringify ({ error: "Failed to fetch pending jobs", details: jobs_error });
        {
          status: 500,
          headers: { "Content - Type": "application / json", ...cors_headers }}
      );
    }
    const processed_jobs = [];
;
    // Check condition
if ( {) {
  $2
}
      for (const job of pending_jobs) {
        // Call the send - onboarding - reminder function for each job;
        const reminder_response = await fetch (
          `${supabase_url}/functions / v1 / send - onboarding - reminder`;
          {
            method: "POST";
            headers: {
              "Content - Type": "application / json",
              "Authorization": `Bearer ${supabaseServiceKey}`}
            body: JSON.stringify (job.payload)}
        );
;
        // Check condition
if ( {) {
  $2
}
          // Update job status to completed;
          const { error: update_error } = await supabase;
            .from ("scheduled_jobs");
            .update ({
              status: "completed",
              completed_at: new Date ().toISOString ()});
            .eq ("id", job.id);
;
          // Check condition
if ( {) {
  $2
}
            console.error ("Failed to update job status:", update_error);
          } else {
            processed_jobs.push (job.id);
          }
        } else {
          console.error ("Failed to send reminder for job:", job.id);
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
        message: "Reminders processed successfully";
        processed_jobs: processed_jobs.length,
        job_ids: processed_jobs});
      {
        status: 200,
        headers: { "Content - Type": "application / json", ...cors_headers }}
    );
  } catch (error) {
    console.error (error);
    return new Response (
      JSON.stringify ({ error: "Internal server error", details: error.message });
      {
        status: 500,
        headers: { "Content - Type": "application / json", ...cors_headers }}
    );




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
