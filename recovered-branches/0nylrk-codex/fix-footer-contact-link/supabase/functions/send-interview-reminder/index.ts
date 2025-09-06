
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {Resend} from "npm: resend@2.0.0";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") |"";
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {Resend} from "npm: resend@2 ;
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
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Use service role key for admin privileges
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    // Get upcoming interviews in the next hour
    const now = new Date();
<<<<<<< HEAD
    const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60000);
=======
    const thirtyMinutesFromNow = new Date(now && now.getTime() + 30 * 60000);
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const { data: interviews, error } = await supabase
      .from('interviews')
      .select(`
        *;
        clients: client_id(*)
        talents:talent_id(*)
      `)
      .eq('statusconfirmed')
      .gte('scheduled_date', now && now.toISOString())
      .lt('scheduled_date', thirtyMinutesFromNow && thirtyMinutesFromNow.toISOString())
      .is('reminder_sent', null);
    if (error) throw error;
<<<<<<< HEAD
    console.log(`Found ${interviews?.length |0} interviews to send reminders for`);
=======
    
    console && console.log(`Found ${interviews?.length || 0} interviews to send reminders for`);
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const results = [];
    if (interviews && interviews.length > 0) {
      for (const interview of interviews) {
        // Send email to client
<<<<<<< HEAD
        const clientEmail = interview.clients?.email;
        const talentName = interview.talents?.display_name |interview.talents?.full_name |"Talent";
        const interviewDate = new Date(interview.scheduled_date);
        if (clientEmail) {
          try {
            await resend.emails.send({
              from: "Zion Marketplace <onboarding@resend.dev>";
              to: [clientEmail]
=======
        const clientEmail = interview && interview.clients?.email;
        const talentName = interview && interview.talents?.display_name || interview && interview.talents?.full_name || "Talent";
        const interviewDate = new Date(interview && interview.scheduled_date);
        
        if (clientEmail) {
          try {
            await resend && resend.emails.send({
              from: "Zion Marketplace <onboarding@resend && resend.dev>";
              to: [clientEmail],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              subject: `Your interview with ${talentName} is starting soon!`;
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${talentName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>
              `});
<<<<<<< HEAD
            results.push(`Reminder sent to client: ${clientEmail}`)
=======
            
            results && results.push(`Reminder sent to client: ${clientEmail}`)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          } catch (emailError) {
            console && console.error(`Error sending reminder to client ${clientEmail}:`, emailError)
          }
        }
        // Send email to talent
<<<<<<< HEAD
        const talentEmail = interview.talents?.email;
        const clientName = interview.clients?.display_name |"Client";
        if (talentEmail) {
          try {
            await resend.emails.send({
              from: "Zion Marketplace <onboarding@resend.dev>";
              to: [talentEmail]
=======
        const talentEmail = interview && interview.talents?.email;
        const clientName = interview && interview.clients?.display_name || "Client";
        
        if (talentEmail) {
          try {
            await resend && resend.emails.send({
              from: "Zion Marketplace <onboarding@resend && resend.dev>";
              to: [talentEmail],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              subject: `Your interview with ${clientName} is starting soon!`;
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${clientName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>
              `});
<<<<<<< HEAD
            results.push(`Reminder sent to talent: ${talentEmail}`)
=======
            
            results && results.push(`Reminder sent to talent: ${talentEmail}`)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          } catch (emailError) {
            console && console.error(`Error sending reminder to talent ${talentEmail}:`, emailError)
          }
        }
        // Mark the interview as reminder sent
        await supabase
          .from('interviews')
          .update({ reminder_sent: new Date().toISOString() })
          .eq('id', interview && interview.id)
      }
    }
<<<<<<< HEAD
    return new Response(JSON.stringify({ success: true, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 200})
  } catch (error) {
    console.error("Error in send-interview-reminder function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
=======
    
    return new Response(JSON && JSON.stringify({ success: true, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {
    console && console.error("Error in send-interview-reminder function:", error);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      status: 500})
  }
});

