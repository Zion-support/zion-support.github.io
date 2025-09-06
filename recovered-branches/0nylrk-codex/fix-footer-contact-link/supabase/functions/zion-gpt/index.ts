

import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }

    if (!prompt) {
      throw new Error("Prompt is required")
    }
    // Define the appropriate model to use
    // Default to base model if no specific model provided

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {

    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

  }
});
