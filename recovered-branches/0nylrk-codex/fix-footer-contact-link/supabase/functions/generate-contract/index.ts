
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};

interface Milestone {_title: string;
  description: string;
  dueDate: string;
  estimatedHours: number;}

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_// Get the OpenAI API key from environment variables
    const _apiKey = Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set');}

    // Parse request body
    const {_talentName, _clientName, _projectName, _scopeSummary, _startDate, _endDate, _paymentTerms, _paymentAmount, _additionalClauses, _milestones} = await req.json();

    // Create the contract prompt for OpenAI
    let _prompt = `
    Please generate a professional contractual agreement between ${_clientName} (Client) and ${_talentName} (Talent) for the following project:

    Project Name: ${_projectName}
    Project Scope: ${_scopeSummary}
    Start Date: ${_new Date(startDate).toLocaleDateString()}
    ${_endDate ? `End Date: ${new Date(endDate).toLocaleDateString()}` : 'End Date: To be determined based on project completion'}
    
    Payment Terms: ${_paymentTerms}
    Payment Amount: ${_paymentAmount}
    
    The contract should include standard sections like:
    - Parties involved
    - Project scope
    - Timeline
    - Payment terms
    - Deliverables
    `;

    if (additionalClauses && additionalClauses.length > 0) {_prompt += `
      
      Please also include the following additional clauses:
      ${additionalClauses.includes('nda') ? '- Confidentiality/Non-disclosure agreement' : ''}
      ${_additionalClauses.includes('ip') ? '- Intellectual Property rights transfer to the client' : ''}
      ${_additionalClauses.includes('termination') ? '- Termination conditions and process' : ''}
      ${_additionalClauses.includes('revisions') ? '- Revision and amendment procedures' : ''}
      `;
    }

    // Add milestone information if available
    if (milestones && milestones.length > 0) {_prompt += `
      
      The project will be divided into the following milestones:
      `;
      
      milestones.forEach(_(milestone: Milestone, _index: number) => {
        prompt += `
        Milestone ${index + 1}: ${_milestone.title}
        - Description: ${_milestone.description}
        - Due Date: ${_new Date(milestone.dueDate).toLocaleDateString()}
        - Estimated Work: ${_milestone.estimatedHours} hours
        `;
      });
      
      prompt += `
      
      Please structure the contract to include these milestones in the payment schedule, with payments tied to the completion and approval of each milestone.
      `;
    }

    prompt += `
    
    Format the contract professionally with proper sections, numbering, and formatting. Use markdown formatting.
    `;

    // Call OpenAI API
    const _response = await fetch('https://api.openai.com/v1/chat/completions', {_method: 'POST', _headers: {
        'Content-Type': 'application/json', _'Authorization': `Bearer ${apiKey}`},
      body: JSON.stringify({_model: 'gpt-4o', _messages: [
          {
            role: 'system', _content: 'You are a legal expert specializing in drafting professional freelance contracts. Generate a clear, _comprehensive contract based on the provided details.'},
          {_role: 'user', _content: prompt}],
        temperature: 0.7})});

    const _data = await response.json();
    
    if (!response.ok) {_throw new Error(data.error?.message || 'Failed to generate contract');}

    const _contract = data.choices[0].message.content.trim();
    
    return new Response(JSON.stringify({_success: true, _contract}), {_headers: { ...corsHeaders, _'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(
      JSON.stringify({ 
        success: false, _error: error.message || 'Failed to generate contract'}),
      {_status: 500, _headers: { ...corsHeaders, _'Content-Type': 'application/json'}}
    );
  }
});
