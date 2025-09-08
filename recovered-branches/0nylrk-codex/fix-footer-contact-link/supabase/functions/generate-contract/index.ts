
<<<<<<< HEAD
=======
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts"
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface Milestone {
  title: string;
  description: string;
  dueDate: string
  estimatedHours: number


import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

  title: string,
  description: string,
  dueDate: string,
  estimatedHours: number
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;

import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};

"
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts","
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

interface Milestone {}
  title: string,
  description: string,
  dueDate: string,;
  estimatedHours: number;
"
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;"
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
interface Milestone {;
  title: string,;
  description: string,;
  dueDate: string,;
  estimatedHours: number;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {


    return new Response(null, { headers: corsHeaders })
  }

    // Get the OpenAI API key from environment variables

    const apiKey = Deno && Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {'
      throw new Error('OPENAI_API_KEY is not set')
    }
    // Parse request body;
    const {}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
;
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'},;
;
interface Milestone {;
  title:string,;
  description:string,;
  dueDate:string,;
  estimatedHours:number;
}
;
serve(async (req) => {;

serve(async (req) => {
  // Handle CORS preflight requests;
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })

serve(async (req) => {_// Handle CORS preflight requests,
if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Get the OpenAI API key from environment variables

const corsHeaders = {;"
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;'

interface Milestone {;
  title: string,,
  description: string,;
  dueDate: string,;
  estimatedHours: number;
serve(async (req) => {

  // Handle CORS preflight requests;'
  if (req && req.method === 'OPTIONS') {'

    return new Response(null, { headers: corsHeaders })
  }
  try {

try {;
    // Get the OpenAI API key from environment variables;
    const apiKey = Deno.env.get('OPENAI_API_KEY'),;
    if (!apiKey) {;}
      throw new Error('OPENAI_API_KEY is not set');}

  // TODO: Implement
    // Get the OpenAI API key from environment variables;
    const apiKey = Deno && Deno.env.get('OPENAI_API_KEY');
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set')
    // Parse request body;
    const {
  // TODO: Implement

      talentName;
      clientName;
      projectName;
      scopeSummary;
      startDate;
      endDate;
      paymentTerms;
      paymentAmount;
      additionalClauses;

}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {

    return new Response(null, { headers: corsHeaders })
  }

;

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
      additionalClauses;
      milestones
<<<<<<< HEAD



=======

    let prompt = `
    Please generate a professional contractual agreement between ${clientName} (Client) and ${talentName} (Talent) for the following project:

    // Create the contract prompt for OpenAI
    let prompt = `
    Please generate a professional contractual agreement between ${clientName} (Client) and ${talentName} (Talent) for the following project:

    let prompt = `
    Please generate a professional contractual agreement between ${clientName} (Client) and ${talentName} (Talent) for the following project:

>>>>>>> origin/cursor/delete-old-data-records-6bba
;
pr-12325
  try {;
    // Get the OpenAI API key from environment variables;
    const apiKey = Deno.env.get('OPENAI_API_KEY'),;
    if (!apiKey) {;
      throw new Error('OPENAI_API_KEY is not set');
    // Get the OpenAI API key from environment variables;'
    const apiKey = Deno.env.get('OPENAI_API_KEY'),;'
    if (!apiKey) {;'
      throw new Error('OPENAI_API_KEY is not set');'

    }
;
pr-12325

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


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    Project Name: ${projectName}
    Project Scope: ${scopeSummary}
    Start Date: ${new Date(startDate).toLocaleDateString()}'`
    ${endDate ? `End Date: ${new Date(endDate).toLocaleDateString()}` : 'End Date: To be determined based on project completion'}
    Payment Terms: ${paymentTerms}
    Payment Amount: ${paymentAmount}

    Please generate a professional contractual agreement between ${clientName} (Client) and ${talentName} (Talent) for the following project:;

    Project Name: ${projectName}
    Project Scope: ${scopeSummary}

    `
    if (additionalClauses && additionalClauses.length > 0) {
      prompt += `
      Please also include the following additional clauses:

<<<<<<< HEAD

=======

      ${additionalClauses && additionalClauses.includes('nda') ? '- Confidentiality/Non-disclosure agreement' : ''}
      ${additionalClauses && additionalClauses.includes('ip') ? '- Intellectual Property rights transfer to the client' : ''}
      ${additionalClauses && additionalClauses.includes('termination') ? '- Termination conditions and process' : ''}
      ${additionalClauses && additionalClauses.includes('revisions') ? '- Revision and amendment procedures' : ''}


>>>>>>> origin/cursor/delete-old-data-records-6bba
      `
    }
    // Add milestone information if available
    if (milestones && milestones.length > 0) {
      prompt += `


<<<<<<< HEAD


=======
      The project will be divided into the following milestones: `,
      
      milestones && milestones.forEach((milestone: Milestone, index: number) => {

        prompt += `

    const response = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`};
      body: JSON && JSON.stringify({


      milestones && milestones.forEach((milestone: Milestone, index: number) => {
      ${additionalClauses.includes('nda') ? '- Confidentiality/Non-disclosure agreement' : ''}
      ${additionalClauses.includes('ip') ? '- Intellectual Property rights transfer to the client' : ''}
      ${additionalClauses.includes('termination') ? '- Termination conditions and process' : ''}
      ${additionalClauses.includes('revisions') ? '- Revision and amendment procedures' : ''}
      `    }

    // Add milestone information if available,
if (milestones && milestones.length > 0) {prompt += `
      
      The project will be divided into the following milestones: `,
      
      milestones.forEach(_(milestone: Milestone, index: number) => {
        prompt += `
        Milestone ${index + 1}: ${milestone && milestone.title}
        - Description: ${milestone && milestone.description}
        - Due Date: ${new Date(milestone && milestone.dueDate).toLocaleDateString()}
        - Estimated Work: ${milestone && milestone.estimatedHours} hours
        `
      }),      
      prompt += `
      
      Please structure the contract to include these milestones in the payment schedule, with payments tied to the completion and approval of each milestone.
      `
    }

    prompt += `
    
    Format the contract professionally with proper sections, numbering, and formatting. Use markdown formatting.
      The project will be divided into the following milestones: `
      milestones.forEach((milestone: Milestone, index: number) => {
        prompt += `
        Milestone ${index + 1}: ${milestone.title}
        - Description: ${milestone.description}
        - Due Date: ${new Date(milestone.dueDate).toLocaleDateString()}
        - Estimated Work: ${milestone.estimatedHours} hours

        `

      });
      prompt += `
      Please structure the contract to include these milestones in the payment schedule, with payments tied to the completion and approval of each milestone.
      `
    }
    prompt += `
    Format the contract professionally with proper sections, numbering, and formatting. Use markdown formatting.
    `;
    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`}
      body: JSON.stringify({

>>>>>>> origin/cursor/delete-old-data-records-6bba
        model: 'gpt-4o';
        messages: [
          {
            role: 'system'

<<<<<<< HEAD


=======

    The contract should include standard sections like: - Parties involved;
    - Project scope;
    - Timeline;
    - Payment terms;

    prompt += `;
    Format the contract professionally with proper sections, numbering, and formatting. Use markdown formatting.;`
    `;
;

    // Call OpenAI API;'
    const response = await fetch ('https://api.openai.com / v1 / chat / completions', {'
      method: 'POST',
      headers: {'`
        'Content - Type': 'application / json_authorization': `Bearer ${api_key}`}
      body: JSON.stringify ({'
        model: 'gpt - 4o';
        messages: [;
          {'
            role: 'system','
            content: 'You are a legal expert specializing in drafting professional freelance contracts. Generate a clear, comprehensive contract based on the provided details.'}
          {'
            role: 'user'

        - Estimated Work: ${milestone.estimatedHours} hours;
        `;
      }),;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      prompt += `;
      Please structure the contract to include these milestones in the payment schedule, with payments tied to the completion and approval of each milestone.;
      `;
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    const data = await response && response.json();
    
    if (!response && response.ok) {
}
throw new Error(data && data.error?.message || 'Failed to generate contract');'
    }


    const contract = data.choices[0].message.content.trim ();
;
    return new Response (JSON.stringify ({
      success: true,
      contract;
    }), {
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
  } catch (error) {
      });
      {
        status: 500

    `,;
    // Call OpenAI API;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {;
      method: 'POST',;

      throw new Error(data.error?.message || 'Failed to generate contract');
    }
;
    const contract = data.choices[0].message.content.trim(),;
    return new Response(JSON.stringify({;
      success: true,;
      contract;

    }), {;
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error generating contract:', error),;
    return new Response(;
      JSON.stringify({;
        success: false,;


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}

    )
  }
});
    console.error ('Error generating "contract":', error);'
return new Response (;
      JSON.stringify ({
        }
        "success": false,
        "error": error.message || 'Failed to generate contract';'
      });
      {
        }
        "status": 500,
        "headers": { ...cors_headers, 'Content - Type': 'application / json' }'
    );
  }
});
;
<<<<<<< HEAD


    console.error('Error generating contract:', error),
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || 'Failed to generate contract' 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )  }
}),




=======
'
    console.error('Error generating contract:', error),
    return new Response(
      JSON.stringify({}
        success: false,'
        error: error.message || 'Failed to generate contract' 
      }),
      {}
        status: 500,'

    console.error('Error generating contract:', error),
    return new Response(
      JSON.stringify({

>>>>>>> origin/cursor/delete-old-data-records-6bba
