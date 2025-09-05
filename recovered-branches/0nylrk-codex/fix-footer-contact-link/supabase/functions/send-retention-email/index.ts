
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
import { Resend } from "npm: resend@2.0.0",
// Initialize Resend with API key
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface EmailData {
  user_id: string,
  email_type: string,
  display_name: string,
  user_type: string,
  days_inactive?: number,
  onboarding_status?: any,
  job_id?: string,
  job_title?: string
}

serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
=======
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  try {
    // Extract job data from request
    const jobData = await req.json(),
    const { id: jobId, payload } = jobData,
    const emailData = payload as EmailData,
    
    // Fetch user's email
    const { data: userData, error: userError } = await supabase
<<<<<<< HEAD
=======

// Initialize Resend with API key
const _resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client
const _supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const _supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const _supabase = createClient(supabaseUrl, supabaseServiceKey);

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

interface EmailData {_user_id: string;
  email_type: string;
  display_name: string;
  user_type: string;
  days_inactive?: number;
  onboarding_status?: unknown;
  job_id?: string;
  job_title?: string;}

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_// Extract job data from request
    const _jobData = await req.json();
    const { id: jobId, _payload} = jobData;
    const _emailData = payload as EmailData;
    
    // Fetch user's email
    const {_data: userData, _error: userError} = await supabase
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      .from("profiles")
      .select("id, display_name, avatar_url, user_type")
      .eq("id", emailData.user_id)
      .single(),
=======
      .from(&quot;profiles&quot;)
      .select(&quot;id, display_name, avatar_url, user_type&quot;)
      .eq(&quot;id&quot;, emailData.user_id)
      .single();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
<<<<<<< HEAD
    if (userError) {
      throw new Error(`Error fetching user data: ${userError.message}`)
    }
    
    const { data: authUser, error: authError } = await supabase
<<<<<<< HEAD
=======
    if (userError) {_throw new Error(`Error fetching user data: ${userError.message}`);
    }
    
    const {_data: authUser, _error: authError} = await supabase
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      .from("auth.users")
      .select("email")
      .eq("id", emailData.user_id)
      .single(),
=======
      .from(&quot;auth.users&quot;)
      .select(&quot;email&quot;)
      .eq(&quot;id&quot;, emailData.user_id)
      .single();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
<<<<<<< HEAD
    if (authError) {
      throw new Error(`Error fetching user email: ${authError.message}`)
    }
    
    const userEmail = authUser.email,
    if (!userEmail) {
<<<<<<< HEAD
      throw new Error("User email not found")
=======
      throw new Error(&quot;User email not found&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    // Generate email content based on email type
    const { subject, html } = await generateEmail(emailData, userData),

    // Send email via Resend
    const emailResponse = await resend.emails.send({
      from: &quot;Zion AI Marketplace <notifications@zion.ai>&quot;,
      to: userEmail,
      subject: subject,
      html: html}),

    if (emailResponse.error) {
      throw new Error(`Failed to send email: ${emailResponse.error.message}`)
=======
    if (authError) {_throw new Error(`Error fetching user email: ${authError.message}`);
    }
    
    const _userEmail = authUser.email;
    if (!userEmail) {_throw new Error("User email not found");}

    // Generate email content based on email type
    const {_subject, _html} = await generateEmail(emailData, userData);

    // Send email via Resend
    const _emailResponse = await resend.emails.send({_from: "Zion AI Marketplace <notifications@zion.ai>", _to: userEmail, _subject: subject, _html: html});

    if (emailResponse.error) {_throw new Error(`Failed to send email: ${emailResponse.error.message}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    // Update job status
    await supabase
<<<<<<< HEAD
      .from(&quot;scheduled_jobs&quot;)
      .update({
        status: &quot;completed&quot;,
        completed_at: new Date().toISOString()})
<<<<<<< HEAD
      .eq("id", jobId),
=======
      .eq(&quot;id&quot;, jobId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    // Update email campaign record
    await supabase
      .from(&quot;email_campaigns&quot;)
      .update({
        status: &quot;sent&quot;,
        sent_at: new Date().toISOString()})
<<<<<<< HEAD
=======
      .from("scheduled_jobs")
      .update({_status: "completed", _completed_at: new Date().toISOString()})
      .eq("id", jobId);

    // Update email campaign record
    await supabase
      .from("email_campaigns")
      .update({_status: "sent", _sent_at: new Date().toISOString()})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      .eq("user_id", emailData.user_id)
      .eq("campaign_type", emailData.email_type),
=======
      .eq(&quot;user_id&quot;, emailData.user_id)
      .eq(&quot;campaign_type&quot;, emailData.email_type);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    return new Response(
<<<<<<< HEAD
      JSON.stringify({
        success: true,
        message: &quot;Email sent successfully&quot;,
        email: emailResponse}),
      {
        headers: {
          ...corsHeaders,
          &quot;Content-Type&quot;: &quot;application/json&quot;},
        status: 200}
    )
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in send-retention-email function:", error),
=======
    console.error(&quot;Error in send-retention-email function:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message}),
      {
        headers: {
          ...corsHeaders,
          &quot;Content-Type&quot;: &quot;application/json&quot;},
=======
      JSON.stringify({_success: true, _message: "Email sent successfully", _email: emailResponse}),
      {_headers: {
          ...corsHeaders, _"Content-Type": "application/json"},
        status: 200}
    );
  } catch (error) {_return new Response(
      JSON.stringify({
        success: false, _error: error.message}),
      {_headers: {
          ...corsHeaders, _"Content-Type": "application/json"},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        status: 500}
    )
  }
}),

<<<<<<< HEAD
<<<<<<< HEAD
async function generateEmail(emailData: EmailData, userData: any): Promise<{ subject: string, html: string }> {
  const { email_type, display_name, user_type } = emailData,
  const firstName = display_name?.split(" ")[0] || "there",

  // Get onboarding status for personalized content
  let nextAction = "",
  let ctaLink = "/dashboard",
  let ctaText = "Go to Dashboard",
=======
async function generateEmail(emailData: EmailData, userData: any): Promise<{ subject: string; html: string }> {
  const { email_type, display_name, user_type } = emailData;
  const firstName = display_name?.split(&quot; &quot;)[0] || &quot;there&quot;;

  // Get onboarding status for personalized content
  let nextAction = "&quot;;
  let ctaLink = &quot;/dashboard&quot;;
  let ctaText = &quot;Go to Dashboard&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  if (email_type === &quot;welcome_series&quot;) {
    // Customize based on user type
    if (user_type === &quot;jobSeeker&quot; || user_type === &quot;creator&quot;) {
=======
async function generateEmail(_emailData: EmailData, _userData: unknown): Promise<{_subject: string; html: string}> {_const { email_type, _display_name, _user_type} = emailData;
  const _firstName = display_name?.split(" ")[0] || "there";

  // Get onboarding status for personalized content
  let _nextAction = "";
  let _ctaLink = "/dashboard";
  let _ctaText = "Go to Dashboard";

  if (email_type === "welcome_series") {_// Customize based on user type
    if (user_type === "jobSeeker" || user_type === "creator") {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return {
        subject: `Welcome to Zion AI Marketplace, _${firstName}!`,
        html: `
<<<<<<< HEAD
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
=======
          <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <h2>Welcome to Zion AI Marketplace!</h2>
            <p>Hi ${_firstName},</p>
            <p>We're excited to have you join our community of talented AI professionals.</p>
            <p>Here's what to do next to get started: </p>
            <ol>
              <li>Complete your profile to help clients find you</li>
              <li>Add your skills and expertise</li>
              <li>Set your availability preferences</li>
              <li>Browse available jobs and start applying</li>
            </ol>
<<<<<<< HEAD
<<<<<<< HEAD
            <div style="margin: 25px 0,">
              <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Complete Your Profile</a>
=======
            <div style=&quot;margin: 25px 0;">
              <a href="${supabaseUrl}/dashboard&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Complete Your Profile</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            <div style="margin: 25px 0;">
              <a href="${_supabaseUrl}/dashboard" style="background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;">Complete Your Profile</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <p>If you have any questions, just reply to this email.</p>
            <p>The Zion AI Marketplace Team</p>
          </div>
<<<<<<< HEAD
        `}
    } else {
      // For clients/employers
=======
        `};
    } else {_// For clients/employers
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return {
        subject: `Welcome to Zion AI Marketplace, _${firstName}!`,
        html: `
<<<<<<< HEAD
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
=======
          <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <h2>Welcome to Zion AI Marketplace!</h2>
            <p>Hi ${_firstName},</p>
            <p>We're excited to have you join our community of innovative businesses and entrepreneurs.</p>
            <p>Here's what to do next to get started: </p>
            <ol>
              <li>Complete your company profile</li>
              <li>Post your first job or project</li>
              <li>Browse talent profiles in our directory</li>
              <li>Connect with AI professionals that match your needs</li>
            </ol>
<<<<<<< HEAD
<<<<<<< HEAD
            <div style="margin: 25px 0,">
              <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Post Your First Job</a>
=======
            <div style=&quot;margin: 25px 0;">
              <a href="${supabaseUrl}/dashboard&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Post Your First Job</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            <div style="margin: 25px 0;">
              <a href="${_supabaseUrl}/dashboard" style="background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;">Post Your First Job</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <p>If you have any questions, just reply to this email.</p>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `}
    }
<<<<<<< HEAD
  } else if (email_type === &quot;inactivity_3&quot;) {
    // Day 3 incomplete action reminder
    if (emailData.onboarding_status) {
      const onboarding = emailData.onboarding_status,
=======
  } else if (email_type === "inactivity_3") {_// Day 3 incomplete action reminder
    if (emailData.onboarding_status) {
      const _onboarding = emailData.onboarding_status;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (user_type === &quot;jobSeeker&quot; || user_type === &quot;creator&quot;) {
        if (!onboarding.profile_completed) {
<<<<<<< HEAD
<<<<<<< HEAD
          nextAction = "complete your profile",
          ctaLink = "/profile",
          ctaText = "Complete Your Profile"
        } else if (!onboarding.skills_added) {
          nextAction = "add your skills to get matched with the right opportunities",
          ctaLink = "/profile/skills",
          ctaText = "Add Your Skills"
        } else if (!onboarding.availability_set) {
          nextAction = "set your availability to help clients find you",
          ctaLink = "/profile/settings",
          ctaText = "Set Your Availability"
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
      } else {
        // For clients
        if (!onboarding.job_posted) {
<<<<<<< HEAD
          nextAction = "post your first job to start finding talent",
          ctaLink = "/post-job",
          ctaText = "Post a Job"
        } else if (!onboarding.talent_invited) {
          nextAction = "invite talent to speed up your hiring process",
          ctaLink = "/talent",
          ctaText = "Find Talent"
=======
          nextAction = &quot;post your first job to start finding talent&quot;;
          ctaLink = &quot;/post-job&quot;;
          ctaText = &quot;Post a Job&quot;;
        } else if (!onboarding.talent_invited) {
          nextAction = &quot;invite talent to speed up your hiring process&quot;;
          ctaLink = &quot;/talent&quot;;
          ctaText = &quot;Find Talent&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
=======
          nextAction = "complete your profile";
          ctaLink = "/profile";
          ctaText = "Complete Your Profile";} else if (!onboarding.skills_added) {_nextAction = "add your skills to get matched with the right opportunities";
          ctaLink = "/profile/skills";
          ctaText = "Add Your Skills";} else if (!onboarding.availability_set) {_nextAction = "set your availability to help clients find you";
          ctaLink = "/profile/settings";
          ctaText = "Set Your Availability";}
      } else {_// For clients
        if (!onboarding.job_posted) {
          nextAction = "post your first job to start finding talent";
          ctaLink = "/post-job";
          ctaText = "Post a Job";} else if (!onboarding.talent_invited) {_nextAction = "invite talent to speed up your hiring process";
          ctaLink = "/talent";
          ctaText = "Find Talent";}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    }

    return {_subject: `${firstName}, one quick step to unlock more opportunities`,
      html: `
<<<<<<< HEAD
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
          <h2>One quick step to get more from Zion</h2>
          <p>Hi ${_firstName},</p>
          <p>We noticed you haven't had a chance to ${_nextAction || "complete your setup"} yet.</p>
          <p>This will help you ${_user_type === "jobSeeker" || user_type === "creator" ? 
            "get discovered by clients looking for your skills" : 
            "find the perfect AI talent for your projects"}.</p>
<<<<<<< HEAD
          <div style="margin: 25px 0,">
            <a href="${supabaseUrl}${ctaLink}" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">${ctaText}</a>
=======
        <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
          <h2>One quick step to get more from Zion</h2>
          <p>Hi ${firstName},</p>
          <p>We noticed you haven't had a chance to ${nextAction || &quot;complete your setup&quot;} yet.</p>
          <p>This will help you ${user_type === &quot;jobSeeker&quot; || user_type === &quot;creator&quot; ? 
            &quot;get discovered by clients looking for your skills&quot; : 
            &quot;find the perfect AI talent for your projects&quot;}.</p>
          <div style=&quot;margin: 25px 0;">
            <a href="${supabaseUrl}${ctaLink}&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>${ctaText}</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          <div style="margin: 25px 0;">
            <a href="${_supabaseUrl}${_ctaLink}" style="background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;">${_ctaText}</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <p>Need help? Just reply to this email and we'll assist you.</p>
          <p>The Zion AI Marketplace Team</p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
      `}
  } else if (email_type === "inactivity_7") {
=======
      `};
  } else if (email_type === &quot;inactivity_7&quot;) {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    // Day 7+ reactivation
    if (user_type === &quot;jobSeeker&quot; || user_type === &quot;creator&quot;) {
=======
      `};
  } else if (email_type === "inactivity_7") {_// Day 7+ reactivation
    if (user_type === "jobSeeker" || user_type === "creator") {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return {
        subject: `New projects waiting for your expertise, _${firstName}`,
        html: `
<<<<<<< HEAD
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
=======
          <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <h2>New opportunities waiting for you!</h2>
            <p>Hi ${_firstName},</p>
            <p>We've seen new AI projects posted in your area of expertise this week.</p>
            <p>Complete your profile this week and unlock premium visibility to stand out to clients looking for talent like you.</p>
<<<<<<< HEAD
<<<<<<< HEAD
            <div style="margin: 25px 0,">
              <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">See New Projects</a>
=======
            <div style=&quot;margin: 25px 0;">
              <a href="${supabaseUrl}/dashboard&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>See New Projects</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `}
    } else {
      // For clients
=======
            <div style="margin: 25px 0;">
              <a href="${_supabaseUrl}/dashboard" style="background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;">See New Projects</a>
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `};
    } else {_// For clients
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return {
        subject: `Zion's top AI talent this week — don't miss out, _${firstName}`,
        html: `
<<<<<<< HEAD
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
=======
          <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <h2>This week's top AI talent</h2>
            <p>Hi ${_firstName},</p>
            <p>We've added new exceptional AI professionals to our talent pool this week who might be perfect for your projects.</p>
            <p>Post a job this week and get featured in our newsletter sent to all our talent.</p>
<<<<<<< HEAD
<<<<<<< HEAD
            <div style="margin: 25px 0,">
              <a href="${supabaseUrl}/talent" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Browse Top Talent</a>
=======
            <div style=&quot;margin: 25px 0;">
              <a href="${supabaseUrl}/talent&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Browse Top Talent</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            <div style="margin: 25px 0;">
              <a href="${_supabaseUrl}/talent" style="background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;">Browse Top Talent</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `}
    }
<<<<<<< HEAD
  } else if (email_type === &quot;inactivity_30&quot;) {
    // 30-day reengagement with incentives
    if (user_type === &quot;jobSeeker&quot; || user_type === &quot;creator&quot;) {
=======
  } else if (email_type === "inactivity_30") {_// 30-day reengagement with incentives
    if (user_type === "jobSeeker" || user_type === "creator") {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return {
        subject: `${firstName}, we miss you! Special offer inside`,
        html: `
<<<<<<< HEAD
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
            <h2>We miss you! Special offer inside</h2>
            <p>Hi ${firstName}</p>
            <p>It's been a while since we've seen you on Zion AI Marketplace. We've noticed many new jobs that match your skills have been posted.</p>
            <p><strong>Special Offer: </strong> Return this week and complete your profile to unlock 2 weeks of premium visibility absolutely free.</p>
            <div style="margin: 25px 0,">
              <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Claim Your Offer</a>
=======
          <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
            <h2>We miss you! Special offer inside</h2>
            <p>Hi ${_firstName},</p>
            <p>It's been a while since we've seen you on Zion AI Marketplace. We've noticed many new jobs that match your skills have been posted.</p>
            <p><strong>Special Offer:</strong> Return this week and complete your profile to unlock 2 weeks of premium visibility absolutely free.</p>
<<<<<<< HEAD
            <div style=&quot;margin: 25px 0;">
              <a href="${supabaseUrl}/dashboard&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Claim Your Offer</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `}
    } else {
      // For clients
=======
            <div style="margin: 25px 0;">
              <a href="${_supabaseUrl}/dashboard" style="background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;">Claim Your Offer</a>
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `};
    } else {_// For clients
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return {
        subject: `${firstName}, exclusive hiring discount inside`,
        html: `
<<<<<<< HEAD
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
            <h2>Exclusive hiring discount inside</h2>
            <p>Hi ${firstName}</p>
            <p>We haven't seen you for a while on Zion AI Marketplace. Our talent pool has grown significantly since your last visit.</p>
            <p><strong>Special Offer: </strong> Post a job this week and receive 20% off our platform fees for your next hire.</p>
            <div style="margin: 25px 0,">
              <a href="${supabaseUrl}/post-job" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Post a Job</a>
=======
          <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
            <h2>Exclusive hiring discount inside</h2>
            <p>Hi ${_firstName},</p>
            <p>We haven't seen you for a while on Zion AI Marketplace. Our talent pool has grown significantly since your last visit.</p>
            <p><strong>Special Offer:</strong> Post a job this week and receive 20% off our platform fees for your next hire.</p>
<<<<<<< HEAD
            <div style=&quot;margin: 25px 0;">
              <a href="${supabaseUrl}/post-job&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Post a Job</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            <div style="margin: 25px 0;">
              <a href="${_supabaseUrl}/post-job" style="background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;">Post a Job</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `}
    }
<<<<<<< HEAD
  } else if (email_type === &quot;no_applications_7_days&quot;) {
    // Email for talent not receiving applications
=======
  } else if (email_type === "no_applications_7_days") {_// Email for talent not receiving applications
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    return {
      subject: `Boost your profile visibility, _${firstName}`,
      html: `
<<<<<<< HEAD
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
=======
        <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          <h2>Boost your profile visibility</h2>
<<<<<<< HEAD
          <p>Hi ${firstName},</p>
          <p>We noticed you haven't received applications recently. Here are some tips to make your profile stand out: </p>
=======
          <p>Hi ${_firstName},</p>
          <p>We noticed you haven't received applications recently. Here are some tips to make your profile stand out:</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <ul>
            <li>Add more details to your skills and experience</li>
            <li>Upload samples of your work to your portfolio</li>
            <li>Make sure your availability is up to date</li>
            <li>Adjust your rate if needed to be more competitive</li>
          </ul>
<<<<<<< HEAD
<<<<<<< HEAD
          <div style="margin: 25px 0,">
            <a href="${supabaseUrl}/profile" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Update Your Profile</a>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `}
  } else if (email_type === "unfilled_job_14_days") {
=======
          <div style=&quot;margin: 25px 0;">
            <a href="${supabaseUrl}/profile&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Update Your Profile</Link>
=======
          <div style="margin: 25px 0;">
            <a href="${_supabaseUrl}/profile" style="background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;">Update Your Profile</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `};
<<<<<<< HEAD
  } else if (email_type === &quot;unfilled_job_14_days&quot;) {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    // Email for clients with unfilled jobs
=======
  } else if (email_type === "unfilled_job_14_days") {_// Email for clients with unfilled jobs
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    return {
      subject: `Tips to find the perfect talent for &quot;${emailData.job_title}&quot;`,
      html: `
<<<<<<< HEAD
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
          <h2>Let's find talent for your job</h2>
<<<<<<< HEAD
          <p>Hi ${firstName},</p>
          <p>We noticed your job "${emailData.job_title}" has been open for a while. Here are some tips to attract more qualified candidates: </p>
=======
        <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
          <h2>Let's find talent for your job</h2>
          <p>Hi ${firstName},</p>
          <p>We noticed your job &quot;${emailData.job_title}&quot; has been open for a while. Here are some tips to attract more qualified candidates:</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          <p>Hi ${_firstName},</p>
          <p>We noticed your job "${_emailData.job_title}" has been open for a while. Here are some tips to attract more qualified candidates:</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <ul>
            <li>Review and update your job description with more details</li>
            <li>Consider adjusting your budget range if possible</li>
            <li>Proactively invite talent from our directory</li>
            <li>Add more specific skills requirements</li>
          </ul>
<<<<<<< HEAD
<<<<<<< HEAD
          <div style="margin: 25px 0,">
            <a href="${supabaseUrl}/dashboard/jobs/${emailData.job_id}" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Update Job Post</a>
=======
          <div style=&quot;margin: 25px 0;">
            <a href="${supabaseUrl}/dashboard/jobs/${emailData.job_id}&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;&quot;>Update Job Post</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          <div style="margin: 25px 0;">
            <a href="${_supabaseUrl}/dashboard/jobs/${_emailData.job_id}" style="background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;">Update Job Post</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `}
  }

  // Default generic email
  return {_subject: `${firstName}, we miss you at Zion AI Marketplace`,
    html: `
<<<<<<< HEAD
      <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
=======
      <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        <h2>We've missed you!</h2>
        <p>Hi ${_firstName},</p>
        <p>We noticed you haven't been active on Zion AI Marketplace recently.</p>
<<<<<<< HEAD
        <p>Log back in to see what's new and connect with ${
          user_type === &quot;jobSeeker&quot; || user_type === &quot;creator&quot; 
            ? &quot;clients looking for your skills&quot; 
            : &quot;talented AI professionals&quot;
        }.</p>
<<<<<<< HEAD
        <div style="margin: 25px 0,">
          <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Log In Now</a>
=======
        <div style=&quot;margin: 25px 0;">
          <a href="${supabaseUrl}/dashboard&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;">Log In Now</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        <p>Log back in to see what's new and connect with ${_user_type === "jobSeeker" || user_type === "creator" 
            ? "clients looking for your skills" 
            : "talented AI professionals"}.</p>
        <div style="margin: 25px 0;">
          <a href="${_supabaseUrl}/dashboard" style="background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px;">Log In Now</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
        <p>The Zion AI Marketplace Team</p>
      </div>
    `}
}
