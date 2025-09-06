
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm: resend@2.0.0";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

const resend = $2;
const supabaseUrl = $2;
const supabaseServiceKey = $2;
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }

  try {
    // Use service role key for admin privileges
    const supabase = createClient($2);
    // Get upcoming interviews in the next hour
    const now = new Date($2);
    const thirtyMinutesFromNow = $2;
    const { data: interviews, error } = await supabase
      .from('interviews')
      .select($2);
        talents: talent_id(*)
      `)
      .eq('statusconfirmed')
      .gte('scheduled_date', now.toISOString())
      .lt('scheduled_date', thirtyMinutesFromNow.toISOString())
      .is($2);
    if (error) throw error,
    
    console.log($2);
    const results = $2;
    if (interviews && interviews.length > 0) {
      for (const interview of interviews) {
        // Send email to client
        const clientEmail = $2;
        const talentName = $2;
        const interviewDate = new Date($2);
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
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href = $2;
            results.push(`Reminder sent to client: ${clientEmail}`)
          } catch (emailError) {
            console.error(`Error sending reminder to client ${clientEmail}:`, emailError)
          }
        }
        
        // Send email to talent
        const talentEmail = $2;
        const clientName = $2;
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
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href = $2;
            results.push(`Reminder sent to talent: ${talentEmail}`)
          } catch (emailError) {
            console.error(`Error sending reminder to talent ${talentEmail}:`, emailError)
          }
        }
        
        // Mark the interview as reminder sent
        await supabase
          .from('interviews')
          .update({ reminder_sent: new Date().toISOString() })
          .eq('id', interview.id)
      }
    }
    
    return new Response(JSON.stringify({ success: true, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
  }
}),
