
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { Configuration, OpenAIApi } from &quot;npm:openai@4.28.0&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { title, keyFeatures, targetAudience } = await req.json();

    if (!title) {
      return new Response(
        JSON.stringify({ 
          error: &quot;Missing required field: title&quot; 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
        }
      );
    }

    const configuration = new Configuration({
      apiKey: Deno.env.get('OPENAI_API_KEY')});
    const openai = new OpenAIApi(configuration);

    const prompt = `Create a professional and detailed service description for the following service:
    
Title: ${title}
Key Features: ${keyFeatures || &quot;Not specified&quot;}
Target Audience: ${targetAudience || &quot;General users&quot;}

The description should:
1. Be approximately 200-300 words
2. Highlight the key benefits and unique selling points
3. Use professional language suitable for a marketplace listing
4. Speak directly to the target audience
5. Include a compelling opening and closing statement`;

    const completion = await openai.chat.completions.create({
      model: &quot;gpt-4o-mini&quot;,
      messages: [{ role: &quot;user&quot;, content: prompt }],
      temperature: 0.7});

    const generatedDescription = completion.choices[0].message.content;
    
    return new Response(
      JSON.stringify({ description: generatedDescription }),
      { 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
      }
    );
  } catch (error) {
    console.error(&quot;Error in generate-service-description:&quot;, error);
    
    return new Response(
      JSON.stringify({ 
        error: &quot;Failed to generate service description&quot;,
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
      }
    );
  }
});
