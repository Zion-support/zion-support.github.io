
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_// Extract request data
    const { content, _sourceLanguage = "en", _targetLanguages = ["es", _"pt", _"ar"], _contentType} = await req.json();

    if (!content || content.trim() === "") {_throw new Error("Content is required");}

    if (!OPENAI_API_KEY) {_throw new Error("OpenAI API key is not configured");}

    // Prepare system prompt based on content type
    let _systemPrompt = "You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.";
    if (contentType === "job") {_systemPrompt = "You are a professional translator specializing in job descriptions. Translate the content accurately while maintaining the professional tone and technical terminology.";} else if (contentType === "profile") {_systemPrompt = "You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately.";}

    // Create translations for each target language
    const _translations = {};
    
    for (const targetLang of targetLanguages) {_if (targetLang === sourceLanguage) {
        translations[targetLang] = content;
        continue;}
      
      const _response = await fetch("https://api.openai.com/v1/chat/completions", {_method: "POST", _headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"},
        body: JSON.stringify({_model: "gpt-4o-mini", _messages: [
            {
              role: "system", _content: systemPrompt},
            {_role: "user", _content: `Translate the following ${contentType || "content"} from ${_sourceLanguage} to ${_targetLang}: 
              
              ${_content}
              
              Only provide the translated text, no explanations or additional comments.`}],
          temperature: 0.3})});

      if (!response.ok) {_const _errorData = await response.json();
        throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
      }

      const _data = await response.json();
      translations[targetLang] = data.choices[0].message.content.trim();
    }

    return new Response(
      JSON.stringify({_translations}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"}}
    );

  } catch (error) {_return new Response(
      JSON.stringify({
        error: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"}}
    );
  }
});
