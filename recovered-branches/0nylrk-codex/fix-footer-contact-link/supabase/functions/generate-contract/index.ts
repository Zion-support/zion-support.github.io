<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts

<<<<<<< HEAD

=======
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;


========
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
=======

<<<<<<< HEAD
<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts"
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface Milestone {
  title: string;
  description: string;
  dueDate: string
  estimatedHours: number
=======
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

interface Milestone {
  title: string,
  description: string,
  dueDate: string,
  estimatedHours: number
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
interface Milestone {;
  title: string,;
  description: string,;
  dueDate: string,;
  estimatedHours: number;
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    return new Response(null, { headers: corsHeaders })
  }

<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
  try {
<<<<<<< HEAD
    // Get the OpenAI API key from environment variables
    const apiKey = Deno && Deno.env.get('OPENAI_API_KEY');
=======
    // Get the OpenAI API key from environment variables,
const apiKey = Deno.env.get('OPENAIAPI_KEY'),
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    if (!apiKey) {
      throw new Error('OPENAIAPI_KEY is not set')
    }

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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts

    } = await req && req.json();


========
<<<<<<< HEAD
    } = await req && req.json();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
    // Create the contract prompt for OpenAI
    let prompt = `
=======
    } = await req.json(),
    // Create the contract prompt for OpenAI,
let prompt = `
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    Please generate a professional contractual agreement between ${clientName} (Client) and ${talentName} (Talent) for the following project:

<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
<<<<<<< HEAD
=======



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
      additionalClauses;
      milestones
    } = await req.json();
    // Create the contract prompt for OpenAI
    let prompt = `
    Please generate a professional contractual agreement between ${clientName} (Client) and ${talentName} (Talent) for the following project:
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      additionalClauses,;
      milestones;
    } = await req.json(),;
    // Create the contract prompt for OpenAI;
    let prompt = `;
    Please generate a professional contractual agreement between ${clientName} (Client) and ${talentName} (Talent) for the following project:;
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    Project Name: ${projectName}
    Project Scope: ${scopeSummary}
    Start Date: ${new Date(startDate).toLocaleDateString()}
    ${endDate ? `End Date: ${new Date(endDate).toLocaleDateString()}` : 'End Date: To be determined based on project completion'}
<<<<<<< HEAD
    
    Payment Terms: ${paymentTerms}
    Payment Amount: ${paymentAmount}
    
=======
    Payment Terms: ${paymentTerms}
    Payment Amount: ${paymentAmount}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    The contract should include standard sections like: - Parties involved
    - Project scope
    - Timeline
    - Payment terms
    - Deliverables
<<<<<<< HEAD
    `,

    if (additionalClauses && additionalClauses.length > 0) {prompt += `
      
      Please also include the following additional clauses:
<<<<<<< HEAD
      ${additionalClauses && additionalClauses.includes('nda') ? '- Confidentiality/Non-disclosure agreement' : ''}
      ${additionalClauses && additionalClauses.includes('ip') ? '- Intellectual Property rights transfer to the client' : ''}
      ${additionalClauses && additionalClauses.includes('termination') ? '- Termination conditions and process' : ''}
      ${additionalClauses && additionalClauses.includes('revisions') ? '- Revision and amendment procedures' : ''}
=======
    `
    if (additionalClauses && additionalClauses.length > 0) {
      prompt += `
      Please also include the following additional clauses:
      ${additionalClauses.includes('nda') ? '- Confidentiality/Non-disclosure agreement' : ''}
      ${additionalClauses.includes('ip') ? '- Intellectual Property rights transfer to the client' : ''}
      ${additionalClauses.includes('termination') ? '- Termination conditions and process' : ''}
      ${additionalClauses.includes('revisions') ? '- Revision and amendment procedures' : ''}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      `
    }
    // Add milestone information if available
    if (milestones && milestones.length > 0) {
      prompt += `
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts

      
      The project will be divided into the following milestones: `,
      
      milestones && milestones.forEach((milestone: Milestone, index: number) => {

        prompt += `
<<<<<<< HEAD
=======

========
      The project will be divided into the following milestones: `,
      milestones && milestones.forEach((milestone: Milestone, index: number) => {
=======
      ${additionalClauses.includes('nda') ? '- Confidentiality/Non-disclosure agreement' : ''}
      ${additionalClauses.includes('ip') ? '- Intellectual Property rights transfer to the client' : ''}
      ${additionalClauses.includes('termination') ? '- Termination conditions and process' : ''}
      ${additionalClauses.includes('revisions') ? '- Revision and amendment procedures' : ''}
      `    }

    // Add milestone information if available,
