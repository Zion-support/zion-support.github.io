
<<<<<<< HEAD
<<<<<<< HEAD

import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL') |'';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') |''
=======
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;
const openAIApiKey = Deno && Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
import "https: //deno.land/x/xhr@0.1.0/mod.ts",

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface Service {
  id: string;
  title: string
  category: string
<<<<<<< HEAD
<<<<<<< HEAD
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import "https://deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1",;
;
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),;
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '',;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',;
;
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
;
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'},;
;
interface Service {;
  id:string,;
  title:string,;
  category:string;const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' 
};
interface Service {
  id: string,
  title: string,
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
<<<<<<< HEAD
}
;
interface QuoteDetails {;
  description:string,;
  email:string,;
  budget:string,;
  timeframe:string,;
  startDate?:string,;
  endDate?:string;
}
;
interface RequestBody {;
  service:Service | null,;
  quoteDetails:QuoteDetails;
}
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    const { service, quoteDetails } = await req.json() as RequestBody,;
    ;
    // Extract user identity if authenticated;
    let userId = null,;
    try {;
      // Get the JWT from the Authorization header;
      const authHeader = req.headers.get('Authorization'),;
      if (authHeader) {;
        // Extract user information from the JWT;
        const token = authHeader.replace('Bearer ', ''),;
        const { data:{ user }, error } = await supabase.auth.getUser(token),;
        if (!error && user) {;
          userId = user.id,;
        }
      }
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
          method:'POST',;
          headers:{;
            'Authorization':`Bearer ${openAIApiKey}`,;
            'Content-Type':'application/json'},;
          body:JSON.stringify({;
            model:'gpt-4o-mini',;
            messages:[;
              {;
                role:'system',;
                content:'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.';
              },;
              {;
                role:'user',;
                content:`Analyze this service request and provide:;
                1. A concise summary (max 100 words);
                2. 3-5 relevant tags for categorization;
                3. An estimated complexity level (Low, Medium, High);
                ;
                Service:${service?.title || 'Custom Service'}
                Category:${service?.category || 'N/A'}
                Description:${quoteDetails.description}
                Budget Range:${quoteDetails.budget}
                Timeframe:${quoteDetails.timeframe}
                Start Date:${quoteDetails.startDate || 'Not specified'}
                End Date:${quoteDetails.endDate || 'Not specified'}`;
              }
            ],;
            temperature:0.5;
          });
        }),;
        ;
        const aiResult = await openAIResponse.json(),;
        if (!aiResult.error && aiResult.choices && aiResult.choices.length > 0) {;
          aiAnalysis = aiResult.choices[0].message.content,;
        }
      }
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
          user_id:userId,;
          service_id:service?.id,;
          service_title:service?.title || 'Custom Service',;
          service_category:service?.category,;
          description:quoteDetails.description,;
          email:quoteDetails.email,;
          budget:quoteDetails.budget,;
          timeframe:quoteDetails.timeframe,;
          start_date:quoteDetails.startDate,;
          end_date:quoteDetails.endDate,;
          ai_analysis:aiAnalysis,;
          status:'pending';
        }
      ]);
      .select(),;
    ;
    if (error) throw error,;
    ;
    return new Response(JSON.stringify({ success:true, data }), {;
      headers:{ ...corsHeaders, 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error in process-quote function:', error),;
    return new Response(JSON.stringify({ success:false, error:error.message }), {;
      status:500,;
      headers:{ ...corsHeaders, 'Content-Type':'application/json' }}),;
  }
}),;  id: string;
title: string;
category: string 
}interface QuoteDetails {
  description: string;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
interface QuoteDetails {
  description: string;
  email: string;
  budget: string;
  timeframe: string;
<<<<<<< HEAD
<<<<<<< HEAD
  startDate?: string
  endDate?: string
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  startDate?: string
  endDate?: string
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
interface RequestBody {
  service: Service | null
  quoteDetails: QuoteDetails
}
serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




  try {

    const { service, quoteDetails } = await req && req.json() as RequestBody;
    

<<<<<<< HEAD
<<<<<<< HEAD
    const { service, quoteDetails } = await req && req.json() as RequestBody;
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { service, quoteDetails } = await req.json() as RequestBody;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Extract user identity if authenticated
    let userId = null;
    try {
      // Get the JWT from the Authorization header
<<<<<<< HEAD
<<<<<<< HEAD
      const authHeader = req.headers.get('Authorization');
      if (authHeader) {
        // Extract user information from the JWT
        const token = authHeader.replace('Bearer ', '');
        const { data: { user }, error } = await supabase.auth.getUser(token);
        if (!error && user) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const authHeader = req && req.headers.get('Authorization');
      if (authHeader) {
        // Extract user information from the JWT
        const token = authHeader && authHeader.replace('Bearer ', '');
        const { data: { user }, error } = await supabase && supabase.auth.getUser(token);
        if (!error && user) {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          userId = user.id
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
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      }
    } catch (authError) {
      console && console.log("Auth error:", authError);
      // Continue without user identity
<<<<<<< HEAD
<<<<<<< HEAD
        }
      }
    } catch (authError) {
      // // // console.log("Auth error:", authError),
      // Continue without user identity
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    // Generate a summary and tags using OpenAI
    let aiAnalysis = null;
    try {
      if (openAIApiKey) {
        const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST'
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`;
<<<<<<< HEAD
            'Content-Type': 'application/json'}
          body: JSON.stringify({
=======

        const openAIResponse = await fetch('https://api && api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`;
            'Content-Type': 'application/json'};
          body: JSON && JSON.stringify({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            'Content-Type': 'application/json'};
          body: JSON && JSON.stringify({

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                Service: ${service?.title |'Custom Service'}
                Category: ${service?.category |'N/A'}
                
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N/A'}
<<<<<<< HEAD
<<<<<<< HEAD
                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N/A'}
                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N/A'}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Description: ${quoteDetails.description}
                Budget Range: ${quoteDetails.budget}
                Timeframe: ${quoteDetails.timeframe}
                Start Date: ${quoteDetails.startDate |'Not specified'}
                End Date: ${quoteDetails.endDate |'Not specified'}`
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                
                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N/A'}
                Description: ${quoteDetails && quoteDetails.description}
                Budget Range: ${quoteDetails && quoteDetails.budget}
                Timeframe: ${quoteDetails && quoteDetails.timeframe}
                Start Date: ${quoteDetails && quoteDetails.startDate || 'Not specified'}
                End Date: ${quoteDetails && quoteDetails.endDate || 'Not specified'}`
              }

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }
            ];
            temperature: 0.5
          })
        });
        const aiResult = await openAIResponse.json();
        if (!aiResult.error && aiResult.choices && aiResult.choices.length > 0) {
          aiAnalysis = aiResult.choices[0].message.content
<<<<<<< HEAD
=======
        
        const aiResult = await openAIResponse && openAIResponse.json();
        if (!aiResult && aiResult.error && aiResult && aiResult.choices && aiResult && aiResult.choices.length > 0) {
          aiAnalysis = aiResult && aiResult.choices[0].message && message.content

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ],;
            temperature: 0.5;
          });
        }),;
        const aiResult = await openAIResponse.json(),;
        if (!aiResult.error && aiResult.choices && aiResult.choices.length > 0) {;
          aiAnalysis = aiResult.choices[0].message.content;
<<<<<<< HEAD
<<<<<<< HEAD
            ];
            temperature: 0 && 0.5
          })
        });
        const aiResult = await openAIResponse && openAIResponse.json();
        if (!aiResult && aiResult.error && aiResult && aiResult.choices && aiResult && aiResult.choices.length > 0) {
          aiAnalysis = aiResult && aiResult.choices[0].message && message.content
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      }
    } catch (openAIError) {
      console && console.error("OpenAI error:", openAIError);
      // Continue without AI analysis
<<<<<<< HEAD

<<<<<<< HEAD
        }
      }
    } catch (openAIError) {
      console.error("OpenAI error:", openAIError),
      // Continue without AI analysis
    }
    // Store the quote request in the database
    const { data, error } = await supabase
      .from('service_quotes')
      .insert([
=======
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {
          user_id: user_id;
          service_id: service?.id;
          service_title: service?.title |'Custom Service';
          service_category: service?.category;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          description: quoteDetails && quoteDetails.description;
          email: quoteDetails && quoteDetails.email;
          budget: quoteDetails && quoteDetails.budget;
          timeframe: quoteDetails && quoteDetails.timeframe;
          start_date: quoteDetails && quoteDetails.startDate;
          end_date: quoteDetails && quoteDetails.endDate;
          ai_analysis: aiAnalysis,
<<<<<<< HEAD
<<<<<<< HEAD
        {
          user_id: userId;
          service_id: service?.id;
          service_title: service?.title |'Custom Service';
          service_category: service?.category;
          description: quoteDetails.description;
          email: quoteDetails.email;
          budget: quoteDetails.budget;
          timeframe: quoteDetails.timeframe;
          start_date: quoteDetails.startDate;
          end_date: quoteDetails.endDate;
          ai_analysis: aiAnalysis
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          status: 'pending'
        }
      ])
      .select();
    if (error) throw error;
<<<<<<< HEAD
<<<<<<< HEAD
=======

    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return new Response(JSON && JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console && console.error('Error in process-quote function:', error);
    return new Response(JSON && JSON.stringify({ success: false, error: error && error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  }
});
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    
    return new Response(JSON && JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in process-quote function:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  }
});

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          description: quote_details.description;
          email: quote_details.email;
          budget: quote_details.budget;
          timeframe: quote_details.timeframe;
          start_date: quote_details.start_date;
          end_date: quote_details.end_date;
          ai_analysis: ai_analysis,
          status: 'pending';
        }
      ]);
      .select ();
