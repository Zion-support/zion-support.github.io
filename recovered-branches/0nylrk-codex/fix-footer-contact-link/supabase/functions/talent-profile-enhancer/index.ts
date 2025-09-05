
import &quot;https://deno.land/x/xhr@0.1.0/mod.ts&quot;;
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};

interface TalentProfileData {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  location?: string;
}

interface EnhancedProfile {
  summary: string;
  categorizedSkills: {
    programming: string[];
    devops: string[];
    platforms: string[];
    softSkills: string[];
    other: string[];
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { talentData } = await req.json() as { talentData: TalentProfileData };
    
    if (!talentData.bio || talentData.bio.length < 20) {
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
            content: `You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear skill tags, categorized by type for better filtering.`
          },
          {
            role: 'user',
            content: `Create a professional profile summary and categorize skills based on this information:
            Name: ${talentData.name}
            Title: ${talentData.title}
            Bio: ${talentData.bio}
            Skills: ${talentData.skills.join(', ')}
            Location: ${talentData.location || 'Not specified'}
            
            Return the result as a JSON object with these keys: 
            {
              &quot;summary&quot;: &quot;The professional summary text (100-150 words)&quot;,
              &quot;categorizedSkills&quot;: {
                &quot;programming&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;devops&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;platforms&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;softSkills&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;other&quot;: [&quot;skill1&quot;, &quot;skill2&quot;]
              }
            }
            
            Each category should have no more than 3 skills, and there should be no more than 8 skills total across all categories.`
          }
        ],
        temperature: 0.7,
        response_format: { type: &quot;json_object&quot; }
      })});

    const openAIData = await openAIResponse.json();
    
    if (!openAIData.choices || openAIData.choices.length === 0) {
      throw new Error(&quot;Failed to generate profile content&quot;);
    }
    
    // Extract the generated content from the response
    const responseContent = openAIData.choices[0].message.content;
    
    // Parse the JSON response
    let enhancedProfile: EnhancedProfile;
    try {
      enhancedProfile = JSON.parse(responseContent);
    } catch (e) {
      console.error(&quot;Error parsing OpenAI response:&quot;, e);
      throw new Error(&quot;Failed to parse the generated content&quot;);
    }

    return new Response(
      JSON.stringify(enhancedProfile),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error(&quot;Error in talent-profile-enhancer function:&quot;, error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
