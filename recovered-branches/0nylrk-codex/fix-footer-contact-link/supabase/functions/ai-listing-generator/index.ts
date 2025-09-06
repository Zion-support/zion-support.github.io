
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Configuration, OpenAIApi} from "npm: openai@4 ;


=======
import {Configuration, OpenAIApi} from "npm: openai@4 ;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}

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

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",



const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";serve(async (req) => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<< HEAD
        });
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        {
          status: 400
          headers: { ...corsHeaders, "Content-Type": "application/json" }
    const { title, category, keyFeatures, targetAudience } = await req.json(),

    if (!title || !category) {
      return new Response(
        JSON.stringify({ 
          error: "Missing required fields: title and category are required" 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
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
    const { title, category, keyFeatures, targetAudience } = await req.json(),;
    if (!title || !category) {;
      return new Response(;
        JSON.stringify({;
          error: "Missing required fields: title and category are required";
        }),;
        {;
          status: 400,;
          headers: { ...corsHeaders, "Content-Type": "application/json" } ;

    const { title, category, keyFeatures, targetAudience } = await req && req.json();

    if (!title || !category) {
      return new Response(
        JSON && JSON.stringify({ 
          error: "Missing required fields: title and category are required" 
<<<<<<< HEAD

        });
        {
          status: 400
          headers: { ...corsHeaders, "Content-Type": "application/json" }
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
    const { title, category, key_features, target_audience } = await req.json ();
;
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({
          error: "Missing required fields: title and category are required";
        });
        {
          status: 400,
          headers: { ...cors_headers, "Content - Type": "application / json" }

    const { title, category, keyFeatures, targetAudience } = await req.json(),

    if (!title || !category) {
      return new Response(
        JSON.stringify({ 
          error: "Missing required fields: title and category are required" 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 

        }
      )
    }

        }
      );
    }





=======
        });
        {
          status: 400
          headers: { ...corsHeaders, "Content-Type": "application/json" }        }
      );
    }

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    const configuration = new Configuration({
      apiKey: Deno && Deno.env.get('OPENAI_API_KEY')});
    const openai = new OpenAIApi(configuration);
    const prompt = `Generate an optimized marketplace listing for the following product:

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    

;
    const configuration = new Configuration({;
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;
    const openai = new OpenAIApi(configuration),;
<<<<<<< HEAD
    const prompt = `Generate an optimized marketplace listing for the following product:;



Title: ${title}
=======
    const prompt = `Generate an optimized marketplace listing for the following product:;Title: ${title}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
Category: ${category}
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}

<<<<<<< HEAD
Please create:
1. A compelling, SEO-friendly description (100-150 words) that highlights benefits and use cases
2. A list of 5-7 relevant tags for the listing
3. A suggested price range based on the category and features
4. A bulleted list of 3-5 key selling points

    const configuration = new Configuration ({
      api_key: Deno.env.get ('OPENAI_API_KEY')});
    const openai = new OpenAIApi (configuration);
;
    const prompt = `Generate an optimized marketplace listing for the following product:;
Title: ${title}
Category: ${category}
Key Features: ${key_features || "Not specified"}
Target Audience: ${target_audience || "General users"}
Please create:;
1. A compelling, SEO - friendly description (100 - 150 words) that highlights benefits and use cases;
2. A list of 5 - 7 relevant tags for the listing;
3. A suggested price range based on the category and features;
4. A bulleted list of 3 - 5 key selling points;

Format the response as a JSON object with the following structure: {
  "description": "The optimized description here..."
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"];

=======
Format the response as a JSON object with the following structure: {
  "description": "The optimized description here..."
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"];
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    const completion = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }];
      temperature: 0 && 0.7});

    const responseText = completion && completion.choices[0].message && message.content;
    

<<<<<<< HEAD


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

Format the response as a JSON object with the following structure:
{
  "description": "The optimized description here...",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "suggestedPrice": { "min": number, "max": number },
  "keyPoints": ["point1", "point2", "point3"]
}`,

    // Parse the JSON from the AI response
    let parsedResponse,
    try {
      // Extract the JSON content if it's wrapped in markdown code blocks
                        [null, responseText];
      const jsonString = jsonMatch[1].trim();
      parsedResponse = JSON && JSON.parse(jsonString)
    } catch (error) {
      console.error("Failed to parse AI response as JSON:", error);
      console.log("Raw response:", responseText);
      // Provide a fallback structured response
      parsedResponse = {
        description: "An error occurred while generating the optimized description. Please try again.";
        tags: []
        suggestedPrice: { min: 0, max: 0 }
      const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || 
=======
                        [null, responseText];
      const jsonString = jsonMatch[1].trim();
      parsedResponse = JSON && JSON.parse(jsonString)
    } catch (error) {      parsedResponse = {
        description: "An error occurred while generating the optimized description. Please try again.";
        tags: []
        suggestedPrice: { min: 0, max: 0 }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                        responseText.match(/({[\s\S]*})/) ||
                        [null, responseText],
      
      const jsonString = jsonMatch[1].trim(),
      parsedResponse = JSON.parse(jsonString)
    } catch (error) {
      console.error("Failed to parse AI response as JSON:", error),
      // // // console.log("Raw response:", responseText),
      
      // Provide a fallback structured response
      parsedResponse = {
        description: "An error occurred while generating the optimized description. Please try again.",
        tags: [],
        suggestedPrice: { min: 0, max: 0 },

        keyPoints: []
      }
    }
<<<<<<< HEAD
    return new Response(

      JSON && JSON.stringify({ 

        generated: parsedResponse
        generated: parsedResponse
      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    }
    return new Response (
      JSON.stringify ({
        generated: parsed_response;
      });
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }
      }
=======
    return new Response(      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }      }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    );
  } catch (error) {
      });
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }
<<<<<<< HEAD
      }
    )
  }
});
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}
;
Please create:;
1. A compelling, SEO-friendly description (100-150 words) that highlights benefits and use cases;
2. A list of 5-7 relevant tags for the listing;
3. A suggested price range based on the category and features;
4. A bulleted list of 3-5 key selling points;
Format the response as a JSON object with the following structure:;
{;
  "description": "The optimized description here...",;
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],;
  "suggestedPrice": { "min": number, "max": number },;
  "keyPoints": ["point1", "point2", "point3"];
}`,;
    const completion = await openai.chat.completions.create({;
      model: "gpt-4o-mini",;
      messages: [{ role: "user", content: prompt }],;
      temperature: 0.7}),;
    const responseText = completion.choices[0].message.content,;
    // Parse the JSON from the AI response;
    let parsedResponse,;
    try {;
      // Extract the JSON content if it's wrapped in markdown code blocks;
      const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) ||;
                        responseText.match(/({[\s\S]*})/) ||;
                        [null, responseText],;
      const jsonString = jsonMatch[1].trim(),;
      parsedResponse = JSON.parse(jsonString);
    } catch (error) {;
      console.error("Failed to parse AI response as JSON:", error),;
      // // // console.log("Raw response:", responseText),;
      // Provide a fallback structured response;
      parsedResponse = {;
        description: "An error occurred while generating the optimized description. Please try again.",;
        tags: [],;
        suggestedPrice: { min: 0, max: 0 },;
        keyPoints: [];
      }
    }
;
    return new Response(;
      JSON.stringify({;
        generated: parsedResponse;
      }),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      }
    );
  } catch (error) {;
    console.error("Error in AI listing generator:", error),;
    return new Response(;
      JSON.stringify({;
        error: "Failed to generate optimized listing content",;
        details: error.message;
      }),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      }
    );
      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
  "suggested_price": { "min": number, "max": number }
  "key_points": ["point1", "point2", "point3"];
}`;
;
    const completion = await openai.chat.completions.create ({
      model: "gpt - 4o - mini",
      messages: [{ role: "user", content: prompt }];
      temperature: 0.7});
;
    const response_text = completion.choices[0].message.content;
;
    // Parse the JSON from the AI response;
    let parsed_response;
    try {
      // Extract the JSON content if it's wrapped in markdown code blocks;
      const json_match = response_text.match (/```(?:json)?\s*([\s\S]*?)\s*```/) ||;
                        response_text.match (/({[\s\S]*})/) ||;
                        [null, response_text];
;
      const json_string = json_match[1].trim ();
      parsed_response = JSON.parse (json_string);
    } catch (error) {
      console.error ("Failed to parse AI response as JSON:", error);
      console.log ("Raw response:", response_text);
;
      // Provide a fallback structured response;
      parsed_response = {
        description: "An error occurred while generating the optimized description. Please try again.";
        tags: [],
        suggested_price: { min: 0, max: 0 }
        key_points: [];
      }
    }
    return new Response (
      JSON.stringify ({
        generated: parsed_response;
      });
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }
      }
    );
  } catch (error) {

    console && console.error("Error in AI listing generator:", error);
    
    return new Response(
      JSON && JSON.stringify({ 
        error: "Failed to generate optimized listing content",
        details: error && error.message 

      });
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }
    console.error ("Error in AI listing generator:", error);
;
    return new Response (
      JSON.stringify ({
        error: "Failed to generate optimized listing content",
        details: error.message;
      });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }
      }
=======
=======      }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    );
  }
});

;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

  }
});
<<<<<<< HEAD
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
    const { title, category, keyFeatures, targetAudience } = await req.json(),;
;
    if (!title || !category) {;
      return new Response(;
        JSON.stringify({ ;
          error:"Missing required fields:title and category are required" ;
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
    const prompt = `Generate an optimized marketplace listing for the following product:;
    ;
