

interface ServiceProfileData {_name: string;
  title: string;
  bio: string;
  services?: string[];
  location: string;}

serve(_async (req) => {_try {
    // CORS headers
    const _headers = {
      "Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type", _"Content-Type": "application/json"};

    // Handle CORS preflight request
    if (req.method === "OPTIONS") {_return new Response(null, _{ headers, _status: 204});
    }

    const _reqData = await req.json();
    const _providerData = reqData.providerData as ServiceProfileData;
    
    // Validate input
    if (!providerData || !providerData.bio) {_return new Response(
        JSON.stringify({
          error: "Missing required service provider data"}),
        {_headers, _status: 400}
      );
    }

    // Get OpenAI API key from environment
    const _apiKey = Deno.env.get("OPENAI_API_KEY");
    if (!apiKey) {_return new Response(
        JSON.stringify({
          error: "OpenAI API key not configured"}),
        {_headers, _status: 500}
      );
    }

    const _prompt = `
    You are an expert in creating professional service profiles. Based on the following information about a service provider, create:
    1. A concise yet compelling professional summary (max 250 words)
    2. A list of 5-10 specific services they could offer based on their description

    Service Provider Name: ${_providerData.name}
    Business/Service Title: ${_providerData.title}
    Location: ${_providerData.location}
    Current Bio: ${_providerData.bio}
    ${_providerData.services && providerData.services.length > 0 
      ? `Current Services: ${providerData.services.join(", _")}`
      : "No services listed yet."}
    
    Focus on highlighting their unique value proposition, expertise, and professionalism.
    Only respond with JSON in this exact format:
    {_"summary": "Professional summary goes here...", _"services": ["Service 1", _"Service 2", _"Service 3", _...]}
    `;

    const _response = await fetch("https://api.openai.com/v1/chat/completions", {_method: "POST", _headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({_model: "gpt-4", _messages: [
          {
            role: "system", _content: "You are an expert at creating professional service descriptions for marketplaces."},
          {_role: "user", _content: prompt}],
        temperature: 0.7,
        max_tokens: 800})});

    const _responseData = await response.json();
    
    if (!response.ok) {_return new Response(
        JSON.stringify({
          error: "Failed to generate enhanced profile content", _details: responseData}),
        {_headers, _status: 500}
      );
    }

    try {_const _content = responseData.choices[0].message.content;
      const _parsedContent = JSON.parse(content);
      
      return new Response(
        JSON.stringify({
          summary: parsedContent.summary, _services: parsedContent.services}),
        {_headers, _status: 200}
      );
    } catch (error) {_return new Response(
        JSON.stringify({
          error: "Failed to parse AI response", _raw: responseData.choices[0]?.message?.content}),
        {_headers, _status: 500}
      );
    }
  } catch (error) {_return new Response(
      JSON.stringify({
        error: "Internal server error"}),
      {_headers: {
          "Content-Type": "application/json", _"Access-Control-Allow-Origin": "*"}, 
        status: 500 
      }
    );
  }
});
