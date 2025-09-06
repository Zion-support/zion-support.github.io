<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts

<<<<<<< HEAD

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm ;
const OPENAI_API_KEY = Deno && Deno.env.get("OPENAI_API_KEY");
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts
=======


import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY"),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Extract request data
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts
    const { content, sourceLanguage = "en", targetLanguages = ["es", "pt", "ar"], contentType } = await req && req.json();
    if (!content || content && content.trim() === "") {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts

=======

    const { content, sourceLanguage = "en", targetLanguages = ["es", "pt", "ar"], contentType } = await req.json(),

    if (!content || content.trim() === "") {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts
      throw new Error("Content is required")
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    }
;
    if (!OPENAI_API_KEY) {;
      throw new Error("OpenAI API key is not configured"),;
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // Prepare system prompt based on content type
    let systemPrompt = "You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.";
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const { content, sourceLanguage = "en", targetLanguages = ["es", "pt", "ar"], contentType } = await req.json();
    if (!content |content.trim() === "") {
    const { content, sourceLanguage = "en", targetLanguages = ["es", "pt", "ar"], contentType } = await req.json(),

    if (!content || content.trim() === "") {
      throw new Error("Content is required")
    }
    if (!OPENAI_API_KEY) {
      throw new Error("OpenAI API key is not configured")
    }

    // Prepare system prompt based on content type
    let systemPrompt = "You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (contentType === "job") {
      systemPrompt = "You are a professional translator specializing in job descriptions. Translate the content accurately while maintaining the professional tone and technical terminology."
    } else if (contentType === "profile") {
      systemPrompt = "You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately."
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    // Create translations for each target language
    const translations = {}
    for (const targetLang of targetLanguages) {
      if (targetLang === sourceLanguage) {
        translations[targetLang] = content;
        continue
      }
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      }

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST"
        headers: {

<<<<<<< HEAD
=======
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"},

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        body: JSON.stringify({
=======
      
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts
      const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`;
          "Content-Type": "application/json"};
        body: JSON && JSON.stringify({
          model: "gpt-4o-mini";
          messages: [
            {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
      
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST"
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`;
          "Content-Type": "application/json"}
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"},
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system"
              content: systemPrompt}
            {
              role: "user"
              content: `Translate the following ${contentType |"content"} from ${sourceLanguage} to ${targetLang}:
              ${content}
              Only provide the translated text, no explanations or additional comments.`}];
          temperature: 0.3})});
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
      }
      const data = await response.json();
      translations[targetLang] = data.choices[0].message.content.trim()
    }
              role: "system",
              content: systemPrompt},
            {
              role: "user",
              content: `Translate the following ${contentType || "content"} from ${sourceLanguage} to ${targetLang}: 
              
              ${content}
              
              Only provide the translated text, no explanations or additional comments.`}];
          temperature: 0.3})});

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
      }

      const data = await response.json();
      translations[targetLang] = data.choices[0].message.content.trim()
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

    }

=======

