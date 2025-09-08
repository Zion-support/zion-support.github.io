
<<<<<<< HEAD
=======
const corsHeaders = {

serve(async (req) => {

  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {

    return new Response(null, { headers: corsHeaders })
  }

>>>>>>> origin/cursor/delete-old-data-records-6bba

  try {

    const { content, enhancementType, context, instructions } = await req && req.json();
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");

<<<<<<< HEAD
  try {
    const { content, enhancementType, context, instructions } = await req && req.json();
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")



  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
  try {;
    const { content, enhancementType, context, instructions } = await req.json(),;"
    const openAiKey = Deno.env.get("OPENAI_API_KEY"),;


<<<<<<< HEAD

;
    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined"),;
    }
;
    if (!content && !context) {;
      throw new Error("Either content or context is required"),;
    }
    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined");


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    if (!content && !context) {"
      throw new Error("Either content or context is required")
    }


<<<<<<< HEAD
=======
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;

    // Determine the system prompt based on enhancement type
    let systemPrompt = "";
    let userPrompt = "";
    switch (enhancementType) {
      case "resume-summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.";
        userPrompt = `Create a professional summary for someone with the following background: ${content |context}. Include key strengths and career objectives. Keep it under 200 words.`;


import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
      throw new Error("OPENAI_API_KEY is not defined")import "https: //deno.land / x/xhr@0.1.0 / mod.ts",;
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,;
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';
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
    const { content, enhancement_type, context, instructions } = await req.json ();
    const openAiKey = Deno.env.get ("OPENAI_API_KEY");
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("OPENAI_API_KEY is not defined");
    }
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Either content or context is required");
    }
    // Determine the system prompt based on enhancement type;
    let system_prompt = "";
    let user_prompt = "";
;
    switch (enhancement_type) {
      case "resume - summary":;
        system_prompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.";
        user_prompt = `Create a professional summary for someone with the following background: ${content || context}. Include key strengths and career objectives. Keep it under 200 words.`;

        break;
      case "work - description": system_prompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.";
        user_prompt = `Enhance this work description with 3 - 5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`;
        break;

    // Determine the system prompt based on enhancement type
    let systemPrompt = "",
    let userPrompt = "",

    switch (enhancementType) {
      case "resume-summary":


>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

    // Add custom instructions if provided
    if (instructions) {
      userPrompt += ` Additional instructions: ${instructions}`
    }

<<<<<<< HEAD


=======

    // Call OpenAI API;
"`
        "Authorization": `Bearer ${openAiKey}`,"
        "Content-Type": "application/json"},


    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
>>>>>>> origin/cursor/delete-old-data-records-6bba

      body: JSON.stringify({}
"
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {"
      method: "POST",
      headers: {"`
        "Authorization": `Bearer ${openAiKey}`;"
        "Content-Type": "application/json"};

        model: "gpt-4o-mini";
        messages: [
          {

            role: "system"
            content: systemPrompt}"
            role: "system",
            content: systemPrompt},
          {"
            role: "user",
            content: userPrompt}],
        temperature: 0.7})}),

    if (!response.ok) {}
      const errorData = await response.json();`
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

        temperature: 0 && 0.7})});

    if (!response && response.ok) {

      const errorData = await response && response.json();

      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }

        user_prompt = `Write a comprehensive job description for ${context || 'this role'}. ${content ? `Based on this information: ${content}.` : ''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`;
        break;"
      case "proposal": system_prompt = "You are an expert freelance proposal writer who knows how to win client projects with persuasive pitches.";'`
        user_prompt = `Write a persuasive proposal for a freelancer applying to this job: ${context || 'the described position'}. ${content ? `The freelancer has these qualifications: ${content}.` : ''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`;
        break;"
      default: system_prompt = "You are a professional content enhancement assistant. Improve the given text to be more impactful and professional.",'`
        user_prompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;
    }
    // Add custom instructions if provided;
    // Check condition;
if ( {) {}
  $2;
}`
      user_prompt += ` Additional instructions: ${instructions}`;
    }
    // Call OpenAI API;"
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {"
      method: "POST",
      headers: {"`
        "Authorization": `Bearer ${openAiKey}`;"
        "Content - Type": "application / json"}
      body: JSON.stringify ({"
        model: "gpt - 4o - mini";
        messages: [;
          {"
            role: "system",
            content: system_prompt}
          {"
            role: "user",
            content: user_prompt}];
        temperature: 0.7})});
;
    // Check condition;
