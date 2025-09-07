
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
    const { content, enhancementType, context, instructions } = await req.json($2);
    const openAiKey = Deno.env.get($2);
    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")
    }
    if (!content && !context) {
      throw new Error("Either content or context is required")
    }
    // Determine the system prompt based on enhancement type
    let systemPrompt = $2;
    let userPrompt = $2;
    switch (enhancementType) {
      case "resume-summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.",
        userPrompt = $2;
        break,
      case "work-description": systemPrompt = $2;
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`,
        break,
      case "job-post": systemPrompt = $2;
        userPrompt = `Write a comprehensive job description for ${context || 'this role'}. ${content ? `Based on this information: ${content}.` : ''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`,
        break,
      case "proposal": systemPrompt = $2;
        userPrompt = `Write a persuasive proposal for a freelancer applying to this job: ${context || 'the described position'}. ${content ? `The freelancer has these qualifications: ${content}.` : ''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`,
        break,
      default: systemPrompt = $2;
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`
    }
    // Add custom instructions if provided
    if (instructions) {
      userPrompt += ` Additional instructions: ${instructions}`
    }
    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content-Type": "application/json"}
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system"
            content: systemPrompt}
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
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  }
}),
