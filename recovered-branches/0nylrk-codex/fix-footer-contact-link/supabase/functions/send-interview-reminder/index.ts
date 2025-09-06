
<<<<<<< HEAD
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {Resend} from "npm: resend@2 ;
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {Resend} from "npm: resend@2.0.0";

<<<<<<< HEAD
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
=======
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


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {Resend} from "npm: resend@2.0.0";
const corsHeaders = {
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {Resend} from "npm: resend@2.0.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { Resend } from "npm: resend@2.0.0",
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {Resend} from "npm: resend@2 ;


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {Resend} from "npm: resend@2.0.0";

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
<<<<<<< HEAD
  if (req.method === "OPTIONS") {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  if (req && req.method === "OPTIONS") {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Use service role key for admin privileges
<<<<<<< HEAD
<<<<<<< HEAD

    const thirtyMinutesFromNow = new Date(now && now.getTime() + 30 * 60000);
    

=======
    const thirtyMinutesFromNow = new Date(now && now.getTime() + 30 * 60000);
    

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    // Get upcoming interviews in the next hour
    const now = new Date();
    const thirtyMinutesFromNow = new Date(now && now.getTime() + 30 * 60000);
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    // Get upcoming interviews in the next hour
    const now = new Date();
    const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60000);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const { data: interviews, error } = await supabase
      .from('interviews')
      .select(`
        *;
        clients: client_id(*)
<<<<<<< HEAD
<<<<<<< HEAD
        talents:talent_id(*)
      `)
      .eq('statusconfirmed')
      .gte('scheduled_date', now && now.toISOString())
      .lt('scheduled_date', thirtyMinutesFromNow && thirtyMinutesFromNow.toISOString())
      .is('reminder_sent', null);
    if (error) throw error;

    
    console && console.log(`Found ${interviews?.length || 0} interviews to send reminders for`);
    

=======
    console && console.log(`Found ${interviews?.length || 0} interviews to send reminders for`);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const results = [];
    if (interviews && interviews.length > 0) {
      for (const interview of interviews) {
        // Send email to client
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        talents:talent_id(*)
      `)
      .eq('statusconfirmed')
      .gte('scheduled_date', now.toISOString())
      .lt('scheduled_date', thirtyMinutesFromNow.toISOString())
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      .is('reminder_sent', null),
    
    if (error) throw error,
    
    // // // console.log(`Found ${interviews?.length || 0} interviews to send reminders for`),
    
    const results = [],
    
    if (interviews && interviews.length > 0) {
<<<<<<< HEAD

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          try {
            await resend.emails.send ({
              from: "Zion Marketplace <onboarding@resend.dev>";

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        const clientEmail = interview && interview.clients?.email;
        const talentName = interview && interview.talents?.display_name || interview && interview.talents?.full_name || "Talent";
        const interviewDate = new Date(interview && interview.scheduled_date);
        
        if (clientEmail) {
          try {
            await resend && resend.emails.send({
              from: "Zion Marketplace <onboarding@resend && resend.dev>";
              to: [clientEmail],
<<<<<<< HEAD
<<<<<<< HEAD

=======
              subject: `Your interview with ${talentName} is starting soon!`;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${talentName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

              `}),
            


            results.push(`Reminder sent to client: ${clientEmail}`)
            
<<<<<<< HEAD
=======
              `});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            results && results.push(`Reminder sent to client: ${clientEmail}`)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          } catch (emailError) {
            console && console.error(`Error sending reminder to client ${clientEmail}:`, emailError)
          }
        }
        // Send email to talent
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

          try {
            await resend.emails.send ({
              from: "Zion Marketplace <onboarding@resend.dev>";

        const talentEmail = interview && interview.talents?.email;
        const clientName = interview && interview.clients?.display_name || "Client";
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        const talentEmail = interview.talents?.email,
        const clientName = interview.clients?.display_name || "Client",

        
<<<<<<< HEAD
=======
          try {
            await resend.emails.send ({
              from: "Zion Marketplace <onboarding@resend.dev>";
        const talentEmail = interview && interview.talents?.email;
        const clientName = interview && interview.clients?.display_name || "Client";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        if (talentEmail) {
          try {
            await resend && resend.emails.send({
              from: "Zion Marketplace <onboarding@resend && resend.dev>";
              to: [talentEmail],
<<<<<<< HEAD

              subject: `Your interview with ${clientName} is starting soon!`,


=======
              subject: `Your interview with ${clientName} is starting soon!`;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${clientName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>
<<<<<<< HEAD
<<<<<<< HEAD

            
            results && results.push(`Reminder sent to talent: ${talentEmail}`)

          } catch (emailError) {
            console && console.error(`Error sending reminder to talent ${talentEmail}:`, emailError)
=======
            
            results && results.push(`Reminder sent to talent: ${talentEmail}`)

              `});
            results && results.push(`Reminder sent to talent: ${talentEmail}`)
          } catch (emailError) {
            console && console.error(`Error sending reminder to talent ${talentEmail}:`, emailError)
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
              subject: `Your interview with ${talentName} is starting soon!`,
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${talentName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview.duration_minutes} minutes</p>
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</Link></p>` : ''}
                <p>Please be ready on time!</p>
              `});
              `}),
            
            results.push(`Reminder sent to client: ${clientEmail}`)
          } catch (emailError) {
            console.error(`Error sending reminder to client ${clientEmail}:`, emailError)
          }
        }
        // Send email to talent
        const talentEmail = interview.talents?.email;
        const clientName = interview.clients?.display_name |"Client";
        if (talentEmail) {
          try {
            await resend.emails.send({
              from: "Zion Marketplace <onboarding@resend.dev>";
              to: [talentEmail]
              subject: `Your interview with ${clientName} is starting soon!`;
        const talentEmail = interview.talents?.email,
        const clientName = interview.clients?.display_name || "Client",
        
        if (talentEmail) {
          try {
            await resend.emails.send({
              from: "Zion Marketplace <onboarding@resend.dev>",
              to: [talentEmail],
              subject: `Your interview with ${clientName} is starting soon!`,
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${clientName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview.duration_minutes} minutes</p>
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview.meeting_link}">${interview.meeting_link}</Link></p>` : ''}
                <p>Please be ready on time!</p>
              `});
            results.push(`Reminder sent to talent: ${talentEmail}`)
          } catch (emailError) {
            console.error(`Error sending reminder to talent ${talentEmail}:`, emailError)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          } catch (emailError) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          }
        }
        // Mark the interview as reminder sent
        await supabase
          .from('interviews')
          .update({ reminder_sent: new Date().toISOString() })
<<<<<<< HEAD
<<<<<<< HEAD
          .eq('id', interview && interview.id)
      }
    }



=======
          .eq('id', interview.id)
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
    }
    
    return new Response(JSON.stringify({ success: true, results }), {
      status: 200})
  } catch (error) {
    console.error("Error in send-interview-reminder function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500})
  }
});

;
    return new Response(JSON.stringify({ success: true, results }), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 200});
  } catch (error) {;
    console.error("Error in send-interview-reminder function:", error),;
    return new Response(JSON.stringify({ error: error.message }), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 500});
<<<<<<< HEAD

    
    return new Response(JSON && JSON.stringify({ success: true, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    console && console.error("Error in send-interview-reminder function:", error);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      status: 500})
  }
});

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  }
});
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
