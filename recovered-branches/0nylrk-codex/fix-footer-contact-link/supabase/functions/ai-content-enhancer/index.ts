
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
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
    );
  }
});
