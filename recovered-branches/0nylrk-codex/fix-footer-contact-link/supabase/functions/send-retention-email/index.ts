
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0"
import {Resend} from "npm: resend@2.0.0";
// Initialize Resend with API key
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 && 2.45.0",
import {Resend} from "npm: resend@2 ;
// Initialize Resend with API key
const resend = new Resend(Deno && Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  "Access-Control-Allow-Origin": "*";
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.45.0';,
import { Resend } from 'npm: resend@2.0.0';
// Initialize Resend with API key;
const resend = new Resend (Deno.env.get ("RESEND_API_KEY"));
;
// Initialize Supabase client;
const supabase_url = Deno.env.get ("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = create_client (supabase_url, supabaseServiceKey);
;
const cors_headers = {
  "Access - Control - Allow - Origin": "*";
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface EmailData {
  user_id: string;
  email_type: string;
  display_name: string;
  user_type: string;
  days_inactive?: number;
  onboarding_status?: any;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
import {Resend} from "npm: resend@2.0.0";

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
import { Resend } from "npm: resend@2.0.0",



<<<<<<< HEAD
<<<<<<< HEAD
  job_id?: string
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
import {Resend} from "npm: resend@2.0.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
import { Resend } from "npm: resend@2.0.0",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Initialize Resend with API key
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

interface EmailData {
  user_id: string,
  email_type: string,
  display_name: string,
  user_type: string,
  days_inactive?: number,
  onboarding_status?: any,
  job_id?: string,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  job_title?: string
}
serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method === "OPTIONS") {
=======
  if (req && req.method === "OPTIONS") {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  if (req && req.method === "OPTIONS") {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Extract job data from request
<<<<<<< HEAD

<<<<<<< HEAD
    const jobData = await req.json();
    const { id: jobId, payload } = jobData;
    const emailData = payload as EmailData;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const jobData = await req.json();
    const { id: jobId, payload } = jobData;
    const emailData = payload as EmailData;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const jobData = await req.json(),
    const { id: jobId, payload } = jobData,
    const emailData = payload as EmailData,
    
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Fetch user's email
    const { data: userData, error: userError } = await supabase
      .from("profiles")
      .select("id, display_name, avatar_url, user_type")
<<<<<<< HEAD
<<<<<<< HEAD
=======

      .eq("id", emailData.user_id)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      .single(),
    


    if (userError) {
      throw new Error(`Error fetching user data: ${userError && userError.message}`)
    }
    const { data: authUser, error: authError } = await supabase
      .from("auth && auth.users")
      .select("email")

    
    const userEmail = authUser && authUser.email;

      .eq("id", emailData.user_id)

<<<<<<< HEAD
      .eq("id", emailData.user_id)
=======

      .eq("id", emailData.user_id)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .single();
      .single(),
    
    if (userError) {
<<<<<<< HEAD
      throw new Error(`Error fetching user data: ${userError.message}`)
    }
    const { data: authUser, error: authError } = await supabase
      .from("auth.users")
=======
      throw new Error(`Error fetching user data: ${userError && userError.message}`)
    }
    const { data: authUser, error: authError } = await supabase
      .from("auth && auth.users")
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .select("email")
      .eq("id", emailData.user_id)
      .single();
    if (authError) {
      throw new Error(`Error fetching user email: ${authError.message}`)
    }
    const userEmail = authUser.email;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .single(),
    
    if (authError) {
      throw new Error(`Error fetching user email: ${authError.message}`)
    }
    
    const userEmail = authUser.email,
<<<<<<< HEAD
<<<<<<< HEAD
    const userEmail = authUser && authUser.email;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!userEmail) {
      throw new Error("User email not found")
    }
    // Generate email content based on email type
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const { subject, html } = await generateEmail(emailData, userData);
    // Send email via Resend
    const emailResponse = await resend.emails.send({
      from: "Zion AI Marketplace <notifications@zion.ai>";
      to: userEmail;
      subject: subject
      html: html});
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const { subject, html } = await generateEmail(emailData, userData),

    // Send email via Resend
    const emailResponse = await resend.emails.send({
      from: "Zion AI Marketplace <notifications@zion.ai>",
      to: userEmail,
      subject: subject,
      html: html}),

<<<<<<< HEAD
<<<<<<< HEAD
=======


    if (emailResponse.error) {
      throw new Error(`Failed to send email: ${emailResponse.error.message}`)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    const { subject, html } = await generateEmail(emailData, userData);
    // Send email via Resend
    const emailResponse = await resend && resend.emails.send({
      from: "Zion AI Marketplace <notifications@zion && zion.ai>";
      to: userEmail;
      subject: subject
      html: html});
    if (emailResponse && emailResponse.error) {
      throw new Error(`Failed to send email: ${emailResponse && emailResponse.error.message}`)
<<<<<<< HEAD
    if (emailResponse.error) {
      throw new Error(`Failed to send email: ${emailResponse.error.message}`)
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    if (emailResponse.error) {
      throw new Error(`Failed to send email: ${emailResponse.error.message}`)
=======

    if (emailResponse && emailResponse.error) {
      throw new Error(`Failed to send email: ${emailResponse && emailResponse.error.message}`)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    // Update job status
    await supabase
      .from("scheduled_jobs")
      .update({
        status: "completed"
        completed_at: new Date().toISOString()})
<<<<<<< HEAD


      .eq("id", jobId),



<<<<<<< HEAD
      .eq("id", jobId);
      .eq("id", jobId),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      .eq("id", jobId);
      .eq("id", jobId),

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Update email campaign record
    await supabase
      .from("email_campaigns")
      .update({
        status: "sent"
        sent_at: new Date().toISOString()})
<<<<<<< HEAD
<<<<<<< HEAD
      .eq("user_id", emailData.user_id)
      .eq("campaign_type", emailData.email_type);
    return new Response(
      JSON.stringify({
=======

      .eq("user_id", emailData && emailData.user_id)
      .eq("campaign_type", emailData && emailData.email_type);


    return new Response(
      JSON && JSON.stringify({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      .eq("user_id", emailData.user_id)
      .eq("campaign_type", emailData.email_type);
    return new Response(
      JSON && JSON.stringify({
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        success: true;
        message: "Email sent successfully"
        email: emailResponse});
      {
        headers: {
          ...corsHeaders
          "Content-Type": "application/json"}
<<<<<<< HEAD
<<<<<<< HEAD
        status: 200}
    )
  } catch (error) {
    console.error("Error in send-retention-email function:", error);
    return new Response(
      JSON.stringify({
        success: false
        error: error.message});
      {
        headers: {
          ...corsHeaders
          "Content-Type": "application/json"}
        status: 500}
    )
  }
});
async function generateEmail(emailData: EmailData, userData: any): Promise<{ subject: string, html: string }> {
  const { email_type, display_name, user_type } = emailData;
  const firstName = display_name?.split(" ")[0] |"there";
  // Get onboarding status for personalized content
  let nextAction = "";
  let ctaLink = "/dashboard";
  let ctaText = "Go to Dashboard";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
  job_id?: string,
  job_title?: string;
}
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    // Extract job data from request;
    const job_data = await req.json ();
    const { id: job_id, payload } = job_data;
    const email_data = payload as EmailData;
;
    // Fetch user's email;
    const { data: user_data, error: user_error } = await supabase;
      .from ("profiles");
      .select ("id, display_name, avatar_url, user_type");
      .eq ("id", email_data.user_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Error fetching user data: ${user_error.message}`);
    }
    const { data: auth_user, error: auth_error } = await supabase;
      .from ("auth.users");
      .select ("email");
      .eq ("id", email_data.user_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Error fetching user email: ${auth_error.message}`);
    }
    const user_email = auth_user.email;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("User email not found");
    }
    // Generate email content based on email type;
    const { subject, html } = await generate_email (email_data, user_data);
;
    // Send email via Resend;
    const email_response = await resend.emails.send ({
      from: "Zion AI Marketplace <notifications@zion.ai>";
      to: user_email;
      subject: subject,
      html: html});
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Failed to send email: ${email_response.error.message}`);
    }
    // Update job status;
    await supabase;
      .from ("scheduled_jobs");
      .update ({
        status: "completed",
        completed_at: new Date ().toISOString ()});
      .eq ("id", job_id);
;
    // Update email campaign record;
    await supabase;
      .from ("email_campaigns");
      .update ({
        status: "sent",
        sent_at: new Date ().toISOString ()});
      .eq ("user_id", email_data.user_id);
      .eq ("campaign_type", email_data.email_type);
;
    return new Response (
      JSON.stringify ({
        success: true;
        message: "Email sent successfully",
        email: email_response});
      {
        headers: {
          ...cors_headers,
          "Content - Type": "application / json"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        status: 200}
    );
  } catch (error) {

    console.error ("Error in send - retention - email function:", error);
;
    return new Response (
      JSON.stringify ({
        success: false,

        error: error.message});
=======
    console && console.error("Error in send-retention-email function:", error);

    return new Response(
      JSON && JSON.stringify({
        success: false,
        error: error && error.message});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {
        headers: {

          ...cors_headers,
          "Content - Type": "application / json"}

        status: 500}
    );
  }
});
<<<<<<< HEAD

      .eq("user_id", emailData.user_id)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
async function generateEmail(emailData: EmailData, userData: any): Promise<{ subject: string, html: string }> {
  const { email_type, display_name, user_type } = emailData;
  const firstName = display_name?.split(" ")[0] |"there";
  // Get onboarding status for personalized content
  let nextAction = "";
  let ctaLink = "/dashboard";
  let ctaText = "Go to Dashboard";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .eq("campaign_type", emailData.email_type),

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        email: emailResponse}),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"},
        status: 200}
    )
  } catch (error) {
    console.error("Error in send-retention-email function:", error),

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message}),
      {
        headers: {
          ...corsHeaders,
<<<<<<< HEAD
<<<<<<< HEAD
          "Content-Type": "application/json"};
        status: 500}
    )
  }
});
          "Content-Type": "application/json"},
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
import { Resend } from "npm: resend@2.0.0",;
// Initialize Resend with API key;
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
interface EmailData {;
  user_id: string,;
  email_type: string,;
  display_name: string,;
  user_type: string,;
  days_inactive?: number,;
  onboarding_status?: any,;
  job_id?: string,;
  job_title?: string;
}
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    // Extract job data from request;
    const jobData = await req.json(),;
    const { id: jobId, payload } = jobData,;
    const emailData = payload as EmailData,;
    // Fetch user's email;
    const { data: userData, error: userError } = await supabase;
      .from("profiles");
      .select("id, display_name, avatar_url, user_type");
      .eq("id", emailData.user_id);
      .single(),;
    if (userError) {;
      throw new Error(`Error fetching user data: ${userError.message}`);
    }
;
    const { data: authUser, error: authError } = await supabase;
      .from("auth.users");
      .select("email");
      .eq("id", emailData.user_id);
      .single(),;
    if (authError) {;
      throw new Error(`Error fetching user email: ${authError.message}`);
    }
;
    const userEmail = authUser.email,;
    if (!userEmail) {;
      throw new Error("User email not found");
    }
;
    // Generate email content based on email type;
    const { subject, html } = await generateEmail(emailData, userData),;
    // Send email via Resend;
    const emailResponse = await resend.emails.send({;
      from: "Zion AI Marketplace <notifications@zion.ai>",;
      to: userEmail,;
      subject: subject,;
      html: html}),;
    if (emailResponse.error) {;
      throw new Error(`Failed to send email: ${emailResponse.error.message}`);
    }
;
    // Update job status;
    await supabase;
      .from("scheduled_jobs");
      .update({;
        status: "completed",;
        completed_at: new Date().toISOString()});
      .eq("id", jobId),;
    // Update email campaign record;
    await supabase;
      .from("email_campaigns");
      .update({;
        status: "sent",;
        sent_at: new Date().toISOString()});
      .eq("user_id", emailData.user_id);
      .eq("campaign_type", emailData.email_type),;
    return new Response(;
      JSON.stringify({;
        success: true,;
        message: "Email sent successfully",;
        email: emailResponse}),;
      {;
        headers: {;
          ...corsHeaders,;
          "Content-Type": "application/json"},;
        status: 200}
    );
  } catch (error) {;
    console.error("Error in send-retention-email function:", error),;
    return new Response(;
      JSON.stringify({;
        success: false,;
        error: error.message}),;
      {;
        headers: {;
          ...corsHeaders,;
          "Content-Type": "application/json"},;
        status: 500}
    );
  }
}),

      .eq("user_id", emailData && emailData.user_id)
      .eq("campaign_type", emailData && emailData.email_type);


      .eq("user_id", emailData && emailData.user_id)
      .eq("campaign_type", emailData && emailData.email_type);
    return new Response(
      JSON && JSON.stringify({
        success: true;
        message: "Email sent successfully"
        email: emailResponse});
      {
        headers: {
          ...corsHeaders
          "Content-Type": "application/json"}
  job_id?: string,
  job_title?: string;
}
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    // Extract job data from request;
    const job_data = await req.json ();
    const { id: job_id, payload } = job_data;
    const email_data = payload as EmailData;
;
    // Fetch user's email;
    const { data: user_data, error: user_error } = await supabase;
      .from ("profiles");
      .select ("id, display_name, avatar_url, user_type");
      .eq ("id", email_data.user_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Error fetching user data: ${user_error.message}`);
    }
    const { data: auth_user, error: auth_error } = await supabase;
      .from ("auth.users");
      .select ("email");
      .eq ("id", email_data.user_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Error fetching user email: ${auth_error.message}`);
    }
    const user_email = auth_user.email;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("User email not found");
    }
    // Generate email content based on email type;
    const { subject, html } = await generate_email (email_data, user_data);
;
    // Send email via Resend;
    const email_response = await resend.emails.send ({
      from: "Zion AI Marketplace <notifications@zion.ai>";
      to: user_email;
      subject: subject,
      html: html});
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Failed to send email: ${email_response.error.message}`);
    }
    // Update job status;
    await supabase;
      .from ("scheduled_jobs");
      .update ({
        status: "completed",
        completed_at: new Date ().toISOString ()});
      .eq ("id", job_id);
;
    // Update email campaign record;
    await supabase;
      .from ("email_campaigns");
      .update ({
        status: "sent",
        sent_at: new Date ().toISOString ()});
      .eq ("user_id", email_data.user_id);
      .eq ("campaign_type", email_data.email_type);
;
    return new Response (
      JSON.stringify ({
        success: true;
        message: "Email sent successfully",
        email: email_response});
      {
        headers: {
          ...cors_headers,
          "Content - Type": "application / json"}
        status: 200}
    );
  } catch (error) {
    console.error ("Error in send - retention - email function:", error);
;
    return new Response (
      JSON.stringify ({
        success: false,
        error: error.message});
    console && console.error("Error in send-retention-email function:", error);
    return new Response(
      JSON && JSON.stringify({
        success: false,
        error: error && error.message});
      {
        headers: {
          ...cors_headers,
          "Content - Type": "application / json"}
        status: 500}
    );
  }
});
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

async function generateEmail(emailData: EmailData, userData: any): Promise<{ subject: string, html: string }> {
  const { email_type, display_name, user_type } = emailData,
  const firstName = display_name?.split(" ")[0] || "there",

  // Get onboarding status for personalized content
  let nextAction = "",
  let ctaLink = "/dashboard",
  let ctaText = "Go to Dashboard",

<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (email_type === "welcome_series") {
    // Customize based on user type
    if (user_type === "jobSeeker" |user_type === "creator") {
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  if (email_type === "welcome_series") {
    // Customize based on user type
    if (user_type === "jobSeeker" |user_type === "creator") {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
async function generate_email (email_data: EmailData, user_data: any): Promise<{ subject: string, html: string }> {
  const { email_type, display_name, user_type } = email_data;
  const first_name = display_name?.split (" ")[0] || "there";
;
  // Get onboarding status for personalized content;
  let next_action = "";
  let cta_link = "/dashboard";
  let cta_text = "Go to Dashboard";
;
  // Check condition
if ( {) {
  $2
}
    // Customize based on user type;
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return {
        subject: `Welcome to Zion AI Marketplace, ${first_name}!`;
        html: `;
          <div style="font - family: sans - serif, max - width: 600px, margin: 0 auto, ">;
            <h2 > Welcome to Zion AI Marketplace!</h2>;
            <p > Hi ${first_name}, </p>;
            <p > We're excited to have you join our community of talented AI professionals.</p>;
            <p > Here's what to do next to get started: </p>;
            <ol>;
              <li > Complete your profile to help clients find you</li>;
              <li > Add your skills and expertise</li>;
              <li > Set your availability preferences</li>;
              <li > Browse available jobs and start applying</li>;
            </ol>;
            <div style="margin: 25px 0, ">;
              <a href="${supabase_url}/dashboard" style="background - color: #9b87f5, color: white, padding: 12px 20px, text - decoration: none, border - radius: 4px, ">Complete Your Profile</a>;
            </div>;
            <p > If you have any questions, just reply to this email.</p>;
            <p > The Zion AI Marketplace Team</p>;
          </div>;
        `}
    } else {
      // For clients / employers;
      return {
        subject: `Welcome to Zion AI Marketplace, ${first_name}!`;
        html: `;
          <div style="font - family: sans - serif, max - width: 600px, margin: 0 auto, ">;
            <h2 > Welcome to Zion AI Marketplace!</h2>;
            <p > Hi ${first_name}, </p>;
            <p > We're excited to have you join our community of innovative businesses and entrepreneurs.</p>;
            <p > Here's what to do next to get started: </p>;
            <ol>;
              <li > Complete your company profile</li>;
              <li > Post your first job or project</li>;
              <li > Browse talent profiles in our directory</li>;
              <li > Connect with AI professionals that match your needs</li>;
            </ol>;
            <div style="margin: 25px 0, ">;
              <a href="${supabase_url}/dashboard" style="background - color: #9b87f5, color: white, padding: 12px 20px, text - decoration: none, border - radius: 4px, ">Post Your First Job</a>;
            </div>;
            <p > If you have any questions, just reply to this email.</p>;
            <p > The Zion AI Marketplace Team</p>;
          </div>;
        `}
    }
<<<<<<< HEAD

    if (emailData && emailData.onboarding_status) {
      const onboarding = emailData && emailData.onboarding_status;
<<<<<<< HEAD
      if (user_type === "jobSeeker" || user_type === "creator") {
        if (!onboarding && onboarding.profile_completed) {
          nextAction = "complete your profile";
          ctaLink = "/profile";
=======
      
      if (user_type === "jobSeeker" || user_type === "creator") {
        if (!onboarding && onboarding.profile_completed) {

          nextAction = "complete your profile";
          ctaLink = "/profile";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (emailData.onboarding_status) {

      const onboarding = emailData.onboarding_status,
      
      if (user_type === "jobSeeker" || user_type === "creator") {

        if (!onboarding.profile_completed) {
          nextAction = "complete your profile",
          ctaLink = "/profile",
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ctaText = "Complete Your Profile"
        } else if (!onboarding && onboarding.skills_added) {
          nextAction = "add your skills to get matched with the right opportunities";
          ctaLink = "/profile/skills";
          ctaText = "Add Your Skills"
        } else if (!onboarding && onboarding.availability_set) {
          nextAction = "set your availability to help clients find you";
          ctaLink = "/profile/settings";
<<<<<<< HEAD
  if (email_type === "welcome_series") {
    // Customize based on user type
    if (user_type === "jobSeeker" |user_type === "creator") {
      return {
        subject: `Welcome to Zion AI Marketplace, ${firstName}!`,
        html: `
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
            <h2>Welcome to Zion AI Marketplace!</h2>
            <p>Hi ${firstName},</p>
            <p>We're excited to have you join our community of talented AI professionals.</p>
            <p>Here's what to do next to get started: </p>
            <ol>
              <li>Complete your profile to help clients find you</li>
              <li>Add your skills and expertise</li>
              <li>Set your availability preferences</li>
              <li>Browse available jobs and start applying</li>
            </ol>
            <div style="margin: 25px 0,">
              <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Complete Your Profile</a>
            </div>
            <p>If you have any questions, just reply to this email.</p>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `}
    } else {
      // For clients/employers
      return {
        subject: `Welcome to Zion AI Marketplace, ${firstName}!`,
        html: `
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
            <h2>Welcome to Zion AI Marketplace!</h2>
            <p>Hi ${firstName},</p>
            <p>We're excited to have you join our community of innovative businesses and entrepreneurs.</p>
            <p>Here's what to do next to get started: </p>
            <ol>
              <li>Complete your company profile</li>
              <li>Post your first job or project</li>
              <li>Browse talent profiles in our directory</li>
              <li>Connect with AI professionals that match your needs</li>
            </ol>
            <div style="margin: 25px 0,">
              <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Post Your First Job</a>
            </div>
            <p>If you have any questions, just reply to this email.</p>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `}
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } else if (email_type === "inactivity_3") {
    // Day 3 incomplete action reminder
    if (emailData.onboarding_status) {
      const onboarding = emailData.onboarding_status;
      if (user_type === "jobSeeker" |user_type === "creator") {
      const onboarding = emailData.onboarding_status,
      
      if (user_type === "jobSeeker" || user_type === "creator") {
        if (!onboarding.profile_completed) {
          nextAction = "complete your profile",
          ctaLink = "/profile",
<<<<<<< HEAD
          ctaText = "Complete Your Profile"
        } else if (!onboarding.skills_added) {
          nextAction = "add your skills to get matched with the right opportunities",
          ctaLink = "/profile/skills",
          ctaText = "Add Your Skills"
        } else if (!onboarding.availability_set) {
          nextAction = "set your availability to help clients find you",
          ctaLink = "/profile/settings",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          ctaText = "Complete Your Profile"
        } else if (!onboarding && onboarding.skills_added) {
          nextAction = "add your skills to get matched with the right opportunities";
          ctaLink = "/profile/skills";
          ctaText = "Add Your Skills"
        } else if (!onboarding && onboarding.availability_set) {
          nextAction = "set your availability to help clients find you";
          ctaLink = "/profile/settings";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ctaText = "Set Your Availability"
        }
      } else {
        // For clients
<<<<<<< HEAD
<<<<<<< HEAD
        if (!onboarding.job_posted) {
          nextAction = "post your first job to start finding talent",
          ctaLink = "/post-job",
          ctaText = "Post a Job"
        } else if (!onboarding.talent_invited) {
          nextAction = "invite talent to speed up your hiring process",
          ctaLink = "/talent",
          ctaText = "Find Talent"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (!onboarding && onboarding.job_posted) {
          nextAction = "post your first job to start finding talent";
          ctaLink = "/post-job";
          ctaText = "Post a Job"
        } else if (!onboarding && onboarding.talent_invited) {
          nextAction = "invite talent to speed up your hiring process";
          ctaLink = "/talent";
          ctaText = "Find Talent"
=======
  } else // Check condition
if ( {) {
  $2
}
    // Day 3 incomplete action reminder;
    // Check condition
if ( {) {
  $2
}
      const onboarding = email_data.onboarding_status;
;
      // Check condition
if ( {) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          next_action = "complete your profile";
          cta_link = "/profile";
          cta_text = "Complete Your Profile";
        } else // Check condition
if ( {) {
  $2
}
          next_action = "add your skills to get matched with the right opportunities";
          cta_link = "/profile / skills";
          cta_text = "Add Your Skills";
        } else // Check condition
if ( {) {
  $2
}
          next_action = "set your availability to help clients find you";
          cta_link = "/profile / settings";
          cta_text = "Set Your Availability";
        }
      } else {
        // For clients;
        // Check condition
if ( {) {
  $2
}
          next_action = "post your first job to start finding talent";
          cta_link = "/post - job";
          cta_text = "Post a Job";
        } else // Check condition
if ( {) {
  $2
}
          next_action = "invite talent to speed up your hiring process";
          cta_link = "/talent";
          cta_text = "Find Talent";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      }
    }
    return {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      subject: `${firstName}, one quick step to unlock more opportunities`,
      html: `
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
          <h2>One quick step to get more from Zion</h2>
          <p>Hi ${firstName},</p>
          <p>We noticed you haven't had a chance to ${nextAction |"complete your setup"} yet.</p>
          <p>This will help you ${user_type === "jobSeeker" |user_type === "creator" ?
            "get discovered by clients looking for your skills" :
            "find the perfect AI talent for your projects"}.</p>
          <div style="margin: 25px 0,">
            <a href="${supabaseUrl}${ctaLink}" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">${ctaText}</a>
          </div>
          <p>Need help? Just reply to this email and we'll assist you.</p>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `}
  } else if (email_type === "inactivity_7") {
    // Day 7+ reactivation
    if (user_type === "jobSeeker" |user_type === "creator") {
      return {
        subject: `New projects waiting for your expertise, ${firstName}`,
        html: `
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
            <h2>New opportunities waiting for you!</h2>
            <p>Hi ${firstName},</p>
            <p>We've seen new AI projects posted in your area of expertise this week.</p>
            <p>Complete your profile this week and unlock premium visibility to stand out to clients looking for talent like you.</p>
            <div style="margin: 25px 0,">
              <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">See New Projects</a>
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `}
    } else {
      // For clients
      return {
        subject: `Zion's top AI talent this week — don't miss out, ${firstName}`,
        html: `
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
            <h2>This week's top AI talent</h2>
            <p>Hi ${firstName},</p>
            <p>We've added new exceptional AI professionals to our talent pool this week who might be perfect for your projects.</p>
            <p>Post a job this week and get featured in our newsletter sent to all our talent.</p>
            <div style="margin: 25px 0,">
              <a href="${supabaseUrl}/talent" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Browse Top Talent</a>
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `}
    }
  } else if (email_type === "inactivity_30") {
    // 30-day reengagement with incentives
    if (user_type === "jobSeeker" |user_type === "creator") {
      return {
        subject: `${firstName}, we miss you! Special offer inside`,
        html: `
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
            <h2>We miss you! Special offer inside</h2>
            <p>Hi ${firstName},</p>
            <p>It's been a while since we've seen you on Zion AI Marketplace. We've noticed many new jobs that match your skills have been posted.</p>
            <p><strong>Special Offer: </strong> Return this week and complete your profile to unlock 2 weeks of premium visibility absolutely free.</p>
            <div style="margin: 25px 0,">
              <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Claim Your Offer</a>
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `}
    } else {
      // For clients
      return {
        subject: `${firstName}, exclusive hiring discount inside`,
        html: `
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
            <h2>Exclusive hiring discount inside</h2>
            <p>Hi ${firstName},</p>
            <p>We haven't seen you for a while on Zion AI Marketplace. Our talent pool has grown significantly since your last visit.</p>
            <p><strong>Special Offer: </strong> Post a job this week and receive 20% off our platform fees for your next hire.</p>
            <div style="margin: 25px 0,">
              <a href="${supabaseUrl}/post-job" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Post a Job</a>
            </div>
            <p>The Zion AI Marketplace Team</p>
          </div>
        `}
    }
  } else if (email_type === "no_applications_7_days") {
    // Email for talent not receiving applications
    return {
      subject: `Boost your profile visibility, ${firstName}`,
      html: `
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
          <h2>Boost your profile visibility</h2>
          <p>Hi ${firstName},</p>
          <p>We noticed you haven't received applications recently. Here are some tips to make your profile stand out: </p>
          <ul>
            <li>Add more details to your skills and experience</li>
            <li>Upload samples of your work to your portfolio</li>
            <li>Make sure your availability is up to date</li>
            <li>Adjust your rate if needed to be more competitive</li>
          </ul>
          <div style="margin: 25px 0,">
            <a href="${supabaseUrl}/profile" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Update Your Profile</a>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `}
  } else if (email_type === "unfilled_job_14_days") {
    // Email for clients with unfilled jobs
    return {
      subject: `Tips to find the perfect talent for "${emailData.job_title}"`,
      html: `
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
          <h2>Let's find talent for your job</h2>
          <p>Hi ${firstName},</p>
          <p>We noticed your job "${emailData.job_title}" has been open for a while. Here are some tips to attract more qualified candidates: </p>
          <ul>
            <li>Review and update your job description with more details</li>
            <li>Consider adjusting your budget range if possible</li>
            <li>Proactively invite talent from our directory</li>
            <li>Add more specific skills requirements</li>
          </ul>
          <div style="margin: 25px 0,">
            <a href="${supabaseUrl}/dashboard/jobs/${emailData.job_id}" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Update Job Post</a>
          </div>
          <p>The Zion AI Marketplace Team</p>
        </div>
      `}
  }
  // Default generic email
  return {
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      subject: `${first_name}, one quick step to unlock more opportunities`;
      html: `;
        <div style="font - family: sans - serif, max - width: 600px, margin: 0 auto, ">;
          <h2 > One quick step to get more from Zion</h2>;
          <p > Hi ${first_name}, </p>;
          <p > We noticed you haven't had a chance to ${next_action || "complete your setup"} yet.</p>;
          <p > This will help you ${user_type === "job_seeker" || user_type === "creator" ?;
            "get discovered by clients looking for your skills" :;
            "find the perfect AI talent for your projects"}.</p>;
          <div style="margin: 25px 0, ">;
            <a href="${supabase_url}${cta_link}" style="background - color: #9b87f5, color: white, padding: 12px 20px, text - decoration: none, border - radius: 4px, ">${cta_text}</a>;
          </div>;
          <p > Need help? Just reply to this email and we'll assist you.</p>;
          <p > The Zion AI Marketplace Team</p>;
        </div>;
      `}
  } else // Check condition
if ( {) {
  $2
}
    // Day 7+ reactivation;
    // Check condition
if ( {) {
  $2
}
      return {
        subject: `New projects waiting for your expertise, ${first_name}`;
        html: `;
          <div style="font - family: sans - serif, max - width: 600px, margin: 0 auto, ">;
            <h2 > New opportunities waiting for you!</h2>;
            <p > Hi ${first_name}, </p>;
            <p > We've seen new AI projects posted in your area of expertise this week.</p>;
            <p > Complete your profile this week and unlock premium visibility to stand out to clients looking for talent like you.</p>;
            <div style="margin: 25px 0, ">;
              <a href="${supabase_url}/dashboard" style="background - color: #9b87f5, color: white, padding: 12px 20px, text - decoration: none, border - radius: 4px, ">See New Projects</a>;
            </div>;
            <p > The Zion AI Marketplace Team</p>;
          </div>;
        `}
    } else {
      // For clients;
      return {
        subject: `Zion's top AI talent this week — don't miss out, ${first_name}`;
        html: `;
          <div style="font - family: sans - serif, max - width: 600px, margin: 0 auto, ">;
            <h2 > This week's top AI talent</h2>;
            <p > Hi ${first_name}, </p>;
            <p > We've added new exceptional AI professionals to our talent pool this week who might be perfect for your projects.</p>;
            <p > Post a job this week and get featured in our newsletter sent to all our talent.</p>;
            <div style="margin: 25px 0, ">;
              <a href="${supabase_url}/talent" style="background - color: #9b87f5, color: white, padding: 12px 20px, text - decoration: none, border - radius: 4px, ">Browse Top Talent</a>;
            </div>;
            <p > The Zion AI Marketplace Team</p>;
          </div>;
        `}
    }
  } else // Check condition
if ( {) {
  $2
}
    // 30 - day reengagement with incentives;
    // Check condition
if ( {) {
  $2
}
      return {
        subject: `${first_name}, we miss you! Special offer inside`;
        html: `;
          <div style="font - family: sans - serif, max - width: 600px, margin: 0 auto, ">;
            <h2 > We miss you! Special offer inside</h2>;
            <p > Hi ${first_name}, </p>;
            <p > It's been a while since we've seen you on Zion AI Marketplace. We've noticed many new jobs that match your skills have been posted.</p>;
            <p><strong > Special Offer: </strong> Return this week and complete your profile to unlock 2 weeks of premium visibility absolutely free.</p>;
            <div style="margin: 25px 0, ">;
              <a href="${supabase_url}/dashboard" style="background - color: #9b87f5, color: white, padding: 12px 20px, text - decoration: none, border - radius: 4px, ">Claim Your Offer</a>;
            </div>;
            <p > The Zion AI Marketplace Team</p>;
          </div>;
        `}
    } else {
      // For clients;
      return {
        subject: `${first_name}, exclusive hiring discount inside`;
        html: `;
          <div style="font - family: sans - serif, max - width: 600px, margin: 0 auto, ">;
            <h2 > Exclusive hiring discount inside</h2>;
            <p > Hi ${first_name}, </p>;
            <p > We haven't seen you for a while on Zion AI Marketplace. Our talent pool has grown significantly since your last visit.</p>;
            <p><strong > Special Offer: </strong> Post a job this week and receive 20% off our platform fees for your next hire.</p>;
            <div style="margin: 25px 0, ">;
              <a href="${supabase_url}/post - job" style="background - color: #9b87f5, color: white, padding: 12px 20px, text - decoration: none, border - radius: 4px, ">Post a Job</a>;
            </div>;
            <p > The Zion AI Marketplace Team</p>;
          </div>;
        `}
    }
  } else // Check condition
if ( {) {
  $2
}
    // Email for talent not receiving applications;
    return {
      subject: `Boost your profile visibility, ${first_name}`;
      html: `;
        <div style="font - family: sans - serif, max - width: 600px, margin: 0 auto, ">;
          <h2 > Boost your profile visibility</h2>;
          <p > Hi ${first_name}, </p>;
          <p > We noticed you haven't received applications recently. Here are some tips to make your profile stand out: </p>;
          <ul>;
            <li > Add more details to your skills and experience</li>;
            <li > Upload samples of your work to your portfolio</li>;
            <li > Make sure your availability is up to date</li>;
            <li > Adjust your rate if needed to be more competitive</li>;
          </ul>;
          <div style="margin: 25px 0, ">;
            <a href="${supabase_url}/profile" style="background - color: #9b87f5, color: white, padding: 12px 20px, text - decoration: none, border - radius: 4px, ">Update Your Profile</a>;
          </div>;
          <p > The Zion AI Marketplace Team</p>;
        </div>;
      `}
  } else // Check condition
if ( {) {
  $2
}
    // Email for clients with unfilled jobs;
    return {
    subject: `${firstName}, we miss you at Zion AI Marketplace`;

    subject: `${firstName}, we miss you at Zion AI Marketplace`,
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    subject: `${firstName}, we miss you at Zion AI Marketplace`;

    subject: `${firstName}, we miss you at Zion AI Marketplace`,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    html: `
      <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">
        <h2>We've missed you!</h2>
        <p>Hi ${firstName},</p>
        <p>We noticed you haven't been active on Zion AI Marketplace recently.</p>
        <p>Log back in to see what's new and connect with ${
          user_type === "jobSeeker" |user_type === "creator"
            ? "clients looking for your skills"
            : "talented AI professionals"
        }.</p>
        <div style="margin: 25px 0,">
          <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Log In Now</a>
        </div>
        <p>The Zion AI Marketplace Team</p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      subject: `Tips to find the perfect talent for "${email_data.job_title}"`;


    `}
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      subject: `Tips to find the perfect talent for "${email_data.job_title}"`;
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}),;
async function generateEmail(emailData: EmailData, userData: any): Promise<{ subject: string, html: string }> {;
  const { email_type, display_name, user_type } = emailData,;
  const firstName = display_name?.split(" ")[0] || "there",;
  // Get onboarding status for personalized content;
  let nextAction = "",;
  let ctaLink = "/dashboard",;
  let ctaText = "Go to Dashboard",;
  if (email_type === "welcome_series") {;
    // Customize based on user type;
    if (user_type === "jobSeeker" || user_type === "creator") {;
      return {;
        subject: `Welcome to Zion AI Marketplace, ${firstName}!`,;
        html: `;
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">;
            <h2>Welcome to Zion AI Marketplace!</h2>;
            <p>Hi ${firstName},</p>;
            <p>We're excited to have you join our community of talented AI professionals.</p>;
            <p>Here's what to do next to get started: </p>;
            <ol>;
              <li>Complete your profile to help clients find you</li>;
              <li>Add your skills and expertise</li>;
              <li>Set your availability preferences</li>;
              <li>Browse available jobs and start applying</li>;
            </ol>;
            <div style="margin: 25px 0,">;
              <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Complete Your Profile</a>;
            </div>;
            <p>If you have any questions, just reply to this email.</p>;
            <p>The Zion AI Marketplace Team</p>;
          </div>;
        `}
    } else {;
      // For clients/employers;
      return {;
        subject: `Welcome to Zion AI Marketplace, ${firstName}!`,;
        html: `;
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">;
            <h2>Welcome to Zion AI Marketplace!</h2>;
            <p>Hi ${firstName},</p>;
            <p>We're excited to have you join our community of innovative businesses and entrepreneurs.</p>;
            <p>Here's what to do next to get started: </p>;
            <ol>;
              <li>Complete your company profile</li>;
              <li>Post your first job or project</li>;
              <li>Browse talent profiles in our directory</li>;
              <li>Connect with AI professionals that match your needs</li>;
            </ol>;
            <div style="margin: 25px 0,">;
              <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Post Your First Job</a>;
            </div>;
            <p>If you have any questions, just reply to this email.</p>;
            <p>The Zion AI Marketplace Team</p>;
          </div>;
        `}
    }
  } else if (email_type === "inactivity_3") {;
    // Day 3 incomplete action reminder;
    if (emailData.onboarding_status) {;
      const onboarding = emailData.onboarding_status,;
      if (user_type === "jobSeeker" || user_type === "creator") {;
        if (!onboarding.profile_completed) {;
          nextAction = "complete your profile",;
          ctaLink = "/profile",;
          ctaText = "Complete Your Profile";
        } else if (!onboarding.skills_added) {;
          nextAction = "add your skills to get matched with the right opportunities",;
          ctaLink = "/profile/skills",;
          ctaText = "Add Your Skills";
        } else if (!onboarding.availability_set) {;
          nextAction = "set your availability to help clients find you",;
          ctaLink = "/profile/settings",;
          ctaText = "Set Your Availability";
        }
      } else {;
        // For clients;
        if (!onboarding.job_posted) {;
          nextAction = "post your first job to start finding talent",;
          ctaLink = "/post-job",;
          ctaText = "Post a Job";
        } else if (!onboarding.talent_invited) {;
          nextAction = "invite talent to speed up your hiring process",;
          ctaLink = "/talent",;
          ctaText = "Find Talent";
        }
      }
    }
;
    return {;
      subject: `${firstName}, one quick step to unlock more opportunities`,;

<<<<<<< HEAD
<<<<<<< HEAD


    `}
}
    `}

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0",;
import { Resend } from "npm:resend@2.0.0",;
;
// Initialize Resend with API key;
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),;
;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
interface EmailData {;
  user_id:string,;
  email_type:string,;
  display_name:string,;
  user_type:string,;
  days_inactive?:number,;
  onboarding_status?:any,;
  job_id?:string,;
  job_title?:string;
}
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    // Extract job data from request;
    const jobData = await req.json(),;
    const { id:jobId, payload } = jobData,;
    const emailData = payload as EmailData,;
    ;
    // Fetch user's email;
    const { data:userData, error:userError } = await supabase;
      .from("profiles");
      .select("id, display_name, avatar_url, user_type");
      .eq("id", emailData.user_id);
      .single(),;
    ;
    if (userError) {;
      throw new Error(`Error fetching user data:${userError.message}`),;
    }
    ;
    const { data:authUser, error:authError } = await supabase;
      .from("auth.users");
      .select("email");
      .eq("id", emailData.user_id);
      .single(),;
    ;
    if (authError) {;
      throw new Error(`Error fetching user email:${authError.message}`),;
    }
    ;
    const userEmail = authUser.email,;
    if (!userEmail) {;
      throw new Error("User email not found"),;
    }
;
    // Generate email content based on email type;
    const { subject, html } = await generateEmail(emailData, userData),;
;
    // Send email via Resend;
    const emailResponse = await resend.emails.send({;
      from:"Zion AI Marketplace <notifications@zion.ai>",;
      to:userEmail,;
      subject:subject,;
      html:html}),;
;
    if (emailResponse.error) {;
      throw new Error(`Failed to send email:${emailResponse.error.message}`),;
    }
;
    // Update job status;
    await supabase;
      .from("scheduled_jobs");
      .update({;
        status:"completed",;
        completed_at:new Date().toISOString()});
      .eq("id", jobId),;
;
    // Update email campaign record;
    await supabase;
      .from("email_campaigns");
      .update({;
        status:"sent",;
        sent_at:new Date().toISOString()});
      .eq("user_id", emailData.user_id);
      .eq("campaign_type", emailData.email_type),;
;
    return new Response(;
      JSON.stringify({;
        success:true,;
        message:"Email sent successfully",;
        email:emailResponse}),;
      {;
        headers:{;
          ...corsHeaders,;
          "Content-Type":"application/json"},;
        status:200}
    ),;
  } catch (error) {;
    console.error("Error in send-retention-email function:", error),;
;
    return new Response(;
      JSON.stringify({;
        success:false,;
        error:error.message}),;
      {;
        headers:{;
          ...corsHeaders,;
          "Content-Type":"application/json"},;
        status:500}
    ),;
  }
}),;
;
async function generateEmail(emailData:EmailData, userData:any):Promise<{ subject:string, html:string }> {;
  const { email_type, display_name, user_type } = emailData,;
  const firstName = display_name?.split(" ")[0] || "there",;
;
  // Get onboarding status for personalized content;
  let nextAction = "",;
  let ctaLink = "/dashboard",;
  let ctaText = "Go to Dashboard",;
;
  if (email_type === "welcome_series") {;
    // Customize based on user type;
    if (user_type === "jobSeeker" || user_type === "creator") {;
      return {;
        subject:`Welcome to Zion AI Marketplace, ${firstName}!`,;
        html:`;
          <div style="font-family:sans-serif, max-width:600px, margin:0 auto,">;
            <h2>Welcome to Zion AI Marketplace!</h2>;
            <p>Hi ${firstName},</p>;
            <p>We're excited to have you join our community of talented AI professionals.</p>;
            <p>Here's what to do next to get started:</p>;
            <ol>;
              <li>Complete your profile to help clients find you</li>;
              <li>Add your skills and expertise</li>;
              <li>Set your availability preferences</li>;
              <li>Browse available jobs and start applying</li>;
            </ol>;
            <div style="margin:25px 0,">;
              <a href="${supabaseUrl}/dashboard" style="background-color:#9b87f5, color:white, padding:12px 20px, text-decoration:none, border-radius:4px,">Complete Your Profile</a>;
            </div>;
            <p>If you have any questions, just reply to this email.</p>;
            <p>The Zion AI Marketplace Team</p>;
          </div>;
        `},;
    } else {;
      // For clients/employers;
      return {;
        subject:`Welcome to Zion AI Marketplace, ${firstName}!`,;
        html:`;
          <div style="font-family:sans-serif, max-width:600px, margin:0 auto,">;
            <h2>Welcome to Zion AI Marketplace!</h2>;
            <p>Hi ${firstName},</p>;
            <p>We're excited to have you join our community of innovative businesses and entrepreneurs.</p>;
            <p>Here's what to do next to get started:</p>;
            <ol>;
              <li>Complete your company profile</li>;
              <li>Post your first job or project</li>;
              <li>Browse talent profiles in our directory</li>;
              <li>Connect with AI professionals that match your needs</li>;
            </ol>;
            <div style="margin:25px 0,">;
              <a href="${supabaseUrl}/dashboard" style="background-color:#9b87f5, color:white, padding:12px 20px, text-decoration:none, border-radius:4px,">Post Your First Job</a>;
            </div>;
            <p>If you have any questions, just reply to this email.</p>;
            <p>The Zion AI Marketplace Team</p>;
          </div>;
        `},;
    }
  } else if (email_type === "inactivity_3") {;
    // Day 3 incomplete action reminder;
    if (emailData.onboarding_status) {;
      const onboarding = emailData.onboarding_status,;
      ;
      if (user_type === "jobSeeker" || user_type === "creator") {;
        if (!onboarding.profile_completed) {;
          nextAction = "complete your profile",;
          ctaLink = "/profile",;
          ctaText = "Complete Your Profile",;
        } else if (!onboarding.skills_added) {;
          nextAction = "add your skills to get matched with the right opportunities",;
          ctaLink = "/profile/skills",;
          ctaText = "Add Your Skills",;
        } else if (!onboarding.availability_set) {;
          nextAction = "set your availability to help clients find you",;
          ctaLink = "/profile/settings",;
          ctaText = "Set Your Availability",;
        }
      } else {;
        // For clients;
        if (!onboarding.job_posted) {;
          nextAction = "post your first job to start finding talent",;
          ctaLink = "/post-job",;
          ctaText = "Post a Job",;
        } else if (!onboarding.talent_invited) {;
          nextAction = "invite talent to speed up your hiring process",;
          ctaLink = "/talent",;
          ctaText = "Find Talent",;
        }
      }
    }
;
    return {;
      subject:`${firstName}, one quick step to unlock more opportunities`,;
      html:`;
        <div style="font-family:sans-serif, max-width:600px, margin:0 auto,">;
          <h2>One quick step to get more from Zion</h2>;
          <p>Hi ${firstName},</p>;
          <p>We noticed you haven't had a chance to ${nextAction || "complete your setup"} yet.</p>;
          <p>This will help you ${user_type === "jobSeeker" || user_type === "creator" ? ;
            "get discovered by clients looking for your skills" :;
            "find the perfect AI talent for your projects"}.</p>;
          <div style="margin:25px 0,">;
            <a href="${supabaseUrl}${ctaLink}" style="background-color:#9b87f5, color:white, padding:12px 20px, text-decoration:none, border-radius:4px,">${ctaText}</a>;
      html: `;
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">;
          <h2>One quick step to get more from Zion</h2>;
          <p>Hi ${firstName},</p>;
          <p>We noticed you haven't had a chance to ${nextAction || "complete your setup"} yet.</p>;
          <p>This will help you ${user_type === "jobSeeker" || user_type === "creator" ?;
            "get discovered by clients looking for your skills" :;
            "find the perfect AI talent for your projects"}.</p>;
          <div style="margin: 25px 0,">;
            <a href="${supabaseUrl}${ctaLink}" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">${ctaText}</a>;
          </div>;
          <p>Need help? Just reply to this email and we'll assist you.</p>;
          <p>The Zion AI Marketplace Team</p>;
        </div>;
      `}
  } else if (email_type === "inactivity_7") {;
    // Day 7+ reactivation;
    if (user_type === "jobSeeker" || user_type === "creator") {;
      return {;
        subject: `New projects waiting for your expertise, ${firstName}`,;
        html: `;
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">;
            <h2>New opportunities waiting for you!</h2>;
            <p>Hi ${firstName},</p>;
            <p>We've seen new AI projects posted in your area of expertise this week.</p>;
            <p>Complete your profile this week and unlock premium visibility to stand out to clients looking for talent like you.</p>;
            <div style="margin: 25px 0,">;
              <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">See New Projects</a>;
            </div>;
            <p>The Zion AI Marketplace Team</p>;
          </div>;
        `}
    } else {;
      // For clients;
      return {;
        subject: `Zion's top AI talent this week — don't miss out, ${firstName}`,;
        html: `;
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">;
            <h2>This week's top AI talent</h2>;
            <p>Hi ${firstName},</p>;
            <p>We've added new exceptional AI professionals to our talent pool this week who might be perfect for your projects.</p>;
            <p>Post a job this week and get featured in our newsletter sent to all our talent.</p>;
            <div style="margin: 25px 0,">;
              <a href="${supabaseUrl}/talent" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Browse Top Talent</a>;
            </div>;
            <p>The Zion AI Marketplace Team</p>;
          </div>;
        `}
    }
  } else if (email_type === "inactivity_30") {;
    // 30-day reengagement with incentives;
    if (user_type === "jobSeeker" || user_type === "creator") {;
      return {;
        subject: `${firstName}, we miss you! Special offer inside`,;
        html: `;
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">;
            <h2>We miss you! Special offer inside</h2>;
            <p>Hi ${firstName},</p>;
            <p>It's been a while since we've seen you on Zion AI Marketplace. We've noticed many new jobs that match your skills have been posted.</p>;
            <p><strong>Special Offer: </strong> Return this week and complete your profile to unlock 2 weeks of premium visibility absolutely free.</p>;
            <div style="margin: 25px 0,">;
              <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Claim Your Offer</a>;
            </div>;
            <p>The Zion AI Marketplace Team</p>;
          </div>;
        `}
    } else {;
      // For clients;
      return {;
        subject: `${firstName}, exclusive hiring discount inside`,;
        html: `;
          <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">;
            <h2>Exclusive hiring discount inside</h2>;
            <p>Hi ${firstName},</p>;
            <p>We haven't seen you for a while on Zion AI Marketplace. Our talent pool has grown significantly since your last visit.</p>;
            <p><strong>Special Offer: </strong> Post a job this week and receive 20% off our platform fees for your next hire.</p>;
            <div style="margin: 25px 0,">;
              <a href="${supabaseUrl}/post-job" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Post a Job</a>;
            </div>;
            <p>The Zion AI Marketplace Team</p>;
          </div>;
        `}
    }
  } else if (email_type === "no_applications_7_days") {;
    // Email for talent not receiving applications;
    return {;
      subject: `Boost your profile visibility, ${firstName}`,;
      html: `;
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">;
          <h2>Boost your profile visibility</h2>;
          <p>Hi ${firstName},</p>;
          <p>We noticed you haven't received applications recently. Here are some tips to make your profile stand out: </p>;
          <ul>;
            <li>Add more details to your skills and experience</li>;
            <li>Upload samples of your work to your portfolio</li>;
            <li>Make sure your availability is up to date</li>;
            <li>Adjust your rate if needed to be more competitive</li>;
          </ul>;
          <div style="margin: 25px 0,">;
            <a href="${supabaseUrl}/profile" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Update Your Profile</a>;
          </div>;
          <p>The Zion AI Marketplace Team</p>;
        </div>;
      `}
  } else if (email_type === "unfilled_job_14_days") {;
    // Email for clients with unfilled jobs;
    return {;
      subject: `Tips to find the perfect talent for "${emailData.job_title}"`,;
      html: `;
        <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">;
          <h2>Let's find talent for your job</h2>;
          <p>Hi ${firstName},</p>;
          <p>We noticed your job "${emailData.job_title}" has been open for a while. Here are some tips to attract more qualified candidates: </p>;
          <ul>;
            <li>Review and update your job description with more details</li>;
            <li>Consider adjusting your budget range if possible</li>;
            <li>Proactively invite talent from our directory</li>;
            <li>Add more specific skills requirements</li>;
          </ul>;
          <div style="margin: 25px 0,">;
            <a href="${supabaseUrl}/dashboard/jobs/${emailData.job_id}" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Update Job Post</a>;
          </div>;
          <p>The Zion AI Marketplace Team</p>;
        </div>;
      `}
  }
;
  // Default generic email;
  return {;
    subject: `${firstName}, we miss you at Zion AI Marketplace`;
    html: `;
      <div style="font-family: sans-serif, max-width: 600px, margin: 0 auto,">;
        <h2>We've missed you!</h2>;
        <p>Hi ${firstName},</p>;
        <p>We noticed you haven't been active on Zion AI Marketplace recently.</p>;
        <p>Log back in to see what's new and connect with ${;
          user_type === "jobSeeker" || user_type === "creator";
            ? "clients looking for your skills";
            : "talented AI professionals";
        }.</p>;
        <div style="margin: 25px 0,">;
          <a href="${supabaseUrl}/dashboard" style="background-color: #9b87f5, color: white, padding: 12px 20px, text-decoration: none, border-radius: 4px,">Log In Now</a>;
        </div>;
        <p>The Zion AI Marketplace Team</p>;
      </div>;
    `}
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      html: `;
        <div style="font - family: sans - serif, max - width: 600px, margin: 0 auto, ">;
          <h2 > Let's find talent for your job</h2>;
          <p > Hi ${first_name}, </p>;
          <p > We noticed your job "${email_data.job_title}" has been open for a while. Here are some tips to attract more qualified candidates: </p>;
          <ul>;
            <li > Review and update your job description with more details</li>;
            <li > Consider adjusting your budget range if possible</li>;
            <li > Proactively invite talent from our directory</li>;
            <li > Add more specific skills requirements</li>;
          </ul>;
          <div style="margin: 25px 0, ">;
            <a href="${supabase_url}/dashboard / jobs/${email_data.job_id}" style="background - color: #9b87f5, color: white, padding: 12px 20px, text - decoration: none, border - radius: 4px, ">Update Job Post</a>;
          </div>;
          <p > The Zion AI Marketplace Team</p>;
        </div>;
      `}
  }
  // Default generic email;
  return {
    subject: `${first_name}, we miss you at Zion AI Marketplace`;
    html: `;
      <div style="font - family: sans - serif, max - width: 600px, margin: 0 auto, ">;
        <h2 > We've missed you!</h2>;
        <p > Hi ${first_name}, </p>;
        <p > We noticed you haven't been active on Zion AI Marketplace recently.</p>;
        <p > Log back in to see what's new and connect with ${
          user_type === "job_seeker" || user_type === "creator";
            ? "clients looking for your skills";
            : "talented AI professionals";
        }.</p>;
        <div style="margin: 25px 0, ">;
          <a href="${supabase_url}/dashboard" style="background - color: #9b87f5, color: white, padding: 12px 20px, text - decoration: none, border - radius: 4px, ">Log In Now</a>;
        </div>;
        <p > The Zion AI Marketplace Team</p>;
      </div>;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    `}
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
