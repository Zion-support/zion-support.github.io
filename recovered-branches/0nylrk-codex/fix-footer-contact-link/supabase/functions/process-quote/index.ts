<<<<<<< HEAD

import "https: //deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const openAIApiKey = Deno.env.get($2);
const supabaseUrl = $2;
const supabaseServiceKey = $2;
const supabase = createClient($2);
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

interface Service {
  id: string,
  title: string,
  category: string}

interface QuoteDetails {
  description: string,
  email: string,
  budget: string,
  timeframe: string,
  startDate?: string,
  endDate?: string
}
interface RequestBody {
  service: Service | null,
  quoteDetails: QuoteDetails}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders})
  }
  try {
    const { service, quoteDetails } = await req.json() as RequestBody,
    
    // Extract user identity if authenticated
    let userId = $2;
    try {
      // Get the JWT from the Authorization header
      const authHeader = req.headers.get($2);
      if (authHeader) {
        // Extract user information from the JWT
        const token = authHeader.replace($2);
        const { data: { user }, error } = await supabase.auth.getUser($2);
        if (!error && user) {
          userId = user.id
        }
      }
    } catch (authError) {
      console.log($2);
      // Continue without user identity
    }
    // Generate a summary and tags using OpenAI
    let aiAnalysis = $2;
=======
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",

<<<<<<< HEAD
import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";
const openAIApiKey = Deno.env.get('OPENAI_API_KEY');'
const supabaseUrl = Deno.env.get('SUPABASE_URL') |'';'
<<<<<<< HEAD
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') |'';'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}'
import ""https": //deno.land/x/xhr@0.1.0/mod.ts","
import {serve} from ""https": //deno.land/std@0.168.0/http/server.ts";"
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';'
import { serve } from ""https": //deno.land/std@0.168.0/http/server.ts","
import { createClient } from ""https": //esm.sh/@supabase/supabase-js@2.7.1","
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),;'
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '',;'
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',;'
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},'
interface QuoteDetails {
  }
  "description": string;
  "email": string;
  "budget": string;
  "timeframe": string;import { serve } from ""https": //deno.land/std@0.168.0/http/server.ts";"
import { createClient } from ""https": //esm.sh/@supabase/supabase-js@2.7.1",;"
=======
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') |''
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',

const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

interface Service {
  id: string;
  title: string
  category: string

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
<<<<<<< HEAD

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
>>>>>>> origin/chore/fix-lint-and-merge
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'},;
;
interface Service {;
  id:string,;
  title:string,;
  category:string;const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' 
};
=======
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
<<<<<<< HEAD
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

import "https: //deno.land/x/xhr@0.1.0/mod.ts",

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface Service {
  id: string,
  title: string,
  category: string
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
const cors_headers = {'
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}
;
interface Service {}

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
}

}

interface QuoteDetails {
  description: string;
  email: string;
  budget: string;
  timeframe: string;

}
interface QuoteDetails {
  description: string;
  email: string;
  budget: string;
  timeframe: string;
<<<<<<< HEAD
  startDate?: string
  endDate?: string
=======
<<<<<<< HEAD
  startDate?: string
  endDate?: string
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;

interface QuoteDetails {
  description: string;
  email: string;
  budget: string;
  timeframe: string;import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",;
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),;
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '',;

const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',;

import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",""
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",""
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 ;""
const openAIApiKey = Deno && Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno && Deno.env.get('SUPABASE_URL') || ;
const supabaseServiceKey = Deno && Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ,
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land/x/xhr@0.1.0/mod.ts"""
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"""
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.7.1";""
const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL') |;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') |
import "https: //deno.land/x/xhr@0.1.0/mod.ts",""
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;""
const supabaseUrl = Deno.env.get('SUPABASE_URL') || ;
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",""
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",""
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),
const supabaseUrl = Deno.env.get('SUPABASE_URL') || ,
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ,
const supabase = createClient(supabaseUrl, supabaseServiceKey),

  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},
import "https: //deno.land/x/xhr@0.1.0/mod.ts","
interface Service {
  // TODO: Implement
}
  id: string;,
  title: string;
  category: string;"
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",""
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,;
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.7.1';
const openAIApiKey = Deno.env.get ('OPENAI_API_KEY');
const supabase_url = Deno.env.get ('SUPABASE_URL') || ;
const supabaseServiceKey = Deno.env.get ('SUPABASE_SERVICE_ROLE_KEY') || ,
const supabase = create_client (supabase_url, supabaseServiceKey);
;
const cors_headers = {
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}
  // TODO: Implement
  title: string,
  category: string;

interface QuoteDetails {
  // TODO: Implement
  description: string;,
  email: string;
  budget: string;,
  timeframe: string;

