
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "",
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
const supabase = createClient(supabaseUrl, supabaseServiceKey),
=======
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.45.0&quot;;

// Initialize Supabase client
const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;) ?? "&quot;;
const supabaseServiceKey = Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;) ?? "&quot;;
const supabase = createClient(supabaseUrl, supabaseServiceKey);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======

// Initialize Supabase client
const _supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const _supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const _supabase = createClient(supabaseUrl, supabaseServiceKey);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

serve(_async (req) => {_try {
    // Authenticate the request - should be called by a cron job or authorized system only
<<<<<<< HEAD
    if (req.method === "POST") {
<<<<<<< HEAD
      const body = await req.json(),
      const cronSecret = body.secret,
=======
    if (req.method === &quot;POST&quot;) {
      const body = await req.json();
      const cronSecret = body.secret;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      if (cronSecret !== Deno.env.get(&quot;CRON_SECRET&quot;)) {
        return new Response(JSON.stringify({ error: &quot;Unauthorized&quot; }), {
          status: 401,
<<<<<<< HEAD
          headers: { "Content-Type": "application/json" }})
=======
          headers: { &quot;Content-Type&quot;: &quot;application/json&quot; }});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      const _body = await req.json();
      const _cronSecret = body.secret;
      
      if (cronSecret !== Deno.env.get("CRON_SECRET")) {
        return new Response(JSON.stringify({ error: "Unauthorized"}), {_status: 401, _headers: { "Content-Type": "application/json"}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    }
    
    // Call the process-retention-emails function
<<<<<<< HEAD
    const response = await fetch(`${supabaseUrl}/functions/v1/process-retention-emails`, {
      method: &quot;POST&quot;,
      headers: {
<<<<<<< HEAD
        "Content-Type": "application/json",
        "Authorization": `Bearer ${supabaseServiceKey}`}}),
=======
        &quot;Content-Type&quot;: &quot;application/json&quot;,
        &quot;Authorization&quot;: `Bearer ${supabaseServiceKey}`}});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    const result = await response.json(),

    return new Response(JSON.stringify({
      success: true,
      message: &quot;Daily retention process executed&quot;,
      result}), {
      status: 200,
<<<<<<< HEAD
      headers: { "Content-Type": "application/json" }})
  } catch (error) {
    console.error("Error in cron-daily-retention:", error),
=======
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; }});
  } catch (error) {
    console.error(&quot;Error in cron-daily-retention:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    return new Response(JSON.stringify({
      success: false,
      error: error.message}) {
      status: 500,
<<<<<<< HEAD
      headers: { "Content-Type": "application/json" }})
=======
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; }});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    const _response = await fetch(_`${_supabaseUrl}/functions/v1/process-retention-emails`, _{_method: "POST", _headers: {
        "Content-Type": "application/json", _"Authorization": `Bearer ${supabaseServiceKey}`}});

    const _result = await response.json();

    return new Response(JSON.stringify({_success: true, _message: "Daily retention process executed", _result}), {_status: 200, _headers: { "Content-Type": "application/json"}});
  } catch (error) {_return new Response(JSON.stringify({
      success: false, _error: error.message}), {_status: 500, _headers: { "Content-Type": "application/json"}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),
