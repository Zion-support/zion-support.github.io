
<<<<<<< HEAD

=======
const corsHeaders = {

  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",';
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,'
import {create_client} from 'https: //esm.sh/@supabase / supabase - js@2.7.1';'
>>>>>>> origin/cursor/delete-old-data-records-6bba
const OPENAI_API_KEY = Deno.env.get ('OPENAI_API_KEY'),
const cors_headers = {'
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}

<<<<<<< HEAD
;

interface TalentProfileData {

  name: string;
  title: string;
  bio: string;
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba



  location?: string;
<<<<<<< HEAD
=======
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
"
import "https: //deno.land/x/xhr@0.1.0/mod.ts""
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"';
import {createClient} from 'https: //esm.sh/@supabase/supabase-js@2.7.1';'
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')
const corsHeaders = {'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}

interface TalentProfileData {

  name: string;
  title: string;
  bio: string;

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),;
const corsHeaders = {;'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
interface TalentProfileData {;
  name: string,;
  title: string,;
  bio: string,;
  skills: string[],;
  location?: string;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
interface EnhancedProfile {
  summary: string;
  categorized_skills: {
    programming: string[];
    devops: string[];
    platforms: string[];

<<<<<<< HEAD

"
import "https: //deno.land/x/xhr@0.1.0/mod.ts",


=======
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

  location?: string;

}
interface EnhancedProfile {
  summary: string;
  categorized_skills: {
    programming: string[];
    devops: string[];
    platforms: string[];
  }
}
serve(async (req) => {
  // Handle CORS preflight requests
  }
}

  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }


  try {

    const { talentData } = await req && req.json() as { talentData: TalentProfileData };
>>>>>>> origin/cursor/delete-old-data-records-6bba

        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

      return new Response(
        JSON && JSON.stringify({ error: "Bio must be at least 20 characters long" });

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

    // Create a request to OpenAI API
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

<<<<<<< HEAD

      return new Response(
        JSON && JSON.stringify({ error: "Bio must be at least 20 characters long" });
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

    // Create a request to OpenAI API
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  try {
    const { talentData } = await req.json() as { talentData: TalentProfileData }
    if (!talentData.bio |talentData.bio.length < 20) {
      return new Response(
        JSON.stringify({ error: "Bio must be at least 20 characters long" });
        JSON.stringify({ error: "Bio must be at least 20 characters long" }),

<<<<<<< HEAD
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }


    // Create a request to OpenAI API
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        model: 'gpt-4o-mini';
        messages: []
          {'
            role: 'system''
            content: `You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.`
          }
          {'
            role: 'user'`
            content: `Create a professional profile summary and categorize skills based on this information:
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
    // Create a request to OpenAI API;'
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {;'
      method: 'POST',;
      headers: {;'`
        'Authorization': `Bearer ${OPENAI_API_KEY}`,;'
        'Content-Type': 'application/json'},;
      body: JSON.stringify({;'
        model: 'gpt-4o-mini',;
        messages: [;
          {;'
            role: 'system',;'`
            content: `You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.`;
          },;
          {;'
            role: 'user',;`

            content: `Create a professional profile summary and categorize skills based on this information:;


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            Name: ${talentData.name}
            Title: ${talentData.title}
            Bio: ${talentData.bio}
            Skills: ${talentData.skills.join()}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            Name: ${talentData && talentData.name}

            Title: ${talentData && talentData.title}
            Bio: ${talentData && talentData.bio}
            Skills: ${talentData && talentData.skills.join()}'
            Location: ${talentData && talentData.location || 'Not specified'}

<<<<<<< HEAD
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100-150 words)"

            Location: ${talentData.location || 'Not specified'}
            

              "summary": "The professional summary text (100-150 words)",
              "categorizedSkills": {

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    soft_skills: string[],
    other: string[];
  }
}
serve (async (req) => {}
  // Handle CORS preflight requests;
  // Check condition;
if ( {) {}
  $2;
}
    return new Response (null, { headers: cors_headers });
  }
  try {}
    const { talent_data } = await req.json () as { talent_data: TalentProfileData }
;
    // Check condition;
if ( {) {}
  $2;
}
      return new Response ("
        JSON.stringify ({ error: "Bio must be at least 20 characters long" });'
        { status: 400, headers: { ...cors_headers, 'Content - Type': 'application / json' } });
    }
    // Create a request to OpenAI API;'
    const openAIResponse = await fetch ('https://api.openai.com / v1 / chat / completions', {'
      method: 'POST',
      headers: {'`
        'Authorization': `Bearer ${OPENAI_API_KEY}`;'
        'Content - Type': 'application / json'}
      body: JSON.stringify ({'
        model: 'gpt - 4o - mini';
        messages: [;
          {'
            role: 'system','`
            content: `You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.`;
          }
          {'
            role: 'user',`
            content: `Create a professional profile summary and categorize skills based on this information:;
            Name: ${talent_data.name}
            Title: ${talent_data.title}
            Bio: ${talent_data.bio}
            Skills: ${talent_data.skills.join ()}'
            Location: ${talent_data.location || 'Not specified'}

<<<<<<< HEAD
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100 - 150 words)",
              "categorized_skills": {
                "programming": ["skill1", "skill2"];
                "devops": ["skill1", "skill2"];
                "platforms": ["skill1", "skill2"];
                "soft_skills": ["skill1", "skill2"];
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                "other": ["skill1", "skill2"];
              }


            Location: ${talentData.location |'Not specified'}
            Return the result as a JSON object with these keys: {
              "summary": "The professional summary text (100-150 words)"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            Location: ${talentData.location || 'Not specified'}
            
            Return the result as a JSON object with these keys: 
            {
<<<<<<< HEAD

            Return the result as a JSON object with these keys: {
            Return the result as a JSON object with these keys: 
            {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


        temperature: 0.7
        response_format: { type: "json_object" }
      })});


=======
        temperature: 0.7
        response_format: { type: "json_object" }
      })});
>>>>>>> origin/cursor/delete-old-data-records-6bba
        temperature: 0.7,

        response_format: { type: "json_object" }
      })}),


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
        ],;
        temperature: 0.7,;

        response_format: { type: "json_object" }
      })}),;
    const openAIData = await openAIResponse.json(),;
    if (!openAIData.choices || openAIData.choices.length === 0) {;"
      throw new Error("Failed to generate profile content");
    }
;
    // Extract the generated content from the response;
    const responseContent = openAIData.choices[0].message.content,;
    // Parse the JSON response;
    let enhancedProfile: EnhancedProfile,;
    try {;
      enhancedProfile = JSON.parse(responseContent);
    } catch (e) {;"
      console.error("Error parsing OpenAI response:", e),;"
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
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error("Error in talent-profile-enhancer function:", error);
    return new Response(
      JSON.stringify({ error: error.message });
    console.error("Error in talent-profile-enhancer function:", error),
    
    return new Response(
      JSON.stringify({ error: error.message });
      JSON.stringify({ error: error.message }),
    );
  } catch (error) {;
    console.error("Error in talent-profile-enhancer function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
    console.error("Error in talent-profile-enhancer function:", error),
    
    console.error("Error in talent-profile-enhancer function:", error);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return new Response(
      JSON.stringify({ error: error.message });"
    console.error("Error in talent-profile-enhancer function:", error),

    return new Response(
      JSON.stringify({ error: error.message });
      JSON.stringify({ error: error.message }),
    );
  } catch (error) {;"
    console.error("Error in talent-profile-enhancer function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;

    console.error("Error in talent-profile-enhancer function:", error),
    
    return new Response(

      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});
<<<<<<< HEAD



=======

            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`;
          }
        ];
        temperature: 0 && 0.7,
        response_format: { type: "json_object" }
      })});
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
    const openAIData = await openAIResponse.json ();
;
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("Failed to generate profile content");
    }
    // Extract the generated content from the response;
    const response_content = openAIData.choices[0].message.content;
;
    // Parse the JSON response;
    let enhanced_profile: EnhancedProfile,

<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});

;
    const openAIData = await openAIResponse.json ();
;
    // Check condition;
if ( {) {}
  $2;
}"
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
      { headers: { ...cors_headers, 'Content - Type': 'application / json' } });
  } catch (error) {
    console.error ("Error in talent - profile - enhancer function:", error);
;
    return new Response (
      JSON.stringify ({ error: error.message });
      { status: 500, headers: { ...cors_headers, 'Content - Type': 'application / json' } });
  }
});
>>>>>>> origin/cursor/delete-old-data-records-6bba
;

          {_role: 'user', _content: `Create a professional profile summary and categorize skills based on this information:
            Name: ${talentData.name}
            Title: ${talentData.title}
            Bio: ${talentData.bio}
            Skills: ${talentData.skills.join()}'
            Location: ${talentData.location || 'Not specified'}
            
            Return the result as a JSON object with these keys: 
            {}
              &quot;summary&quot;: &quot;The professional summary text (100-150 words)&quot;,
              &quot;categorizedSkills&quot;: {}
                &quot;programming&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;devops&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;platforms&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;softSkills&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;other&quot;: [&quot;skill1&quot;, &quot;skill2&quot;]
              }            }
            `
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`
          }
        ],
        temperature: 0.7,"
        response_format: { type: "json_object" }
      })}),      })});

<<<<<<< HEAD
=======
    const openAIData = await openAIResponse.json(),
    
    if (!openAIData.choices || openAIData.choices.length === 0) {"
      throw new Error("Failed to generate profile content")    }
    
    // Extract the generated content from the response;
    const responseContent = openAIData.choices[0].message.content,
    
    // Parse the JSON response;
    let enhancedProfile: EnhancedProfile,
    try {}
      enhanced_profile = JSON.parse (response_content);
    } catch (e) {}
"
      console.error("Error parsing OpenAI response:", e),"
      throw new Error("Failed to parse the generated content")    }
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
    return new Response(
      JSON && JSON.stringify(enhancedProfile);
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});

    return new Response(
      JSON && JSON.stringify(enhancedProfile);'
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {}
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });'
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});
});
>>>>>>> origin/cursor/delete-old-data-records-6bba