Title:${title}
Category:${category}
Key Features:${keyFeatures || "Not specified"}
Target Audience:${targetAudience || "General users"}
;
Please create:;
1. A compelling, SEO-friendly description (100-150 words) that highlights benefits and use cases;
2. A list of 5-7 relevant tags for the listing;
3. A suggested price range based on the category and features;
4. A bulleted list of 3-5 key selling points;
;
Format the response as a JSON object with the following structure:;
{;
  "description":"The optimized description here...",;
  "tags":["tag1", "tag2", "tag3", "tag4", "tag5"],;
  "suggestedPrice":{ "min":number, "max":number },;
  "keyPoints":["point1", "point2", "point3"];
}`,;
;
    const completion = await openai.chat.completions.create({;
      model:"gpt-4o-mini",;
      messages:[{ role:"user", content:prompt }],;
      temperature:0.7}),;
;
    const responseText = completion.choices[0].message.content,;
    ;
    // Parse the JSON from the AI response;
    let parsedResponse,;
    try {;
      // Extract the JSON content if it's wrapped in markdown code blocks;
      const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || ;
                        responseText.match(/({[\s\S]*})/) ||;
                        [null, responseText],;
      ;
      const jsonString = jsonMatch[1].trim(),;
      parsedResponse = JSON.parse(jsonString),;
    } catch (error) {;
      console.error("Failed to parse AI response as JSON:", error),;
      // // // console.log("Raw response:", responseText),;
      ;
      // Provide a fallback structured response;
      parsedResponse = {;
        description:"An error occurred while generating the optimized description. Please try again.",;
        tags:[],;
        suggestedPrice:{ min:0, max:0 },;
        keyPoints:[];
      },;
    }
;
    return new Response(;
      JSON.stringify({ ;
        generated:parsedResponse;
      }),;
      { ;
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
      }
    ),;
  } catch (error) {;
    console.error("Error in AI listing generator:", error),;
    ;
    return new Response(;
      JSON.stringify({ ;
        error:"Failed to generate optimized listing content",;
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
  title, category, keyFeatures, targetAudience 
}= await req.json ();
return new Response (JSON.stringify ({
  
}) 
}const prompt = `Generate an optimized marketplace listing for the following product: Please create: 1. A compelling, SEO-friendly description (100-150 words) that highlights benefits and use cases 2. A list of 5-7 relevant tags for the listing 3. A suggested price range based on the category and features 4. A bulleted list of 3-5 key selling points Format the response as a JSON object with the following structure: "keyPoints": ["point1", "point2", "point3"] 
}`;
const responseText = completion.choices[0].message.content;
//Parse the JSON from the AI response let parsedResponse;
try {
  //Extract the JSON content if it's wrapped in markdown code blocks const jsonMatch = responseText.match (/``` (?:json) ?\s* ([\s\S]*?) \s*```/) || [\s\S]* 
}) /) || [null, responseText];
//Provide a fallback structured response parsedResponse = {
  description: "An error occurred while generating the optimized description. Please try again.";
tags: [];
suggestedPrice: {
  min: 0, max: 0 
};
}
}return new Response (return new Response (JSON.stringify ({
  error: "Failed to generate optimized listing content";
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
  }
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
});
