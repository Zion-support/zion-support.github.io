
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
=======
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import &quot;https://deno.land/x/xhr@0.1.0/mod.ts&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

interface Milestone {
  title: string,
  description: string,
  dueDate: string,
  estimatedHours: number
}
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};

interface Milestone {_title: string;
  description: string;
  dueDate: string;
  estimatedHours: number;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
<<<<<<< HEAD
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Get the OpenAI API key from environment variables
    const apiKey = Deno.env.get('OPENAI_API_KEY'),
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set')
    }

    // Parse request body
    const {
      talentName,
      clientName,
      projectName,
      scopeSummary,
      startDate,
      endDate,
      paymentTerms,
      paymentAmount,
      additionalClauses,
      milestones
    } = await req.json(),
=======
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_// Get the OpenAI API key from environment variables
    const _apiKey = Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set');}

    // Parse request body
    const {_talentName, _clientName, _projectName, _scopeSummary, _startDate, _endDate, _paymentTerms, _paymentAmount, _additionalClauses, _milestones} = await req.json();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Create the contract prompt for OpenAI
    let _prompt = `
    Please generate a professional contractual agreement between ${_clientName} (Client) and ${_talentName} (Talent) for the following project:

    Project Name: ${_projectName}
    Project Scope: ${_scopeSummary}
    Start Date: ${_new Date(startDate).toLocaleDateString()}
    ${_endDate ? `End Date: ${new Date(endDate).toLocaleDateString()}` : 'End Date: To be determined based on project completion'}
    
    Payment Terms: ${_paymentTerms}
    Payment Amount: ${_paymentAmount}
    
    The contract should include standard sections like: - Parties involved
    - Project scope
    - Timeline
    - Payment terms
    - Deliverables
    `,

    if (additionalClauses && additionalClauses.length > 0) {_prompt += `
      
      Please also include the following additional clauses:
      ${additionalClauses.includes('nda') ? '- Confidentiality/Non-disclosure agreement' : ''}
<<<<<<< HEAD
      ${additionalClauses.includes('ip') ? '- Intellectual Property rights transfer to the client' : ''}
      ${additionalClauses.includes('termination') ? '- Termination conditions and process' : ''}
      ${additionalClauses.includes('revisions') ? '- Revision and amendment procedures' : ''}
      `
=======
      ${_additionalClauses.includes('ip') ? '- Intellectual Property rights transfer to the client' : ''}
      ${_additionalClauses.includes('termination') ? '- Termination conditions and process' : ''}
      ${_additionalClauses.includes('revisions') ? '- Revision and amendment procedures' : ''}
      `;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    // Add milestone information if available
    if (milestones && milestones.length > 0) {_prompt += `
      
      The project will be divided into the following milestones: `,
      
      milestones.forEach(_(milestone: Milestone, _index: number) => {
        prompt += `
<<<<<<< HEAD
        Milestone ${index + 1}: ${milestone.title}
        - Description: ${milestone.description}
        - Due Date: ${new Date(milestone.dueDate).toLocaleDateString()}
        - Estimated Work: ${milestone.estimatedHours} hours
        `
      }),
=======
        Milestone ${index + 1}: ${_milestone.title}
        - Description: ${_milestone.description}
        - Due Date: ${_new Date(milestone.dueDate).toLocaleDateString()}
        - Estimated Work: ${_milestone.estimatedHours} hours
        `;
      });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      prompt += `
      
      Please structure the contract to include these milestones in the payment schedule, with payments tied to the completion and approval of each milestone.
      `
    }

    prompt += `
    
    Format the contract professionally with proper sections, numbering, and formatting. Use markdown formatting.
    `,

    // Call OpenAI API
<<<<<<< HEAD
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are a legal expert specializing in drafting professional freelance contracts. Generate a clear, comprehensive contract based on the provided details.'},
          {
            role: 'user',
            content: prompt}],
        temperature: 0.7})}),

    const data = await response.json(),
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate contract')
    }

    const contract = data.choices[0].message.content.trim(),
    
    return new Response(JSON.stringify({ 
      success: true, 
      contract 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error generating contract:', error),
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to generate contract' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),
