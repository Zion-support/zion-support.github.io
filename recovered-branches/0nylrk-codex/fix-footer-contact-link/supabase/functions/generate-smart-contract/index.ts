
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts"
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",

import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

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
    // Create the smart contract prompt for OpenAI
    let prompt = `
    Please generate a Solidity smart contract for a freelance project between ${clientName} (Client) and ${talentName} (Talent) with the following details:    // Create the smart contract prompt for OpenAI
    let prompt = `
    Please generate a Solidity smart contract for a freelance project between ${clientName} (Client) and ${talentName} (Talent) with the following details:
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
      ${additionalClauses && additionalClauses.includes('nda') ? '- Confidentiality flag that can be verified on-chain' : ''}
      ${additionalClauses && additionalClauses.includes('ip') ? '- Intellectual Property transfer receipts' : ''}
      ${additionalClauses && additionalClauses.includes('termination') ? '- Termination conditions with automatic refund features' : ''}
      ${additionalClauses && additionalClauses.includes('revisions') ? '- Revision tracking mechanism' : ''}
      `
    }

    

    prompt += `
    Format the code properly with comments explaining each section. Include a simple deployment script.
    `;
    // Call OpenAI API        model: 'gpt-4o';
        messages: [
          {
            role: 'system'
            content: 'You are a blockchain expert who specializes in writing secure and efficient Solidity smart contracts. Provide well-commented, production-ready Solidity code.'}        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});

      {
        status: 500
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});

