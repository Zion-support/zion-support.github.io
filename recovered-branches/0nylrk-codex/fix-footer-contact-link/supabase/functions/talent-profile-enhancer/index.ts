<<<<<<< HEAD
<<<<<<< HEAD

import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
const OPENAI_API_KEY = Deno && Deno.env.get('OPENAI_API_KEY'),


<<<<<<< HEAD
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.7.1';
const OPENAI_API_KEY = Deno.env.get ('OPENAI_API_KEY'),
const cors_headers = {
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface TalentProfileData {
<<<<<<< HEAD
=======

import "https://deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1',;
;
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),;
;
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'},;
;
interface TalentProfileData {;
  name:string,;
  title:string,;
  bio:string,;
  skills:string[],;
  location?:string;
}
;
interface EnhancedProfile {;
  summary:string,;
  categorizedSkills:{;
    programming:string[],;
    devops:string[],;
    platforms:string[],;
    softSkills:string[],;
    other:string[];
  },;
}
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    const { talentData } = await req.json() as { talentData:TalentProfileData },;
    ;
    if (!talentData.bio || talentData.bio.length < 20) {;
      return new Response(;
        JSON.stringify({ error:"Bio must be at least 20 characters long" }),;
        { status:400, headers:{ ...corsHeaders, 'Content-Type':'application/json' } }
      ),;
    }
;
    // Create a request to OpenAI API;
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {;
      method:'POST',;
      headers:{;
        'Authorization':`Bearer ${OPENAI_API_KEY}`,;
        'Content-Type':'application/json'},;
      body:JSON.stringify({;
        model:'gpt-4o-mini',;
        messages:[;
          {;
            role:'system',;
            content:`You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.`;
          },;
          {;
            role:'user',;
            content:`Create a professional profile summary and categorize skills based on this information:;
            Name:${talentData.name}
            Title:${talentData.title}
            Bio:${talentData.bio}
            Skills:${talentData.skills.join()}
            Location:${talentData.location || 'Not specified'}
            ;
            Return the result as a JSON object with these keys:;
            {;
              "summary":"The professional summary text (100-150 words)",;
              "categorizedSkills":{;
                "programming":["skill1", "skill2"],;
                "devops":["skill1", "skill2"],;
                "platforms":["skill1", "skill2"],;
                "softSkills":["skill1", "skill2"],;
                "other":["skill1", "skill2"];
              }
            }
            ;
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`;
          }
        ],;
        temperature:0.7,;
        response_format:{ type:"json_object" }
      })}),;
;
    const openAIData = await openAIResponse.json(),;
    ;
    if (!openAIData.choices || openAIData.choices.length === 0) {;
      throw new Error("Failed to generate profile content"),;
    }
    ;
    // Extract the generated content from the response;
    const responseContent = openAIData.choices[0].message.content,;
    ;
    // Parse the JSON response;
    let enhancedProfile:EnhancedProfile,;
    try {;
      enhancedProfile = JSON.parse(responseContent);
    } catch (e) {;
      console.error("Error parsing OpenAI response:", e),;
      throw new Error("Failed to parse the generated content"),;
    }
;
    return new Response(;
      JSON.stringify(enhancedProfile),;
      { headers:{ ...corsHeaders, 'Content-Type':'application/json' } }
    ),;
