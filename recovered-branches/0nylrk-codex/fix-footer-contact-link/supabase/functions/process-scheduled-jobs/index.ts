<<<<<<< HEAD
import {serve} from ""https": //deno.land/std@0.190.0/http/server.ts";"
import {createClient} from ""https": //esm.sh/@supabase/supabase-js@2.45.0";"
import { serve } from ""https": //deno.land/std@0.190.0/http/server.ts","
import { createClient } from ""https": //esm.sh/@supabase/supabase-js@2.45.0","
=======
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",

=======
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0";
const corsHeaders = $2;
=======
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",

=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
<<<<<<< HEAD
=======
<<<<<<< HEAD
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
>>>>>>> merged-prs-20250907-203621
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
<<<<<<< HEAD
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/resolved-merge-conflicts
const corsHeaders = {"
  "Access-Control-Allow-Origin": "*","
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},"
import {serve} from ""https": //deno.land/std@0.190.0/http/server.ts""
import {createClient} from ""https": //esm.sh/@supabase/supabase-js@2.45.0";"
import {serve} from ""https": //deno && deno.land/std@0 && 0.190.0/http/server && server.ts","
import {createClient} from ""https": //esm && esm.sh/@supabase/supabase-js@2 ;  "Access-Control-Allow-Origin": "*""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}"
serve(async (req) => {    Deno.env.get("SUPABASE_URL") ?? "","
    }
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "","
import { serve } from ""https": //deno.land/std@0.190.0/http/server.ts";"
import { createClient } from ""https": //esm.sh/@supabase/supabase-js@2.45.0",;"
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;"
serve(async (req) => {;
  }
<<<<<<< HEAD
  if (req.method === "OPTIONS") {;"
=======

  const supabaseAdmin = $2;
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false} }
  ),

  try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    // Get pending jobs
    const { data: jobs, error: fetchError} = await supabaseAdmin
      .from('scheduled_jobs')
      .select('*')
      .eq('statuspending')
      .lt('scheduled_for', new Date().toISOString()),

    if (fetchError) throw fetchError,

    for (const job of jobs || []) {
      // Process job based on type
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    Deno && Deno.env.get("SUPABASE_URL") ?? "";
    Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "";
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
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

>>>>>>> merged-prs-20250907-203621
      switch (job.job_type) {
        case 'onboarding_reminder':
          // Process onboarding reminder
          if (job.payload && job.payload.user_id && job.payload.missing_milestone) {
            await processOnboardingReminder(
              supabaseAdmin;
<<<<<<< HEAD
              job.payload.user_id;
              job.payload.missing_milestone;
              job.payload.role
            )
          }
          break,
        case 'email_reminder':
          // Process email reminder
          break,
        case 'subscription_check':
          // Check subscription status
          break,
        case 'resume_scoring':
          // Process resume scoring request
          if (job.payload && job.payload.application_id) {
            await processResumeScoring(supabaseAdmin, job.payload.application_id)
          }
          break,
        case 'blog_generation':
          await processContentGeneration($2);
          break,
        case 'newsletter_generation':
          await processContentGeneration($2);
          break,
        // Add more job types as needed
      }
      // Update job status
      await supabaseAdmin
        .from('scheduled_jobs')
        .update({
          status: 'completed'
          completed_at: new Date().toISOString()
        })
        .eq('id', job.id)
>>>>>>> origin/resolved-merge-conflicts
    }
    return new Response(null, { "headers": corsHeaders });
  }
<<<<<<< HEAD
=======
  const supabaseAdmin = createClient(
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    { auth: { persistSession: false } });
  try {}
>>>>>>> origin/chore/fix-lint-and-merge
    // Get pending jobs;
    const { data: jobs, error: fetchError } = await supabaseAdmin;
      .from('scheduled_jobs')'
      .select('*')'
      .eq('statuspending')'
      .lt('scheduled_for', new Date().toISOString());
    if (fetchError) throw fetchError;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    Deno.env.get("SUPABASE_URL") ?? "",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/resolved-merge-conflicts
