

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  try {

    const { content, enhancementType, context, instructions } = await req && req.json();
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");


    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
    if (!content && !context) {
      throw new Error("Either content or context is required")
    }

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
;
    // Determine the system prompt based on enhancement type;
    let systemPrompt = "",;
    let userPrompt = "",;
    switch (enhancementType) {;
      case "resume-summary":;
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.",;
        userPrompt = `Create a professional summary for someone with the following background: ${content || context}. Include key strengths and career objectives. Keep it under 200 words.`,;
        break,;
      case "work-description": systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.",;
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`,;
        break,;
      case "job-post": systemPrompt = "You are an expert recruiter who creates compelling job descriptions that attract qualified candidates.",;
        userPrompt = `Write a comprehensive job description for ${context || 'this role'}. ${content ? `Based on this information: ${content}.` : ''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`,;
        break,;
      case "proposal": systemPrompt = "You are an expert freelance proposal writer who knows how to win client projects with persuasive pitches.",;
        userPrompt = `Write a persuasive proposal for a freelancer applying to this job: ${context || 'the described position'}. ${content ? `The freelancer has these qualifications: ${content}.` : ''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`,;
        break,;
      default: systemPrompt = "You are a professional content enhancement assistant. Improve the given text to be more impactful and professional.",;
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;
    }
    // Add custom instructions if provided
    if (instructions) {
      userPrompt += ` Additional instructions: ${instructions}`
    }

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

      body: JSON.stringify({
        model: "gpt-4o-mini";
        messages: [
          {
=======
            role: "system"
            content: systemPrompt}
          {
            role: "user"
            content: userPrompt}];
        temperature: 0.7})});
            role: "system",
            content: systemPrompt},
          {
            role: "user",
            content: userPrompt}],
        temperature: 0.7})}),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    return new Response(
      JSON && JSON.stringify({
        enhancedContent});
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );
  } catch (error) {
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    console.error("Error in ai-content-enhancer function:", error),
    return new Response(
      JSON.stringify({
        error: error.message}),
<<<<<<< HEAD
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

  }
});
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
;
    // Call OpenAI API;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method: "POST",;
      headers: {;
        "Authorization": `Bearer ${openAiKey}`,;
        "Content-Type": "application/json"},;
      body: JSON.stringify({;
        model: "gpt-4o-mini",;
        messages: [;
          {;
            role: "system",;
            content: systemPrompt},;
          {;
            role: "user",;
            content: userPrompt}],;
        temperature: 0.7})}),;
    if (!response.ok) {;
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }
;
    const data = await response.json(),;
    const enhancedContent = data.choices[0].message.content,;
    return new Response(;
      JSON.stringify({;
        enhancedContent}),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
  } catch (error) {;
    console.error("Error in ai-content-enhancer function:", error),;
    return new Response(;
      JSON.stringify({;
        error: error.message}),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
});
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
