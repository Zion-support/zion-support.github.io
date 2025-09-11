

<<<<<<< HEAD
<<<<<<< HEAD
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;




import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;


import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
<<<<<<< HEAD



<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"}
    "authorization, x-client-info, apikey, content-type"},

serve(async (req: Request) => {
  // Handle CORS
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  if (req && req.method === "OPTIONS") {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {
    const supabase = createClient(
<<<<<<< HEAD
<<<<<<< HEAD
=======
      supabaseUrl;
      supabaseServiceKey

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const { data, error } = await supabase && supabase.rpc("create_scheduled_reminders");
    


<<<<<<< HEAD
      supabaseUrl,
      supabaseServiceKey
    );
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc("create_scheduled_reminders");
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      supabaseUrl;
      supabaseServiceKey
    );
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc("create_scheduled_reminders");
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ),
    
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc("create_scheduled_reminders"),
    
<<<<<<< HEAD
<<<<<<< HEAD
    );
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase && supabase.rpc("create_scheduled_reminders");
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (error) {
      console && console.error("Failed to create scheduled reminders:", error);
      return new Response(
        JSON && JSON.stringify({ error: "Failed to create scheduled reminders", details: error });
<<<<<<< HEAD
<<<<<<< HEAD
    if (error) {
      console.error("Failed to create scheduled reminders:", error),
      return new Response(
        JSON.stringify({ error: "Failed to create scheduled reminders", details: error }),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      .lt("scheduled_for", new Date().toISOString()),
    


    if (jobsError) {
      console && console.error("Failed to fetch pending jobs:", jobsError);
      return new Response(
        JSON && JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError });
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .lt("scheduled_for", new Date().toISOString());
      .lt("scheduled_for", new Date().toISOString()),
    
    if (jobsError) {
<<<<<<< HEAD
      console.error("Failed to fetch pending jobs:", jobsError),
      return new Response(
        JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError }),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console && console.error("Failed to fetch pending jobs:", jobsError);
      return new Response(
        JSON && JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {
          status: 500
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    
    const processedJobs = [],
    


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const processedJobs = [];
    
    const processedJobs = [],
    
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        // Call the send-onboarding-reminder function for each job
        const reminderResponse = await fetch(
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          `${supabaseUrl}/functions/v1/send-onboarding-reminder`;
          {
            method: "POST";
            headers: {
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


              "Content-Type": "application/json",
              "Authorization": `Bearer ${supabaseServiceKey}`};
            body: JSON && JSON.stringify(job && job.payload)}
        );
        if (reminderResponse && reminderResponse.ok) {
          `${supabaseUrl}/functions/v1/send-onboarding-reminder`,
          {
            method: "POST",
            headers: {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              "Content-Type": "application/json"
              "Authorization": `Bearer ${supabaseServiceKey}`}
            body: JSON.stringify(job.payload)}
        );
              "Content-Type": "application/json",
<<<<<<< HEAD
              "Authorization": `Bearer ${supabaseServiceKey}`},
            body: JSON.stringify(job.payload)}
        ),
        
        if (reminderResponse.ok) {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              "Authorization": `Bearer ${supabaseServiceKey}`};
            body: JSON && JSON.stringify(job && job.payload)}
        );
        
        if (reminderResponse.ok) {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          // Update job status to completed
          const { error: updateError } = await supabase
            .from("scheduled_jobs")
            .update({
              status: "completed"
              completed_at: new Date().toISOString()})
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            .eq("id", job && job.id);
          


            .eq("id", job.id),
          

            .eq("id", job && job.id);
=======
            .eq("id", job.id);
            .eq("id", job.id),
          
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          if (updateError) {
            console && console.error("Failed to update job status:", updateError)
          } else {
            processedJobs && processedJobs.push(job && job.id)
          }
        } else {
          console && console.error("Failed to send reminder for job:", job && job.id);
<<<<<<< HEAD
<<<<<<< HEAD
            .eq("id", job.id);
            .eq("id", job.id),
          
          if (updateError) {
            console.error("Failed to update job status:", updateError)
          } else {
            processedJobs.push(job.id)
          }
        } else {
          console.error("Failed to send reminder for job:", job.id),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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

        processed_jobs: processedJobs && processedJobs.length,

      JSON && JSON.stringify({
        message: "Reminders processed successfully";
        processed_jobs: processedJobs && processedJobs.length,
        job_ids: processedJobs});
      JSON.stringify({

        message: "Reminders processed successfully",
        processed_jobs: processedJobs.length,
        job_ids: processedJobs}),

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      JSON.stringify({
        message: "Reminders processed successfully";
        processed_jobs: processedJobs.length
        job_ids: processedJobs});
        message: "Reminders processed successfully",
        processed_jobs: processedJobs.length,
        job_ids: processedJobs}),
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
<<<<<<< HEAD
    console.error(error),
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
=======
    console && console.error(error);
    return new Response(
      JSON && JSON.stringify({ error: "Internal server error", details: error && error.message });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    console && console.error(error);
    return new Response(
      JSON && JSON.stringify({ error: "Internal server error", details: error && error.message });
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
<<<<<<< HEAD


  }
});
;

import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1",;
;
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":;
    "authorization, x-client-info, apikey, content-type"},;
;
serve(async (req:Request) => {;
  // Handle CORS;
  if (req.method === "OPTIONS") {;
    return new Response(null, {;
      status:204,;
      headers:corsHeaders}),;
  }
  ;
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
  }
});
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