;
serve (async (req) => {
  // Check condition
}
if ( {) {
  $2
}
    return new Response (null, { "headers": cors_headers });
  }
const supabase_admin = create_client (;
    Deno.env.get ("SUPABASE_URL") ?? "";"
    Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") ?? "";"
    { "auth": { "persist_session": false } }
  );
;
  try {
    // Get pending jobs;
    }
    const { "data": jobs, "error": fetch_error } = await supabase_admin;
      .from ('scheduled_jobs');'
      .select ('*');'
      .eq ('statuspending');'
      .lt ('scheduled_for', new Date ().toISOString ());'
;
    // Check condition,
if (throw fetch_error) {
  $2
}
    for (const job of jobs || []) {
      // Process job based on type;
      }
      switch (job.job_type) {
        }
        case 'onboarding_reminder':;'
          // Process onboarding reminder;
          // Check condition,
if ( {) {
  $2
}
            await processOnboardingReminder (
              supabase_admin;
              job.payload.user_id;
              job.payload.missing_milestone;
              job.payload.role);
<<<<<<< HEAD
          }
          break;
=======

<<<<<<< HEAD
          }
          break;'
        case 'email_reminder':;
          // Process email reminder;
          break;'
        case 'subscription_check':;
          // Check subscription status;

    return new Response(JSON.stringify({ processed: jobs?.length || 0 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
=======
          }
          break;'
        case 'email_reminder':;
          // Process email reminder;
          break;'
        case 'subscription_check':;
          // Check subscription status;
<<<<<<< HEAD
=======
          break;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        case 'resume_scoring':;
          // Process resume scoring request;
          // Check condition
if ( {) {
  $2
}
            await processResumeScoring (supabase_admin, job.payload.application_id);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      }
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return new Response(JSON && JSON.stringify({ processed: jobs?.length || 0 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    return new Response(JSON.stringify({ processed: jobs?.length || 0 }), {
>>>>>>> merged-prs-20250907-203621
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
  }
}),

<<<<<<< HEAD
  }
});

      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {}
    return new Response(JSON.stringify({ error: error.message }), {"
=======
<<<<<<< HEAD
async function processOnboardingReminder(supabase, userId, milestone, role) {
  try {
    // Create notification for user
    const milestoneMessages = $2;
      skills_added: "Add your skills to get better job matches",
      availability_set: "Set your availability to receive project offers",
      job_posted: "Post your first job to start finding talent",
      match_viewed: "Check out your AI matched talent recommendations",
      talent_invited: "Invite talent to your job posting to get responses"
    },
    
    const message = $2;
    const title = $2;
    // Insert notification
    await supabase.from('notifications').insert($2);
=======
<<<<<<< HEAD
=======

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      status: 500})
  }
});

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return new Response(JSON.stringify({ processed: jobs?.length || 0 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
  }
}),

<<<<<<< HEAD
async function processOnboardingReminder(supabase, userId, milestone, role) {

      // Update job status;
      await supabase_admin;'
        .from ('scheduled_jobs');
        .update ({'
          status: 'completed',
          completed_at: new Date ().toISOString ();
        });'
        .eq ('id', job.id);
    }
    return new Response (JSON.stringify ({ processed: jobs?.length || 0 }), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {}
    return new Response(JSON.stringify({ error: error.message }), {"
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 500})
  }

    // Create notification for user
    const milestoneMessages = {

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
async function processOnboardingReminder(supabase, userId, milestone, role) {
  try {
    // Create notification for user
    const milestoneMessages = {
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      profile_completed: "Complete your profile to get noticed by clients";
      skills_added: "Add your skills to get better job matches";
      availability_set: "Set your availability to receive project offers";
      job_posted: "Post your first job to start finding talent";
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
async function processOnboardingReminder(supabase, userId, milestone, role) {
=======
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
    return new Response (JSON.stringify ({ error: error.message }), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 500});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
});

      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {}
    return new Response(JSON.stringify({ error: error.message }), {"
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
  }
}),

async function processOnboardingReminder(supabase, userId, milestone, role) {

      // Update job status;
      await supabase_admin;'
        .from ('scheduled_jobs');
        .update ({'
          status: 'completed',
          completed_at: new Date ().toISOString ();
        });'
        .eq ('id', job.id);
    }
    return new Response (JSON.stringify ({ processed: jobs?.length || 0 }), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {}
    return new Response(JSON.stringify({ error: error.message }), {"
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 500})
  }

    // Create notification for user
    const milestoneMessages = {

<<<<<<< HEAD
async function processOnboardingReminder(supabase, userId, milestone, role) {
  try {
    // Create notification for user
    const milestoneMessages = {

      profile_completed: "Complete your profile to get noticed by clients";
      skills_added: "Add your skills to get better job matches";
      availability_set: "Set your availability to receive project offers";
      job_posted: "Post your first job to start finding talent";

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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      profile_completed: "Complete your profile to get noticed by clients",
      skills_added: "Add your skills to get better job matches",

      availability_set: "Set your availability to receive project offers",
      job_posted: "Post your first job to start finding talent",
      match_viewed: "Check out your AI matched talent recommendations",

      talent_invited: "Invite talent to your job posting to get responses"
    },

      user_id: userId,
      title,
      message,'
      type: 'onboarding_reminder',
      read: false;
    }),
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    // Here you could also add logic to send an email
    // For example, call another edge function to send email
  } catch (error) {
    console.error("Error processing onboarding reminder:", error)
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    // Here you could also add logic to send an email;
    // For example, call another edge function to send email;
  } catch (error) {"
    console && console.error("Error processing onboarding reminder:", error)

  }
}
async function processResumeScoring(supabase, applicationId) {}
  try {}
    // Call the resume-scorer function to process the application;
    const response = await fetch(

      {"
        method: "POST",
        headers: {"
          "Content-Type": "application/json","`
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`};
        body: JSON.stringify({ applicationId })});
    if (!response.ok) {}
      const errorData = await response.json();`
      throw new Error(`Resume scoring failed: ${JSON.stringify(errorData)}`)
    }`
    console.log(`Successfully scored application ${applicationId}`);"
          "Content-Type": "application/json","`
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},
;
    return new Response(JSON.stringify({ processed: jobs?.length || 0 }), {;"
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 200});
  } catch (error) {;
    return new Response(JSON.stringify({ error: error.message }), {;"

    // Here you could also add logic to send an email
    // For example, call another edge function to send email
  } catch (error) {
    console && console.error("Error processing onboarding reminder:", error)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Here you could also add logic to send an email
    // For example, call another edge function to send email
  } catch (error) {
    console.error("Error processing onboarding reminder:", error)
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
}
async function processResumeScoring(supabase, applicationId) {
  try {
    // Call the resume-scorer function to process the application
<<<<<<< HEAD
    const response = await fetch(
=======
<<<<<<< HEAD
    const response = $2;
=======
    const response = await fetch(
<<<<<<< HEAD
      `${Deno.env.get("SUPABASE_URL")}/functions/v1/resume-scorer`,
>>>>>>> merged-prs-20250907-203621
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`}
<<<<<<< HEAD
        body: JSON.stringify({ applicationId })}
    ),

    if (!response.ok) {
      const errorData = await response.json($2);
      throw new Error(`Resume scoring failed: ${JSON.stringify(errorData)}`)
    }

    console.log($2);
    // Notify the client that their application has been scored
    const { data: application} = await supabase
      .from("job_applications")
      .select("job_id")
      .eq("id", applicationId)
      .single($2);
    if (application) {
      const { data: job} = await supabase
        .from("jobs")
        .select("client_id, title")
        .eq("id", application.job_id)
        .single($2);
      if (job) {
        // Create notification for the client
        await supabase.from("notifications").insert({
=======
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
    // Create notification for user;
    const milestone_messages = {
      profile_completed: "Complete your profile to get noticed by clients";
      skills_added: "Add your skills to get better job matches";
      availability_set: "Set your availability to receive project offers";
      job_posted: "Post your first job to start finding talent";
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      `${Deno && Deno.env.get("SUPABASE_URL")}/functions/v1/resume-scorer`;
      {
        method: "POST";
        headers: {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
`${Deno.env.get("SUPABASE_URL")}/functions/v1/resume-scorer`,
      {
        method: "POST",
        headers: {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`};
        body: JSON.stringify({ applicationId })});
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

      type: 'onboarding_reminder',;
      read: false;
    }),;
    // Here you could also add logic to send an email;
    // For example, call another edge function to send email;

    console.error("Error processing onboarding reminder:", error);
  }
}
;

          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},;
        body: JSON.stringify({ applicationId })}
    ),;
    if (!response.ok) {;

          "Authorization": `Bearer ${Deno && Deno.env.get("SUPABASE_ANON_KEY")}`};
