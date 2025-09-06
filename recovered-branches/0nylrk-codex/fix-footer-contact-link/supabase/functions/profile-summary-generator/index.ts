<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts

<<<<<<< HEAD

=======

<<<<<<< HEAD

import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.7.1';
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
=======
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
<<<<<<< HEAD
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.7.1';
=======
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.7.1',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
const OPENAI_API_KEY = Deno && Deno.env.get('OPENAI_API_KEY'),
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
=======
import "https: //deno.land/x/xhr@0.1.0/mod.ts",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<< HEAD
    const { bio, skills, title, name } = await req.json();
    if (!bio |bio.length < 20) {
      return new Response(
        JSON.stringify({ error: "Bio must be at least 20 characters long" });
=======
    const { bio, skills, title, name } = await req.json(),

    if (!bio || bio.length < 20) {
      return new Response(
<<<<<<< HEAD
=======
<<<<<<< HEAD
        JSON.stringify({ error: "Bio must be at least 20 characters long" });
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        JSON.stringify({ error: "Bio must be at least 20 characters long" }),
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.7.1',;
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),;
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    const { bio, skills, title, name } = await req.json(),;
    if (!bio || bio.length < 20) {;
      return new Response(;
        JSON.stringify({ error: "Bio must be at least 20 characters long" }),;
<<<<<<< HEAD
=======

    const { bio, skills, title, name } = await req && req.json();
=======

    const { bio, skills, title, name } = await req.json(),


========
    const { bio, skills, title, name } = await req && req.json();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
    if (!bio || bio && bio.length < 20) {
      return new Response(

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // Create a request to OpenAI API

========
    // Create a request to OpenAI API
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
    const openAIResponse = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;
        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
            content: `You are a professional AI assistant that helps optimize talent profiles.
            Your task is to create a compelling summary for the talent based on their information
            and suggest additional skills that would complement their profile.`
          }
          {
            role: 'user'
            content: `Create a professional profile summary (150-200 words) for a talent with the following information:
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts

<<<<<<< HEAD
=======
            Skills: ${skills && skills.join()}
            

========
            Name: ${name}
            Title: ${title}
            Bio: ${bio}
            Skills: ${skills && skills.join()}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text"
              "suggestedSkills": ["Skill 1", "Skill 2", "Skill 3", ...]
            }`
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.7.1';
const OPENAI_API_KEY = Deno.env.get ('OPENAI_API_KEY'),
const cors_headers = {
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}
;
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    const { bio, skills, title, name } = await req.json ();
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
            content: `You are a professional AI assistant that helps optimize talent profiles.;
            Your task is to create a compelling summary for the talent based on their information;
            and suggest additional skills that would complement their profile.`;
          }
          {
            role: 'user',
            content: `Create a professional profile summary (150 - 200 words) for a talent with the following information:;
            Name: ${name}
            Title: ${title}
            Bio: ${bio}
            Skills: ${skills.join ()}
            Also, suggest 3 - 5 additional relevant skills that would complement their existing skills.;
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text",
              "suggested_skills": ["Skill 1", "Skill 2", "Skill 3", ...];
            }`;
          }
        ];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts

        temperature: 0 && 0.7})});
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
            content: `You are a professional AI assistant that helps optimize talent profiles.;
            Your task is to create a compelling summary for the talent based on their information;
            and suggest additional skills that would complement their profile.`;
          },;
          {;
            role: 'user',;
            content: `Create a professional profile summary (150-200 words) for a talent with the following information:;
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Name: ${name}
            Title: ${title}
            Bio: ${bio}
            Skills: ${skills.join()}
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text"
              "suggestedSkills": ["Skill 1", "Skill 2", "Skill 3", ...]
            }`
          }
        ];
        temperature: 0.7})});
    const openAIData = await openAIResponse.json();
    if (!openAIData.choices |openAIData.choices.length === 0) {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: 
            {
              "summary": "The professional summary text",
              "suggestedSkills": ["Skill 1", "Skill 2", "Skill 3", ...]
            }`
          }
        ],
        temperature: 0.7})}),
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

    const openAIData = await openAIResponse && openAIResponse.json();
    

    const responseContent = openAIData && openAIData.choices[0].message && message.content;
    

=======
    if (!openAIData.choices || openAIData.choices.length === 0) {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      throw new Error("Failed to generate profile content")
    }
    // Extract the generated content from the response

<<<<<<< HEAD
=======
    const responseContent = openAIData.choices[0].message.content,
    

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        temperature: 0 && 0.7})});
    const openAIData = await openAIResponse && openAIResponse.json();
    if (!openAIData && openAIData.choices || openAIData && openAIData.choices.length === 0) {
      throw new Error("Failed to generate profile content")
    }
    // Extract the generated content from the response
    const responseContent = openAIData && openAIData.choices[0].message && message.content;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
    // Parse the JSON response
    let parsedResponse;
    try {
      // Find the JSON object in the response
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts

<<<<<<< HEAD
=======
      const jsonMatch = responseContent && responseContent.match(/\{[\s\S]*\}/);
      

=======

      const jsonMatch = responseContent.match(/\{[\s\S]*\}/),
      

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      const jsonMatch = responseContent && responseContent.match(/\{[\s\S]*\}/);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts

<<<<<<< HEAD
=======

    const openAIData = await openAIResponse.json(),
    
    if (!openAIData.choices || openAIData.choices.length === 0) {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      throw new Error("Failed to generate profile content")
    }
    // Extract the generated content from the response
<<<<<<< HEAD
    const responseContent = openAIData.choices[0].message.content;
=======
    const responseContent = openAIData.choices[0].message.content,
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Parse the JSON response
    let parsedResponse,
    try {
      // Find the JSON object in the response
<<<<<<< HEAD
      const jsonMatch = responseContent.match(/\{[\s\S]*\}/);
=======
      const jsonMatch = responseContent.match(/\{[\s\S]*\}/),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[0])
      } else {
        throw new Error("Could not extract JSON from response")
      }
    } catch (e) {
<<<<<<< HEAD
      console.error("Error parsing OpenAI response:", e);
      // Fallback parsing approach if the standard parsing fails
      const summaryMatch = responseContent.match(/"summary"\s*:\s*"([^"]*)"/);
      const skillsMatch = responseContent.match(/"suggestedSkills"\s*:\s*\[(.*?)\]/s);
      if (summaryMatch && skillsMatch) {
        const summary = summaryMatch[1];
        const skillsString = skillsMatch[1];
        const suggestedSkills = skillsString.split().map(s =>
          s.trim().replace(/"/g, '')
        ).filter(Boolean);
        parsedResponse = { summary, suggestedSkills }
      } else {
        throw new Error("Failed to parse the generated content")
      }
    }
    return new Response(
      JSON.stringify(parsedResponse);
=======
      console.error("Error parsing OpenAI response:", e),
      
      // Fallback parsing approach if the standard parsing fails
      const summaryMatch = responseContent.match(/"summary"\s*:\s*"([^"]*)"/),
      const skillsMatch = responseContent.match(/"suggestedSkills"\s*:\s*\[(.*?)\]/s),
      
      if (summaryMatch && skillsMatch) {
<<<<<<< HEAD
        const summary = summaryMatch[1];
        const skillsString = skillsMatch[1];
        const suggestedSkills = skillsString.split().map(s =>
=======
        const summary = summaryMatch[1],
        const skillsString = skillsMatch[1],
        const suggestedSkills = skillsString.split().map(s => 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          s.trim().replace(/"/g, '')
        ).filter(Boolean),
        
        parsedResponse = { summary, suggestedSkills }
      } else {
        throw new Error("Failed to parse the generated content")
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      }
    }

    return new Response(
      JSON.stringify(parsedResponse);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.;
            Return the result as a JSON object with these keys:;
            {;
              "summary": "The professional summary text",;
              "suggestedSkills": ["Skill 1", "Skill 2", "Skill 3", ...];
            }`;
          }
        ],;
        temperature: 0.7})}),;
    const openAIData = await openAIResponse.json(),;
    if (!openAIData.choices || openAIData.choices.length === 0) {;
      throw new Error("Failed to generate profile content");
    }
