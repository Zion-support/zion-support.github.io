import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",

import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

const corsHeaders = {;
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