========
              role: "system"
              content: systemPrompt}
            {
              role: "user"
              content: `Translate the following ${contentType |"content"} from ${sourceLanguage} to ${targetLang}:
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';
const OPENAI_API_KEY = Deno.env.get ("OPENAI_API_KEY");
;
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    // Extract request data;
    const { content, source_language = "en", target_languages = ["es", "pt", "ar"], content_type } = await req.json ();
;
    // Check condition
if (=== "") {) {
  $2
}
      throw new Error ("Content is required");
    }
    // Check condition
if ( {) {
  $2
}
      throw new Error ("OpenAI API key is not configured");
    }
    // Prepare system prompt based on content type;
    let system_prompt = "You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.";
    // Check condition
if ( {) {
  $2
}
      system_prompt = "You are a professional translator specializing in job descriptions. Translate the content accurately while maintaining the professional tone and technical terminology.";
    } else // Check condition
if ( {) {
  $2
}
      system_prompt = "You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately.";
    }
    // Create translations for each target language;
    const translations = {}
;
    for (const target_lang of target_languages) {
      // Check condition
if ( {) {
  $2
}
        translations[target_lang] = content;
        continue;
      }
      const response = await fetch ("https://api.openai.com / v1 / chat / completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`;
          "Content - Type": "application / json"}
        body: JSON.stringify ({
          model: "gpt - 4o - mini";
          messages: [;
            {
=======


              role: "system",
              content: system_prompt}
            {
              role: "user",
              content: `Translate the following ${content_type || "content"} from ${source_language} to ${target_lang}:;
              ${content}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts

          temperature: 0 && 0.3})});
=======

    }


========
              Only provide the translated text, no explanations or additional comments.`}];
          temperature: 0 && 0.3})});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts
      if (!response && response.ok) {
        const errorData = await response && response.json();
        throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
      }
      const data = await response && response.json();
      translations[targetLang] = data && data.choices[0].message && message.content.trim()
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return new Response(
      JSON && JSON.stringify({
        translations});
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }

    return new Response(
      JSON.stringify({
        translations}),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
<<<<<<< HEAD
    console && console.error("Error in translate-content function:", error);
    return new Response(
      JSON && JSON.stringify({
        error: error && error.message});
=======
    console.error("Error in translate-content function:", error),
    return new Response(
      JSON.stringify({
        error: error.message}),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts

<<<<<<< HEAD
=======



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  }
});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts
;
      // Check condition
if ( {) {
  $2
}
        const error_data = await response.json ();
        throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
      }
      const data = await response.json ();
      translations[target_lang] = data.choices[0].message.content.trim ();
    }
    return new Response (
      JSON.stringify ({
        translations});
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );
  } catch (error) {
    console.error ("Error in translate - content function:", error);
    return new Response (
      JSON.stringify ({
        error: error.message});
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
  }
});

=======
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
      ;
      const response = await fetch("https://api.openai.com/v1/chat/completions", {;
        method:"POST",;
        headers:{;
          "Authorization":`Bearer ${OPENAI_API_KEY}`,;
          "Content-Type":"application/json"},;
        body:JSON.stringify({;
          model:"gpt-4o-mini",;
          messages:[;
            {;
              role:"system",;
              content:systemPrompt},;
            {;
              role:"user",;
              content:`Translate the following ${contentType || "content"} from ${sourceLanguage} to ${targetLang} ${content}
              ;
              Only provide the translated text, no explanations or additional comments.`}],;
          temperature:0.3})}),;
;
      if (!response.ok) {;
        const errorData = await response.json(),;
        throw new Error(`OpenAI API error:${JSON.stringify(errorData)}`),;
      }
;
      const data = await response.json(),;
      translations[targetLang] = data.choices[0].message.content.trim(),;
    }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
});

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
    return new Response(;
      JSON.stringify({;
        translations}),;
      {;
<<<<<<< HEAD
        headers:{ ...corsHeaders, "Content-Type":"application/json" }}
    ),;
;
=======
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {;
    console.error("Error in translate-content function:", error),;
    return new Response(;
      JSON.stringify({;
<<<<<<< HEAD
        error:error.message}),;
      {;
        status:500,;
        headers:{ ...corsHeaders, "Content-Type":"application/json" }}
    ),;  }
}),;
 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}try {
  //Extract request data 
}//Create translations for each target language const translations = {
  
};
for (const targetLang of targetLanguages) {
  if (targetLang === sourceLanguage) {
  translations[targetLang] = content;
continue 
}const response = await fetch ("https://api.openai.com/v1/chat/completions", {
  method: "POST";
headers: {
  "Authorization" : `Bearer $ {
  OPENAI API KEY 
}`;
"Content-Type" : "application/json" 
};
body: JSON.stringify ({
  model: "gpt-4o-mini";
messages: [ {
  role: "system";
content: systemPrompt 
};
{
  role: "user";
content: `Translate the following $ {
  contentType || "content" 
}from $ {
  sourceLanguage 
}to $ {
  targetLang 
}: content 
}Only provide the translated text, no explanations or additional comments.` 
}];
temperature: 0.3 
}) 
});
return new Response (JSON.stringify ({
  error: error.message 
});
{
  status: 500;
);
}
});
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/translate-content/index.ts
=======
        error: error.message}),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
  }
});
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
