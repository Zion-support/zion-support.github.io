

import "https: //deno.land/x/xhr@0.1.0/mod.ts",

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }



  try {
    const { content, enhancementType, context, instructions } = await req.json();
    const openAiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")
=======
;
  try {;
    const { content, enhancementType, context, instructions } = await req.json(),;
    const openAiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined");


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    if (!content && !context) {
      throw new Error("Either content or context is required")
    }


    // Determine the system prompt based on enhancement type
    let systemPrompt = "",
    let userPrompt = "",

    switch (enhancementType) {
      case "resume-summary":

    }
    // Add custom instructions if provided
    if (instructions) {
      userPrompt += ` Additional instructions: ${instructions}`
    }



    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"},

      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {

            role: "system",
            content: systemPrompt},
          {
            role: "user",
            content: userPrompt}],
        temperature: 0.7})}),


    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }


    const data = await response.json(),
    const enhancedContent = data.choices[0].message.content,


    return new Response(
      JSON.stringify({
        enhancedContent}),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
    console.error("Error in ai-content-enhancer function:", error),
    return new Response(
      JSON.stringify({
        error: error.message}),
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )


=======
;
    // Call OpenAI API;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method: "POST",;
      headers: {;
        "Authorization": `Bearer ${openAiKey}`,;
        "Content-Type": "application/json"},;
      body: JSON.stringify({;
        model: "gpt-4o-mini",;
        messages: [;
          {;
            role: "system",;
            content: systemPrompt},;
          {;
            role: "user",;
            content: userPrompt}],;
        temperature: 0.7})}),;
    if (!response.ok) {;
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }
;
    const data = await response.json(),;
    const enhancedContent = data.choices[0].message.content,;
    return new Response(;
      JSON.stringify({;
        enhancedContent}),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
  } catch (error) {;
    console.error("Error in ai-content-enhancer function:", error),;
    return new Response(;
      JSON.stringify({;
        error: error.message}),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
