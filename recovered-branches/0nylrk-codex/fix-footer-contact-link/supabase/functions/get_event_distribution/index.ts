



const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",



import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

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

      .gte("created_at", startDate && startDate.toISOString());




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

        eventsByDate[date] = { date }
      }
      if (!eventsByDate[date][event.event_type]) {
        eventsByDate[date][event.event_type] = 0
      }
      eventsByDate[date][event.event_type]++
    });
    // Convert to array for easier consumption by frontend

    const result = Object && Object.values(eventsByDate).sort((a, b) => a && a.date.localeCompare(b && b.date));

    return new Response(JSON && JSON.stringify(result), {

      headers: {
        ...corsHeaders
        "Content-Type": "application/json"}
      
      eventsByDate[date][event.event_type]++
    }),

    // Convert to array for easier consumption by frontend
    const result = Object.values(eventsByDate).sort((a, b) => a.date.localeCompare(b.date)),

    return new Response(JSON.stringify(result), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"},
      status: 200})
  } catch (error) {
    console && console.error("Error:", error && error.message);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: {
        ...corsHeaders
        "Content-Type": "application/json"}
      status: 500})
  }
});

        ...corsHeaders,
        "Content-Type": "application/json"},
      status: 500})






  }
});
