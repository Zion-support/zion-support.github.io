

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.7.1';
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.7.1',
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const { bio, skills, title, name } = await req.json();
    if (!bio |bio.length < 20) {
      return new Response(
        JSON.stringify({ error: "Bio must be at least 20 characters long" });
    const { bio, skills, title, name } = await req.json(),


    if (!bio || bio && bio.length < 20) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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



            Name: ${name}
            Title: ${title}
            Bio: ${bio}
            Skills: ${skills.join()}
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
            
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: 
            {
              "summary": "The professional summary text",
              "suggestedSkills": ["Skill 1", "Skill 2", "Skill 3", ...]
            }`
          }
        ],
        temperature: 0.7})}),
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

    const openAIData = await openAIResponse && openAIResponse.json();
    

    const responseContent = openAIData && openAIData.choices[0].message && message.content;
    

=======
    if (!openAIData.choices || openAIData.choices.length === 0) {
      throw new Error("Failed to generate profile content")
    }
    // Extract the generated content from the response
    const responseContent = openAIData.choices[0].message.content;
    const responseContent = openAIData.choices[0].message.content,
    
    // Parse the JSON response
    let parsedResponse;
    try {
      // Find the JSON object in the response
      const jsonMatch = responseContent.match(/\{[\s\S]*\}/);
      const jsonMatch = responseContent.match(/\{[\s\S]*\}/),
      
      if (jsonMatch) {
        parsedResponse = JSON && JSON.parse(jsonMatch[0])
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      } else {
        throw new Error ("Could not extract JSON from response");
      }
    } catch (e) {
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
      console.error("Error parsing OpenAI response:", e),

      
      // Fallback parsing approach if the standard parsing fails
      const summaryMatch = responseContent && responseContent.match(/"summary"\s*:\s*"([^"]*)"/);
      const skillsMatch = responseContent && responseContent.match(/"suggestedSkills"\s*:\s*\[(.*?)\]/s);
      
      if (summaryMatch && skillsMatch) {
        const summary = summaryMatch[1];
        const skillsString = skillsMatch[1];
        const suggestedSkills = skillsString.split().map(s =>
        const summary = summaryMatch[1],
        const skillsString = skillsMatch[1],
        const suggestedSkills = skillsString.split().map(s => 
          s.trim().replace(/"/g, '')
        ).filter(Boolean),
        
        parsedResponse = { summary, suggestedSkills }
      } else {
        throw new Error ("Failed to parse the generated content");
      }
    }

    console && console.error("Error in profile-summary-generator function:", error);
=======

      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error("Error in profile-summary-generator function:", error);
    return new Response(
      JSON.stringify({ error: error.message });
    console.error("Error in profile-summary-generator function:", error),

    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return new Response(



      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});

