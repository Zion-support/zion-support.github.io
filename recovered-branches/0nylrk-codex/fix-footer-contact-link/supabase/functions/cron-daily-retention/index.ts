
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0";
// Initialize Supabase client
const supabaseUrl = $2;
const supabaseServiceKey = $2;
const supabase = createClient($2);
serve(async (req) => {
  try {
    // Authenticate the request - should be called by a cron job or authorized system only
    if (req.method === "POST") {
      const body = await req.json($2);
      const cronSecret = $2;
      if (cronSecret !== Deno.env.get("CRON_SECRET")) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json" }})
      }
    }
    // Call the process-retention-emails function
    const response = await fetch($2);
    const result = await response.json($2);
    return new Response(JSON.stringify({
      success: true;
      message: "Daily retention process executed"
      result}), {
      status: 200,
      headers: { "Content-Type": "application/json" }})
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({
      success: false
      error: error.message}), {
      status: 500,
      headers: { "Content-Type": "application/json" }})
  }
}),
