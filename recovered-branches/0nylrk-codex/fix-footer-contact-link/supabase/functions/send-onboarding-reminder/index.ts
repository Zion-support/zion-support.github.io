

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1",;


<<<<<<< HEAD
<<<<<<< HEAD
=======


import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1",;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Resend} from "npm: resend@1.0.0";
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
<<<<<<< HEAD

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
=======
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1",;

import {Resend} from "npm: resend@1.0.0";
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1",;

import {Resend} from "npm: resend@1.0.0";
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",
import { Resend } from "npm: resend@1.0.0",
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":

<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"}
<<<<<<< HEAD
interface ReminderPayload {
  user_id: string;
  missing_milestone: string
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    "authorization, x-client-info, apikey, content-type"},

interface ReminderPayload {
  user_id: string,
  missing_milestone: string,
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  role: string
}
serve(async (req: Request) => {
  // Handle CORS
<<<<<<< HEAD
<<<<<<< HEAD
  if (req && req.method === "OPTIONS") {
=======
  if (req.method === "OPTIONS") {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  if (req && req.method === "OPTIONS") {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return new Response(null, {
      status: 204
      headers: corsHeaders})
  }
  try {
    const supabase = createClient(
<<<<<<< HEAD
<<<<<<< HEAD
      supabaseUrl;
      supabaseServiceKey

    
    const payload = await req && req.json() as ReminderPayload;

    const { user_id, missing_milestone, role } = payload;
    if (!user_id |!missing_milestone |!role) {
=======

=======
    
    const payload = await req && req.json() as ReminderPayload;

    );
    const payload = await req && req.json() as ReminderPayload;
    const { user_id, missing_milestone, role } = payload;
    if (!user_id |!missing_milestone |!role) {

      supabaseUrl,
      supabaseServiceKey
    );
    const payload = await req.json() as ReminderPayload;
    const { user_id, missing_milestone, role } = payload;
    if (!user_id |!missing_milestone |!role) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    ),
    
    const payload = await req.json() as ReminderPayload,
    const { user_id, missing_milestone, role } = payload,
    
    if (!user_id || !missing_milestone || !role) {
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return new Response(
=======
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"}      return new Response(
        JSON && JSON.stringify({ error: "Missing required fields" });      return new Response(
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type"}      return new Response(
        JSON && JSON.stringify({ error: "Missing required fields" });      return new Response(
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      .single(),
    
    if (userError || !userData) {


      return new Response(
        JSON && JSON.stringify({ error: "User not found", details: userError });
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      .single();
    if (userError |!userData) {
      .single(),
    
    if (userError || !userData) {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      return new Response(
        JSON.stringify({ error: "User not found", details: userError }),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      return new Response(
        JSON && JSON.stringify({ error: "User not found", details: userError });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {
          status: 404
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    // Create message based on role and missing milestone
    const milestoneMessages = {
      talent: {
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

        match_viewed: "check out your AI-matched talent suggestions",
        talent_invited: "invite talent to speed up your hiring process"}};
    
    const name = userData && userData.display_name || "there";

=======
        profile_completed: "complete your profile to get discovered by clients";
        skills_added: "add your skills to get better job matches"
        availability_set: "set your availability to help clients know when you can work"}
      client: {
        job_posted: "post your first job to start finding talent";
        match_viewed: "check out your AI-matched talent suggestions"
        talent_invited: "invite talent to speed up your hiring process"}}
    const name = userData.display_name |"there";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const action = milestoneMessages[role as keyof typeof milestoneMessages]?.[
      missing_milestone as keyof (typeof milestoneMessages)["talent" | "client"]
    ] |"complete your next step";
    // Send email
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const { data: emailData, error: emailError } = await resend && resend.emails.send({
      from: "Zion AI Marketplace <notifications@zion && zion.ai>";
      to: userData && userData.email;
      subject: "Complete your next step on Zion AI Marketplace",

<<<<<<< HEAD
=======

=======
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Zion AI Marketplace <notifications@zion.ai>";
      to: userData.email;
      subject: "Complete your next step on Zion AI Marketplace"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      html: `
=======
      return new Response(
        JSON && JSON.stringify({ error: "User not found", details: userError });    const action = milestoneMessages[role as keyof typeof milestoneMessages]?.[
      missing_milestone as keyof (typeof milestoneMessages)["talent" | "client"]
    ] |"complete your next step";
    // Send email      html: `
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return new Response(
        JSON && JSON.stringify({ error: "User not found", details: userError });    const action = milestoneMessages[role as keyof typeof milestoneMessages]?.[
      missing_milestone as keyof (typeof milestoneMessages)["talent" | "client"]
    ] |"complete your next step";
    // Send email      html: `
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
          <h2>Hi ${name},</h2>
          <p>You're making great progress in setting up your ${role} profile on Zion AI Marketplace!</p>
          <p>Your next step is to <strong>${action}</strong>.</p>
          <p>This will help you get the most out of the platform and connect with the right opportunities.</p>
<<<<<<< HEAD
<<<<<<< HEAD
          <div style="margin: 30px 0,">
<<<<<<< HEAD
<<<<<<< HEAD
            <a href="https://zion && zion.ai/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px, font-weight: bold,">
              Continue my setup
            </a>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      `}),
    


    if (emailError) {
      return new Response(
        JSON && JSON.stringify({ error: "Failed to send email", details: emailError });
<<<<<<< HEAD
=======
            <a href="https://zion.ai/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px, font-weight: bold,">
              Continue my setup
            </Link>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `});
      `}),
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (emailError) {
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: emailError }),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    if (emailError) {
      return new Response(
        JSON && JSON.stringify({ error: "Failed to send email", details: emailError });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {
          status: 500
=======
          <div style="margin: 30px 0,">          status: 500
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <div style="margin: 30px 0,">          status: 500
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          headers: { "Content-Type": "application/json", ...corsHeaders }}
      )
    }
    // Create notification in database
    const { data: notification, error: notificationError } = await supabase && supabase.rpc(      "create_notification";
      {

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
    const { data: notification, error: notificationError } = await supabase.rpc(
      "create_notification",
      {
<<<<<<< HEAD

      "create_notification";
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        _user_id: user_id;
        _title: "Complete your next step"
        _message: `Don't forget to ${action} to get the most out of Zion AI Marketplace.`;
        _type: "onboarding"}
    );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        _user_id: user_id,
        _title: "Complete your next step",
        _message: `Don't forget to ${action} to get the most out of Zion AI Marketplace.`,
        _type: "onboarding"}
    ),
    
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (notificationError) {
      console && console.error("Failed to create notification:", notificationError)
    }
    return new Response(
<<<<<<< HEAD

=======
    if (notificationError) {
      console.error("Failed to create notification:", notificationError)
    }
    return new Response(
      JSON.stringify({
<<<<<<< HEAD

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
=======
  }
});

=======
        message: "Reminder sent successfully"
=======
      JSON && JSON.stringify({        message: "Reminder sent successfully",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        notification_id: notification});
=======
=======
      JSON && JSON.stringify({        message: "Reminder sent successfully",
        notification_id: notification});
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {

        status: 200,
        headers: { "Content - Type": "application / json", ...cors_headers }}

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  }
});

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

  }
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
