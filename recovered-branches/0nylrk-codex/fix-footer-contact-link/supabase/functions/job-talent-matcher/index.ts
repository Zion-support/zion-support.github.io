
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2";
import { processJobMatching, storeMatchResults } from "./job-matching.ts";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

// Initialize the Supabase client
const supabaseUrl = $2;
const supabaseAnonKey = $2;
const supabase = createClient($2);
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }

  try {
    const { jobId } = await req.json($2);
    if (!jobId) {
      throw new Error("Job ID is required")
    }

    // 1. Retrieve job details
    const { data: job, error: jobError} = await supabase
      .from("jobs")
      .select("*")
      .eq("id", jobId)
      .single($2);
    if (jobError) {
      throw new Error(`Failed to fetch job: ${jobError.message}`)
    }

    // 2. Retrieve all talent profiles
    const { data: talents, error: talentsError} = await supabase
      .from("talent_profiles")
      .select("*")
      .eq($2);
    if (talentsError) {
      throw new Error(`Failed to fetch talent profiles: ${talentsError.message}`)
    }

    if (!talents || talents.length === 0) {
      return new Response($2);
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    // 3. Use AI to normalize skills and find matches
    const matchedTalents = await processJobMatching($2);
    // 4. Store matches in database and create notifications
    await storeMatchResults($2);
    return new Response($2);
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
    
  } catch (error) {
    console.error($2);
    return new Response($2);
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  }
}),
