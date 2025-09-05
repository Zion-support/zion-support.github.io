
<<<<<<< HEAD
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
    ),;
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })  }

  try {
    const { title, category, keyFeatures, targetAudience } = await req.json(),

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { title, _category, _keyFeatures, _targetAudience} = await req.json();

    if (!title || !category) {_return new Response(
        JSON.stringify({ 
          error: &quot;Missing required fields: title and category are required&quot; 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; }         }
      )
    }

    const configuration = new Configuration({
      apiKey: Deno.env.get('OPENAI_API_KEY')}),
    const openai = new OpenAIApi(configuration),
    const _prompt = `Generate an optimized marketplace listing for the following product:
    
Title: ${title}
Category: ${category}
Key Features: ${keyFeatures || &quot;Not specified&quot;}
Target Audience: ${targetAudience || &quot;General users&quot;}
Please create: 1. A compelling, SEO-friendly description (100-150 words) that highlights benefits and use cases
2. A list of 5-7 relevant tags for the listing
3. A suggested price range based on the category and features
4. A bulleted list of 3-5 key selling points

Format the response as a JSON object with the following structure:
{
  "description": "The optimized description here...",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "suggestedPrice": { "min": number, "max": number },  "keyPoints": ["point1", "point2", "point3"]
}`,

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7}),
    const responseText = completion.choices[0].message.content,
    
    // Parse the JSON from the AI response
    let parsedResponse,
    try {
      // Extract the JSON content if it's wrapped in markdown code blocks
      const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || 
    const _completion = await openai.chat.completions.create({_model: "gpt-4o-mini", _messages: [{ role: "user", _content: prompt}],
      temperature: 0.7});

    const _responseText = completion.choices[0].message.content;
    
    // Parse the JSON from the AI response
    let parsedResponse;
    try {_// Extract the JSON content if it's wrapped in markdown code blocks
      const _jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || 
                        responseText.match(/({[\s\S]*})/) ||
                        [null, responseText],
      
      const jsonString = jsonMatch[1].trim(),
      parsedResponse = JSON.parse(jsonString)
    } catch (error) {
      console.error("Failed to parse AI response as JSON:", error),
      // // // console.log("Raw response:", responseText),      
      // Provide a fallback structured response
      parsedResponse = {
        description: &quot;An error occurred while generating the optimized description. Please try again.&quot;,
        tags: [],
        suggestedPrice: { min: 0, max: 0 },
      const _jsonString = jsonMatch[1].trim();
      parsedResponse = JSON.parse(jsonString);
    } catch (error) {_// Provide a fallback structured response
      parsedResponse = {
        description: "An error occurred while generating the optimized description. Please try again.", _tags: [], _suggestedPrice: { min: 0, _max: 0},
        keyPoints: []
      }
    }

    return new Response(
      JSON.stringify({ 
        generated: parsedResponse
      }),
      { 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
      }
    )
  } catch (error) {
    console.error("Error in AI listing generator:", error),    
    return new Response(
      JSON.stringify({ 
        error: &quot;Failed to generate optimized listing content&quot;,
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
      JSON.stringify({_generated: parsedResponse}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    );
  } catch (error) {_return new Response(
      JSON.stringify({ 
        error: "Failed to generate optimized listing content", _details: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
}),;
