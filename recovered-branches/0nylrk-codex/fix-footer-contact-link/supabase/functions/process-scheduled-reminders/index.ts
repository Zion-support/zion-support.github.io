<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts

<<<<<<< HEAD

import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
=======


import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;


=======


import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
========
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":


    "authorization, x-client-info, apikey, content-type"},



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
serve(async (req: Request) => {
  // Handle CORS
  if (req && req.method === "OPTIONS") {
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"}
    "authorization, x-client-info, apikey, content-type"},

serve(async (req: Request) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {
    const supabase = createClient(
<<<<<<< HEAD
      supabaseUrl;
      supabaseServiceKey
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts

<<<<<<< HEAD
=======
    const { data, error } = await supabase && supabase.rpc("create_scheduled_reminders");
    

=======

=======
      supabaseUrl,
      supabaseServiceKey
    );
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc("create_scheduled_reminders");
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    ),
    
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase.rpc("create_scheduled_reminders"),
    
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    );
    // Run the database function to create scheduled reminders
    const { data, error } = await supabase && supabase.rpc("create_scheduled_reminders");
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts
    if (error) {
      console && console.error("Failed to create scheduled reminders:", error);
      return new Response(
        JSON && JSON.stringify({ error: "Failed to create scheduled reminders", details: error });
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    if (error) {
      console.error("Failed to create scheduled reminders:", error),
      return new Response(
        JSON.stringify({ error: "Failed to create scheduled reminders", details: error }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======

      .lt("scheduled_for", new Date().toISOString()),
    


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (jobsError) {
      console && console.error("Failed to fetch pending jobs:", jobsError);
      return new Response(
        JSON && JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError });
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      .lt("scheduled_for", new Date().toISOString());
      .lt("scheduled_for", new Date().toISOString()),
    
    if (jobsError) {
      console.error("Failed to fetch pending jobs:", jobsError),
      return new Response(
        JSON.stringify({ error: "Failed to fetch pending jobs", details: jobsError }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {
          status: 500
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    
    const processedJobs = [],
    


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const processedJobs = [];
    
    const processedJobs = [],
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    if (pendingJobs && pendingJobs.length > 0) {
      for (const job of pendingJobs) {
        // Call the send-onboarding-reminder function for each job
        const reminderResponse = await fetch(
<<<<<<< HEAD
          `${supabaseUrl}/functions/v1/send-onboarding-reminder`;
          {
            method: "POST";
            headers: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts

<<<<<<< HEAD
=======
=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts
              "Content-Type": "application/json",
              "Authorization": `Bearer ${supabaseServiceKey}`};
            body: JSON && JSON.stringify(job && job.payload)}
        );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts
        


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        if (reminderResponse.ok) {

========
        if (reminderResponse && reminderResponse.ok) {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts
=======
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
        
        if (reminderResponse.ok) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          // Update job status to completed
          const { error: updateError } = await supabase
            .from("scheduled_jobs")
            .update({
              status: "completed"
              completed_at: new Date().toISOString()})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts

<<<<<<< HEAD
=======
            .eq("id", job && job.id);
          

=======

            .eq("id", job.id),
          

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
            .eq("id", job && job.id);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts
          if (updateError) {
            console && console.error("Failed to update job status:", updateError)
          } else {
            processedJobs && processedJobs.push(job && job.id)
          }
        } else {
          console && console.error("Failed to send reminder for job:", job && job.id);
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            .eq("id", job.id);
            .eq("id", job.id),
          
          if (updateError) {
            console.error("Failed to update job status:", updateError)
          } else {
            processedJobs.push(job.id)
          }
        } else {
          console.error("Failed to send reminder for job:", job.id),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          // Update job status to failed
          await supabase
            .from("scheduled_jobs")
            .update({
              status: "failed"})
<<<<<<< HEAD
            .eq("id", job && job.id)
=======
            .eq("id", job.id)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      }
    }
    return new Response(
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts
<<<<<<< HEAD
      JSON.stringify({

=======

        processed_jobs: processedJobs && processedJobs.length,

========
      JSON && JSON.stringify({
        message: "Reminders processed successfully";
        processed_jobs: processedJobs && processedJobs.length,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts
        job_ids: processedJobs});
=======
      JSON.stringify({

        message: "Reminders processed successfully",
        processed_jobs: processedJobs.length,
        job_ids: processedJobs}),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      JSON.stringify({
        message: "Reminders processed successfully";
        processed_jobs: processedJobs.length
        job_ids: processedJobs});
        message: "Reminders processed successfully",
        processed_jobs: processedJobs.length,
        job_ids: processedJobs}),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
<<<<<<< HEAD
    console && console.error(error);
    return new Response(
      JSON && JSON.stringify({ error: "Internal server error", details: error && error.message });
=======
    console.error(error),
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts

<<<<<<< HEAD
=======
========
  }
});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts
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


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
  }
});

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
});

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
  }
});

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
=======
  // Handle CORS;
  if (req.method === "OPTIONS") {;
    return new Response(null, {;
      status: 204,;
      headers: corsHeaders});
  }
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  try {;
    const supabase = createClient(;
      supabaseUrl,;
      supabaseServiceKey;
    ),;
<<<<<<< HEAD
    ;
    // Run the database function to create scheduled reminders;
    const { data, error } = await supabase.rpc("create_scheduled_reminders"),;
    ;
    if (error) {;
      console.error("Failed to create scheduled reminders:", error),;
      return new Response(;
        JSON.stringify({ error:"Failed to create scheduled reminders", details:error }),;
        {;
          status:500,;
          headers:{ "Content-Type":"application/json", ...corsHeaders }}
      ),;
    }
    ;
    // Process pending reminder jobs;
    const { data:pendingJobs, error:jobsError } = await supabase;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      .from("scheduled_jobs");
      .select("id, payload");
      .eq("job_type", "onboarding_reminder");
      .eq("status", "pending");
      .lt("scheduled_for", new Date().toISOString()),;
<<<<<<< HEAD
    ;
    if (jobsError) {;
      console.error("Failed to fetch pending jobs:", jobsError),;
      return new Response(;
        JSON.stringify({ error:"Failed to fetch pending jobs", details:jobsError }),;
        {;
          status:500,;
          headers:{ "Content-Type":"application/json", ...corsHeaders }}
      ),;
    }
    ;
    const processedJobs = [],;
    ;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (pendingJobs && pendingJobs.length > 0) {;
      for (const job of pendingJobs) {;
        // Call the send-onboarding-reminder function for each job;
        const reminderResponse = await fetch(;
          `${supabaseUrl}/functions/v1/send-onboarding-reminder`,;
          {;
<<<<<<< HEAD
            method:"POST",;
            headers:{;
              "Content-Type":"application/json",;
              "Authorization":`Bearer ${supabaseServiceKey}`},;
            body:JSON.stringify(job.payload)}
        ),;
        ;
        if (reminderResponse.ok) {;
          // Update job status to completed;
          const { error:updateError } = await supabase;
            .from("scheduled_jobs");
            .update({;
              status:"completed",;
              completed_at:new Date().toISOString()});
            .eq("id", job.id),;
          ;
          if (updateError) {;
            console.error("Failed to update job status:", updateError),;
          } else {;
            processedJobs.push(job.id),;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }
        } else {;
          console.error("Failed to send reminder for job:", job.id),;
          // Update job status to failed;
          await supabase;
            .from("scheduled_jobs");
            .update({;
<<<<<<< HEAD
              status:"failed"});
            .eq("id", job.id),;
        }
      }
    }
    ;
    return new Response(;
      JSON.stringify({;
        message:"Reminders processed successfully",;
        processed_jobs:processedJobs.length,;
        job_ids:processedJobs}),;
      {;
        status:200,;
        headers:{ "Content-Type":"application/json", ...corsHeaders }}
    ),;
  } catch (error) {;
    console.error(error),;
    return new Response(;
      JSON.stringify({ error:"Internal server error", details:error.message }),;
      {;
        status:500,;
        headers:{ "Content-Type":"application/json", ...corsHeaders }}
    ),;  }
}),;
 serve (async (req: Request) => {
  //Handle CORS if (req.method === "OPTIONS") {
  return new Response (null, {
  status: 204;
headers: corsHeaders 
}) 
}try {
  const supabase = createClient (supabaseUrl;
supabaseServiceKey);
//Run the database function to create scheduled reminders return new Response (JSON.stringify ({
  error: "Failed to create scheduled reminders", details: error 
});
{
  status: 500;
);
}//Process pending reminder jobs .from ("scheduled jobs") .select ("id, payload") .eq ("job type", "onboarding reminder") .eq ("status", "pending") .lt ("scheduled for", new Date () .toISOString () );
return new Response (JSON.stringify ({
  error: "Failed to fetch pending jobs", details: jobsError 
});
{
  status: 500;
);
}if (pendingJobs && pendingJobs.length > 0) {
  for (const job of pendingJobs) {
  //Call the send-onboarding-reminder function for each job 
}else {
  processedJobs.push (job.id) 
}
}else {
  //Update job status to failed scheduled jobs") .update ({
  
}
}
}return new Response (
}catch (error) {
  console.error (error);
return new Response (JSON.stringify ({
  error: " Internal server error", details: error.message 
});
{
  status: 500;
);
}
});
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-scheduled-reminders/index.ts
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
