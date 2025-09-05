
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.7.1&quot;;
import { Resend } from &quot;npm:resend@1.0.0&quot;;

const resend = new Resend(Deno.env.get(&quot;RESEND_API_KEY&quot;));
const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;)!;
const supabaseServiceKey = Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;)!;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;:
    &quot;authorization, x-client-info, apikey, content-type&quot;};

interface ReminderPayload {
  user_id: string;
  missing_milestone: string;
  role: string;
}

serve(async (req: Request) => {
  // Handle CORS
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, {
      status: 204,
      headers: corsHeaders});
  }
  
  try {
    const supabase = createClient(
      supabaseUrl,
      supabaseServiceKey
    );
    
    const payload = await req.json() as ReminderPayload;
    const { user_id, missing_milestone, role } = payload;
    
    if (!user_id || !missing_milestone || !role) {
      return new Response(
        JSON.stringify({ error: &quot;Missing required fields&quot; }),
        {
          status: 400,
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
      );
    }
    
    // Get user data
    const { data: userData, error: userError } = await supabase
      .from(&quot;profiles&quot;)
      .select(&quot;email, display_name&quot;)
      .eq(&quot;id&quot;, user_id)
      .single();
    
    if (userError || !userData) {
      return new Response(
        JSON.stringify({ error: &quot;User not found&quot;, details: userError }),
        {
          status: 404,
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
      );
    }
    
    // Create message based on role and missing milestone
    const milestoneMessages = {
      talent: {
        profile_completed: &quot;complete your profile to get discovered by clients&quot;,
        skills_added: &quot;add your skills to get better job matches&quot;,
        availability_set: &quot;set your availability to help clients know when you can work&quot;},
      client: {
        job_posted: &quot;post your first job to start finding talent&quot;,
        match_viewed: &quot;check out your AI-matched talent suggestions&quot;,
        talent_invited: &quot;invite talent to speed up your hiring process&quot;}};
    
    const name = userData.display_name || &quot;there&quot;;
    const action = milestoneMessages[role as keyof typeof milestoneMessages]?.[
      missing_milestone as keyof (typeof milestoneMessages)[&quot;talent&quot; | &quot;client&quot;]
    ] || &quot;complete your next step&quot;;
    
    // Send email
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: &quot;Zion AI Marketplace <notifications@zion.ai>&quot;,
      to: userData.email,
      subject: &quot;Complete your next step on Zion AI Marketplace&quot;,
      html: `
        <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
          <h2>Hi ${name},</h2>
          <p>You're making great progress in setting up your ${role} profile on Zion AI Marketplace!</p>
          <p>Your next step is to <strong>${action}</strong>.</p>
          <p>This will help you get the most out of the platform and connect with the right opportunities.</p>
          <div style=&quot;margin: 30px 0;&quot;>
            <a href=&quot;https://zion.ai/dashboard&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;&quot;>
              Continue my setup
            </Link>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `});
    
    if (emailError) {
      return new Response(
        JSON.stringify({ error: &quot;Failed to send email&quot;, details: emailError }),
        {
          status: 500,
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
      );
    }
    
    // Create notification in database
    const { data: notification, error: notificationError } = await supabase.rpc(
      &quot;create_notification&quot;,
      {
        _user_id: user_id,
        _title: &quot;Complete your next step&quot;,
        _message: `Don't forget to ${action} to get the most out of Zion AI Marketplace.`,
        _type: &quot;onboarding&quot;}
    );
    
    if (notificationError) {
      console.error(&quot;Failed to create notification:&quot;, notificationError);
    }
    
    return new Response(
      JSON.stringify({
        message: &quot;Reminder sent successfully&quot;,
        notification_id: notification}),
      {
        status: 200,
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: &quot;Internal server error&quot;, details: error.message }),
      {
        status: 500,
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
    );
  }
});
