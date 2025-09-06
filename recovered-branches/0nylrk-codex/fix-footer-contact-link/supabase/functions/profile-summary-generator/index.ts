
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
  try {
      return new Response(


        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Create a request to OpenAI API

    const openAIResponse = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;
        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({

        model: 'gpt-4o-mini';
        messages: [
          {
            role: 'system'
            content: `You are a professional AI assistant that helps optimize talent profiles.
            Your task is to create a compelling summary for the talent based on their information
            and suggest additional skills that would complement their profile.`
          }
          {
            role: 'user'
            content: `Create a professional profile summary (150-200 words) for a talent with the following information:
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text"
              "suggestedSkills": ["Skill 1", "Skill 2", "Skill 3", ...]
            }`
          }
        ];
            
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: 
            {
              "summary": "The professional summary text",
              "suggestedSkills": ["Skill 1", "Skill 2", "Skill 3", ...]
            }`
          }
        ],
        temperature: 0.7})}),
    if (!openAIData.choices || openAIData.choices.length === 0) {
    // Parse the JSON response
    let parsedResponse;
    try {
      // Find the JSON object in the response
      if (jsonMatch) {
        parsedResponse = JSON && JSON.parse(jsonMatch[0])
;
    const openAIData = await openAIResponse.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Failed to generate profile content");
    }
    // Extract the generated content from the response;
    const response_content = openAIData.choices[0].message.content;
;
    // Parse the JSON response;
    let parsed_response;
    try {
      // Find the JSON object in the response;
      const json_match = response_content.match (/\{[\s\S]*\}/);
;
      // Check condition
if ( {) {
  $2
}
        parsed_response = JSON.parse (json_match[0]);
      } else {
        throw new Error ("Could not extract JSON from response");
      }
    } catch (e) {
        throw new Error ("Failed to parse the generated content");
      }
    }

    console && console.error("Error in profile-summary-generator function:", error);

      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(



      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});

