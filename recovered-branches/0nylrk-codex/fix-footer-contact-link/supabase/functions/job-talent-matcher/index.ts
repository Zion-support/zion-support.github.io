
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
  }

  try {
    const { jobId } = await req.json();
    
    if (!jobId) {
      throw new Error(&quot;Job ID is required&quot;);
    }

    // 1. Retrieve job details
    const { data: job, error: jobError } = await supabase
      .from(&quot;jobs&quot;)
      .select(&quot;*&quot;)
      .eq(&quot;id&quot;, jobId)
      .single();

    if (jobError) {
      throw new Error(`Failed to fetch job: ${jobError.message}`);
    }

    // 2. Retrieve all talent profiles
    const { data: talents, error: talentsError } = await supabase
      .from(&quot;talent_profiles&quot;)
      .select(&quot;*&quot;)
      .eq(&quot;is_published&quot;, true);

    if (talentsError) {
      throw new Error(`Failed to fetch talent profiles: ${talentsError.message}`);
    }

    if (!talents || talents.length === 0) {
      return new Response(
        JSON.stringify({ message: &quot;No talent profiles found&quot; }),
        { headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } }
      );
    }

    // 3. Use AI to normalize skills and find matches
    const matchedTalents = await processJobMatching(job, talents);
    
    // 4. Store matches in database and create notifications
    await storeMatchResults(jobId, matchedTalents, job.title);

    return new Response(
      JSON.stringify({ 
        message: &quot;Job matching completed&quot;, 
        matches: matchedTalents.length 
      }),
      { headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } }
    );
    
  } catch (error) {
    console.error(&quot;Error in job-talent-matcher:&quot;, error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
      }
    );
  }
});
