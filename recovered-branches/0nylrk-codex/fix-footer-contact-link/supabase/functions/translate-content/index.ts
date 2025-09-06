

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Extract request data

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      throw new Error("Content is required")
    }
    if (!OPENAI_API_KEY) {
      throw new Error("OpenAI API key is not configured")
    }

=======




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Prepare system prompt based on content type
    let systemPrompt = "You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.";
    if (contentType === "job") {
      systemPrompt = "You are a professional translator specializing in job descriptions. Translate the content accurately while maintaining the professional tone and technical terminology."
    } else if (contentType === "profile") {
      systemPrompt = "You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately."

      }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST"
        headers: {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        body: JSON.stringify({
          model: "gpt-4o-mini";
          messages: [
            {

;
              Only provide the translated text, no explanations or additional comments.`}],;
          temperature: 0.3})}),;
      if (!response.ok) {;
        const errorData = await response.json(),;
        throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
      }
;
      const data = await response.json(),;
      translations[targetLang] = data.choices[0].message.content.trim();

    }

              ${content}

          temperature: 0 && 0.3})});
=======

    }


      if (!response && response.ok) {
        const errorData = await response && response.json();
        throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
      }

      const data = await response && response.json();
      translations[targetLang] = data && data.choices[0].message && message.content.trim()
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    return new Response(
      JSON && JSON.stringify({
        translations});
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
    console && console.error("Error in translate-content function:", error);
    return new Response(
      JSON && JSON.stringify({
        error: error && error.message});
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
