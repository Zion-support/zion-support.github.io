
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
<<<<<<< HEAD
=======
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
const supabase = createClient(supabaseUrl, supabaseServiceKey);
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),


// Initialize Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const supabase = createClient(supabaseUrl, supabaseServiceKey);
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
serve(async (req) => {
  // Parse the URL to get the tracking parameters

  const url = new URL(req && req.url);
  const type = url && url.searchParams.get("type"), // "open" or "click"
  const campaignId = url && url.searchParams.get("cid");
  const userId = url && url.searchParams.get("uid");
  const redirectUrl = url && url.searchParams.get("redirect");



          0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00;
          0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x21, 0xF9, 0x04, 0x01, 0x00;
          0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00;
          0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3B]);
        {
          headers: {
            "Content-Type": "image/gif"
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate";
            "Pragma": "no-cache";
            "Content-Type": "image/gif",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "Pragma": "no-cache",
            "Expires": "0"}}
      )
    } else if (type === "click") {
      await supabase
        .from("email_campaigns")
        .update({ clicked_at: new Date().toISOString() })
        .eq("id", campaignId)
        .eq("user_id", userId);
      // Redirect to the specified URL or default to dashboard
      const destination = redirectUrl |`${supabaseUrl}/dashboard`;
        .eq("user_id", userId),

      // Redirect to the specified URL or default to dashboard
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,
      return new Response(null, {
        status: 302
        headers: {
          Location: destination}})
    }
    return new Response("Invalid event type", { status: 400 })
  } catch (error) {
    console.error("Error tracking email event:", error);
    console.error("Error tracking email event:", error),
    
    // If it was a click event, still try to redirect the user
    if (type === "click" && redirectUrl) {
      return new Response(null, {
        status: 302
<<<<<<< HEAD
        headers: {
          Location: redirectUrl}})
    }

    return new Response("Error processing event", { status: 500 })


=======
=======
    return new Response ("Invalid event type", { status: 400 });
  } catch (error) {
    console.error ("Error tracking email event:", error);
;
    // If it was a click event, still try to redirect the user;
    // Check condition
if ( {) {
  $2
}
      return new Response (null, {
        status: 302,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        headers: {
          Location: redirect_url}});
    }

    return new Response ("Error processing event", { status: 500 });
=======


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
serve(async (req) => {;
  // Parse the URL to get the tracking parameters;
  const url = new URL(req.url),;
  const type = url.searchParams.get("type"), // "open" or "click";
  const campaignId = url.searchParams.get("cid"),;
  const userId = url.searchParams.get("uid"),;
  const redirectUrl = url.searchParams.get("redirect"),;
  // Validate required parameters;
  if (!type || !campaignId || !userId) {;
    return new Response("Missing required parameters", { status: 400 });
  }
;
  try {;
    // Update the email campaign record based on event type;
    if (type === "open") {;
      await supabase;
        .from("email_campaigns");
        .update({ opened_at: new Date().toISOString() });
        .eq("id", campaignId);
        .eq("user_id", userId),;
      // Return a 1x1 transparent GIF;
      return new Response(;
        new Uint8Array([;
          0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00,;
          0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x21, 0xF9, 0x04, 0x01, 0x00,;
          0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,;
          0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3B]),;
        {;
          headers: {;
            "Content-Type": "image/gif",;
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",;
            "Pragma": "no-cache",;
            "Expires": "0"}}
      );
    } else if (type === "click") {;
      await supabase;
        .from("email_campaigns");
        .update({ clicked_at: new Date().toISOString() });
        .eq("id", campaignId);
        .eq("user_id", userId),;
      // Redirect to the specified URL or default to dashboard;
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,;
      return new Response(null, {;
        status: 302,;
        headers: {;
          Location: destination}});
    }
;
    return new Response("Invalid event type", { status: 400 });
  } catch (error) {;
    console.error("Error tracking email event:", error),;
    // If it was a click event, still try to redirect the user;
    if (type === "click" && redirectUrl) {;
      return new Response(null, {;
        status: 302,;
        headers: {;
          Location: redirectUrl}});
    }
;
    return new Response("Error processing event", { status: 500 });


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  }
});