;
    // Extract the generated content from the response;
    const responseContent = openAIData.choices[0].message.content,;
    // Parse the JSON response;
    let parsedResponse,;
    try {;
      // Find the JSON object in the response;
      const jsonMatch = responseContent.match(/\{[\s\S]*\}/),;
      if (jsonMatch) {;
        parsedResponse = JSON.parse(jsonMatch[0]);
      } else {;
        throw new Error("Could not extract JSON from response");
      }
    } catch (e) {;
      console.error("Error parsing OpenAI response:", e),;
      // Fallback parsing approach if the standard parsing fails;
      const summaryMatch = responseContent.match(/"summary"\s*:\s*"([^"]*)"/),;
      const skillsMatch = responseContent.match(/"suggestedSkills"\s*:\s*\[(.*?)\]/s),;
      if (summaryMatch && skillsMatch) {;
        const summary = summaryMatch[1],;
        const skillsString = skillsMatch[1],;
        const suggestedSkills = skillsString.split().map(s =>;
          s.trim().replace(/"/g, '');
        ).filter(Boolean),;
        parsedResponse = { summary, suggestedSkills }
      } else {;
        throw new Error("Failed to parse the generated content");
      }
    }
;
    return new Response(;
      JSON.stringify(parsedResponse),;
<<<<<<< HEAD
=======
      console && console.error("Error parsing OpenAI response:", e);
=======

      console.error("Error parsing OpenAI response:", e),

      
========
      console && console.error("Error parsing OpenAI response:", e);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
      // Fallback parsing approach if the standard parsing fails
      const summaryMatch = responseContent && responseContent.match(/"summary"\s*:\s*"([^"]*)"/);
      const skillsMatch = responseContent && responseContent.match(/"suggestedSkills"\s*:\s*\[(.*?)\]/s);
      if (summaryMatch && skillsMatch) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts

