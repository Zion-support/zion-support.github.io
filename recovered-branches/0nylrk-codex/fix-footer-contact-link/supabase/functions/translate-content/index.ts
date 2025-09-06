

import "https: //deno.land/x/xhr@0.1.0/mod.ts",

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Extract request data

    const { content, sourceLanguage = "en", targetLanguages = ["es", "pt", "ar"], contentType } = await req.json(),

    if (!content || content.trim() === "") {

      throw new Error("Content is required")
    }
    if (!OPENAI_API_KEY) {
      throw new Error("OpenAI API key is not configured")
    }



    // Prepare system prompt based on content type
    let systemPrompt = "You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.",
    if (contentType === "job") {
      systemPrompt = "You are a professional translator specializing in job descriptions. Translate the content accurately while maintaining the professional tone and technical terminology."
    } else if (contentType === "profile") {
      systemPrompt = "You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately."


=======
;
    // Prepare system prompt based on content type;
    let systemPrompt = "You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.",;
    if (contentType === "job") {;
      systemPrompt = "You are a professional translator specializing in job descriptions. Translate the content accurately while maintaining the professional tone and technical terminology.";
    } else if (contentType === "profile") {;
      systemPrompt = "You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately.";
    }
;
    // Create translations for each target language;
    const translations = {},;
    for (const targetLang of targetLanguages) {;
      if (targetLang === sourceLanguage) {;
        translations[targetLang] = content,;
        continue;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST"
        headers: {

          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"},

        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {

              role: "system",
              content: systemPrompt},
            {
              role: "user",
              content: `Translate the following ${contentType || "content"} from ${sourceLanguage} to ${targetLang}: 
              
              ${content}

    }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    return new Response(
      JSON.stringify({
        translations}),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
    console.error("Error in translate-content function:", error),
    return new Response(
      JSON.stringify({
        error: error.message}),
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )


=======
;
    return new Response(;
      JSON.stringify({;
        translations}),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
  } catch (error) {;
    console.error("Error in translate-content function:", error),;
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
