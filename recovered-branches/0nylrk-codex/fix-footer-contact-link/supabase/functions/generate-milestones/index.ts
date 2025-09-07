<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts"
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
=======
<<<<<<< HEAD

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
    const { scope, startDate, endDate, projectType } = await req.json($2);
    // Create prompt for OpenAI
    const prompt = `
    You are an expert project manager who specializes in breaking down projects into clear milestones.
    Based on the following project details:
=======
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts"
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;



<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts"
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {;
<<<<<<< HEAD
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};'
import { serve } from ""https": //deno.land/std@0.168.0/http/server.ts","
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},'
import { serve } from ""https": //deno.land/std@0.168.0/http/server.ts";"
import ""https"://deno.land/x/xhr@0.1.0/mod.ts",;"
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;'
=======
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};

import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;

  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'};
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",

import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const { scope, startDate, endDate, projectType } = await req && req.json();



serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Get the OpenAI API key from environment variables
    const apiKey = Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set')
    }
    // Parse request body
    const { scope, startDate, endDate, projectType } = await req.json();
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })

    const { scope, startDate, endDate, projectType } = await req && req.json();

    const { scope, startDate, endDate, projectType } = await req && req.json();

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;

import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;'
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
>>>>>>> origin/chore/fix-lint-and-merge
serve(async (req) => {;
  // Handle CORS preflight requests;'
  if (req.method === 'OPTIONS') {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    // Get the OpenAI API key from environment variables;'
    const apiKey = Deno.env.get('OPENAI_API_KEY'),;
    if (!apiKey) {;'
      throw new Error('OPENAI_API_KEY is not set');

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }

    // Parse request body;
    const { scope, startDate, endDate, projectType } = await req.json(),
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  }
  try {
    // Get the OpenAI API key from environment variables

    const apiKey = Deno && Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {'
      throw new Error('OPENAI_API_KEY is not set')
    }

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
    
  }
  try {
    // Get the OpenAI API key from environment variables
    const apiKey = Deno && Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set')
    }
    // Parse request body
    const { scope, startDate, endDate, projectType } = await req && req.json();
    
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Create prompt for OpenAI

    const prompt = `
    You are an expert project manager who specializes in breaking down projects into clear milestones.
    Based on the following project details:"

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    - Project Scope: "${scope}"
    - Project Timeline: ${startDate} to ${endDate}
    - Project Type: ${projectType}
    Generate a logical, phased milestone breakdown with 3-7 milestones that would be appropriate for this project.
    Include realistic due dates, estimated hours of effort, and clear deliverable descriptions.
    Each milestone should have:
<<<<<<< HEAD

    1. Title: A concise title;
    2. Description: A clear description of deliverables;
    3. Due Date: A specific date within the project timeline;
    4. Estimated Hours: Reasonable effort estimate;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
    1. Title: A concise title
    2. Description: A clear description of deliverables
    3. Due Date: A specific date within the project timeline
    4. Estimated Hours: Reasonable effort estimate
    Format the response as a valid JSON array of milestone objects with these fields:
    "title", "description", "dueDate", "estimatedHours"
    Ensure your response is ONLY the JSON array with no additional text.
<<<<<<< HEAD
=======
<<<<<<< HEAD
    `;
>>>>>>> merged-prs-20250907-203621
    `,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
<<<<<<< HEAD

`
    `,

    // Call OpenAI API;
