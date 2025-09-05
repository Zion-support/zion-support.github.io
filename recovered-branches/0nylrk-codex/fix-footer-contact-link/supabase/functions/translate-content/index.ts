
<<<<<<< HEAD
<<<<<<< HEAD
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY"),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
<<<<<<< HEAD
    return new Response(null, { headers: corsHeaders })
=======
import &quot;https://deno.land/x/xhr@0.1.0/mod.ts&quot;;
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2&quot;;

const OPENAI_API_KEY = Deno.env.get(&quot;OPENAI_API_KEY&quot;);

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  try {
    // Extract request data
<<<<<<< HEAD
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
    const { content, sourceLanguage = &quot;en&quot;, targetLanguages = [&quot;es&quot;, &quot;pt&quot;, &quot;ar&quot;], contentType } = await req.json();

    if (!content || content.trim() === "&quot;) {
      throw new Error(&quot;Content is required&quot;);
    }

    if (!OPENAI_API_KEY) {
      throw new Error(&quot;OpenAI API key is not configured&quot;);
    }

    // Prepare system prompt based on content type
    let systemPrompt = &quot;You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.&quot;;
    if (contentType === &quot;job&quot;) {
      systemPrompt = &quot;You are a professional translator specializing in job descriptions. Translate the content accurately while maintaining the professional tone and technical terminology.&quot;;
    } else if (contentType === &quot;profile&quot;) {
      systemPrompt = &quot;You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately.&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    // Create translations for each target language
    const translations = {},
    
    for (const targetLang of targetLanguages) {
      if (targetLang === sourceLanguage) {
        translations[targetLang] = content,
        continue
      }
      
      const response = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
        method: &quot;POST&quot;,
        headers: {
          &quot;Authorization&quot;: `Bearer ${OPENAI_API_KEY}`,
          &quot;Content-Type&quot;: &quot;application/json&quot;},
        body: JSON.stringify({
          model: &quot;gpt-4o-mini&quot;,
          messages: [
            {
              role: &quot;system&quot;,
              content: systemPrompt},
            {
              role: &quot;user&quot;,
              content: `Translate the following ${contentType || &quot;content&quot;} from ${sourceLanguage} to ${targetLang}: 
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              
              ${_content}
              
              Only provide the translated text, no explanations or additional comments.`}],
          temperature: 0.3})}),

<<<<<<< HEAD
      if (!response.ok) {
        const errorData = await response.json(),
        throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
      }

      const data = await response.json(),
      translations[targetLang] = data.choices[0].message.content.trim()
    }

    return new Response(
      JSON.stringify({
        translations}),
      {
<<<<<<< HEAD
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

  } catch (error) {
    console.error("Error in translate-content function:", error),
=======
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; }}
    );

  } catch (error) {
    console.error(&quot;Error in translate-content function:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    return new Response(
      JSON.stringify({
        error: error.message}),
      {
        status: 500,
<<<<<<< HEAD
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
=======
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json" }}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}),
