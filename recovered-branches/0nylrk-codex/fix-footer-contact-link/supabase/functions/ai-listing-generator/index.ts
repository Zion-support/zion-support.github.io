>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Configuration, OpenAIApi} from "npm: openai@4 ;



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
=======const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
=======


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";

=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",



    if (!title || !category) {
      return new Response(
        JSON.stringify({ 
          error: "Missing required fields: title and category are required" 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }





    const configuration = new Configuration({
      apiKey: Deno && Deno.env.get('OPENAI_API_KEY')});
    const openai = new OpenAIApi(configuration);
    const prompt = `Generate an optimized marketplace listing for the following product:


    

    const configuration = new Configuration({
      apiKey: Deno.env.get('OPENAI_API_KEY')});
    const openai = new OpenAIApi(configuration);
    const prompt = `Generate an optimized marketplace listing for the following product:
Title: ${title}
Category: ${category}
Key Features: ${keyFeatures |"Not specified"}
Target Audience: ${targetAudience |"General users"}
    
=======
==============
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    const configuration = new Configuration({;
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;
    const openai = new OpenAIApi(configuration),;
    const prompt = `Generate an optimized marketplace listing for the following product:;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
Title: ${title}
Category: ${category}
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}

Format the response as a JSON object with the following structure: {
  "description": "The optimized description here..."
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"];
=======
Format the response as a JSON object with the following structure: {
  "description": "The optimized description here..."
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"];

=======


    const completion = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }];
      temperature: 0 && 0.7});
    const responseText = completion && completion.choices[0].message && message.content;
    


    // Parse the JSON from the AI response
    let parsedResponse;
    try {
      // Extract the JSON content if it's wrapped in markdown code blocks
      const jsonMatch = responseText && responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || 
                        responseText && responseText.match(/({[\s\S]*})/) ||
=======

      const jsonMatch = responseText && responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || 
                        responseText && responseText.match(/({[\s\S]*})/) ||
                        [null, responseText];
      const jsonString = jsonMatch[1].trim();
      parsedResponse = JSON && JSON.parse(jsonString)
    } catch (error) {
=======      const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || 
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        keyPoints: []
      }
    }
    return new Response(
      JSON && JSON.stringify({ 
=======

      JSON && JSON.stringify({ 

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        generated: parsedResponse
      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
    console && console.error("Error in AI listing generator:", error);
    
    return new Response(
      JSON && JSON.stringify({ 
        error: "Failed to generate optimized listing content",
        details: error && error.message 

=======
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
=======      }),
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
=======

  }
});>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
