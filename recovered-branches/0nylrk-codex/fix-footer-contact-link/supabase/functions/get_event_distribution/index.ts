<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm ;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

const corsHeaders = {}
  "Access-Control-Allow-Origin": "*""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


=======
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm ;



import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm ;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
serve(async (req) => {
  // Handle CORS preflight request
  if (req && req.method === "OPTIONS") {
=======
serve(async (req) => {
  // Handle CORS preflight request
  if (req && req.method === "OPTIONS") {
serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
serve(async (req) => {
  // Handle CORS preflight request
  if (req && req.method === "OPTIONS") {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


"
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts","
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",";
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";"
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts","
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",



const corsHeaders = {"
  "Access-Control-Allow-Origin": "*","
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},



serve(async (req) => {}
  // Handle CORS preflight request"
  if (req && req.method === "OPTIONS") {}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return new Response("ok", { headers: corsHeaders })
  }
  try {}
    const supabaseClient = createClient(

    ),
;
    // Parse the request body;
    const { days_back = 7 } = await req.json(),



<<<<<<< HEAD
=======
      Deno && Deno.env.get("SUPABASE_URL") ?? "";
      Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );
    // Parse the request body
    const { days_back = 7 } = await req && req.json();
    // Calculate the start date
    const startDate = new Date();
    startDate && startDate.setDate(startDate && startDate.getDate() - days_back);
    
    // Calculate the start date
    const startDate = new Date(),
    startDate.setDate(startDate.getDate() - days_back),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
    // Parse the request body
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight request
  if (req && req.method === "OPTIONS") {
serve(async (req) => {
  // Handle CORS preflight request
  if (req && req.method === "OPTIONS") {
serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
serve(async (req) => {
  // Handle CORS preflight request
  if (req && req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }
  try {
    const supabaseClient = createClient(

    const { days_back = 7 } = await req && req.json();
    ),

    // Parse the request body
    const { days_back = 7 } = await req.json(),

    
    // Calculate the start date
    const startDate = new Date();
    startDate && startDate.setDate(startDate && startDate.getDate() - days_back);




    // Parse the request body
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // Query analytics events
    const { data, error } = await supabaseClient
      .from("analytics_events")
      .select("event_type, created_at")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      .gte("created_at", startDate && startDate.toISOString());



      .gte("created_at", startDate.toISOString()),


      .gte("created_at", startDate && startDate.toISOString());
    if (error) {
=======
    // Parse the request body;
    // Query analytics events;
    const { data, error } = await supabaseClient"
      .from("analytics_events")"
      .select("event_type, created_at")



    if (error) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      console && console.error("Error fetching analytics data:", error);
      throw error;
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // Group events by date and event type
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
    // Group events by date and event type;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const eventsByDate = {},
    


    data.forEach((event) => {"
      const date = new Date(event.created_at).toISOString().split("T")[0];
<<<<<<< HEAD
      if (!eventsByDate[date]) {


<<<<<<< HEAD
=======
      .gte("created_at", startDate.toISOString());
      .gte("created_at", startDate.toISOString()),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    if (error) {
      console.error("Error fetching analytics data:", error),
      throw error
    }
    // Group events by date and event type

<<<<<<< HEAD
    data.forEach((event) => {
      const date = new Date(event.created_at).toISOString().split("T")[0],
      if (!eventsByDate[date]) {
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
=======
      if (!eventsByDate[date]) {}
"
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
const corsHeaders = {;"
  "Access-Control-Allow-Origin": "*",;"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  // Handle CORS preflight request;"
  if (req.method === "OPTIONS") {;"
=======

    const eventsByDate = {},
    


    data.forEach((event) => {
      const date = new Date(event.created_at).toISOString().split("T")[0];
      if (!eventsByDate[date]) {


import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  // Handle CORS preflight request;
  if (req.method === "OPTIONS") {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return new Response("ok", { headers: corsHeaders });
  }
;
  try {;
<<<<<<< HEAD
    const supabaseClient = createClient(;"
      Deno.env.get("SUPABASE_URL") ?? "",;"
=======
    const supabaseClient = createClient(;
      Deno.env.get("SUPABASE_URL") ?? "",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    ),;
    // Parse the request body;
    const { days_back = 7 } = await req.json(),;
    // Calculate the start date;
    const startDate = new Date(),;
    startDate.setDate(startDate.getDate() - days_back),;
    // Query analytics events;
<<<<<<< HEAD
    const { data, error } = await supabaseClient;"
      .from("analytics_events");"
      .select("event_type, created_at");"
      .gte("created_at", startDate.toISOString()),;
    if (error) {;"
=======
    const { data, error } = await supabaseClient;
      .from("analytics_events");
      .select("event_type, created_at");
      .gte("created_at", startDate.toISOString()),;
    if (error) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      console.error("Error fetching analytics data:", error),;
      throw error;
    }
;
    // Group events by date and event type;
    const eventsByDate = {},;
<<<<<<< HEAD
    data.forEach((event) => {;"
=======
    data.forEach((event) => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const date = new Date(event.created_at).toISOString().split("T")[0],;
      if (!eventsByDate[date]) {;


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        eventsByDate[date] = { date }
      }
      if (!eventsByDate[date][event.event_type]) {}
        eventsByDate[date][event.event_type] = 0;
      }

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
        eventsByDate[date] = { date }
      }
      if (!eventsByDate[date][event.event_type]) {
        eventsByDate[date][event.event_type] = 0
      }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const eventsByDate = {};
    
    data && data.forEach((event) => {
      const date = new Date(event && event.created_at).toISOString().split("T")[0];
      if (!eventsByDate[date]) {
        eventsByDate[date] = { date }
      }
      
      if (!eventsByDate[date][event && event.event_type]) {
        eventsByDate[date][event && event.event_type] = 0
      }
      
      eventsByDate[date][event && event.event_type]++
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    });
    // Convert to array for easier consumption by frontend;
      headers: {}
        ...corsHeaders"
        "Content-Type": "application/json"}

=======

    });
    // Convert to array for easier consumption by frontend
      headers: {
        ...corsHeaders
        "Content-Type": "application/json"}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      
      eventsByDate[date][event.event_type]++
    }),

<<<<<<< HEAD
    // Convert to array for easier consumption by frontend;
    const result = Object.values(eventsByDate).sort((a, b) => a.date.localeCompare(b.date)),

    return new Response(JSON.stringify(result), {}
      headers: {}
        ...corsHeaders,"
        "Content-Type": "application/json"},

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      status: 200})
  } catch (error) {
=======
    // Group events by date and event type  } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    // Group events by date and event type  } catch (error) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    // Convert to array for easier consumption by frontend
    const result = Object.values(eventsByDate).sort((a, b) => a.date.localeCompare(b.date)),

    return new Response(JSON.stringify(result), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"},

      status: 200})
  } catch (error) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    console && console.error("Error:", error && error.message);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      headers: {
<<<<<<< HEAD

=======
=======
      status: 200})
  } catch (error) {"
    console && console.error("Error:", error && error.message);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {}
      headers: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
});

import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,'
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';
const cors_headers = {"
  "Access - Control - Allow - Origin": "*","
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {}
  // Handle CORS preflight request;
  // Check condition;
if ( {) {}
  $2;
}"
    return new Response ("ok", { headers: cors_headers });
  }
  try {}
    const supabase_client = create_client ("
      Deno.env.get ("SUPABASE_URL") ?? "";"
      Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") ?? "");
;
    // Parse the request body;
    const { days_back = 7 } = await req.json ();
;
    // Calculate the start date;
    const start_date = new Date ();
    start_date.set_date (start_date.get_date () - days_back);
;
    // Query analytics events;
    const { data, error } = await supabase_client;"
      .from ("analytics_events");"
      .select ("event_type, created_at");"
      .gte ("created_at", start_date.toISOString ());
;
    // Check condition;
if ( {) {}
  $2;
}"
      console.error ("Error fetching analytics data:", error);
      throw error;
    }
    // Group events by date and event type;
    const eventsByDate = {}
;
    data.for_each ((event) => {"
      const date = new Date (event.created_at).toISOString ().split ("T")[0];
      // Check condition;
if ( {) {}
  $2;
}
        eventsByDate[date] = { date }
      }
      // Check condition;
if ( {) {}
  $2;
}
        eventsByDate[date][event.event_type] = 0;
      }
      eventsByDate[date][event.event_type]++;
    });
;
    // Convert to array for easier consumption by frontend;
    const result = Object.values (eventsByDate).sort ((a, b) => a.date.locale_compare (b.date));
;
    return new Response (JSON.stringify (result), {}
      headers: {}
        ...cors_headers,"
        "Content - Type": "application / json"}
      status: 200});
  } catch (error) {"
    console.error ("Error:", error.message);
    return new Response (JSON.stringify ({ error: error.message }), {}
      headers: {}
        ...cors_headers,"
        "Content - Type": "application / json"}
      status: 500});
<<<<<<< HEAD
<<<<<<< HEAD
  }
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

        ...corsHeaders,
        "Content-Type": "application/json"},
      status: 500})
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
      eventsByDate[date][event.event_type]++;
    }),;
    // Convert to array for easier consumption by frontend;
    const result = Object.values(eventsByDate).sort((a, b) => a.date.localeCompare(b.date)),;
    return new Response(JSON.stringify(result), {;
      headers: {;
        ...corsHeaders,;
        "Content-Type": "application/json"},;
      status: 200});
  } catch (error) {;
    console.error("Error:", error.message),;
    return new Response(JSON.stringify({ error: error.message }), {;
      headers: {;
        ...corsHeaders,;
        "Content-Type": "application/json"},;
      status: 500});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        ...corsHeaders,
=======


        ...corsHeaders,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        "Content-Type": "application/json"},
      status: 500})

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
});
;

import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  // Handle CORS preflight request;
  if (req.method === "OPTIONS") {;
    return new Response("ok", { headers:corsHeaders }),;
  }
;
  try {;
    const supabaseClient = createClient(;
      Deno.env.get("SUPABASE_URL") ?? "",;
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    ),;
;
    // Parse the request body;
    const { days_back = 7 } = await req.json(),;
    ;
    // Calculate the start date;
    const startDate = new Date(),;
    startDate.setDate(startDate.getDate() - days_back),;
;
    // Query analytics events;
    const { data, error } = await supabaseClient;
      .from("analytics_events");
      .select("event_type, created_at");
      .gte("created_at", startDate.toISOString()),;
;
    if (error) {;
      console.error("Error fetching analytics data:", error),;
      throw error,;
    }
;
    // Group events by date and event type;
    const eventsByDate = {},;
    ;
    data.forEach((event) => {;
      const date = new Date(event.created_at).toISOString().split("T")[0],;
      if (!eventsByDate[date]) {;
        eventsByDate[date] = { date },;
      }
      ;
      if (!eventsByDate[date][event.event_type]) {;
        eventsByDate[date][event.event_type] = 0,;
      }
      ;
      eventsByDate[date][event.event_type]++,;
    }),;
;
    // Convert to array for easier consumption by frontend;
    const result = Object.values(eventsByDate).sort((a, b) => a.date.localeCompare(b.date)),;
;
    return new Response(JSON.stringify(result), {;
      headers:{;
        ...corsHeaders,;
        "Content-Type":"application/json"},;
      status:200}),;
  } catch (error) {;
    console.error("Error:", error.message),;
    return new Response(JSON.stringify({ error:error.message }), {;
      headers:{;
        ...corsHeaders,;
        "Content-Type":"application/json"},;
      status:500}),;  }
}),;
 serve (async (req) => {
  //Handle CORS preflight request if (req.method === "OPTIONS") {
  
}try {
  const supabaseClient = createClient ();
}//Group events by date and event type const eventsByDate = {
  
};
data.forEach ( (event) => {
  if (!eventsByDate[date]) {
  eventsByDate[date] = {
  date 
}
}if (!eventsByDate[date][event.event type]) {
  eventsByDate[date][event.event type] = 0 
}
});
//Convert to array for easier consumption by frontend status: 500 
});
}
});
  }
});
  }
});
  }
});
<<<<<<< HEAD
//Convert to array for easier consumption by frontend status: 500 
});
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
  }
});
;
});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;


  }
});

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
