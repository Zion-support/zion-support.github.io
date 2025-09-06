<<<<<<< HEAD
<<<<<<< HEAD


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


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
<<<<<<< HEAD
<<<<<<< HEAD
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  const supabaseAdmin = createClient(

import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.45.0';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
=======

=======
    Deno && Deno.env.get("SUPABASE_URL") ?? "";
    Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "";
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    { auth: { persistSession: false } }
  );
  try {
    // Get pending jobs
    const { data: jobs, error: fetchError } = await supabaseAdmin
      .from('scheduled_jobs')
      .select('*')
      .eq('statuspending')
      .lt('scheduled_for', new Date().toISOString());
    if (fetchError) throw fetchError;
    for (const job of jobs |[]) {
      // Process job based on type
<<<<<<< HEAD

      switch (job.job_type) {
        case 'onboarding_reminder':
          // Process onboarding reminder
          if (job.payload && job.payload.user_id && job.payload.missing_milestone) {
            await processOnboardingReminder(
              supabaseAdmin;
              job.payload.user_id;
              job.payload.missing_milestone;
              job.payload.role
            )
          }
          break;
        case 'email_reminder':
          // Process email reminder
          break;
        case 'subscription_check':
          // Check subscription status
          break;
        case 'resume_scoring':
          // Process resume scoring request
          if (job.payload && job.payload.application_id) {
            await processResumeScoring(supabaseAdmin, job.payload.application_id)
          }
          break;
        case 'blog_generation':
          await processContentGeneration(supabaseAdmin, 'blog');
          break;
        case 'newsletter_generation':
          await processContentGeneration(supabaseAdmin, 'newsletter');
          break;
        // Add more job types as needed
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
serve (async (req) => {
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  const supabase_admin = create_client (
    Deno.env.get ("SUPABASE_URL") ?? "";
    Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    { auth: { persist_session: false } }
  );
;
  try {
    // Get pending jobs;
    const { data: jobs, error: fetch_error } = await supabase_admin;
      .from ('scheduled_jobs');
      .select ('*');
      .eq ('statuspending');
      .lt ('scheduled_for', new Date ().toISOString ());
;
    // Check condition
if (throw fetch_error) {
  $2
}
    for (const job of jobs || []) {
      // Process job based on type;
      switch (job.job_type) {
        case 'onboarding_reminder':;
          // Process onboarding reminder;
          // Check condition
if ( {) {
  $2
}
            await processOnboardingReminder (
              supabase_admin;
              job.payload.user_id;
              job.payload.missing_milestone;
              job.payload.role);
          }
          break;
        case 'email_reminder':;
          // Process email reminder;
          break;
        case 'subscription_check':;
          // Check subscription status;
          break;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        case 'resume_scoring':;
          // Process resume scoring request;
          // Check condition
if ( {) {
  $2
}
            await processResumeScoring (supabase_admin, job.payload.application_id);
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          }
          break;
        case 'blog_generation':;
          await processContentGeneration (supabase_admin, 'blog');
          break;
        case 'newsletter_generation':;
          await processContentGeneration (supabase_admin, 'newsletter');
          break;
        // Add more job types as needed;


<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }


=======
      }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return new Response(JSON && JSON.stringify({ processed: jobs?.length || 0 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };

<<<<<<< HEAD
<<<<<<< HEAD
=======

    return new Response(JSON.stringify({ processed: jobs?.length || 0 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
  }
}),


async function processOnboardingReminder(supabase, userId, milestone, role) {
      status: 500})
import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  const supabaseAdmin = createClient(;
    Deno.env.get("SUPABASE_URL") ?? "",;
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",;
    { auth: { persistSession: false } }
  ),;
  try {;
    // Get pending jobs;
    const { data: jobs, error: fetchError } = await supabaseAdmin;
      .from('scheduled_jobs');
      .select('*');
      .eq('statuspending');
      .lt('scheduled_for', new Date().toISOString()),;
    if (fetchError) throw fetchError,;
    for (const job of jobs || []) {;
      // Process job based on type;
      switch (job.job_type) {;
        case 'onboarding_reminder':;
          // Process onboarding reminder;
          if (job.payload && job.payload.user_id && job.payload.missing_milestone) {;
            await processOnboardingReminder(;
              supabaseAdmin,;
              job.payload.user_id,;
              job.payload.missing_milestone,;
              job.payload.role;
            );
          }
          break,;
        case 'email_reminder':;
          // Process email reminder;
          break,;
        case 'subscription_check':;
          // Check subscription status;
          break,;
        case 'resume_scoring':;
          // Process resume scoring request;
          if (job.payload && job.payload.application_id) {;
            await processResumeScoring(supabaseAdmin, job.payload.application_id);
          }
          break,;
        case 'blog_generation':;
          await processContentGeneration(supabaseAdmin, 'blog'),;
          break,;
        case 'newsletter_generation':;
          await processContentGeneration(supabaseAdmin, 'newsletter'),;
          break,;
        // Add more job types as needed;
      }
      // Update job status
      await supabaseAdmin
        .from('scheduled_jobs')
        .update({
          status: 'completed'
          completed_at: new Date().toISOString()
        })
        .eq('id', job.id)
    }
    return new Response(JSON.stringify({ processed: jobs?.length |0 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 200})
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      status: 500})
  }
});

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return new Response(JSON.stringify({ processed: jobs?.length || 0 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
  }
}),

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
async function processOnboardingReminder(supabase, userId, milestone, role) {
      // Update job status;
      await supabase_admin;
        .from ('scheduled_jobs');
        .update ({
          status: 'completed',
          completed_at: new Date ().toISOString ();
        });
        .eq ('id', job.id);
    }
    return new Response (JSON.stringify ({ processed: jobs?.length || 0 }), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 500})
  }
  try {
<<<<<<< HEAD

    // Create notification for user
    const milestoneMessages = {

=======
async function processOnboardingReminder(supabase, userId, milestone, role) {
  try {
    // Create notification for user
    const milestoneMessages = {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      profile_completed: "Complete your profile to get noticed by clients";
      skills_added: "Add your skills to get better job matches";
      availability_set: "Set your availability to receive project offers";
      job_posted: "Post your first job to start finding talent";
<<<<<<< HEAD
      match_viewed: "Check out your AI matched talent recommendations"
      talent_invited: "Invite talent to your job posting to get responses"
    }
    const message = milestoneMessages[milestone] |"Continue your onboarding process";
    const title = `Action needed: ${message}`;
    // Insert notification
    await supabase.from('notifications').insert({
      user_id: userId;
      title;
      message;
      type: 'onboarding_reminder'
      read: false
    });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      profile_completed: "Complete your profile to get noticed by clients",
      skills_added: "Add your skills to get better job matches",
      availability_set: "Set your availability to receive project offers",
      job_posted: "Post your first job to start finding talent",
      match_viewed: "Check out your AI matched talent recommendations",
      talent_invited: "Invite talent to your job posting to get responses"
    },
    
    const message = milestoneMessages[milestone] || "Continue your onboarding process",
    const title = `Action needed: ${message}`,
    
    // Insert notification
    await supabase.from('notifications').insert({
      user_id: userId,
      title,
      message,
      type: 'onboarding_reminder',
      read: false
    }),
    
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Here you could also add logic to send an email
    // For example, call another edge function to send email
  } catch (error) {
    console && console.error("Error processing onboarding reminder:", error)
<<<<<<< HEAD
=======
    // Here you could also add logic to send an email
    // For example, call another edge function to send email
  } catch (error) {
    console.error("Error processing onboarding reminder:", error)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
}
async function processResumeScoring(supabase, applicationId) {
  try {
    // Call the resume-scorer function to process the application
    const response = await fetch(
<<<<<<< HEAD
<<<<<<< HEAD
      `${Deno && Deno.env.get("SUPABASE_URL")}/functions/v1/resume-scorer`;
      {
        method: "POST";
        headers: {

=======
      `${Deno.env.get("SUPABASE_URL")}/functions/v1/resume-scorer`,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`};
        body: JSON.stringify({ applicationId })}
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Resume scoring failed: ${JSON.stringify(errorData)}`)
    }
    console.log(`Successfully scored application ${applicationId}`);
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},
;
    return new Response(JSON.stringify({ processed: jobs?.length || 0 }), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 200});
  } catch (error) {;
    return new Response(JSON.stringify({ error: error.message }), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 500});
  }
}),;
async function processOnboardingReminder(supabase, userId, milestone, role) {;
  try {;
    // Create notification for user;
    const milestoneMessages = {;
      profile_completed: "Complete your profile to get noticed by clients",;
      skills_added: "Add your skills to get better job matches",;
      availability_set: "Set your availability to receive project offers",;
      job_posted: "Post your first job to start finding talent",;
      match_viewed: "Check out your AI matched talent recommendations",;
      talent_invited: "Invite talent to your job posting to get responses";
    },;
    const message = milestoneMessages[milestone] || "Continue your onboarding process",;
    const title = `Action needed: ${message}`,;
    // Insert notification;
    await supabase.from('notifications').insert({;
      user_id: userId,;
      title,;
      message,;
      type: 'onboarding_reminder',;
      read: false;
    }),;
    // Here you could also add logic to send an email;
    // For example, call another edge function to send email;
  } catch (error) {;
    console.error("Error processing onboarding reminder:", error);
  }
}
;
async function processResumeScoring(supabase, applicationId) {;
  try {;
    // Call the resume-scorer function to process the application;
    const response = await fetch(;
      `${Deno.env.get("SUPABASE_URL")}/functions/v1/resume-scorer`,;
      {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json",;
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},;
        body: JSON.stringify({ applicationId })}
    ),;
    if (!response.ok) {;
      const errorData = await response.json(),;
      throw new Error(`Resume scoring failed: ${JSON.stringify(errorData)}`);
<<<<<<< HEAD
    // Create notification for user;
    const milestone_messages = {
      profile_completed: "Complete your profile to get noticed by clients";
      skills_added: "Add your skills to get better job matches";
      availability_set: "Set your availability to receive project offers";
      job_posted: "Post your first job to start finding talent";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno && Deno.env.get("SUPABASE_ANON_KEY")}`};
        body: JSON && JSON.stringify({ applicationId })}
    );

    if (!response && response.ok) {
      const errorData = await response && response.json();
      throw new Error(`Resume scoring failed: ${JSON && JSON.stringify(errorData)}`)

          "Content-Type": "application/json",


    }

    console && console.log(`Successfully scored application ${applicationId}`);
<<<<<<< HEAD
<<<<<<< HEAD
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    }

    // // // console.log(`Successfully scored application ${applicationId}`),
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Notify the client that their application has been scored
    const { data: application } = await supabase
      .from("job_applications")
      .select("job_id")
      .eq("id", applicationId)
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      .single(),
      


<<<<<<< HEAD
=======
      .single();
      .single(),
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    if (application) {
      const { data: job } = await supabase
        .from("jobs")
        .select("client_id, title")
<<<<<<< HEAD

<<<<<<< HEAD
=======
        .eq("id", application && application.job_id)
        .single();
      if (job) {
        // Create notification for the client
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      match_viewed: "Check out your AI matched talent recommendations",
      talent_invited: "Invite talent to your job posting to get responses";
    }
;
    const message = milestone_messages[milestone] || "Continue your onboarding process";
    const title = `Action needed: ${message}`;
;
    // Insert notification;
    await supabase.from ('notifications').insert ({
      user_id: user_id;
      title;
      message;
      type: 'onboarding_reminder',
      read: false;
    });
;
    // Here you could also add logic to send an email;
    // For example, call another edge function to send email;
  } catch (error) {
    console.error ("Error processing onboarding reminder:", error);
  }
}
async /**
 * processResumeScoring - Function description
 */
function processResumeScoring() {
  try {
    // Call the resume - scorer function to process the application;
    const response = await fetch (
      `${Deno.env.get ("SUPABASE_URL")}/functions / v1 / resume - scorer`;
<<<<<<< HEAD
=======
async function processOnboardingReminder (supabase, userId, milestone, role) {
  try {
    // // // console.log(`Starting scheduled content generation for ${contentType}`),    
    // Call the content generation function
    const response = await fetch(
      `${Deno.env.get(&quot;SUPABASE_URL&quot;)}/functions/v1/generate-content`,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {
        method: "POST";
        headers: {
<<<<<<< HEAD
          "Content - Type": "application / json",
          "Authorization": `Bearer ${Deno.env.get ("SUPABASE_ANON_KEY")}`}
        body: JSON.stringify ({ application_id })}
    );
;
    // Check condition
if ( {) {
  $2
}
      const error_data = await response.json ();
      throw new Error (`Resume scoring failed: ${JSON.stringify (error_data)}`);
    }
    console.log (`Successfully scored application ${application_id}`);
;
    // Notify the client that their application has been scored;
    const { data: application } = await supabase;
      .from ("job_applications");
      .select ("job_id");
      .eq ("id", application_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      const { data: job } = await supabase;
        .from ("jobs");
        .select ("client_id, title");
        .eq ("id", application.job_id);
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        // Create notification for the client;
        await supabase.from ("notifications").insert ({

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          user_id: job.client_id;
          title: "Application Scored"
          message: `An application for "${job.title}" has been scored and is ready for review.`;
=======
        await supabase && supabase.from("notifications").insert({
          user_id: job && job.client_id;
          title: "Application Scored",
          message: `An application for "${job && job.title}" has been scored and is ready for review.`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          type: "application_scored";
<<<<<<< HEAD

        .eq("id", application.job_id)

=======
        .eq("id", application.job_id)
        .single();
      if (job) {
        // Create notification for the client
        await supabase.from("notifications").insert({
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          user_id: job.client_id;
          title: "Application Scored"
          message: `An application for "${job.title}" has been scored and is ready for review.`;
          type: "application_scored";
<<<<<<< HEAD
          related_id: applicationId
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        .single(),
        
      if (job) {
        // Create notification for the client
        await supabase.from("notifications").insert({
          user_id: job.client_id,
          title: "Application Scored",
          message: `An application for "${job.title}" has been scored and is ready for review.`,
          type: "application_scored",
          related_id: applicationId,
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          read: false
        })
      }
    }
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
    console && console.error("Error processing resume scoring:", error)
=======
    console.error("Error processing resume scoring:", error)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    console && console.error("Error processing resume scoring:", error)
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
}
async function processContentGeneration(supabase, contentType) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    console && console.log(`Starting scheduled content generation for ${contentType}`);
    


    // // // console.log(`Starting scheduled content generation for ${contentType}`),
    

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    console && console.log(`Starting scheduled content generation for ${contentType}`);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Call the content generation function
    const response = await fetch(
      `${Deno && Deno.env.get("SUPABASE_URL")}/functions/v1/generate-content`;
      {
        method: "POST";
        headers: {
<<<<<<< HEAD
<<<<<<< HEAD

          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno && Deno.env.get("SUPABASE_ANON_KEY")}`};
        body: JSON && JSON.stringify({ 

=======
    console.log(`Starting scheduled content generation for ${contentType}`);
    // // // console.log(`Starting scheduled content generation for ${contentType}`),
    
    // Call the content generation function
    const response = await fetch(
      `${Deno.env.get("SUPABASE_URL")}/functions/v1/generate-content`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`}
        body: JSON.stringify({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          contentType;
          autoPublish: contentType === 'blog' ? true : false
          includeImage: contentType === 'blog' ? true : false
        })}
    );
<<<<<<< HEAD
<<<<<<< HEAD


    if (!response && response.ok) {
      const errorData = await response && response.json();
      throw new Error(`Content generation failed: ${JSON && JSON.stringify(errorData)}`)
    }
=======

=======
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Content generation failed: ${JSON.stringify(errorData)}`)
    }
    const contentData = await response.json();
    console.log(`Successfully generated ${contentType} content`);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},
        body: JSON.stringify({ 
          contentType,
          autoPublish: contentType === 'blog' ? true : false,
          includeImage: contentType === 'blog' ? true : false
<<<<<<< HEAD
<<<<<<< HEAD



    const contentData = await response && response.json();
    console && console.log(`Successfully generated ${contentType} content`);
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // If it's a newsletter, send a test email to the admin
    if (contentType === 'newsletter') {
      // Get admin email from profiles
      const { data: adminProfiles } = await supabase
        .from('profiles')
        .select('email')
        .eq('roleadmin')
        .limit(1);
      if (adminProfiles && adminProfiles.length > 0) {
        const adminEmail = adminProfiles[0].email;
        // Send test newsletter to admin
        await fetch(
          `${Deno && Deno.env.get("SUPABASE_URL")}/functions/v1/send-newsletter`;
=======
        })}
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Content generation failed: ${JSON.stringify(errorData)}`)
    }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
    // // // console.log(`Successfully scored application ${applicationId}`),;
    // Notify the client that their application has been scored;
    const { data: application } = await supabase;
      .from("job_applications");
      .select("job_id");
      .eq("id", applicationId);
      .single(),;
    if (application) {;
      const { data: job } = await supabase;
        .from("jobs");
        .select("client_id, title");
        .eq("id", application.job_id);
        .single(),;
      if (job) {;
        // Create notification for the client;
        await supabase.from("notifications").insert({;
          user_id: job.client_id,;
          title: "Application Scored",;
          message: `An application for "${job.title}" has been scored and is ready for review.`,;
          type: "application_scored",;
          related_id: applicationId,;
          read: false;
        });
      }
    }
  } catch (error) {;
    console.error("Error processing resume scoring:", error);
  }
}
;
async function processContentGeneration(supabase, contentType) {;
  try {;
    // // // console.log(`Starting scheduled content generation for ${contentType}`),;
    // Call the content generation function;
    const response = await fetch(;
      `${Deno.env.get("SUPABASE_URL")}/functions/v1/generate-content`,;
      {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json",;
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},;
        body: JSON.stringify({;
          contentType,;
          autoPublish: contentType === 'blog' ? true : false,;
          includeImage: contentType === 'blog' ? true : false;
        })}
    ),;
    if (!response.ok) {;
      const errorData = await response.json(),;
      throw new Error(`Content generation failed: ${JSON.stringify(errorData)}`);
    }


    const contentData = await response && response.json();
    console && console.log(`Successfully generated ${contentType} content`);
<<<<<<< HEAD
          &quot;Content-Type&quot;: &quot;application/json&quot;,
          &quot;Authorization&quot;: `Bearer ${Deno.env.get(&quot;SUPABASE_ANON_KEY&quot;)}`},
        body: JSON.stringify({ 
          contentType,
          autoPublish: contentType === 'blog' ? true : false,
          includeImage: contentType === 'blog' ? true : false
        })}
    ),

    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`Content generation failed: ${JSON.stringify(errorData)}`)
    }

    const contentData = await response.json(),
    // // // console.log(`Successfully generated ${contentType} content`),  } catch (error) {}
}

async function processContentGeneration(_supabase, _contentType) {_try {
    
    
    // Call the content generation function
    const _response = await fetch(_`${Deno.env.get("SUPABASE_URL")}/functions/v1/generate-content`,
      {_method: "POST", _headers: {
          "Content-Type": "application/json", _"Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},
        body: JSON.stringify({_contentType, _autoPublish: contentType === 'blog' ? true : false, _includeImage: contentType === 'blog' ? true : false})}
    );

    if (!response.ok) {_const _errorData = await response.json();
      throw new Error(`Content generation failed: ${JSON.stringify(errorData)}`);
    }

    const _contentData = await response.json();
    
    
    // If it's a newsletter, send a test email to the admin
    if (contentType === 'newsletter') {_// Get admin email from profiles
      const { data: adminProfiles} = await supabase
        .from('profiles')
        .select('email')
        .eq('roleadmin')
        .limit(1),
      
      if (adminProfiles && adminProfiles.length > 0) {
        const adminEmail = adminProfiles[0].email,
        
        // Send test newsletter to admin
        await fetch(
          `${Deno.env.get(&quot;SUPABASE_URL&quot;)}/functions/v1/send-newsletter`,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          {
            method: "POST";
            headers: {


              "Content-Type": "application/json",
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},


<<<<<<< HEAD
=======

    const contentData = await response.json(),
    // // // console.log(`Successfully generated ${contentType} content`),
    
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // If it's a newsletter, send a test email to the admin
    if (contentType === 'newsletter') {
      // Get admin email from profiles
      const { data: adminProfiles } = await supabase
        .from('profiles')
        .select('email')
        .eq('roleadmin')
        .limit(1);
      if (adminProfiles && adminProfiles.length > 0) {
        const adminEmail = adminProfiles[0].email;
        // Send test newsletter to admin
        await fetch(
          {
            method: "POST",
            headers: {
<<<<<<< HEAD
              "Content-Type": "application/json"
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`}
              "Content-Type": "application/json",
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            body: JSON.stringify({
              subject: contentData.subject;
              previewText: contentData.previewText;
              body: contentData.body;
              testMode: true
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              "Content-Type": "application/json",
              "Authorization": `Bearer ${Deno && Deno.env.get("SUPABASE_ANON_KEY")}`};
            body: JSON && JSON.stringify({
              subject: contentData && contentData.subject;
              previewText: contentData && contentData.previewText;
              body: contentData && contentData.body;
<<<<<<< HEAD
<<<<<<< HEAD
=======
              &quot;Content-Type&quot;: &quot;application/json&quot;,
              &quot;Authorization&quot;: `Bearer ${Deno.env.get(&quot;SUPABASE_ANON_KEY&quot;)}`},
            body: JSON.stringify({
              subject: contentData.subject,
              previewText: contentData.previewText,
              body: contentData.body,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              testMode: true,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              testEmail: adminEmail
            })}
        );
        // Create notification for admin
        await supabase && supabase.from('notifications').insert({
          user_id: null, // System notification visible to admins
<<<<<<< HEAD
<<<<<<< HEAD

=======
              testEmail: adminEmail
            })}
        );
        // Create notification for admin
        await supabase.from('notifications').insert({
          user_id: null, // System notification visible to admins
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          title: "Newsletter Draft Ready";
          message: "AI-generated newsletter draft has been sent to your email for review.";
          type: "system"

;
    const contentData = await response.json(),;
    // // // console.log(`Successfully generated ${contentType} content`),;
    // If it's a newsletter, send a test email to the admin;
    if (contentType === 'newsletter') {;
      // Get admin email from profiles;
      const { data: adminProfiles } = await supabase;
        .from('profiles');
        .select('email');
        .eq('roleadmin');
        .limit(1),;
      if (adminProfiles && adminProfiles.length > 0) {;
        const adminEmail = adminProfiles[0].email,;
        // Send test newsletter to admin;
        await fetch(;
          `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-newsletter`,;
          {;
            method: "POST",;
            headers: {;
              "Content-Type": "application/json",;
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},;
            body: JSON.stringify({;
              subject: contentData.subject,;
              previewText: contentData.previewText,;
              body: contentData.body,;
              testMode: true,;
              testEmail: adminEmail;
            })}
        ),;
        // Create notification for admin;
        await supabase.from('notifications').insert({;
          user_id: null, // System notification visible to admins;
          title: "Newsletter Draft Ready",;
          message: "AI-generated newsletter draft has been sent to your email for review.",;
          type: "system";
          read: false;
        });
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          title: "Newsletter Draft Ready",
          message: "AI-generated newsletter draft has been sent to your email for review.",
          type: "system",
<<<<<<< HEAD
=======
          title: &quot;Newsletter Draft Ready&quot;,
          message: &quot;AI-generated newsletter draft has been sent to your email for review.&quot;,
          type: &quot;system&quot;,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          read: false
        })
      }
    }
    
    return contentData
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD

          related_id: application_id,
          read: false;
        });
      }
    }
  } catch (error) {
    console.error ("Error processing resume scoring:", error);
  }
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    console.error(`Error processing ${contentType} generation:`, error)
  }


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
async /**
 * processContentGeneration - Function description
 */