<<<<<<< HEAD
        body: JSON && JSON.stringify({ applicationId })});
=======
<<<<<<< HEAD
        body: JSON && JSON.stringify({ applicationId })});
=======
        body: JSON && JSON.stringify({ applicationId })}
    );
    if (!response && response.ok) {
      const errorData = await response && response.json();
      throw new Error(`Resume scoring failed: ${JSON && JSON.stringify(errorData)}`)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          "Content-Type": "application/json",

    }
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    console && console.log(`Successfully scored application ${applicationId}`);
    }

    // // // console.log(`Successfully scored application ${applicationId}`),
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Notify the client that their application has been scored
    const { data: application } = await supabase
      .from("job_applications")
      .select("job_id")

      .eq("id", applicationId)

<<<<<<< HEAD
      .single(),

    if (application) {

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      .single(),

<<<<<<< HEAD
      .single();
      .single(),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (application) {

<<<<<<< HEAD
        .eq("id", application && application.job_id)
        .single();
      if (job) {
        // Create notification for the client
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      match_viewed: "Check out your AI matched talent recommendations",

      talent_invited: "Invite talent to your job posting to get responses";
    }
;"
    const message = milestone_messages[milestone] || "Continue your onboarding process";`
    const title = `Action needed: ${message}`;
;
    // Insert notification;'
    await supabase.from ('notifications').insert ({}
      user_id: user_id;
      title;
      message;'
      type: 'onboarding_reminder',
      read: false;
              job.payload.missing_milestone;)
              job.payload.role);
          }
          break;'
>>>>>>> origin/resolved-merge-conflicts
        case 'email_reminder':;'
          // Process email reminder;
          break;
        case 'subscription_check':;'
          // Check subscription status;
break;      "status": 500});
  }
});
    return new Response(JSON.stringify({ "processed": jobs?.length || 0 }), {
      }
      "headers": { ...corsHeaders, "Content-Type": "application/json" },"
      "status": 200})
  } catch (error) {
    }
    return new Response(JSON.stringify({ "error": error.message }), {
      }
      "headers": { ...corsHeaders, "Content-Type": "application/json" },"
      "status": 500})
  }
}),

      // Update job status;
      await supabase_admin;
        .from ('scheduled_jobs');'
        .update ({
          }
          "status": 'completed','
          "completed_at": new Date ().toISOString ();
        });
        .eq ('id', job.id);'
    }
    return new Response (JSON.stringify ({ "processed": jobs?.length || 0 }), {
      }
      "headers": { ...cors_headers, "Content - Type": "application / json" }"
      "status": 200});
  } catch (error) {
    }
    return new Response(JSON.stringify({ "error": error.message }), {
      }
      "headers": { ...corsHeaders, "Content-Type": "application/json" }"
      "status": 500})
  }
  try {      "skills_added": "Add your skills to get better job matches","
      }
      "availability_set": "Set your availability to receive project offers","
      "job_posted": "Post your first job to start finding talent","
      "match_viewed": "Check out your AI matched talent recommendations","
      "talent_invited": "Invite talent to your job posting to get responses""
    },
const message = milestoneMessages[milestone] || "Continue your onboarding process",;"
const title = `Action "needed": ${message}`,;`    // Insert notification,
await supabase.from('notifications').insert({'
      }
      "user_id": userId,
      title,
      message,
      "type": 'onboarding_reminder','
      "read": false
    }),
        // Notify the client that their application has been scored,
const { "data": application } = await supabase;
      .from("job_applications")"
      .select("job_id")"
      .eq("id", applicationId)    if (application) {"
}
const { "data": job } = await supabase;
        .from("jobs")"
        .select("client_id, title")"
      "talent_invited": "Invite talent to your job posting to get responses";"
    }
