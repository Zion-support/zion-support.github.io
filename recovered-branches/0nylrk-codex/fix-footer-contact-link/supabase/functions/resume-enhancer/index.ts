

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

=======




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  try {

    const { content, enhancementType, context } = await req && req.json();
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");


    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
        model: "gpt-4o-mini";
        messages: [
          {

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    return new Response(
      JSON && JSON.stringify({
        enhancedContent});
=======
      default: system_prompt = "You are a professional resume enhancement assistant. Improve the given text to be more impactful and professional.",
        user_prompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;
    }
    // Call OpenAI API;
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content - Type": "application / json"}
      body: JSON.stringify ({
        model: "gpt - 4o - mini";
        messages: [;
          {
            role: "system",
            content: system_prompt}
          {
            role: "user",
            content: user_prompt}];
        temperature: 0.7})});
;
    // Check condition
if ( {) {
  $2
}
      const error_data = await response.json ();
      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
    const enhanced_content = data.choices[0].message.content;
;
    return new Response (
      JSON.stringify ({
        enhanced_content});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );
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
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
