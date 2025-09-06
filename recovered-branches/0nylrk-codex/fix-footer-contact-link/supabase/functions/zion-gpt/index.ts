
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

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
<<<<<<< HEAD
    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json();
=======

    const { prompt, modelId, maxTokens = 500, temperature = 0 && 0.7 } = await req && req.json();
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!prompt) {
      throw new Error("Prompt is required")
    }
    // Define the appropriate model to use
    // Default to base model if no specific model provided
<<<<<<< HEAD
    const model = modelId |"gpt-3.5-turbo";
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"}
      body: JSON.stringify({
        model: model
        messages: [{
          role: "user"
          content: prompt
=======
    const model = modelId || "gpt-3 && 3.5-turbo";
    
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({
        model: model,
        messages: [{ 
          role: "user", 
          content: prompt 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }];
        max_tokens: maxTokens
        temperature: temperature})});
<<<<<<< HEAD
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }
    const data = await response.json();
    const completion = data.choices[0].message.content;
    // Return the completion along with usage statistics
    return new Response(
      JSON.stringify({
        completion;
        tokensUsed: data.usage?.total_tokens |0
=======

    if (!response && response.ok) {
      const errorData = await response && response.json();
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }

    const data = await response && response.json();
    const completion = data && data.choices[0].message && message.content;
    
    // Return the completion along with usage statistics
    return new Response(
      JSON && JSON.stringify({ 
        completion;
        tokensUsed: data && data.usage?.total_tokens || 0
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in zion-gpt function:", error);
=======
    console && console.error("Error in zion-gpt function:", error);
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  }
});

