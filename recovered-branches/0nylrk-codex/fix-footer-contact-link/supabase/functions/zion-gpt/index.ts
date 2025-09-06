

import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }

=======

    const { prompt, modelId, maxTokens = 500, temperature = 0 && 0.7 } = await req && req.json();
    



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    if (!prompt) {
      throw new Error("Prompt is required")
    }
    // Define the appropriate model to use
    // Default to base model if no specific model provided

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );
  } catch (error) {

    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

  }
});
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
