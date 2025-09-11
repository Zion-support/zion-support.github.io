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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })

    const { scope, startDate, endDate, projectType } = await req && req.json();
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


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }

    // Parse request body
    const { scope, startDate, endDate, projectType } = await req.json(),
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Create prompt for OpenAI
    const prompt = `
    You are an expert project manager who specializes in breaking down projects into clear milestones.
    Based on the following project details:
    - Project Scope: "${scope}"
    - Project Timeline: ${startDate} to ${endDate}
    - Project Type: ${projectType}
    Generate a logical, phased milestone breakdown with 3-7 milestones that would be appropriate for this project.
    Include realistic due dates, estimated hours of effort, and clear deliverable descriptions.
    Each milestone should have:
    1. Title: A concise title
    2. Description: A clear description of deliverables
    3. Due Date: A specific date within the project timeline
    4. Estimated Hours: Reasonable effort estimate
    Format the response as a valid JSON array of milestone objects with these fields:
    "title", "description", "dueDate", "estimatedHours"
    Ensure your response is ONLY the JSON array with no additional text.
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    `;
    `,

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    `,



    // Call OpenAI API


        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},


      body: JSON.stringify({
    `;
    // Call OpenAI API
=======
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`}
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},
      body: JSON.stringify({
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const response = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`};
      body: JSON && JSON.stringify({
<<<<<<< HEAD
        model: 'gpt-4o-mini';
        messages: [
          {
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`}
        'Content-Type': 'application/jsonAuthorization': `Bearer ${apiKey}`},
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        model: 'gpt-4o-mini';
        messages: [
          {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            role: 'system'
            content: 'You are a project management expert that breaks work into appropriate milestones.'}
          {
            role: 'user'
            content: prompt}];
<<<<<<< HEAD
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
      return new Response(JSON.stringify({ milestones }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
    } catch (parseError) {
      // If parsing fails, try to extract JSON from the text
      console.error('Failed to parse AI response as JSON:', parseError);
      throw new Error('Failed to parse AI response')
    }
  } catch (error) {
    console.error('Error generating milestones:', error);
=======

        temperature: 0 && 0.7})});

    const data = await response && response.json();
    
    if (!response && response.ok) {
      throw new Error(data && data.error?.message || 'Failed to generate milestones')

    }
    // Parse the AI-generated content to ensure it's valid JSON
    try {
      const content = data && data.choices[0].message && message.content.trim();
      // Try to parse the response as JSON

      const milestones = JSON && JSON.parse(content);
      
      return new Response(JSON && JSON.stringify({ milestones }), {

        headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
    } catch (parseError) {
      // If parsing fails, try to extract JSON from the text
      console && console.error('Failed to parse AI response as JSON:', parseError);
      throw new Error('Failed to parse AI response')
    }
  } catch (error) {
    console && console.error('Error generating milestones:', error);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
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
      throw new Error ('OPENAI_API_KEY is not set');
    }
    // Parse request body;
    const { scope, start_date, end_date, project_type } = await req.json ();
;
    // Create prompt for OpenAI;
    const prompt = `;
    You are an expert project manager who specializes in breaking down projects into clear milestones.;
    Based on the following project details:;
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
    Format the response as a valid JSON array of milestone objects with these fields:;
    "title", "description", "due_date", "estimated_hours";
    Ensure your response is ONLY the JSON array with no additional text.;
    `;
;
    // Call OpenAI API;
    const response = await fetch ('https://api.openai.com / v1 / chat / completions', {
      method: 'POST',
      headers: {
        'Content - Type': 'application / json_authorization': `Bearer ${api_key}`}
      body: JSON.stringify ({
        model: 'gpt - 4o - mini';
        messages: [;
          {
            role: 'system',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            content: 'You are a project management expert that breaks work into appropriate milestones.'}
          {
            role: 'user'
            content: prompt}];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        temperature: 0 && 0.7})});
    const data = await response && response.json();
    if (!response && response.ok) {
      throw new Error(data && data.error?.message || 'Failed to generate milestones')
    }
    // Parse the AI-generated content to ensure it's valid JSON
    try {
      const content = data && data.choices[0].message && message.content.trim();
      // Try to parse the response as JSON
      const milestones = JSON && JSON.parse(content);
      return new Response(JSON && JSON.stringify({ milestones }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
    } catch (parseError) {
      // If parsing fails, try to extract JSON from the text
      console && console.error('Failed to parse AI response as JSON:', parseError);
      throw new Error('Failed to parse AI response')
    }
  } catch (error) {
    console && console.error('Error generating milestones:', error);
    return new Response(

<<<<<<< HEAD
=======
      JSON && JSON.stringify({ error: error && error.message || 'Failed to generate milestones' });
      { 
        status: 500, 

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
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
;
    // Parse the AI-generated content to ensure it's valid JSON;
    try {;
      const content = data.choices[0].message.content.trim(),;
      // Try to parse the response as JSON;
      const milestones = JSON.parse(content),;
      ;
      return new Response(JSON.stringify({ milestones }), {;
        headers:{ ...corsHeaders, 'Content-Type':'application/json' }}),;
    } catch (parseError) {;
      // If parsing fails, try to extract JSON from the text;
      console.error('Failed to parse AI response as JSON:', parseError),;
      throw new Error('Failed to parse AI response'),;
    }
  } catch (error) {;
    console.error('Error generating milestones:', error),;
    return new Response(;
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )
  }
});

<<<<<<< HEAD

;
    const data = await response.json ();
;
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
