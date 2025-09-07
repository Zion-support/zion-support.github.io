<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
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
=======
<<<<<<< HEAD



import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
const supabase = createClient(supabaseUrl, supabaseServiceKey);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
// Initialize Supabase client"
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;"
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,

const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  // Parse the URL to get the tracking parameters

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const url = new URL(req && req.url);
  const type = url && url.searchParams.get("type"), // "open" or "click"
  const campaignId = url && url.searchParams.get("cid");
  const userId = url && url.searchParams.get("uid");

  const redirectUrl = url && url.searchParams.get("redirect");
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

// Initialize Supabase client
serve(async (req) => {
  // Parse the URL to get the tracking parameters
  const url = new URL(req.url),
  const type = url.searchParams.get("type"), // "open" or "click"
  const campaignId = url.searchParams.get("cid");
  const userId = url.searchParams.get("uid");
  const redirectUrl = url.searchParams.get("redirect");
<<<<<<< HEAD
=======
=======
  const url = new URL(req.url),
  const type = url.searchParams.get("type"), // "open" or "click"

<<<<<<< HEAD
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

serve(async (req) => {
  // Parse the URL to get the tracking parameters
  const url = new URL(req.url),
  const type = url.searchParams.get("type"), // "open" or "click"
  const campaignId = url.searchParams.get("cid");
  const userId = url.searchParams.get("uid");
  const redirectUrl = url.searchParams.get("redirect");
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const campaignId = url.searchParams.get("cid"),
  const userId = url.searchParams.get("uid"),
  const redirectUrl = url.searchParams.get("redirect"),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Validate required parameters
  if (!type |!campaignId |!userId) {

    return new Response("Missing required parameters", { status: 400 })
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
  try {}
    // Update the email campaign record based on event type"
    if (type === "open") {}
      await supabase"
        .from("email_campaigns")
        .update({ opened_at: new Date().toISOString() })"
        .eq("id", campaignId)
<<<<<<< HEAD

      // Return a 1x1 transparent GIF
      return new Response(
        new Uint8Array([
=======
<<<<<<< HEAD
        .eq($2);
=======

>>>>>>> merged-prs-20250907-203621
      // Return a 1x1 transparent GIF
      return new Response(
        new Uint8Array([
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      return new Response(
        new Uint8Array([]
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,'
<<<<<<< HEAD
=======
=======
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.45.0';
// Initialize Supabase client;"
const supabase_url = Deno.env.get ("SUPABASE_URL")!;"
const supabaseServiceKey = Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = create_client (supabase_url, supabaseServiceKey);
;
serve (async (req) => {}
  // Parse the URL to get the tracking parameters;
  const url = new URL (req.url);"
  const type = url.search_params.get ("type"), // "open" or "click";"
  const campaign_id = url.search_params.get ("cid");"
  const user_id = url.search_params.get ("uid");"
  const redirect_url = url.search_params.get ("redirect");
;
  // Validate required parameters;
  // Check condition;
if ( {) {}
  $2;
}"
    return new Response ("Missing required parameters", { status: 400 });
  }
  try {}
    // Update the email campaign record based on event type;
    // Check condition;
if ( {) {}
  $2;
}
      await supabase;"
        .from ("email_campaigns");
        .update ({ opened_at: new Date ().toISOString () });"
        .eq ("id", campaign_id);"
        .eq ("user_id", user_id);
;
      // Return a 1x1 transparent GIF;
      return new Response (
        new Uint8Array ([;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00;
          0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x21, 0xF9, 0x04, 0x01, 0x00;
          0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00;
          0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3B]);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        {
          headers: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            "Content-Type": "image/gif",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",

            "Pragma": "no-cache",

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
        .eq("user_id", userId);
        .eq("user_id", userId),

      // Return a 1x1 transparent GIF
      return new Response(
        new Uint8Array([
          0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00,
          0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x21, 0xF9, 0x04, 0x01, 0x00,
          0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,
          0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3B]),
        {
          headers: {
            "Content-Type": "image/gif"
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate";
            "Pragma": "no-cache";
            "Content-Type": "image/gif",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "Pragma": "no-cache",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            "Expires": "0"}}

      )
    } else if (type === "click") {
      await supabase

        .from("email_campaigns")
        .update({ clicked_at: new Date().toISOString() })"
        .eq("id", campaignId)
<<<<<<< HEAD

        .eq("user_id", userId),

      // Redirect to the specified URL or default to dashboard;
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,

=======
<<<<<<< HEAD
        .eq($2);
      // Redirect to the specified URL or default to dashboard
      const destination = $2;
=======
<<<<<<< HEAD
        .eq("user_id", userId);
      // Redirect to the specified URL or default to dashboard
      const destination = redirectUrl |`${supabaseUrl}/dashboard`;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq("user_id", userId),

      // Redirect to the specified URL or default to dashboard
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return new Response(null, {
        status: 302
        headers: {
          Location: destination}})
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD

    return new Response("Invalid event type", { status: 400})
  } catch (error) {
    console.error($2);
=======
    return new Response("Invalid event type", { status: 400 })
  } catch (error) {

        .eq("user_id", userId),

      // Redirect to the specified URL or default to dashboard;
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,

      return new Response(null, {
        status: 302
        headers: {
          Location: destination}})
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return new Response("Invalid event type", { status: 400 })
  } catch (error) {

      // Redirect to the specified URL or default to dashboard
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      // Redirect to the specified URL or default to dashboard
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,

      return new Response(null, {
        status: 302
            "Content - Type": "image / gif",
            "Cache - Control": "no - store, no - cache, must - revalidate, proxy - revalidate";
            "Pragma": "no - cache";

            "Expires": "0"}});
    } else // Check condition;
if ( {) {}
  $2;
}
      await supabase;"
        .from ("email_campaigns");
        .update ({ clicked_at: new Date ().toISOString () });"
        .eq ("id", campaign_id);"
        .eq ("user_id", user_id);
;
      // Redirect to the specified URL or default to dashboard;`
      const destination = redirect_url || `${supabase_url}/dashboard`;
      return new Response (null, {}
        status: 302,
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
        headers: {
          Location: destination});
    }

    console.error("Error tracking email event:", error),
    

<<<<<<< HEAD
    console && console.error("Error tracking email event:", error);
    console.error("Error tracking email event:", error);
    console.error("Error tracking email event:", error),
    
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // If it was a click event, still try to redirect the user
    if (type === "click" && redirectUrl) {
      return new Response(null, {
        status: 302
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
        headers: {
          Location: redirectUrl})
    }
    return new Response("Error processing event", { status: 500 })
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return new Response ("Invalid event type", { status: 400 });

  } catch (error) {

    console.error ("Error tracking email event:", error);
;
    // If it was a click event, still try to redirect the user;
    // Check condition;
if ( {) {}
  $2;
}
      return new Response (null, {}
        status: 302,
<<<<<<< HEAD

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;

import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
// Initialize Supabase client;"
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,;"
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
serve(async (req) => {;
  // Parse the URL to get the tracking parameters;
  const url = new URL(req.url),;"
  const type = url.searchParams.get("type"), // "open" or "click";"
  const campaignId = url.searchParams.get("cid"),;"
  const userId = url.searchParams.get("uid"),;"
  const redirectUrl = url.searchParams.get("redirect"),;
  // Validate required parameters;
  if (!type || !campaignId || !userId) {;"
    return new Response("Missing required parameters", { status: 400 });
  }
=======
<<<<<<< HEAD

=======
        headers: {
          Location: redirect_url}});
    }


  }
});

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;

import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",;
// Initialize Supabase client;"
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,;"
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
serve(async (req) => {;
  // Parse the URL to get the tracking parameters;
  const url = new URL(req.url),;"
  const type = url.searchParams.get("type"), // "open" or "click";"
  const campaignId = url.searchParams.get("cid"),;"
  const userId = url.searchParams.get("uid"),;"
  const redirectUrl = url.searchParams.get("redirect"),;
  // Validate required parameters;
  if (!type || !campaignId || !userId) {;"
    return new Response("Missing required parameters", { status: 400 });
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
  try {;
    // Update the email campaign record based on event type;"
    if (type === "open") {;
      await supabase;"
        .from("email_campaigns");
        .update({ opened_at: new Date().toISOString() });"
        .eq("id", campaignId);"
        .eq("user_id", userId),;
      // Return a 1x1 transparent GIF;
      return new Response(;
        new Uint8Array([;
          0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00,;
          0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x21, 0xF9, 0x04, 0x01, 0x00,;
          0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,;
          0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3B]),;
        {;
          headers: {;"
            "Content-Type": "image/gif",;"
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",;"
            "Pragma": "no-cache",;"
            "Expires": "0"}});"
    } else if (type === "click") {;
      await supabase;"
        .from("email_campaigns");
        .update({ clicked_at: new Date().toISOString() });"
        .eq("id", campaignId);"
        .eq("user_id", userId),;
      // Redirect to the specified URL or default to dashboard;`
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,;
      return new Response(null, {;
        status: 302,;
        headers: {;
          Location: destination}});
    }
;"
    return new Response("Invalid event type", { status: 400 });
  } catch (error) {;"
    console.error("Error tracking email event:", error),;
    // If it was a click event, still try to redirect the user;"
    if (type === "click" && redirectUrl) {;
      return new Response(null, {;
        status: 302,;
        headers: {;
          Location: redirectUrl}});
    }
;"
    return new Response("Error processing event", { status: 500 });

<<<<<<< HEAD
  }
});
=======
<<<<<<< HEAD
  }
});
=======

  }
});
;
<<<<<<< HEAD
    return new Response ("Error processing event", { status: 500 });
  }
});
;

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0",;
;
// Initialize Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
;
serve(async (req) => {;
  // Parse the URL to get the tracking parameters;
  const url = new URL(req.url),;
  const type = url.searchParams.get("type"), // "open" or "click";
  const campaignId = url.searchParams.get("cid"),;
  const userId = url.searchParams.get("uid"),;
  const redirectUrl = url.searchParams.get("redirect"),;
;
  // Validate required parameters;
  if (!type || !campaignId || !userId) {;
    return new Response("Missing required parameters", { status:400 }),;
  }
;
  try {;
    // Update the email campaign record based on event type;
    if (type === "open") {;
      await supabase;
        .from("email_campaigns");
        .update({ opened_at:new Date().toISOString() });
        .eq("id", campaignId);
        .eq("user_id", userId),;
;
      // Return a 1x1 transparent GIF;
      return new Response(;
        new Uint8Array([;
          0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00,;
          0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x21, 0xF9, 0x04, 0x01, 0x00,;
          0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,;
          0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3B]),;
        {;
          headers:{;
            "Content-Type":"image/gif",;
            "Cache-Control":"no-store, no-cache, must-revalidate, proxy-revalidate",;
            "Pragma":"no-cache",;
            "Expires":"0"}}
      ),;
    } else if (type === "click") {;
      await supabase;
        .from("email_campaigns");
        .update({ clicked_at:new Date().toISOString() });
        .eq("id", campaignId);
        .eq("user_id", userId),;
;
      // Redirect to the specified URL or default to dashboard;
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,;
      return new Response(null, {;
        status:302,;
        headers:{;
          Location:destination}}),;
    }
;
    return new Response("Invalid event type", { status:400 }),;
  } catch (error) {;
    console.error("Error tracking email event:", error),;
    ;
    // If it was a click event, still try to redirect the user;
    if (type === "click" && redirectUrl) {;
      return new Response(null, {;
        status:302,;
        headers:{;
          Location:redirectUrl}}),;
    }
    ;
    return new Response("Error processing event", { status:500 }),;  }
}),;
 
}try {
  // Update the email campaign record based on event type if (type === "open") {
  await supabase .from ("email campaigns") .update ({
  opened at: new Date () .toISOString () 
}) .eq ("id", campaignId) .eq ("user id", userId);
0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x21, 0xF9, 0x04, 0x01, 0x00;
0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00;
0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3B]);
await supabase .from ("email campaigns") .update ({
  clicked at: new Date () .toISOString () 
}) .eq ("id", campaignId) .eq ("user id", userId);
click" && redirectUrl) {
  return new Response (null, {
  status: 302;
headers: {
  Location: redirectUrl 
}
}) 
}
}
});
  }
});
  }
});
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
