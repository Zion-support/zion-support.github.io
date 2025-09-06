
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import "https://deno.land/x/xhr@0.1.0/mod.ts";
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
<<<<<<< HEAD
    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json();
=======
<<<<<<< HEAD
}

const {
      prompt,
      modelId,
      maxTokens = 500,
      temperature = 0.7,
    } = await req.json();

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json(),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    if (!prompt) {
      throw new Error("Prompt is required")
    }
    // Define the appropriate model to use
    // Default to base model if no specific model provided
<<<<<<< HEAD
    const model = modelId |"gpt-3.5-turbo";
=======
    const model = modelId || "gpt-3.5-turbo",
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
<<<<<<< HEAD
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"}
      body: JSON.stringify({
        model: model
        messages: [{
          role: "user"
          content: prompt
        }];
        max_tokens: maxTokens
        temperature: temperature})});
=======
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({
        model: model,
        messages: [{ 
          role: "user", 
          content: prompt 
        }],
        max_tokens: maxTokens,
        temperature: temperature})}),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }
<<<<<<< HEAD
    const data = await response.json();
    const completion = data.choices[0].message.content;
    // Return the completion along with usage statistics
    return new Response(
      JSON.stringify({
        completion;
        tokensUsed: data.usage?.total_tokens |0
      });
=======

    const data = await response.json(),
    const completion = data.choices[0].message.content,
    
    // Return the completion along with usage statistics
    return new Response(
      JSON.stringify({ 
        completion,
        tokensUsed: data.usage?.total_tokens || 0
      }),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in zion-gpt function:", error);
=======
    console.error("Error in zion-gpt function:", error),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
<<<<<<< HEAD
<<<<<<< HEAD
  }
});

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!openAIApiKey) {;
      throw new Error("OpenAI API key is not set in environment variables");
    }
;
    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json(),;
    if (!prompt) {;
      throw new Error("Prompt is required");
    }
;
    // Define the appropriate model to use;
    // Default to base model if no specific model provided;
    const model = modelId || "gpt-3.5-turbo",;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method: "POST",;
      headers: {;
        "Authorization": `Bearer ${openAIApiKey}`,;
        "Content-Type": "application/json"},;
      body: JSON.stringify({;
        model: model,;
        messages: [{;
          role: "user",;
          content: prompt;
        }],;
        max_tokens: maxTokens,;
        temperature: temperature})}),;
    if (!response.ok) {;
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }
;
    const data = await response.json(),;
    const completion = data.choices[0].message.content,;
    // Return the completion along with usage statistics;
    return new Response(;
      JSON.stringify({;
        completion,;
        tokensUsed: data.usage?.total_tokens || 0;
      }),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
  } catch (error) {;
    console.error("Error in zion-gpt function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
