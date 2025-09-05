
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
=======
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { Configuration, OpenAIApi } from &quot;npm:openai@4.28.0&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  try {
    const { title, category, keyFeatures, targetAudience } = await req.json(),

    if (!title || !category) {
      return new Response(
        JSON.stringify({ 
          error: &quot;Missing required fields: title and category are required&quot; 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        }
      );
    }
;
    const configuration = new Configuration({;
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;
    const openai = new OpenAIApi(configuration),;
    const prompt = `Generate an optimized marketplace listing for the following product:;
Title: ${title}
Category: ${category}
<<<<<<< HEAD
Key Features: ${keyFeatures || &quot;Not specified&quot;}
Target Audience: ${targetAudience || &quot;General users&quot;}

Please create:
1. A compelling, SEO-friendly description (100-150 words) that highlights benefits and use cases
2. A list of 5-7 relevant tags for the listing
3. A suggested price range based on the category and features
4. A bulleted list of 3-5 key selling points

Format the response as a JSON object with the following structure:
{
<<<<<<< HEAD
  "description": "The optimized description here...",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "suggestedPrice": { "min": number, "max": number },
  "keyPoints": ["point1", "point2", "point3"]
}`,

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7}),
=======
  &quot;description&quot;: &quot;The optimized description here...&quot;,
  &quot;tags&quot;: [&quot;tag1&quot;, &quot;tag2&quot;, &quot;tag3&quot;, &quot;tag4&quot;, &quot;tag5&quot;],
  &quot;suggestedPrice&quot;: { &quot;min&quot;: number, &quot;max&quot;: number },
  &quot;keyPoints&quot;: [&quot;point1&quot;, &quot;point2&quot;, &quot;point3&quot;]
}`;

    const completion = await openai.chat.completions.create({
      model: &quot;gpt-4o-mini&quot;,
      messages: [{ role: &quot;user&quot;, content: prompt }],
      temperature: 0.7});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    const responseText = completion.choices[0].message.content,
    
    // Parse the JSON from the AI response
    let parsedResponse,
    try {
      // Extract the JSON content if it's wrapped in markdown code blocks
      const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || 
                        responseText.match(/({[\s\S]*})/) ||
                        [null, responseText],
      
      const jsonString = jsonMatch[1].trim(),
      parsedResponse = JSON.parse(jsonString)
    } catch (error) {
<<<<<<< HEAD
      console.error("Failed to parse AI response as JSON:", error),
      // // // console.log("Raw response:", responseText),
=======
      console.error(&quot;Failed to parse AI response as JSON:&quot;, error);
      // console.log(&quot;Raw response:&quot;, responseText);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Provide a fallback structured response
      parsedResponse = {
        description: &quot;An error occurred while generating the optimized description. Please try again.&quot;,
        tags: [],
        suggestedPrice: { min: 0, max: 0 },
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
<<<<<<< HEAD
    console.error("Error in AI listing generator:", error),
=======
    console.error(&quot;Error in AI listing generator:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    return new Response(
      JSON.stringify({ 
        error: &quot;Failed to generate optimized listing content&quot;,
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
    );
  }
});