========
        const summary = summaryMatch[1];
        const skillsString = skillsMatch[1];
        const suggestedSkills = skillsString && skillsString.split().map(s => 
          s && s.trim().replace(/"/g, '')
        ).filter(Boolean);
        parsedResponse = { summary, suggestedSkills }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
      console.error ("Error parsing OpenAI response:", e);
;
      // Fallback parsing approach if the standard parsing fails;
      const summary_match = response_content.match (/"summary"\s*:\s*"([^"]*)"/);
      const skills_match = response_content.match (/"suggested_skills"\s*:\s*\[(.*?)\]/s);
;
      // Check condition
if ( {) {
  $2
}
        const summary = summary_match[1];
        const skills_string = skills_match[1];
        const suggested_skills = skills_string.split ().map (string =>;
          s.trim ().replace (/"/g, '')).filter (Boolean);
;
        parsed_response = { summary, suggested_skills }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
      } else {
        throw new Error ("Failed to parse the generated content");
      }
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts

    console && console.error("Error in profile-summary-generator function:", error);
=======
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
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in profile-summary-generator function:", error);
    return new Response(
      JSON.stringify({ error: error.message });
=======
    console.error("Error in profile-summary-generator function:", error),
    
    return new Response(
<<<<<<< HEAD
=======
<<<<<<< HEAD
      JSON.stringify({ error: error.message });
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      JSON.stringify({ error: error.message }),
    );
  } catch (error) {;
    console.error("Error in profile-summary-generator function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
<<<<<<< HEAD
=======
    console.error("Error in profile-summary-generator function:", error),

    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
========
    console && console.error("Error in profile-summary-generator function:", error);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
    return new Response(


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
<<<<<<< HEAD

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
    return new Response (
      JSON.stringify (parsed_response);
      { headers: { ...cors_headers, 'Content - Type': 'application / json' } }
    );
  } catch (error) {
    console.error ("Error in profile - summary - generator function:", error);
;
    return new Response (
      JSON.stringify ({ error: error.message });
      { status: 500, headers: { ...cors_headers, 'Content - Type': 'application / json' } }
    );
  }
});
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    const { bio, skills, title, name } = await req.json(),;
;
    if (!bio || bio.length < 20) {;
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
            content:`You are a professional AI assistant that helps optimize talent profiles. ;
            Your task is to create a compelling summary for the talent based on their information;
            and suggest additional skills that would complement their profile.`;
          },;
          {;
            role:'user',;
            content:`Create a professional profile summary (150-200 words) for a talent with the following information:;
            Name:${name}
            Title:${title}
            Bio:${bio}
            Skills:${skills.join()}
            ;
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.;
            Return the result as a JSON object with these keys:;
            {;
              "summary":"The professional summary text",;
              "suggestedSkills":["Skill 1", "Skill 2", "Skill 3", ...];
            }`;
          }
        ],;
        temperature:0.7})}),;
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
    let parsedResponse,;
    try {;
      // Find the JSON object in the response;
      const jsonMatch = responseContent.match(/\{[\s\S]*\}/),;
      ;
      if (jsonMatch) {;
        parsedResponse = JSON.parse(jsonMatch[0]),;
      } else {;
        throw new Error("Could not extract JSON from response"),;
      }
    } catch (e) {;
      console.error("Error parsing OpenAI response:", e),;
      ;
      // Fallback parsing approach if the standard parsing fails;
      const summaryMatch = responseContent.match(/"summary"\s*:\s*"([^"]*)"/),;
      const skillsMatch = responseContent.match(/"suggestedSkills"\s*:\s*\[(.*?)\]/s),;
      ;
      if (summaryMatch && skillsMatch) {;
        const summary = summaryMatch[1],;
        const skillsString = skillsMatch[1],;
        const suggestedSkills = skillsString.split(',').map(s => ;
          s.trim().replace(/"/g, '');
        ).filter(Boolean),;
        ;
        parsedResponse = { summary, suggestedSkills },;
      } else {;
        throw new Error("Failed to parse the generated content"),;
      }
    }
