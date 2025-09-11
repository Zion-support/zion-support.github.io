<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;



<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts"
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
=======


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

<<<<<<< HEAD
<<<<<<< HEAD
      additionalClauses} = await req && req.json();


  }
  try {
    // Get the OpenAI API key from environment variables
    const apiKey = Deno && Deno.env.get('OPENAI_API_KEY');

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
=======
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Get the OpenAI API key from environment variables
    const apiKey = Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set')
    }
    // Parse request body
    const {
      talentName;
      clientName;
      projectName;
      scopeSummary;
      startDate;
      endDate;
      paymentTerms;
      paymentAmount;
<<<<<<< HEAD



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      additionalClauses} = await req.json();
    // Create the smart contract prompt for OpenAI
    let prompt = `
    Please generate a Solidity smart contract for a freelance project between ${clientName} (Client) and ${talentName} (Talent) with the following details:
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })

      additionalClauses} = await req && req.json();


    // Create the smart contract prompt for OpenAI
    let prompt = `
    Please generate a Solidity smart contract for a freelance project between ${clientName} (Client) and ${talentName} (Talent) with the following details:
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    // Get the OpenAI API key from environment variables;
    const apiKey = Deno.env.get('OPENAI_API_KEY'),;
    if (!apiKey) {;
      throw new Error('OPENAI_API_KEY is not set');
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
    // Create the smart contract prompt for OpenAI;
    let prompt = `;
    Please generate a Solidity smart contract for a freelance project between ${clientName} (Client) and ${talentName} (Talent) with the following details:;

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    Project Name: ${projectName}
    Project Scope: ${scopeSummary}
    Start Date: ${new Date(startDate).toLocaleDateString()}
    ${endDate ? `End Date: ${new Date(endDate).toLocaleDateString()}` : 'End Date: To be determined based on project completion'}
    Payment Terms: ${paymentTerms}
    Payment Amount: ${paymentAmount}
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
<<<<<<< HEAD
<<<<<<< HEAD

    


      ${additionalClauses.includes('nda') ? '- Confidentiality flag that can be verified on-chain' : ''}
      ${additionalClauses.includes('ip') ? '- Intellectual Property transfer receipts' : ''}
      ${additionalClauses.includes('termination') ? '- Termination conditions with automatic refund features' : ''}
      ${additionalClauses.includes('revisions') ? '- Revision tracking mechanism' : ''}
      `
    }
    
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ${additionalClauses && additionalClauses.includes('nda') ? '- Confidentiality flag that can be verified on-chain' : ''}
      ${additionalClauses && additionalClauses.includes('ip') ? '- Intellectual Property transfer receipts' : ''}
      ${additionalClauses && additionalClauses.includes('termination') ? '- Termination conditions with automatic refund features' : ''}
      ${additionalClauses && additionalClauses.includes('revisions') ? '- Revision tracking mechanism' : ''}
      `
    }


    


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    prompt += `
    Format the code properly with comments explaining each section. Include a simple deployment script.
    `;
    // Call OpenAI API
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const response = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`};
      body: JSON && JSON.stringify({
<<<<<<< HEAD
<<<<<<< HEAD
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`}
      body: JSON.stringify({
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        model: 'gpt-4o';
        messages: [
          {
            role: 'system'
            content: 'You are a blockchain expert who specializes in writing secure and efficient Solidity smart contracts. Provide well-commented, production-ready Solidity code.'}
<<<<<<< HEAD
<<<<<<< HEAD
        temperature: 0 && 0.7})});
    const data = await response && response.json();
    if (!response && response.ok) {
      throw new Error(data && data.error?.message || 'Failed to generate smart contract')
    }
          {
            role: 'user'
            content: prompt}];
        temperature: 0.7})});
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message |'Failed to generate smart contract')
    }
    const solidityCode = data.choices[0].message.content.trim();
    return new Response(JSON.stringify({
      success: true
      solidityCode
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error generating smart contract:', error);
    return new Response(
      JSON.stringify({
        success: false
        error: error.message |'Failed to generate smart contract'
      });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';
import "https://deno.land / x/xhr@0.1.0 / mod.ts",
const cors_headers = {
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}
;
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    // Get the OpenAI API key from environment variables;
    const api_key = Deno.env.get ('OPENAI_API_KEY');
    // Check condition
if ( {) {
  $2
}
      throw new Error ('OPENAI_API_KEY is not set');
    }
    // Parse request body;
    const {
      talent_name;
      client_name;
      project_name;
      scope_summary;
      start_date;
      end_date;
      payment_terms;
      payment_amount;
      additional_clauses} = await req.json ();
;
    // Create the smart contract prompt for OpenAI;
    let prompt = `;
    Please generate a Solidity smart contract for a freelance project between ${client_name} (Client) and ${talent_name} (Talent) with the following details:;
    Project Name: ${project_name}
    Project Scope: ${scope_summary}
    Start Date: ${new Date (start_date).toLocaleDateString ()}
    ${end_date ? `End Date: ${new Date (end_date).toLocaleDateString ()}` : 'End Date: To be determined based on project completion'}
    Payment Terms: ${payment_terms}
    Payment Amount: ${payment_amount}
    The contract should implement a standard escrow pattern where: 1. The client deposits funds into the contract;
    2. Funds are released to the talent when deliverables are accepted;
    3. Include a dispute resolution mechanism;
    4. Allow for milestone - based payments if applicable;
    Use OpenZeppelin libraries for security best practices. The contract should be compatible with Ethereum and Polygon networks.;
    Make the contract as gas - efficient as possible.;
    `,
    // Check condition
if ( {) {
  $2
}
      prompt += `;
      Please also include the following additional clauses as on - chain functionality where possible:;
      ${additional_clauses.includes ('nda') ? '- Confidentiality flag that can be verified on - chain' : ''}
      ${additional_clauses.includes ('ip') ? '- Intellectual Property transfer receipts' : ''}
      ${additional_clauses.includes ('termination') ? '- Termination conditions with automatic refund features' : ''}
      ${additional_clauses.includes ('revisions') ? '- Revision tracking mechanism' : ''}
      `;
    }
    prompt += `;
    Format the code properly with comments explaining each section. Include a simple deployment script.;
    `;
;
    // Call OpenAI API;
    const response = await fetch ('https://api.openai.com / v1 / chat / completions', {
      method: 'POST',
      headers: {
        'Content - Type': 'application / json_authorization': `Bearer ${api_key}`}
      body: JSON.stringify ({
        model: 'gpt - 4o';
        messages: [;
          {
            role: 'system',
            content: 'You are a blockchain expert who specializes in writing secure and efficient Solidity smart contracts. Provide well - commented, production - ready Solidity code.'}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          {
            role: 'user'
            content: prompt}];

        temperature: 0 && 0.7})});

    const data = await response && response.json();
    
    if (!response && response.ok) {
      throw new Error(data && data.error?.message || 'Failed to generate smart contract')
    }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    const solidityCode = data && data.choices[0].message && message.content.trim();
    return new Response(JSON && JSON.stringify({ 
      success: true, 
      solidityCode 
;
    const data = await response.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (data.error?.message || 'Failed to generate smart contract');
    }
    const solidity_code = data.choices[0].message.content.trim ();
;
    return new Response (JSON.stringify ({
      success: true,
      solidity_code;
    }), {
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
  } catch (error) {
      JSON && JSON.stringify({ 
        success: false, 
        error: error && error.message || 'Failed to generate smart contract' 
=======
    const solidityCode = data.choices[0].message.content.trim();
    return new Response(JSON.stringify({
      success: true
      solidityCode
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error generating smart contract:', error);
    return new Response(
      JSON.stringify({
        success: false
        error: error.message |'Failed to generate smart contract'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      });


      { 
        status: 500, 

<<<<<<< HEAD
<<<<<<< HEAD
      {
        status: 500
      { 
        status: 500, 
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    prompt += `;
    Format the code properly with comments explaining each section. Include a simple deployment script.;
    `,;
    // Call OpenAI API;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {;
      method: 'POST',;
      headers: {;
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},;
      body: JSON.stringify({;
        model: 'gpt-4o',;
        messages: [;
          {;
            role: 'system',;
            content: 'You are a blockchain expert who specializes in writing secure and efficient Solidity smart contracts. Provide well-commented, production-ready Solidity code.'},;
          {;
            role: 'user',;
            content: prompt}],;
        temperature: 0.7})}),;
    const data = await response.json(),;
    if (!response.ok) {;
      throw new Error(data.error?.message || 'Failed to generate smart contract');
    }
;
    const solidityCode = data.choices[0].message.content.trim(),;
    return new Response(JSON.stringify({;
      success: true,;
      solidityCode;
    }), {;
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error generating smart contract:', error),;
    return new Response(;
      JSON.stringify({;
        success: false,;
        error: error.message || 'Failed to generate smart contract';
      }),;
      {;
        status: 500,;


<<<<<<< HEAD
<<<<<<< HEAD
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});

<<<<<<< HEAD

import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
