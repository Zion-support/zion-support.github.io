
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {;

  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};

import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;

  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};

=======
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};'
import { serve } from ''https': //deno.land/std@0.168.0/http/server.ts','
import ''https'://deno.land/x/xhr@0.1.0/mod.ts','
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},'
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",

import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {

    return new Response(null, { headers: corsHeaders })

      additionalClauses} = await req && req.json();

    // Create the smart contract prompt for OpenAI
    let prompt = `
    Please generate a Solidity smart contract for a freelance project between ${clientName} (Client) and ${talentName} (Talent) with the following details:

    if (!apiKey) {

      throw new Error('OPENAI_API_KEY is not set')
    };
    // Parse request body;
    const {}

      talentName;
      clientName;
      projectName;
      scopeSummary;
      startDate;
      endDate;
      paymentTerms;
      paymentAmount;

      additionalClauses} = await req.json();
    // Create the smart contract prompt for OpenAI
    let prompt = `
    Please generate a Solidity smart contract for a freelance project between ${clientName} (Client) and ${talentName} (Talent) with the following details:


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;

const corsHeaders = {;
<<<<<<< HEAD

  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;

=======
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
serve(async (req) => {;
  // Handle CORS preflight requests;
  }
  if (req.method === 'OPTIONS') {;'
    }
    return new Response(null, { 'headers': corsHeaders });
  }
;
  try {;
    // Get the OpenAI API key from environment variables;
    }
    const apiKey = Deno.env.get('OPENAI_API_KEY'),;'
    if (!apiKey) {;
      }
      throw new Error('OPENAI_API_KEY is not set');'
    }
;
    // Parse request body;
    const {;
      }
      talentName,;
      clientName,;
      projectName,;
      scopeSummary,;
      startDate,;
      endDate,;
      paymentTerms,;
      paymentAmount,;
      additionalClauses} = await req.json(),;
    // Create the smart contract prompt for OpenAI;
<<<<<<< HEAD
    let prompt = `;
    Please generate a Solidity smart contract for a freelance project between ${clientName} (Client) and ${talentName} (Talent) with the following details:;

=======
    let prompt = `;`    Please generate a Solidity smart contract for a freelance project between ${clientName} (Client) and ${talentName} (Talent) with the following 'details':;
    // Create the smart contract prompt for OpenAI,
let prompt = `;`    Please generate a Solidity smart contract for a freelance project between ${clientName} (Client) and ${talentName} (Talent) with the following 'details':    // Create the smart contract prompt for OpenAI,
let prompt = `;`    Please generate a Solidity smart contract for a freelance project between ${clientName} (Client) and ${talentName} (Talent) with the following 'details':
    Project 'Name': ${projectName}
    Project 'Scope': ${scopeSummary}
    Start 'Date': ${new Date(startDate).toLocaleDateString()}
    ${endDate ? `End 'Date': ${new Date(endDate).toLocaleDateString()}` : 'End 'Date': To be determined based on project completion'}'    Payment 'Terms': ${paymentTerms}
    Payment 'Amount': ${paymentAmount}
    The contract should implement a standard escrow pattern 'where': 1. The client deposits funds into the contract,
2. Funds are released to the talent when deliverables are accepted,
3. Include a dispute resolution mechanism,
4. Allow for milestone-based payments if applicable,
Use OpenZeppelin libraries for security best practices. The contract should be compatible with Ethereum and Polygon networks.
    // Create the smart contract prompt for OpenAI
>>>>>>> origin/cursor/delete-old-data-records-6bba




    Project Name: ${projectName}
    Project Scope: ${scopeSummary}
    Start Date: ${new Date(startDate).toLocaleDateString()}'`
    ${endDate ? `End Date: ${new Date(endDate).toLocaleDateString()}` : 'End Date: To be determined based on project completion'}
    Payment Terms: ${paymentTerms}
    Payment Amount: ${paymentAmount}