;
  } catch (error) {;
    console.error("Error in talent-profile-enhancer function:", error),;
    ;
    return new Response(;
      JSON.stringify({ error:error.message }),;
      { status:500, headers:{ ...corsHeaders, 'Content-Type':'application/json' } }
    ),;interface TalentProfileData {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  name: string;
  title: string;
  bio: string;


import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.7.1';
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface TalentProfileData {
  name: string;
  title: string;
  bio: string;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  skills: string[],
  location?: string

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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

}
interface EnhancedProfile {
  summary: string;
  categorized_skills: {
    programming: string[];
    devops: string[];
    platforms: string[];
<<<<<<< HEAD
    softSkills: string[],
    other: string[]
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
;
interface EnhancedProfile {;
  summary: string,;
  categorizedSkills: {;
    programming: string[],;
    devops: string[],;
    platforms: string[],;
    softSkills: string[],;
    other: string[];
<<<<<<< HEAD
=======
<<<<<<< HEAD
  location?: string;

}
interface EnhancedProfile {
  summary: string;
  categorized_skills: {
    programming: string[];
    devops: string[];
    platforms: string[];
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import "https: //deno.land/x/xhr@0.1.0/mod.ts",

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
}
serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
<<<<<<< HEAD
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




  try {

    const { talentData } = await req && req.json() as { talentData: TalentProfileData };
<<<<<<< HEAD
    
    if (!talentData && talentData.bio || talentData && talentData.bio.length < 20) {
=======
    if (!talentData && talentData.bio || talentData && talentData.bio.length < 20) {

        JSON.stringify({ error: "Bio must be at least 20 characters long" }),


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

      return new Response(
        JSON && JSON.stringify({ error: "Bio must be at least 20 characters long" });
<<<<<<< HEAD
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Create a request to OpenAI API
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  try {
    const { talentData } = await req.json() as { talentData: TalentProfileData }
    if (!talentData.bio |talentData.bio.length < 20) {
      return new Response(
        JSON.stringify({ error: "Bio must be at least 20 characters long" });
        JSON.stringify({ error: "Bio must be at least 20 characters long" }),
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    // Create a request to OpenAI API
<<<<<<< HEAD
<<<<<<< HEAD

    const openAIResponse = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;
        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({

=======
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;
        'Content-Type': 'application/json'}
      body: JSON.stringify({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            Name: ${talentData.name}
            Title: ${talentData.title}
            Bio: ${talentData.bio}
            Skills: ${talentData.skills.join()}
<<<<<<< HEAD

              "summary": "The professional summary text (100-150 words)",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              "summary": "The professional summary text (100-150 words)",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              "categorizedSkills": {
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            Name: ${talentData && talentData.name}
            Title: ${talentData && talentData.title}
            Bio: ${talentData && talentData.bio}
            Skills: ${talentData && talentData.skills.join()}
            Location: ${talentData && talentData.location || 'Not specified'}
<<<<<<< HEAD
            

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              "summary": "The professional summary text (100-150 words)",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100-150 words)"
              "categorizedSkills": {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                "programming": ["skill1", "skill2"];
                "devops": ["skill1", "skill2"];
                "platforms": ["skill1", "skill2"];
                "soft_skills": ["skill1", "skill2"];
                "other": ["skill1", "skill2"];
              }
            }
<<<<<<< HEAD

<<<<<<< HEAD
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`;

          }
        ];
<<<<<<< HEAD
=======
=======


=======

            Location: ${talentData.location |'Not specified'}
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100-150 words)"
            Location: ${talentData.location || 'Not specified'}
            
            Return the result as a JSON object with these keys: 
            {
            Return the result as a JSON object with these keys: {
            Return the result as a JSON object with these keys: 
            {
              "summary": "The professional summary text (100-150 words)",
              "categorizedSkills": {
                "programming": ["skill1", "skill2"],
                "devops": ["skill1", "skill2"],
                "platforms": ["skill1", "skill2"],
                "softSkills": ["skill1", "skill2"],
                "other": ["skill1", "skill2"]
              }
            }
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`
          }
        ];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        temperature: 0.7
        response_format: { type: "json_object" }
      })});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        temperature: 0.7,
        response_format: { type: "json_object" }
      })}),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD


    const openAIData = await openAIResponse.json();
    if (!openAIData.choices |openAIData.choices.length === 0) {
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        temperature: 0 && 0.7,
        response_format: { type: "json_object" }
      })});

    const responseContent = openAIData && openAIData.choices[0].message && message.content;
    

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Parse the JSON response
    let enhancedProfile: EnhancedProfile
    try {
      enhancedProfile = JSON && JSON.parse(responseContent)
    } catch (e) {
<<<<<<< HEAD
      console && console.error("Error parsing OpenAI response:", e);
      throw new Error("Failed to parse the generated content")

    console && console.error("Error in talent-profile-enhancer function:", error);

<<<<<<< HEAD
=======
    const openAIData = await openAIResponse.json();
    if (!openAIData.choices |openAIData.choices.length === 0) {
      throw new Error("Failed to generate profile content")
    }
    // Extract the generated content from the response
    const responseContent = openAIData.choices[0].message.content;
    // Parse the JSON response
    let enhancedProfile: EnhancedProfile
    try {
      enhancedProfile = JSON.parse(responseContent)
    } catch (e) {
      console.error("Error parsing OpenAI response:", e),
      throw new Error("Failed to parse the generated content")
    }
    return new Response(
      JSON.stringify(enhancedProfile);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error("Error in talent-profile-enhancer function:", error);
    return new Response(
      JSON.stringify({ error: error.message });
    console.error("Error in talent-profile-enhancer function:", error),
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    
    return new Response(
      JSON.stringify({ error: error.message });
      JSON.stringify({ error: error.message }),
    );
  } catch (error) {;
    console.error("Error in talent-profile-enhancer function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    console.error("Error in talent-profile-enhancer function:", error),
    
    return new Response(


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});
=======

<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`;
          }
        ];
        temperature: 0 && 0.7,
        response_format: { type: "json_object" }
      })});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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

=======



    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return new Response(
      JSON && JSON.stringify(enhancedProfile);
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});
<<<<<<< HEAD
{
  status: 500, headers: {
  ...corsHeaders, 'Content-Type': 'application/json' 
}
}) 
}
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
