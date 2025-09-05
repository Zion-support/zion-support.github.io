
<<<<<<< HEAD
<<<<<<< HEAD
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.7.1',
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),
=======
import &quot;https://deno.land/x/xhr@0.1.0/mod.ts&quot;;
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

interface TalentProfileData {
  name: string,
  title: string,
  bio: string,
  skills: string[],
  location?: string
}

interface EnhancedProfile {
  summary: string,
  categorizedSkills: {
    programming: string[],
    devops: string[],
    platforms: string[],
    softSkills: string[],
    other: string[]
  }
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};

interface TalentProfileData {_name: string;
  title: string;
  bio: string;
  skills: string[];
  location?: string;}

interface EnhancedProfile {_summary: string;
  categorizedSkills: {
    programming: string[];
    devops: string[];
    platforms: string[];
    softSkills: string[];
    other: string[];};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
<<<<<<< HEAD
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { talentData } = await req.json() as { talentData: TalentProfileData },
    
    if (!talentData.bio || talentData.bio.length < 20) {
      return new Response(
        JSON.stringify({ error: &quot;Bio must be at least 20 characters long&quot; }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
=======
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { talentData} = await req.json() as {_talentData: TalentProfileData};
    
    if (!talentData.bio || talentData.bio.length < 20) {_return new Response(
        JSON.stringify({ error: "Bio must be at least 20 characters long"}),
        {_status: 400, _headers: { ...corsHeaders, _'Content-Type': 'application/json'} }
      );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    // Create a request to OpenAI API
    const _openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {_method: 'POST', _headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'},
      body: JSON.stringify({_model: 'gpt-4o-mini', _messages: [
          {
            role: 'system', _content: `You are an expert HR assistant. Based on the user's bio and experience, _write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, _categorized by type for better filtering.`},
          {_role: 'user', _content: `Create a professional profile summary and categorize skills based on this information:
            Name: ${talentData.name}
<<<<<<< HEAD
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
              }
=======
            Title: ${_talentData.title}
            Bio: ${_talentData.bio}
            Skills: ${_talentData.skills.join(', _')}
            Location: ${_talentData.location || 'Not specified'}
            
            Return the result as a JSON object with these keys: 
            {_"summary": "The professional summary text (100-150 words)", _"categorizedSkills": {
                "programming": ["skill1", _"skill2"], _"devops": ["skill1", _"skill2"], _"platforms": ["skill1", _"skill2"], _"softSkills": ["skill1", _"skill2"], _"other": ["skill1", _"skill2"]}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            }
            
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`
          }
        ],
        temperature: 0.7,
<<<<<<< HEAD
<<<<<<< HEAD
        response_format: { type: "json_object" }
      })}),
=======
        response_format: { type: &quot;json_object&quot; }
=======
        response_format: {_type: "json_object"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      })});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
    const openAIData = await openAIResponse.json(),
    
    if (!openAIData.choices || openAIData.choices.length === 0) {
<<<<<<< HEAD
      throw new Error("Failed to generate profile content")
=======
      throw new Error(&quot;Failed to generate profile content&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    // Extract the generated content from the response
    const responseContent = openAIData.choices[0].message.content,
    
    // Parse the JSON response
    let enhancedProfile: EnhancedProfile,
    try {
      enhancedProfile = JSON.parse(responseContent)
    } catch (e) {
<<<<<<< HEAD
      console.error("Error parsing OpenAI response:", e),
      throw new Error("Failed to parse the generated content")
=======
      console.error(&quot;Error parsing OpenAI response:&quot;, e);
      throw new Error(&quot;Failed to parse the generated content&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    return new Response(
      JSON.stringify(enhancedProfile),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
<<<<<<< HEAD
    console.error("Error in talent-profile-enhancer function:", error),
=======
    console.error(&quot;Error in talent-profile-enhancer function:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),
