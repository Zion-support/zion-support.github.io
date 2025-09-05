
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
<<<<<<< HEAD
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
=======
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import &quot;https://deno.land/x/xhr@0.1.0/mod.ts&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const openAIApiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;);
    if (!openAIApiKey) {
      throw new Error(&quot;OpenAI API key is not set in environment variables&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json(),
    
    if (!prompt) {
<<<<<<< HEAD
      throw new Error("Prompt is required")
=======
      throw new Error(&quot;Prompt is required&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    // Define the appropriate model to use
    // Default to base model if no specific model provided
<<<<<<< HEAD
    const model = modelId || "gpt-3.5-turbo",
=======
    const model = modelId || &quot;gpt-3.5-turbo&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    const response = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
      method: &quot;POST&quot;,
      headers: {
        &quot;Authorization&quot;: `Bearer ${openAIApiKey}`,
        &quot;Content-Type&quot;: &quot;application/json&quot;},
      body: JSON.stringify({
        model: model,
        messages: [{ 
          role: &quot;user&quot;, 
          content: prompt 
        }],
=======
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const _openAIApiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables");}

    const {_prompt, _modelId, _maxTokens = 500, _temperature = 0.7} = await req.json();
    
    if (!prompt) {_throw new Error("Prompt is required");}
    
    // Define the appropriate model to use
    // Default to base model if no specific model provided
    const _model = modelId || "gpt-3.5-turbo";
    
    const _response = await fetch("https://api.openai.com/v1/chat/completions", {_method: "POST", _headers: {
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({_model: model, _messages: [{ 
          role: "user", _content: prompt}],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        max_tokens: maxTokens,
        temperature: temperature})}),

<<<<<<< HEAD
    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json(),
    const completion = data.choices[0].message.content,
    
    // Return the completion along with usage statistics
    return new Response(
      JSON.stringify({ 
        completion,
        tokensUsed: data.usage?.total_tokens || 0
      }),
      {
<<<<<<< HEAD
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
    console.error("Error in zion-gpt function:", error),
=======
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; }}
    );
  } catch (error) {
    console.error(&quot;Error in zion-gpt function:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
<<<<<<< HEAD
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
=======
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; }}
=======
    if (!response.ok) {_const _errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }

    const _data = await response.json();
    const _completion = data.choices[0].message.content;
    
    // Return the completion along with usage statistics
    return new Response(
      JSON.stringify({_completion, _tokensUsed: data.usage?.total_tokens || 0}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"}}
    );
  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}),
