
<<<<<<< HEAD
<<<<<<< HEAD
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
<<<<<<< HEAD
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { content, enhancementType, context, instructions } = await req.json(),
    const openAiKey = Deno.env.get("OPENAI_API_KEY"),

    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")
    }

    if (!content && !context) {
      throw new Error("Either content or context is required")
    }

    // Determine the system prompt based on enhancement type
    let systemPrompt = "",
    let userPrompt = "",

    switch (enhancementType) {
      case "resume-summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.",
        userPrompt = `Create a professional summary for someone with the following background: ${content || context}. Include key strengths and career objectives. Keep it under 200 words.`,
        break,
      case "work-description": systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.",
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`,
        break,
      case "job-post": systemPrompt = "You are an expert recruiter who creates compelling job descriptions that attract qualified candidates.",
        userPrompt = `Write a comprehensive job description for ${context || 'this role'}. ${content ? `Based on this information: ${content}.` : ''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`,
        break,
      case "proposal": systemPrompt = "You are an expert freelance proposal writer who knows how to win client projects with persuasive pitches.",
        userPrompt = `Write a persuasive proposal for a freelancer applying to this job: ${context || 'the described position'}. ${content ? `The freelancer has these qualifications: ${content}.` : ''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`,
        break,
      default: systemPrompt = "You are a professional content enhancement assistant. Improve the given text to be more impactful and professional.",
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    // Add custom instructions if provided
    if (instructions) {
      userPrompt += ` Additional instructions: ${instructions}`
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
        temperature: 0.7})}),

    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json(),
    const enhancedContent = data.choices[0].message.content,

    return new Response(
      JSON.stringify({
        enhancedContent}),
      {
<<<<<<< HEAD
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
    console.error("Error in ai-content-enhancer function:", error),
=======
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; }}
    );
  } catch (error) {
    console.error(&quot;Error in ai-content-enhancer function:&quot;, error);
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
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; }}
=======
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { content, _enhancementType, _context, _instructions} = await req.json();
    const _openAiKey = Deno.env.get("OPENAI_API_KEY");

    if (!openAiKey) {_throw new Error("OPENAI_API_KEY is not defined");}

    if (!content && !context) {_throw new Error("Either content or context is required");}

    // Determine the system prompt based on enhancement type
    let _systemPrompt = "";
    let _userPrompt = "";

    switch (enhancementType) {_case "resume-summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, _professional summary that highlights strengths and career goals.";
        userPrompt = `Create a professional summary for someone with the following background: ${content || context}. Include key strengths and career objectives. Keep it under 200 words.`;
        break;
      case "work-description":
        systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.";
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${_content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${_context ? `Role context: ${context}` : ''}`;
        break;
      case "job-post":
        systemPrompt = "You are an expert recruiter who creates compelling job descriptions that attract qualified candidates.";
        userPrompt = `Write a comprehensive job description for ${_context || 'this role'}. ${_content ? `Based on this information: ${content}.` : ''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`;
        break;
      case "proposal":
        systemPrompt = "You are an expert freelance proposal writer who knows how to win client projects with persuasive pitches.";
        userPrompt = `Write a persuasive proposal for a freelancer applying to this job: ${_context || 'the described position'}. ${_content ? `The freelancer has these qualifications: ${content}.` : ''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`;
        break;
      default:
        systemPrompt = "You are a professional content enhancement assistant. Improve the given text to be more impactful and professional.";
        userPrompt = `Enhance this professional text to be more impactful: ${_content}. ${_context ? `Additional context: ${context}` : ''}`;
    }

    // Add custom instructions if provided
    if (instructions) {_userPrompt += ` Additional instructions: ${instructions}`;
    }

    // Call OpenAI API
    const _response = await fetch("https://api.openai.com/v1/chat/completions", {_method: "POST", _headers: {
        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({_model: "gpt-4o-mini", _messages: [
          {
            role: "system", _content: systemPrompt},
          {_role: "user", _content: userPrompt}],
        temperature: 0.7})});

    if (!response.ok) {_const _errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }

    const _data = await response.json();
    const _enhancedContent = data.choices[0].message.content;

    return new Response(
      JSON.stringify({_enhancedContent}),
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
