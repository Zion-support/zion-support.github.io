import {Configuration, OpenAIApi} from "npm: openai@4 ;

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";serve(async (req) => {
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
        {
          status: 400
          headers: { ...corsHeaders, "Content-Type": "application/json" }
    const { title, keyFeatures, targetAudience } = await req.json(),

    const openai = new OpenAIApi(configuration),;
    const prompt = `Create a professional and detailed service description for the following service:;Title: ${title}
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}
    console.error ("Error in generate - service - description:", error);
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}      }
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
