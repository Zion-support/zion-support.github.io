
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_// Get the OpenAI API key from environment variables
    const _apiKey = Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set');}

    // Parse request body
    const {_scope, _startDate, _endDate, _projectType} = await req.json();
    
    // Create prompt for OpenAI
    const _prompt = `
    You are an expert project manager who specializes in breaking down projects into clear milestones.
    
    Based on the following project details:
    - Project Scope: "${_scope}"
    - Project Timeline: ${_startDate} to ${_endDate}
    - Project Type: ${_projectType}
    
    Generate a logical, phased milestone breakdown with 3-7 milestones that would be appropriate for this project.
    Include realistic due dates, estimated hours of effort, and clear deliverable descriptions.
    
    Each milestone should have:
    1. Title: A concise title
    2. Description: A clear description of deliverables
    3. Due Date: A specific date within the project timeline
    4. Estimated Hours: Reasonable effort estimate
    
    Format the response as a valid JSON array of milestone objects with these fields:
    "title", "description", "dueDate", "estimatedHours"
    
    Ensure your response is ONLY the JSON array with no additional text.
    `;

    // Call OpenAI API
    const _response = await fetch('https://api.openai.com/v1/chat/completions', {_method: 'POST', _headers: {
        'Content-Type': 'application/json', _'Authorization': `Bearer ${apiKey}`},
      body: JSON.stringify({_model: 'gpt-4o-mini', _messages: [
          {
            role: 'system', _content: 'You are a project management expert that breaks work into appropriate milestones.'},
          {_role: 'user', _content: prompt}],
        temperature: 0.7})});

    const _data = await response.json();
    
    if (!response.ok) {_throw new Error(data.error?.message || 'Failed to generate milestones');}

    // Parse the AI-generated content to ensure it's valid JSON
    try {_const _content = data.choices[0].message.content.trim();
      // Try to parse the response as JSON
      const _milestones = JSON.parse(content);
      
      return new Response(JSON.stringify({ milestones}), {_headers: { ...corsHeaders, _'Content-Type': 'application/json'}});
    } catch (parseError) {_// If parsing fails, _try to extract JSON from the text
      
      throw new Error('Failed to parse AI response');}
  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message || 'Failed to generate milestones'}),
      {_status: 500, _headers: { ...corsHeaders, _'Content-Type': 'application/json'}}
    );
  }
});