'`
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},

      body: JSON.stringify({}
'
    const response = await fetch('https://api && api.openai.com/v1/chat/completions', {'
      method: 'POST',
      headers: {'`
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`};
      body: JSON && JSON.stringify({}
'
        model: 'gpt-4o-mini';

            content: 'You are a project management expert that breaks work into appropriate milestones.'}
          {
            role: 'user'
            content: prompt}];

    }
    // Parse the AI-generated content to ensure it's valid JSON
    try {
      const content = data.choices[0].message.content.trim();
      // Try to parse the response as JSON

        headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
    } catch (parseError) {
      // If parsing fails, try to extract JSON from the text
      console.error('Failed to parse AI response as JSON:', parseError);
      throw new Error('Failed to parse AI response')
    }
  } catch (error) {

            role: 'system',
            content: 'You are a project management expert that breaks work into appropriate milestones.'},
          {
            role: 'user',
            content: prompt}],
        temperature: 0.7})}),

    const data = await response.json(),
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate milestones')
    }

=======
<<<<<<< HEAD
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system'
            content: 'You are a project management expert that breaks work into appropriate milestones.'}
          {
            role: 'user',
            content: prompt}],
        temperature: 0.7})}),

    const data = await response.json($2);
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate milestones')
    }
    // Parse the AI-generated content to ensure it's valid JSON
    try {
      const content = data.choices[0].message.content.trim($2);
      // Try to parse the response as JSON
      const milestones = JSON.parse($2);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    `,



    // Call OpenAI API


        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},


      body: JSON.stringify({
    `;
    // Call OpenAI API
    const response = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`};
      body: JSON && JSON.stringify({
        model: 'gpt-4o-mini';
        messages: [
          {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`}
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system'
            content: 'You are a project management expert that breaks work into appropriate milestones.'}
          {
            role: 'user'
            content: prompt}];
        temperature: 0.7})});
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message |'Failed to generate milestones')
    }
    // Parse the AI-generated content to ensure it's valid JSON
    try {
      const content = data.choices[0].message.content.trim();
      // Try to parse the response as JSON
      const milestones = JSON.parse(content);
>>>>>>> merged-prs-20250907-203621
      return new Response(JSON.stringify({ milestones }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
    } catch (parseError) {
      // If parsing fails, try to extract JSON from the text
<<<<<<< HEAD
      console.error($2);
      throw new Error('Failed to parse AI response')
    }
  } catch (error) {
    console.error($2);
    return new Response($2);
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
}),
=======
      console.error('Failed to parse AI response as JSON:', parseError);
      throw new Error('Failed to parse AI response')
    }
  } catch (error) {
    console.error('Error generating milestones:', error);
    return new Response(
      JSON.stringify({ error: error.message |'Failed to generate milestones' });
      {
        status: 500
            role: 'system',
            content: 'You are a project management expert that breaks work into appropriate milestones.'},
          {
            role: 'user',
            content: prompt}],
        temperature: 0.7})}),

    const data = await response.json(),
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate milestones')
    }

    // Parse the AI-generated content to ensure it's valid JSON
    try {
      const content = data.choices[0].message.content.trim();
      // Try to parse the response as JSON
      const milestones = JSON.parse(content);
      
      return new Response(JSON.stringify({ milestones }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
    } catch (parseError) {
      // If parsing fails, try to extract JSON from the text
      console.error('Failed to parse AI response as JSON:', parseError);
      throw new Error('Failed to parse AI response')
    }
  } catch (error) {
    console.error('Error generating milestones:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to generate milestones' });
      { 
        status: 500, 
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
    // Parse the AI-generated content to ensure it's valid JSON;
    try {;
      const content = data.choices[0].message.content.trim(),;
      // Try to parse the response as JSON;
      const milestones = JSON.parse(content),;
      return new Response(JSON.stringify({ milestones }), {;
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }});
    } catch (parseError) {;
      // If parsing fails, try to extract JSON from the text;
      console.error('Failed to parse AI response as JSON:', parseError),;
      throw new Error('Failed to parse AI response');
    }
  } catch (error) {;
    console.error('Error generating milestones:', error),;
    return new Response(;
      JSON.stringify({ error: error.message || 'Failed to generate milestones' }),;
      {;
        status: 500,;

<<<<<<< HEAD
        model: 'gpt-4o-mini';
        messages: []
          {'
            role: 'system'
'
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';"
import "https://deno.land / x/xhr@0.1.0 / mod.ts",
const cors_headers = {'
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'};
;
serve (async (req) => {}
  // Handle CORS preflight requests;
  // Check condition;
if ( {) {}
  $2;
}
    return new Response (null, { headers: cors_headers });
  }
  try {}
    // Get the OpenAI API key from environment variables;'
    const api_key = Deno.env.get ('OPENAI_API_KEY');
    // Check condition;
if ( {) {}
  $2;
}'
=======
            role: 'system'
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      throw new Error ('OPENAI_API_KEY is not set');
    }
    // Parse request body;
    const { scope, start_date, end_date, project_type } = await req.json ();
;
<<<<<<< HEAD
    // Create prompt for OpenAI;`
    const prompt = `;
    You are an expert project manager who specializes in breaking down projects into clear milestones.;
    Based on the following project details:;"
=======
    // Create prompt for OpenAI;
    const prompt = `;
    You are an expert project manager who specializes in breaking down projects into clear milestones.;
    Based on the following project details:;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    - Project Scope: "${scope}";
    - Project Timeline: ${start_date} to ${end_date}
    - Project Type: ${project_type}
    Generate a logical, phased milestone breakdown with 3 - 7 milestones that would be appropriate for this project.;
    Include realistic due dates, estimated hours of effort, and clear deliverable descriptions.;
    Each milestone should have:;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    1. Title: A concise title;
    2. Description: A clear description of deliverables;
    3. Due Date: A specific date within the project timeline;
    4. Estimated Hours: Reasonable effort estimate;
<<<<<<< HEAD
    Format the response as a valid JSON array of milestone objects with these fields:;"
    "title", "description", "due_date", "estimated_hours";
    Ensure your response is ONLY the JSON array with no additional text.;`
    `;
;
    // Call OpenAI API;'
    const response = await fetch ('https://api.openai.com / v1 / chat / completions', {'
      method: 'POST',
      headers: {'`
        'Content - Type': 'application / json_authorization': `Bearer ${api_key}`}
      body: JSON.stringify ({'
        model: 'gpt - 4o - mini';
        messages: [;
          {'
            role: 'system',

'
            content: 'You are a project management expert that breaks work into appropriate milestones.'}
          {'
            role: 'user'
            content: prompt}];

        temperature: 0 && 0.7})});

    const data = await response && response.json();
    
    if (!response && response.ok) {'
      throw new Error(data && data.error?.message || 'Failed to generate milestones')

    }

    // Parse the AI-generated content to ensure it's valid JSON
    try {
      const content = data && data.choices[0].message && message.content.trim();
      // Try to parse the response as JSON

        headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
    } catch (parseError) {}
      // If parsing fails, try to extract JSON from the text'
      console && console.error('Failed to parse AI response as JSON:', parseError);'
      throw new Error('Failed to parse AI response')
    }
  } catch (error) {'
    console && console.error('Error generating milestones:', error);

            content: 'You are a project management expert that breaks work into appropriate milestones.'},
          {'
=======

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
<<<<<<< HEAD

`
    `,

    // Call OpenAI API;
'`
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},

      body: JSON.stringify({}
'
    const response = await fetch('https://api && api.openai.com/v1/chat/completions', {'
      method: 'POST',
      headers: {'`
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`};
      body: JSON && JSON.stringify({}
'
        model: 'gpt-4o-mini';
=======
        'Content - Type': 'application / json_authorization': `Bearer ${api_key}`}
      body: JSON.stringify ({
        model: 'gpt - 4o - mini';
        messages: [;
          {
            role: 'system',
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            content: 'You are a project management expert that breaks work into appropriate milestones.'}
          {
            role: 'user'
            content: prompt}];
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        temperature: 0 && 0.7})});
    const data = await response && response.json();
    if (!response && response.ok) {
      throw new Error(data && data.error?.message || 'Failed to generate milestones')
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    // Parse the AI-generated content to ensure it's valid JSON
    try {
      const content = data.choices[0].message.content.trim();
      // Try to parse the response as JSON
<<<<<<< HEAD

=======
      const milestones = JSON && JSON.parse(content);
      return new Response(JSON && JSON.stringify({ milestones }), {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
    } catch (parseError) {
      // If parsing fails, try to extract JSON from the text
      console.error('Failed to parse AI response as JSON:', parseError);
      throw new Error('Failed to parse AI response')
    }
  } catch (error) {
<<<<<<< HEAD
=======
    console && console.error('Error generating milestones:', error);
    return new Response(

<<<<<<< HEAD
=======
      JSON && JSON.stringify({ error: error && error.message || 'Failed to generate milestones' });
      { 
        status: 500, 

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            role: 'system',
            content: 'You are a project management expert that breaks work into appropriate milestones.'},
          {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            role: 'user',
            content: prompt}],
        temperature: 0.7})}),

    const data = await response.json(),
    
<<<<<<< HEAD
    if (!response.ok) {'
      throw new Error(data.error?.message || 'Failed to generate milestones')
    }
'
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});
'
      JSON && JSON.stringify({ error: error && error.message || 'Failed to generate milestones' });
      {}
        status: 500, '
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
"
import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;"
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
;
const corsHeaders = {;'
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'},;
;
serve(async (req) => {;
  // Handle CORS preflight requests;'
  if (req.method === 'OPTIONS') {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    // Get the OpenAI API key from environment variables;'
    const apiKey = Deno.env.get('OPENAI_API_KEY'),;
    if (!apiKey) {;'
      throw new Error('OPENAI_API_KEY is not set'),;
    }
;
    // Parse request body;
    const { scope, startDate, endDate, projectType } = await req.json(),;
    ;
    // Create prompt for OpenAI;`
    const prompt = `;
    You are an expert project manager who specializes in breaking down projects into clear milestones.;
    ;
    Based on the following project details:;"
    - Project Scope:"${scope}";
    - Project Timeline:${startDate} to ${endDate}
    - Project Type:${projectType}
    ;
    Generate a logical, phased milestone breakdown with 3-7 milestones that would be appropriate for this project.;
    Include realistic due dates, estimated hours of effort, and clear deliverable descriptions.;
    ;
    Each milestone should have:;
    1. Title:A concise title;
    2. Description:A clear description of deliverables;
    3. Due Date:A specific date within the project timeline;
    4. Estimated Hours:Reasonable effort estimate;
    ;
    Format the response as a valid JSON array of milestone objects with these fields:;"
    "title", "description", "dueDate", "estimatedHours";
    ;
    Ensure your response is ONLY the JSON array with no additional text.;`
    `,;
;
    // Call OpenAI API;'
    const response = await fetch('https://api.openai.com/v1/chat/completions', {;'
      method:'POST',;
      headers:{;'`
        'Content-Type':'application/jsonAuthorization':`Bearer ${apiKey}`},;
      body:JSON.stringify({;'
        model:'gpt-4o-mini',;
        messages:[;
          {;'
            role:'system',;'
            content:'You are a project management expert that breaks work into appropriate milestones.'},;
          {;'
            role:'user',;
            content:prompt}],;
        temperature:0.7})}),;
;
    const data = await response.json(),;
    ;
    if (!response.ok) {;'
      throw new Error(data.error?.message || 'Failed to generate milestones'),;
    }

;

    // Parse the AI-generated content to ensure it's valid JSON;
    try {;
      const content = data.choices[0].message.content.trim(),;
      // Try to parse the response as JSON;
      const milestones = JSON.parse(content),;
      return new Response(JSON.stringify({ milestones }), {;'
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }});
    } catch (parseError) {;
      // If parsing fails, try to extract JSON from the text;'
      console.error('Failed to parse AI response as JSON:', parseError),;'
      throw new Error('Failed to parse AI response');
    }
  } catch (error) {;'
    console.error('Error generating milestones:', error),;
    return new Response(;'
      JSON.stringify({ error: error.message || 'Failed to generate milestones' }),;
      {;
        status: 500,;'
=======
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate milestones')
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});

      JSON && JSON.stringify({ error: error && error.message || 'Failed to generate milestones' });
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )

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
    const { scope, startDate, endDate, projectType } = await req.json(),;
    ;
    // Create prompt for OpenAI;
    const prompt = `;
    You are an expert project manager who specializes in breaking down projects into clear milestones.;
    ;
    Based on the following project details:;
    - Project Scope:"${scope}";
    - Project Timeline:${startDate} to ${endDate}
    - Project Type:${projectType}
    ;
    Generate a logical, phased milestone breakdown with 3-7 milestones that would be appropriate for this project.;
    Include realistic due dates, estimated hours of effort, and clear deliverable descriptions.;
    ;
    Each milestone should have:;
    1. Title:A concise title;
    2. Description:A clear description of deliverables;
    3. Due Date:A specific date within the project timeline;
    4. Estimated Hours:Reasonable effort estimate;
    ;
    Format the response as a valid JSON array of milestone objects with these fields:;
    "title", "description", "dueDate", "estimatedHours";
    ;
    Ensure your response is ONLY the JSON array with no additional text.;
    `,;
;
    // Call OpenAI API;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {;
      method:'POST',;
      headers:{;
        'Content-Type':'application/jsonAuthorization':`Bearer ${apiKey}`},;
      body:JSON.stringify({;
        model:'gpt-4o-mini',;
        messages:[;
          {;
            role:'system',;
            content:'You are a project management expert that breaks work into appropriate milestones.'},;
          {;
            role:'user',;
            content:prompt}],;
        temperature:0.7})}),;
;
    const data = await response.json(),;
    ;
    if (!response.ok) {;
      throw new Error(data.error?.message || 'Failed to generate milestones'),;
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
    // Parse the AI-generated content to ensure it's valid JSON;
    try {;
      const content = data.choices[0].message.content.trim(),;
      // Try to parse the response as JSON;
      const milestones = JSON.parse(content),;
<<<<<<< HEAD
      return new Response(JSON.stringify({ milestones }), {;
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }});
    } catch (parseError) {;
      // If parsing fails, try to extract JSON from the text;
      console.error('Failed to parse AI response as JSON:', parseError),;
      throw new Error('Failed to parse AI response');
=======
      ;
      return new Response(JSON.stringify({ milestones }), {;
        headers:{ ...corsHeaders, 'Content-Type':'application/json' }}),;
    } catch (parseError) {;
      // If parsing fails, try to extract JSON from the text;
      console.error('Failed to parse AI response as JSON:', parseError),;
      throw new Error('Failed to parse AI response'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  } catch (error) {;
    console.error('Error generating milestones:', error),;
    return new Response(;
<<<<<<< HEAD
      JSON.stringify({ error: error.message || 'Failed to generate milestones' }),;
      {;
        status: 500,;

        model: 'gpt-4o-mini';
        messages: []
          {'
            role: 'system'
'
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';"
import "https://deno.land / x/xhr@0.1.0 / mod.ts",
const cors_headers = {'
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'};
;
serve (async (req) => {}
  // Handle CORS preflight requests;
  // Check condition;
if ( {) {}
  $2;
}
    return new Response (null, { headers: cors_headers });
  }
  try {}
    // Get the OpenAI API key from environment variables;'
    const api_key = Deno.env.get ('OPENAI_API_KEY');
    // Check condition;
if ( {) {}
  $2;
}'
      throw new Error ('OPENAI_API_KEY is not set');
    }
    // Parse request body;
    const { scope, start_date, end_date, project_type } = await req.json ();
;
    // Create prompt for OpenAI;`
    const prompt = `;
    You are an expert project manager who specializes in breaking down projects into clear milestones.;
    Based on the following project details:;"
    - Project Scope: "${scope}";
    - Project Timeline: ${start_date} to ${end_date}
    - Project Type: ${project_type}
    Generate a logical, phased milestone breakdown with 3 - 7 milestones that would be appropriate for this project.;
    Include realistic due dates, estimated hours of effort, and clear deliverable descriptions.;
    Each milestone should have:;
    1. Title: A concise title;
    2. Description: A clear description of deliverables;
    3. Due Date: A specific date within the project timeline;
    4. Estimated Hours: Reasonable effort estimate;
    Format the response as a valid JSON array of milestone objects with these fields:;"
    "title", "description", "due_date", "estimated_hours";
    Ensure your response is ONLY the JSON array with no additional text.;`
    `;
;
    // Call OpenAI API;'
    const response = await fetch ('https://api.openai.com / v1 / chat / completions', {'
      method: 'POST',
      headers: {'`
        'Content - Type': 'application / json_authorization': `Bearer ${api_key}`}
      body: JSON.stringify ({'
        model: 'gpt - 4o - mini';
        messages: [;
          {'
            role: 'system',

'
            content: 'You are a project management expert that breaks work into appropriate milestones.'}
          {'
            role: 'user'
            content: prompt}];

        temperature: 0 && 0.7})});

    const data = await response && response.json();
    
    if (!response && response.ok) {'
      throw new Error(data && data.error?.message || 'Failed to generate milestones')

    }

    // Parse the AI-generated content to ensure it's valid JSON
    try {
      const content = data && data.choices[0].message && message.content.trim();
      // Try to parse the response as JSON

        headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
    } catch (parseError) {}
      // If parsing fails, try to extract JSON from the text'
      console && console.error('Failed to parse AI response as JSON:', parseError);'
      throw new Error('Failed to parse AI response')
    }
  } catch (error) {'
    console && console.error('Error generating milestones:', error);

            content: 'You are a project management expert that breaks work into appropriate milestones.'},
          {'
            role: 'user',
            content: prompt}],
        temperature: 0.7})}),

    const data = await response.json(),
    
    if (!response.ok) {'
      throw new Error(data.error?.message || 'Failed to generate milestones')
    }
