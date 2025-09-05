
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
  }

  try {
    // Update the email campaign record based on event type
    if (type === &quot;open&quot;) {
      await supabase
        .from(&quot;email_campaigns&quot;)
        .update({ opened_at: new Date().toISOString() })
        .eq(&quot;id&quot;, campaignId)
        .eq(&quot;user_id&quot;, userId);

      // Return a 1x1 transparent GIF
      return new Response(
        new Uint8Array([
          0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00,
          0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x21, 0xF9, 0x04, 0x01, 0x00,
          0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,
          0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3B]),
        {
          headers: {
            &quot;Content-Type&quot;: &quot;image/gif&quot;,
            &quot;Cache-Control&quot;: &quot;no-store, no-cache, must-revalidate, proxy-revalidate&quot;,
            &quot;Pragma&quot;: &quot;no-cache&quot;,
            &quot;Expires&quot;: &quot;0&quot;}}
      );
    } else if (type === &quot;click&quot;) {
      await supabase
        .from(&quot;email_campaigns&quot;)
        .update({ clicked_at: new Date().toISOString() })
        .eq(&quot;id&quot;, campaignId)
        .eq(&quot;user_id&quot;, userId);

      // Redirect to the specified URL or default to dashboard
      const destination = redirectUrl || `${supabaseUrl}/dashboard`;
      return new Response(null, {
        status: 302,
        headers: {
          Location: destination}});
    }

    return new Response(&quot;Invalid event type&quot;, { status: 400 });
  } catch (error) {
    console.error(&quot;Error tracking email event:&quot;, error);
    
    // If it was a click event, still try to redirect the user
    if (type === &quot;click&quot; && redirectUrl) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: redirectUrl}});
    }
    
    return new Response(&quot;Error processing event&quot;, { status: 500 });
  }
});
