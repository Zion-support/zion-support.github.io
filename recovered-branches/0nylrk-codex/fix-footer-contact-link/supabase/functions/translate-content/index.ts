
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
  }

  try {
    // Extract request data
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
    }

    // Create translations for each target language
    const translations = {};
    
    for (const targetLang of targetLanguages) {
      if (targetLang === sourceLanguage) {
        translations[targetLang] = content;
        continue;
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
              
              ${content}
              
              Only provide the translated text, no explanations or additional comments.`}],
          temperature: 0.3})});

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      translations[targetLang] = data.choices[0].message.content.trim();
    }

    return new Response(
      JSON.stringify({
        translations}),
      {
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; }}
    );

  } catch (error) {
    console.error(&quot;Error in translate-content function:&quot;, error);
    return new Response(
      JSON.stringify({
        error: error.message}),
      {
        status: 500,
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json" }}
    );
  }
});
