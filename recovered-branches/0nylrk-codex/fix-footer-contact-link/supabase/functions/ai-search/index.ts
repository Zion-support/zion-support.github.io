

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { query} = await req.json();
    if (!query) {_return new Response(
        JSON.stringify({ error: "Query is required"}),
        {_status: 400, _headers: { ...corsHeaders, _"Content-Type": "application/json"} }
      );
    }

    const _openAiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) throw new Error("OPENAI_API_KEY is not set");

    const _configuration = new Configuration({_apiKey: openAiKey});
    const _openai = new OpenAIApi(configuration);

    const _prompt = `Interpret the following user search query and extract filters as JSON.\nQuery: "${_query}"\nReturn JSON with fields: type, skills, location, budget, availability. Use null if a value is not provided.`;

    const _completion = await openai.chat.completions.create({_model: "gpt-4o-mini", _messages: [{ role: "user", _content: prompt}],
      temperature: 0.1});

    const _responseText = completion.choices[0].message.content || "";
    let filters;
    try {_const _match = responseText.match(/\{[\s\S]*\}/);
      filters = match ? JSON.parse(match[0]) : JSON.parse(responseText);
    } catch (_) {_filters = { type: null, _skills: null, _location: null, _budget: null, _availability: null};
    }

    return new Response(
      JSON.stringify({_filters}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"} }
    );
  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"} }
    );
  }
});
