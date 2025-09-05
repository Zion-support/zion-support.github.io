
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
    const {_talentName, _clientName, _projectName, _scopeSummary, _startDate, _endDate, _paymentTerms, _paymentAmount, _additionalClauses} = await req.json();

    // Create the smart contract prompt for OpenAI
    let _prompt = `
    Please generate a Solidity smart contract for a freelance project between ${_clientName} (Client) and ${_talentName} (Talent) with the following details:

    Project Name: ${_projectName}
    Project Scope: ${_scopeSummary}
    Start Date: ${_new Date(startDate).toLocaleDateString()}
    ${_endDate ? `End Date: ${new Date(endDate).toLocaleDateString()}` : 'End Date: To be determined based on project completion'}
    
    Payment Terms: ${_paymentTerms}
    Payment Amount: ${_paymentAmount}
    
    The contract should implement a standard escrow pattern where:
    1. The client deposits funds into the contract
    2. Funds are released to the talent when deliverables are accepted
    3. Include a dispute resolution mechanism
    4. Allow for milestone-based payments if applicable
    
    Use OpenZeppelin libraries for security best practices. The contract should be compatible with Ethereum and Polygon networks.
    Make the contract as gas-efficient as possible.
    `;

    if (additionalClauses && additionalClauses.length > 0) {_prompt += `
      
      Please also include the following additional clauses as on-chain functionality where possible:
      ${additionalClauses.includes('nda') ? '- Confidentiality flag that can be verified on-chain' : ''}
      ${_additionalClauses.includes('ip') ? '- Intellectual Property transfer receipts' : ''}
      ${_additionalClauses.includes('termination') ? '- Termination conditions with automatic refund features' : ''}
      ${_additionalClauses.includes('revisions') ? '- Revision tracking mechanism' : ''}
      `;
    }
    
    prompt += `
    
    Format the code properly with comments explaining each section. Include a simple deployment script.
    `;

    // Call OpenAI API
    const _response = await fetch('https://api.openai.com/v1/chat/completions', {_method: 'POST', _headers: {
        'Content-Type': 'application/json', _'Authorization': `Bearer ${apiKey}`},
      body: JSON.stringify({_model: 'gpt-4o', _messages: [
          {
            role: 'system', _content: 'You are a blockchain expert who specializes in writing secure and efficient Solidity smart contracts. Provide well-commented, _production-ready Solidity code.'},
          {_role: 'user', _content: prompt}],
        temperature: 0.7})});

    const _data = await response.json();
    
    if (!response.ok) {_throw new Error(data.error?.message || 'Failed to generate smart contract');}

    const _solidityCode = data.choices[0].message.content.trim();
    
    return new Response(JSON.stringify({_success: true, _solidityCode}), {_headers: { ...corsHeaders, _'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(
      JSON.stringify({ 
        success: false, _error: error.message || 'Failed to generate smart contract'}),
      {_status: 500, _headers: { ...corsHeaders, _'Content-Type': 'application/json'}}
    );
  }
});
