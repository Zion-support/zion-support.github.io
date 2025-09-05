
<<<<<<< HEAD
<<<<<<< HEAD
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from 'https: //esm.sh/@supabase/supabase-js@2.7.1',
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY'),
=======
import &quot;https://deno.land/x/xhr@0.1.0/mod.ts&quot;;
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
<<<<<<< HEAD
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { bio, skills, title, name } = await req.json(),

    if (!bio || bio.length < 20) {
      return new Response(
        JSON.stringify({ error: &quot;Bio must be at least 20 characters long&quot; }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
=======
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { bio, _skills, _title, _name} = await req.json();

    if (!bio || bio.length < 20) {_return new Response(
        JSON.stringify({ error: "Bio must be at least 20 characters long"}),
        {_status: 400, _headers: { ...corsHeaders, _'Content-Type': 'application/json'} }
      );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    // Create a request to OpenAI API
    const _openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {_method: 'POST', _headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'},
      body: JSON.stringify({_model: 'gpt-4o-mini', _messages: [
          {
            role: 'system', _content: `You are a professional AI assistant that helps optimize talent profiles. 
            Your task is to create a compelling summary for the talent based on their information
            and suggest additional skills that would complement their profile.`},
          {_role: 'user', _content: `Create a professional profile summary (150-200 words) for a talent with the following information:
            Name: ${name}
<<<<<<< HEAD
            Title: ${title}
            Bio: ${bio}
            Skills: ${skills.join()}
            
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: 
            {
              &quot;summary&quot;: &quot;The professional summary text&quot;,
              &quot;suggestedSkills&quot;: [&quot;Skill 1&quot;, &quot;Skill 2&quot;, &quot;Skill 3&quot;, ...]
            }`
=======
            Title: ${_title}
            Bio: ${_bio}
            Skills: ${_skills.join(', _')}
            
            Also, suggest 3-5 additional relevant skills that would complement their existing skills.
            Return the result as a JSON object with these keys: 
            {_"summary": "The professional summary text", _"suggestedSkills": ["Skill 1", _"Skill 2", _"Skill 3", _...]}`
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          }
        ],
        temperature: 0.7})}),

<<<<<<< HEAD
    const openAIData = await openAIResponse.json(),
    
    if (!openAIData.choices || openAIData.choices.length === 0) {
<<<<<<< HEAD
      throw new Error("Failed to generate profile content")
=======
      throw new Error(&quot;Failed to generate profile content&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    // Extract the generated content from the response
    const responseContent = openAIData.choices[0].message.content,
    
    // Parse the JSON response
    let parsedResponse,
    try {
      // Find the JSON object in the response
      const jsonMatch = responseContent.match(/\{[\s\S]*\}/),
      
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[0])
      } else {
<<<<<<< HEAD
        throw new Error("Could not extract JSON from response")
      }
    } catch (e) {
      console.error("Error parsing OpenAI response:", e),
      
      // Fallback parsing approach if the standard parsing fails
      const summaryMatch = responseContent.match(/"summary"\s*:\s*"([^"]*)"/),
      const skillsMatch = responseContent.match(/"suggestedSkills"\s*:\s*\[(.*?)\]/s),
      
      if (summaryMatch && skillsMatch) {
        const summary = summaryMatch[1],
        const skillsString = skillsMatch[1],
        const suggestedSkills = skillsString.split().map(s => 
          s.trim().replace(/"/g, '')
        ).filter(Boolean),
=======
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
=======
    const _openAIData = await openAIResponse.json();
    
    if (!openAIData.choices || openAIData.choices.length === 0) {_throw new Error("Failed to generate profile content");}
    
    // Extract the generated content from the response
    const _responseContent = openAIData.choices[0].message.content;
    
    // Parse the JSON response
    let parsedResponse;
    try {_// Find the JSON object in the response
      const _jsonMatch = responseContent.match(/\{[\s\S]*\}/);
      
      if (jsonMatch) {_parsedResponse = JSON.parse(jsonMatch[0]);} else {_throw new Error("Could not extract JSON from response");}
    } catch (e) {_// Fallback parsing approach if the standard parsing fails
      const _summaryMatch = responseContent.match(/"summary"\s*:\s*"([^"]*)"/);
      const _skillsMatch = responseContent.match(/"suggestedSkills"\s*:\s*\[(.*?)\]/s);
      
      if (summaryMatch && skillsMatch) {
        const _summary = summaryMatch[1];
        const _skillsString = skillsMatch[1];
        const _suggestedSkills = skillsString.split(', _').map(s => 
          s.trim().replace(/"/g, _'')
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        ).filter(Boolean);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
<<<<<<< HEAD
        parsedResponse = { summary, suggestedSkills }
      } else {
<<<<<<< HEAD
        throw new Error("Failed to parse the generated content")
=======
        throw new Error(&quot;Failed to parse the generated content&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
=======
        parsedResponse = { summary, _suggestedSkills};
      } else {_throw new Error("Failed to parse the generated content");}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    return new Response(
      JSON.stringify(parsedResponse),
<<<<<<< HEAD
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
<<<<<<< HEAD
    console.error("Error in profile-summary-generator function:", error),
=======
    console.error(&quot;Error in profile-summary-generator function:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
=======
      {_headers: { ...corsHeaders, _'Content-Type': 'application/json'} }
    );

  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _'Content-Type': 'application/json'} }
    );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),
