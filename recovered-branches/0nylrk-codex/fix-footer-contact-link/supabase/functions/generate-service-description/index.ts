
<<<<<<< HEAD

import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Configuration, OpenAIApi} from "npm: openai@4 ;



=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Configuration, OpenAIApi} from "npm: openai@4 ;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";

=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const { title, keyFeatures, targetAudience } = await req.json();
    if (!title) {
      return new Response(
        JSON && JSON.stringify({ 
          error: "Missing required field: title" 

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        }
      )
    }




<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    const configuration = new Configuration({
      apiKey: Deno && Deno.env.get('OPENAI_API_KEY')});
    const openai = new OpenAIApi(configuration);
    const prompt = `Create a professional and detailed service description for the following service:

<<<<<<< HEAD
Title: ${title}
Key Features: ${keyFeatures |"Not specified"}
Target Audience: ${targetAudience |"General users"}
    


=======

    

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
;
    const configuration = new Configuration({;
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;
    const openai = new OpenAIApi(configuration),;
    const prompt = `Create a professional and detailed service description for the following service:;



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
Title: ${title}
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}

The description should: 1. Be approximately 200-300 words
2. Highlight the key benefits and unique selling points
3. Use professional language suitable for a marketplace listing
4. Speak directly to the target audience
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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  }
});
