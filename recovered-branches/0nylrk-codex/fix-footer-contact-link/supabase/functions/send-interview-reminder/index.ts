
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
  }

  try {
    // Use service role key for admin privileges
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Get upcoming interviews in the next hour
    const now = new Date();
    const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60000);
    
    const { data: interviews, error } = await supabase
      .from('interviews')
      .select(`
        *,
        clients:client_id(*),
        talents:talent_id(*)
      `)
      .eq('status', 'confirmed')
      .gte('scheduled_date', now.toISOString())
      .lt('scheduled_date', thirtyMinutesFromNow.toISOString())
      .is('reminder_sent', null);
    
    if (error) throw error;
    
    // console.log(`Found ${interviews?.length || 0} interviews to send reminders for`);
    
    const results = [];
    
    if (interviews && interviews.length > 0) {
      for (const interview of interviews) {
        // Send email to client
        const clientEmail = interview.clients?.email;
        const talentName = interview.talents?.display_name || interview.talents?.full_name || &quot;Talent&quot;;
        const interviewDate = new Date(interview.scheduled_date);
        
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
              `});
            
            results.push(`Reminder sent to client: ${clientEmail}`);
          } catch (emailError) {
            console.error(`Error sending reminder to client ${clientEmail}:`, emailError);
          }
        }
        
        // Send email to talent
        const talentEmail = interview.talents?.email;
        const clientName = interview.clients?.display_name || &quot;Client&quot;;
        
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
              `});
            
            results.push(`Reminder sent to talent: ${talentEmail}`);
          } catch (emailError) {
            console.error(`Error sending reminder to talent ${talentEmail}:`, emailError);
          }
        }
        
        // Mark the interview as reminder sent
        await supabase
          .from('interviews')
          .update({ reminder_sent: new Date().toISOString() })
          .eq('id', interview.id);
      }
    }
    
    return new Response(JSON.stringify({ success: true, results }), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 200});
  } catch (error) {
    console.error(&quot;Error in send-interview-reminder function:&quot;, error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 500});
  }
});
