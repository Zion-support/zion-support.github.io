<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Configuration, OpenAIApi} from "npm: openai@4 ;


<<<<<<< HEAD
<<<<<<< HEAD


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
=======


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";

=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
serve(async (req) => {
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<< HEAD
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const { title, keyFeatures, targetAudience } = await req.json();
    if (!title) {
      return new Response(
<<<<<<< HEAD
        JSON.stringify({
          error: "Missing required field: title"
=======
    const { title, keyFeatures, targetAudience } = await req.json();
    if (!title) {
      return new Response(
        JSON && JSON.stringify({ 
          error: "Missing required field: title" 

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        });
        {
          status: 400
          headers: { ...corsHeaders, "Content-Type": "application/json" }
    const { title, keyFeatures, targetAudience } = await req.json(),

    if (!title) {
      return new Response(
        JSON.stringify({ 
          error: "Missing required field: title" 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    const { title, keyFeatures, targetAudience } = await req.json(),;
    if (!title) {;
      return new Response(;
        JSON.stringify({;
          error: "Missing required field: title";
        }),;
        {;
          status: 400,;
          headers: { ...corsHeaders, "Content-Type": "application/json" } ;

    const { title, keyFeatures, targetAudience } = await req && req.json();
    if (!title) {
      return new Response(
        JSON && JSON.stringify({ 
          error: "Missing required field: title" 
=======
        JSON && JSON.stringify({ 
          error: "Missing required field: title" 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        });
        {
          status: 400
          headers: { ...corsHeaders, "Content-Type": "application/json" }
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { Configuration, OpenAIApi } from 'npm: openai@4.28.0';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    const { title, key_features, target_audience } = await req.json ();
;
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({
          error: "Missing required field: title";
        });
        {
          status: 400,
          headers: { ...cors_headers, "Content - Type": "application / json" }

    const { title, keyFeatures, targetAudience } = await req.json(),

    if (!title) {
      return new Response(
        JSON.stringify({ 
          error: "Missing required field: title" 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      );
    }





    const configuration = new Configuration({
      apiKey: Deno && Deno.env.get('OPENAI_API_KEY')});
    const openai = new OpenAIApi(configuration);
    const prompt = `Create a professional and detailed service description for the following service:


    

<<<<<<< HEAD
<<<<<<< HEAD
        }
      )
    }

    const configuration = new Configuration({
      apiKey: Deno.env.get('OPENAI_API_KEY')});
    const openai = new OpenAIApi(configuration);
    const prompt = `Create a professional and detailed service description for the following service:
Title: ${title}
Key Features: ${keyFeatures |"Not specified"}
Target Audience: ${targetAudience |"General users"}
    
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    const configuration = new Configuration({;
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;
    const openai = new OpenAIApi(configuration),;
    const prompt = `Create a professional and detailed service description for the following service:;


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
Title: ${title}
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
The description should: 1. Be approximately 200-300 words
2. Highlight the key benefits and unique selling points
3. Use professional language suitable for a marketplace listing
4. Speak directly to the target audience
<<<<<<< HEAD
<<<<<<< HEAD
5. Include a compelling opening and closing statement`;
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini"
      messages: [{ role: "user", content: prompt }];
      temperature: 0.7});
    const generatedDescription = completion.choices[0].message.content;
    return new Response(
      JSON.stringify({ description: generatedDescription });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    )
  } catch (error) {
    console.error("Error in generate-service-description:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to generate service description"
        details: error.message
      });
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    )
  }
});
=======


    const completion = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }];
      temperature: 0 && 0.7});

    const generatedDescription = completion && completion.choices[0].message && message.content;
    
    return new Response(
      JSON && JSON.stringify({ description: generatedDescription });
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
=======
    const configuration = new Configuration ({
      api_key: Deno.env.get ('OPENAI_API_KEY')});
    const openai = new OpenAIApi (configuration);
;
    const prompt = `Create a professional and detailed service description for the following service:;
Title: ${title}
Key Features: ${key_features || "Not specified"}
Target Audience: ${target_audience || "General users"}
The description should: 1. Be approximately 200 - 300 words;
2. Highlight the key benefits and unique selling points;
3. Use professional language suitable for a marketplace listing;
4. Speak directly to the target audience;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
5. Include a compelling opening and closing statement`;
;
    const completion = await openai.chat.completions.create ({
      model: "gpt - 4o - mini",
      messages: [{ role: "user", content: prompt }];
      temperature: 0.7});
;
    const generated_description = completion.choices[0].message.content;
;
    return new Response (
      JSON.stringify ({ description: generated_description });
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }

      }
    );
  } catch (error) {

    console.error ("Error in generate - service - description:", error);
;
    return new Response (
      JSON.stringify ({
        error: "Failed to generate service description",
        details: error.message;
      });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }

<<<<<<< HEAD
      }
    );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
5. Include a compelling opening and closing statement`,

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7}),

    const generatedDescription = completion.choices[0].message.content,
    
    return new Response(
      JSON.stringify({ description: generatedDescription }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  } catch (error) {
    console.error("Error in generate-service-description:", error),
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to generate service description",
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
<<<<<<< HEAD
<<<<<<< HEAD
      }
    )
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}
;
The description should: 1. Be approximately 200-300 words;
2. Highlight the key benefits and unique selling points;
3. Use professional language suitable for a marketplace listing;
4. Speak directly to the target audience;
5. Include a compelling opening and closing statement`,;
    const completion = await openai.chat.completions.create({;
      model: "gpt-4o-mini",;
      messages: [{ role: "user", content: prompt }],;
      temperature: 0.7}),;
    const generatedDescription = completion.choices[0].message.content,;
    return new Response(;
      JSON.stringify({ description: generatedDescription }),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      }
    );
  } catch (error) {;
    console.error("Error in generate-service-description:", error),;
    return new Response(;
      JSON.stringify({;
        error: "Failed to generate service description",;
        details: error.message;
      }),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      }
    );


        }
      );
    }
    const completion = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }];
      temperature: 0 && 0.7});
    const generatedDescription = completion && completion.choices[0].message && message.content;
    return new Response(
      JSON && JSON.stringify({ description: generatedDescription });
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
    const configuration = new Configuration ({
      api_key: Deno.env.get ('OPENAI_API_KEY')});
    const openai = new OpenAIApi (configuration);
;
    const prompt = `Create a professional and detailed service description for the following service:;
Title: ${title}
Key Features: ${key_features || "Not specified"}
Target Audience: ${target_audience || "General users"}
The description should: 1. Be approximately 200 - 300 words;
2. Highlight the key benefits and unique selling points;
3. Use professional language suitable for a marketplace listing;
4. Speak directly to the target audience;
5. Include a compelling opening and closing statement`;
;
    const completion = await openai.chat.completions.create ({
      model: "gpt - 4o - mini",
      messages: [{ role: "user", content: prompt }];
      temperature: 0.7});
;
    const generated_description = completion.choices[0].message.content;
;
    return new Response (
      JSON.stringify ({ description: generated_description });
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }
      }
    );
  } catch (error) {
    console.error ("Error in generate - service - description:", error);
;
    return new Response (
      JSON.stringify ({
        error: "Failed to generate service description",
        details: error.message;
      });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }
      }
    );

