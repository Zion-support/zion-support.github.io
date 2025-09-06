
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1";
import { Resend } from "npm: resend@1.0.0";
const resend = $2;
const supabaseUrl = $2;
const supabaseServiceKey = $2;
const corsHeaders = $2;
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"},

interface ReminderPayload {
  user_id: string,
  missing_milestone: string,
  role: string}

serve(async (req: Request) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders})
  }
  
  try {
    const supabase = createClient($2);
    const payload = $2;
    const { user_id, missing_milestone, role } = payload,
    
    if (!user_id || !missing_milestone || !role) {
      return new Response($2);
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    
    // Get user data
    const { data: userData, error: userError} = await supabase
      .from("profiles")
      .select("email, display_name")
      .eq("id", user_id)
      .single($2);
    if (userError || !userData) {
      return new Response($2);
        {
          status: 404,
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    
    // Create message based on role and missing milestone
    const milestoneMessages = $2;
        skills_added: "add your skills to get better job matches",
        availability_set: "set your availability to help clients know when you can work"},
      client: {
        job_posted: "post your first job to start finding talent",
        match_viewed: "check out your AI-matched talent suggestions",
        talent_invited: "invite talent to speed up your hiring process"}},
    
    const name = $2;
    const action = $2;
    // Send email
    const { data: emailData, error: emailError} = await resend.emails.send($2);
    if (emailError) {
      return new Response($2);
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    
    // Create notification in database
    const { data: notification, error: notificationError} = await supabase.rpc($2);
    if (notificationError) {
      console.error("Failed to create notification:", notificationError)
    }
    
    return new Response($2);
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
    console.error($2);
    return new Response($2);
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  }
}),