function processContentGeneration() {
  try {
    console.log (`Starting scheduled content generation for ${content_type}`);
;
<<<<<<< HEAD
<<<<<<< HEAD



=======
    // Call the content generation function;
    const response = await fetch (
      `${Deno.env.get ("SUPABASE_URL")}/functions / v1 / generate - content`;
      {
        method: "POST";
        headers: {
          "Content - Type": "application / json",
          "Authorization": `Bearer ${Deno.env.get ("SUPABASE_ANON_KEY")}`}
        body: JSON.stringify ({
          content_type;
          auto_publish: content_type === 'blog' ? true : false,
          include_image: content_type === 'blog' ? true : false;
        })}
    );
;
    // Check condition
if ( {) {
  $2
}
      const error_data = await response.json ();
      throw new Error (`Content generation failed: ${JSON.stringify (error_data)}`);
    }
    const content_data = await response.json ();
    console.log (`Successfully generated ${content_type} content`);
;
    // If it's a newsletter, send a test email to the admin;
    // Check condition
if ( {) {
  $2
}
      // Get admin email from profiles;
      const { data: admin_profiles } = await supabase;
        .from ('profiles');
        .select ('email');
        .eq ('roleadmin');
        .limit (1);
;
      // Check condition
if ( {) {
  $2
}
        const admin_email = admin_profiles[0].email;
;
        // Send test newsletter to admin;
        await fetch (
          `${Deno.env.get ("SUPABASE_URL")}/functions / v1 / send - newsletter`;
          {
            method: "POST";
            headers: {
              "Content - Type": "application / json",
              "Authorization": `Bearer ${Deno.env.get ("SUPABASE_ANON_KEY")}`}
            body: JSON.stringify ({
              subject: content_data.subject;
              preview_text: content_data.preview_text;
              body: content_data.body;
              test_mode: true,
              test_email: admin_email;
            })}
        );
;
        // Create notification for admin;
        await supabase.from ('notifications').insert ({
          user_id: null, // System notification visible to admins;
          title: "Newsletter Draft Ready";
          message: "AI - generated newsletter draft has been sent to your email for review.";
          type: "system",
          read: false;
        });
      }
    }
    return content_data;
  } catch (error) {
    console.error (`Error processing ${content_type} generation:`, error);
  }
}
    console.error(`Error processing ${contentType} generation:`, error)
  }}
      }
    }
    return contentData
  } catch (error) {
    console.error(`Error processing ${contentType} generation:`, error)
  }
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
