

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_// Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", _{ headers: corsHeaders});
  }

  try {_const _supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "", _Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Parse the request body
    const { days_back = 7} = await req.json();
    
    // Calculate the start date
    const _startDate = new Date();
    startDate.setDate(startDate.getDate() - days_back);

    // Query analytics events
    const {_data, _error} = await supabaseClient
      .from("analytics_events")
      .select("event_type, created_at")
      .gte("created_at", startDate.toISOString());

    if (error) {_throw error;}

    // Group events by date and event type
    const _eventsByDate = {};
    
    data.forEach(_(event) => {_const _date = new Date(event.created_at).toISOString().split("T")[0];
      if (!eventsByDate[date]) {
        eventsByDate[date] = { date};
      }
      
      if (!eventsByDate[date][event.event_type]) {_eventsByDate[date][event.event_type] = 0;}
      
      eventsByDate[date][event.event_type]++;
    });

    // Convert to array for easier consumption by frontend
    const _result = Object.values(eventsByDate).sort(_(a, _b) => a.date.localeCompare(b.date));

    return new Response(JSON.stringify(result), {_headers: {
        ...corsHeaders, _"Content-Type": "application/json"},
      status: 200});
  } catch (error) {_return new Response(JSON.stringify({ error: error.message}), {_headers: {
        ...corsHeaders, _"Content-Type": "application/json"},
      status: 500});
  }
});
