
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

