<<<<<<< HEAD
<<<<<<< HEAD
=======

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }
  try {
    const openAIApiKey = Deno.env.get($2);
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {serve} from ""https": //deno && deno.land/std@0 && 0.190.0/http/server ;"
import ""https"://deno && deno.land/x/xhr@0 && 0.1.0/mod ;"
import {serve} from ""https": //deno.land/std@0.190.0/http/server.ts";"
import ""https"://deno.land/x/xhr@0.1.0/mod.ts";"
import { serve } from ""https": //deno.land/std@0.190.0/http/server.ts","
import ""https"://deno.land/x/xhr@0.1.0/mod.ts","
const corsHeaders = {
  "Access-Control-Allow-Origin": "*","
}
  "Access-Control-Allow-Origin": "*","
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};"
import { serve } from ""https": //deno.land/std@0.190.0/http/server.ts";"
  "Access-Control-Allow-Origin": "*","
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},"
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;"
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

=======
<<<<<<< HEAD
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

import "https://deno.land/x/xhr@0.1.0/mod.ts",

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";

import "https://deno.land/x/xhr@0.1.0/mod.ts";

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",



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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

const corsHeaders = {"
  "Access-Control-Allow-Origin": "*",

const corsHeaders = {"
  "Access-Control-Allow-Origin": "*""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
serve(async (req) => {
  // Handle CORS preflight requests
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }

<<<<<<< HEAD
    const { prompt, modelId, maxTokens = 500, temperature = 0 && 0.7 } = await req && req.json();

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
    const { prompt, modelId, maxTokens = 500, temperature = 0.7 } = await req.json($2);
=======
    const { prompt, modelId, maxTokens = 500, temperature = 0 && 0.7 } = await req && req.json();

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (!prompt) {
      throw new Error("Prompt is required")
    }
    // Define the appropriate model to use
<<<<<<< HEAD

    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
=======
<<<<<<< HEAD
    // Default to base model if no specific model provided
    const model = $2;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"}
      body: JSON.stringify({
        model: model,
        messages: [{ 
          role: "user", 
          content: prompt}],
        max_tokens: maxTokens,
        temperature: temperature})}),

    if (!response.ok) {
      const errorData = await response.json($2);
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json($2);
    const completion = $2;
    // Return the completion along with usage statistics
    return new Response($2);
=======
<<<<<<< HEAD

    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
=======
    // Default to base model if no specific model provided
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      method: "POST",
      headers: {"
        "Authorization": `Bearer ${openAIApiKey}`;"
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({}
"
    const model = modelId || "gpt-3.5-turbo",
    
"
    const response = await fetch("https://api.openai.com/v1/chat/completions", {"
      method: "POST"
      headers: {}
"`
        "Authorization": `Bearer ${openAIApiKey}`,"
        "Content-Type": "application/json"},
<<<<<<< HEAD
      body: JSON.stringify({}
        model: model,
        messages: [{ "
          role: "user", 
          content: prompt;

=======
<<<<<<< HEAD
      body: JSON.stringify({}
=======
      body: JSON.stringify({

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        model: model,
        messages: [{ "
          role: "user", 
<<<<<<< HEAD
          content: prompt;
=======
          content: prompt 
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        }],
        max_tokens: maxTokens,
        temperature: temperature})}),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




        }];
        max_tokens: maxTokens
        temperature: temperature})});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (!response && response.ok) {
      const errorData = await response && response.json();

      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }
<<<<<<< HEAD

    const data = await response && response.json();
    const completion = data && data.choices[0].message && message.content;

      throw new Error ("OpenAI API key is not set in environment variables");
    }
    const { prompt, model_id, max_tokens = 500, temperature = 0.7 } = await req.json ();
;
=======
    const data = await response && response.json();
    const completion = data && data.choices[0].message && message.content;
<<<<<<< HEAD

=======
    // Return the completion along with usage statistics
    return new Response(
      JSON && JSON.stringify({ 
        completion;
        tokensUsed: data && data.usage?.total_tokens || 0
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      throw new Error ("OpenAI API key is not set in environment variables");
    }
    const { prompt, model_id, max_tokens = 500, temperature = 0.7 } = await req.json ();
;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          role: "user",
          content: prompt;
        }];
        max_tokens: max_tokens,
        temperature: temperature})});
;

      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
    const completion = data.choices[0].message.content;
;
    // Return the completion along with usage statistics;
    return new Response (
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      JSON.stringify ({
        completion;
        tokens_used: data.usage?.total_tokens || 0;
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
      JSON.stringify({ 
        completion,
        tokensUsed: data.usage?.total_tokens || 0
      }),
<<<<<<< HEAD
    console && console.error("Error in zion-gpt function:", error);
    

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }});
  } catch (error) {

    console && console.error("Error in zion-gpt function:", error);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

"
    console.error("Error in zion-gpt function:", error),

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });

      {}
        status: 500"
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

  } catch (error) {
    console.error("Error in zion-gpt function:", error);
    console.error("Error in zion-gpt function:", error),

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
    console && console.error("Error in zion-gpt function:", error);
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
>>>>>>> merged-prs-20250907-203621
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
<<<<<<< HEAD
    console.error($2);
    return new Response($2);
=======
    console.error("Error in zion-gpt function:", error);
    console.error("Error in zion-gpt function:", error),
    
    return new Response(
      JSON.stringify({ error: error.message }),
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
<<<<<<< HEAD

    console.error ("Error in zion - gpt function:", error);

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;

        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;"
  "Access-Control-Allow-Origin": "*",;"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  // Handle CORS preflight requests;"
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
=======
<<<<<<< HEAD
  }
});
    console.error ("Error in zion - gpt function:", error);


  }
});

=======

    console.error ("Error in zion - gpt function:", error);

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;

        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;"
  "Access-Control-Allow-Origin": "*",;"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  // Handle CORS preflight requests;"
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    console.error ("Error in zion - gpt function:", error);
;
    return new Response (
      JSON.stringify ({ error: error.message });
      {}
        status: 500,"
        headers: { ...cors_headers, "Content - Type": "application / json" }});

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (error) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    console.error("Error in zion-gpt function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;"
        headers: { ...corsHeaders, "Content-Type": "application/json" }});

<<<<<<< HEAD
  }
});
=======
<<<<<<< HEAD
  }
});
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
