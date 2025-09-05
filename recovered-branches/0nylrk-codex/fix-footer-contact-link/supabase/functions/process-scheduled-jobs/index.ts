import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.45.0&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseAdmin = createClient(
    Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
    Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;,
    { auth: { persistSession: false } }
  );

  try {
    // Get pending jobs
    const { data: jobs, error: fetchError } = await supabaseAdmin
      .from('scheduled_jobs')
      .select('*')
      .eq('status', 'pending')
      .lt('scheduled_for', new Date().toISOString());

    if (fetchError) throw fetchError;

    for (const job of jobs || []) {
      // Process job based on type
      switch (job.job_type) {
        case 'onboarding_reminder':
          // Process onboarding reminder
          if (job.payload && job.payload.user_id && job.payload.missing_milestone) {
            await processOnboardingReminder(
              supabaseAdmin,
              job.payload.user_id,
              job.payload.missing_milestone,
              job.payload.role
            );
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
            await processResumeScoring(supabaseAdmin, job.payload.application_id);
          }
          break;
        case 'blog_generation':
          await processContentGeneration(supabaseAdmin, 'blog');
          break;
        case 'newsletter_generation':
          await processContentGeneration(supabaseAdmin, 'newsletter');
          break;
        // Add more job types as needed
      }

      // Update job status
      await supabaseAdmin
        .from('scheduled_jobs')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString()
        })
        .eq('id', job.id);
    }

    return new Response(JSON.stringify({ processed: jobs?.length || 0 }), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 200});
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 500});
  }
});

async function processOnboardingReminder(supabase, userId, milestone, role) {
  try {
    // Create notification for user
    const milestoneMessages = {
      profile_completed: &quot;Complete your profile to get noticed by clients&quot;,
      skills_added: &quot;Add your skills to get better job matches&quot;,
      availability_set: &quot;Set your availability to receive project offers&quot;,
      job_posted: &quot;Post your first job to start finding talent&quot;,
      match_viewed: &quot;Check out your AI matched talent recommendations&quot;,
      talent_invited: &quot;Invite talent to your job posting to get responses&quot;
    };
    
    const message = milestoneMessages[milestone] || &quot;Continue your onboarding process&quot;;
    const title = `Action needed: ${message}`;
    
    // Insert notification
    await supabase.from('notifications').insert({
      user_id: userId,
      title,
      message,
      type: 'onboarding_reminder',
      read: false
    });
    
    // Here you could also add logic to send an email
    // For example, call another edge function to send email
    
  } catch (error) {
    console.error(&quot;Error processing onboarding reminder:&quot;, error);
  }
}

async function processResumeScoring(supabase, applicationId) {
  try {
    // Call the resume-scorer function to process the application
    const response = await fetch(
      `${Deno.env.get(&quot;SUPABASE_URL&quot;)}/functions/v1/resume-scorer`,
      {
        method: &quot;POST&quot;,
        headers: {
          &quot;Content-Type&quot;: &quot;application/json&quot;,
          &quot;Authorization&quot;: `Bearer ${Deno.env.get(&quot;SUPABASE_ANON_KEY&quot;)}`},
        body: JSON.stringify({ applicationId })}
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Resume scoring failed: ${JSON.stringify(errorData)}`);
    }

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
          type: &quot;application_scored&quot;,
          related_id: applicationId,
          read: false
        });
      }
    }
  } catch (error) {
    console.error(&quot;Error processing resume scoring:&quot;, error);
  }
}

async function processContentGeneration(supabase, contentType) {
  try {
    // console.log(`Starting scheduled content generation for ${contentType}`);
    
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
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Content generation failed: ${JSON.stringify(errorData)}`);
    }

    const contentData = await response.json();
    // console.log(`Successfully generated ${contentType} content`);
    
    // If it's a newsletter, send a test email to the admin
    if (contentType === 'newsletter') {
      // Get admin email from profiles
      const { data: adminProfiles } = await supabase
        .from('profiles')
        .select('email')
        .eq('role', 'admin')
        .limit(1);
      
      if (adminProfiles && adminProfiles.length > 0) {
        const adminEmail = adminProfiles[0].email;
        
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
        );
        
        // Create notification for admin
        await supabase.from('notifications').insert({
          user_id: null, // System notification visible to admins
          title: &quot;Newsletter Draft Ready&quot;,
          message: &quot;AI-generated newsletter draft has been sent to your email for review.&quot;,
          type: &quot;system&quot;,
          read: false
        });
      }
    }
    
    return contentData;
  } catch (error) {
    console.error(`Error processing ${contentType} generation:`, error);
  }
}
