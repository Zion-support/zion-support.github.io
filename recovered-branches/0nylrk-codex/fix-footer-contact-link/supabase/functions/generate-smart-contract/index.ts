
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
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};
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
      additionalClauses} = await req.json(),
=======
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_// Get the OpenAI API key from environment variables
    const _apiKey = Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set');}

    // Parse request body
    const {_talentName, _clientName, _projectName, _scopeSummary, _startDate, _endDate, _paymentTerms, _paymentAmount, _additionalClauses} = await req.json();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Create the smart contract prompt for OpenAI
    let _prompt = `
    Please generate a Solidity smart contract for a freelance project between ${_clientName} (Client) and ${_talentName} (Talent) with the following details:

    Project Name: ${_projectName}
    Project Scope: ${_scopeSummary}
    Start Date: ${_new Date(startDate).toLocaleDateString()}
    ${_endDate ? `End Date: ${new Date(endDate).toLocaleDateString()}` : 'End Date: To be determined based on project completion'}
    
    Payment Terms: ${_paymentTerms}
    Payment Amount: ${_paymentAmount}
    
    The contract should implement a standard escrow pattern where: 1. The client deposits funds into the contract
    2. Funds are released to the talent when deliverables are accepted
    3. Include a dispute resolution mechanism
    4. Allow for milestone-based payments if applicable
    
    Use OpenZeppelin libraries for security best practices. The contract should be compatible with Ethereum and Polygon networks.
    Make the contract as gas-efficient as possible.
    `,

    if (additionalClauses && additionalClauses.length > 0) {_prompt += `
      
      Please also include the following additional clauses as on-chain functionality where possible:
      ${additionalClauses.includes('nda') ? '- Confidentiality flag that can be verified on-chain' : ''}
<<<<<<< HEAD
      ${additionalClauses.includes('ip') ? '- Intellectual Property transfer receipts' : ''}
      ${additionalClauses.includes('termination') ? '- Termination conditions with automatic refund features' : ''}
      ${additionalClauses.includes('revisions') ? '- Revision tracking mechanism' : ''}
      `
=======
      ${_additionalClauses.includes('ip') ? '- Intellectual Property transfer receipts' : ''}
      ${_additionalClauses.includes('termination') ? '- Termination conditions with automatic refund features' : ''}
      ${_additionalClauses.includes('revisions') ? '- Revision tracking mechanism' : ''}
      `;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    
    prompt += `
    
    Format the code properly with comments explaining each section. Include a simple deployment script.
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
            content: 'You are a blockchain expert who specializes in writing secure and efficient Solidity smart contracts. Provide well-commented, production-ready Solidity code.'},
          {
            role: 'user',
            content: prompt}],
        temperature: 0.7})}),

    const data = await response.json(),
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate smart contract')
    }

    const solidityCode = data.choices[0].message.content.trim(),
    
    return new Response(JSON.stringify({ 
      success: true, 
      solidityCode 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error generating smart contract:', error),
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to generate smart contract' 
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}),
