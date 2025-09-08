

import {Configuration, OpenAIApi} from "npm: openai@4 ;

"
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"";
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";

const corsHeaders = {"
  "Access-Control-Allow-Origin": "*""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}"
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;"
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts","
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",
"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts","
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",


const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",



const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},





serve(async (req) => {

import {Configuration, OpenAIApi} from "npm: openai@4 ;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"

  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const { title, category, keyFeatures, targetAudience } = await req.json();
    if (!title |!category) {
      return new Response(


import { Configuration, OpenAIApi } from 'npm: openai@4.28.0';
const cors_headers = {"
  "Access - Control - Allow - Origin": "*","
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {}
  // Check condition;
if ( {) {}
  $2;
}
    return new Response (null, { headers: cors_headers });
  }
  try {}
    const { title, category, key_features, target_audience } = await req.json ();
;
    // Check condition;
if ( {) {}
  $2;
}
      return new Response (
        JSON.stringify ({"
          error: "Missing required fields: title and category are required";
        });
        {}
          status: 400,"
          headers: { ...cors_headers, "Content - Type": "application / json" }

    const { title, category, keyFeatures, targetAudience } = await req.json(),

    if (!title || !category) {}
      return new Response(
        JSON.stringify({ "
          error: "Missing required fields: title and category are required" 
        }),
        {}
          status: 400, "
          headers: { ...corsHeaders, "Content-Type": "application/json" } 



        }
      );
    }






    const configuration = new Configuration({


      apiKey: Deno && Deno.env.get('OPENAI_API_KEY')});
    const openai = new OpenAIApi(configuration);
    const prompt = `Generate an optimized marketplace listing for the following product:



    


Title: ${title}
Category: ${category}
Key Features: ${keyFeatures |"Not specified"}
Target Audience: ${targetAudience |"General users"}

;
    const configuration = new Configuration({;'
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;

Title: ${title}






Please create:
1. A compelling, SEO-friendly description (100-150 words) that highlights benefits and use cases
2. A list of 5-7 relevant tags for the listing
3. A suggested price range based on the category and features
4. A bulleted list of 3-5 key selling points



      api_key: Deno.env.get ('OPENAI_API_KEY')});
    const openai = new OpenAIApi (configuration);
;`
    const prompt = `Generate an optimized marketplace listing for the following product:;
Title: ${title}
Category: ${category}"
Key Features: ${key_features || "Not specified"}"

Target Audience: ${target_audience || "General users"}
Please create:;
1. A compelling, SEO - friendly description (100 - 150 words) that highlights benefits and use cases;
2. A list of 5 - 7 relevant tags for the listing;
3. A suggested price range based on the category and features;
4. A bulleted list of 3 - 5 key selling points;


Format the response as a JSON object with the following structure: {
  "description": "The optimized description here..."
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"];


    const completion = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",

      messages: [{ role: "user", content: prompt }];

    const configuration = new Configuration({;)
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;
    const openai = new OpenAIApi(configuration),;`;
      apiKey: Deno && Deno.env.get('OPENAI_API_KEY')});'

    const openai = new OpenAIApi(configuration);
    const prompt = `Generate an optimized marketplace listing for the following product:
;

    const configuration = new Configuration({;)'
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;'
    const openai = new OpenAIApi(configuration),;
    const prompt = `Generate an optimized marketplace listing for the following product: ;,
  Title: ${title}
Category: ${category}
Key Features: ${keyFeatures || "Not specified"}""
Target Audience: ${targetAudience || "General users"}"
Please create:
1. A compelling, SEO-friendly description (100-150 words) that highlights benefits and use cases;
2. A list of 5-7 relevant tags for the listing;
3. A suggested price range based on the category and features;
4. A bulleted list of 3-5 key selling points;
    const configuration = new Configuration ({)"
      api_key: Deno.env.get ('OPENAI_API_KEY')});
    const openai = new OpenAIApi (configuration);
;`;
Key Features: ${key_features || "Not specified"}""
Target Audience: ${target_audience || "General users"}"
Please create:;
1. A compelling, SEO - friendly description (100 - 150 words) that highlights benefits and use cases;
2. A list of 5 - 7 relevant tags for the listing;
4. A bulleted list of 3 - 5 key selling points;

Format the response as a JSON object with the following structure: {"
  "description": "The optimized description here..."""
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"];"
    const completion = await openai && openai.chat.completions && completions.create({"
      model: "gpt-4o-mini",""
      messages: [{ role: "user", content: prompt }];")
pr-12325
      temperature: 0 && 0.7});


      temperature: 0 && 0.7});
    const responseText = completion && completion.choices[0].message && message.content;


    // Parse the JSON from the AI response
    let parsedResponse;
    try {
      // Extract the JSON content if it's wrapped in markdown code blocks


      const jsonMatch = responseText && responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || 
                        responseText && responseText.match(/({[\s\S]*})/) ||


                        [null, responseText];
      const jsonString = jsonMatch[1].trim();
      parsedResponse = JSON && JSON.parse(jsonString)
    } catch (error) {


      console && console.log("Raw response:", responseText);
Format the response as a JSON object with the following structure: {

  "description": "The optimized description here..."
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"];
  "suggestedPrice": { "min": number, "max": number }
  "keyPoints": ["point1", "point2", "point3"]
}`;
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini"
      messages: [{ role: "user", content: prompt }];
      temperature: 0.7});
    const responseText = completion.choices[0].message.content;


      // Provide a fallback structured response
      parsedResponse = {

                        [null, responseText];
      const jsonString = jsonMatch[1].trim();
      parsedResponse = JSON && JSON.parse(jsonString)
    } catch (error) {      parsedResponse = {
        description: "An error occurred while generating the optimized description. Please try again.";
        tags: []
        suggestedPrice: { min: 0, max: 0 }


                        responseText.match(/({[\s\S]*})/) ||
                        [null, responseText],
      const jsonString = jsonMatch[1].trim(),

      parsedResponse = JSON.parse(jsonString)


      }
    }
    return new Response(      });
      {

    );
  } catch (error) {});
      {

    );
  }
});

      });
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }


      JSON.stringify({
        generated: parsedResponse


      }),

      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  } catch (error) {

    console.error("Error in AI listing generator:", error),
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to generate optimized listing content",
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 



