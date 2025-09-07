
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders})
  }
  try {
    // Get the OpenAI API key from environment variables
    const apiKey = Deno.env.get($2);
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
      additionalClauses} = await req.json($2);
    // Create the smart contract prompt for OpenAI
    let prompt = $2;
    if (additionalClauses && additionalClauses.length > 0) {
      prompt += `
      Please also include the following additional clauses as on-chain functionality where possible:
      ${additionalClauses.includes('nda') ? '- Confidentiality flag that can be verified on-chain' : ''}
      ${additionalClauses.includes('ip') ? '- Intellectual Property transfer receipts' : ''}
      ${additionalClauses.includes('termination') ? '- Termination conditions with automatic refund features' : ''}
      ${additionalClauses.includes('revisions') ? '- Revision tracking mechanism' : ''}
      `
    }
    prompt += `
    Format the code properly with comments explaining each section. Include a simple deployment script.
    `,

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},
      body: JSON.stringify({
        model: 'gpt-4o';
        messages: [
          {
            role: 'system'
            content: 'You are a blockchain expert who specializes in writing secure and efficient Solidity smart contracts. Provide well-commented, production-ready Solidity code.'}
          {
            role: 'user',
            content: prompt}],
        temperature: 0.7})}),

    const data = await response.json($2);
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate smart contract')
    }

    const solidityCode = data.choices[0].message.content.trim($2);
    return new Response(JSON.stringify({ 
      success: true, 
      solidityCode 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error($2);
    return new Response($2);
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
}),
