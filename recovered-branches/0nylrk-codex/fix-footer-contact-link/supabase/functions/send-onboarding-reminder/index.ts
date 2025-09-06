

<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1",;


import {Resend} from "npm: resend@1.0.0";
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
=======
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1",;

import {Resend} from "npm: resend@1.0.0";
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",
import { Resend } from "npm: resend@1.0.0",
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,

<<<<<<< HEAD



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":

<<<<<<< HEAD


const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"}
interface ReminderPayload {
  user_id: string;
  missing_milestone: string
    "authorization, x-client-info, apikey, content-type"},

interface ReminderPayload {
  user_id: string,
  missing_milestone: string,


  role: string
}
serve(async (req: Request) => {
  // Handle CORS
  if (req && req.method === "OPTIONS") {
  if (req && req.method === "OPTIONS") {
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {
    const supabase = createClient(
      supabaseUrl;
      supabaseServiceKey

    
    const payload = await req && req.json() as ReminderPayload;

    const { user_id, missing_milestone, role } = payload;
    if (!user_id |!missing_milestone |!role) {
    ),
    
    const payload = await req.json() as ReminderPayload,
    const { user_id, missing_milestone, role } = payload,
    
    if (!user_id || !missing_milestone || !role) {

      return new Response(
        JSON && JSON.stringify({ error: "Missing required fields" });
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
      return new Response(
=======
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"}      return new Response(
        JSON && JSON.stringify({ error: "Missing required fields" });      return new Response(
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        JSON && JSON.stringify({ error: "Missing required fields" });
        {
          status: 400
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    // Get user data
    const { data: userData, error: userError } = await supabase
      .from("profiles")
      .select("email, display_name")
      .eq("id", user_id)
<<<<<<< HEAD


      .single(),
    
    if (userError || !userData) {


      return new Response(
        JSON && JSON.stringify({ error: "User not found", details: userError });
      return new Response(
        JSON && JSON.stringify({ error: "User not found", details: userError });
        {
          status: 404
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    // Create message based on role and missing milestone
    const milestoneMessages = {
      talent: {

        match_viewed: "check out your AI-matched talent suggestions",
        talent_invited: "invite talent to speed up your hiring process"}};
    
    const name = userData && userData.display_name || "there";

    const action = milestoneMessages[role as keyof typeof milestoneMessages]?.[
      missing_milestone as keyof (typeof milestoneMessages)["talent" | "client"]
    ] |"complete your next step";
    // Send email

    const { data: emailData, error: emailError } = await resend && resend.emails.send({
      from: "Zion AI Marketplace <notifications@zion && zion.ai>";
      to: userData && userData.email;
      subject: "Complete your next step on Zion AI Marketplace",

        profile_completed: "complete your profile to get discovered by clients",
        skills_added: "add your skills to get better job matches",
        availability_set: "set your availability to help clients know when you can work"},
      client: {
        job_posted: "post your first job to start finding talent",
        match_viewed: "check out your AI-matched talent suggestions",
        talent_invited: "invite talent to speed up your hiring process"}},
    
    const name = userData.display_name || "there",
    const action = milestoneMessages[role as keyof typeof milestoneMessages]?.[
      missing_milestone as keyof (typeof milestoneMessages)["talent" | "client"]
    ] || "complete your next step",
    
    // Send email
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Zion AI Marketplace <notifications@zion.ai>",
      to: userData.email,
      subject: "Complete your next step on Zion AI Marketplace",

      html: `
=======
      return new Response(
        JSON && JSON.stringify({ error: "User not found", details: userError });    const action = milestoneMessages[role as keyof typeof milestoneMessages]?.[
      missing_milestone as keyof (typeof milestoneMessages)["talent" | "client"]
    ] |"complete your next step";
    // Send email      html: `
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
          <h2>Hi ${name},</h2>
          <p>You're making great progress in setting up your ${role} profile on Zion AI Marketplace!</p>
          <p>Your next step is to <strong>${action}</strong>.</p>
          <p>This will help you get the most out of the platform and connect with the right opportunities.</p>
<<<<<<< HEAD
          <div style="margin: 30px 0,">
            <a href="https://zion && zion.ai/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px, font-weight: bold,">
              Continue my setup
            </a>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>


      `}),
    


    if (emailError) {
      return new Response(
        JSON && JSON.stringify({ error: "Failed to send email", details: emailError });
    if (emailError) {
      return new Response(
        JSON && JSON.stringify({ error: "Failed to send email", details: emailError });
        {
          status: 500
=======
          <div style="margin: 30px 0,">          status: 500
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    // Create notification in database
<<<<<<< HEAD
    const { data: notification, error: notificationError } = await supabase && supabase.rpc(
      "create_notification";
      {


        _user_id: user_id,
        _title: "Complete your next step",
        _message: `Don't forget to ${action} to get the most out of Zion AI Marketplace.`,
        _type: "onboarding"}
    ),
    


    if (notificationError) {
      console && console.error("Failed to create notification:", notificationError)
    }
    return new Response(

        message: "Reminder sent successfully",
        notification_id: notification}),
  }
});

    );
      JSON && JSON.stringify({
;
    // Check condition
if ( {) {
  $2
}
      console.error ("Failed to create notification:", notification_error);
    }
    return new Response (
      JSON.stringify ({

        message: "Reminder sent successfully",
        notification_id: notification});
      JSON.stringify({

        message: "Reminder sent successfully",
        notification_id: notification}),

      {


=======
    const { data: notification, error: notificationError } = await supabase && supabase.rpc(      "create_notification";
      {

      JSON && JSON.stringify({        message: "Reminder sent successfully",
        notification_id: notification});
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      {

        status: 200,
        headers: { "Content - Type": "application / json", ...cors_headers }}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",;
import { Resend } from "npm: resend@1.0.0",;
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),;
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers":;
    "authorization, x-client-info, apikey, content-type"},;
interface ReminderPayload {;
  user_id: string,;
  missing_milestone: string,;
  role: string;
}
;
serve(async (req: Request) => {;
  // Handle CORS;
  if (req.method === "OPTIONS") {;
    return new Response(null, {;
      status: 204,;
      headers: corsHeaders});
  }
;
  try {;
    const supabase = createClient(;
      supabaseUrl,;
      supabaseServiceKey;
    ),;
    const payload = await req.json() as ReminderPayload,;
    const { user_id, missing_milestone, role } = payload,;
    if (!user_id || !missing_milestone || !role) {;
      return new Response(;
        JSON.stringify({ error: "Missing required fields" }),;
        {;
          status: 400,;
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      );
    }
;
    // Get user data;
    const { data: userData, error: userError } = await supabase;
      .from("profiles");
      .select("email, display_name");
      .eq("id", user_id);
      .single(),;
    if (userError || !userData) {;
      return new Response(;
        JSON.stringify({ error: "User not found", details: userError }),;
        {;
          status: 404,;
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      );
    }
;
    // Create message based on role and missing milestone;
    const milestoneMessages = {;
      talent: {;
        profile_completed: "complete your profile to get discovered by clients",;
        skills_added: "add your skills to get better job matches",;
        availability_set: "set your availability to help clients know when you can work"},;
      client: {;
        job_posted: "post your first job to start finding talent",;
        match_viewed: "check out your AI-matched talent suggestions",;
        talent_invited: "invite talent to speed up your hiring process"}},;
    const name = userData.display_name || "there",;
    const action = milestoneMessages[role as keyof typeof milestoneMessages]?.[;
      missing_milestone as keyof (typeof milestoneMessages)["talent" | "client"];
    ] || "complete your next step",;
    // Send email;
    const { data: emailData, error: emailError } = await resend.emails.send({;
      from: "Zion AI Marketplace <notifications@zion.ai>",;
      to: userData.email,;
      subject: "Complete your next step on Zion AI Marketplace",;
      html: `;
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">;
          <h2>Hi ${name},</h2>;
          <p>You're making great progress in setting up your ${role} profile on Zion AI Marketplace!</p>;
          <p>Your next step is to <strong>${action}</strong>.</p>;
          <p>This will help you get the most out of the platform and connect with the right opportunities.</p>;
          <div style="margin: 30px 0,">;
            <a href="https://zion.ai/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px, font-weight: bold,">;
              Continue my setup;
            </a>;
          </div>;
          <p>The Zion AI Marketplace Team</p>;
        </div>;
      `}),;
    if (emailError) {;
      return new Response(;
        JSON.stringify({ error: "Failed to send email", details: emailError }),;
        {;
          status: 500,;
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      );
    }
;
    // Create notification in database;
    const { data: notification, error: notificationError } = await supabase.rpc(;
      "create_notification",;
      {;
        _user_id: user_id,;
        _title: "Complete your next step",;
        _message: `Don't forget to ${action} to get the most out of Zion AI Marketplace.`,;
        _type: "onboarding"}
    ),;
    if (notificationError) {;
      console.error("Failed to create notification:", notificationError);
    }
;
    return new Response(;
      JSON.stringify({;
        message: "Reminder sent successfully",;
        notification_id: notification}),;
      {;
        status: 200,;
        headers: { "Content-Type": "application/json", ...corsHeaders }}

<<<<<<< HEAD



  }
});
        _type: "onboarding"}
    );
        message: "Reminder sent successfully",
        notification_id: notification});
      {
        status: 500,
        headers: { "Content - Type": "application / json", ...cors_headers }}
    );



  }
});
;

import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1",;
import { Resend } from "npm:resend@1.0.0",;
;
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),;
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":;
    "authorization, x-client-info, apikey, content-type"},;
;
interface ReminderPayload {;
  user_id:string,;
  missing_milestone:string,;
  role:string;
}
;
serve(async (req:Request) => {;
  // Handle CORS;
  if (req.method === "OPTIONS") {;
    return new Response(null, {;
      status:204,;
      headers:corsHeaders}),;
  }
  ;
  try {;
    const supabase = createClient(;
      supabaseUrl,;
      supabaseServiceKey;
    ),;
    ;
    const payload = await req.json() as ReminderPayload,;
    const { user_id, missing_milestone, role } = payload,;
    ;
    if (!user_id || !missing_milestone || !role) {;
      return new Response(;
        JSON.stringify({ error:"Missing required fields" }),;
        {;
          status:400,;
          headers:{ "Content-Type":"application/json", ...corsHeaders }}
      ),;
    }
    ;
    // Get user data;
    const { data:userData, error:userError } = await supabase;
      .from("profiles");
      .select("email, display_name");
      .eq("id", user_id);
      .single(),;
    ;
    if (userError || !userData) {;
      return new Response(;
        JSON.stringify({ error:"User not found", details:userError }),;
        {;
          status:404,;
          headers:{ "Content-Type":"application/json", ...corsHeaders }}
      ),;
    }
    ;
    // Create message based on role and missing milestone;
    const milestoneMessages = {;
      talent:{;
        profile_completed:"complete your profile to get discovered by clients",;
        skills_added:"add your skills to get better job matches",;
        availability_set:"set your availability to help clients know when you can work"},;
      client:{;
        job_posted:"post your first job to start finding talent",;
        match_viewed:"check out your AI-matched talent suggestions",;
        talent_invited:"invite talent to speed up your hiring process"}},;
    ;
    const name = userData.display_name || "there",;
    const action = milestoneMessages[role as keyof typeof milestoneMessages]?.[;
      missing_milestone as keyof (typeof milestoneMessages)["talent" | "client"];
    ] || "complete your next step",;
    ;
    // Send email;
    const { data:emailData, error:emailError } = await resend.emails.send({;
      from:"Zion AI Marketplace <notifications@zion.ai>",;
      to:userData.email,;
      subject:"Complete your next step on Zion AI Marketplace",;
      html:`;
        <div style="font-family:sans-serif, max-width:600px, margin:0 auto,">;
          <h2>Hi ${name},</h2>;
          <p>You're making great progress in setting up your ${role} profile on Zion AI Marketplace!</p>;
          <p>Your next step is to <strong>${action}</strong>.</p>;
          <p>This will help you get the most out of the platform and connect with the right opportunities.</p>;
          <div style="margin:30px 0,">;
            <a href="https://zion.ai/dashboard" style="background-color:#9b87f5, color:white, padding:12px 20px, text-decoration:none, border-radius:4px, font-weight:bold,">;
              Continue my setup;
            </a>;
          </div>;
          <p>The Zion AI Marketplace Team</p>;
        </div>;
      `}),;
    ;
    if (emailError) {;
      return new Response(;
        JSON.stringify({ error:"Failed to send email", details:emailError }),;
        {;
          status:500,;
          headers:{ "Content-Type":"application/json", ...corsHeaders }}
      ),;
    }
    ;
    // Create notification in database;
    const { data:notification, error:notificationError } = await supabase.rpc(;
      "create_notification",;
      {;
        _user_id:user_id,;
        _title:"Complete your next step",;
        _message:`Don't forget to ${action} to get the most out of Zion AI Marketplace.`,;
        _type:"onboarding"}
    ),;
    ;
    if (notificationError) {;
      console.error("Failed to create notification:", notificationError),;
    }
    ;
    return new Response(;
      JSON.stringify({;
        message:"Reminder sent successfully",;
        notification_id:notification}),;
      {;
        status:200,;
        headers:{ "Content-Type":"application/json", ...corsHeaders }}
    ),;
  } catch (error) {;
    console.error(error),;
    return new Response(;
      JSON.stringify({ error:"Internal server error", details:error.message }),;
      {;
        status:500,;
        headers:{ "Content-Type":"application/json", ...corsHeaders }}
    ),;  }
}),;
 interface ReminderPayload {
  user id: string;
missing milestone: string;
role: string 
}serve (async (req: Request) => {
  //Handle CORS if (req.method === "OPTIONS") {
  return new Response (null, {
  status: 204;
headers: corsHeaders 
}) 
}try {
  const supabase = createClient (supabaseUrl;
supabaseServiceKey);
const payload = await req.json () as ReminderPayload;
const {
  user id, missing milestone, role 
}= payload;
if (!user id || !missing milestone || !role) {
  return new Response (JSON.stringify ({
  error: "Missing required fields" 
});
{
  status: 400;
);
}//Get user data .from ("profiles") .select ("email, display name") .eq ("id", user id) .single ();
}//Create message based on role and missing milestone missing milestone as keyof (typeof milestoneMessages) ["talent" | "client"] ] || "complete your next step";
data: emailData, error: emailError 
}= await resend.emails.send ({
  from: "Zion AI Marketplace <notifications@zion.ai>", to: userData.email, subject: "Complete your next step on Zion AI Marketplace", html: `<div style="font-family: sans-serif;
max-width: 600px;
margin: 0 auto;
">   name 
}, </h2> <p>You're making great progress in setting up your $ {
  role 
}profile on Zion AI Marketplace!</p> <p>Your next step is to <strong>$ {
  action 
}</strong>.</p> <p>This will help you get the most out of the platform and connect with the right opportunities.</p> Continue my setup </Link> </div> <p>The Zion AI Marketplace Team</p> </div> ` 
});
);
}// Create notification in database type: "onboarding" 
});
if (notificationError) {
  console.error ("Failed to create notification:", notificationError) 
}
});
    );
  } catch (error) {;
    console.error(error),;
    return new Response(;
      JSON.stringify({ error: "Internal server error", details: error.message }),;
      {;
        status: 500,;
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    );
  }
});
=======
  }
});
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
