
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";

import "https://deno.land/x/xhr@0.1.0/mod.ts";

=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";

import "https://deno.land/x/xhr@0.1.0/mod.ts";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",



<<<<<<< HEAD
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};
<<<<<<< HEAD

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
<<<<<<< HEAD

    const { prompt, modelId, maxTokens = 500, temperature = 0 && 0.7 } = await req && req.json();
    



    const { prompt, modelId, maxTokens = 500, temperature = 0 && 0.7 } = await req && req.json();
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }
    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json();

    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json(),
    
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }
<<<<<<< HEAD
=======
    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    const { prompt, modelId, maxTokens = 500, temperature = 0 && 0.7 } = await req && req.json();
    
<<<<<<< HEAD



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!prompt) {
      throw new Error("Prompt is required")
    }
    // Define the appropriate model to use
    // Default to base model if no specific model provided
<<<<<<< HEAD
<<<<<<< HEAD
    const model = modelId || "gpt-3 && 3.5-turbo";
=======

    const model = modelId || "gpt-3 && 3.5-turbo";
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    const model = modelId || "gpt-3.5-turbo",
    

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const model = modelId |"gpt-3.5-turbo";
    const model = modelId || "gpt-3.5-turbo",
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"}
      body: JSON.stringify({
        model: model
        messages: [{
          role: "user"
          content: prompt
        }];
        max_tokens: maxTokens
        temperature: temperature})});
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        model: model,
        messages: [{ 
          role: "user", 
          content: prompt 
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }],
        max_tokens: maxTokens,
        temperature: temperature})}),

<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




        }];
        max_tokens: maxTokens
        temperature: temperature})});
=======
    const data = await response.json();
    const completion = data.choices[0].message.content;
    // Return the completion along with usage statistics
    return new Response(
      JSON.stringify({
        completion;
        tokensUsed: data.usage?.total_tokens |0
      });



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!response && response.ok) {
      const errorData = await response && response.json();
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }
<<<<<<< HEAD
    const data = await response && response.json();
    const completion = data && data.choices[0].message && message.content;
    // Return the completion along with usage statistics
    return new Response(
      JSON && JSON.stringify({ 
        completion;
        tokensUsed: data && data.usage?.total_tokens || 0
=======

    const data = await response && response.json();
    const completion = data && data.choices[0].message && message.content;
    
    // Return the completion along with usage statistics
    return new Response(

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';
import "https://deno.land / x/xhr@0.1.0 / mod.ts";
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
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
    const openAIApiKey = Deno.env.get ("OPENAI_API_KEY");
    // Check condition
if ( {) {
  $2
}
      throw new Error ("OpenAI API key is not set in environment variables");
    }
    const { prompt, model_id, max_tokens = 500, temperature = 0.7 } = await req.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Prompt is required");
    }
    // Define the appropriate model to use;
    // Default to base model if no specific model provided;
    const model = model_id || "gpt - 3.5 - turbo";
;
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content - Type": "application / json"}
      body: JSON.stringify ({
        model: model,
        messages: [{
          role: "user",
          content: prompt;
        }];
        max_tokens: max_tokens,
        temperature: temperature})});
;
    // Check condition
if ( {) {
  $2
}
      const error_data = await response.json ();
      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
    const completion = data.choices[0].message.content;
;
    // Return the completion along with usage statistics;
    return new Response (
      JSON.stringify ({
        completion;
        tokens_used: data.usage?.total_tokens || 0;
<<<<<<< HEAD
      });
<<<<<<< HEAD
    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }
    const data = await response.json();
    const completion = data.choices[0].message.content;
    // Return the completion along with usage statistics
    return new Response(
      JSON.stringify({
        completion;
        tokensUsed: data.usage?.total_tokens |0
      });

    const data = await response.json(),
    const completion = data.choices[0].message.content,
    
    // Return the completion along with usage statistics
    return new Response(
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      });
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      JSON.stringify({ 
        completion,
        tokensUsed: data.usage?.total_tokens || 0
      }),
<<<<<<< HEAD
<<<<<<< HEAD
    console && console.error("Error in zion-gpt function:", error);
    

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );
  } catch (error) {
<<<<<<< HEAD

    console && console.error("Error in zion-gpt function:", error);
    

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    console.error("Error in zion-gpt function:", error),
    

<<<<<<< HEAD
    console && console.error("Error in zion-gpt function:", error);
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    console.error("Error in zion-gpt function:", error);
    console.error("Error in zion-gpt function:", error),
    
    return new Response(
<<<<<<< HEAD
      JSON.stringify({ error: error.message }),
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      JSON && JSON.stringify({ error: error && error.message });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
<<<<<<< HEAD
<<<<<<< HEAD
  }
});
    console.error ("Error in zion - gpt function:", error);


  }
});

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    console.error ("Error in zion - gpt function:", error);
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
<<<<<<< HEAD
<<<<<<< HEAD
;
  try {;
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!openAIApiKey) {;
      throw new Error("OpenAI API key is not set in environment variables");
    }