;
    const message = milestone_messages[milestone] || "Continue your onboarding process";"
    const title = `Action "needed": ${message}`;`;
    // Insert notification;
    await supabase.from ('notifications').insert ({'
      }
      "user_id": user_id;
      title;
      message;
      "type": 'onboarding_reminder','
      "read": false;
    });
;
    // Here you could also add logic to send an email;
    // For example, call another edge function to send email;
  } catch (error) {
    }
    console.error ("Error processing onboarding "reminder":", error);"
  }
}
async /**
<<<<<<< HEAD
 * processResumeScoring - Function description
=======
 * processResumeScoring - Function description;
 */
function processResumeScoring() {}
  try {}
    // Call the resume - scorer function to process the application;

      `${Deno.env.get ("SUPABASE_URL")}/functions / v1 / resume - scorer`;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      {"
        method: "POST";
        headers: {}
          user_id: job.client_id;"
          title: "Application Scored""`
          message: `An application for "${job.title}" has been scored and is ready for review.`;
"
        await supabase && supabase.from("notifications").insert({}
          user_id: job && job.client_id;"
          title: "Application Scored","`
          message: `An application for "${job && job.title}" has been scored and is ready for review.`;
"
          type: "application_scored";

          user_id: job.client_id;
          title: "Application Scored"
          message: `An application for "${job.title}" has been scored and is ready for review.`;

          type: "application_scored";

        .single(),
<<<<<<< HEAD

=======
=======
async function processOnboardingReminder (supabase, userId, milestone, role) {
  try {
    // // // console.log(`Starting scheduled content generation for ${contentType}`),    
    // Call the content generation function
    const response = await fetch(
      `${Deno.env.get(&quot;SUPABASE_URL&quot;)}/functions/v1/generate-content`,
      {
        method: &quot;POST&quot;,
        headers: {
          user_id: job.client_id;
          title: "Application Scored"
          message: `An application for "${job.title}" has been scored and is ready for review.`;
        await supabase && supabase.from("notifications").insert({
          user_id: job && job.client_id;
          title: "Application Scored",
          message: `An application for "${job && job.title}" has been scored and is ready for review.`;
          type: "application_scored";
        .eq("id", application.job_id)
<<<<<<< HEAD
        .single();
      if (job) {
        // Create notification for the client
        await supabase.from("notifications").insert({
          user_id: job.client_id;
          title: "Application Scored"
          message: `An application for "${job.title}" has been scored and is ready for review.`;
          type: "application_scored";
          related_id: applicationId
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .single(),
        
      if (job) {
        // Create notification for the client
        await supabase.from("notifications").insert({
>>>>>>> merged-prs-20250907-203621
          user_id: job.client_id,
          title: "Application Scored",
          message: `An application for "${job.title}" has been scored and is ready for review.`,
          type: "application_scored",
          related_id: applicationId,
<<<<<<< HEAD
          read: false})
      }
    }
  } catch (error) {
    console.error("Error processing resume scoring:", error)
  }
}
async function processContentGeneration(supabase, contentType) {
  try {
    console.log($2);
    // Call the content generation function
    const response = $2;
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},
        body: JSON.stringify({ 
          contentType,
          autoPublish: contentType = $2;
          includeImage: contentType = $2;
    if (!response.ok) {
      const errorData = await response.json($2);
      throw new Error(`Content generation failed: ${JSON.stringify(errorData)}`)
    }

    const contentData = await response.json($2);
    console.log($2);
    // If it's a newsletter, send a test email to the admin
    if (contentType === 'newsletter') {
      // Get admin email from profiles
      const { data: adminProfiles} = await supabase
        .from('profiles')
        .select('email')
        .eq('roleadmin')
        .limit($2);
      if (adminProfiles && adminProfiles.length > 0) {
        const adminEmail = $2;
        // Send test newsletter to admin
        await fetch(
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          read: false
        })
      }
    }
  } catch (error) {
<<<<<<< HEAD
    console && console.error("Error processing resume scoring:", error)
=======
<<<<<<< HEAD
    console.error("Error processing resume scoring:", error)
=======
    console && console.error("Error processing resume scoring:", error)
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
console.error("Error processing resume scoring:", error)
    console && console.error("Error processing resume scoring:", error)
  }
}
async function processContentGeneration(supabase, contentType) {
<<<<<<< HEAD

    console && console.log(`Starting scheduled content generation for ${contentType}`);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}
async function processContentGeneration(supabase, contentType) {
  try {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    console && console.log(`Starting scheduled content generation for ${contentType}`);
<<<<<<< HEAD
=======
    

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

`
    // // // console.log(`Starting scheduled content generation for ${contentType}`),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    console && console.log(`Starting scheduled content generation for ${contentType}`);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Call the content generation function

      `${Deno && Deno.env.get("SUPABASE_URL")}/functions/v1/generate-content`;
      {"
        method: "POST";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        headers: {
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno && Deno.env.get("SUPABASE_ANON_KEY")}`};
        body: JSON && JSON.stringify({ 

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Call the content generation function
    const response = await fetch(
      `${Deno.env.get("SUPABASE_URL")}/functions/v1/generate-content`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`}
        body: JSON.stringify({

          contentType;
          autoPublish: contentType === 'blog' ? true : false
          includeImage: contentType === 'blog' ? true : false
<<<<<<< HEAD

        })});

    if (!response && response.ok) {
      const errorData = await response && response.json();
      throw new Error(`Content generation failed: ${JSON && JSON.stringify(errorData)}`)
    }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          contentType;
          autoPublish: contentType === 'blog' ? true : false
          includeImage: contentType === 'blog' ? true : false
        })}
    );
<<<<<<< HEAD
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Content generation failed: ${JSON.stringify(errorData)}`)
    }
    const contentData = await response.json();
    console.log(`Successfully generated ${contentType} content`);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        })});

    if (!response && response.ok) {
      const errorData = await response && response.json();
      throw new Error(`Content generation failed: ${JSON && JSON.stringify(errorData)}`)
    }
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Content generation failed: ${JSON.stringify(errorData)}`)
    }
    const contentData = await response.json();
    console.log(`Successfully generated ${contentType} content`);
<<<<<<< HEAD
=======
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},

        body: JSON.stringify({ 
          contentType,
          autoPublish: contentType === 'blog' ? true : false,
          includeImage: contentType === 'blog' ? true : false
<<<<<<< HEAD
=======
<<<<<<< HEAD
        })}
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Content generation failed: ${JSON.stringify(errorData)}`)
    }
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

          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno && Deno.env.get("SUPABASE_ANON_KEY")}`};
        body: JSON && JSON.stringify({ 

          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno && Deno.env.get("SUPABASE_ANON_KEY")}`};
        body: JSON && JSON.stringify({ 
          contentType;
          autoPublish: contentType === 'blog' ? true : false
          includeImage: contentType === 'blog' ? true : false
        })}
    );
    if (!response && response.ok) {
      const errorData = await response && response.json();
      throw new Error(`Content generation failed: ${JSON && JSON.stringify(errorData)}`)
    }

          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},
        body: JSON.stringify({ 
          contentType,
          autoPublish: contentType === 'blog' ? true : false,
          includeImage: contentType === 'blog' ? true : false
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    const contentData = await response && response.json();
    console && console.log(`Successfully generated ${contentType} content`);

    if (contentType === 'newsletter') {
      // Get admin email from profiles
      const { data: adminProfiles } = await supabase

    // Here you could also add logic to send an email;
    // For example, call another edge function to send email;
    console && console.error("Error processing onboarding reminder:", error)"
async function processResumeScoring(supabase, applicationId) {
  // TODO: Implement
    // Call the resume-scorer function to process the application;
    const response = await fetch()"`;
      `${Deno && Deno.env.get("SUPABASE_URL")}/functions/v1/resume-scorer`;"
      {"
        method: "POST";",
  headers: {

        method: "POST","
        headers: {"
          "Content-Type": "application/json",""`;
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`};"
        body: JSON.stringify({ applicationId })}
    if (!response.ok) {
      const errorData = await response.json();`;
      throw new Error(`Resume scoring failed: ${JSON.stringify(errorData)}`)
    }`;
    console.log(`Successfully scored application ${applicationId}`);"
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},"
    return new Response(JSON.stringify({ processed: jobs?.length || 0 }), {;"
      headers: { ...corsHeaders, "Content-Type": "application/json" },;"
  } catch (error) {;
    return new Response(JSON.stringify({ error: error.message }), {;"
      status: 500});
}),;
async function processOnboardingReminder(supabase, userId, milestone, role) {;
  try {;
    // Create notification for user;
    const milestoneMessages = {;"
      profile_completed: "Complete your profile to get noticed by clients",;""
      skills_added: "Add your skills to get better job matches",;""
      availability_set: "Set your availability to receive project offers",;""
      job_posted: "Post your first job to start finding talent",;""
      match_viewed: "Check out your AI matched talent recommendations",;""
      talent_invited: "Invite talent to your job posting to get responses";"
    },;"
    const message = milestoneMessages[milestone] || "Continue your onboarding process",;"`;
    const title = `Action needed: ${message}`,;
    // Insert notification;"
    await supabase.from('notifications').insert({;
      user_id: userId,;
      title,;
      message,;
      type: 'onboarding_reminder',;
    // Here you could also add logic to send an email;
    // For example, call another edge function to send email;
    console.error("Error processing onboarding reminder:", error);"
async function processResumeScoring(supabase, applicationId) {;
    // Call the resume-scorer function to process the application;
    const response = await fetch(;)"`;
      `${Deno.env.get("SUPABASE_URL")}/functions/v1/resume-scorer`,;"
      {;"
        method: "POST",;"
        headers: {;"
          "Content-Type": "application/json",;""`;
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},;"
    ),;
    if (!response.ok) {;
      const errorData = await response.json(),;`;
      throw new Error(`Resume scoring failed: ${JSON.stringify(errorData)}`);
    // Create notification for user;
    const milestone_messages = {"
          "Authorization": `Bearer ${Deno && Deno.env.get("SUPABASE_ANON_KEY")}`};"
        body: JSON && JSON.stringify({ applicationId })}

    if (!response && response.ok) {
      const errorData = await response && response.json();`;
      throw new Error(`Resume scoring failed: ${JSON && JSON.stringify(errorData)}`)
          "Content-Type": "application/json","
`;
    console && console.log(`Successfully scored application ${applicationId}`);
    // // // console.log(`Successfully scored application ${applicationId}`),
    // Notify the client that their application has been scored;
    const { data: application } = await supabase;"
      .from("job_applications")""
      .select("job_id")""
      .eq("id", applicationId)"
      .single(),

    if (application) {
      const { data: job } = await supabase;"
        .from("jobs")""
        .select("client_id, title")""
;"
    const message = milestone_messages[milestone] || "Continue your onboarding process";"`;
    // Insert notification;"
    await supabase.from ('notifications').insert ({
      user_id: user_id;
    // Here you could also add logic to send an email;
    // For example, call another edge function to send email;
    console.error ("Error processing onboarding reminder:", error);"

  } catch (error) {'
    console.error ("Error processing onboarding reminder:", error);"

  }
}
async /**
 * processResumeScoring - Function description;
>>>>>>> origin/resolved-merge-conflicts
 */
function processResumeScoring() {
  }
  try {
    // Call the resume - scorer function to process the application;
}
const response = await fetch (;
      `${Deno.env.get ("SUPABASE_URL")}/functions / v1 / resume - scorer`;        `      if (job) {
        // Create notification for the client
}
await supabase.from("notifications").insert({"
          }
          "user_id": job.client_id,
          "title": "Application Scored","
          "message": `An application for "${job.title}" has been scored and is ready for review.`,`          "type": "application_scored","
          "related_id": applicationId,
          "read": false
        })
      }
    }
  } catch (error) {
    }
    console && console.error("Error processing resume "scoring":", error)    console && console.error("Error processing resume "scoring":", error)"
  }
}
async function processContentGeneration() {
  }
  try {    // Call the content generation function
}
const response = await fetch(;
      `${Deno && Deno.env.get("SUPABASE_URL")}/functions/v1/generate-content`;`      {
        }
        "method": "POST";"
        "headers": {    // If it's a newsletter, send a test email to the admin'
    }
    if (contentType === 'newsletter') {'
      // Get admin email from profiles
}
const { "data": adminProfiles } = await supabase;
        .from('profiles')'
        .select('email')'
        .eq('roleadmin')'
        .limit(1);
      if (adminProfiles && adminProfiles.length > 0) {
        }
        const adminEmail = adminProfiles[0].email;
        // Send test newsletter to admin,
await fetch(
          `${Deno && Deno.env.get("SUPABASE_URL")}/functions/v1/send-newsletter`;`    // // // console.log(`Successfully scored application ${applicationId}`),;`    // Notify the client that their application has been scored;
    const { "data": application } = await supabase;
      .from("job_applications");"
      .select("job_id");"
      .eq("id", applicationId);"
      .single(),;
    if (application) {;
      }
      const { "data": job } = await supabase;
        .from("jobs");"
        .select("client_id, title");"
        .eq("id", application.job_id);"
        .single(),;
      if (job) {;
        // Create notification for the client;
        }
        await supabase.from("notifications").insert({;"
          }
          "user_id": job.client_id,;
          "title": "Application Scored",;"
          "message": `An application for "${job.title}" has been scored and is ready for review.`,;`          "type": "application_scored",;"
          "related_id": applicationId,;
          "read": false;
        });
      }
    }
  } catch (error) {;
    }
    console.error("Error processing resume "scoring":", error);"
  }
}
;
async function processContentGeneration() {;
  }
  try {;
    // // // console.log(`Starting scheduled content generation for ${contentType}`),;`    // Call the content generation function;
    const response = await fetch(;
      `${Deno.env.get("SUPABASE_URL")}/functions/v1/generate-content`,;`      {;
        }
        "method": "POST",;"
        "headers": {;
          "Content-Type": "application/json",;"
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},;`        "body": JSON.stringify({;
          }
          contentType,;
          "autoPublish": contentType === 'blog' ? true : false,;'
          "includeImage": contentType === 'blog' ? true : false;'
        })}
    ),;
    if (!response.ok) {;
      }
      const errorData = await response.json(),;
      throw new Error(`Content generation "failed": ${JSON.stringify(errorData)}`);`    }
    const contentData = await response && response.json();
    console && console.log(`Successfully generated ${contentType} content`);              "subject": contentData.subject;`              "previewText": contentData.previewText;
              "body": contentData.body;
              "testMode": true
              "Content-Type": "application/json","
              "Authorization": `Bearer ${Deno && Deno.env.get("SUPABASE_ANON_KEY")}`};`            "body": JSON && JSON.stringify({
              }
              "subject": contentData && contentData.subject;
              "previewText": contentData && contentData.previewText;
              "body": contentData && contentData.body;              "testEmail": adminEmail
            })}
        );
        // Create notification for admin,
await supabase && supabase.from('notifications').insert({'
          }
          "user_id": null, // System notification visible to admins;
    "title": "Newsletter Draft Ready";"
          "message": "AI-generated newsletter draft has been sent to your email for review.";"
          "type": "system""
;
    const contentData = await response.json(),;
    // // // console.log(`Successfully generated ${contentType} content`),;`    // If it's a newsletter, send a test email to the admin;'
    if (contentType === 'newsletter') {;'
      // Get admin email from profiles;
      }
      const { "data": adminProfiles } = await supabase;
        .from('profiles');'
        .select('email');'
        .eq('roleadmin');'
        .limit(1),;
      if (adminProfiles && adminProfiles.length > 0) {;
        }
        const adminEmail = adminProfiles[0].email,;
        // Send test newsletter to admin;
<<<<<<< HEAD
        await fetch(;
          `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-newsletter`,;`          {;
            }
            "method": "POST",;"
            "headers": {;
              "Content-Type": "application/json",;"
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},;`            "body": JSON.stringify({;
              }
              "subject": contentData.subject,;
              "previewText": contentData.previewText,;
              "body": contentData.body,;
              "testMode": true,;
              "testEmail": adminEmail;
            })}
        ),;
        // Create notification for admin;
        await supabase.from('notifications').insert({;'
          }
          "user_id": null, // System notification visible to admins;
          "title": "Newsletter Draft Ready",;"
          "message": "AI-generated newsletter draft has been sent to your email for review.",;"
          "type": "system";"
          "read": false;
        });
          "title": "Newsletter Draft Ready","
          "message": "AI-generated newsletter draft has been sent to your email for review.","
          "type": "system","
          "read": false
        })
=======
        await fetch(
          {"
            method: "POST",

<<<<<<< HEAD
=======
            body: JSON.stringify({
              subject: contentData.subject;
              previewText: contentData.previewText;
              body: contentData.body;
              testMode: true

    const contentData = await response && response.json();
    console && console.log(`Successfully generated ${contentType} content`);
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
<<<<<<< HEAD

=======
    
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Call the content generation function
    const _response = await fetch(_`${Deno.env.get("SUPABASE_URL")}/functions/v1/generate-content`,
      {_method: "POST", _headers: {
          "Content-Type": "application/json", _"Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},
<<<<<<< HEAD
        body: JSON.stringify({_contentType, _autoPublish: contentType === 'blog' ? true : false, _includeImage: contentType === 'blog' ? true : false})});
=======
        body: JSON.stringify({_contentType, _autoPublish: contentType === 'blog' ? true : false, _includeImage: contentType === 'blog' ? true : false})}
    );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    if (!response.ok) {_const _errorData = await response.json();
      throw new Error(`Content generation failed: ${JSON.stringify(errorData)}`);
    }

    const _contentData = await response.json();
<<<<<<< HEAD

=======
    
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // If it's a newsletter, send a test email to the admin
    if (contentType === 'newsletter') {_// Get admin email from profiles
      const { data: adminProfiles} = await supabase
        .from('profiles')
        .select('email')
        .eq('roleadmin')
        .limit(1),
<<<<<<< HEAD
      if (adminProfiles && adminProfiles.length > 0) {
        const adminEmail = adminProfiles[0].email,
=======
      
      if (adminProfiles && adminProfiles.length > 0) {
        const adminEmail = adminProfiles[0].email,
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        // Send test newsletter to admin
        await fetch(
          `${Deno.env.get(&quot;SUPABASE_URL&quot;)}/functions/v1/send-newsletter`,
          {
<<<<<<< HEAD
            method: "POST";
            headers: {

              "Content-Type": "application/json",
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},

const contentData = await response.json(),
    // // // console.log(`Successfully generated ${contentType} content`),
=======
            method: &quot;POST&quot;,
            headers: {


              "Content-Type": "application/json",
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},



    const contentData = await response.json(),
    // // // console.log(`Successfully generated ${contentType} content`),
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-newsletter`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`}
<<<<<<< HEAD
=======
              "Content-Type": "application/json",
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},
=======
          `${Deno && Deno.env.get("SUPABASE_URL")}/functions/v1/send-newsletter`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`}
              "Content-Type": "application/json",
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            body: JSON.stringify({
              subject: contentData.subject;
              previewText: contentData.previewText;
              body: contentData.body;
              testMode: true
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              "Content-Type": "application/json",

              "Authorization": `Bearer ${Deno && Deno.env.get("SUPABASE_ANON_KEY")}`};
            body: JSON && JSON.stringify({}
              subject: contentData && contentData.subject;
              previewText: contentData && contentData.previewText;
<<<<<<< HEAD

              testMode: true,

=======
              body: contentData && contentData.body;
              &quot;Content-Type&quot;: &quot;application/json&quot;,
              &quot;Authorization&quot;: `Bearer ${Deno.env.get(&quot;SUPABASE_ANON_KEY&quot;)}`},
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            body: JSON.stringify({
              subject: contentData.subject;
              previewText: contentData.previewText;
              body: contentData.body;
              testMode: true

    const contentData = await response && response.json();
    console && console.log(`Successfully generated ${contentType} content`);
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
        body: JSON.stringify({_contentType, _autoPublish: contentType === 'blog' ? true : false, _includeImage: contentType === 'blog' ? true : false})});

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
          {
            method: "POST";
            headers: {

              "Content-Type": "application/json",
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},

const contentData = await response.json(),
    // // // console.log(`Successfully generated ${contentType} content`),
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
              "Content-Type": "application/json"
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`}
              "Content-Type": "application/json",
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},
            body: JSON.stringify({
              subject: contentData.subject;
              previewText: contentData.previewText;
              body: contentData.body;
              testMode: true

              "Content-Type": "application/json",

              "Authorization": `Bearer ${Deno && Deno.env.get("SUPABASE_ANON_KEY")}`};
            body: JSON && JSON.stringify({}
              subject: contentData && contentData.subject;
              previewText: contentData && contentData.previewText;

              testMode: true,
<<<<<<< HEAD
              testEmail: adminEmail})}
=======
<<<<<<< HEAD

              testEmail: adminEmail

            })});
        // Create notification for admin
        await supabase && supabase.from('notifications').insert({
          user_id: null, // System notification visible to admins

testEmail: adminEmail
            })});
