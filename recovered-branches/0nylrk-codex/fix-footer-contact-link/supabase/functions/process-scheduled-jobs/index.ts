<<<<<<< HEAD
<<<<<<< HEAD
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
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  const supabaseAdmin = createClient(
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
    return new Response(JSON.stringify({ processed: jobs?.length |0 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 200})
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 500})
  }
});
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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
async function processOnboardingReminder(supabase, userId, milestone, role) {
  try {
    // Create notification for user
    const milestoneMessages = {
<<<<<<< HEAD
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
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Here you could also add logic to send an email
    // For example, call another edge function to send email
  } catch (error) {
    console.error("Error processing onboarding reminder:", error)
  }
}
async function processResumeScoring(supabase, applicationId) {
  try {
    // Call the resume-scorer function to process the application
    const response = await fetch(
      `${Deno.env.get("SUPABASE_URL")}/functions/v1/resume-scorer`,
      {
        method: "POST",
        headers: {
<<<<<<< HEAD
<<<<<<< HEAD
          "Content-Type": "application/json"
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`}
=======
          "Content-Type": "application/json",
<<<<<<< HEAD
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        body: JSON.stringify({ applicationId })}
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Resume scoring failed: ${JSON.stringify(errorData)}`)
<<<<<<< HEAD
    }
    console.log(`Successfully scored application ${applicationId}`);
=======
          "Content-Type": "application/json",
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }

    // // // console.log(`Successfully scored application ${applicationId}`),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Notify the client that their application has been scored
    const { data: application } = await supabase
      .from("job_applications")
      .select("job_id")
      .eq("id", applicationId)
<<<<<<< HEAD
      .single();
=======
      .single(),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (application) {
      const { data: job } = await supabase
        .from("jobs")
        .select("client_id, title")
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
        .single(),
        
      if (job) {
        // Create notification for the client
        await supabase.from("notifications").insert({
          user_id: job.client_id,
          title: "Application Scored",
          message: `An application for "${job.title}" has been scored and is ready for review.`,
          type: "application_scored",
          related_id: applicationId,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          read: false
        })
      }
    }
  } catch (error) {
    console.error("Error processing resume scoring:", error)
  }
}
async function processContentGeneration(supabase, contentType) {
  try {
<<<<<<< HEAD
    console.log(`Starting scheduled content generation for ${contentType}`);
=======
    // // // console.log(`Starting scheduled content generation for ${contentType}`),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Call the content generation function
    const response = await fetch(
      `${Deno.env.get("SUPABASE_URL")}/functions/v1/generate-content`,
      {
        method: "POST",
        headers: {
<<<<<<< HEAD
          "Content-Type": "application/json"
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`}
        body: JSON.stringify({
          contentType;
          autoPublish: contentType === 'blog' ? true : false
          includeImage: contentType === 'blog' ? true : false
        })}
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Content generation failed: ${JSON.stringify(errorData)}`)
    }
    const contentData = await response.json();
    console.log(`Successfully generated ${contentType} content`);
=======
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

    const contentData = await response.json(),
    // // // console.log(`Successfully generated ${contentType} content`),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
          `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-newsletter`,
          {
            method: "POST",
            headers: {
<<<<<<< HEAD
              "Content-Type": "application/json"
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`}
=======
              "Content-Type": "application/json",
              "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            body: JSON.stringify({
              subject: contentData.subject;
              previewText: contentData.previewText;
              body: contentData.body;
              testMode: true
              testEmail: adminEmail
            })}
        );
        // Create notification for admin
        await supabase.from('notifications').insert({
          user_id: null, // System notification visible to admins
<<<<<<< HEAD
          title: "Newsletter Draft Ready";
          message: "AI-generated newsletter draft has been sent to your email for review.";
          type: "system"

          read: false
        })
=======
          title: "Newsletter Draft Ready",
          message: "AI-generated newsletter draft has been sent to your email for review.",
          type: "system",
          read: false
        })
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    }
    return contentData
  } catch (error) {
    console.error(`Error processing ${contentType} generation:`, error)
  }
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
