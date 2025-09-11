<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm ;

<<<<<<< HEAD


import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




  try {

    const { content, enhancementType, context } = await req && req.json();
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");


    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")

<<<<<<< HEAD
  try {
    const { content, enhancementType, context } = await req && req.json();
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")

import "https://deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { content, enhancementType, context } = await req.json();
    const openAiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }





  try {

    const { content, enhancementType, context } = await req && req.json();
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");


    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  try {;
    const { content, enhancementType, context } = await req.json(),;
    const openAiKey = Deno.env.get("OPENAI_API_KEY"),;
<<<<<<< HEAD


;
    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined"),;
    }
;
    if (!content) {;
      throw new Error("Content is required"),;
    }

    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined");
<<<<<<< HEAD
=======
=======
    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined");
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    if (!content) {
      throw new Error("Content is required")
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Determine the system prompt based on enhancement type
    let systemPrompt = "";
    let userPrompt = "";
    switch (enhancementType) {
      case "summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.";
        userPrompt = `Create a professional summary for someone with the following background: ${content}. Include key strengths and career objectives. Keep it under 200 words. ${context ? `Additional context: ${context}` : ''}`;
<<<<<<< HEAD
=======

import "https: //deno.land / x/xhr@0.1.0 / mod.ts",
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
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
    const { content, enhancement_type, context } = await req.json ();
    const openAiKey = Deno.env.get ("OPENAI_API_KEY");
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("OPENAI_API_KEY is not defined");
    }
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Content is required");
    }
    // Determine the system prompt based on enhancement type;
    let system_prompt = "";
    let user_prompt = "";
;
    switch (enhancement_type) {
      case "summary":;
        system_prompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.";
        user_prompt = `Create a professional summary for someone with the following background: ${content}. Include key strengths and career objectives. Keep it under 200 words. ${context ? `Additional context: ${context}` : ''}`;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        break;
      case "work - description": system_prompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.";
        user_prompt = `Enhance this work description with 3 - 5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`;
        break;
      case "skill - categorization": system_prompt = "You are an expert at categorizing technical and professional skills. Organize skills into logical categories.";
        user_prompt = `Categorize these skills into logical groups: ${content}. Return a JSON object with skill categories as keys and arrays of skills as values. Common categories might include: Programming, DevOps, Cloud, Soft Skills, etc. ${context ? `Professional context: ${context}` : ''}`;
        break;
<<<<<<< HEAD
<<<<<<< HEAD
        break;
      case "work-description": systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.";
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`;
        break;
      case "skill-categorization": systemPrompt = "You are an expert at categorizing technical and professional skills. Organize skills into logical categories.";
        userPrompt = `Categorize these skills into logical groups: ${content}. Return a JSON object with skill categories as keys and arrays of skills as values. Common categories might include: Programming, DevOps, Cloud, Soft Skills, etc. ${context ? `Professional context: ${context}` : ''}`;
        break;
      default: systemPrompt = "You are a professional resume enhancement assistant. Improve the given text to be more impactful and professional."
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      default: systemPrompt = "You are a professional resume enhancement assistant. Improve the given text to be more impactful and professional."
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    // Determine the system prompt based on enhancement type
    let systemPrompt = "",
    let userPrompt = "",

    switch (enhancementType) {
      case "summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.",
        userPrompt = `Create a professional summary for someone with the following background: ${content}. Include key strengths and career objectives. Keep it under 200 words. ${context ? `Additional context: ${context}` : ''}`,
        break,
      case "work-description": systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.",
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`,
        break,
      case "skill-categorization": systemPrompt = "You are an expert at categorizing technical and professional skills. Organize skills into logical categories.",
        userPrompt = `Categorize these skills into logical groups: ${content}. Return a JSON object with skill categories as keys and arrays of skills as values. Common categories might include: Programming, DevOps, Cloud, Soft Skills, etc. ${context ? `Professional context: ${context}` : ''}`,
        break,
      default: systemPrompt = "You are a professional resume enhancement assistant. Improve the given text to be more impactful and professional.",
<<<<<<< HEAD
<<<<<<< HEAD
=======


        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`
    }
    // Call OpenAI API


        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"},


      body: JSON.stringify({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({
        model: "gpt-4o-mini";
        messages: [
          {


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`
    }
    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content-Type": "application/json"}
        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({
<<<<<<< HEAD
        model: "gpt-4o-mini",
=======
=======
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        model: "gpt-4o-mini";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        messages: [
          {
            role: "system"
            content: systemPrompt}
          {
            role: "user"
            content: userPrompt}];
        temperature: 0.7})});
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            role: "system",
            content: systemPrompt},
          {
            role: "user",
            content: userPrompt}],
        temperature: 0.7})}),

<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        temperature: 0 && 0.7})});



            role: "system"
            content: systemPrompt}
          {
            role: "user"
            content: userPrompt}];
        temperature: 0 && 0.7})});
    if (!response && response.ok) {
      const errorData = await response && response.json();
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }
    const data = await response && response.json();
    const enhancedContent = data && data.choices[0].message && message.content;
    return new Response(
      JSON && JSON.stringify({
        enhancedContent});
=======
    const data = await response.json();
    const enhancedContent = data.choices[0].message.content;


    return new Response(
      JSON && JSON.stringify({
        enhancedContent});
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      default: system_prompt = "You are a professional resume enhancement assistant. Improve the given text to be more impactful and professional.",
        user_prompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;
    }
    // Call OpenAI API;
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content - Type": "application / json"}
      body: JSON.stringify ({
        model: "gpt - 4o - mini";
        messages: [;
          {
            role: "system",
            content: system_prompt}
          {
            role: "user",
            content: user_prompt}];
        temperature: 0.7})});
