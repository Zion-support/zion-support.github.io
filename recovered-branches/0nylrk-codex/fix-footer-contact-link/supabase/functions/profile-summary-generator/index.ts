
import &quot;https://deno.land/x/xhr@0.1.0/mod.ts&quot;;
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { bio, skills, title, name } = await req.json();

    if (!bio || bio.length < 20) {
      return new Response(
        JSON.stringify({ error: &quot;Bio must be at least 20 characters long&quot; }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
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
            content: `Create a professional profile summary (150-200 words) for a talent with the following information:
            Name: ${name}
            Title: ${title}
            Bio: ${bio}
            Skills: ${skills.join(', ')}
            
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: 
            {
              &quot;summary&quot;: &quot;The professional summary text&quot;,
              &quot;suggestedSkills&quot;: [&quot;Skill 1&quot;, &quot;Skill 2&quot;, &quot;Skill 3&quot;, ...]
            }`
          }
        ],
        temperature: 0.7})});

    const openAIData = await openAIResponse.json();
    
    if (!openAIData.choices || openAIData.choices.length === 0) {
      throw new Error(&quot;Failed to generate profile content&quot;);
    }
    
    // Extract the generated content from the response
    const responseContent = openAIData.choices[0].message.content;
    
    // Parse the JSON response
    let parsedResponse;
    try {
      // Find the JSON object in the response
      const jsonMatch = responseContent.match(/\{[\s\S]*\}/);
      
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error(&quot;Could not extract JSON from response&quot;);
      }
    } catch (e) {
      console.error(&quot;Error parsing OpenAI response:&quot;, e);
      
      // Fallback parsing approach if the standard parsing fails
      const summaryMatch = responseContent.match(/&quot;summary&quot;\s*:\s*&quot;([^&quot;]*)&quot;/);
      const skillsMatch = responseContent.match(/&quot;suggestedSkills&quot;\s*:\s*\[(.*?)\]/s);
      
      if (summaryMatch && skillsMatch) {
        const summary = summaryMatch[1];
        const skillsString = skillsMatch[1];
        const suggestedSkills = skillsString.split(',').map(s => 
          s.trim().replace(/&quot;/g, '')
        ).filter(Boolean);
        
        parsedResponse = { summary, suggestedSkills };
      } else {
        throw new Error(&quot;Failed to parse the generated content&quot;);
      }
    }

    return new Response(
      JSON.stringify(parsedResponse),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error(&quot;Error in profile-summary-generator function:&quot;, error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
