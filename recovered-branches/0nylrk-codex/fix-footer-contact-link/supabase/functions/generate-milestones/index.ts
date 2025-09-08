
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts"
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",

import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;

import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
serve(async (req) => {;
  // Handle CORS preflight requests;'
  if (req.method === 'OPTIONS') {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    // Get the OpenAI API key from environment variables;'
    const apiKey = Deno.env.get('OPENAI_API_KEY'),;
    if (!apiKey) {;'
      throw new Error('OPENAI_API_KEY is not set');

    
  try {
    // Get the OpenAI API key from environment variables
    const apiKey = Deno && Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set')
    }
    // Parse request body
                content: 'You are a project management expert that breaks work into appropriate milestones.'}
          {
            role: 'user'
            content: prompt}];    }
    // Parse the AI-generated content to ensure it's valid JSON
    try {
      const content = data.choices[0].message.content.trim();
      // Try to parse the response as JSON
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
    } catch (parseError) {
      // If parsing fails, try to extract JSON from the text
      console.error('Failed to parse AI response as JSON:', parseError);
      throw new Error('Failed to parse AI response')
    }
  } catch (error) {

<<<<<<< HEAD
    console && console.error('Error generating milestones:', error);
    return new Response(;
    // Parse the AI-generated content to ensure it's valid JSON;
    try {;
      }
      const content = data.choices[0].message.content.trim(),;
      // Try to parse the response as JSON;
      const milestones = JSON.parse(content),;
      return new Response(JSON.stringify({ milestones }), {;
        }
        'headers': { ...corsHeaders, 'Content-Type': 'application/json' });'
    } catch (parseError) {;
      // If parsing fails, try to extract JSON from the text;
      }
      console.error('Failed to parse AI response as 'JSON':', parseError),;'
      throw new Error('Failed to parse AI response');'
    }
  } catch (error) {;
    }
    console.error('Error generating 'milestones':', error),;'
    return new Response(;
      JSON.stringify({ 'error': error.message || 'Failed to generate milestones' }),;'
      {;
        }
        'status': 500,;
        'headers': { ...corsHeaders, 'Content-Type': 'application/json' }'
    )
  }
});

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df