
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {processJobMatching, storeMatchResults} from "./job-matching.ts";
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {processJobMatching, storeMatchResults} from "./job-matching ;


>>>>>>> main
const corsHeaders = {
  "Access-Control-Allow-Origin": "*";
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
// Initialize the Supabase client
<<<<<<< HEAD
const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") |"";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {processJobMatching, storeMatchResults} from "./job-matching.ts";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
=======


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {processJobMatching, storeMatchResults} from "./job-matching.ts";

>>>>>>> main
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { processJobMatching, storeMatchResults } from "./job-matching.ts",

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======


>>>>>>> main
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
const supabase = createClient(supabaseUrl, supabaseAnonKey),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {

    const { jobId } = await req && req.json();
    

=======

    const { jobId } = await req.json(),
    

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
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
      .single();
=======
      .single(),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (jobError) {
      throw new Error(`Failed to fetch job: ${jobError.message}`)
=======


      .single(),



    if (jobError) {
      throw new Error(`Failed to fetch job: ${jobError && jobError.message}`)
>>>>>>> main
    }
    // 2. Retrieve all talent profiles
    const { data: talents, error: talentsError } = await supabase
      .from("talent_profiles")
      .select("*")
<<<<<<< HEAD
<<<<<<< HEAD
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
=======


      .eq("is_published", true),



    if (talentsError) {
      throw new Error(`Failed to fetch talent profiles: ${talentsError && talentsError.message}`)
    }


    if (!talents || talents && talents.length === 0) {

      return new Response(
        JSON && JSON.stringify({ message: "No talent profiles found" });
>>>>>>> main
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }
    // 3. Use AI to normalize skills and find matches
<<<<<<< HEAD
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
=======

    await storeMatchResults(jobId, matchedTalents, job && job.title);
=======

>>>>>>> main
    const matchedTalents = await processJobMatching(job, talents),
    
    // 4. Store matches in database and create notifications
    await storeMatchResults(jobId, matchedTalents, job.title),

<<<<<<< HEAD
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
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
import { processJobMatching, storeMatchResults } from "./job-matching.ts",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

    return new Response(
      JSON && JSON.stringify({ 
        message: "Job matching completed", 

    console && console.error("Error in job-talent-matcher:", error);
=======
        matches: matchedTalents.length 
      }),

      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {

    console.error("Error in job-talent-matcher:", error),

    
    return new Response(
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

      }
    );
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});

;

>>>>>>> main
