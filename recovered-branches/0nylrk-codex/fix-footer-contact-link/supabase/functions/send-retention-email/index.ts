
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.45.0&quot;;
import { Resend } from &quot;npm:resend@2.0.0&quot;;

// Initialize Resend with API key
const resend = new Resend(Deno.env.get(&quot;RESEND_API_KEY&quot;));

// Initialize Supabase client
const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;)!;
const supabaseServiceKey = Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;)!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

interface EmailData {
  user_id: string;
  email_type: string;
  display_name: string;
  user_type: string;
  days_inactive?: number;
  onboarding_status?: any;
  job_id?: string;
  job_title?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Extract job data from request
    const jobData = await req.json();
    const { id: jobId, payload } = jobData;
    const emailData = payload as EmailData;
    
    // Fetch user's email
    const { data: userData, error: userError } = await supabase
      .from(&quot;profiles&quot;)
      .select(&quot;id, display_name, avatar_url, user_type&quot;)
      .eq(&quot;id&quot;, emailData.user_id)
      .single();
    
    if (userError) {
      throw new Error(`Error fetching user data: ${userError.message}`);
    }
    
    const { data: authUser, error: authError } = await supabase
      .from(&quot;auth.users&quot;)
      .select(&quot;email&quot;)
      .eq(&quot;id&quot;, emailData.user_id)
      .single();
    
    if (authError) {
      throw new Error(`Error fetching user email: ${authError.message}`);
    }
    
    const userEmail = authUser.email;
    if (!userEmail) {
      throw new Error(&quot;User email not found&quot;);
    }

    // Generate email content based on email type
    const { subject, html } = await generateEmail(emailData, userData);

    // Send email via Resend
    const emailResponse = await resend.emails.send({
      from: &quot;Zion AI Marketplace <notifications@zion.ai>&quot;,
      to: userEmail,
      subject: subject,
      html: html});

    if (emailResponse.error) {
      throw new Error(`Failed to send email: ${emailResponse.error.message}`);
    }

    // Update job status
    await supabase
      .from(&quot;scheduled_jobs&quot;)
      .update({
        status: &quot;completed&quot;,
        completed_at: new Date().toISOString()})
      .eq(&quot;id&quot;, jobId);

    // Update email campaign record
    await supabase
      .from(&quot;email_campaigns&quot;)
      .update({
        status: &quot;sent&quot;,
        sent_at: new Date().toISOString()})
      .eq(&quot;user_id&quot;, emailData.user_id)
      .eq(&quot;campaign_type&quot;, emailData.email_type);

    return new Response(
      JSON.stringify({
        success: true,
        message: &quot;Email sent successfully&quot;,
        email: emailResponse}),
      {
        headers: {
          ...corsHeaders,
          &quot;Content-Type&quot;: &quot;application/json&quot;},
        status: 200}
    );
  } catch (error) {
    console.error(&quot;Error in send-retention-email function:&quot;, error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message}),
      {
        headers: {
          ...corsHeaders,
          &quot;Content-Type&quot;: &quot;application/json&quot;},
        status: 500}
    );
  }
});

