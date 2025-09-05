
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
=======
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(&quot;ok&quot;, { headers: corsHeaders });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  try {
    const supabaseClient = createClient(
<<<<<<< HEAD
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    ),
=======
      Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;,
      Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    // Parse the request body
    const { days_back = 7 } = await req.json(),
    
    // Calculate the start date
    const startDate = new Date(),
    startDate.setDate(startDate.getDate() - days_back),

    // Query analytics events
    const { data, error } = await supabaseClient
<<<<<<< HEAD
      .from("analytics_events")
      .select("event_type, created_at")
      .gte("created_at", startDate.toISOString()),

    if (error) {
      console.error("Error fetching analytics data:", error),
      throw error
=======
      .from(&quot;analytics_events&quot;)
      .select(&quot;event_type, created_at&quot;)
      .gte(&quot;created_at&quot;, startDate.toISOString());

    if (error) {
      console.error(&quot;Error fetching analytics data:&quot;, error);
      throw error;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    // Group events by date and event type
    const eventsByDate = {},
    
    data.forEach((event) => {
<<<<<<< HEAD
      const date = new Date(event.created_at).toISOString().split("T")[0],
=======
      const date = new Date(event.created_at).toISOString().split(&quot;T&quot;)[0];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      if (!eventsByDate[date]) {
        eventsByDate[date] = { date }
      }
      
      if (!eventsByDate[date][event.event_type]) {
        eventsByDate[date][event.event_type] = 0
      }
      
      eventsByDate[date][event.event_type]++
    }),

    // Convert to array for easier consumption by frontend
    const result = Object.values(eventsByDate).sort((a, b) => a.date.localeCompare(b.date)),

    return new Response(JSON.stringify(result), {
      headers: {
        ...corsHeaders,
<<<<<<< HEAD
        "Content-Type": "application/json"},
      status: 200})
  } catch (error) {
    console.error("Error:", error.message),
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"},
      status: 500})
=======
        &quot;Content-Type&quot;: &quot;application/json&quot;},
      status: 200});
  } catch (error) {
    console.error(&quot;Error:&quot;, error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        ...corsHeaders,
        &quot;Content-Type&quot;: &quot;application/json&quot;},
      status: 500});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}),
