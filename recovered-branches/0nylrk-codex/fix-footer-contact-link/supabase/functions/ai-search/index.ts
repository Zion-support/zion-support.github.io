

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const { query } = await req.json(),
    if (!query) {
      return new Response(

        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    try {
      const match = responseText.match(/\{[\s\S]*\}/),
      filters = match ? JSON.parse(match[0]) : JSON.parse(responseText)
    } catch (_) {
      filters = { type: null, skills: null, location: null, budget: null, availability: null }
    }
    return new Response(

  }
});
