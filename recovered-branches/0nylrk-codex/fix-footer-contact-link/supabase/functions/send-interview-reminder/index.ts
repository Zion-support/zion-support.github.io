
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {Resend} from "npm: resend@2 ;
=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {Resend} from "npm: resend@2.0.0";

<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { Resend } from "npm: resend@2.0.0",



const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};
const resend = new Resend(Deno && Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {Resend} from "npm: resend@2.0.0";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") |"";
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {Resend} from "npm: resend@2.0.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { Resend } from "npm: resend@2.0.0",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

const resend = new Resend(Deno.env.get("RESEND_API_KEY")),
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "",

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { Resend } from "npm: resend@2.0.0",



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};

const resend = new Resend(Deno && Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Use service role key for admin privileges
<<<<<<< HEAD
<<<<<<< HEAD
    const thirtyMinutesFromNow = new Date(now && now.getTime() + 30 * 60000);
    

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    // Get upcoming interviews in the next hour
    const now = new Date();
    const thirtyMinutesFromNow = new Date(now && now.getTime() + 30 * 60000);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    // Get upcoming interviews in the next hour
    const now = new Date();
    const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60000);
<<<<<<< HEAD
=======

    const thirtyMinutesFromNow = new Date(now && now.getTime() + 30 * 60000);
    

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const { data: interviews, error } = await supabase
      .from('interviews')
      .select(`
        *;
        clients: client_id(*)
<<<<<<< HEAD
<<<<<<< HEAD
=======
        talents:talent_id(*)
      `)
      .eq('statusconfirmed')
      .gte('scheduled_date', now && now.toISOString())
      .lt('scheduled_date', thirtyMinutesFromNow && thirtyMinutesFromNow.toISOString())
      .is('reminder_sent', null);
    if (error) throw error;

    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    console && console.log(`Found ${interviews?.length || 0} interviews to send reminders for`);
    const results = [];
    if (interviews && interviews.length > 0) {
      for (const interview of interviews) {
        // Send email to client
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';,
import { Resend } from 'npm: resend@2.0.0';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
const resend = new Resend (Deno.env.get ("RESEND_API_KEY"));
const supabase_url = Deno.env.get ("SUPABASE_URL") || "";
const supabaseServiceKey = Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") || "";
;
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    // Use service role key for admin privileges;
    const supabase = create_client (supabase_url, supabaseServiceKey);
;
    // Get upcoming interviews in the next hour;
    const now = new Date ();
    const thirtyMinutesFromNow = new Date (now.get_time () + 30 * 60000);
;
    const { data: interviews, error } = await supabase;
      .from ('interviews');
      .select (`;
        *;
        clients: client_id (*),
        talents:talent_id (*);
      `);
      .eq ('statusconfirmed');
      .gte ('scheduled_date', now.toISOString ());
      .lt ('scheduled_date', thirtyMinutesFromNow.toISOString ());
      .is ('reminder_sent', null);
;
    // Check condition
if (throw error) {
  $2
}
    console.log (`Found ${interviews?.length || 0} interviews to send reminders for`);
;
    const results = [];
;
    // Check condition
if ( {) {
  $2
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const supabase = createClient(supabaseUrl, supabaseServiceKey),
    
    // Get upcoming interviews in the next hour
    const now = new Date(),
    const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60000),
    
    const { data: interviews, error } = await supabase
      .from('interviews')
      .select(`
        *,
        clients:client_id(*),
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        talents:talent_id(*)
      `)
      .eq('statusconfirmed')
      .gte('scheduled_date', now.toISOString())
      .lt('scheduled_date', thirtyMinutesFromNow.toISOString())
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .is('reminder_sent', null);
    if (error) throw error;
    console.log(`Found ${interviews?.length |0} interviews to send reminders for`);
    const results = [];
    if (interviews && interviews.length > 0) {
      for (const interview of interviews) {
        // Send email to client
        const clientEmail = interview.clients?.email;
        const talentName = interview.talents?.display_name |interview.talents?.full_name |"Talent";
        const interviewDate = new Date(interview.scheduled_date);
        if (clientEmail) {
          try {
            await resend.emails.send({
              from: "Zion Marketplace <onboarding@resend.dev>";
              to: [clientEmail]
              subject: `Your interview with ${talentName} is starting soon!`;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .is('reminder_sent', null),
    
    if (error) throw error,
    
    // // // console.log(`Found ${interviews?.length || 0} interviews to send reminders for`),
    
    const results = [],
    
    if (interviews && interviews.length > 0) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      for (const interview of interviews) {
        // Send email to client;
        const client_email = interview.clients?.email;
        const talent_name = interview.talents?.display_name || interview.talents?.full_name || "Talent";
        const interview_date = new Date (interview.scheduled_date);
;
        // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          try {
            await resend.emails.send ({
              from: "Zion Marketplace <onboarding@resend.dev>";

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const clientEmail = interview && interview.clients?.email;
        const talentName = interview && interview.talents?.display_name || interview && interview.talents?.full_name || "Talent";
        const interviewDate = new Date(interview && interview.scheduled_date);
=======
        const clientEmail = interview && interview.clients?.email;
        const talentName = interview && interview.talents?.display_name || interview && interview.talents?.full_name || "Talent";
        const interviewDate = new Date(interview && interview.scheduled_date);
        
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (clientEmail) {
          try {
            await resend && resend.emails.send({
              from: "Zion Marketplace <onboarding@resend && resend.dev>";
              to: [clientEmail],
<<<<<<< HEAD
              subject: `Your interview with ${talentName} is starting soon!`;
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${talentName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>

              `}),
            


            results.push(`Reminder sent to client: ${clientEmail}`)
            
              `});
            results && results.push(`Reminder sent to client: ${clientEmail}`)
          } catch (emailError) {
            console && console.error(`Error sending reminder to client ${clientEmail}:`, emailError)
          }
        }
        // Send email to talent
              to: [client_email],
              subject: `Your interview with ${talent_name} is starting soon!`;
              html: `;
                <h1 > Interview Reminder</h1>;
                <p > Your scheduled interview with ${talent_name} is starting in 30 minutes.</p>;
                <p><strong > Time:</strong> ${interview_date.toLocaleTimeString ()}</p>;
                <p><strong > Duration:</strong> ${interview.duration_minutes} minutes</p>;
                ${interview.meeting_link ? `<p><strong > Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</a></p>` : ''}
                <p > Please be ready on time!</p>;
              `});
;
            results.push (`Reminder sent to client: ${client_email}`);
          } catch (email_error) {
            console.error (`Error sending reminder to client ${client_email}:`, email_error);
          }
        }
        // Send email to talent;
        const talent_email = interview.talents?.email;
        const client_name = interview.clients?.display_name || "Client";
;
        // Check condition
if ( {) {
  $2
}

        const talentEmail = interview.talents?.email,
        const clientName = interview.clients?.display_name || "Client",

        
          try {
            await resend.emails.send ({
              from: "Zion Marketplace <onboarding@resend.dev>";
        const talentEmail = interview && interview.talents?.email;
        const clientName = interview && interview.clients?.display_name || "Client";
        if (talentEmail) {
          try {
            await resend && resend.emails.send({
              from: "Zion Marketplace <onboarding@resend && resend.dev>";
              to: [talentEmail],
              subject: `Your interview with ${clientName} is starting soon!`;
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${clientName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>
            
            results && results.push(`Reminder sent to talent: ${talentEmail}`)

              `});
            results && results.push(`Reminder sent to talent: ${talentEmail}`)
          } catch (emailError) {
            console && console.error(`Error sending reminder to talent ${talentEmail}:`, emailError)
<<<<<<< HEAD
      for (const interview of interviews) {
        // Send email to client
        const clientEmail = interview.clients?.email,
        const talentName = interview.talents?.display_name || interview.talents?.full_name || "Talent",
        const interviewDate = new Date(interview.scheduled_date),
        
        if (clientEmail) {
          try {
            await resend.emails.send({
              from: "Zion Marketplace <onboarding@resend.dev>",
              to: [clientEmail],
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              subject: `Your interview with ${talentName} is starting soon!`,
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${talentName} is starting in 30 minutes.</p>
<<<<<<< HEAD
                <p><strong>Time:</strong> ${interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview.duration_minutes} minutes</p>
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</Link></p>` : ''}
=======
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <p>Please be ready on time!</p>
              `});
              `}),
            
            results.push(`Reminder sent to client: ${clientEmail}`)
<<<<<<< HEAD
          } catch (emailError) {
            console.error(`Error sending reminder to client ${clientEmail}:`, emailError)
=======
=======
            
            results && results.push(`Reminder sent to client: ${clientEmail}`)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          } catch (emailError) {
            console && console.error(`Error sending reminder to client ${clientEmail}:`, emailError)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }
        }
        // Send email to talent
        const talentEmail = interview.talents?.email;
        const clientName = interview.clients?.display_name |"Client";
        if (talentEmail) {
          try {
<<<<<<< HEAD
            await resend.emails.send({
=======
            await resend.emails.send ({
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              from: "Zion Marketplace <onboarding@resend.dev>";
              to: [talentEmail]
              subject: `Your interview with ${clientName} is starting soon!`;
        const talentEmail = interview.talents?.email,
        const clientName = interview.clients?.display_name || "Client",
<<<<<<< HEAD
        
        if (talentEmail) {
          try {
            await resend.emails.send({
              from: "Zion Marketplace <onboarding@resend.dev>",
              to: [talentEmail],
=======

        
        if (talentEmail) {
          try {
            await resend && resend.emails.send({
              from: "Zion Marketplace <onboarding@resend && resend.dev>";
              to: [talentEmail],

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              subject: `Your interview with ${clientName} is starting soon!`,
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${clientName} is starting in 30 minutes.</p>
<<<<<<< HEAD
                <p><strong>Time:</strong> ${interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview.duration_minutes} minutes</p>
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</Link></p>` : ''}
=======
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <p>Please be ready on time!</p>
              `});
            results.push(`Reminder sent to talent: ${talentEmail}`)
          } catch (emailError) {
<<<<<<< HEAD
            console.error(`Error sending reminder to talent ${talentEmail}:`, emailError)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            console && console.error(`Error sending reminder to talent ${talentEmail}:`, emailError)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }
        }
        // Mark the interview as reminder sent
        await supabase
          .from('interviews')
          .update({ reminder_sent: new Date().toISOString() })
<<<<<<< HEAD
<<<<<<< HEAD
          .eq('id', interview.id)
      }
    }
    return new Response(JSON.stringify({ success: true, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
              `}),
            
            results.push(`Reminder sent to talent: ${talentEmail}`)
          } catch (emailError) {
            console.error(`Error sending reminder to talent ${talentEmail}:`, emailError)
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
import { Resend } from "npm: resend@2.0.0",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),;
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "",;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    // Use service role key for admin privileges;
    const supabase = createClient(supabaseUrl, supabaseServiceKey),;
    // Get upcoming interviews in the next hour;
    const now = new Date(),;
    const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60000),;
    const { data: interviews, error } = await supabase;
      .from('interviews');
      .select(`;
        *,;
        clients:client_id(*),;
        talents:talent_id(*);
      `);
      .eq('statusconfirmed');
      .gte('scheduled_date', now.toISOString());
      .lt('scheduled_date', thirtyMinutesFromNow.toISOString());
      .is('reminder_sent', null),;
    if (error) throw error,;
    // // // console.log(`Found ${interviews?.length || 0} interviews to send reminders for`),;
    const results = [],;
    if (interviews && interviews.length > 0) {;
      for (const interview of interviews) {;
        // Send email to client;
        const clientEmail = interview.clients?.email,;
        const talentName = interview.talents?.display_name || interview.talents?.full_name || "Talent",;
        const interviewDate = new Date(interview.scheduled_date),;
        if (clientEmail) {;
          try {;
            await resend.emails.send({;
              from: "Zion Marketplace <onboarding@resend.dev>",;
              to: [clientEmail],;
              subject: `Your interview with ${talentName} is starting soon!`,;
              html: `;
                <h1>Interview Reminder</h1>;
                <p>Your scheduled interview with ${talentName} is starting in 30 minutes.</p>;
                <p><strong>Time:</strong> ${interviewDate.toLocaleTimeString()}</p>;
                <p><strong>Duration:</strong> ${interview.duration_minutes} minutes</p>;
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>;
              `}),;
            results.push(`Reminder sent to client: ${clientEmail}`);
          } catch (emailError) {;
            console.error(`Error sending reminder to client ${clientEmail}:`, emailError);
          }
        }
;
        // Send email to talent;
        const talentEmail = interview.talents?.email,;
        const clientName = interview.clients?.display_name || "Client",;
        if (talentEmail) {;
          try {;
            await resend.emails.send({;
              from: "Zion Marketplace <onboarding@resend.dev>",;
              to: [talentEmail],;
              subject: `Your interview with ${clientName} is starting soon!`,;
              html: `;
                <h1>Interview Reminder</h1>;
                <p>Your scheduled interview with ${clientName} is starting in 30 minutes.</p>;
                <p><strong>Time:</strong> ${interviewDate.toLocaleTimeString()}</p>;
                <p><strong>Duration:</strong> ${interview.duration_minutes} minutes</p>;
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>;
              `}),;
            results.push(`Reminder sent to talent: ${talentEmail}`);
          } catch (emailError) {;
            console.error(`Error sending reminder to talent ${talentEmail}:`, emailError);
          }
        }
;
        // Mark the interview as reminder sent;
        await supabase;
          .from('interviews');
          .update({ reminder_sent: new Date().toISOString() });
          .eq('id', interview.id);
          .eq('id', interview && interview.id)
      }
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          .eq('id', interview && interview.id)
      }
    }



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
    
    return new Response(JSON.stringify({ success: true, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      status: 200})
  } catch (error) {
    console.error("Error in send-interview-reminder function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
<<<<<<< HEAD
      status: 200})
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in send-interview-reminder function:", error),
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
=======
    console && console.error("Error in send-interview-reminder function:", error);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      headers: { ...corsHeaders, "Content-Type": "application/json" }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      status: 500})
  }
});

<<<<<<< HEAD
<<<<<<< HEAD
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
;
    return new Response(JSON.stringify({ success: true, results }), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 200});
  } catch (error) {;
    console.error("Error in send-interview-reminder function:", error),;
    return new Response(JSON.stringify({ error: error.message }), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 500});

    
    return new Response(JSON && JSON.stringify({ success: true, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    console && console.error("Error in send-interview-reminder function:", error);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 500})
  }
});
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              to: [talent_email],
              subject: `Your interview with ${client_name} is starting soon!`;
              html: `;
                <h1 > Interview Reminder</h1>;
                <p > Your scheduled interview with ${client_name} is starting in 30 minutes.</p>;
                <p><strong > Time:</strong> ${interview_date.toLocaleTimeString ()}</p>;
                <p><strong > Duration:</strong> ${interview.duration_minutes} minutes</p>;
                ${interview.meeting_link ? `<p><strong > Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</a></p>` : ''}
                <p > Please be ready on time!</p>;
              `});
;
            results.push (`Reminder sent to talent: ${talent_email}`);
          } catch (email_error) {
            console.error (`Error sending reminder to talent ${talent_email}:`, email_error);
          }
        }
        // Mark the interview as reminder sent;
        await supabase;
          .from ('interviews');
          .update ({ reminder_sent: new Date ().toISOString () });
          .eq ('id', interview.id);
      }
    }
    return new Response (JSON.stringify ({ success: true, results }), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {
    console.error ("Error in send - interview - reminder function:", error);
    return new Response (JSON.stringify ({ error: error.message }), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 500});

      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})

  }
});
;
<<<<<<< HEAD

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2",;
import { Resend } from "npm:resend@2.0.0",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
const resend = new Resend(Deno.env.get("RESEND_API_KEY")),;
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "",;
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    // Use service role key for admin privileges;
    const supabase = createClient(supabaseUrl, supabaseServiceKey),;
    ;
    // Get upcoming interviews in the next hour;
    const now = new Date(),;
    const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60000),;
    ;
    const { data:interviews, error } = await supabase;
      .from('interviews');
      .select(`;
        *,;
        clients:client_id(*),;
        talents:talent_id(*);
      `);
      .eq('statusconfirmed');
      .gte('scheduled_date', now.toISOString());
      .lt('scheduled_date', thirtyMinutesFromNow.toISOString());
      .is('reminder_sent', null),;
    ;
    if (error) throw error,;
    ;
    // // // console.log(`Found ${interviews?.length || 0} interviews to send reminders for`),;
    ;
    const results = [],;
    ;
    if (interviews && interviews.length > 0) {;
      for (const interview of interviews) {;
        // Send email to client;
        const clientEmail = interview.clients?.email,;
        const talentName = interview.talents?.display_name || interview.talents?.full_name || "Talent",;
        const interviewDate = new Date(interview.scheduled_date),;
        ;
        if (clientEmail) {;
          try {;
            await resend.emails.send({;
              from:"Zion Marketplace <onboarding@resend.dev>",;
              to:[clientEmail],;
              subject:`Your interview with ${talentName} is starting soon!`,;
              html:`;
                <h1>Interview Reminder</h1>;
                <p>Your scheduled interview with ${talentName} is starting in 30 minutes.</p>;
                <p><strong>Time:</strong> ${interviewDate.toLocaleTimeString()}</p>;
                <p><strong>Duration:</strong> ${interview.duration_minutes} minutes</p>;
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</a></p>` :''}
                <p>Please be ready on time!</p>;
              `}),;
            ;
            results.push(`Reminder sent to client:${clientEmail}`),;
          } catch (emailError) {;
            console.error(`Error sending reminder to client ${clientEmail} `, emailError),;
          }
        }
        ;
        // Send email to talent;
        const talentEmail = interview.talents?.email,;
        const clientName = interview.clients?.display_name || "Client",;
        ;
        if (talentEmail) {;
          try {;
            await resend.emails.send({;
              from:"Zion Marketplace <onboarding@resend.dev>",;
              to:[talentEmail],;
              subject:`Your interview with ${clientName} is starting soon!`,;
              html:`;
                <h1>Interview Reminder</h1>;
                <p>Your scheduled interview with ${clientName} is starting in 30 minutes.</p>;
                <p><strong>Time:</strong> ${interviewDate.toLocaleTimeString()}</p>;
                <p><strong>Duration:</strong> ${interview.duration_minutes} minutes</p>;
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</a></p>` :''}
                <p>Please be ready on time!</p>;
              `}),;
            ;
            results.push(`Reminder sent to talent:${talentEmail}`),;
          } catch (emailError) {;
            console.error(`Error sending reminder to talent ${talentEmail} `, emailError),;
          }
        }
        ;
        // Mark the interview as reminder sent;
        await supabase;
          .from('interviews');
          .update({ reminder_sent:new Date().toISOString() });
          .eq('id', interview.id),;
      }
    }
    ;
    return new Response(JSON.stringify({ success:true, results }), {;
      headers:{ ...corsHeaders, "Content-Type":"application/json" },;
      status:200}),;
  } catch (error) {;
    console.error("Error in send-interview-reminder function:", error),;
    return new Response(JSON.stringify({ error:error.message }), {;
      headers:{ ...corsHeaders, "Content-Type":"application/json" },;
      status:500}),;  }
}),;
 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}try {
  //Use service role key for admin privileges const supabase = createClient (supabaseUrl, supabaseServiceKey);
//Get upcoming interviews in the next hour const now = new Date ();
const thirtyMinutesFromNow = new Date (now.getTime () + 30 * 60000);
data: interviews, error 
}= await supabase .from ('interviews') .select (`*;
clients: client id (*);
talents:talent id (*) `) .eq ('statusconfirmed') .gte ('scheduled date', now.toISOString () ) .lt ('scheduled date', thirtyMinutesFromNow.toISOString () ) .is ('reminder sent', null);
if (error) throw error;
const results = [];
if (interviews && interviews.length > 0) {
  for (const interview of interviews) {
  //Send email to client try {
  await resend.emails.send ({
  <p>Please be ready on time!</p> ` 
});
try {
  await resend.emails.send ({
  <p>Please be ready on time!</p> ` 
});
}//Mark the interview as reminder sent await supabase .from ('interviews') status: 500 
});
}
});
  }
});
  }
});
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
