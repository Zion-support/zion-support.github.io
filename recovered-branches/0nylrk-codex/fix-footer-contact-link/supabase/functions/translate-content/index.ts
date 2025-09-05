
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY"),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })  }

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
      systemPrompt = "You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately."    }

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
          temperature: 0.3})}),

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
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

  } catch (error) {
    console.error("Error in translate-content function:", error),    return new Response(
      JSON.stringify({
        error: error.message}),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )    );
  }
}),
