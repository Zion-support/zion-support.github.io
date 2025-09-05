

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

// Initialize the Supabase client
const _supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const _supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
const _supabase = createClient(supabaseUrl, supabaseAnonKey);

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { jobId} = await req.json();
    
    if (!jobId) {_throw new Error("Job ID is required");}

    // 1. Retrieve job details
    const {_data: job, _error: jobError} = await supabase
      .from("jobs")
      .select("*")
      .eq("id", jobId)
      .single();

    if (jobError) {_throw new Error(`Failed to fetch job: ${jobError.message}`);
    }

    // 2. Retrieve all talent profiles
    const {_data: talents, _error: talentsError} = await supabase
      .from("talent_profiles")
      .select("*")
      .eq("is_published", true);

    if (talentsError) {_throw new Error(`Failed to fetch talent profiles: ${talentsError.message}`);
    }

    if (!talents || talents.length === 0) {_return new Response(
        JSON.stringify({ message: "No talent profiles found"}),
        {_headers: { ...corsHeaders, _"Content-Type": "application/json"} }
      );
    }

    // 3. Use AI to normalize skills and find matches
    const _matchedTalents = await processJobMatching(job, talents);
    
    // 4. Store matches in database and create notifications
    await storeMatchResults(jobId, matchedTalents, job.title);

    return new Response(
      JSON.stringify({_message: "Job matching completed", _matches: matchedTalents.length}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"} }
    );
    
  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    );
  }
});