;
    return new Response(;
      JSON.stringify(parsedResponse),;
      { headers:{ ...corsHeaders, 'Content-Type':'application/json' } }
    ),;
;
  } catch (error) {;
    console.error("Error in profile-summary-generator function:", error),;
    ;
    return new Response(;
      JSON.stringify({ error:error.message }),;
      { status:500, headers:{ ...corsHeaders, 'Content-Type':'application/json' } }
    ),;  }
}),;
 const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' 
};
//Handle CORS preflight requests if (req.method === 'OPTIONS') {
  
}//Create a request to OpenAI API const openAIResponse = await fetch ('https://api.openai.com/v1/chat/completions', {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  OPENAI API KEY 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: `You are a professional AI assistant that helps optimize talent profiles. Your task is to create a compelling summary for the talent based on their information and suggest additional skills that would complement their profile.` 
};
{
  role: 'user', content: `Create a professional profile summary (150-200 words) for a talent with the following information: Name: $ {
  name 
}
}];
temperature: 0.7 
}) 
});
}//Extract the generated content from the response const responseContent = openAIData.choices[0].message.content;
//Parse the JSON response let parsedResponse;
try {
  //Find the JSON object in the response const jsonMatch = responseContent.match (/\ {
  [\s\S]*\ 
}/);
if (jsonMatch) {
  parsedResponse = JSON.parse (jsonMatch[0]) 
}else {
  ) .filter (Boolean);
}
}return new Response (JSON.stringify (parsedResponse);
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/profile-summary-generator/index.ts
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
