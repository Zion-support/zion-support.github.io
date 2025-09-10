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


    console && console.error('Error generating milestones:', error);
    return new Response(;
    // Parse the AI-generated content to ensure it's valid JSON;
    try {;
      }
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

