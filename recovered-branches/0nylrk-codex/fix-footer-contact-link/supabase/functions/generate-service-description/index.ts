
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
    const { title, keyFeatures, targetAudience } = await req.json(),
=======

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { title, _keyFeatures, _targetAudience} = await req.json();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    if (!title) {_return new Response(
        JSON.stringify({ 
<<<<<<< HEAD
          error: &quot;Missing required field: title&quot; 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
=======
          error: "Missing required field: title"}),
        {_status: 400, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      )
    }

<<<<<<< HEAD
    const configuration = new Configuration({
      apiKey: Deno.env.get('OPENAI_API_KEY')}),
    const openai = new OpenAIApi(configuration),
=======
    const _configuration = new Configuration({_apiKey: Deno.env.get('OPENAI_API_KEY')});
    const _openai = new OpenAIApi(configuration);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const _prompt = `Create a professional and detailed service description for the following service:
    
<<<<<<< HEAD
Title: ${title}
Key Features: ${keyFeatures || &quot;Not specified&quot;}
Target Audience: ${targetAudience || &quot;General users&quot;}
=======
Title: ${_title}
Key Features: ${_keyFeatures || "Not specified"}
Target Audience: ${_targetAudience || "General users"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

The description should: 1. Be approximately 200-300 words
2. Highlight the key benefits and unique selling points
3. Use professional language suitable for a marketplace listing
4. Speak directly to the target audience
5. Include a compelling opening and closing statement`,

<<<<<<< HEAD
    const completion = await openai.chat.completions.create({
<<<<<<< HEAD
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7}),
=======
      model: &quot;gpt-4o-mini&quot;,
      messages: [{ role: &quot;user&quot;, content: prompt }],
=======
    const _completion = await openai.chat.completions.create({_model: "gpt-4o-mini", _messages: [{ role: "user", _content: prompt}],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      temperature: 0.7});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
    const generatedDescription = completion.choices[0].message.content,
    
    return new Response(
      JSON.stringify({ description: generatedDescription }),
      { 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
      }
    )
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in generate-service-description:", error),
=======
    console.error(&quot;Error in generate-service-description:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    return new Response(
      JSON.stringify({ 
        error: &quot;Failed to generate service description&quot;,
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
=======
    const _generatedDescription = completion.choices[0].message.content;
    
    return new Response(
      JSON.stringify({_description: generatedDescription}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    );
  } catch (error) {_return new Response(
      JSON.stringify({ 
        error: "Failed to generate service description", _details: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    )
  }
}),