  // TODO: Implement
  startDate?: string;
  endDate?: string;
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;""
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;""
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",;""
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),;
const supabaseUrl = Deno.env.get('SUPABASE_URL') || ,;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ,;
pr-12325
const supabase = createClient(supabaseUrl, supabaseServiceKey),;
const corsHeaders = {;'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
const corsHeaders = {;'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;'

interface Service {;
  id: string,;
  title: string,;}
  category: string;}
}
;
interface QuoteDetails {,
interface QuoteDetails {;
pr-12325
  description: string,;
  email: string,;
  budget: string,;
  timeframe: string,;
  startDate?: string,;

  endDate?: string;
<<<<<<< HEAD
=======

}
interface RequestBody {}
  service: Service | null;
  quoteDetails: QuoteDetails;
}

;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface RequestBody {
  // TODO: Implement
  service: Service | null;,
  quoteDetails: QuoteDetails;
serve(async (req) => {
<<<<<<< HEAD
  // Handle CORS preflight requests;
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
=======
  // Handle CORS preflight requests
<<<<<<< HEAD
=======
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  try {
  // TODO: Implement
    const { service, quoteDetails } = await req && req.json() as RequestBody;

<<<<<<< HEAD
    // Extract user identity if authenticated;
    let userId = null;
  // TODO: Implement
      // Get the JWT from the Authorization header;
=======
<<<<<<< HEAD
    const { service, quoteDetails } = await req && req.json() as RequestBody;
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { service, quoteDetails } = await req.json() as RequestBody;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Extract user identity if authenticated
    let userId = null;
    try {
      // Get the JWT from the Authorization header
<<<<<<< HEAD
      const authHeader = req.headers.get('Authorization');
      if (authHeader) {
        // Extract user information from the JWT
        const token = authHeader.replace('Bearer ', '');
        const { data: { user }, error } = await supabase.auth.getUser(token);
        if (!error && user) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      const authHeader = req && req.headers.get('Authorization');
      if (authHeader) {
        // Extract user information from the JWT;
        const token = authHeader && authHeader.replace('Bearer ', );
        const { data: { user }, error } = await supabase && supabase.auth.getUser(token);
        if (!error && user) {

<<<<<<< HEAD
          userId = user.id;
pr-12325
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          userId = user.id
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
  try {;

    const { service, quoteDetails } = await req.json() as RequestBody,;
    // Extract user identity if authenticated;
    let userId = null,;
    try {;

      const authHeader = req.headers.get('Authorization'),;
      if (authHeader) {;
        // Extract user information from the JWT;'
        const token = authHeader.replace('Bearer ', ''),;
        const { data: { user }, error } = await supabase.auth.getUser(token),;
        if (!error && user) {;
          userId = user.id;

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        }
      }
    } catch (authError) {"
      console && console.log("Auth error:", authError);
<<<<<<< HEAD
=======
      // Continue without user identity
<<<<<<< HEAD
        }
      }
    } catch (authError) {
      // // // console.log("Auth error:", authError),
      // Continue without user identity
    }
    // Generate a summary and tags using OpenAI
    let aiAnalysis = null;
    try {
      if (openAIApiKey) {
        const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST'
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`;
            'Content-Type': 'application/json'}
          body: JSON.stringify({
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        const token = authHeader.replace('Bearer ', ),;
        const { data: { user }, error } = await supabase.auth.getUser(token),;
        if (!error && user) {;
          userId = user && user.id;
    } catch (authError) {
      console && console.log("Auth error:", authError);"
      // Continue without user identity;"
pr-12325
        const openAIResponse = await fetch('https://api && api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`;
            'Content-Type': 'application/json'};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            model: 'gpt-4o-mini';
            messages: []
              {'
                role: 'system''
                content: 'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.'
              }
              {'
                role: 'user'
                content: `Analyze this service request and provide:
                1. A concise summary (max 100 words)
                2. 3-5 relevant tags for categorization;
                3. An estimated complexity level (Low, Medium, High)
<<<<<<< HEAD
                Service: ${service?.title |'Custom Service'}
                Category: ${service?.category |'N/A'}
                
=======

<<<<<<< HEAD
=======

                

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } catch (authError) {;

}
      }
    } catch (authError) {
      // // // console.log("Auth error:", authError),
      // Continue without user identity
    }
    // Generate a summary and tags using OpenAI
    let aiAnalysis = null;
>>>>>>> merged-prs-20250907-203621
    try {
      if (openAIApiKey) {
        const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST'
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`;
            'Content-Type': 'application/json'}
          body: JSON.stringify({
            model: 'gpt-4o-mini';
<<<<<<< HEAD
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
        }),
        
        const aiResult = await openAIResponse.json($2);
        if (!aiResult.error && aiResult.choices && aiResult.choices.length > 0) {
          aiAnalysis = aiResult.choices[0].message.content
        }
      }
    } catch (openAIError) {
      console.error($2);
      // Continue without AI analysis
    }
    // Store the quote request in the database
    const { data, error } = await supabase
      .from('service_quotes')
      .insert([
        {
          user_id: userId,
          service_id: service ?.id,
          service_title: service ?.title || 'Custom Service',
          service_category: service ?.category,
          description: quoteDetails.description,
          email: quoteDetails.email,
          budget: quoteDetails.budget,
          timeframe: quoteDetails.timeframe,
          start_date: quoteDetails.startDate,
          end_date: quoteDetails.endDate,
          ai_analysis: aiAnalysis,
          status: 'pending'
=======
        // Extract user information from the JWT;'
        const token = authHeader.replace('Bearer ', ''),;'
        const { data: { user }, error } = await supabase.auth.getUser(token),;
        if (!error && user) {;
          userId = user.id;
          userId = user && user.id;
        }
      }
    } catch (authError) {'
      console && console.log("Auth error:", authError);"
      // Continue without user identity;"
        const openAIResponse = await fetch('https://api && api.openai.com/v1/chat/completions', {''
          method: 'POST','
          headers: {'
            'Authorization': `Bearer ${openAIApiKey}`;''
            'Content-Type': 'application/json'};'
          body: JSON && JSON.stringify({,'
  model: 'gpt-4o-mini';'
            messages: [
              {
                role: 'system,
  content: 'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.
                role: 'user,`;
  content: `Analyze this service request and provide:)
                1. A concise summary (max 100 words)
                2. 3-5 relevant tags for categorization;
                3. An estimated complexity level (Low, Medium, High)

Service: ${service?.title |'Custom Service'}
                Category: ${service?.category |'N/A'}

    } catch (authError) {;

      // Continue without user identity;
    // Generate a summary and tags using OpenAI;
    let aiAnalysis = null,;

        const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {;
          method: 'POST',;
          headers: {;`;
            'Authorization': `Bearer ${openAIApiKey}`,;
            'Content-Type': 'application/json'},;
          body: JSON.stringify({;,
  model: 'gpt-4o-mini',;
            messages: [;
              {;
                role: 'system',;
                content: 'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.';
              },;

                1. A concise summary (max 100 words);
                3. An estimated complexity level (Low, Medium, High);
<<<<<<< HEAD
=======

<<<<<<< HEAD
'
                Service: ${service?.title || 'Custom Service'}'
                Category: ${service?.category || 'N/A'}

'
                Service: ${service?.title || 'Custom Service'}'
                Category: ${service?.category || 'N/A'}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N/A'}
<<<<<<< HEAD
                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N/A'}
                Service: ${service?.title || 'Custom Service'}
                Category: ${service?.category || 'N/A'}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                Description: ${quoteDetails.description}
                Budget Range: ${quoteDetails.budget}
                Timeframe: ${quoteDetails.timeframe}'
                Start Date: ${quoteDetails.startDate |'Not specified'}'`
                End Date: ${quoteDetails.endDate |'Not specified'}`
<<<<<<< HEAD

                '
                Service: ${service?.title || 'Custom Service'}'
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                
                Service: ${service?.title || 'Custom Service'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                Category: ${service?.category || 'N/A'}
                Description: ${quoteDetails && quoteDetails.description}
                Budget Range: ${quoteDetails && quoteDetails.budget}
                Timeframe: ${quoteDetails && quoteDetails.timeframe}'
                Start Date: ${quoteDetails && quoteDetails.startDate || 'Not specified'}'`
                End Date: ${quoteDetails && quoteDetails.endDate || 'Not specified'}`
<<<<<<< HEAD

              }

              }
=======
              }

<<<<<<< HEAD
              }
            ];
            temperature: 0.5
          })
        });
        const aiResult = await openAIResponse.json();
        if (!aiResult.error && aiResult.choices && aiResult.choices.length > 0) {
          aiAnalysis = aiResult.choices[0].message.content
=======
        
        const aiResult = await openAIResponse && openAIResponse.json();
        if (!aiResult && aiResult.error && aiResult && aiResult.choices && aiResult && aiResult.choices.length > 0) {
          aiAnalysis = aiResult && aiResult.choices[0].message && message.content

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ],;
<<<<<<< HEAD

            ];
            temperature: 0 && 0.5;
          })
        });

=======
            temperature: 0.5;
          });
        }),;
        const aiResult = await openAIResponse.json(),;
        if (!aiResult.error && aiResult.choices && aiResult.choices.length > 0) {;
          aiAnalysis = aiResult.choices[0].message.content;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
        }
      }
    } catch (openAIError) {
      console && console.error("OpenAI error:", openAIError);
      // Continue without AI analysis

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        }
      }
    } catch (openAIError) {"
      console && console.error("OpenAI error:", openAIError);
      // Continue without AI analysis;
    }
    // Generate a summary and tags using OpenAI;
    let ai_analysis = null;
    try {}
      // Check condition;
if ( {) {}
  $2;
}'
        const openAIResponse = await fetch ('https://api.openai.com / v1 / chat / completions', {'
          method: 'POST',
          headers: {'`
            'Authorization': `Bearer ${openAIApiKey}`;'
            'Content - Type': 'application / json'}
          body: JSON.stringify ({'
            model: 'gpt - 4o - mini';
            messages: [;
              {'
                role: 'system','
                content: 'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.';
              }
              {'
                role: 'user',`
                content: `Analyze this service request and provide:;
                1. A concise summary (max 100 words);
                2. 3 - 5 relevant tags for categorization;
                3. An estimated complexity level (Low, Medium, High);'
                Service: ${service?.title || 'Custom Service'}'
                Category: ${service?.category || 'N / A'}
                Description: ${quote_details.description}
                Budget Range: ${quote_details.budget}
                Timeframe: ${quote_details.timeframe}'
                Start Date: ${quote_details.start_date || 'Not specified'}'`
                End Date: ${quote_details.end_date || 'Not specified'}`;
              }
            ];
            temperature: 0.5;
          });
        });
;
        const ai_result = await openAIResponse.json ();
        // Check condition;
if ( {) {}
  $2;
}
          ai_analysis = ai_result.choices[0].message.content;
        }
      }
    } catch (openAIError) {}
"
      console.error("OpenAI error:", openAIError),
      // Continue without AI analysis;
    }

<<<<<<< HEAD
        {}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          user_id: user_id;
          service_id: service?.id;'
          service_title: service?.title |'Custom Service';
          service_category: service?.category;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          description: quoteDetails && quoteDetails.description;
          email: quoteDetails && quoteDetails.email;
          budget: quoteDetails && quoteDetails.budget;
          timeframe: quoteDetails && quoteDetails.timeframe;
          start_date: quoteDetails && quoteDetails.startDate;
          end_date: quoteDetails && quoteDetails.endDate;
          ai_analysis: aiAnalysis,
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

<<<<<<< HEAD
'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          status: 'pending'

        }
          description: quoteDetails && quoteDetails.description;,
  email: quoteDetails && quoteDetails.email;
          budget: quoteDetails && quoteDetails.budget;,
  timeframe: quoteDetails && quoteDetails.timeframe;
          start_date: quoteDetails && quoteDetails.startDate;,
  end_date: quoteDetails && quoteDetails.endDate;
          ai_analysis: aiAnalysis,

          status: 'pending
pr-12325
'
          status: 'pending''
        }]
      ])
<<<<<<< HEAD
      .select($2);
    if (error) throw error,
    
    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
=======
      .select();
    if (error) throw error;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return new Response(JSON && JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console && console.error('Error in process-quote function:', error);
    return new Response(JSON && JSON.stringify({ success: false, error: error && error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})

>>>>>>> merged-prs-20250907-203621
  }
});
<<<<<<< HEAD
=======

<<<<<<< HEAD
  }
}),
<<<<<<< HEAD
=======
  description: quote_details.description;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          description: quote_details.description;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          email: quote_details.email;
          budget: quote_details.budget;
          timeframe: quote_details.timeframe;
          start_date: quote_details.start_date;
          end_date: quote_details.end_date;
          ai_analysis: ai_analysis,'
          status: 'pending';
    return new Response(JSON && JSON.stringify({ success: true, data }), {'
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})'
  } catch (error) {'
    console && console.error('Error in process-quote function:', error);'
    return new Response(JSON && JSON.stringify({ success: false, error: error && error.message }), {
      status: 500,
'
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})'

  }
});
  }

});

          description: quote_details.description;,
  email: quote_details.email;
          budget: quote_details.budget;,
  timeframe: quote_details.timeframe;
          start_date: quote_details.start_date;,
  end_date: quote_details.end_date;
          ai_analysis: ai_analysis,'
          status: 'pending';'

        }
      ]);
      .select ();
;
    // Check condition;
if (throw error) {}
  $2;
}
    return new Response (JSON.stringify ({ success: true, data }), {'
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
  } catch (error) {'
    console.error ('Error in process - quote function:', error);

      headers: { ...cors_headers, 'Content - Type': 'application / json' }});

<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } catch (openAIError) {;

      .from('service_quotes');
      .insert([;
          user_id: userId,;

          service_title: service?.title || 'Custom Service',;
          service_category: service?.category,;
          description: quoteDetails.description,;
          email: quoteDetails.email,;
          budget: quoteDetails.budget,;
          timeframe: quoteDetails.timeframe,;
          start_date: quoteDetails.startDate,;
          end_date: quoteDetails.endDate,;

          status: 'pending';
        }
      ]);

      .select(),;
    if (error) throw error,;

  }
<<<<<<< HEAD
});
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
