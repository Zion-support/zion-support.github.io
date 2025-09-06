

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '',
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',

const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

interface Service {
  id: string;
  title: string
  category: string
}
interface QuoteDetails {
  description: string;
  email: string;
  budget: string;
  timeframe: string;
  startDate?: string
  endDate?: string
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",;
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),;
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '',;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
interface Service {;
  id: string,;
  title: string,;
  category: string;
}
;
interface QuoteDetails {;
  description: string,;
  email: string,;
  budget: string,;
  timeframe: string,;
  startDate?: string,;
  endDate?: string;
}
interface RequestBody {
  service: Service | null
  quoteDetails: QuoteDetails
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
            'Content-Type': 'application/json'};
          body: JSON && JSON.stringify({

            model: 'gpt-4o-mini';
            messages: [
              {
                role: 'system'
                content: 'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.'
              }
              {
                role: 'user'
                content: `Analyze this service request and provide:
                1. A concise summary (max 100 words)
                2. 3-5 relevant tags for categorization
                3. An estimated complexity level (Low, Medium, High)
                Service: ${service?.title |'Custom Service'}
                Category: ${service?.category |'N/A'}
                
    } catch (authError) {;
      // // // console.log("Auth error:", authError),;
      // Continue without user identity;
    }
;
    // Generate a summary and tags using OpenAI;
    let aiAnalysis = null,;
    try {;
      if (openAIApiKey) {;
        const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {;
          method: 'POST',;
          headers: {;
            'Authorization': `Bearer ${openAIApiKey}`,;
            'Content-Type': 'application/json'},;
          body: JSON.stringify({;
            model: 'gpt-4o-mini',;
            messages: [;
              {;
                role: 'system',;
                content: 'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.';
              },;
              {;
                role: 'user',;
                content: `Analyze this service request and provide:;
                1. A concise summary (max 100 words);
                2. 3-5 relevant tags for categorization;
                3. An estimated complexity level (Low, Medium, High);
                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N/A'}
                Description: ${quoteDetails.description}
                Budget Range: ${quoteDetails.budget}
                Timeframe: ${quoteDetails.timeframe}
                Start Date: ${quoteDetails.startDate |'Not specified'}
                End Date: ${quoteDetails.endDate |'Not specified'}`
              }
            ];
            temperature: 0.5
          })
        });
        const aiResult = await openAIResponse.json();
        if (!aiResult.error && aiResult.choices && aiResult.choices.length > 0) {
          aiAnalysis = aiResult.choices[0].message.content
            ],;
            temperature: 0.5;
          });
        }),;
        const aiResult = await openAIResponse.json(),;
        if (!aiResult.error && aiResult.choices && aiResult.choices.length > 0) {;
          aiAnalysis = aiResult.choices[0].message.content;
        }
      }
    } catch (openAIError) {
      console && console.error("OpenAI error:", openAIError);
      // Continue without AI analysis
    }
    // Generate a summary and tags using OpenAI;
    let ai_analysis = null;
    try {
      // Check condition
if ( {) {
  $2
}
        const openAIResponse = await fetch ('https://api.openai.com / v1 / chat / completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`;
            'Content - Type': 'application / json'}
          body: JSON.stringify ({
            model: 'gpt - 4o - mini';
            messages: [;
              {
                role: 'system',
                content: 'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.';
              }
              {
                role: 'user',
                content: `Analyze this service request and provide:;
                1. A concise summary (max 100 words);
                2. 3 - 5 relevant tags for categorization;
                3. An estimated complexity level (Low, Medium, High);
                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N / A'}
                Description: ${quote_details.description}
                Budget Range: ${quote_details.budget}
                Timeframe: ${quote_details.timeframe}
                Start Date: ${quote_details.start_date || 'Not specified'}
                End Date: ${quote_details.end_date || 'Not specified'}`;
              }
            ];
            temperature: 0.5;
          });
        });
;
        const ai_result = await openAIResponse.json ();
        // Check condition
if ( {) {
  $2
}
          ai_analysis = ai_result.choices[0].message.content;
        }
      }
    } catch (openAIError) {
      console.error ("OpenAI error:", openAIError);
      // Continue without AI analysis;
    }
    // Store the quote request in the database;
    const { data, error } = await supabase;
      .from ('service_quotes');
      .insert ([;

        {
          user_id: user_id;
          service_id: service?.id;
          service_title: service?.title |'Custom Service';
          service_category: service?.category;

          description: quoteDetails && quoteDetails.description;
          email: quoteDetails && quoteDetails.email;
          budget: quoteDetails && quoteDetails.budget;
          timeframe: quoteDetails && quoteDetails.timeframe;
          start_date: quoteDetails && quoteDetails.startDate;
          end_date: quoteDetails && quoteDetails.endDate;
          ai_analysis: aiAnalysis,

          status: 'pending'
        }
      ])
      .select();
    if (error) throw error;

    
    return new Response(JSON && JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in process-quote function:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