;
    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json(),;
    if (!prompt) {;
      throw new Error("Prompt is required");
    }
;
    // Define the appropriate model to use;
    // Default to base model if no specific model provided;
    const model = modelId || "gpt-3.5-turbo",;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method: "POST",;
      headers: {;
        "Authorization": `Bearer ${openAIApiKey}`,;
        "Content-Type": "application/json"},;
      body: JSON.stringify({;
        model: model,;
        messages: [{;
          role: "user",;
          content: prompt;
        }],;
        max_tokens: maxTokens,;
        temperature: temperature})}),;
    if (!response.ok) {;
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }
;
    const data = await response.json(),;
    const completion = data.choices[0].message.content,;
    // Return the completion along with usage statistics;
    return new Response(;
      JSON.stringify({;
        completion,;
        tokensUsed: data.usage?.total_tokens || 0;
      }),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;
    return new Response (
      JSON.stringify ({ error: error.message });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {;
    console.error("Error in zion-gpt function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );


<<<<<<< HEAD
  }
});
;
<<<<<<< HEAD

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!openAIApiKey) {;
      throw new Error("OpenAI API key is not set in environment variables"),;
    }
;
    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json(),;
    ;
    if (!prompt) {;
      throw new Error("Prompt is required"),;
    }
    ;
    // Define the appropriate model to use;
    // Default to base model if no specific model provided;
    const model = modelId || "gpt-3.5-turbo",;
    ;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method:"POST",;
      headers:{;
        "Authorization":`Bearer ${openAIApiKey}`,;
        "Content-Type":"application/json"},;
      body:JSON.stringify({;
        model:model,;
        messages:[{ ;
          role:"user", ;
          content:prompt ;
        }],;
        max_tokens:maxTokens,;
        temperature:temperature})}),;
;
    if (!response.ok) {;
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error:${JSON.stringify(errorData)}`),;
    }
;
    const data = await response.json(),;
    const completion = data.choices[0].message.content,;
    ;
    // Return the completion along with usage statistics;
    return new Response(;
      JSON.stringify({ ;
        completion,;
        tokensUsed:data.usage?.total_tokens || 0;
      }),;
      {;
        headers:{ ...corsHeaders, "Content-Type":"application/json" }}
    ),;
  } catch (error) {;
    console.error("Error in zion-gpt function:", error),;
    ;
    return new Response(;
      JSON.stringify({ error:error.message }),;
      {;
        status:500,;
        headers:{ ...corsHeaders, "Content-Type":"application/json" }}
    ),;  }
}),;
 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}const {
  prompt, modelId, maxTokens = 500, temperature = 0.7 
}= await req.json ();
if (!prompt) {
  
}//Define the appropriate model to use //Default to base model if no specific model provided const response = await fetch ("https://api.openai.com/v1/chat/completions", {
  method: "POST";
headers: {
  "Authorization" : `Bearer $ {
  openAIApiKey 
}`;
"Content-Type" : "application/json" 
};
body: JSON.stringify ({
  model: model;
messages: [ {
  role: "user";
content: prompt 
}];
temperature: temperature 
}) 
});
return new Response (JSON.stringify ({
  error: error.message 
});
{
  status: 500;
);
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