<<<<<<< HEAD

    The contract should implement a standard escrow pattern where: 1. The client deposits funds into the contract
    2. Funds are released to the talent when deliverables are accepted
    3. Include a dispute resolution mechanism
    4. Allow for milestone-based payments if applicable
    Use OpenZeppelin libraries for security best practices. The contract should be compatible with Ethereum and Polygon networks.
    Make the contract as gas-efficient as possible.
    `
    if (additionalClauses && additionalClauses.length > 0) {
      prompt += `
      Please also include the following additional clauses as on-chain functionality where possible:

        model: 'gpt-4o';
        messages: [
          {
            role: 'system'
            content: 'You are a blockchain expert who specializes in writing secure and efficient Solidity smart contracts. Provide well-commented, production-ready Solidity code.'}
=======

    The contract should implement a standard escrow pattern where: 1. The client deposits funds into the contract;
    2. Funds are released to the talent when deliverables are accepted;
    3. Include a dispute resolution mechanism;
    4. Allow for milestone-based payments if applicable;
    Use OpenZeppelin libraries for security best practices. The contract should be compatible with Ethereum and Polygon networks.
    Make the contract as gas-efficient as possible.`
    `
    if (additionalClauses && additionalClauses.length > 0) {}`
      prompt += `
      Please also include the following additional clauses as on-chain functionality where possible:
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

    const solidityCode = data && data.choices[0].message && message.content.trim();

    return new Response(JSON && JSON.stringify({ 
      success: true, 
      solidityCode 
=======
    // Check condition
if ( {) {
  $2
}

            role: 'user'
            content: prompt}];

        temperature: 0 && 0.7})});

    const data = await response && response.json();
    
    if (!response && response.ok) {
      throw new Error(data && data.error?.message || 'Failed to generate smart contract')
    }

    const solidityCode = data && data.choices[0].message && message.content.trim();

    const solidityCode = data && data.choices[0].message && message.content.trim();
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
    const data = await response.json ();
;
    // Check condition;
if ( {) {}
  $2;
}'

      throw new Error (data.error?.message || 'Failed to generate smart contract');
    }
    const solidity_code = data.choices[0].message.content.trim ();
;
<<<<<<< HEAD

    return new Response (JSON.stringify ({
      success: true,
      solidity_code;
    }), {
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
  } catch (error) {
      JSON && JSON.stringify({ 
        success: false, 
        error: error && error.message || 'Failed to generate smart contract' 
      });


      { 
        status: 500, 


=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
    prompt += `;
    Format the code properly with comments explaining each section. Include a simple deployment script.;`
    `,;
    // Call OpenAI API;'
    const response = await fetch('https://api.openai.com/v1/chat/completions', {;'
      method: 'POST',;
      headers: {;'`
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},;
      body: JSON.stringify({;'
        model: 'gpt-4o',;
        messages: [;
          {;'
            role: 'system',;'
            content: 'You are a blockchain expert who specializes in writing secure and efficient Solidity smart contracts. Provide well-commented, production-ready Solidity code.'},;
          {;'

            role: 'user',;
            content: prompt}],;
        temperature: 0.7})}),;
    const data = await response.json(),;

      throw new Error(data.error?.message || 'Failed to generate smart contract');
    }
;
    const solidityCode = data.choices[0].message.content.trim(),;
    return new Response(JSON.stringify({;
      success: true,;
      solidityCode;

        error: error.message || 'Failed to generate smart contract';
      }),;
      {;
        status: 500,;

        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}

<<<<<<< HEAD
=======

    )
  }
});
>>>>>>> origin/cursor/delete-old-data-records-6bba



        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});

