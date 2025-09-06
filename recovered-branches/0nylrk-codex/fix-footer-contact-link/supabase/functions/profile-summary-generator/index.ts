
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
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

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
        JSON.stringify({ error: "Bio must be at least 20 characters long" });
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
<<<<<<< HEAD

    // Create a request to OpenAI API
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;
        'Content-Type': 'application/json'}
      body: JSON.stringify({
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
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            Name: ${name}
            Title: ${title}
            Bio: ${bio}
            Skills: ${skills.join()}
<<<<<<< HEAD
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
            
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: 
            {
              "summary": "The professional summary text",
              "suggestedSkills": ["Skill 1", "Skill 2", "Skill 3", ...]
            }`
          }
        ],
        temperature: 0.7})}),

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
          s.trim().replace(/"/g, '')
        ).filter(Boolean),
        
        parsedResponse = { summary, suggestedSkills }
      } else {
        throw new Error("Failed to parse the generated content")
<<<<<<< HEAD
      }
    }

    return new Response(
      JSON.stringify(parsedResponse);
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
      JSON.stringify({ error: error.message });
=======
      JSON.stringify({ error: error.message }),
    );
  } catch (error) {;
    console.error("Error in profile-summary-generator function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
