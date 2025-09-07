
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }
  try {
    const openAIApiKey = Deno.env.get($2);
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }

    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json($2);
    if (!prompt) {
      throw new Error("Prompt is required")
    }
    // Define the appropriate model to use
    // Default to base model if no specific model provided
    const model = $2;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"}
      body: JSON.stringify({
        model: model,
        messages: [{ 
          role: "user", 
          content: prompt}],
        max_tokens: maxTokens,
        temperature: temperature})}),

    if (!response.ok) {
      const errorData = await response.json($2);
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json($2);
    const completion = $2;
    // Return the completion along with usage statistics
    return new Response($2);
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
    console.error($2);
    return new Response($2);
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  }
}),
