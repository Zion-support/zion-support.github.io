
<<<<<<< HEAD
<<<<<<< HEAD
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';
;
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
;
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'};
;
interface TalentProfileData {;
  name:string;
  title:string;
  bio:string;
  skills:string[];
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1',;
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
;
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'};
;
interface TalentProfileData {;
<<<<<<< HEAD
  name:string,;
  title:string,;
  bio:string,;
  skills:string[],;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  name:string;
  title:string;
  bio:string;
  skills:string[];
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  location?:string;
}
;
interface EnhancedProfile {;
<<<<<<< HEAD
<<<<<<< HEAD
  summary:string;
  categorizedSkills:{;
    programming:string[];
    devops:string[];
    platforms:string[];
    softSkills:string[];
    other:string[];
  };
=======
  summary:string,;
=======
  summary:string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  categorizedSkills:{;
    programming:string[];
    devops:string[];
    platforms:string[];
    softSkills:string[];
    other:string[];
<<<<<<< HEAD
  },;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  };
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
<<<<<<< HEAD
<<<<<<< HEAD
    return new Response(null, { headers:corsHeaders });
  }
;
  try {;
    const { talentData } = await req.json() as { talentData:TalentProfileData };
    ;
    if (!talentData.bio || talentData.bio.length < 20) {;
      return new Response(;
        JSON.stringify({ error:"Bio must be at least 20 characters long" });
        { status:400, headers:{ ...corsHeaders, 'Content-Type':'application/json' } }
      );
=======
    return new Response(null, { headers:corsHeaders }),;
=======
    return new Response(null, { headers:corsHeaders });
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
;
  try {;
    const { talentData } = await req.json() as { talentData:TalentProfileData };
    ;
    if (!talentData.bio || talentData.bio.length < 20) {;
      return new Response(;
        JSON.stringify({ error:"Bio must be at least 20 characters long" });
        { status:400, headers:{ ...corsHeaders, 'Content-Type':'application/json' } }
<<<<<<< HEAD
      ),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      );
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
;
    // Create a request to OpenAI API;
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {;
<<<<<<< HEAD
<<<<<<< HEAD
      method:'POST';
      headers:{;
        'Authorization':`Bearer ${OPENAI_API_KEY}`;
        'Content-Type':'application/json'};
      body:JSON.stringify({;
        model:'gpt-4o-mini';
        messages:[;
          {;
            role:'system';
            content:`You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.`;
          };
          {;
            role:'user';
=======
      method:'POST',;
=======
      method:'POST';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      headers:{;
        'Authorization':`Bearer ${OPENAI_API_KEY}`;
        'Content-Type':'application/json'};
      body:JSON.stringify({;
        model:'gpt-4o-mini';
        messages:[;
          {;
            role:'system';
            content:`You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.`;
          };
          {;
<<<<<<< HEAD
            role:'user',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            role:'user';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            content:`Create a professional profile summary and categorize skills based on this information:;
            Name:${talentData.name}
            Title:${talentData.title}
            Bio:${talentData.bio}
            Skills:${talentData.skills.join()}
            Location:${talentData.location || 'Not specified'}
            ;
            Return the result as a JSON object with these keys:;
            {;
<<<<<<< HEAD
<<<<<<< HEAD
              "summary":"The professional summary text (100-150 words)";
              "categorizedSkills":{;
                "programming":["skill1", "skill2"];
                "devops":["skill1", "skill2"];
                "platforms":["skill1", "skill2"];
                "softSkills":["skill1", "skill2"];
=======
              "summary":"The professional summary text (100-150 words)",;
              "categorizedSkills":{;
                "programming":["skill1", "skill2"],;
                "devops":["skill1", "skill2"],;
                "platforms":["skill1", "skill2"],;
                "softSkills":["skill1", "skill2"],;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              "summary":"The professional summary text (100-150 words)";
              "categorizedSkills":{;
                "programming":["skill1", "skill2"];
                "devops":["skill1", "skill2"];
                "platforms":["skill1", "skill2"];
                "softSkills":["skill1", "skill2"];
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                "other":["skill1", "skill2"];
              }
            }
            ;
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`;
          }
<<<<<<< HEAD
<<<<<<< HEAD
        ];
        temperature:0.7;
        response_format:{ type:"json_object" }
      })});
;
    const openAIData = await openAIResponse.json();
    ;
    if (!openAIData.choices || openAIData.choices.length === 0) {;
      throw new Error("Failed to generate profile content");
    }
    ;
    // Extract the generated content from the response;
    const responseContent = openAIData.choices[0].message.content;
    ;
    // Parse the JSON response;
    let enhancedProfile:EnhancedProfile;
    try {;
      enhancedProfile = JSON.parse(responseContent);
    } catch (e) {;
      console.error("Error parsing OpenAI response:", e);
      throw new Error("Failed to parse the generated content");
    }
;
    return new Response(;
      JSON.stringify(enhancedProfile);
      { headers:{ ...corsHeaders, 'Content-Type':'application/json' } }
    );
;
  } catch (error) {;
    console.error("Error in talent-profile-enhancer function:", error);
    ;
    return new Response(;
      JSON.stringify({ error:error.message });
      { status:500, headers:{ ...corsHeaders, 'Content-Type':'application/json' } }
    );interface TalentProfileData {
=======
        ],;
        temperature:0.7,;
=======
        ];
        temperature:0.7;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        response_format:{ type:"json_object" }
      })});
;
    const openAIData = await openAIResponse.json();
    ;
    if (!openAIData.choices || openAIData.choices.length === 0) {;
      throw new Error("Failed to generate profile content");
    }
    ;
    // Extract the generated content from the response;
    const responseContent = openAIData.choices[0].message.content;
    ;
    // Parse the JSON response;
    let enhancedProfile:EnhancedProfile;
    try {;
      enhancedProfile = JSON.parse(responseContent);
    } catch (e) {;
      console.error("Error parsing OpenAI response:", e);
      throw new Error("Failed to parse the generated content");
    }
;
    return new Response(;
      JSON.stringify(enhancedProfile);
      { headers:{ ...corsHeaders, 'Content-Type':'application/json' } }
    );
;
  } catch (error) {;
    console.error("Error in talent-profile-enhancer function:", error);
    ;
    return new Response(;
      JSON.stringify({ error:error.message });
      { status:500, headers:{ ...corsHeaders, 'Content-Type':'application/json' } }
<<<<<<< HEAD
    ),;interface TalentProfileData {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    );interface TalentProfileData {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  name: string;
title: string;
bio: string;
skills: string[];
<<<<<<< HEAD
location?: string
=======
location?: string 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}interface EnhancedProfile {
  summary: string;
categorizedSkills: {
  programming: string[];
devops: string[];
platforms: string[];
softSkills: string[];
<<<<<<< HEAD
other: string[]
=======
other: string[] 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
  skills: string[];
import "https://deno.land/x/xhr@0.1.0/mod.ts";""
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";""
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';
;
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),;
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'},;
interface TalentProfileData {;
  name: string;,;
  title: string;,;
  bio: string;,;
  skills: string[];,;
  location?:string;
}
interface EnhancedProfile {;
  summary: string;,;
  categorizedSkills: {;,
  programming: string[];,;
    devops: string[];,;
    platforms: string[];,;
    softSkills: string[];,;
    other:string[];
  },;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, { headers: corsHeaders ;}),;
  try {;
    const { talentData } = await req.json() as { talentData: TalentProfileData ;},;
    if (!talentData.bio || talentData.bio.length < 20) {;
      return new Response(;)
        JSON.stringify({ error: "Bio must be at least 20 characters long" ;}),;""
        { status: 400;, headers: { ...corsHeaders;, 'Content-Type':'application/json' } }
      ),;
    // Create a request to OpenAI API;
    const openAIResponse = await fetch('https: //api.openai.com/v1/chat/completions';, {;
      method: 'POST';,;
      headers:{;
        'Authorization':`Bearer ${OPENAI_API_KEY}`,;
        'Content-Type':'application/json'},;
      body: JSON.stringify({;,
  model: 'gpt-4o-mini';,;
        messages:[;
          {;
            role: 'system';,;`;
            content: `You are an expert HR assistant. Based on the user's bio and experience;, write a professional and engaging 100150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.`;
            role: 'user';,;`;
            content: `Create a professional profile summary and categorize skills based on this information:;,
  Name: ${talentData.name;}
            Title: ${talentData.title;}
            Bio: ${talentData.bio;})
            Skills: ${talentData.skills.join();}
            Location: ${talentData.location || 'Not specified';}
            Return the result as a JSON object with these keys:;
              "summary":"The professional summary text (100-150 words)",;""
              "categorizedSkills":{;"]"
                "programming":["skill1", "skill2"],;""
                "devops":["skill1", "skill2"],;""
                "platforms":["skill1", "skill2"],;""
                "softSkills":["skill1", "skill2"],;""
                "other":["skill1", "skill2"];"
            ;`;
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`;
        ],;
        temperature: 0.7;,;"
        response_format: { type:"json_object" ;}"
      })}),;
    const openAIData = await openAIResponse.json(),;
    if (!openAIData.choices || openAIData.choices.length === 0) {;"
      throw new Error("Failed to generate profile content"),;"
    // Extract the generated content from the response;
    const responseContent = openAIData.choices[0].message.content,;
    // Parse the JSON response;
    let enhancedProfile: EnhancedProfile;,;
      enhancedProfile = JSON.parse(responseContent);
    } catch (e) {;"
      console.error("Error parsing OpenAI response: ";, e),;""
      throw new Error("Failed to parse the generated content"),;"
      JSON.stringify(enhancedProfile),;"
      { headers: { ...corsHeaders;, 'Content-Type':'application/json' } }
  } catch (error) {;
    console.error("Error in talent-profile-enhancer function: ";, error),;"
      JSON.stringify({ error: error.message ;}),;"
      { status: 500;, headers: { ...corsHeaders;, 'Content-Type':'application/json' } }
    ),;interface TalentProfileData {
  // TODO: Implement
  name: string;,
  title: string;
bio: string;,
  skills: string[];
location?: string;
}interface EnhancedProfile {
  // TODO: Implement
  summary: string;,
  categorizedSkills: {
  programming: string[];,
  devops: string[];
platforms: string[];,
  softSkills: string[];
other: string[] 

interface EnhancedProfile {
  // TODO: Implement
  summary: string;,
  categorizedSkills: {;,
  programming: string[];,
    devops: string[];,
    platforms: string[];,
    softSkills: string[];,
const _OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};
interface TalentProfileData {_name: string;,
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )    }

    // Create a request to OpenAI API
<<<<<<< HEAD

    try {
      enhancedProfile = JSON.parse(responseContent)
    } catch (e) {
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
    other: string[];
};
}
interface EnhancedProfile {_summary: string;,
    other: string[];};
pr-12325

serve(_async (req) => {_// Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders ;})

  try {
  // TODO: Implement
    const { talentData } = await req.json() as { talentData: TalentProfileData ;},
    
    if (!talentData.bio || talentData.bio.length < 20) {
      return new Response()
        JSON.stringify({ error: &quot;Bio must be at least 20 characters long&quot; }),
        { status: 400;, headers: { ...corsHeaders;, 'Content-Type': 'application/json' } }
      )    }

    // Create a request to OpenAI API;
    const _openAIResponse = await fetch('https: //api.openai.com/v1/chat/completions';, {_method: 'POST';, _headers: {`;
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'},
      body: JSON.stringify({_model: 'gpt-4o-mini';, _messages: [
          {`;
          {_role: 'user';, _content: `Create a professional profile summary and categorize skills based on this information:';,
  Name: ${talentData.name;}
            Title: ${talentData.title;}
            Bio: ${talentData.bio;})
            Skills: ${talentData.skills.join();}
            Location: ${talentData.location || 'Not specified';}
            Return the result as a JSON object with these keys: 
            {
              &quot;summary&quot;: &quot;The professional summary text (100-150 words)&quot;,
              &quot;categorizedSkills&quot;: {]
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
            `;
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`
        ],
        temperature: 0.7;,
        response_format: { type: "json_object" ;}"
      })}),      })});

    const openAIData = await openAIResponse.json(),
    
    if (!openAIData.choices || openAIData.choices.length === 0) {
      throw new Error("Failed to generate profile content")    }
    
    // Extract the generated content from the response
    const responseContent = openAIData.choices[0].message.content,
    
    // Parse the JSON response
    let enhancedProfile: EnhancedProfile,
    try {
      enhancedProfile = JSON.parse(responseContent)
    } catch (e) {
      console.error("Error parsing OpenAI response:", e),
      throw new Error("Failed to parse the generated content")    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

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
<<<<<<< HEAD
<<<<<<< HEAD
});}//Extract the generated content from the response const responseContent = openAIData.choices[0].message.content;
=======
}),;}//Extract the generated content from the response const responseContent = openAIData.choices[0].message.content;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
});}//Extract the generated content from the response const responseContent = openAIData.choices[0].message.content;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
//Parse the JSON response let enhancedProfile: EnhancedProfile;
try {
    if (!openAIData.choices || openAIData.choices.length === 0) {"
      throw new Error("Failed to generate profile content")    }"
    // Extract the generated content from the response;
    const responseContent = openAIData.choices[0].message.content,
    
    // Parse the JSON response;
    let enhancedProfile: EnhancedProfile;,
  // TODO: Implement
      enhancedProfile = JSON.parse(responseContent)
    } catch (e) {"
      console.error("Error parsing OpenAI response: ";, e),""
      throw new Error("Failed to parse the generated content")    }"
      JSON.stringify(enhancedProfile),"
      { headers: { ...corsHeaders;, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error("Error in talent-profile-enhancer function: ";, error),"
      JSON.stringify({ error: error.message ;}),"
      { status: 500;, headers: { ...corsHeaders;, 'Content-Type': 'application/json' } }
    const _openAIData = await openAIResponse.json();
    
    if (!openAIData.choices || openAIData.choices.length === 0) {_throw new Error("Failed to generate profile content");}"
    // Extract the generated content from the response;
    const _responseContent = openAIData.choices[0].message.content;
    
    // Parse the JSON response;
    let enhancedProfile: EnhancedProfile;"
    try {_enhancedProfile = JSON.parse(responseContent);} catch (e) {_throw new Error("Failed to parse the generated content");}"
      {_headers: { ...corsHeaders;, _'Content-Type': 'application/json'} }
    );

  } catch (error) {_return new Response()
      JSON.stringify({ error: error.message;}),
      {_status: 500;, _headers: { ...corsHeaders;, _'Content-Type': 'application/json'} }
}),;}//Extract the generated content from the response const responseContent = openAIData.choices[0].message.content;
//Parse the JSON response let enhancedProfile: EnhancedProfile;
  // TODO: Implement
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
  headers: {
  ...corsHeaders, 'Content-Type': 'application/json
}) 
}catch (error) {
  return new Response (JSON.stringify ({
  error: error.message;)
});
  status: 500;, headers: {
