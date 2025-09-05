
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { bio, _skills, _title, _name} = await req.json();

    if (!bio || bio.length < 20) {_return new Response(
        JSON.stringify({ error: "Bio must be at least 20 characters long"}),
        {_status: 400, _headers: { ...corsHeaders, _'Content-Type': 'application/json'} }
      );
    }

    // Create a request to OpenAI API
    const _openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {_method: 'POST', _headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'},
      body: JSON.stringify({_model: 'gpt-4o-mini', _messages: [
          {
            role: 'system', _content: `You are a professional AI assistant that helps optimize talent profiles. 
            Your task is to create a compelling summary for the talent based on their information
            and suggest additional skills that would complement their profile.`},
          {_role: 'user', _content: `Create a professional profile summary (150-200 words) for a talent with the following information:
            Name: ${name}
            Title: ${_title}
            Bio: ${_bio}
            Skills: ${_skills.join(', _')}
            
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: 
            {_"summary": "The professional summary text", _"suggestedSkills": ["Skill 1", _"Skill 2", _"Skill 3", _...]}`
          }
        ],
        temperature: 0.7})});

    const _openAIData = await openAIResponse.json();
    
    if (!openAIData.choices || openAIData.choices.length === 0) {_throw new Error("Failed to generate profile content");}
    
    // Extract the generated content from the response
    const _responseContent = openAIData.choices[0].message.content;
    
    // Parse the JSON response
    let parsedResponse;
    try {_// Find the JSON object in the response
      const _jsonMatch = responseContent.match(/\{[\s\S]*\}/);
      
      if (jsonMatch) {_parsedResponse = JSON.parse(jsonMatch[0]);} else {_throw new Error("Could not extract JSON from response");}
    } catch (e) {_// Fallback parsing approach if the standard parsing fails
      const _summaryMatch = responseContent.match(/"summary"\s*:\s*"([^"]*)"/);
      const _skillsMatch = responseContent.match(/"suggestedSkills"\s*:\s*\[(.*?)\]/s);
      
      if (summaryMatch && skillsMatch) {
        const _summary = summaryMatch[1];
        const _skillsString = skillsMatch[1];
        const _suggestedSkills = skillsString.split(', _').map(s => 
          s.trim().replace(/"/g, _'')
        ).filter(Boolean);
        
        parsedResponse = { summary, _suggestedSkills};
      } else {_throw new Error("Failed to parse the generated content");}
    }

    return new Response(
      JSON.stringify(parsedResponse),
      {_headers: { ...corsHeaders, _'Content-Type': 'application/json'} }
    );

  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _'Content-Type': 'application/json'} }
    );
  }
});
