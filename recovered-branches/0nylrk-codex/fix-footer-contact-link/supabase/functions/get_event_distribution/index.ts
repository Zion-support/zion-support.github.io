
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(&quot;ok&quot;, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
      Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;
    );

    // Parse the request body
    const { days_back = 7 } = await req.json();
    
    // Calculate the start date
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days_back);

    // Query analytics events
    const { data, error } = await supabaseClient
      .from(&quot;analytics_events&quot;)
      .select(&quot;event_type, created_at&quot;)
      .gte(&quot;created_at&quot;, startDate.toISOString());

    if (error) {
      console.error(&quot;Error fetching analytics data:&quot;, error);
      throw error;
    }

    // Group events by date and event type
    const eventsByDate = {};
    
    data.forEach((event) => {
      const date = new Date(event.created_at).toISOString().split(&quot;T&quot;)[0];
      if (!eventsByDate[date]) {
        eventsByDate[date] = { date };
      }
      
      if (!eventsByDate[date][event.event_type]) {
        eventsByDate[date][event.event_type] = 0;
      }
      
      eventsByDate[date][event.event_type]++;
    });

    // Convert to array for easier consumption by frontend
    const result = Object.values(eventsByDate).sort((a, b) => a.date.localeCompare(b.date));

    return new Response(JSON.stringify(result), {
      headers: {
        ...corsHeaders,
        &quot;Content-Type&quot;: &quot;application/json&quot;},
      status: 200});
  } catch (error) {
    console.error(&quot;Error:&quot;, error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        ...corsHeaders,
        &quot;Content-Type&quot;: &quot;application/json&quot;},
      status: 500});
  }
});