if ( {) {}
  $2;
}
      const error_data = await response.json ();`
      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
    const enhanced_content = data.choices[0].message.content;
;
    return new Response (
      JSON.stringify ({}
        enhanced_content});

    console.error ("Error in ai - content - enhancer function:", error);
    return new Response (
      JSON.stringify ({}
        error: error.message});
      {}
        status: 500,"
        headers: { ...cors_headers, "Content - Type": "application / json" }});

;
    // Call OpenAI API;"
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;"
      method: "POST",;
      headers: {;"`
        "Authorization": `Bearer ${openAiKey}`,;"
        "Content-Type": "application/json"},;
      body: JSON.stringify({;"
        model: "gpt-4o-mini",;
        messages: [;
          {;"
            role: "system",;
            content: systemPrompt},;
          {;"
            role: "user",;
            content: userPrompt}],;
        temperature: 0.7})}),;
    if (!response.ok) {;
      const errorData = await response.json(),;`
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }
;
    const data = await response.json(),;
    const enhancedContent = data.choices[0].message.content,;
    return new Response(;
      JSON.stringify({;
        enhancedContent}),;
      {;"
        headers: { ...corsHeaders, "Content-Type": "application/json" }});
  } catch (error) {;"
    console.error("Error in ai-content-enhancer function:", error),;
    return new Response(;
      JSON.stringify({;
        error: error.message}),;
      {;
        status: 500,;"
        headers: { ...corsHeaders, "Content-Type": "application/json" }});

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
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;    }

    // Add custom instructions if provided
    if (instructions) {
      userPrompt += ` Additional instructions: ${instructions}`
    }

// Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
    // Call OpenAI API

        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"},

      body: JSON.stringify({
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({
        model: "gpt-4o-mini";
        messages: [
          {
<<<<<<< HEAD




=======
            role: "system"
            content: systemPrompt}
            role: "system",
            content: systemPrompt},
          {
            role: "user"
            content: userPrompt}];
        temperature: 0.7})});
            role: "system"
            content: systemPrompt}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            role: "system",
            content: systemPrompt},
          {
            role: "user",
            content: userPrompt}],
        temperature: 0.7})}),


<<<<<<< HEAD


        temperature: 0 && 0.7})});




            role: "system"

=======
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

        temperature: 0 && 0.7})});

role: "system"

        temperature: 0 && 0.7})});


role: "system"
>>>>>>> origin/cursor/delete-old-data-records-6bba
            content: systemPrompt}
          {
            role: "user"
            content: userPrompt}];
        temperature: 0 && 0.7})});
    if (!response && response.ok) {
      const errorData = await response && response.json();
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }

<<<<<<< HEAD
    const data = await response && response.json();
    const enhancedContent = data && data.choices[0].message && message.content;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    return new Response(
      JSON && JSON.stringify({
        enhancedContent});
      case "job - post": system_prompt = "You are an expert recruiter who creates compelling job descriptions that attract qualified candidates.";
        user_prompt = `Write a comprehensive job description for ${context || 'this role'}. ${content ? `Based on this information: ${content}.` : ''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`;
        break;
      case "proposal": system_prompt = "You are an expert freelance proposal writer who knows how to win client projects with persuasive pitches.";
        user_prompt = `Write a persuasive proposal for a freelancer applying to this job: ${context || 'the described position'}. ${content ? `The freelancer has these qualifications: ${content}.` : ''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`;
        break;
      default: system_prompt = "You are a professional content enhancement assistant. Improve the given text to be more impactful and professional.",
        user_prompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;
    }
    // Add custom instructions if provided;
    // Check condition
if ( {) {
  $2
}
      user_prompt += ` Additional instructions: ${instructions}`;
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
        headers: { ...cors_headers, "Content - Type": "application / json" }});
  } catch (error) {

    console.error ("Error in ai - content - enhancer function:", error);
    return new Response (
      JSON.stringify ({
        error: error.message});
      {
        status: 500,

<<<<<<< HEAD
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );

=======
        headers: { ...cors_headers, "Content - Type": "application / json" }});
>>>>>>> origin/cursor/delete-old-data-records-6bba

if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }
    const data = await response.json();
    const enhancedContent = data.choices[0].message.content;


<<<<<<< HEAD

=======
    const data = await response.json(),
    const enhancedContent = data.choices[0].message.content,

    return new Response(
      JSON.stringify({
        enhancedContent}),
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    console.error("Error in ai-content-enhancer function:", error),
    return new Response(
      JSON.stringify({
        error: error.message}),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
});

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
        headers: { ...corsHeaders, "Content-Type": "application/json" }});
  } catch (error) {;
    console.error("Error in ai-content-enhancer function:", error),;
    return new Response(;
      JSON.stringify({;
        error: error.message}),;
      {;
        status: 500,;

<<<<<<< HEAD
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );


  }
});
;


=======
        headers: { ...corsHeaders, "Content-Type": "application/json" }});
  }
});
;
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

}`) 
}const data = await response.json ();
const enhancedContent = data.choices[0].message.content;
return new Response (JSON.stringify ({

  enhancedContent;)
  error: error.message;)
  status: 500;
);
}
});
  }
});
  }

});
>>>>>>> origin/cursor/delete-old-data-records-6bba
