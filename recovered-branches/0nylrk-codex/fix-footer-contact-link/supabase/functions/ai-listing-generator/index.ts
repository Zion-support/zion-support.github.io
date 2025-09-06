
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { Configuration, OpenAIApi } from "npm: openai@4.28.0";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }

  try {
    const { title, category, keyFeatures, targetAudience } = await req.json($2);
    if (!title || !category) {
      return new Response($2);
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      )
    }

    const configuration = $2;
    const openai = new OpenAIApi($2);
    const prompt = `Generate an optimized marketplace listing for the following product: Title: ${title}
Category: ${category}
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}

Please create:
1. A compelling, SEO-friendly description (100-150 words) that highlights benefits and use cases
2. A list of 5-7 relevant tags for the listing
3. A suggested price range based on the category and features
4. A bulleted list of 3-5 key selling points

Format the response as a JSON object with the following structure:
{
  "description": "The optimized description here...",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "suggestedPrice": { "min": number, "max": number },
  "keyPoints": ["point1", "point2", "point3"]
}`,

    const completion = await openai.chat.completions.create($2);
    const responseText = $2;
    // Parse the JSON from the AI response
    let parsedResponse,
    try {
      // Extract the JSON content if it's wrapped in markdown code blocks
      const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || 
                        responseText.match(/({[\s\S]*})/) ||
                        [null, responseText],
      
      const jsonString = jsonMatch[1].trim($2);
      parsedResponse = JSON.parse(jsonString)
    } catch (error) {
      console.error($2);
      console.log($2);
      // Provide a fallback structured response
      parsedResponse = $2;
        tags: [],
        suggestedPrice: { min: 0, max: 0},
        keyPoints: []
      }
    }

    return new Response($2);
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  } catch (error) {
    console.error($2);
    return new Response($2);
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  }
}),
