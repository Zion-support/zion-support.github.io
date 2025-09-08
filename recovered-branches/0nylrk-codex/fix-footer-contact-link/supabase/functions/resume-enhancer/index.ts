const corsHeaders = {

  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {

    return new Response(null, { headers: corsHeaders })
  }

  try {

    const { content, enhancementType, context } = await req && req.json();
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {

  try {
    const { content, enhancementType, context } = await req.json();
    const openAiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")      case "work - description": system_prompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.";
        user_prompt = `Enhance this work description with 3 - 5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`;
        break;
      case "skill - categorization": system_prompt = "You are an expert at categorizing technical and professional skills. Organize skills into logical categories.";
        user_prompt = `Categorize these skills into logical groups: ${content}. Return a JSON object with skill categories as keys and arrays of skills as values. Common categories might include: Programming, DevOps, Cloud, Soft Skills, etc. ${context ? `Professional context: ${context}` : ''}`;
        break;        temperature: 0 && 0.7})});

      const errorData = await response && response.json();
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }

    return new Response(
      JSON && JSON.stringify({
        enhancedContent});
      default: system_prompt = "You are a professional resume enhancement assistant. Improve the given text to be more impactful and professional.",
        user_prompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;
    }
    // Call OpenAI API;
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content - Type": "application / json"}
      body: JSON.stringify ({
        model: "gpt - 4o - mini";
        messages: [;
          {
            role: "system",
            content: system_prompt}
          {
            role: "user",
            content: user_prompt}];
        temperature: 0.7})});
;
    // Check condition
if ( {) {
  $2
}
      const error_data = await response.json ();
      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
    const enhanced_content = data.choices[0].message.content;
;
    return new Response (
      JSON.stringify ({
        enhanced_content});
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );
  } catch (error) {
    console.error ("Error in resume - enhancer function:", error);
    return new Response (
      JSON.stringify ({
        error: error.message});
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );

