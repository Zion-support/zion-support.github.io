
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import { Configuration, OpenAIApi } from "npm: openai@4.28.0";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }
  try {
    const { title, keyFeatures, targetAudience } = await req.json($2);
    if (!title) {
      return new Response($2);
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      )
    }

    const configuration = $2;
    const openai = new OpenAIApi($2);
    const prompt = $2;
    const completion = await openai.chat.completions.create($2);
    const generatedDescription = $2;
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
