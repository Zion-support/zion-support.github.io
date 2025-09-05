

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { title, _keyFeatures, _targetAudience} = await req.json();

    if (!title) {_return new Response(
        JSON.stringify({ 
          error: "Missing required field: title"}),
        {_status: 400, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
        }
      );
    }

    const _configuration = new Configuration({_apiKey: Deno.env.get('OPENAI_API_KEY')});
    const _openai = new OpenAIApi(configuration);

    const _prompt = `Create a professional and detailed service description for the following service:
    
Title: ${_title}
Key Features: ${_keyFeatures || "Not specified"}
Target Audience: ${_targetAudience || "General users"}

The description should:
1. Be approximately 200-300 words
2. Highlight the key benefits and unique selling points
3. Use professional language suitable for a marketplace listing
4. Speak directly to the target audience
5. Include a compelling opening and closing statement`;

    const _completion = await openai.chat.completions.create({_model: "gpt-4o-mini", _messages: [{ role: "user", _content: prompt}],
      temperature: 0.7});

    const _generatedDescription = completion.choices[0].message.content;
    
    return new Response(
      JSON.stringify({_description: generatedDescription}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    );
  } catch (error) {_return new Response(
      JSON.stringify({ 
        error: "Failed to generate service description", _details: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    );
  }
});
