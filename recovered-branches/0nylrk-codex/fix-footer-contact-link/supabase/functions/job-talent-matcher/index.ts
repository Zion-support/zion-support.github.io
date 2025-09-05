
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { processJobMatching, storeMatchResults } from "./job-matching.ts",

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
const supabase = createClient(supabaseUrl, supabaseAnonKey),

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
=======
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2&quot;;
import { processJobMatching, storeMatchResults } from &quot;./job-matching.ts&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

// Initialize the Supabase client
const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;) || "&quot;;
const supabaseAnonKey = Deno.env.get(&quot;SUPABASE_ANON_KEY&quot;) || "&quot;;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  try {
    const { jobId } = await req.json(),
    
    if (!jobId) {
<<<<<<< HEAD
      throw new Error("Job ID is required")
=======
      throw new Error(&quot;Job ID is required&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    // 1. Retrieve job details
    const { data: job, error: jobError } = await supabase
<<<<<<< HEAD
      .from("jobs")
      .select("*")
      .eq("id", jobId)
      .single(),
=======
      .from(&quot;jobs&quot;)
      .select(&quot;*&quot;)
      .eq(&quot;id&quot;, jobId)
      .single();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    if (jobError) {
      throw new Error(`Failed to fetch job: ${jobError.message}`)
    }

    // 2. Retrieve all talent profiles
    const { data: talents, error: talentsError } = await supabase
<<<<<<< HEAD
      .from("talent_profiles")
      .select("*")
      .eq("is_published", true),
=======
      .from(&quot;talent_profiles&quot;)
      .select(&quot;*&quot;)
      .eq(&quot;is_published&quot;, true);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    if (talentsError) {
      throw new Error(`Failed to fetch talent profiles: ${talentsError.message}`)
    }

    if (!talents || talents.length === 0) {
      return new Response(
<<<<<<< HEAD
        JSON.stringify({ message: "No talent profiles found" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
=======
        JSON.stringify({ message: &quot;No talent profiles found&quot; }),
        { headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } }
      );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    // 3. Use AI to normalize skills and find matches
    const matchedTalents = await processJobMatching(job, talents),
    
    // 4. Store matches in database and create notifications
    await storeMatchResults(jobId, matchedTalents, job.title),

    return new Response(
      JSON.stringify({ 
        message: &quot;Job matching completed&quot;, 
        matches: matchedTalents.length 
      }),
<<<<<<< HEAD
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
    
  } catch (error) {
    console.error("Error in job-talent-matcher:", error),
=======
      { headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } }
    );
    
  } catch (error) {
    console.error(&quot;Error in job-talent-matcher:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
    );
  }
});