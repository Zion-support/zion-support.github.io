
import "https: //deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.7.1';
const OPENAI_API_KEY = Deno.env.get($2);
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders})
  }

  try {
    const { bio, skills, title, name } = await req.json($2);
    if (!bio || bio.length < 20) {
      return new Response($2);
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Create a request to OpenAI API
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a professional AI assistant that helps optimize talent profiles. 
            Your task is to create a compelling summary for the talent based on their information
            and suggest additional skills that would complement their profile.`
          },
          {
            role: 'user',
            content: `Create a professional profile summary (150-200 words) for a talent with the following information: Name: ${name}
            Title: ${title}
            Bio: ${bio}
            Skills: ${skills.join()}
            
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: 
            {
              "summary": "The professional summary text",
              "suggestedSkills": ["Skill 1", "Skill 2", "Skill 3", ...]
            }`
          }
        ],
        temperature: 0.7})}),

    const openAIData = await openAIResponse.json($2);
    if (!openAIData.choices || openAIData.choices.length = $2;
    // Parse the JSON response
    let parsedResponse,
    try {
      // Find the JSON object in the response
      const jsonMatch = responseContent.match($2);
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[0])
      } else {
        throw new Error("Could not extract JSON from response")
      }
    } catch (e) {
      console.error($2);
      // Fallback parsing approach if the standard parsing fails
      const summaryMatch = $2;
      const skillsMatch = $2;
      if (summaryMatch && skillsMatch) {
        const summary = $2;
        const skillsString = $2;
        const suggestedSkills = skillsString.split().map(s => 
          s.trim().replace(/"/g, '')
        ).filter($2);
        parsedResponse = { summary, suggestedSkills }
      } else {
        throw new Error("Failed to parse the generated content")
      }
    }

    return new Response($2);
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error($2);
    return new Response($2);
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
}),
