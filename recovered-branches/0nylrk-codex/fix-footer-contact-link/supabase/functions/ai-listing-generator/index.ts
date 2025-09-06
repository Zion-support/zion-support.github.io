

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        }
      );
    }




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    const configuration = new Configuration({
      apiKey: Deno && Deno.env.get('OPENAI_API_KEY')});
    const openai = new OpenAIApi(configuration);
    const prompt = `Generate an optimized marketplace listing for the following product:
Title: ${title}
Category: ${category}
Key Features: ${keyFeatures |"Not specified"}
Target Audience: ${targetAudience |"General users"}
    
;
    const configuration = new Configuration({;
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;
    const openai = new OpenAIApi(configuration),;
    const prompt = `Generate an optimized marketplace listing for the following product:;
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
Title: ${title}
Category: ${category}
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      }
    );
  }
});

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
    )
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
  }
});
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