=======
<<<<<<< HEAD
              testEmail: adminEmail
            })}
>>>>>>> origin/resolved-merge-conflicts
        ),
        
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        // Create notification for admin
        await supabase.from('notifications').insert({
          user_id: null, // System notification visible to admins
<<<<<<< HEAD
          title: "Newsletter Draft Ready",
          message: "AI-generated newsletter draft has been sent to your email for review.",
          type: "system",
          read: false})
      }
    }
return contentData;
  } catch (error) {}
=======
          title: "Newsletter Draft Ready";
          message: "AI-generated newsletter draft has been sent to your email for review.";
<<<<<<< HEAD
=======
          type: "system"

          read: false
        })
=======
        await supabase && supabase.from('notifications').insert({
          user_id: null, // System notification visible to admins

testEmail: adminEmail
            })});
        // Create notification for admin
        await supabase.from('notifications').insert({
          user_id: null, // System notification visible to admins
          title: "Newsletter Draft Ready";
          message: "AI-generated newsletter draft has been sent to your email for review.";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          type: "system"

;
    const contentData = await response.json(),;`
    // // // console.log(`Successfully generated ${contentType} content`),;'
    // If it's a newsletter, send a test email to the admin;'
    if (contentType === 'newsletter') {;
      // Get admin email from profiles;

        .eq('roleadmin');
      const { data: adminProfiles } = await supabase;'
        .from('profiles');''
        .select('email');''
        .eq('roleadmin');'
        .limit(1),;
      if (adminProfiles && adminProfiles.length > 0) {;
        const adminEmail = adminProfiles[0].email,;
        // Send test newsletter to admin;
        await fetch(;"`
          `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-newsletter`,;
          {;"
            method: "POST",;
            headers: {;"
              "Content-Type": "application/json",;"`
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},;
            body: JSON.stringify({;
              subject: contentData.subject,;
              previewText: contentData.previewText,;
              body: contentData.body,;
              testMode: true,;
              testEmail: adminEmail;
            })}
        ),;
        // Create notification for admin;'
        await supabase.from('notifications').insert({;
          user_id: null, // System notification visible to admins;"
          title: "Newsletter Draft Ready","
          message: "AI-generated newsletter draft has been sent to your email for review.",;"
          type: "system";
          read: false;
        });

<<<<<<< HEAD
          title: "Newsletter Draft Ready",
          message: "AI-generated newsletter draft has been sent to your email for review.",
          type: "system",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          title: "Newsletter Draft Ready",
          message: "AI-generated newsletter draft has been sent to your email for review.",
          type: "system",
<<<<<<< HEAD
=======
          read: false
        })
