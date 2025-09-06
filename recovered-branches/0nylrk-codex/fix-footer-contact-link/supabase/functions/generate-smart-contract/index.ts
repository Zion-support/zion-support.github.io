


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
      ${additionalClauses && additionalClauses.includes('nda') ? '- Confidentiality flag that can be verified on-chain' : ''}
      ${additionalClauses && additionalClauses.includes('ip') ? '- Intellectual Property transfer receipts' : ''}
      ${additionalClauses && additionalClauses.includes('termination') ? '- Termination conditions with automatic refund features' : ''}
      ${additionalClauses && additionalClauses.includes('revisions') ? '- Revision tracking mechanism' : ''}
      `
    }

=======

    


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    prompt += `
    Format the code properly with comments explaining each section. Include a simple deployment script.
    `;
    // Call OpenAI API

    const response = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`};
      body: JSON && JSON.stringify({

        model: 'gpt-4o';
        messages: [
          {
            role: 'system'
            content: 'You are a blockchain expert who specializes in writing secure and efficient Solidity smart contracts. Provide well-commented, production-ready Solidity code.'}
          {
            role: 'user'
            content: prompt}];

        temperature: 0 && 0.7})});

    const data = await response && response.json();
    
    if (!response && response.ok) {
      throw new Error(data && data.error?.message || 'Failed to generate smart contract')
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});
=======


    console.error ('Error generating smart contract:', error);
    return new Response (
      JSON.stringify ({
        success: false,
        error: error.message || 'Failed to generate smart contract';
      });
      {
        status: 500,
        headers: { ...cors_headers, 'Content - Type': 'application / json' }}
    );
  }
});
;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
