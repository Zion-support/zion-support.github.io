>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;


import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts"
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

=======interface Milestone {
  title: string;
  description: string;
  dueDate: string
  estimatedHours: number
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

interface Milestone {
  title: string,
  description: string,
  dueDate: string,
  estimatedHours: number
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
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
      additionalClauses,;
      milestones;
    } = await req.json(),;
;
    // Create the contract prompt for OpenAI;
    let prompt = `;
    Please generate a professional contractual agreement between ${clientName} (Client) and ${talentName} (Talent) for the following project:;
;
    Project Name:${projectName}
    Project Scope:${scopeSummary}
    Start Date:${new Date(startDate).toLocaleDateString()}
    ${endDate ? `End Date:${new Date(endDate).toLocaleDateString()}` :'End Date:To be determined based on project completion'}
    ;
    Payment Terms:${paymentTerms}
    Payment Amount:${paymentAmount}
    ;
    The contract should include standard sections like:- Parties involved;
    - Project scope;
    - Timeline;
    - Payment terms;
    - Deliverables;
    `,;
;
    if (additionalClauses && additionalClauses.length > 0) {;
      prompt += `;
      ;
      Please also include the following additional clauses:;
      ${additionalClauses.includes('nda') ? '- Confidentiality/Non-disclosure agreement' :''}
      ${additionalClauses.includes('ip') ? '- Intellectual Property rights transfer to the client' :''}
      ${additionalClauses.includes('termination') ? '- Termination conditions and process' :''}
      ${additionalClauses.includes('revisions') ? '- Revision and amendment procedures' :''}
      `,;
    }
;
    // Add milestone information if available;
    if (milestones && milestones.length > 0) {;
      prompt += `;
      ;
      The project will be divided into the following milestones:`,;
      ;
      milestones.forEach((milestone:Milestone, index:number) => {;
        prompt += `;
        Milestone ${index + 1} ${milestone.title}
        - Description:${milestone.description}
        - Due Date:${new Date(milestone.dueDate).toLocaleDateString()}
        - Estimated Work:${milestone.estimatedHours} hours;
        `,;
      }),;
      ;
      prompt += `;
      ;
      Please structure the contract to include these milestones in the payment schedule, with payments tied to the completion and approval of each milestone.;
      `,;
    }
;
    prompt += `;
    ;
    Format the contract professionally with proper sections, numbering, and formatting. Use markdown formatting.;
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
            content:'You are a legal expert specializing in drafting professional freelance contracts. Generate a clear, comprehensive contract based on the provided details.'},;
          {;
            role:'user',;
            content:prompt}],;
        temperature:0.7})}),;
;
    const data = await response.json(),;
    ;
    if (!response.ok) {;
      throw new Error(data.error?.message || 'Failed to generate contract'),;
    }
;
    const contract = data.choices[0].message.content.trim(),;
    ;
    return new Response(JSON.stringify({ ;
      success:true, ;
      contract ;
    }), {;
      headers:{ ...corsHeaders, 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error generating contract:', error),;
    return new Response(;
      JSON.stringify({ ;
        success:false, ;
        error:error.message || 'Failed to generate contract' ;
      }),;
      { ;
        status:500, ;
        headers:{ ...corsHeaders, 'Content-Type':'application/json' }}
    ),;
  }
}),;interface Milestone {
  title: string;
description: string;
dueDate: string;
estimatedHours: number 
}//Handle CORS preflight requests if (req.method === 'OPTIONS') {
  //Create the contract prompt for OpenAI let prompt = `Please generate a professional contractual agreement between $ {
  clientName 
}(Client) and $ {
  talentName 
}(Talent) for the following project: Project Name: $ {
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
}The contract should include standard sections like: - Parties involved - Project scope - Timeline - Payment terms - Deliverables `;
if (additionalClauses && additionalClauses.length > 0) {
  prompt += `Please also include the following additional clauses: $ {
  additionalClauses.includes ('nda') ? '- Confidentiality/Non-disclosure agreement' : '' 
}
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};

interface Milestone {title: string,
  description: string,
  dueDate: string,
  estimatedHours: number}

serve(async (req) => {_// Handle CORS preflight requests,
if (req.method === 'OPTIONS') {
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return new Response(null, { headers: corsHeaders })
  }





  try {
    // Parse request body,
const {
      talentName,
      clientName,
      projectName,
      scopeSummary,
      startDate,
      endDate,
      paymentTerms,
      paymentAmount,
      additionalClauses,
      milestones
    } = await req.json(),
    // Create the contract prompt for OpenAI,
let prompt = `
    Please generate a professional contractual agreement between ${clientName} (Client) and ${talentName} (Talent) for the following project:




}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Get the OpenAI API key from environment variables
    const apiKey = Deno.env.get('OPENAI_API_KEY');
=======
    // Get the OpenAI API key from environment variables
    const apiKey = Deno && Deno.env.get('OPENAI_API_KEY');=======
    // Get the OpenAI API key from environment variables
    const apiKey = Deno && Deno.env.get('OPENAI_API_KEY');
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    } = await req && req.json();




=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    Project Name: ${projectName}
    Project Scope: ${scopeSummary}
    Start Date: ${new Date(startDate).toLocaleDateString()}
    ${endDate ? `End Date: ${new Date(endDate).toLocaleDateString()}` : 'End Date: To be determined based on project completion'}
    Payment Terms: ${paymentTerms}
    Payment Amount: ${paymentAmount}
    The contract should include standard sections like: - Parties involved
    - Project scope
    - Timeline
    - Payment terms
    - Deliverables
    `
    if (additionalClauses && additionalClauses.length > 0) {
      prompt += `
      Please also include the following additional clauses:
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
=======
      
      The project will be divided into the following milestones: `,
      
      milestones && milestones.forEach((milestone: Milestone, index: number) => {
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
        prompt += `

    const response = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`};
      body: JSON && JSON.stringify({
=======
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`};
      body: JSON && JSON.stringify({
        model: 'gpt-4o';
        messages: [
          {
            role: 'system'
      { 
        status: 500, 

    const data = await response.json(),
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate contract')
    }

    const contract = data.choices[0].message.content.trim(),
    
    return new Response(JSON.stringify({ 
      success: true,
      contract 
    }), {
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
  } catch (error) {
=======        temperature: 0.7})});
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message |'Failed to generate contract')
    }
    const contract = data.choices[0].message.content.trim();
    return new Response(JSON.stringify({
      success: true
      contract
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error generating contract:', error);
    return new Response(
      JSON.stringify({
        success: false
        error: error.message |'Failed to generate contract'
      });
      { 
        status: 500, 
=======
        - Estimated Work: ${milestone.estimatedHours} hours;
        `;
      }),;        temperature: 0 && 0.7})});

    const data = await response && response.json();
    
    if (!response && response.ok) {
      throw new Error(data && data.error?.message || 'Failed to generate contract')
    }

    const contract = data && data.choices[0].message && message.content.trim();
    
    return new Response(JSON && JSON.stringify({ 
      success: true, 
      contract 

=======
;
    const data = await response.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (data.error?.message || 'Failed to generate contract');
    }
    const contract = data.choices[0].message.content.trim ();
;
    return new Response (JSON.stringify ({
      success: true,
      contract;    }), {
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
  } catch (error) {

      JSON && JSON.stringify({ 
        success: false, 
        error: error && error.message || 'Failed to generate contract' 

      });
      {
        status: 500
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});

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

<<<<<<< HEAD
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
