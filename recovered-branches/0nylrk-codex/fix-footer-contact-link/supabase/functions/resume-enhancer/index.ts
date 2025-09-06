

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { content, enhancementType, context } = await req.json();
    const openAiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")

    }
    if (!content) {
      throw new Error("Content is required")
    }

        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`
    }
    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {

    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    return new Response(
      JSON.stringify({
        enhancedContent}),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
    console.error("Error in resume-enhancer function:", error),
    return new Response(
      JSON.stringify({
        error: error.message}),
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

  }
});
