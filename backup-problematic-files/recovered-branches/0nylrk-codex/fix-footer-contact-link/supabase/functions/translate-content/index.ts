
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2",;
;
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY"),;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    // Extract request data;
    const { content, sourceLanguage = "en", targetLanguages = ["es", "pt", "ar"], contentType } = await req.json(),;
;
    if (!content || content.trim() === "") {;
      throw new Error("Content is required"),;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
;
    if (!OPENAI_API_KEY) {;
      throw new Error("OpenAI API key is not configured"),;
    }
;
    // Prepare system prompt based on content type;
    let systemPrompt = "You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.",;
    if (contentType === "job") {;
      systemPrompt = "You are a professional translator specializing in job descriptions. Translate the content accurately while maintaining the professional tone and technical terminology.",;
    } else if (contentType === "profile") {;
      systemPrompt = "You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately.",;
    }
;
    // Create translations for each target language;
    const translations = {},;
    ;
    for (const targetLang of targetLanguages) {;
      if (targetLang === sourceLanguage) {;
        translations[targetLang] = content,;
        continue,;
      }
<<<<<<< HEAD

