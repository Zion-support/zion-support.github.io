
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
    const { query } = await req.json();
    if (!query) {
      return new Response(
        JSON.stringify({ error: &quot;Query is required&quot; }),
        { status: 400, headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } }
      );
    }

    const openAiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;);
    if (!openAiKey) throw new Error(&quot;OPENAI_API_KEY is not set&quot;);

    const configuration = new Configuration({ apiKey: openAiKey });
    const openai = new OpenAIApi(configuration);

    const prompt = `Interpret the following user search query and extract filters as JSON.\nQuery: &quot;${query}&quot;\nReturn JSON with fields: type, skills, location, budget, availability. Use null if a value is not provided.`;

    const completion = await openai.chat.completions.create({
      model: &quot;gpt-4o-mini&quot;,
      messages: [{ role: &quot;user&quot;, content: prompt }],
      temperature: 0.1});

    const responseText = completion.choices[0].message.content || "&quot;;
    let filters;
    try {
      const match = responseText.match(/\{[\s\S]*\}/);
      filters = match ? JSON.parse(match[0]) : JSON.parse(responseText);
    } catch (_) {
      filters = { type: null, skills: null, location: null, budget: null, availability: null };
    }

    return new Response(
      JSON.stringify({ filters }),
      { headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } }
    );
  } catch (error) {
    console.error(&quot;ai-search error&quot;, error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json" } }
    );
  }
});
