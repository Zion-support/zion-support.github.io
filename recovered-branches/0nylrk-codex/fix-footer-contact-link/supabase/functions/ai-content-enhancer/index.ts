
import &quot;https://deno.land/x/xhr@0.1.0/mod.ts&quot;;
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { content, enhancementType, context, instructions } = await req.json();
    const openAiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;);

    if (!openAiKey) {
      throw new Error(&quot;OPENAI_API_KEY is not defined&quot;);
    }

    if (!content && !context) {
      throw new Error(&quot;Either content or context is required&quot;);
    }

    // Determine the system prompt based on enhancement type
    let systemPrompt = "&quot;;
    let userPrompt = "&quot;;

    switch (enhancementType) {
      case &quot;resume-summary&quot;:
        systemPrompt = &quot;You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.&quot;;
        userPrompt = `Create a professional summary for someone with the following background: ${content || context}. Include key strengths and career objectives. Keep it under 200 words.`;
        break;
      case &quot;work-description&quot;:
        systemPrompt = &quot;You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.&quot;;
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`;
        break;
      case &quot;job-post&quot;:
        systemPrompt = &quot;You are an expert recruiter who creates compelling job descriptions that attract qualified candidates.&quot;;
        userPrompt = `Write a comprehensive job description for ${context || 'this role'}. ${content ? `Based on this information: ${content}.` : ''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`;
        break;
      case &quot;proposal&quot;:
        systemPrompt = &quot;You are an expert freelance proposal writer who knows how to win client projects with persuasive pitches.&quot;;
        userPrompt = `Write a persuasive proposal for a freelancer applying to this job: ${context || 'the described position'}. ${content ? `The freelancer has these qualifications: ${content}.` : ''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`;
        break;
      default:
        systemPrompt = &quot;You are a professional content enhancement assistant. Improve the given text to be more impactful and professional.&quot;;
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;
    }

    // Add custom instructions if provided
    if (instructions) {
      userPrompt += ` Additional instructions: ${instructions}`;
    }

    // Call OpenAI API
    const response = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
      method: &quot;POST&quot;,
      headers: {
        &quot;Authorization&quot;: `Bearer ${openAiKey}`,
        &quot;Content-Type&quot;: &quot;application/json&quot;},
      body: JSON.stringify({
        model: &quot;gpt-4o-mini&quot;,
        messages: [
          {
            role: &quot;system&quot;,
            content: systemPrompt},
          {
            role: &quot;user&quot;,
            content: userPrompt}],
        temperature: 0.7})});

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const enhancedContent = data.choices[0].message.content;

    return new Response(
      JSON.stringify({
        enhancedContent}),
      {
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; }}
    );
  } catch (error) {
    console.error(&quot;Error in ai-content-enhancer function:&quot;, error);
    return new Response(
      JSON.stringify({
        error: error.message}),
      {
        status: 500,
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; }}
    );
  }
});
