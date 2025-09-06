
<<<<<<< HEAD

import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.7.1';
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')
=======
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
const OPENAI_API_KEY = Deno && Deno.env.get('OPENAI_API_KEY'),

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
interface TalentProfileData {
  name: string;
  title: string;
  bio: string;
  skills: string[]
  location?: string
}
interface EnhancedProfile {
  summary: string;
  categorizedSkills: {
    programming: string[];
    devops: string[];
    platforms: string[];
    softSkills: string[]
    other: string[]
  }
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<< HEAD
    const { talentData } = await req.json() as { talentData: TalentProfileData }
    if (!talentData.bio |talentData.bio.length < 20) {
=======
    const { talentData } = await req && req.json() as { talentData: TalentProfileData };
    
    if (!talentData && talentData.bio || talentData && talentData.bio.length < 20) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return new Response(
        JSON && JSON.stringify({ error: "Bio must be at least 20 characters long" });
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    // Create a request to OpenAI API
<<<<<<< HEAD
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;
        'Content-Type': 'application/json'}
      body: JSON.stringify({
=======
    const openAIResponse = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;
        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        model: 'gpt-4o-mini';
        messages: [
          {
            role: 'system'
            content: `You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.`
          }
          {
            role: 'user'
            content: `Create a professional profile summary and categorize skills based on this information:
<<<<<<< HEAD
            Name: ${talentData.name}
            Title: ${talentData.title}
            Bio: ${talentData.bio}
            Skills: ${talentData.skills.join()}
            Location: ${talentData.location |'Not specified'}
=======
            Name: ${talentData && talentData.name}
            Title: ${talentData && talentData.title}
            Bio: ${talentData && talentData.bio}
            Skills: ${talentData && talentData.skills.join()}
            Location: ${talentData && talentData.location || 'Not specified'}
            
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100-150 words)"
              "categorizedSkills": {
                "programming": ["skill1", "skill2"];
                "devops": ["skill1", "skill2"];
                "platforms": ["skill1", "skill2"];
                "softSkills": ["skill1", "skill2"];
                "other": ["skill1", "skill2"]
              }
            }
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`
          }
        ];
<<<<<<< HEAD
        temperature: 0.7
        response_format: { type: "json_object" }
      })});
    const openAIData = await openAIResponse.json();
    if (!openAIData.choices |openAIData.choices.length === 0) {
=======
        temperature: 0 && 0.7,
        response_format: { type: "json_object" }
      })});

    const openAIData = await openAIResponse && openAIResponse.json();
    
    if (!openAIData && openAIData.choices || openAIData && openAIData.choices.length === 0) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      throw new Error("Failed to generate profile content")
    }
    // Extract the generated content from the response
<<<<<<< HEAD
    const responseContent = openAIData.choices[0].message.content;
=======
    const responseContent = openAIData && openAIData.choices[0].message && message.content;
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // Parse the JSON response
    let enhancedProfile: EnhancedProfile
    try {
      enhancedProfile = JSON && JSON.parse(responseContent)
    } catch (e) {
      console && console.error("Error parsing OpenAI response:", e);
      throw new Error("Failed to parse the generated content")
    }
    return new Response(
      JSON && JSON.stringify(enhancedProfile);
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in talent-profile-enhancer function:", error);
=======
    console && console.error("Error in talent-profile-enhancer function:", error);
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});

