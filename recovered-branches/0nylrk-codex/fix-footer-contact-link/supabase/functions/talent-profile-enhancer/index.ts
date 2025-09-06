<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts

<<<<<<< HEAD

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
const OPENAI_API_KEY = Deno && Deno.env.get('OPENAI_API_KEY'),
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.7.1';
const OPENAI_API_KEY = Deno.env.get ('OPENAI_API_KEY'),
const cors_headers = {
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}
;
interface TalentProfileData {
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  name: string;
title: string;
bio: string;
skills: string[];
location?: string 
}interface EnhancedProfile {
  summary: string;
categorizedSkills: {
  programming: string[];
devops: string[];
platforms: string[];
softSkills: string[];
other: string[] 
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
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};

interface TalentProfileData {_name: string;
  title: string;
  bio: string;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
  skills: string[],
<<<<<<< HEAD
  location?: string

=======


import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.7.1';
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')
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
  summary: string;
  categorizedSkills: {
    programming: string[];
    devops: string[];
    platforms: string[];
    softSkills: string[],
    other: string[]
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  location?: string;

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
}
interface EnhancedProfile {
  summary: string;
  categorized_skills: {
    programming: string[];
    devops: string[];
    platforms: string[];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts

import "https: //deno.land/x/xhr@0.1.0/mod.ts",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
}
serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  try {

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
    const { talentData } = await req && req.json() as { talentData: TalentProfileData };
    if (!talentData && talentData.bio || talentData && talentData.bio.length < 20) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts

      return new Response(

<<<<<<< HEAD
=======

        JSON.stringify({ error: "Bio must be at least 20 characters long" }),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // Create a request to OpenAI API

========
      return new Response(
        JSON && JSON.stringify({ error: "Bio must be at least 20 characters long" });
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )    }

    // Create a request to OpenAI API
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
    const openAIResponse = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;
        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
=======
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { talentData } = await req.json() as { talentData: TalentProfileData }
    if (!talentData.bio |talentData.bio.length < 20) {
      return new Response(
        JSON.stringify({ error: "Bio must be at least 20 characters long" });
        JSON.stringify({ error: "Bio must be at least 20 characters long" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Create a request to OpenAI API
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;
        'Content-Type': 'application/json'}
      body: JSON.stringify({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            Name: ${talentData.name}
            Title: ${talentData.title}
            Bio: ${talentData.bio}
            Skills: ${talentData.skills.join()}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
              "summary": "The professional summary text (100-150 words)",

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
            Name: ${talentData && talentData.name}
            Title: ${talentData && talentData.title}
            Bio: ${talentData && talentData.bio}
            Skills: ${talentData && talentData.skills.join()}
            Location: ${talentData && talentData.location || 'Not specified'}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
            

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100-150 words)"
=======

            Location: ${talentData.location || 'Not specified'}
            

              "summary": "The professional summary text (100-150 words)",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
                "programming": ["skill1", "skill2"];
                "devops": ["skill1", "skill2"];
                "platforms": ["skill1", "skill2"];
                "soft_skills": ["skill1", "skill2"];
                "other": ["skill1", "skill2"];
              }
            }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts

            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`;

          }
        ];
<<<<<<< HEAD

=======


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
        temperature: 0.7
        response_format: { type: "json_object" }
      })});
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        temperature: 0.7,
        response_format: { type: "json_object" }
      })}),

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    const openAIData = await openAIResponse.json();
    if (!openAIData.choices |openAIData.choices.length === 0) {
=======
        temperature: 0 && 0.7,
        response_format: { type: "json_object" }
      })});

    const responseContent = openAIData && openAIData.choices[0].message && message.content;
    

    // Parse the JSON response
    let enhancedProfile: EnhancedProfile
    try {
      enhancedProfile = JSON && JSON.parse(responseContent)
    } catch (e) {
      console && console.error("Error parsing OpenAI response:", e);
      throw new Error("Failed to parse the generated content")

<<<<<<< HEAD
=======
    console && console.error("Error in talent-profile-enhancer function:", error);
=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error("Error in talent-profile-enhancer function:", error);
    return new Response(
      JSON.stringify({ error: error.message });
    console.error("Error in talent-profile-enhancer function:", error),
    
    return new Response(
      JSON.stringify({ error: error.message });
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      JSON.stringify({ error: error.message }),
    );
  } catch (error) {;
    console.error("Error in talent-profile-enhancer function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.error("Error in talent-profile-enhancer function:", error),
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return new Response(


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});

<<<<<<< HEAD
=======
<<<<<<< HEAD


========
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`;
          }
        ];
        temperature: 0 && 0.7,
        response_format: { type: "json_object" }
      })});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    try {
      enhanced_profile = JSON.parse (response_content);
    } catch (e) {
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
  }
}),;}//Extract the generated content from the response const responseContent = openAIData.choices[0].message.content;
//Parse the JSON response let enhancedProfile: EnhancedProfile;
try {
  enhancedProfile = JSON.parse (responseContent) 
}catch (e) {
  
}return new Response (JSON.stringify (enhancedProfile);
{
  headers: {
  ...corsHeaders, 'Content-Type': 'application/json' 
}
}) 
}catch (error) {
  return new Response (JSON.stringify ({
  error: error.message 
});
{
  status: 500, headers: {
  ...corsHeaders, 'Content-Type': 'application/json' 
}
}) 
}
});
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/talent-profile-enhancer/index.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
