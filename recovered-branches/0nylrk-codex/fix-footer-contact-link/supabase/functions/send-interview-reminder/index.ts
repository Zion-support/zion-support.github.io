
<<<<<<< HEAD
<<<<<<< HEAD
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
    return new Response(null, { headers: corsHeaders })
=======
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2&quot;;
import { Resend } from &quot;npm:resend@2.0.0&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

const resend = new Resend(Deno.env.get(&quot;RESEND_API_KEY&quot;));
const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;) || "&quot;;
const supabaseServiceKey = Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) || "&quot;;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  try {
    // Use service role key for admin privileges
    const supabase = createClient(supabaseUrl, supabaseServiceKey),
    
    // Get upcoming interviews in the next hour
    const now = new Date(),
    const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60000),
    
    const { data: interviews, error } = await supabase
      .from('interviews')
      .select(`
        *,
        clients:client_id(*),
        talents:talent_id(*)
      `)
      .eq('statusconfirmed')
      .gte('scheduled_date', now.toISOString())
      .lt('scheduled_date', thirtyMinutesFromNow.toISOString())
      .is('reminder_sent', null),
    
    if (error) throw error,
    
<<<<<<< HEAD
    // // // console.log(`Found ${interviews?.length || 0} interviews to send reminders for`),
=======
    // console.log(`Found ${interviews?.length || 0} interviews to send reminders for`);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    const results = [],
    
    if (interviews && interviews.length > 0) {
      for (const interview of interviews) {
        // Send email to client
<<<<<<< HEAD
        const clientEmail = interview.clients?.email,
        const talentName = interview.talents?.display_name || interview.talents?.full_name || "Talent",
        const interviewDate = new Date(interview.scheduled_date),
=======
        const clientEmail = interview.clients?.email;
        const talentName = interview.talents?.display_name || interview.talents?.full_name || &quot;Talent&quot;;
        const interviewDate = new Date(interview.scheduled_date);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
        if (clientEmail) {
          try {
            await resend.emails.send({
              from: &quot;Zion Marketplace <onboarding@resend.dev>&quot;,
              to: [clientEmail],
              subject: `Your interview with ${talentName} is starting soon!`,
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${talentName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview.duration_minutes} minutes</p>
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href=&quot;${interview.meeting_link}&quot;>${interview.meeting_link}</Link></p>` : ''}
                <p>Please be ready on time!</p>
              `}),
            
            results.push(`Reminder sent to client: ${clientEmail}`)
          } catch (emailError) {
            console.error(`Error sending reminder to client ${clientEmail}:`, emailError)
          }
        }
        
        // Send email to talent
<<<<<<< HEAD
        const talentEmail = interview.talents?.email,
        const clientName = interview.clients?.display_name || "Client",
=======
        const talentEmail = interview.talents?.email;
        const clientName = interview.clients?.display_name || &quot;Client&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
        if (talentEmail) {
          try {
            await resend.emails.send({
              from: &quot;Zion Marketplace <onboarding@resend.dev>&quot;,
              to: [talentEmail],
              subject: `Your interview with ${clientName} is starting soon!`,
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${clientName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${interview.duration_minutes} minutes</p>
                ${interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href=&quot;${interview.meeting_link}&quot;>${interview.meeting_link}</Link></p>` : ''}
                <p>Please be ready on time!</p>
              `}),
            
            results.push(`Reminder sent to talent: ${talentEmail}`)
          } catch (emailError) {
            console.error(`Error sending reminder to talent ${talentEmail}:`, emailError)
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          }
        }
;
        // Mark the interview as reminder sent;
        await supabase;
          .from('interviews');
          .update({ reminder_sent: new Date().toISOString() });
          .eq('id', interview.id);
      }
    }
<<<<<<< HEAD
    
    return new Response(JSON.stringify({ success: true, results }), {
<<<<<<< HEAD
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error("Error in send-interview-reminder function:", error),
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
=======
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 200});
  } catch (error) {
    console.error(&quot;Error in send-interview-reminder function:&quot;, error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 500});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
    return new Response(JSON.stringify({ success: true, results }), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 200});
  } catch (error) {;
    console.error("Error in send-interview-reminder function:", error),;
    return new Response(JSON.stringify({ error: error.message }), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" },;
      status: 500});
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
});