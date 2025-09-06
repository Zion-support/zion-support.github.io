


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
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.7.1';
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.7.1',

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),

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
;
interface EnhancedProfile {;
  summary: string,;
  categorizedSkills: {;
    programming: string[],;
    devops: string[],;
    platforms: string[],;
    softSkills: string[],;
    other: string[];


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


        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


  try {
    const { talentData } = await req.json() as { talentData: TalentProfileData }
    if (!talentData.bio |talentData.bio.length < 20) {
      return new Response(


        JSON.stringify({ error: "Bio must be at least 20 characters long" }),




        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }






>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


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
            content: `You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.`
          }
          {
            role: 'user'
            content: `Create a professional profile summary and categorize skills based on this information:


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






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


            Name: ${talentData.name}
            Title: ${talentData.title}
            Bio: ${talentData.bio}
            Skills: ${talentData.skills.join()}

            Location: ${talentData.location |'Not specified'}
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100-150 words)"
            Location: ${talentData.location || 'Not specified'}
            





              "summary": "The professional summary text (100-150 words)",

              "categorizedSkills": {

                "programming": ["skill1", "skill2"];
                "devops": ["skill1", "skill2"];
                "platforms": ["skill1", "skill2"];
                "soft_skills": ["skill1", "skill2"];
                "other": ["skill1", "skill2"];
              }
            }

            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`;

          }
        ];

        temperature: 0.7
        response_format: { type: "json_object" }
      })});
        temperature: 0.7,
        response_format: { type: "json_object" }
      })}),


    const openAIData = await openAIResponse.json();
    if (!openAIData.choices |openAIData.choices.length === 0) {


    const responseContent = openAIData && openAIData.choices[0].message && message.content;
    

    // Parse the JSON response
    let enhancedProfile: EnhancedProfile
    try {
      enhancedProfile = JSON && JSON.parse(responseContent)
    } catch (e) {
      console && console.error("Error parsing OpenAI response:", e);
      throw new Error("Failed to parse the generated content")


    console && console.error("Error in talent-profile-enhancer function:", error);

    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return new Response(





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});

