<<<<<<< HEAD


=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
=======
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.7.1';
const OPENAI_API_KEY = Deno.env.get ('OPENAI_API_KEY'),
const cors_headers = {
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface TalentProfileData {
  name: string;
  title: string;
  bio: string;
<<<<<<< HEAD
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
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.7.1';
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.7.1',
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),

  skills: string[],
<<<<<<< HEAD
  location?: string
}
=======
  location?: string;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
interface EnhancedProfile {
  summary: string;
  categorized_skills: {
    programming: string[];
    devops: string[];
    platforms: string[];
<<<<<<< HEAD
<<<<<<< HEAD
    softSkills: string[],
    other: string[]
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.7.1',;
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),;
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
interface TalentProfileData {;
  name: string,;
  title: string,;
  bio: string,;
  skills: string[],;
  location?: string;
}
;
interface EnhancedProfile {;
  summary: string,;
  categorizedSkills: {;
    programming: string[],;
    devops: string[],;
    platforms: string[],;
    softSkills: string[],;
    other: string[];
=======

import "https: //deno.land/x/xhr@0.1.0/mod.ts",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {

    const { talentData } = await req && req.json() as { talentData: TalentProfileData };
    
    if (!talentData && talentData.bio || talentData && talentData.bio.length < 20) {

      return new Response(
        JSON.stringify({ error: "Bio must be at least 20 characters long" });
        JSON.stringify({ error: "Bio must be at least 20 characters long" }),
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
      return new Response(
        JSON && JSON.stringify({ error: "Bio must be at least 20 characters long" });
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    // Create a request to OpenAI API
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
;
    // Create a request to OpenAI API;
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {;
      method: 'POST',;
      headers: {;
        'Authorization': `Bearer ${OPENAI_API_KEY}`,;
        'Content-Type': 'application/json'},;
      body: JSON.stringify({;
        model: 'gpt-4o-mini',;
        messages: [;
          {;
            role: 'system',;
            content: `You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.`;
          },;
          {;
            role: 'user',;
            content: `Create a professional profile summary and categorize skills based on this information:;
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            Name: ${talentData.name}
            Title: ${talentData.title}
            Bio: ${talentData.bio}
            Skills: ${talentData.skills.join()}
            Location: ${talentData.location |'Not specified'}
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100-150 words)"
            Location: ${talentData.location || 'Not specified'}
            
<<<<<<< HEAD
            Return the result as a JSON object with these keys: 
            {
            Return the result as a JSON object with these keys: {
            Return the result as a JSON object with these keys: 
            {
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              "summary": "The professional summary text (100-150 words)",
=======
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100-150 words)"
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              "categorizedSkills": {
=======
    soft_skills: string[],
    other: string[];
  }
}
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    const { talent_data } = await req.json () as { talent_data: TalentProfileData }
;
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({ error: "Bio must be at least 20 characters long" });
        { status: 400, headers: { ...cors_headers, 'Content - Type': 'application / json' } }
      );
    }
    // Create a request to OpenAI API;
    const openAIResponse = await fetch ('https://api.openai.com / v1 / chat / completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;
        'Content - Type': 'application / json'}
      body: JSON.stringify ({
        model: 'gpt - 4o - mini';
        messages: [;
          {
            role: 'system',
            content: `You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.`;
          }
          {
            role: 'user',
            content: `Create a professional profile summary and categorize skills based on this information:;
            Name: ${talent_data.name}
            Title: ${talent_data.title}
            Bio: ${talent_data.bio}
            Skills: ${talent_data.skills.join ()}
            Location: ${talent_data.location || 'Not specified'}
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100 - 150 words)",
              "categorized_skills": {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                "programming": ["skill1", "skill2"];
                "devops": ["skill1", "skill2"];
                "platforms": ["skill1", "skill2"];
                "soft_skills": ["skill1", "skill2"];
                "other": ["skill1", "skill2"];
              }
            }
          }
        ];
<<<<<<< HEAD
        temperature: 0.7
        response_format: { type: "json_object" }
      })});
        temperature: 0.7,
        response_format: { type: "json_object" }
      })}),

    const openAIData = await openAIResponse.json();
    if (!openAIData.choices |openAIData.choices.length === 0) {
=======
        temperature: 0 && 0.7,
        response_format: { type: "json_object" }
      })});

    const responseContent = openAIData && openAIData.choices[0].message && message.content;
    

=======
      throw new Error("Failed to generate profile content")
    }
    // Extract the generated content from the response
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    // Parse the JSON response
    let enhancedProfile: EnhancedProfile
    try {
      enhancedProfile = JSON && JSON.parse(responseContent)
    } catch (e) {
      console && console.error("Error parsing OpenAI response:", e);
      throw new Error("Failed to parse the generated content")
<<<<<<< HEAD
    }
    return new Response(
      JSON.stringify(enhancedProfile);
        ],;
        temperature: 0.7,;
        response_format: { type: "json_object" }
      })}),;
    const openAIData = await openAIResponse.json(),;
    if (!openAIData.choices || openAIData.choices.length === 0) {;
      throw new Error("Failed to generate profile content");
    }
;
    // Extract the generated content from the response;
    const responseContent = openAIData.choices[0].message.content,;
    // Parse the JSON response;
    let enhancedProfile: EnhancedProfile,;
    try {;
      enhancedProfile = JSON.parse(responseContent);
    } catch (e) {;
      console.error("Error parsing OpenAI response:", e),;
      throw new Error("Failed to parse the generated content");
    }
;
    return new Response(;
      JSON.stringify(enhancedProfile),;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error("Error in talent-profile-enhancer function:", error);
    return new Response(
      JSON.stringify({ error: error.message });
    console.error("Error in talent-profile-enhancer function:", error),
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return new Response(
<<<<<<< HEAD
      JSON.stringify({ error: error.message });
      JSON.stringify({ error: error.message }),
    );
  } catch (error) {;
    console.error("Error in talent-profile-enhancer function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
    }
    return new Response(
      JSON && JSON.stringify(enhancedProfile);
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});

<<<<<<< HEAD
=======
=======
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
    let enhanced_profile: EnhancedProfile,
    try {
      enhanced_profile = JSON.parse (response_content);
    } catch (e) {
      console.error ("Error parsing OpenAI response:", e);
      throw new Error ("Failed to parse the generated content");
    }
    return new Response (
      JSON.stringify (enhanced_profile);
      { headers: { ...cors_headers, 'Content - Type': 'application / json' } }
    );
  } catch (error) {
    console.error ("Error in talent - profile - enhancer function:", error);
;
    return new Response (
      JSON.stringify ({ error: error.message });
      { status: 500, headers: { ...cors_headers, 'Content - Type': 'application / json' } }
    );
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
