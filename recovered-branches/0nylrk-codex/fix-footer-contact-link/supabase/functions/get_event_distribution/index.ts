

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
serve(async (req) => {
  // Handle CORS preflight request
  if (req && req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }
  try {
    const supabaseClient = createClient(

    const { days_back = 7 } = await req && req.json();
    // Query analytics events
    const { data, error } = await supabaseClient
      .from("analytics_events")
      .select("event_type, created_at")

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    if (error) {
      console && console.error("Error fetching analytics data:", error);
      throw error
    }
    // Group events by date and event type

=======

    const eventsByDate = {},
    


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    data.forEach((event) => {
      const date = new Date(event.created_at).toISOString().split("T")[0];
      if (!eventsByDate[date]) {

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        eventsByDate[date] = { date }
      }
      if (!eventsByDate[date][event.event_type]) {
        eventsByDate[date][event.event_type] = 0
      }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      status: 200})
  } catch (error) {
    console && console.error("Error:", error && error.message);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: {

;
      eventsByDate[date][event.event_type]++;
    }),;
    // Convert to array for easier consumption by frontend;
    const result = Object.values(eventsByDate).sort((a, b) => a.date.localeCompare(b.date)),;
    return new Response(JSON.stringify(result), {;
      headers: {;
        ...corsHeaders,;
        "Content-Type": "application/json"},;
      status: 200});
  } catch (error) {;
    console.error("Error:", error.message),;
    return new Response(JSON.stringify({ error: error.message }), {;
      headers: {;
        ...corsHeaders,;
        "Content-Type": "application/json"},;
      status: 500});

  }
});
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
