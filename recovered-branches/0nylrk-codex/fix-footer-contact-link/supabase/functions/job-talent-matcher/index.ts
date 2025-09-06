<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts

<<<<<<< HEAD

=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {processJobMatching, storeMatchResults} from "./job-matching ;


========
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {processJobMatching, storeMatchResults} from "./job-matching ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts
=======

<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {processJobMatching, storeMatchResults} from "./job-matching.ts";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const corsHeaders = {
  "Access-Control-Allow-Origin": "*";
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
// Initialize the Supabase client
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts

const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";

========
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts
const supabase = createClient(supabaseUrl, supabaseAnonKey);
=======


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {processJobMatching, storeMatchResults} from "./job-matching.ts";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") |"";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {processJobMatching, storeMatchResults} from "./job-matching.ts";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { processJobMatching, storeMatchResults } from "./job-matching.ts",

<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
const supabase = createClient(supabaseUrl, supabaseAnonKey),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts

<<<<<<< HEAD
=======
    const { jobId } = await req && req.json();
    

=======

    const { jobId } = await req.json(),
    

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    const { jobId } = await req && req.json();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<< HEAD
    const { jobId } = await req.json();
=======
    const { jobId } = await req.json(),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (!jobId) {
      throw new Error("Job ID is required")
    }
    // 1. Retrieve job details
    const { data: job, error: jobError } = await supabase
      .from("jobs")
      .select("*")
      .eq("id", jobId)
<<<<<<< HEAD
<<<<<<< HEAD

=======


      .single(),



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (jobError) {
      throw new Error(`Failed to fetch job: ${jobError && jobError.message}`)
=======
      .single();
=======
      .single(),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (jobError) {
      throw new Error(`Failed to fetch job: ${jobError.message}`)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
    // 2. Retrieve all talent profiles
    const { data: talents, error: talentsError } = await supabase
      .from("talent_profiles")
      .select("*")
<<<<<<< HEAD
<<<<<<< HEAD

=======


      .eq("is_published", true),



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (talentsError) {
      throw new Error(`Failed to fetch talent profiles: ${talentsError && talentsError.message}`)
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts


    if (!talents || talents && talents.length === 0) {

========
    if (!talents || talents && talents.length === 0) {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts
      return new Response(
        JSON && JSON.stringify({ message: "No talent profiles found" });
=======
      .eq("is_published", true);
=======
      .eq("is_published", true),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (talentsError) {
      throw new Error(`Failed to fetch talent profiles: ${talentsError.message}`)
    }
    if (!talents |talents.length === 0) {
      return new Response(
        JSON.stringify({ message: "No talent profiles found" }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }
    // 3. Use AI to normalize skills and find matches
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts
<<<<<<< HEAD

=======

    await storeMatchResults(jobId, matchedTalents, job && job.title);
=======

=======
<<<<<<< HEAD
    const matchedTalents = await processJobMatching(job, talents);
    // 4. Store matches in database and create notifications
    await storeMatchResults(jobId, matchedTalents, job.title);
    return new Response(
      JSON.stringify({
        message: "Job matching completed"
        matches: matchedTalents.length
      });
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const matchedTalents = await processJobMatching(job, talents),
    
    // 4. Store matches in database and create notifications
    await storeMatchResults(jobId, matchedTalents, job.title),

<<<<<<< HEAD

    return new Response(
      JSON && JSON.stringify({ 
        message: "Job matching completed", 

    console && console.error("Error in job-talent-matcher:", error);
=======
        matches: matchedTalents.length 
      }),

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {

<<<<<<< HEAD
=======
    return new Response(
      JSON.stringify({ 
        message: "Job matching completed", 
        matches: matchedTalents.length 
      }),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in job-talent-matcher:", error);
    return new Response(
      JSON.stringify({ error: error.message });
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    )
  }
});

=======
    console.error("Error in job-talent-matcher:", error),
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
<<<<<<< HEAD
=======
<<<<<<< HEAD
      }
    )
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
import { processJobMatching, storeMatchResults } from "./job-matching.ts",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
<<<<<<< HEAD
=======
    console.error("Error in job-talent-matcher:", error),

    
========
    const matchedTalents = await processJobMatching(job, talents);
    // 4. Store matches in database and create notifications
    await storeMatchResults(jobId, matchedTalents, job && job.title);
    return new Response(
      JSON && JSON.stringify({ 
        message: "Job matching completed", 
        matches: matchedTalents && matchedTalents.length 
      });
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {
    console && console.error("Error in job-talent-matcher:", error);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';,
import { processJobMatching, storeMatchResults } from './job - matching.ts';
const cors_headers = {
  "Access - Control - Allow - Origin": "*";
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Initialize the Supabase client;
const supabase_url = Deno.env.get ("SUPABASE_URL") || "";
const supabaseAnonKey = Deno.env.get ("SUPABASE_ANON_KEY") || "";
const supabase = create_client (supabase_url, supabaseAnonKey);
;
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    const { job_id } = await req.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Job ID is required");
    }
    // 1. Retrieve job details;
    const { data: job, error: job_error } = await supabase;
      .from ("jobs");
      .select ("*");
      .eq ("id", job_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Failed to fetch job: ${job_error.message}`);
    }
    // 2. Retrieve all talent profiles;
    const { data: talents, error: talents_error } = await supabase;
      .from ("talent_profiles");
      .select ("*");
      .eq ("is_published", true);
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Failed to fetch talent profiles: ${talents_error.message}`);
    }
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({ message: "No talent profiles found" });
        { headers: { ...cors_headers, "Content - Type": "application / json" } }
      );
    }
    // 3. Use AI to normalize skills and find matches;
    const matched_talents = await processJobMatching (job, talents);
;
    // 4. Store matches in database and create notifications;
    await storeMatchResults (job_id, matched_talents, job.title);
;
    return new Response (
      JSON.stringify ({
        message: "Job matching completed",
        matches: matched_talents.length;
      });
      { headers: { ...cors_headers, "Content - Type": "application / json" } }
    );
  } catch (error) {
    console.error ("Error in job - talent - matcher:", error);
;
    return new Response (
      JSON.stringify ({ error: error.message });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts

      }
    );
<<<<<<< HEAD

  }
});

=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});

;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      }
    );
  }
});
;
=======

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2",;
import { processJobMatching, storeMatchResults } from "./job-matching.ts",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Initialize the Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",;
const supabase = createClient(supabaseUrl, supabaseAnonKey),;
<<<<<<< HEAD
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
=======
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
;
  try {;
    const { jobId } = await req.json(),;
<<<<<<< HEAD
    ;
    if (!jobId) {;
      throw new Error("Job ID is required"),;
    }
;
    // 1. Retrieve job details;
    const { data:job, error:jobError } = await supabase;
=======
    if (!jobId) {;
      throw new Error("Job ID is required");
    }
;
    // 1. Retrieve job details;
    const { data: job, error: jobError } = await supabase;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      .from("jobs");
      .select("*");
      .eq("id", jobId);
      .single(),;
<<<<<<< HEAD
;
    if (jobError) {;
      throw new Error(`Failed to fetch job:${jobError.message}`),;
    }
;
    // 2. Retrieve all talent profiles;
    const { data:talents, error:talentsError } = await supabase;
      .from("talent_profiles");
      .select("*");
      .eq("is_published", true),;
;
    if (talentsError) {;
      throw new Error(`Failed to fetch talent profiles:${talentsError.message}`),;
=======
    if (jobError) {;
      throw new Error(`Failed to fetch job: ${jobError.message}`);
    }
;
    // 2. Retrieve all talent profiles;
    const { data: talents, error: talentsError } = await supabase;
      .from("talent_profiles");
      .select("*");
      .eq("is_published", true),;
    if (talentsError) {;
      throw new Error(`Failed to fetch talent profiles: ${talentsError.message}`);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
;
    if (!talents || talents.length === 0) {;
      return new Response(;
<<<<<<< HEAD
        JSON.stringify({ message:"No talent profiles found" }),;
        { headers:{ ...corsHeaders, "Content-Type":"application/json" } }
      ),;
=======
        JSON.stringify({ message: "No talent profiles found" }),;
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
;
    // 3. Use AI to normalize skills and find matches;
    const matchedTalents = await processJobMatching(job, talents),;
<<<<<<< HEAD
    ;
    // 4. Store matches in database and create notifications;
    await storeMatchResults(jobId, matchedTalents, job.title),;
;
    return new Response(;
      JSON.stringify({ ;
        message:"Job matching completed", ;
        matches:matchedTalents.length ;
      }),;
      { headers:{ ...corsHeaders, "Content-Type":"application/json" } }
    ),;
    ;
  } catch (error) {;
    console.error("Error in job-talent-matcher:", error),;
    ;
    return new Response(;
      JSON.stringify({ error:error.message }),;
      { ;
        status:500, ;
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
      }
    ),;  }
}),;
 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}try {
  const {
  jobId 
}= await req.json ();
if (!jobId) {
  
}//1. Retrieve job details const {
  data: job, error: jobError 
}= await supabase .from ("jobs") .select ("*") .eq ("id", jobId) .single ();
}//3. Use AI to normalize skills and find matches //4. Store matches in database and create notifications await storeMatchResults (jobId, matchedTalents, job.title);
return new Response (return new Response (JSON.stringify ({
  error: error.message 
});
{
  status: 500;
headers: {
  ...corsHeaders, "Content-Type" : "application/json" 
}
}) 
}
});
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/index.ts
=======
    // 4. Store matches in database and create notifications;
    await storeMatchResults(jobId, matchedTalents, job.title),;
    return new Response(;
      JSON.stringify({;
        message: "Job matching completed",;
        matches: matchedTalents.length;
      }),;
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {;
    console.error("Error in job-talent-matcher:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      }
    );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
