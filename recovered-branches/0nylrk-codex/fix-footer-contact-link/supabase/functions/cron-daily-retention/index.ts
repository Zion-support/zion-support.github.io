
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.45.0&quot;;

// Initialize Supabase client
const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;;
const supabaseServiceKey = Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  try {
    // Authenticate the request - should be called by a cron job or authorized system only
    if (req.method === &quot;POST&quot;) {
      const body = await req.json();
      const cronSecret = body.secret;
      
      if (cronSecret !== Deno.env.get(&quot;CRON_SECRET&quot;)) {
        return new Response(JSON.stringify({ error: &quot;Unauthorized&quot; }), {
          status: 401,
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot; }});
      }
    }
    
    // Call the process-retention-emails function
    const response = await fetch(`${supabaseUrl}/functions/v1/process-retention-emails`, {
      method: &quot;POST&quot;,
      headers: {
        &quot;Content-Type&quot;: &quot;application/json&quot;,
        &quot;Authorization&quot;: `Bearer ${supabaseServiceKey}`}});

    const result = await response.json();

    return new Response(JSON.stringify({
      success: true,
      message: &quot;Daily retention process executed&quot;,
      result}), {
      status: 200,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; }});
  } catch (error) {
    console.error(&quot;Error in cron-daily-retention:&quot;, error);

    return new Response(JSON.stringify({
      success: false,
      error: error.message}), {
      status: 500,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; }});
  }
});
