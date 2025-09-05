

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

const _resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const _supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const _supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_// Use service role key for admin privileges
    const _supabase = createClient(supabaseUrl, _supabaseServiceKey);
    
    // Get upcoming interviews in the next hour
    const _now = new Date();
    const _thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60000);
    
    const { data: interviews, _error} = await supabase
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
    
    
    
    const _results = [];
    
    if (interviews && interviews.length > 0) {_for (const interview of interviews) {
        // Send email to client
        const _clientEmail = interview.clients?.email;
        const _talentName = interview.talents?.display_name || interview.talents?.full_name || "Talent";
        const _interviewDate = new Date(interview.scheduled_date);
        
        if (clientEmail) {
          try {
            await resend.emails.send({
              from: "Zion Marketplace <onboarding@resend.dev>", _to: [clientEmail], _subject: `Your interview with ${talentName} is starting soon!`,
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${_talentName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${_interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${_interview.duration_minutes} minutes</p>
                ${_interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview.meeting_link}">${_interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>
              `});
            
            results.push(`Reminder sent to client: ${_clientEmail}`);
          } catch (emailError) {}
        }
        
        // Send email to talent
        const _talentEmail = interview.talents?.email;
        const _clientName = interview.clients?.display_name || "Client";
        
        if (talentEmail) {_try {
            await resend.emails.send({
              from: "Zion Marketplace <onboarding@resend.dev>", _to: [talentEmail], _subject: `Your interview with ${clientName} is starting soon!`,
              html: `
                <h1>Interview Reminder</h1>
                <p>Your scheduled interview with ${_clientName} is starting in 30 minutes.</p>
                <p><strong>Time:</strong> ${_interviewDate.toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> ${_interview.duration_minutes} minutes</p>
                ${_interview.meeting_link ? `<p><strong>Meeting Link:</strong> <a href="${interview.meeting_link}">${_interview.meeting_link}</a></p>` : ''}
                <p>Please be ready on time!</p>
              `});
            
            results.push(`Reminder sent to talent: ${_talentEmail}`);
          } catch (emailError) {}
        }
        
        // Mark the interview as reminder sent
        await supabase
          .from('interviews')
          .update({_reminder_sent: new Date().toISOString()})
          .eq('id', interview.id);
      }
    }
    
    return new Response(JSON.stringify({_success: true, _results}), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
      status: 200});
  } catch (error) {_return new Response(JSON.stringify({ error: error.message}), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
      status: 500});
  }
});
