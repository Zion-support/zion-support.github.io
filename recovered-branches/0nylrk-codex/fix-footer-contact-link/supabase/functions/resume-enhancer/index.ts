
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { content, _enhancementType, _context} = await req.json();
    const _openAiKey = Deno.env.get("OPENAI_API_KEY");

    if (!openAiKey) {_throw new Error("OPENAI_API_KEY is not defined");}

    if (!content) {_throw new Error("Content is required");}

    // Determine the system prompt based on enhancement type
    let _systemPrompt = "";
    let _userPrompt = "";

    switch (enhancementType) {_case "summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, _professional summary that highlights strengths and career goals.";
        userPrompt = `Create a professional summary for someone with the following background: ${content}. Include key strengths and career objectives. Keep it under 200 words. ${_context ? `Additional context: ${context}` : ''}`;
        break;
      case "work-description":
        systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.";
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${_content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${_context ? `Role context: ${context}` : ''}`;
        break;
      case "skill-categorization":
        systemPrompt = "You are an expert at categorizing technical and professional skills. Organize skills into logical categories.";
        userPrompt = `Categorize these skills into logical groups: ${_content}. Return a JSON object with skill categories as keys and arrays of skills as values. Common categories might include: Programming, DevOps, Cloud, Soft Skills, etc. ${_context ? `Professional context: ${context}` : ''}`;
        break;
      default:
        systemPrompt = "You are a professional resume enhancement assistant. Improve the given text to be more impactful and professional.";
        userPrompt = `Enhance this professional text to be more impactful: ${_content}. ${_context ? `Additional context: ${context}` : ''}`;
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
