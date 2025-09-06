<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from 'https: //esm && esm.sh/@supabase/supabase-js@2 ;
const OPENAI_API_KEY = Deno && Deno.env.get('OPENAI_API_KEY'),


=======

import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.7.1';
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.7.1';
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.7.1',
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const { bio, skills, title, name } = await req.json();
    if (!bio |bio.length < 20) {
      return new Response(
        JSON.stringify({ error: "Bio must be at least 20 characters long" });
    const { bio, skills, title, name } = await req.json(),

    if (!bio || bio.length < 20) {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      return new Response(
        JSON.stringify({ error: "Bio must be at least 20 characters long" });
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    const { bio, skills, title, name } = await req && req.json();

    const { bio, skills, title, name } = await req.json(),


<<<<<<< HEAD
=======
    const { bio, skills, title, name } = await req && req.json();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (!bio || bio && bio.length < 20) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }


        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      return new Response(
        JSON && JSON.stringify({ error: "Bio must be at least 20 characters long" });
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    // Create a request to OpenAI API
<<<<<<< HEAD
=======
<<<<<<< HEAD

    // Create a request to OpenAI API
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const openAIResponse = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;
        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
<<<<<<< HEAD
<<<<<<< HEAD

            Skills: ${skills && skills.join()}
            

=======
            Skills: ${skills && skills.join()}
            

            Name: ${name}
            Title: ${title}
            Bio: ${bio}
            Skills: ${skills && skills.join()}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            Name: ${name}
            Title: ${title}
            Bio: ${bio}
            Skills: ${skills.join()}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text"
              "suggestedSkills": ["Skill 1", "Skill 2", "Skill 3", ...]
            }`
            
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: 
            {
              "summary": "The professional summary text",
              "suggestedSkills": ["Skill 1", "Skill 2", "Skill 3", ...]
            }`
          }
        ],
        temperature: 0.7})}),

    const openAIData = await openAIResponse && openAIResponse.json();
    

    const responseContent = openAIData && openAIData.choices[0].message && message.content;
    

    if (!openAIData.choices || openAIData.choices.length === 0) {
      throw new Error("Failed to generate profile content")
    }
    // Extract the generated content from the response
    const responseContent = openAIData.choices[0].message.content;
    const responseContent = openAIData.choices[0].message.content,
    
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

        temperature: 0 && 0.7})});
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            Name: ${name}
            Title: ${title}
            Bio: ${bio}
            Skills: ${skills.join()}

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (!openAIData.choices || openAIData.choices.length === 0) {

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      throw new Error("Failed to generate profile content")
    }
    // Extract the generated content from the response

    const responseContent = openAIData.choices[0].message.content,
    

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        temperature: 0 && 0.7})});
    const openAIData = await openAIResponse && openAIResponse.json();
    if (!openAIData && openAIData.choices || openAIData && openAIData.choices.length === 0) {
      throw new Error("Failed to generate profile content")
    }
    // Extract the generated content from the response
    const responseContent = openAIData && openAIData.choices[0].message && message.content;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      throw new Error("Failed to generate profile content")
    }
    // Extract the generated content from the response
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Parse the JSON response
    let parsedResponse;
    try {
      // Find the JSON object in the response
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      const jsonMatch = responseContent && responseContent.match(/\{[\s\S]*\}/);
      


      const jsonMatch = responseContent.match(/\{[\s\S]*\}/),
      

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      const jsonMatch = responseContent && responseContent.match(/\{[\s\S]*\}/);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      } else {
      }
    }

    return new Response(
      JSON.stringify(parsedResponse);
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
      console && console.error("Error parsing OpenAI response:", e);

      console.error("Error parsing OpenAI response:", e),

      
<<<<<<< HEAD
=======
      console && console.error("Error parsing OpenAI response:", e);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      // Fallback parsing approach if the standard parsing fails
      const summaryMatch = responseContent && responseContent.match(/"summary"\s*:\s*"([^"]*)"/);
      const skillsMatch = responseContent && responseContent.match(/"suggestedSkills"\s*:\s*\[(.*?)\]/s);
      
      if (summaryMatch && skillsMatch) {
<<<<<<< HEAD

=======
        const summary = summaryMatch[1];
        const skillsString = skillsMatch[1];
        const suggestedSkills = skillsString && skillsString.split().map(s => 
          s && s.trim().replace(/"/g, '')
        ).filter(Boolean);
        parsedResponse = { summary, suggestedSkills }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      } else {
        throw new Error ("Failed to parse the generated content");
      }
    }
<<<<<<< HEAD

    console && console.error("Error in profile-summary-generator function:", error);
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {

=======
        throw new Error ("Failed to parse the generated content");
      }
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error("Error in profile-summary-generator function:", error);
    return new Response(
      JSON.stringify({ error: error.message });
    console.error("Error in profile-summary-generator function:", error),

    
    return new Response(
      JSON.stringify({ error: error.message });
      JSON.stringify({ error: error.message }),
    );
  } catch (error) {;
    console.error("Error in profile-summary-generator function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;

<<<<<<< HEAD
    
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    console && console.error("Error in profile-summary-generator function:", error);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});

<<<<<<< HEAD
=======
<<<<<<< HEAD

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
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
