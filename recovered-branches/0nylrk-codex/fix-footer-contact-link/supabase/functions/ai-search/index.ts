
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { Configuration, OpenAIApi } from "npm: openai@4.28.0";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }

  try {
    const { query } = await req.json($2);
    if (!query) {
      return new Response($2);
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    const openAiKey = Deno.env.get($2);
    if (!openAiKey) throw new Error($2);
    const configuration = new Configuration($2);
    const openai = new OpenAIApi($2);
    const prompt = `Interpret the following user search query and extract filters as JSON.\nQuery: "${query}"\nReturn JSON with fields: type, skills, location, budget, availability. Use null if a value is not provided.`,

    const completion = await openai.chat.completions.create($2);
    const responseText = $2;
    let filters,
    try {
      const match = responseText.match($2);
      filters = match ? JSON.parse(match[0]) : JSON.parse(responseText)
    } catch (_) {
      filters = { type: null, skills: null, location: null, budget: null, availability: null}
    }

    return new Response($2);
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {
    console.error($2);
    return new Response($2);
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
}),
