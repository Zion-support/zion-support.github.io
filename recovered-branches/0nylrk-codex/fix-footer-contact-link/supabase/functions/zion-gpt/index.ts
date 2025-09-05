
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
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
        max_tokens: maxTokens,
        temperature: temperature})});

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
    );
  }
});
