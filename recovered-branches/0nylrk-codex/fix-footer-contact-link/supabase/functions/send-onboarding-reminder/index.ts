<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts

<<<<<<< HEAD

=======


import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1",;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======


import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1",;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {Resend} from "npm: resend@1.0.0";
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",
import { Resend } from "npm: resend@1.0.0",
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
========
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 && 2.7.1",
import {Resend} from "npm: resend@1 ;
const resend = new Resend(Deno && Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":


=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"}
interface ReminderPayload {
  user_id: string;
  missing_milestone: string
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    "authorization, x-client-info, apikey, content-type"},

interface ReminderPayload {
  user_id: string,
  missing_milestone: string,
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  role: string
}
serve(async (req: Request) => {
  // Handle CORS
<<<<<<< HEAD
  if (req && req.method === "OPTIONS") {
=======
  if (req.method === "OPTIONS") {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {
    const supabase = createClient(
<<<<<<< HEAD
      supabaseUrl;
      supabaseServiceKey
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts

<<<<<<< HEAD
=======
    
    const payload = await req && req.json() as ReminderPayload;

========
    );
    const payload = await req && req.json() as ReminderPayload;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
    const { user_id, missing_milestone, role } = payload;
    if (!user_id |!missing_milestone |!role) {
=======

=======
      supabaseUrl,
      supabaseServiceKey
    );
    const payload = await req.json() as ReminderPayload;
    const { user_id, missing_milestone, role } = payload;
    if (!user_id |!missing_milestone |!role) {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    ),
    
    const payload = await req.json() as ReminderPayload,
    const { user_id, missing_milestone, role } = payload,
    
    if (!user_id || !missing_milestone || !role) {
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return new Response(
        JSON && JSON.stringify({ error: "Missing required fields" });
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

<<<<<<< HEAD
=======

      .single(),
    
    if (userError || !userData) {


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return new Response(
        JSON && JSON.stringify({ error: "User not found", details: userError });
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      .single();
    if (userError |!userData) {
      .single(),
    
    if (userError || !userData) {
      return new Response(
        JSON.stringify({ error: "User not found", details: userError }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {
          status: 404
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    // Create message based on role and missing milestone
    const milestoneMessages = {
      talent: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts

<<<<<<< HEAD
=======
========
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        profile_completed: "complete your profile to get discovered by clients";
        skills_added: "add your skills to get better job matches"
        availability_set: "set your availability to help clients know when you can work"}
      client: {
        job_posted: "post your first job to start finding talent";
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
        match_viewed: "check out your AI-matched talent suggestions",
        talent_invited: "invite talent to speed up your hiring process"}};
    const name = userData && userData.display_name || "there";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
=======
        match_viewed: "check out your AI-matched talent suggestions"
        talent_invited: "invite talent to speed up your hiring process"}}
    const name = userData.display_name |"there";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const action = milestoneMessages[role as keyof typeof milestoneMessages]?.[
      missing_milestone as keyof (typeof milestoneMessages)["talent" | "client"]
    ] |"complete your next step";
    // Send email
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
    const { data: emailData, error: emailError } = await resend && resend.emails.send({
      from: "Zion AI Marketplace <notifications@zion && zion.ai>";
      to: userData && userData.email;
      subject: "Complete your next step on Zion AI Marketplace",
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts

=======

=======
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Zion AI Marketplace <notifications@zion.ai>";
      to: userData.email;
      subject: "Complete your next step on Zion AI Marketplace"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      html: `
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
          <h2>Hi ${name},</h2>
          <p>You're making great progress in setting up your ${role} profile on Zion AI Marketplace!</p>
          <p>Your next step is to <strong>${action}</strong>.</p>
          <p>This will help you get the most out of the platform and connect with the right opportunities.</p>
          <div style="margin: 30px 0,">
<<<<<<< HEAD
            <a href="https://zion && zion.ai/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px, font-weight: bold,">
              Continue my setup
            </a>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>

<<<<<<< HEAD
=======

      `}),
    


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (emailError) {
      return new Response(
        JSON && JSON.stringify({ error: "Failed to send email", details: emailError });
=======
            <a href="https://zion.ai/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px, font-weight: bold,">
              Continue my setup
            </Link>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `});
      `}),
    
    if (emailError) {
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: emailError }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {
          status: 500
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    // Create notification in database
<<<<<<< HEAD
<<<<<<< HEAD
    const { data: notification, error: notificationError } = await supabase.rpc(
      "create_notification",
      {

=======
    const { data: notification, error: notificationError } = await supabase && supabase.rpc(
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.7.1';,
import { Resend } from 'npm: resend@1.0.0';
const resend = new Resend (Deno.env.get ("RESEND_API_KEY"));
const supabase_url = Deno.env.get ("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY")!;
;
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers":;
    "authorization, x - client - info, apikey, content - type"}
;
interface ReminderPayload {
  user_id: string;
  missing_milestone: string,
  role: string;
}
serve (async (req: Request) => {
  // Handle CORS;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, {
      status: 204,
      headers: cors_headers});
  }
  try {
    const supabase = create_client (
      supabase_url;
      supabaseServiceKey);
;
    const payload = await req.json () as ReminderPayload;
    const { user_id, missing_milestone, role } = payload;
;
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({ error: "Missing required fields" });
        {
          status: 400,
          headers: { "Content - Type": "application / json", ...cors_headers }}
      );
    }
    // Get user data;
    const { data: user_data, error: user_error } = await supabase;
      .from ("profiles");
      .select ("email, display_name");
      .eq ("id", user_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({ error: "User not found", details: user_error });
        {
          status: 404,
          headers: { "Content - Type": "application / json", ...cors_headers }}
      );
    }
    // Create message based on role and missing milestone;
    const milestone_messages = {
      talent: {
        profile_completed: "complete your profile to get discovered by clients";
        skills_added: "add your skills to get better job matches",
        availability_set: "set your availability to help clients know when you can work"}
      client: {
        job_posted: "post your first job to start finding talent";
        match_viewed: "check out your AI - matched talent suggestions",
        talent_invited: "invite talent to speed up your hiring process"}}
;
    const name = user_data.display_name || "there";
    const action = milestone_messages[role as keyof typeof milestone_messages]?.[;
      missing_milestone as keyof (typeof milestone_messages)["talent" | "client"];
    ] || "complete your next step";
;
    // Send email;
    const { data: email_data, error: email_error } = await resend.emails.send ({
      from: "Zion AI Marketplace <notifications@zion.ai>";
      to: user_data.email;
      subject: "Complete your next step on Zion AI Marketplace",
      html: `;
        <div style="font - family: sans - serif, max - width: 600px, margin: 0 auto, ">;
          <h2 > Hi ${name}, </h2>;
          <p > You're making great progress in setting up your ${role} profile on Zion AI Marketplace!</p>;
          <p > Your next step is to <strong>${action}</strong>.</p>;
          <p > This will help you get the most out of the platform and connect with the right opportunities.</p>;
          <div style="margin: 30px 0, ">;
            <a href="https://zion.ai / dashboard" style="background - color: #9b87f5, color: white, padding: 12px 20px, text - decoration: none, border - radius: 4px, font - weight: bold, ">;
              Continue my setup;
            </a>;
          </div>;
          <p > The Zion AI Marketplace Team</p>;
        </div>;
      `});
;
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({ error: "Failed to send email", details: email_error });
        {
          status: 500,
          headers: { "Content - Type": "application / json", ...cors_headers }}
      );
    }
    // Create notification in database;
    const { data: notification, error: notification_error } = await supabase.rpc (
      "create_notification";
      {


=======
    const { data: notification, error: notificationError } = await supabase.rpc(
      "create_notification",
      {
        _user_id: user_id;
        _title: "Complete your next step"
        _message: `Don't forget to ${action} to get the most out of Zion AI Marketplace.`;
        _type: "onboarding"}
    );
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        _user_id: user_id,
        _title: "Complete your next step",
        _message: `Don't forget to ${action} to get the most out of Zion AI Marketplace.`,
        _type: "onboarding"}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
    ),
    


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (notificationError) {
      console && console.error("Failed to create notification:", notificationError)
    }
    return new Response(
<<<<<<< HEAD
      JSON.stringify({

=======
    ),
    
    if (notificationError) {
      console.error("Failed to create notification:", notificationError)
    }
    return new Response(
      JSON.stringify({
        message: "Reminder sent successfully"
        notification_id: notification});
        message: "Reminder sent successfully",
        notification_id: notification}),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {
        status: 200
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
  } catch (error) {
    console.error(error),
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      {
        status: 500
        headers: { "Content-Type": "application/json", ...corsHeaders }}
    )
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
    );
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
        message: "Reminder sent successfully",
        notification_id: notification});
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
=======
      JSON.stringify({

        message: "Reminder sent successfully",
        notification_id: notification}),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {

========
      {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
        status: 200,
        headers: { "Content - Type": "application / json", ...cors_headers }}
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
  }
});

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
});

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

    );
  } catch (error) {
    console.error (error);
    return new Response (
      JSON.stringify ({ error: "Internal server error", details: error.message });
      {
        status: 500,
        headers: { "Content - Type": "application / json", ...cors_headers }}
    );

<<<<<<< HEAD
  }
});

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/send-onboarding-reminder/index.ts
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