if (milestones && milestones.length > 0) {prompt += `
      
      The project will be divided into the following milestones: `,
      
      milestones.forEach(_(milestone: Milestone, index: number) => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
    `;
    // Call OpenAI API
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
    const response = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`};
      body: JSON && JSON.stringify({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
=======
      The project will be divided into the following milestones: `
      milestones.forEach((milestone: Milestone, index: number) => {
        prompt += `
        Milestone ${index + 1}: ${milestone.title}
        - Description: ${milestone.description}
        - Due Date: ${new Date(milestone.dueDate).toLocaleDateString()}
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        model: 'gpt-4o';
        messages: [
          {
            role: 'system'
<<<<<<< HEAD
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';
import "https://deno.land / x/xhr@0.1.0 / mod.ts",
const cors_headers = {
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}
;
interface Milestone {
  title: string;
  description: string;
  due_date: string,
  estimated_hours: number;
}
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
      additional_clauses;
      milestones;
    } = await req.json ();
;
    // Create the contract prompt for OpenAI;
    let prompt = `;
    Please generate a professional contractual agreement between ${client_name} (Client) and ${talent_name} (Talent) for the following project:;
    Project Name: ${project_name}
    Project Scope: ${scope_summary}
    Start Date: ${new Date (start_date).toLocaleDateString ()}
    ${end_date ? `End Date: ${new Date (end_date).toLocaleDateString ()}` : 'End Date: To be determined based on project completion'}
    Payment Terms: ${payment_terms}
    Payment Amount: ${payment_amount}
    The contract should include standard sections like: - Parties involved;
    - Project scope;
    - Timeline;
    - Payment terms;
    - Deliverables;
    `,
    // Check condition
if ( {) {
  $2
}
      prompt += `;
      Please also include the following additional clauses:;
      ${additional_clauses.includes ('nda') ? '- Confidentiality / Non - disclosure agreement' : ''}
      ${additional_clauses.includes ('ip') ? '- Intellectual Property rights transfer to the client' : ''}
      ${additional_clauses.includes ('termination') ? '- Termination conditions and process' : ''}
      ${additional_clauses.includes ('revisions') ? '- Revision and amendment procedures' : ''}
      `;
    }
    // Add milestone information if available;
    // Check condition
if ( {) {
  $2
}
      prompt += `;
      The project will be divided into the following milestones: `,
      milestones.for_each ((milestone: Milestone, index: number) => {
        prompt += `;
        Milestone ${index + 1}: ${milestone.title}
        - Description: ${milestone.description}
        - Due Date: ${new Date (milestone.due_date).toLocaleDateString ()}
        - Estimated Work: ${milestone.estimated_hours} hours;
        `;
      });
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        Milestone ${index + 1}: ${milestone.title}
        - Description: ${milestone.description}
        - Due Date: ${new Date(milestone.dueDate).toLocaleDateString()}

<<<<<<< HEAD
=======
      { 
        status: 500, 

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        - Estimated Work: ${milestone.estimatedHours} hours;
        `;
      }),;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      prompt += `;
      Please structure the contract to include these milestones in the payment schedule, with payments tied to the completion and approval of each milestone.;
      `;
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts

========
    prompt += `;
    Format the contract professionally with proper sections, numbering, and formatting. Use markdown formatting.;
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            content: 'You are a legal expert specializing in drafting professional freelance contracts. Generate a clear, comprehensive contract based on the provided details.'}
          {
            role: 'user'
            content: prompt}];
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
        temperature: 0 && 0.7})});
    const data = await response && response.json();
    if (!response && response.ok) {
      throw new Error(data && data.error?.message || 'Failed to generate contract')
    }
    const contract = data && data.choices[0].message && message.content.trim();
    return new Response(JSON && JSON.stringify({ 
      success: true, 
      contract 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
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
      contract;
=======
    `,

    // Call OpenAI API,
const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are a legal expert specializing in drafting professional freelance contracts. Generate a clear, comprehensive contract based on the provided details.'},
          {
            role: 'user',
            content: prompt}],
        temperature: 0.7})}),

    const data = await response.json(),
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate contract')
    }

    const contract = data.choices[0].message.content.trim(),
    
    return new Response(JSON.stringify({ 
      success: true,
      contract 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    }), {
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
  } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts

      JSON && JSON.stringify({ 
        success: false, 
        error: error && error.message || 'Failed to generate contract' 

========
<<<<<<< HEAD
      JSON && JSON.stringify({ 
        success: false, 
        error: error && error.message || 'Failed to generate contract' 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
      });
      {
        status: 500
=======
=======
        temperature: 0.7})});
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
<<<<<<< HEAD
      {
        status: 500
=======
      { 
        status: 500, 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        - Estimated Work: ${milestone.estimatedHours} hours;
        `;
      }),;
      prompt += `;
      Please structure the contract to include these milestones in the payment schedule, with payments tied to the completion and approval of each milestone.;
      `;
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
    prompt += `;
    Format the contract professionally with proper sections, numbering, and formatting. Use markdown formatting.;
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
            content: 'You are a legal expert specializing in drafting professional freelance contracts. Generate a clear, comprehensive contract based on the provided details.'},;
          {;
            role: 'user',;
            content: prompt}],;
        temperature: 0.7})}),;
    const data = await response.json(),;
    if (!response.ok) {;
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
        error: error.message || 'Failed to generate contract';
      }),;
      {;
        status: 500,;
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
<<<<<<< HEAD

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
    console.error ('Error generating contract:', error);
    return new Response (
      JSON.stringify ({
        success: false,
        error: error.message || 'Failed to generate contract';
      });
      {
        status: 500,
        headers: { ...cors_headers, 'Content - Type': 'application / json' }}
    );
  }
});
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-contract/index.ts
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
