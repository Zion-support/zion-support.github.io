
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",
import { Resend } from "npm: resend@1.0.0",
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"},
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ReminderPayload {
  user_id: string,
  missing_milestone: string,
  role: string
}

serve(async (req: Request) => {
  // Handle CORS
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, {
      status: 204,
      headers: corsHeaders})
  }
  
  try {
    const supabase = createClient(
      supabaseUrl,
      supabaseServiceKey
    ),
    
    const payload = await req.json() as ReminderPayload,
    const { user_id, missing_milestone, role } = payload,
    
    if (!user_id || !missing_milestone || !role) {
      return new Response(
        JSON.stringify({ error: &quot;Missing required fields&quot; }),
        {
          status: 400,
<<<<<<< HEAD
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
=======
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
=======

const _resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const _supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const _supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers":
    "authorization, _x-client-info, _apikey, _content-type"};

interface ReminderPayload {_user_id: string;
  missing_milestone: string;
  role: string;}

serve(_async (req: Request) => {_// Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, _{
      status: 204, _headers: corsHeaders});
  }
  
  try {_const _supabase = createClient(
      supabaseUrl, _supabaseServiceKey
    );
    
    const _payload = await req.json() as ReminderPayload;
    const { user_id, _missing_milestone, _role} = payload;
    
    if (!user_id || !missing_milestone || !role) {_return new Response(
        JSON.stringify({ error: "Missing required fields"}),
        {_status: 400, _headers: { "Content-Type": "application/json", _...corsHeaders}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    // Get user data
<<<<<<< HEAD
    const { data: userData, error: userError } = await supabase
<<<<<<< HEAD
=======
    const {_data: userData, _error: userError} = await supabase
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      .from("profiles")
      .select("email, display_name")
      .eq("id", user_id)
      .single(),
=======
      .from(&quot;profiles&quot;)
      .select(&quot;email, display_name&quot;)
      .eq(&quot;id&quot;, user_id)
      .single();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
<<<<<<< HEAD
    if (userError || !userData) {
      return new Response(
        JSON.stringify({ error: &quot;User not found&quot;, details: userError }),
        {
          status: 404,
<<<<<<< HEAD
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
=======
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
=======
    if (userError || !userData) {_return new Response(
        JSON.stringify({ error: "User not found", _details: userError}),
        {_status: 404, _headers: { "Content-Type": "application/json", _...corsHeaders}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    // Create message based on role and missing milestone
<<<<<<< HEAD
    const milestoneMessages = {
      talent: {
        profile_completed: &quot;complete your profile to get discovered by clients&quot;,
        skills_added: &quot;add your skills to get better job matches&quot;,
        availability_set: &quot;set your availability to help clients know when you can work&quot;},
      client: {
<<<<<<< HEAD
        job_posted: "post your first job to start finding talent",
        match_viewed: "check out your AI-matched talent suggestions",
        talent_invited: "invite talent to speed up your hiring process"}},
    
    const name = userData.display_name || "there",
    const action = milestoneMessages[role as keyof typeof milestoneMessages]?.[
=======
    const _milestoneMessages = {_talent: {
        profile_completed: "complete your profile to get discovered by clients", _skills_added: "add your skills to get better job matches", _availability_set: "set your availability to help clients know when you can work"},
      client: {_job_posted: "post your first job to start finding talent", _match_viewed: "check out your AI-matched talent suggestions", _talent_invited: "invite talent to speed up your hiring process"}};
    
    const _name = userData.display_name || "there";
    const _action = milestoneMessages[role as keyof typeof milestoneMessages]?.[
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      missing_milestone as keyof (typeof milestoneMessages)["talent" | "client"]
    ] || "complete your next step",
=======
        job_posted: &quot;post your first job to start finding talent&quot;,
        match_viewed: &quot;check out your AI-matched talent suggestions&quot;,
        talent_invited: &quot;invite talent to speed up your hiring process&quot;}};
    
    const name = userData.display_name || &quot;there&quot;;
    const action = milestoneMessages[role as keyof typeof milestoneMessages]?.[
      missing_milestone as keyof (typeof milestoneMessages)[&quot;talent&quot; | &quot;client&quot;]
    ] || &quot;complete your next step&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // Send email
<<<<<<< HEAD
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: &quot;Zion AI Marketplace <notifications@zion.ai>&quot;,
      to: userData.email,
      subject: &quot;Complete your next step on Zion AI Marketplace&quot;,
      html: `
<<<<<<< HEAD
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
=======
        <div style=&quot;font-family: sans-serif; max-width: 600px; margin: 0 auto;&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    const {_data: emailData, _error: emailError} = await resend.emails.send({_from: "Zion AI Marketplace <notifications@zion.ai>", _to: userData.email, _subject: "Complete your next step on Zion AI Marketplace", _html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <h2>Hi ${name},</h2>
          <p>You're making great progress in setting up your ${_role} profile on Zion AI Marketplace!</p>
          <p>Your next step is to <strong>${_action}</strong>.</p>
          <p>This will help you get the most out of the platform and connect with the right opportunities.</p>
<<<<<<< HEAD
          <div style="margin: 30px 0,">
            <a href="https://zion.ai/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px, font-weight: bold,">
=======
          <div style=&quot;margin: 30px 0;&quot;>
            <a href=&quot;https://zion.ai/dashboard&quot; style=&quot;background-color: #9b87f5; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              Continue my setup
            </Link>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `}),
    
<<<<<<< HEAD
    if (emailError) {
      return new Response(
        JSON.stringify({ error: &quot;Failed to send email&quot;, details: emailError }),
        {
          status: 500,
<<<<<<< HEAD
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
=======
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
=======
    if (emailError) {_return new Response(
        JSON.stringify({ error: "Failed to send email", _details: emailError}),
        {_status: 500, _headers: { "Content-Type": "application/json", _...corsHeaders}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    // Create notification in database
<<<<<<< HEAD
    const { data: notification, error: notificationError } = await supabase.rpc(
      &quot;create_notification&quot;,
      {
        _user_id: user_id,
        _title: &quot;Complete your next step&quot;,
        _message: `Don't forget to ${action} to get the most out of Zion AI Marketplace.`,
<<<<<<< HEAD
=======
    const {_data: notification, _error: notificationError} = await supabase.rpc(
      "create_notification",
      {_user_id: user_id, _title: "Complete your next step", _message: `Don't forget to ${action} to get the most out of Zion AI Marketplace.`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        _type: "onboarding"}
    ),
    
    if (notificationError) {
      console.error("Failed to create notification:", notificationError)
=======
        _type: &quot;onboarding&quot;}
    );
    
<<<<<<< HEAD
    if (notificationError) {
      console.error(&quot;Failed to create notification:&quot;, notificationError);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    return new Response(
      JSON.stringify({
        message: &quot;Reminder sent successfully&quot;,
        notification_id: notification}),
      {
        status: 200,
<<<<<<< HEAD
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
=======
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  } catch (error) {
    console.error(error),
    return new Response(
      JSON.stringify({ error: &quot;Internal server error&quot;, details: error.message }),
      {
        status: 500,
<<<<<<< HEAD
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
=======
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot;, ...corsHeaders }}
=======
    if (notificationError) {}
    
    return new Response(
      JSON.stringify({_message: "Reminder sent successfully", _notification_id: notification}),
      {_status: 200, _headers: { "Content-Type": "application/json", _...corsHeaders}}
    );
  } catch (error) {_return new Response(
      JSON.stringify({ error: "Internal server error", _details: error.message}),
      {_status: 500, _headers: { "Content-Type": "application/json", _...corsHeaders}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}),
