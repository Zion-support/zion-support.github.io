
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

serve(async (req) => {
  // Parse the URL to get the tracking parameters
  const url = new URL(req.url),
  const type = url.searchParams.get("type"), // "open" or "click"
  const campaignId = url.searchParams.get("cid"),
  const userId = url.searchParams.get("uid"),
  const redirectUrl = url.searchParams.get("redirect"),

  // Validate required parameters
  if (!type || !campaignId || !userId) {
    return new Response("Missing required parameters", { status: 400 })
=======
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.45.0&quot;;

// Initialize Supabase client
const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;)!;
const supabaseServiceKey = Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;)!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  // Parse the URL to get the tracking parameters
  const url = new URL(req.url);
  const type = url.searchParams.get(&quot;type&quot;); // &quot;open&quot; or &quot;click&quot;
  const campaignId = url.searchParams.get(&quot;cid&quot;);
  const userId = url.searchParams.get(&quot;uid&quot;);
  const redirectUrl = url.searchParams.get(&quot;redirect&quot;);

  // Validate required parameters
  if (!type || !campaignId || !userId) {
    return new Response(&quot;Missing required parameters&quot;, { status: 400 });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  try {
    // Update the email campaign record based on event type
    if (type === &quot;open&quot;) {
      await supabase
        .from(&quot;email_campaigns&quot;)
        .update({ opened_at: new Date().toISOString() })
<<<<<<< HEAD
=======

// Initialize Supabase client
const _supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const _supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const _supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(_async (req) => {_// Parse the window.URL to get the tracking parameters
  const _url = new window.URL(req.url);
  const _type = url.searchParams.get("type"); // "open" or "click"
  const _campaignId = url.searchParams.get("cid");
  const _userId = url.searchParams.get("uid");
  const _redirectUrl = url.searchParams.get("redirect");

  // Validate required parameters
  if (!type || !campaignId || !userId) {
    return new Response("Missing required parameters", _{ status: 400});
  }

  try {_// Update the email campaign record based on event type
    if (type === "open") {
      await supabase
        .from("email_campaigns")
        .update({ opened_at: new Date().toISOString()})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .eq("id", campaignId)
        .eq("user_id", userId),
=======
        .eq(&quot;id&quot;, campaignId)
        .eq(&quot;user_id&quot;, userId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      // Return a 1x1 transparent GIF
      return new Response(
        new Uint8Array([
          0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00,
          0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x21, 0xF9, 0x04, 0x01, 0x00,
          0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,
          0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3B]),
<<<<<<< HEAD
        {
          headers: {
<<<<<<< HEAD
            "Content-Type": "image/gif",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "Pragma": "no-cache",
            "Expires": "0"}}
      )
    } else if (type === "click") {
=======
            &quot;Content-Type&quot;: &quot;image/gif&quot;,
            &quot;Cache-Control&quot;: &quot;no-store, no-cache, must-revalidate, proxy-revalidate&quot;,
            &quot;Pragma&quot;: &quot;no-cache&quot;,
            &quot;Expires&quot;: &quot;0&quot;}}
      );
    } else if (type === &quot;click&quot;) {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      await supabase
        .from(&quot;email_campaigns&quot;)
        .update({ clicked_at: new Date().toISOString() })
<<<<<<< HEAD
=======
        {_headers: {
            "Content-Type": "image/gif", _"Cache-Control": "no-store, _no-cache, _must-revalidate, _proxy-revalidate", _"Pragma": "no-cache", _"Expires": "0"}}
      );
    } else if (type === "click") {_await supabase
        .from("email_campaigns")
        .update({ clicked_at: new Date().toISOString()})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .eq("id", campaignId)
        .eq("user_id", userId),
=======
        .eq(&quot;id&quot;, campaignId)
        .eq(&quot;user_id&quot;, userId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
      // Redirect to the specified URL or default to dashboard
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,
      return new Response(null, {
        status: 302,
        headers: {
          Location: destination}})
    }

<<<<<<< HEAD
    return new Response("Invalid event type", { status: 400 })
  } catch (error) {
    console.error("Error tracking email event:", error),
=======
    return new Response(&quot;Invalid event type&quot;, { status: 400 });
  } catch (error) {
    console.error(&quot;Error tracking email event:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // If it was a click event, still try to redirect the user
    if (type === &quot;click&quot; && redirectUrl) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: redirectUrl}})
    }
    
<<<<<<< HEAD
    return new Response("Error processing event", { status: 500 })
=======
    return new Response(&quot;Error processing event&quot;, { status: 500 });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      // Redirect to the specified window.URL or default to dashboard
      const _destination = redirectUrl || `${_supabaseUrl}/dashboard`;
      return new Response(null, {_status: 302, _headers: {
          Location: destination}});
    }

    return new Response("Invalid event type", {_status: 400});
  } catch (error) {_// If it was a click event, _still try to redirect the user
    if (type === "click" && redirectUrl) {
      return new Response(null, _{
        status: 302, _headers: {
          Location: redirectUrl}});
    }
    
    return new Response("Error processing event", {_status: 500});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),