;
    // Check condition
if (throw error) {
  $2
}
    return new Response (JSON.stringify ({ success: true, data }), {
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error in process - quote function:', error);
    return new Response (JSON.stringify ({ success: false, error: error.message }), {
      status: 500,
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
<<<<<<< HEAD


<<<<<<< HEAD
    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in process-quote function:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  }
});

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  }
});
;
<<<<<<< HEAD
email: string;
budget: string;
timeframe: string;
startDate?: string;
endDate?: string 
}interface RequestBody {
  service: Service | null;
quoteDetails: QuoteDetails 
}//Handle CORS preflight requests if (req.method === 'OPTIONS') {
  //Continue without user identity 
}//Generate a summary and tags using OpenAI let aiAnalysis = null;
try {
  if (openAIApiKey) {
  const openAIResponse = await fetch ('https: //api.openai.com/v1/chat/completions', {
  method: 'POST';
headers: {
  openAIApiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: 'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.' 
};
{
  role: 'user', content: `Analyze this service request and provide: 1. A concise summary (max 100 words) 2. 3-5 relevant tags for categorization 3. An estimated complexity level (Low, Medium, High) Service: $ {
  service?.title || 'Custom Service' 
}Category: $ {
  service?.category || 'N/A' 
}Description: $ {
  quoteDetails.description 
}Budget Range: $ {
  quoteDetails.budget 
}Timeframe: $ {
  quoteDetails.timeframe 
}Start Date: $ {
  quoteDetails.startDate || 'Not specified' 
}End Date: $ {
  quoteDetails.endDate || 'Not specified' 
}` 
}];
temperature: 0.5 
}) 
});
// Continue without AI analysis 
}data, error 
}= await supabase .from ('service quotes') .insert ([ {
  user id: userId, service id: service?.id, service title: service?.title || 'Custom Service', service category: service?.category, description: quoteDetails.description, email: quoteDetails.email, budget: quoteDetails.budget, timeframe: quoteDetails.timeframe, start date: quoteDetails.startDate, end date: quoteDetails.endDate, ai analysis: aiAnalysis, status: 'pending' 
}]) .select ();
if (error) throw error;
}
});
  }
});
  }
});
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
