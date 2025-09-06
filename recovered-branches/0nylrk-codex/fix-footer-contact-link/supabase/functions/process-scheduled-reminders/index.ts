
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
<<<<<<< HEAD
=======

=======
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;




import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":

    "authorization, x-client-info, apikey, content-type"},

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
serve(async (req: Request) => {
  // Handle CORS
  if (req && req.method === "OPTIONS") {const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"}
serve(async (req: Request) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
      status: 204
      headers: corsHeaders})
  }
  try {
<<<<<<< HEAD
<<<<<<< HEAD
    const supabase = createClient(
<<<<<<< HEAD
<<<<<<< HEAD
      supabaseUrl;
      supabaseServiceKey

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const { data, error } = await supabase && supabase.rpc("create_scheduled_reminders");
    


<<<<<<< HEAD
=======
      supabaseUrl,
      supabaseServiceKey
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    );
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc("create_scheduled_reminders");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    ),
    
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc("create_scheduled_reminders"),
    
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    );
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase && supabase.rpc("create_scheduled_reminders");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (error) {
=======
    const supabase = createClient(    if (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    const supabase = createClient(    if (error) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      console && console.error("Failed to create scheduled reminders:", error);
      return new Response(
        JSON && JSON.stringify({ error: "Failed to create scheduled reminders", details: error });
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
<<<<<<< HEAD
<<<<<<< HEAD
      .eq("status", "pending")
<<<<<<< HEAD

=======
      .lt("scheduled_for", new Date().toISOString());
      .lt("scheduled_for", new Date().toISOString()),
    
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      .lt("scheduled_for", new Date().toISOString()),
    


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (jobsError) {
      console && console.error("Failed to fetch pending jobs:", jobsError);
      return new Response(
        JSON && JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError });
<<<<<<< HEAD
<<<<<<< HEAD
=======
      .lt("scheduled_for", new Date().toISOString());
      .lt("scheduled_for", new Date().toISOString()),
    
    if (jobsError) {
      console.error("Failed to fetch pending jobs:", jobsError),
      return new Response(
        JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError }),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {
          status: 500
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    
    const processedJobs = [],
    


<<<<<<< HEAD
=======
    const processedJobs = [];
    
    const processedJobs = [],
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (pendingJobs && pendingJobs.length > 0) {
=======
      .eq("status", "pending")    if (pendingJobs && pendingJobs.length > 0) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      .eq("status", "pending")    if (pendingJobs && pendingJobs.length > 0) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      for (const job of pendingJobs) {
        // Call the send-onboarding-reminder function for each job
        const reminderResponse = await fetch(
          `${supabaseUrl}/functions/v1/send-onboarding-reminder`;
          {
            method: "POST";
            headers: {
<<<<<<< HEAD

<<<<<<< HEAD
=======

              "Content-Type": "application/json",
              "Authorization": `Bearer ${supabaseServiceKey}`};
            body: JSON && JSON.stringify(job && job.payload)}
<<<<<<< HEAD
        );
<<<<<<< HEAD
=======
        if (reminderResponse && reminderResponse.ok) {
          `${supabaseUrl}/functions/v1/send-onboarding-reminder`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              "Authorization": `Bearer ${supabaseServiceKey}`}
            body: JSON.stringify(job.payload)}
        );
              "Content-Type": "application/json",
              "Authorization": `Bearer ${supabaseServiceKey}`},
            body: JSON.stringify(job.payload)}
        ),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        
        if (reminderResponse.ok) {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          // Update job status to completed
          const { error: updateError } = await supabase
            .from("scheduled_jobs")
            .update({
              status: "completed"
              completed_at: new Date().toISOString()})
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            .eq("id", job && job.id);
          


            .eq("id", job.id),
          

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            .eq("id", job && job.id);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          if (updateError) {
=======
        );          if (updateError) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              "Content-Type": "application/json",
              "Authorization": `Bearer ${supabaseServiceKey}`};
            body: JSON && JSON.stringify(job && job.payload)}
        );          if (updateError) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            console && console.error("Failed to update job status:", updateError)
          } else {
            processedJobs && processedJobs.push(job && job.id)
          }
        } else {          // Update job status to failed
          await supabase
            .from("scheduled_jobs")
            .update({
              status: "failed"})
            .eq("id", job && job.id)            .eq("id", job && job.id)
        }
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
    return new Response(
<<<<<<< HEAD

        processed_jobs: processedJobs && processedJobs.length,

<<<<<<< HEAD
=======
      JSON && JSON.stringify({
        message: "Reminders processed successfully";
        processed_jobs: processedJobs && processedJobs.length,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        job_ids: processedJobs});
      JSON.stringify({

        message: "Reminders processed successfully",
        processed_jobs: processedJobs.length,
        job_ids: processedJobs}),

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      JSON.stringify({
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        message: "Reminders processed successfully";
        processed_jobs: processedJobs.length
        job_ids: processedJobs});
        message: "Reminders processed successfully",
        processed_jobs: processedJobs.length,
        job_ids: processedJobs}),
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
<<<<<<< HEAD
    console && console.error(error);
    return new Response(
      JSON && JSON.stringify({ error: "Internal server error", details: error && error.message });
=======
    console.error(error),
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
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
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
=======
    return new Response(      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    return new Response(      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

  }
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
