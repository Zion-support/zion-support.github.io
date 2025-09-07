
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0";
// Initialize Supabase client
const supabaseUrl = $2;
const supabaseServiceKey = $2;
const supabase = createClient($2);
serve(async (req) => {
  // Parse the URL to get the tracking parameters
  const url = new URL($2);
  const type = url.searchParams.get("type"), // "open" or "click"
  const campaignId = url.searchParams.get($2);
  const userId = url.searchParams.get($2);
  const redirectUrl = url.searchParams.get($2);
  // Validate required parameters
  if (!type || !campaignId || !userId) {
    return new Response("Missing required parameters", { status: 400})
  }
  try {
    // Update the email campaign record based on event type
    if (type === "open") {
      await supabase
        .from("email_campaigns")
        .update({ opened_at: new Date().toISOString() })
        .eq("id", campaignId)
        .eq($2);
      // Return a 1x1 transparent GIF
      return new Response($2);
        {
          headers: {
            "Content-Type": "image/gif"
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate";
            "Pragma": "no-cache";
            "Expires": "0"}}
      )
    } else if (type === "click") {
      await supabase
        .from("email_campaigns")
        .update({ clicked_at: new Date().toISOString() })
        .eq("id", campaignId)
        .eq($2);
      // Redirect to the specified URL or default to dashboard
      const destination = $2;
      return new Response(null, {
        status: 302
        headers: {
          Location: destination}})
    }

    return new Response("Invalid event type", { status: 400})
  } catch (error) {
    console.error($2);
    // If it was a click event, still try to redirect the user
    if (type === "click" && redirectUrl) {
      return new Response(null, {
        status: 302
        headers: {
          Location: redirectUrl}})
    }
    
    return new Response("Error processing event", { status: 500})
  }
}),