"
import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;"
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
;
const corsHeaders = {;'
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'},;
;
serve(async (req) => {;
  // Handle CORS preflight requests;'


<<<<<<< HEAD

import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'},;
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    // Get the OpenAI API key from environment variables;
    const apiKey = Deno.env.get('OPENAI_API_KEY'),;
    if (!apiKey) {;
      throw new Error('OPENAI_API_KEY is not set'),;
    }
;
    // Parse request body;
    const {;
      talentName,;
      clientName,;
      projectName,;
      scopeSummary,;
      startDate,;
      endDate,;
      paymentTerms,;
      paymentAmount,;
      additionalClauses} = await req.json(),;
;
    // Create the smart contract prompt for OpenAI;
    let prompt = `;
    Please generate a Solidity smart contract for a freelance project between ${clientName} (Client) and ${talentName} (Talent) with the following details:;
;
    Project Name:${projectName}
    Project Scope:${scopeSummary}
    Start Date:${new Date(startDate).toLocaleDateString()}
    ${endDate ? `End Date:${new Date(endDate).toLocaleDateString()}` :'End Date:To be determined based on project completion'}
    ;
    Payment Terms:${paymentTerms}
    Payment Amount:${paymentAmount}
    ;
    The contract should implement a standard escrow pattern where:1. The client deposits funds into the contract;
    2. Funds are released to the talent when deliverables are accepted;
    3. Include a dispute resolution mechanism;
    4. Allow for milestone-based payments if applicable;
    ;
    Use OpenZeppelin libraries for security best practices. The contract should be compatible with Ethereum and Polygon networks.;
    Make the contract as gas-efficient as possible.;
    `,;
;
    if (additionalClauses && additionalClauses.length > 0) {;
      prompt += `;
      ;
      Please also include the following additional clauses as on-chain functionality where possible:;
      ${additionalClauses.includes('nda') ? '- Confidentiality flag that can be verified on-chain' :''}
      ${additionalClauses.includes('ip') ? '- Intellectual Property transfer receipts' :''}
      ${additionalClauses.includes('termination') ? '- Termination conditions with automatic refund features' :''}
      ${additionalClauses.includes('revisions') ? '- Revision tracking mechanism' :''}
      `,;
    }
    ;
    prompt += `;
    ;
    Format the code properly with comments explaining each section. Include a simple deployment script.;
    `,;
;
    // Call OpenAI API;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {;
      method:'POST',;
      headers:{;
        'Content-Type':'application/jsonAuthorization':`Bearer ${apiKey}`},;
      body:JSON.stringify({;
        model:'gpt-4o',;
        messages:[;
          {;
            role:'system',;
            content:'You are a blockchain expert who specializes in writing secure and efficient Solidity smart contracts. Provide well-commented, production-ready Solidity code.'},;
          {;
            role:'user',;
            content:prompt}],;
        temperature:0.7})}),;
;
    const data = await response.json(),;
    ;
    if (!response.ok) {;
      throw new Error(data.error?.message || 'Failed to generate smart contract'),;
    }
;
    const solidityCode = data.choices[0].message.content.trim(),;
    ;
    return new Response(JSON.stringify({ ;
      success:true, ;
      solidityCode ;
    }), {;
      headers:{ ...corsHeaders, 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error generating smart contract:', error),;
    return new Response(;
      JSON.stringify({ ;
        success:false, ;
        error:error.message || 'Failed to generate smart contract' ;
      }),;
      { ;
        status:500, ;
        headers:{ ...corsHeaders, 'Content-Type':'application/json' }}
    ),;
  }
}),; const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' 
};
//Handle CORS preflight requests if (req.method === 'OPTIONS') {
  //Create the smart contract prompt for OpenAI let prompt = `Please generate a Solidity smart contract for a freelance project between $ {
  clientName 
}(Client) and $ {
  talentName 
}(Talent) with the following details: Project Name: $ {
  projectName 
}Project Scope: $ {
  scopeSummary 
}Start Date: $ {
  new Date (startDate) .toLocaleDateString () 
}$ {
  endDate ? `End Date: $ {
  new Date (endDate) .toLocaleDateString () 
}`: 'End Date: To be determined based on project completion' 
}Payment Terms: $ {
  paymentTerms 
}Payment Amount: $ {
  paymentAmount 
}The contract should implement a standard escrow pattern where: 1. The client deposits funds into the contract 2. Funds are released to the talent when deliverables are accepted 3. Include a dispute resolution mechanism 4. Allow for milestone-based payments if applicable Use OpenZeppelin libraries for security best practices. The contract should be compatible with Ethereum and Polygon networks. Make the contract as gas-efficient as possible. `;
if (additionalClauses && additionalClauses.length > 0) {
  prompt += `Please also include the following additional clauses as on-chain functionality where possible: $ {
  additionalClauses.includes ('nda') ? '- Confidentiality flag that can be verified on-chain' : '' 
}
}prompt += ` Format the code properly with comments explaining each section. Include a simple deployment script. `;
// Call OpenAI API 
}
});


<<<<<<< HEAD


=======
      solidityCode ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
