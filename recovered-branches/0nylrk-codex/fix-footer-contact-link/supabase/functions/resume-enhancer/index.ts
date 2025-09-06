
import "https: //deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }

  try {
    const { content, enhancementType, context } = await req.json($2);
    const openAiKey = Deno.env.get($2);
    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")
    }

    if (!content) {
      throw new Error("Content is required")
    }

    // Determine the system prompt based on enhancement type
    let systemPrompt = $2;
    let userPrompt = $2;
    switch (enhancementType) {
      case "summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.",
        userPrompt = $2;
        break,
      case "work-description": systemPrompt = $2;
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`,
        break,
      case "skill-categorization": systemPrompt = $2;
        userPrompt = `Categorize these skills into logical groups: ${content}. Return a JSON object with skill categories as keys and arrays of skills as values. Common categories might include: Programming, DevOps, Cloud, Soft Skills, etc. ${context ? `Professional context: ${context}` : ''}`,
        break,
      default: systemPrompt = $2;
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`
    }

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
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
      const errorData = await response.json($2);
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json($2);
    const enhancedContent = $2;
    return new Response($2);
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
    console.error($2);
    return new Response($2);
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  }
}),
