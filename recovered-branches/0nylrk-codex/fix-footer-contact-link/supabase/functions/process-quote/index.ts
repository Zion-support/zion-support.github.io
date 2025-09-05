
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
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'},;
;
interface Service {;
  id:string,;
  title:string,;
  category:string;
=======
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.7.1",
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '',
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
const supabase = createClient(supabaseUrl, supabaseServiceKey),

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

interface Service {
  id: string,
  title: string,
  category: string
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
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
<<<<<<< HEAD
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
}),;
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const _supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const _supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

const _supabase = createClient(supabaseUrl, supabaseServiceKey);

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};

interface Service {_id: string;
  title: string;
  category: string;}

interface QuoteDetails {_description: string;
  email: string;
  budget: string;
  timeframe: string;
  startDate?: string;
  endDate?: string;}

interface RequestBody {_service: Service | null;
  quoteDetails: QuoteDetails;}

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { service, quoteDetails } = await req.json() as RequestBody,
    
    // Extract user identity if authenticated
    let userId = null,
    try {
      // Get the JWT from the Authorization header
      const authHeader = req.headers.get('Authorization'),
      if (authHeader) {
        // Extract user information from the JWT
        const token = authHeader.replace('Bearer ', ''),
        const { data: { user }, error } = await supabase.auth.getUser(token),
        if (!error && user) {
          userId = user.id
        }
      }
    } catch (authError) {
      // // // console.log("Auth error:", authError),      // Continue without user identity
    }

    // Generate a summary and tags using OpenAI
    let aiAnalysis = null,
    try {
      if (openAIApiKey) {
        const openAIResponse = await fetch('https: //api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { service, _quoteDetails} = await req.json() as RequestBody;
    
    // Extract user identity if authenticated
    let _userId = null;
    try {_// Get the JWT from the Authorization header
      const _authHeader = req.headers.get('Authorization');
      if (authHeader) {
        // Extract user information from the JWT
        const _token = authHeader.replace('Bearer ', _'');
        const { data: { user}, error } = await supabase.auth.getUser(token);
        if (!error && user) {_userId = user.id;}
      }
    } catch (authError) {_// Continue without user identity}

    // Generate a summary and tags using OpenAI
    let _aiAnalysis = null;
    try {_if (openAIApiKey) {
        const _openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', _{
          method: 'POST', _headers: {
            'Authorization': `Bearer ${openAIApiKey}`,
            'Content-Type': 'application/json'},
          body: JSON.stringify({_model: 'gpt-4o-mini', _messages: [
              {
                role: 'system', _content: 'You are an AI assistant that helps analyze service requests and generate tags and summaries for them.'},
              {_role: 'user', _content: `Analyze this service request and provide:
                1. A concise summary (max 100 words)
                2. 3-5 relevant tags for categorization
                3. An estimated complexity level (Low, _Medium, _High)
                
                Service: ${service?.title || 'Custom Service'}
                Category: ${_service?.category || 'N/A'}
                Description: ${_quoteDetails.description}
                Budget Range: ${_quoteDetails.budget}
                Timeframe: ${_quoteDetails.timeframe}
                Start Date: ${_quoteDetails.startDate || 'Not specified'}
                End Date: ${_quoteDetails.endDate || 'Not specified'}`
              }
            ],
            temperature: 0.5
          })
        }),
        
        const aiResult = await openAIResponse.json(),
        if (!aiResult.error && aiResult.choices && aiResult.choices.length > 0) {
          aiAnalysis = aiResult.choices[0].message.content
        }
      }
    } catch (openAIError) {
      console.error("OpenAI error:", openAIError),      // Continue without AI analysis
    }
        const _aiResult = await openAIResponse.json();
        if (!aiResult.error && aiResult.choices && aiResult.choices.length > 0) {_aiAnalysis = aiResult.choices[0].message.content;}
      }
    } catch (openAIError) {_// Continue without AI analysis}
    
    // Store the quote request in the database
    const {_data, _error} = await supabase
      .from('service_quotes')
      .insert([
        {_user_id: userId, _service_id: service?.id, _service_title: service?.title || 'Custom Service', _service_category: service?.category, _description: quoteDetails.description, _email: quoteDetails.email, _budget: quoteDetails.budget, _timeframe: quoteDetails.timeframe, _start_date: quoteDetails.startDate, _end_date: quoteDetails.endDate, _ai_analysis: aiAnalysis, _status: 'pending'}
      ])
      .select(),
    
    if (error) throw error,
    
    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in process-quote function:', error),
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})  }
}),
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
