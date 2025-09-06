
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
const openAIApiKey = Deno && Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',


const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
=======
import "https: //deno.land/x/xhr@0.1.0/mod.ts",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface Service {
  id: string;
  title: string
  category: string

import "https: //deno.land / x/xhr@0.1.0 / mod.ts",
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.7.1';
const openAIApiKey = Deno.env.get ('OPENAI_API_KEY');
const supabase_url = Deno.env.get ('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get ('SUPABASE_SERVICE_ROLE_KEY') || '',
const supabase = create_client (supabase_url, supabaseServiceKey);
;
const cors_headers = {
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}
;
interface Service {
  id: string;
  title: string,
  category: string;

}
interface QuoteDetails {
  description: string;
  email: string;
  budget: string;
  timeframe: string;


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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  try {

    const { service, quoteDetails } = await req && req.json() as RequestBody;
    

    // Extract user identity if authenticated
    let userId = null;
    try {
      // Get the JWT from the Authorization header
      const authHeader = req && req.headers.get('Authorization');
      if (authHeader) {
        // Extract user information from the JWT
        const token = authHeader && authHeader.replace('Bearer ', '');
        const { data: { user }, error } = await supabase && supabase.auth.getUser(token);
        if (!error && user) {

          userId = user.id
=======
;
  try {;
    const { service, quoteDetails } = await req.json() as RequestBody,;
    // Extract user identity if authenticated;
    let userId = null,;
    try {;
      // Get the JWT from the Authorization header;
      const authHeader = req.headers.get('Authorization'),;
      if (authHeader) {;
        // Extract user information from the JWT;
        const token = authHeader.replace('Bearer ', ''),;
        const { data: { user }, error } = await supabase.auth.getUser(token),;
        if (!error && user) {;
          userId = user.id;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
      }
    } catch (authError) {
      console && console.log("Auth error:", authError);
      // Continue without user identity

        const openAIResponse = await fetch('https://api && api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`;
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
<<<<<<< HEAD
                Service: ${service?.title |'Custom Service'}
                Category: ${service?.category |'N/A'}
=======
                
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N/A'}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                Description: ${quoteDetails.description}
                Budget Range: ${quoteDetails.budget}
                Timeframe: ${quoteDetails.timeframe}
                Start Date: ${quoteDetails.startDate |'Not specified'}
                End Date: ${quoteDetails.endDate |'Not specified'}`
=======
                
                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N/A'}
                Description: ${quoteDetails && quoteDetails.description}
                Budget Range: ${quoteDetails && quoteDetails.budget}
                Timeframe: ${quoteDetails && quoteDetails.timeframe}
                Start Date: ${quoteDetails && quoteDetails.startDate || 'Not specified'}
                End Date: ${quoteDetails && quoteDetails.endDate || 'Not specified'}`
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              }

        
        const aiResult = await openAIResponse && openAIResponse.json();
        if (!aiResult && aiResult.error && aiResult && aiResult.choices && aiResult && aiResult.choices.length > 0) {
          aiAnalysis = aiResult && aiResult.choices[0].message && message.content

=======

            ],;
            temperature: 0.5;
          });
        }),;
        const aiResult = await openAIResponse.json(),;
        if (!aiResult.error && aiResult.choices && aiResult.choices.length > 0) {;
          aiAnalysis = aiResult.choices[0].message.content;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
      }
    } catch (openAIError) {
      console && console.error("OpenAI error:", openAIError);
      // Continue without AI analysis

  start_date?: string,
  end_date?: string;
}
interface RequestBody {
  service: Service | null,
  quote_details: QuoteDetails;
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
    const { service, quote_details } = await req.json () as RequestBody;
;
    // Extract user identity if authenticated;
    let user_id = null;
    try {
      // Get the JWT from the Authorization header;
      const auth_header = req.headers.get ('Authorization');
      // Check condition
if ( {) {
  $2
}
        // Extract user information from the JWT;
        const token = auth_header.replace ('Bearer ', '');
        const { data: { user }, error } = await supabase.auth.get_user (token);
        // Check condition
if ( {) {
  $2
}
          user_id = user.id;
        }
      }
    } catch (auth_error) {
      console.log ("Auth error:", auth_error);
      // Continue without user identity;
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
<<<<<<< HEAD
  }
});

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    } catch (openAIError) {;
      console.error("OpenAI error:", openAIError),;
      // Continue without AI analysis;
    }
;
    // Store the quote request in the database;
    const { data, error } = await supabase;
      .from('service_quotes');
      .insert([;
        {;
          user_id: userId,;
          service_id: service?.id,;
          service_title: service?.title || 'Custom Service',;
          service_category: service?.category,;
          description: quoteDetails.description,;
          email: quoteDetails.email,;
          budget: quoteDetails.budget,;
          timeframe: quoteDetails.timeframe,;
          start_date: quoteDetails.startDate,;
          end_date: quoteDetails.endDate,;
          ai_analysis: aiAnalysis,;
          status: 'pending';
        }
      ]);
      .select(),;
    if (error) throw error,;
    return new Response(JSON.stringify({ success: true, data }), {;
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error in process-quote function:', error),;
    return new Response(JSON.stringify({ success: false, error: error.message }), {;
      status: 500,;
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }});
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