<<<<<<< HEAD
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

          title: "Newsletter Draft Ready",
          message: "AI-generated newsletter draft has been sent to your email for review.",
          type: "system",
          title: &quot;Newsletter Draft Ready&quot;,
          message: &quot;AI-generated newsletter draft has been sent to your email for review.&quot;,
          type: &quot;system&quot;,
          read: false
        })
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          read: false

        })

      }
    }
<<<<<<< HEAD

    return contentData

          related_id: application_id,
          read: false;
        });
      }
    }
=======
<<<<<<< HEAD
    
    return contentData
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  } catch (error) {
    console.error ("Error processing resume scoring:", error);
  }

    console.error(`Error processing ${contentType} generation:`, error)
  }

async /**
 * processContentGeneration - Function description;
 */
function processContentGeneration() {}
  try {}`
    console.log (`Starting scheduled content generation for ${content_type}`);
;

  }
}
<<<<<<< HEAD

  }
}  }
}
=======
=======
<<<<<<< HEAD

    return contentData
=======
    
    return contentData
  } catch (error) {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          related_id: application_id,
          read: false;
        });
      }
    }
  } catch (error) {
    console.error ("Error processing resume scoring:", error);
  }
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    console.error(`Error processing ${contentType} generation:`, error)
  }

>>>>>>> origin/resolved-merge-conflicts
async /**
 * processContentGeneration - Function description
 */
function processContentGeneration() {
  }
  try {
    }
    console.log (`Starting scheduled content generation for ${content_type}`);`
;
  }
}  }
}
<<<<<<< HEAD
  } catch (error) {
    console.error(`Error processing ${contentType} generation:`, error)
  }
}
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
