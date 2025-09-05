import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })  }

  const supabaseAdmin = createClient(
    Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
    Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;,
    { auth: { persistSession: false } }
  ),

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  const _supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    {_auth: { persistSession: false} }
  );

  try {_// Get pending jobs
    const { data: jobs, _error: fetchError} = await supabaseAdmin
      .from('scheduled_jobs')
      .select('*')
      .eq('statuspending')
      .lt('scheduled_for', new Date().toISOString()),

    if (fetchError) throw fetchError,

    for (const job of jobs || []) {_// Process job based on type
      switch (job.job_type) {
        case 'onboarding_reminder':
          // Process onboarding reminder
          if (job.payload && job.payload.user_id && job.payload.missing_milestone) {
            await processOnboardingReminder(
              supabaseAdmin,
              job.payload.user_id,
              job.payload.missing_milestone,
              job.payload.role
            )
          }
          break,        case 'email_reminder':
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
          break,        case 'blog_generation':
          await processContentGeneration(supabaseAdmin, 'blog'),
          break,
        case 'newsletter_generation':
          await processContentGeneration(supabaseAdmin, 'newsletter'),
          break,
        // Add more job types as needed
      }

      // Update job status
      await supabaseAdmin
        .from('scheduled_jobs')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString()
        })
        .eq('id', job.id)
    }

    return new Response(JSON.stringify({ processed: jobs?.length || 0 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }) {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})      status: 500});
  }
}),

async function processOnboardingReminder(_supabase, _userId, _milestone, _role) {_try {
    // Create notification for user
    const milestoneMessages = {
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
    const _milestoneMessages = {
      profile_completed: "Complete your profile to get noticed by clients", _skills_added: "Add your skills to get better job matches", _availability_set: "Set your availability to receive project offers", _job_posted: "Post your first job to start finding talent", _match_viewed: "Check out your AI matched talent recommendations", _talent_invited: "Invite talent to your job posting to get responses"};
    
    const _message = milestoneMessages[milestone] || "Continue your onboarding process";
    const _title = `Action needed: ${_message}`;
    
    // Insert notification
    await supabase.from('notifications').insert({_user_id: userId, _title, _message, _type: 'onboarding_reminder', _read: false});
    
    // Here you could also add logic to send an email
    // For example, call another edge function to send email
    
  } catch (error) {
    console.error("Error processing onboarding reminder:", error)  }
  } catch (_error) {}
}

async function processResumeScoring(_supabase, _applicationId) {_try {
    // Call the resume-scorer function to process the application
    const response = await fetch(
      `${Deno.env.get(&quot;SUPABASE_URL&quot;)}/functions/v1/resume-scorer`,
      {
        method: &quot;POST&quot;,
        headers: {
          &quot;Content-Type&quot;: &quot;application/json&quot;,
          &quot;Authorization&quot;: `Bearer ${Deno.env.get(&quot;SUPABASE_ANON_KEY&quot;)}`},
        body: JSON.stringify({ applicationId })}
    ),

    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`Resume scoring failed: ${JSON.stringify(errorData)}`)
    }

    // // // console.log(`Successfully scored application ${applicationId}`),    
    // Notify the client that their application has been scored
    const {_data: application} = await supabase
      .from("job_applications")
      .select("job_id")
      .eq("id", applicationId)
      .single(),
      
    if (application) {_const { data: job} = await supabase
        .from("jobs")
        .select("client_id, title")
        .eq("id", application.job_id)
        .single(),
    // console.log(`Successfully scored application ${applicationId}`);
    
    // Notify the client that their application has been scored
    const { data: application } = await supabase
      .from(&quot;job_applications&quot;)
      .select(&quot;job_id&quot;)
      .eq(&quot;id&quot;, applicationId)
      .single();
      
    if (application) {
      const { data: job } = await supabase
        .from(&quot;jobs&quot;)
        .select(&quot;client_id, title&quot;)
        .eq(&quot;id&quot;, application.job_id)
        .single();
        
      if (job) {
        // Create notification for the client
        await supabase.from(&quot;notifications&quot;).insert({
          user_id: job.client_id,
          title: &quot;Application Scored&quot;,
          message: `An application for &quot;${job.title}&quot; has been scored and is ready for review.`,
          type: &quot;application_scored&quot;,          related_id: applicationId,
          read: false
        })
      }
    }
  } catch (error) {
    console.error("Error processing resume scoring:", error)  }
}

async function processContentGeneration(supabase, contentType) {
  try {
    // // // console.log(`Starting scheduled content generation for ${contentType}`),    
    // Call the content generation function
    const response = await fetch(
      `${Deno.env.get(&quot;SUPABASE_URL&quot;)}/functions/v1/generate-content`,
      {
        method: &quot;POST&quot;,
        headers: {
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
          {
            method: &quot;POST&quot;,
            headers: {
              &quot;Content-Type&quot;: &quot;application/json&quot;,
              &quot;Authorization&quot;: `Bearer ${Deno.env.get(&quot;SUPABASE_ANON_KEY&quot;)}`},
            body: JSON.stringify({
              subject: contentData.subject,
              previewText: contentData.previewText,
              body: contentData.body,
              testMode: true,
              testEmail: adminEmail
            })}
        ),
        
        // Create notification for admin
        await supabase.from('notifications').insert({
          user_id: null, // System notification visible to admins
          title: &quot;Newsletter Draft Ready&quot;,
          message: &quot;AI-generated newsletter draft has been sent to your email for review.&quot;,
          type: &quot;system&quot;,
          read: false
        })
      }
    }
    
    return contentData
  } catch (error) {
    console.error(`Error processing ${contentType} generation:`, error)
  }}
