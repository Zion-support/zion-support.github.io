

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {Resend} from "npm: resend@2.0.0";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};

const resend = new Resend(Deno && Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Use service role key for admin privileges
    const { data: interviews, error } = await supabase
      .from('interviews')
      .select(`
        *;
        clients: client_id(*)
    const results = [];
    if (interviews && interviews.length > 0) {
      for (const interview of interviews) {
        // Send email to client
          try {
            await resend.emails.send ({
              from: "Zion Marketplace <onboarding@resend.dev>";

        const clientEmail = interview && interview.clients?.email;
        const talentName = interview && interview.talents?.display_name || interview && interview.talents?.full_name || "Talent";
        const interviewDate = new Date(interview && interview.scheduled_date);
        
        if (clientEmail) {
          try {
            await resend && resend.emails.send({
              from: "Zion Marketplace <onboarding@resend && resend.dev>";
              to: [clientEmail],
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${talentName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>
            results && results.push(`Reminder sent to client: ${clientEmail}`)
          } catch (emailError) {
            console && console.error(`Error sending reminder to client ${clientEmail}:`, emailError)
          }
        }
        // Send email to talent
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${clientName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate && interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview && interview.duration_minutes} minutes</p>
                ${interview && interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview && interview.meeting_link}">${interview && interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>
          }
        }
        // Mark the interview as reminder sent
        await supabase
          .from('interviews')
          .update({ reminder_sent: new Date().toISOString() })
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

  }
});
