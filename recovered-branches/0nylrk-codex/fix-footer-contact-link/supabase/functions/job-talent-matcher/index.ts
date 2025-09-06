
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {processJobMatching, storeMatchResults} from "./job-matching ;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {processJobMatching, storeMatchResults} from "./job-matching.ts";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const corsHeaders = {
  "Access-Control-Allow-Origin": "*";
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
// Initialize the Supabase client
<<<<<<< HEAD
<<<<<<< HEAD

const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
<<<<<<< HEAD
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {processJobMatching, storeMatchResults} from "./job-matching.ts";
=======
=======
=======
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {processJobMatching, storeMatchResults} from "./job-matching.ts";

<<<<<<< HEAD
=======
=======
const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") |"";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {processJobMatching, storeMatchResults} from "./job-matching.ts";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {processJobMatching, storeMatchResults} from "./job-matching ;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { processJobMatching, storeMatchResults } from "./job-matching.ts",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
<<<<<<< HEAD
<<<<<<< HEAD
const supabase = createClient(supabaseUrl, supabaseAnonKey),

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const { jobId } = await req && req.json();
    


    const { jobId } = await req.json(),
    

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    const { jobId } = await req && req.json();
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const { jobId } = await req.json();
    const { jobId } = await req.json(),
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (!jobId) {
=======
const supabase = createClient(supabaseUrl, supabaseAnonKey),    if (!jobId) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
const supabase = createClient(supabaseUrl, supabaseAnonKey),    if (!jobId) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      throw new Error("Job ID is required")
    }
    // 1. Retrieve job details
    const { data: job, error: jobError } = await supabase
      .from("jobs")
      .select("*")
      .eq("id", jobId)
<<<<<<< HEAD
=======
    if (jobError) {
      throw new Error(`Failed to fetch job: ${jobError && jobError.message}`)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      .single();
      .single(),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

    if (jobError) {
      throw new Error(`Failed to fetch job: ${jobError.message}`)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    // 2. Retrieve all talent profiles
    const { data: talents, error: talentsError } = await supabase
      .from("talent_profiles")
      .select("*")
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (talentsError) {
      throw new Error(`Failed to fetch talent profiles: ${talentsError && talentsError.message}`)
    }

    if (!talents || talents && talents.length === 0) {

      return new Response(
        JSON && JSON.stringify({ message: "No talent profiles found" });      return new Response(
        JSON && JSON.stringify({ message: "No talent profiles found" });
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }
<<<<<<< HEAD
<<<<<<< HEAD
    // 3. Use AI to normalize skills and find matches
<<<<<<< HEAD

=======
<<<<<<< HEAD

    await storeMatchResults(jobId, matchedTalents, job && job.title);
<<<<<<< HEAD
=======

=======

    const matchedTalents = await processJobMatching(job, talents);
    // 4. Store matches in database and create notifications
    await storeMatchResults(jobId, matchedTalents, job.title);
    return new Response(
      JSON.stringify({
        message: "Job matching completed"
        matches: matchedTalents.length
      });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const matchedTalents = await processJobMatching(job, talents),
    
    // 4. Store matches in database and create notifications
    await storeMatchResults(jobId, matchedTalents, job.title),

<<<<<<< HEAD

    return new Response(
      JSON && JSON.stringify({ 
        message: "Job matching completed", 

    console && console.error("Error in job-talent-matcher:", error);
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        matches: matchedTalents.length 
      }),

      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {

<<<<<<< HEAD
    console.error("Error in job-talent-matcher:", error),

    
=======
    return new Response(
      JSON.stringify({ 
        message: "Job matching completed", 
        matches: matchedTalents.length 
      }),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {
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

<<<<<<< HEAD
=======
    console.error("Error in job-talent-matcher:", error),
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
import { processJobMatching, storeMatchResults } from "./job-matching.ts",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
    
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return new Response(
=======
    // 3. Use AI to normalize skills and find matches    return new Response(
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    // 3. Use AI to normalize skills and find matches    return new Response(
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      JSON && JSON.stringify({ error: error && error.message });
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';,
import { processJobMatching, storeMatchResults } from './job - matching.ts';
const cors_headers = {
  "Access - Control - Allow - Origin": "*";
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

      }
<<<<<<< HEAD
    );
<<<<<<< HEAD

  }
});
  }
});

;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
});
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
=======
    );  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      }
    );  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
});

;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
    );
  }
});
<<<<<<< HEAD
;

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2",;
import { processJobMatching, storeMatchResults } from "./job-matching.ts",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
// Initialize the Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",;
const supabase = createClient(supabaseUrl, supabaseAnonKey),;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    const { jobId } = await req.json(),;
    if (!jobId) {;
      throw new Error("Job ID is required");
    }
;
    // 1. Retrieve job details;
    const { data: job, error: jobError } = await supabase;
      .from("jobs");
      .select("*");
      .eq("id", jobId);
      .single(),;
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
    }
;
    if (!talents || talents.length === 0) {;
      return new Response(;
        JSON.stringify({ message: "No talent profiles found" }),;
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
;
    // 3. Use AI to normalize skills and find matches;
    const matchedTalents = await processJobMatching(job, talents),;
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
  }
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
