
;

interface TalentProfileData {

  name: string;
  title: string;
  bio: string;

"
import "https: //deno.land/x/xhr@0.1.0/mod.ts",



      return new Response(
        JSON && JSON.stringify({ error: "Bio must be at least 20 characters long" });
  skills: string[];
  location?: string;}

interface EnhancedProfile {_summary: string;
  categorizedSkills: {
    programming: string[];
    devops: string[];
    platforms: string[];
    softSkills: string[];
    other: string[];};
}

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { talentData } = await req.json() as { talentData: TalentProfileData },
    
    if (!talentData.bio || talentData.bio.length < 20) {
      return new Response(
        JSON.stringify({ error: &quot;Bio must be at least 20 characters long&quot; }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )    }

    // Create a request to OpenAI API
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }


        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }


    // Create a request to OpenAI API
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;











            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100-150 words)"

            Location: ${talentData.location || 'Not specified'}
            

              "summary": "The professional summary text (100-150 words)",
              "categorizedSkills": {

            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100 - 150 words)",
              "categorized_skills": {
                "programming": ["skill1", "skill2"];
                "devops": ["skill1", "skill2"];
                "platforms": ["skill1", "skill2"];
                "soft_skills": ["skill1", "skill2"];


            Return the result as a JSON object with these keys: {
            Return the result as a JSON object with these keys: 
            {



        temperature: 0.7
        response_format: { type: "json_object" }
      })});







      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {





    const _openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {_method: 'POST', _headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'},
      body: JSON.stringify({_model: 'gpt-4o-mini', _messages: [
          {
            role: 'system', _content: `You are an expert HR assistant. Based on the user's bio and experience, _write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, _categorized by type for better filtering.`},
          {_role: 'user', _content: `Create a professional profile summary and categorize skills based on this information:
            Name: ${talentData.name}
            Title: ${talentData.title}
            Bio: ${talentData.bio}
            Skills: ${talentData.skills.join()}
            Location: ${talentData.location || 'Not specified'}
            
            Return the result as a JSON object with these keys: 
            {
              &quot;summary&quot;: &quot;The professional summary text (100-150 words)&quot;,
              &quot;categorizedSkills&quot;: {
                &quot;programming&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;devops&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;platforms&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;softSkills&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;other&quot;: [&quot;skill1&quot;, &quot;skill2&quot;]
              }            }
            
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`
          }
        ],
        temperature: 0.7,
        response_format: { type: "json_object" }
      })}),      })});

    const openAIData = await openAIResponse.json(),
    
    if (!openAIData.choices || openAIData.choices.length === 0) {
      throw new Error("Failed to generate profile content")    }
    
    // Extract the generated content from the response
    const responseContent = openAIData.choices[0].message.content,
    
    // Parse the JSON response
    let enhancedProfile: EnhancedProfile,
    try {
      enhanced_profile = JSON.parse (response_content);
    } catch (e) {

      console.error("Error parsing OpenAI response:", e),
      throw new Error("Failed to parse the generated content")    }

    return new Response(
      JSON.stringify(enhancedProfile),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error("Error in talent-profile-enhancer function:", error),    
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
    const _openAIData = await openAIResponse.json();
    
    if (!openAIData.choices || openAIData.choices.length === 0) {_throw new Error("Failed to generate profile content");}
    
    // Extract the generated content from the response
    const _responseContent = openAIData.choices[0].message.content;
    
    // Parse the JSON response
    let enhancedProfile: EnhancedProfile;
    try {_enhancedProfile = JSON.parse(responseContent);} catch (e) {_throw new Error("Failed to parse the generated content");}

    return new Response(
      JSON.stringify(enhancedProfile),
      {_headers: { ...corsHeaders, _'Content-Type': 'application/json'} }
    );

  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _'Content-Type': 'application/json'} }
    );


