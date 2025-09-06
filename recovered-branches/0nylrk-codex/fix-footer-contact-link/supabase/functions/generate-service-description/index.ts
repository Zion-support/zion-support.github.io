
<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<< HEAD
    const { title, keyFeatures, targetAudience } = await req.json();
    if (!title) {
      return new Response(
        JSON.stringify({
          error: "Missing required field: title"
        });
        {
          status: 400
          headers: { ...corsHeaders, "Content-Type": "application/json" }
=======
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
      )
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const configuration = new Configuration({
      apiKey: Deno.env.get('OPENAI_API_KEY')});
    const openai = new OpenAIApi(configuration);
    const prompt = `Create a professional and detailed service description for the following service:
<<<<<<< HEAD
Title: ${title}
Key Features: ${keyFeatures |"Not specified"}
Target Audience: ${targetAudience |"General users"}
=======
    
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
    const configuration = new Configuration({;
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;
    const openai = new OpenAIApi(configuration),;
    const prompt = `Create a professional and detailed service description for the following service:;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
Title: ${title}
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
The description should: 1. Be approximately 200-300 words
2. Highlight the key benefits and unique selling points
3. Use professional language suitable for a marketplace listing
4. Speak directly to the target audience
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
=======
<<<<<<< HEAD
      }
    )
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