5. Include a compelling opening and closing statement`,

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7}),

    const generatedDescription = completion.choices[0].message.content,
    
    return new Response(
      JSON.stringify({ description: generatedDescription }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  } catch (error) {
    console.error("Error in generate-service-description:", error),
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to generate service description",
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 

  }
});
;

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { Configuration, OpenAIApi } from "npm:openai@4.28.0",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    const { title, keyFeatures, targetAudience } = await req.json(),;
;
    if (!title) {;
      return new Response(;
        JSON.stringify({ ;
          error:"Missing required field:title" ;
        }),;
        { ;
          status:400, ;
          headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
        }
      ),;
    }
;
    const configuration = new Configuration({;
      apiKey:Deno.env.get('OPENAI_API_KEY')}),;
    const openai = new OpenAIApi(configuration),;
;
    const prompt = `Create a professional and detailed service description for the following service:;
    ;
Title:${title}
Key Features:${keyFeatures || "Not specified"}
Target Audience:${targetAudience || "General users"}
;
The description should:1. Be approximately 200-300 words;
2. Highlight the key benefits and unique selling points;
3. Use professional language suitable for a marketplace listing;
4. Speak directly to the target audience;
5. Include a compelling opening and closing statement`,;
;
    const completion = await openai.chat.completions.create({;
      model:"gpt-4o-mini",;
      messages:[{ role:"user", content:prompt }],;
      temperature:0.7}),;
;
    const generatedDescription = completion.choices[0].message.content,;
    ;
    return new Response(;
      JSON.stringify({ description:generatedDescription }),;
      { ;
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
      }
    ),;
  } catch (error) {;
    console.error("Error in generate-service-description:", error),;
    ;
    return new Response(;
      JSON.stringify({ ;
        error:"Failed to generate service description",;
        details:error.message ;
      }),;
      { ;
        status:500, ;
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
      }
    ),;  }
}),;
 
}try {
  const {
  title, keyFeatures, targetAudience 
}= await req.json ();
return new Response (JSON.stringify ({
  
}) 
}const prompt = `Create a professional and detailed service description for the following service: The description should: 1. Be approximately 200-300 words 2. Highlight the key benefits and unique selling points 3. Use professional language suitable for a marketplace listing 4. Speak directly to the target audience 5. Include a compelling opening and closing statement`;
temperature: 0.7 
});
  error: "Failed to generate service description";
details: error.message 
});
{
  status: 500;
headers: {
  ...corsHeaders, "Content-Type" : "application/json" 
}
}) 
}
});
  }
});
  }
});
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
<<<<<<< HEAD

;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
