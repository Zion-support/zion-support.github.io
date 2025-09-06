
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


=======



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
// Initialize Supabase client"
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;"
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
<<<<<<< HEAD
<<<<<<< HEAD
const supabase = createClient(supabaseUrl, supabaseServiceKey);
"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts","
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",";
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts","
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),
=======
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.45.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.45.0",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
const supabase = createClient(supabaseUrl, supabaseServiceKey);// Initialize Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
const supabase = createClient(supabaseUrl, supabaseServiceKey);// Initialize Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const supabase = createClient(supabaseUrl, supabaseServiceKey);
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
serve(async (req) => {
  // Parse the URL to get the tracking parameters
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const url = new URL(req && req.url);
  const type = url && url.searchParams.get("type"), // "open" or "click"
  const campaignId = url && url.searchParams.get("cid");
  const userId = url && url.searchParams.get("uid");
=======
;
  const url = new URL(req && req.url);"
  const type = url && url.searchParams.get("type"), // "open" or "click""
  const campaignId = url && url.searchParams.get("cid");"
  const userId = url && url.searchParams.get("uid");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const redirectUrl = url && url.searchParams.get("redirect");

<<<<<<< HEAD

=======
  const url = new URL(req.url),
  const type = url.searchParams.get("type"), // "open" or "click"
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======
  const url = new URL(req.url),
  const type = url.searchParams.get("type"), // "open" or "click"

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

// Initialize Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey);
serve(async (req) => {
  // Parse the URL to get the tracking parameters  const campaignId = url.searchParams.get("cid"),
  const userId = url.searchParams.get("uid"),
  const redirectUrl = url.searchParams.get("redirect"),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // Validate required parameters
  if (!type |!campaignId |!userId) {
=======
// Initialize Supabase client"
const supabaseUrl = Deno.env.get("SUPABASE_URL")!,"
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey),



// Initialize Supabase client"
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL")!;"
const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
const supabase = createClient(supabaseUrl, supabaseServiceKey);
serve(async (req) => {}
  // Parse the URL to get the tracking parameters;
  // Validate required parameters;
  if (!type |!campaignId |!userId) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return new Response("Missing required parameters", { status: 400 })
  }
  try {}
    // Update the email campaign record based on event type"
    if (type === "open") {}
      await supabase"
        .from("email_campaigns")
        .update({ opened_at: new Date().toISOString() })"
        .eq("id", campaignId)
<<<<<<< HEAD
<<<<<<< HEAD
=======
        .eq("user_id", userId);
        .eq("user_id", userId),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

      // Return a 1x1 transparent GIF
      return new Response(
        new Uint8Array([
=======
      // Return a 1x1 transparent GIF
=======
      // Return a 1x1 transparent GIF;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return new Response(
        new Uint8Array([]
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,'
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00;
          0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x21, 0xF9, 0x04, 0x01, 0x00;
          0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00;
          0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3B]);
<<<<<<< HEAD
        {
<<<<<<< HEAD
<<<<<<< HEAD
          headers: {
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            "Content-Type": "image/gif",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
=======
        {}
          headers: {}
"
            "Content-Type": "image/gif","
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            "Pragma": "no-cache",



<<<<<<< HEAD
      // Return a 1x1 transparent GIF
      return new Response(
        new Uint8Array([
          0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00,
          0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x21, 0xF9, 0x04, 0x01, 0x00,
          0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,
          0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3B]),
        {
          headers: {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            "Content-Type": "image/gif"
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate";
            "Pragma": "no-cache";
            "Content-Type": "image/gif",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "Pragma": "no-cache",
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            "Expires": "0"}}
=======
          headers: {            "Expires": "0"}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          headers: {            "Expires": "0"}}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      )
    } else if (type === "click") {
      await supabase
=======

"
            "Expires": "0"}}
      )"
    } else if (type === "click") {}
      await supabase"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .from("email_campaigns")
        .update({ clicked_at: new Date().toISOString() })"
        .eq("id", campaignId)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
        .eq("user_id", userId);
      // Redirect to the specified URL or default to dashboard
      const destination = redirectUrl |`${supabaseUrl}/dashboard`;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .eq("user_id", userId),

      // Redirect to the specified URL or default to dashboard;
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return new Response(null, {
        status: 302
        headers: {
          Location: destination}})
    }
    return new Response("Invalid event type", { status: 400 })
  } catch (error) {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
        headers: {
          Location: destination}})
    }

    console && console.error("Error tracking email event:", error);
    

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
        .eq("user_id", userId),
=======
        headers: {
          Location: destination}})
    }        .eq("user_id", userId),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      // Redirect to the specified URL or default to dashboard
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,
=======
        headers: {
          Location: destination}})
    }        .eq("user_id", userId),

      // Redirect to the specified URL or default to dashboard
      const destination = redirectUrl || `${supabaseUrl}/dashboard`,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      return new Response(null, {
        status: 302
            "Cache - Control": "no - store, no - cache, must - revalidate, proxy - revalidate";
            "Pragma": "no - cache";
=======

      return new Response(null, {}
        status: 302;
"
            "Content - Type": "image / gif","
            "Cache - Control": "no - store, no - cache, must - revalidate, proxy - revalidate";"
            "Pragma": "no - cache";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            "Expires": "0"}}
      );
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
        headers: {
          Location: destination}});
    }

    console && console.error("Error tracking email event:", error);
    

    console.error("Error tracking email event:", error),
    

          Location: destination}})
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    // If it was a click event, still try to redirect the user
    if (type === "click" && redirectUrl) {
      return new Response(null, {
        status: 302
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
        headers: {
          Location: redirectUrl}})
    }
    return new Response("Error processing event", { status: 500 })
<<<<<<< HEAD

  }
});
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return new Response ("Invalid event type", { status: 400 });
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (error) {
=======

        headers: {}
          Location: destination}});
    }

"
    console.error("Error tracking email event:", error),
    



        headers: {}
          Location: destination}})
    }

    // If it was a click event, still try to redirect the user"
    if (type === "click" && redirectUrl) {}
      return new Response(null, {}
        status: 302;
"
    return new Response ("Invalid event type", { status: 400 });
  } catch (error) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
        headers: {
          Location: redirect_url}});
    }  }
});
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
=======

        headers: {}
          Location: redirect_url}});
    }

"
    return new Response ("Error processing event", { status: 500 });




"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
            "Expires": "0"}}
      );"
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


  }
});

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  }
});
;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
