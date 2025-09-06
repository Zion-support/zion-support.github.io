
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {processJobMatching, storeMatchResults} from "./job-matching.ts";
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {processJobMatching, storeMatchResults} from "./job-matching ;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const corsHeaders = {
  "Access-Control-Allow-Origin": "*";
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
// Initialize the Supabase client
<<<<<<< HEAD
const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") |"";
=======
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const supabase = createClient(supabaseUrl, supabaseAnonKey);
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<< HEAD
    const { jobId } = await req.json();
=======
    const { jobId } = await req && req.json();
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!jobId) {
      throw new Error("Job ID is required")
    }
    // 1. Retrieve job details
    const { data: job, error: jobError } = await supabase
      .from("jobs")
      .select("*")
      .eq("id", jobId)
      .single();
    if (jobError) {
      throw new Error(`Failed to fetch job: ${jobError && jobError.message}`)
    }
    // 2. Retrieve all talent profiles
    const { data: talents, error: talentsError } = await supabase
      .from("talent_profiles")
      .select("*")
      .eq("is_published", true);
    if (talentsError) {
      throw new Error(`Failed to fetch talent profiles: ${talentsError && talentsError.message}`)
    }
<<<<<<< HEAD
    if (!talents |talents.length === 0) {
=======

    if (!talents || talents && talents.length === 0) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return new Response(
        JSON && JSON.stringify({ message: "No talent profiles found" });
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }
    // 3. Use AI to normalize skills and find matches
    const matchedTalents = await processJobMatching(job, talents);
    // 4. Store matches in database and create notifications
<<<<<<< HEAD
    await storeMatchResults(jobId, matchedTalents, job.title);
    return new Response(
      JSON.stringify({
        message: "Job matching completed"
        matches: matchedTalents.length
=======
    await storeMatchResults(jobId, matchedTalents, job && job.title);

    return new Response(
      JSON && JSON.stringify({ 
        message: "Job matching completed", 
        matches: matchedTalents && matchedTalents.length 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
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
=======
    console && console.error("Error in job-talent-matcher:", error);
    
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    )
  }
});

