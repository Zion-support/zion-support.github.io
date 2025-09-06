
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY"),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};
>>>>>>> main

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Extract request data
<<<<<<< HEAD
    const { content, sourceLanguage = "en", targetLanguages = ["es", "pt", "ar"], contentType } = await req.json(),
=======
    const { content, sourceLanguage = "en", targetLanguages = ["es", "pt", "ar"], contentType } = await req.json();
>>>>>>> main

    if (!content || content.trim() === "") {
      throw new Error("Content is required")
    }
<<<<<<< HEAD
;
    if (!OPENAI_API_KEY) {;
      throw new Error("OpenAI API key is not configured");
    }

    // Prepare system prompt based on content type
    let systemPrompt = "You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.",
=======

    if (!OPENAI_API_KEY) {
      throw new Error("OpenAI API key is not configured")
    }

    // Prepare system prompt based on content type
    let systemPrompt = "You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.";
>>>>>>> main
    if (contentType === "job") {
      systemPrompt = "You are a professional translator specializing in job descriptions. Translate the content accurately while maintaining the professional tone and technical terminology."
    } else if (contentType === "profile") {
      systemPrompt = "You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately."
<<<<<<< HEAD
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
=======
    }

    // Create translations for each target language
    const translations = {};
    
    for (const targetLang of targetLanguages) {
      if (targetLang === sourceLanguage) {
        translations[targetLang] = content;
        continue
>>>>>>> main
      }
      
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
<<<<<<< HEAD
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"},
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: systemPrompt},
=======
          "Authorization": `Bearer ${OPENAI_API_KEY}`;
          "Content-Type": "application/json"};
        body: JSON.stringify({
          model: "gpt-4o-mini";
          messages: [
            {
              role: "system",
              content: systemPrompt};
>>>>>>> main
            {
              role: "user",
              content: `Translate the following ${contentType || "content"} from ${sourceLanguage} to ${targetLang}: 
              
              ${content}
<<<<<<< HEAD
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
=======
              
              Only provide the translated text, no explanations or additional comments.`}];
          temperature: 0.3})});

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
      }

      const data = await response.json();
      translations[targetLang] = data.choices[0].message.content.trim()
>>>>>>> main
    }

    return new Response(
      JSON.stringify({
<<<<<<< HEAD
        translations}),
=======
        translations});
>>>>>>> main
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

  } catch (error) {
<<<<<<< HEAD
    console.error("Error in translate-content function:", error),
    return new Response(
      JSON.stringify({
        error: error.message}),
=======
    console.error("Error in translate-content function:", error);
    return new Response(
      JSON.stringify({
        error: error.message});
>>>>>>> main
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
<<<<<<< HEAD
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
  }
});
=======
  }
});
>>>>>>> main