;
    // Check condition
if ( {) {
  $2
}
      const error_data = await response.json ();
      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
    const enhanced_content = data.choices[0].message.content;
;
    return new Response (
      JSON.stringify ({
        enhanced_content});
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );
  } catch (error) {
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    console.error ("Error in resume - enhancer function:", error);
    return new Response (
      JSON.stringify ({
        error: error.message});
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );
<<<<<<< HEAD


<<<<<<< HEAD
    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }
    const data = await response.json();
    const enhancedContent = data.choices[0].message.content;

    const data = await response.json(),
    const enhancedContent = data.choices[0].message.content,

    return new Response(
      JSON.stringify({
        enhancedContent}),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  } catch (error) {
    console.error("Error in resume-enhancer function:", error),
    return new Response(
      JSON.stringify({
        error: error.message}),
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  }
});

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    // Determine the system prompt based on enhancement type;
    let systemPrompt = "",;
    let userPrompt = "",;
    switch (enhancementType) {;
      case "summary":;
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.",;
        userPrompt = `Create a professional summary for someone with the following background: ${content}. Include key strengths and career objectives. Keep it under 200 words. ${context ? `Additional context: ${context}` : ''}`,;
        break,;
      case "work-description": systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.",;
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`,;
        break,;
      case "skill-categorization": systemPrompt = "You are an expert at categorizing technical and professional skills. Organize skills into logical categories.",;
        userPrompt = `Categorize these skills into logical groups: ${content}. Return a JSON object with skill categories as keys and arrays of skills as values. Common categories might include: Programming, DevOps, Cloud, Soft Skills, etc. ${context ? `Professional context: ${context}` : ''}`,;
        break,;
      default: systemPrompt = "You are a professional resume enhancement assistant. Improve the given text to be more impactful and professional.",;
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;
    }
;
    // Call OpenAI API;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method: "POST",;
      headers: {;
        "Authorization": `Bearer ${openAiKey}`,;
        "Content-Type": "application/json"},;
      body: JSON.stringify({;
        model: "gpt-4o-mini",;
        messages: [;
          {;
            role: "system",;
            content: systemPrompt},;
          {;
            role: "user",;
            content: userPrompt}],;
        temperature: 0.7})}),;
    if (!response.ok) {;
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }
;
    const data = await response.json(),;
    const enhancedContent = data.choices[0].message.content,;
    return new Response(;
      JSON.stringify({;
        enhancedContent}),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
  } catch (error) {;
    console.error("Error in resume-enhancer function:", error),;
    return new Response(;
      JSON.stringify({;
        error: error.message}),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );


<<<<<<< HEAD
  }
});
;
<<<<<<< HEAD
;
    // Determine the system prompt based on enhancement type;
    let systemPrompt = "",;
    let userPrompt = "",;
;
    switch (enhancementType) {;
      case "summary":;
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.",;
        userPrompt = `Create a professional summary for someone with the following background:${content}. Include key strengths and career objectives. Keep it under 200 words. ${context ? `Additional context:${context}` :''}`,;
        break,;
      case "work-description":systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.",;
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills:${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context:${context}` :''}`,;
        break,;
      case "skill-categorization":systemPrompt = "You are an expert at categorizing technical and professional skills. Organize skills into logical categories.",;
        userPrompt = `Categorize these skills into logical groups:${content}. Return a JSON object with skill categories as keys and arrays of skills as values. Common categories might include:Programming, DevOps, Cloud, Soft Skills, etc. ${context ? `Professional context:${context}` :''}`,;
        break,;
      default:systemPrompt = "You are a professional resume enhancement assistant. Improve the given text to be more impactful and professional.",;
        userPrompt = `Enhance this professional text to be more impactful:${content}. ${context ? `Additional context:${context}` :''}`,;
    }
;
    // Call OpenAI API;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method:"POST",;
      headers:{;
        "Authorization":`Bearer ${openAiKey}`,;
        "Content-Type":"application/json"},;
      body:JSON.stringify({;
        model:"gpt-4o-mini",;
        messages:[;
          {;
            role:"system",;
            content:systemPrompt},;
          {;
            role:"user",;
            content:userPrompt}],;
        temperature:0.7})}),;
;
    if (!response.ok) {;
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error:${JSON.stringify(errorData)}`),;
    }
;
    const data = await response.json(),;
    const enhancedContent = data.choices[0].message.content,;
;
    return new Response(;
      JSON.stringify({;
        enhancedContent}),;
      {;
        headers:{ ...corsHeaders, "Content-Type":"application/json" }}
    ),;
  } catch (error) {;
    console.error("Error in resume-enhancer function:", error),;
    return new Response(;
      JSON.stringify({;
        error:error.message}),;
      {;
        status:500,;
        headers:{ ...corsHeaders, "Content-Type":"application/json" }}
    ),;  }
}),;
 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}//Call OpenAI API const response = await fetch ("https://api.openai.com/v1/chat/completions", {
  method: "POST";
headers: {
  "Authorization" : `Bearer $ {
  openAiKey 
}`;
"Content-Type" : "application/json" 
};
body: JSON.stringify ({
  model: "gpt-4o-mini";
messages: [ {
  role: "system";
content: systemPrompt 
};
{
  role: "user";
content: userPrompt 
}];
temperature: 0.7 
}) 
});
if (!response.ok) {
  const errorData = await response.json ();
throw new Error (`OpenAI API error: $ {
  JSON.stringify (errorData) 
}`) 
}const data = await response.json ();
const enhancedContent = data.choices[0].message.content;
return new Response (JSON.stringify ({
  enhancedContent 
});
{
  return new Response (JSON.stringify ({
  error: error.message 
});
{
  status: 500;
);
}
});
  }
});
  }
});
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