'
=======
      JSON.stringify({ error:error.message || 'Failed to generate milestones' }),;
      { ;
        status:500, ;
        headers:{ ...corsHeaders, 'Content-Type':'application/json' }}
    ),;
  }
}),; const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' 
};
//Handle CORS preflight requests if (req.method === 'OPTIONS') {
  //Create prompt for OpenAI const prompt = `You are an expert project manager who specializes in breaking down projects into clear milestones. Based on the following project details: Generate a logical, phased milestone breakdown with 3-7 milestones that would be appropriate for this project. Include realistic due dates, estimated hours of effort, and clear deliverable descriptions. Each milestone should have: 1. Title: A concise title 2. Description: A clear description of deliverables 3. Due Date: A specific date within the project timeline 4. Estimated Hours: Reasonable effort estimate Format the response as a valid JSON array of milestone objects with these fields: "title", "description", "dueDate", "estimatedHours" Ensure your response is ONLY the JSON array with no additional text. `;
// Call OpenAI API 
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});
'
      JSON && JSON.stringify({ error: error && error.message || 'Failed to generate milestones' });
      {}
        status: 500, '
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
"
import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;"
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
;
const corsHeaders = {;'
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'},;
;
<<<<<<< HEAD
serve(async (req) => {;
  // Handle CORS preflight requests;'
  if (req.method === 'OPTIONS') {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    // Get the OpenAI API key from environment variables;'
    const apiKey = Deno.env.get('OPENAI_API_KEY'),;
    if (!apiKey) {;'
      throw new Error('OPENAI_API_KEY is not set'),;
    }
;
    // Parse request body;
    const { scope, startDate, endDate, projectType } = await req.json(),;
    ;
    // Create prompt for OpenAI;`
    const prompt = `;
    You are an expert project manager who specializes in breaking down projects into clear milestones.;
    ;
    Based on the following project details:;"
    - Project Scope:"${scope}";
    - Project Timeline:${startDate} to ${endDate}
    - Project Type:${projectType}
    ;
    Generate a logical, phased milestone breakdown with 3-7 milestones that would be appropriate for this project.;
    Include realistic due dates, estimated hours of effort, and clear deliverable descriptions.;
    ;
    Each milestone should have:;
    1. Title:A concise title;
    2. Description:A clear description of deliverables;
    3. Due Date:A specific date within the project timeline;
    4. Estimated Hours:Reasonable effort estimate;
    ;
    Format the response as a valid JSON array of milestone objects with these fields:;"
    "title", "description", "dueDate", "estimatedHours";
    ;
    Ensure your response is ONLY the JSON array with no additional text.;`
    `,;
;
    // Call OpenAI API;'
    const response = await fetch('https://api.openai.com/v1/chat/completions', {;'
      method:'POST',;
      headers:{;'`
        'Content-Type':'application/jsonAuthorization':`Bearer ${apiKey}`},;
      body:JSON.stringify({;'
        model:'gpt-4o-mini',;
        messages:[;
          {;'
            role:'system',;'
            content:'You are a project management expert that breaks work into appropriate milestones.'},;
          {;'
            role:'user',;
            content:prompt}],;
        temperature:0.7})}),;
;
    const data = await response.json(),;
    ;
    if (!response.ok) {;'
      throw new Error(data.error?.message || 'Failed to generate milestones'),;
    }

;

    // Parse the AI-generated content to ensure it's valid JSON;
    try {;
      const content = data.choices[0].message.content.trim(),;
      // Try to parse the response as JSON;
      const milestones = JSON.parse(content),;
      return new Response(JSON.stringify({ milestones }), {;'
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }});
    } catch (parseError) {;
      // If parsing fails, try to extract JSON from the text;'
      console.error('Failed to parse AI response as JSON:', parseError),;'
      throw new Error('Failed to parse AI response');
    }
  } catch (error) {;'
    console.error('Error generating milestones:', error),;
    return new Response(;'
      JSON.stringify({ error: error.message || 'Failed to generate milestones' }),;
      {;
        status: 500,;'
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});
=======
    // Check condition
if ( {) {
  $2
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
});

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