async function generateEmail(emailData: EmailData, userData: any): Promise<{ subject: string; html: string }> {
  const { email_type, display_name, user_type } = emailData;
  const firstName = display_name?.split(&quot; &quot;)[0] || &quot;there&quot;;

  // Get onboarding status for personalized content
  let nextAction = "&quot;;
  let ctaLink = &quot;/dashboard&quot;;
  let ctaText = &quot;Go to Dashboard&quot;;

  if (email_type === &quot;welcome_series&quot;) {
    // Customize based on user type
    if (user_type === &quot;jobSeeker&quot; || user_type === &quot;creator&quot;) {
      return {
        subject: `Welcome to Zion AI Marketplace, ${firstName}!`,
        html: `
          <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
            <h2>Welcome to Zion AI Marketplace!</h2>
            <p>Hi ${firstName},</p>
            <p>We're excited to have you join our community of talented AI professionals.</p>
            <p>Here's what to do next to get started:</p>
            <ol>
              <li>Complete your profile to help clients find you</li>
              <li>Add your skills and expertise</li>
              <li>Set your availability preferences</li>
              <li>Browse available jobs and start applying</li>
            </ol>
            <div style=&quot;margin: 25px 0;">
              <a href="${supabaseUrl}/dashboard&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Complete Your Profile</Link>
            </div>
            <p>If you have any questions, just reply to this email.</p>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `};
    } else {
      // For clients/employers
      return {
        subject: `Welcome to Zion AI Marketplace, ${firstName}!`,
        html: `
          <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
            <h2>Welcome to Zion AI Marketplace!</h2>
            <p>Hi ${firstName},</p>
            <p>We're excited to have you join our community of innovative businesses and entrepreneurs.</p>
            <p>Here's what to do next to get started:</p>
            <ol>
              <li>Complete your company profile</li>
              <li>Post your first job or project</li>
              <li>Browse talent profiles in our directory</li>
              <li>Connect with AI professionals that match your needs</li>
            </ol>
            <div style=&quot;margin: 25px 0;">
              <a href="${supabaseUrl}/dashboard&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Post Your First Job</Link>
            </div>
            <p>If you have any questions, just reply to this email.</p>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `};
    }
  } else if (email_type === &quot;inactivity_3&quot;) {
    // Day 3 incomplete action reminder
    if (emailData.onboarding_status) {
      const onboarding = emailData.onboarding_status;
      
      if (user_type === &quot;jobSeeker&quot; || user_type === &quot;creator&quot;) {
        if (!onboarding.profile_completed) {
          nextAction = &quot;complete your profile&quot;;
          ctaLink = &quot;/profile&quot;;
          ctaText = &quot;Complete Your Profile&quot;;
        } else if (!onboarding.skills_added) {
          nextAction = &quot;add your skills to get matched with the right opportunities&quot;;
          ctaLink = &quot;/profile/skills&quot;;
          ctaText = &quot;Add Your Skills&quot;;
        } else if (!onboarding.availability_set) {
          nextAction = &quot;set your availability to help clients find you&quot;;
          ctaLink = &quot;/profile/settings&quot;;
          ctaText = &quot;Set Your Availability&quot;;
        }
      } else {
        // For clients
        if (!onboarding.job_posted) {
          nextAction = &quot;post your first job to start finding talent&quot;;
          ctaLink = &quot;/post-job&quot;;
          ctaText = &quot;Post a Job&quot;;
        } else if (!onboarding.talent_invited) {
          nextAction = &quot;invite talent to speed up your hiring process&quot;;
          ctaLink = &quot;/talent&quot;;
          ctaText = &quot;Find Talent&quot;;
        }
      }
    }

    return {
      subject: `${firstName}, one quick step to unlock more opportunities`,
      html: `
        <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
          <h2>One quick step to get more from Zion</h2>
          <p>Hi ${firstName},</p>
          <p>We noticed you haven't had a chance to ${nextAction || &quot;complete your setup&quot;} yet.</p>
          <p>This will help you ${user_type === &quot;jobSeeker&quot; || user_type === &quot;creator&quot; ? 
            &quot;get discovered by clients looking for your skills&quot; : 
            &quot;find the perfect AI talent for your projects&quot;}.</p>
          <div style=&quot;margin: 25px 0;">
            <a href="${supabaseUrl}${ctaLink}&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>${ctaText}</Link>
          </div>
          <p>Need help? Just reply to this email and we'll assist you.</p>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `};
  } else if (email_type === &quot;inactivity_7&quot;) {
    // Day 7+ reactivation
    if (user_type === &quot;jobSeeker&quot; || user_type === &quot;creator&quot;) {
      return {
        subject: `New projects waiting for your expertise, ${firstName}`,
        html: `
          <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
            <h2>New opportunities waiting for you!</h2>
            <p>Hi ${firstName},</p>
            <p>We've seen new AI projects posted in your area of expertise this week.</p>
            <p>Complete your profile this week and unlock premium visibility to stand out to clients looking for talent like you.</p>
            <div style=&quot;margin: 25px 0;">
              <a href="${supabaseUrl}/dashboard&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>See New Projects</Link>
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `};
    } else {
      // For clients
      return {
        subject: `Zion's top AI talent this week — don't miss out, ${firstName}`,
        html: `
          <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
            <h2>This week's top AI talent</h2>
            <p>Hi ${firstName},</p>
            <p>We've added new exceptional AI professionals to our talent pool this week who might be perfect for your projects.</p>
            <p>Post a job this week and get featured in our newsletter sent to all our talent.</p>
            <div style=&quot;margin: 25px 0;">
              <a href="${supabaseUrl}/talent&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Browse Top Talent</Link>
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `};
    }
  } else if (email_type === &quot;inactivity_30&quot;) {
    // 30-day reengagement with incentives
    if (user_type === &quot;jobSeeker&quot; || user_type === &quot;creator&quot;) {
      return {
        subject: `${firstName}, we miss you! Special offer inside`,
        html: `
          <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
            <h2>We miss you! Special offer inside</h2>
            <p>Hi ${firstName},</p>
            <p>It's been a while since we've seen you on Zion AI Marketplace. We've noticed many new jobs that match your skills have been posted.</p>
            <p><strong>Special Offer:</strong> Return this week and complete your profile to unlock 2 weeks of premium visibility absolutely free.</p>
            <div style=&quot;margin: 25px 0;">
              <a href="${supabaseUrl}/dashboard&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Claim Your Offer</Link>
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `};
    } else {
      // For clients
      return {
        subject: `${firstName}, exclusive hiring discount inside`,
        html: `
          <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
            <h2>Exclusive hiring discount inside</h2>
            <p>Hi ${firstName},</p>
            <p>We haven't seen you for a while on Zion AI Marketplace. Our talent pool has grown significantly since your last visit.</p>
            <p><strong>Special Offer:</strong> Post a job this week and receive 20% off our platform fees for your next hire.</p>
            <div style=&quot;margin: 25px 0;">
              <a href="${supabaseUrl}/post-job&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Post a Job</Link>
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `};
    }
  } else if (email_type === &quot;no_applications_7_days&quot;) {
    // Email for talent not receiving applications
    return {
      subject: `Boost your profile visibility, ${firstName}`,
      html: `
        <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
          <h2>Boost your profile visibility</h2>
          <p>Hi ${firstName},</p>
          <p>We noticed you haven't received applications recently. Here are some tips to make your profile stand out:</p>
          <ul>
            <li>Add more details to your skills and experience</li>
            <li>Upload samples of your work to your portfolio</li>
            <li>Make sure your availability is up to date</li>
            <li>Adjust your rate if needed to be more competitive</li>
          </ul>
          <div style=&quot;margin: 25px 0;">
            <a href="${supabaseUrl}/profile&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Update Your Profile</Link>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `};
  } else if (email_type === &quot;unfilled_job_14_days&quot;) {
    // Email for clients with unfilled jobs
    return {
      subject: `Tips to find the perfect talent for &quot;${emailData.job_title}&quot;`,
      html: `
        <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
          <h2>Let's find talent for your job</h2>
          <p>Hi ${firstName},</p>
          <p>We noticed your job &quot;${emailData.job_title}&quot; has been open for a while. Here are some tips to attract more qualified candidates:</p>
          <ul>
            <li>Review and update your job description with more details</li>
            <li>Consider adjusting your budget range if possible</li>
            <li>Proactively invite talent from our directory</li>
            <li>Add more specific skills requirements</li>
          </ul>
          <div style=&quot;margin: 25px 0;">
            <a href="${supabaseUrl}/dashboard/jobs/${emailData.job_id}&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Update Job Post</Link>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `};
  }

  // Default generic email
  return {
    subject: `${firstName}, we miss you at Zion AI Marketplace`,
    html: `
      <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
        <h2>We've missed you!</h2>
        <p>Hi ${firstName},</p>
        <p>We noticed you haven't been active on Zion AI Marketplace recently.</p>
        <p>Log back in to see what's new and connect with ${
          user_type === &quot;jobSeeker&quot; || user_type === &quot;creator&quot; 
            ? &quot;clients looking for your skills&quot; 
            : &quot;talented AI professionals&quot;
        }.</p>
        <div style=&quot;margin: 25px 0;">
          <a href="${supabaseUrl}/dashboard&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;">Log In Now</Link>
        </div>
        <p>The Zion AI Marketplace Team</p>
      </div>
    `};
}
