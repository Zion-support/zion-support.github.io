<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts

<<<<<<< HEAD

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

=======
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm ;

========
<<<<<<< HEAD
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
=======


import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  try {

    const { content, enhancementType, context, instructions } = await req && req.json();
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");


    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  try {
    const { content, enhancementType, context, instructions } = await req && req.json();
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")
=======

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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { content, enhancementType, context, instructions } = await req.json();
    const openAiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
  try {;
    const { content, enhancementType, context, instructions } = await req.json(),;
    const openAiKey = Deno.env.get("OPENAI_API_KEY"),;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined");

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;
    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined"),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
    }
;
    if (!content && !context) {;
      throw new Error("Either content or context is required"),;
    }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts

=======
    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined");
    }
    if (!content && !context) {
      throw new Error("Either content or context is required")
    }
    // Determine the system prompt based on enhancement type
    let systemPrompt = "";
    let userPrompt = "";
    switch (enhancementType) {
      case "resume-summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.";
        userPrompt = `Create a professional summary for someone with the following background: ${content |context}. Include key strengths and career objectives. Keep it under 200 words.`;
        break;
      case "work-description": systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.";
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`;
        break;
      case "job-post": systemPrompt = "You are an expert recruiter who creates compelling job descriptions that attract qualified candidates.";
        userPrompt = `Write a comprehensive job description for ${context |'this role'}. ${content ? `Based on this information: ${content}.` : ''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`;
        break;
      case "proposal": systemPrompt = "You are an expert freelance proposal writer who knows how to win client projects with persuasive pitches.";
        userPrompt = `Write a persuasive proposal for a freelancer applying to this job: ${context |'the described position'}. ${content ? `The freelancer has these qualifications: ${content}.` : ''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`;
        break;
      default: systemPrompt = "You are a professional content enhancement assistant. Improve the given text to be more impactful and professional."
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`

    // Determine the system prompt based on enhancement type
    let systemPrompt = "",
    let userPrompt = "",

    switch (enhancementType) {
      case "resume-summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.";
        userPrompt = `Create a professional summary for someone with the following background: ${content || context}. Include key strengths and career objectives. Keep it under 200 words.`;
        break;
      case "work-description": systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.";
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`;
        break;
      case "job-post": systemPrompt = "You are an expert recruiter who creates compelling job descriptions that attract qualified candidates.";
        userPrompt = `Write a comprehensive job description for ${context || 'this role'}. ${content ? `Based on this information: ${content}.` : ''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`;
        break;
      case "proposal": systemPrompt = "You are an expert freelance proposal writer who knows how to win client projects with persuasive pitches.";
        userPrompt = `Write a persuasive proposal for a freelancer applying to this job: ${context || 'the described position'}. ${content ? `The freelancer has these qualifications: ${content}.` : ''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`;
        break;
      default: systemPrompt = "You are a professional content enhancement assistant. Improve the given text to be more impactful and professional.",
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.",
        userPrompt = `Create a professional summary for someone with the following background: ${content || context}. Include key strengths and career objectives. Keep it under 200 words.`,
        break,
      case "work-description": systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.",
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`,
        break,
      case "job-post": systemPrompt = "You are an expert recruiter who creates compelling job descriptions that attract qualified candidates.",
        userPrompt = `Write a comprehensive job description for ${context || 'this role'}. ${content ? `Based on this information: ${content}.` : ''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`,
        break,
      case "proposal": systemPrompt = "You are an expert freelance proposal writer who knows how to win client projects with persuasive pitches.",
        userPrompt = `Write a persuasive proposal for a freelancer applying to this job: ${context || 'the described position'}. ${content ? `The freelancer has these qualifications: ${content}.` : ''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`,
        break,
      default: systemPrompt = "You are a professional content enhancement assistant. Improve the given text to be more impactful and professional.",
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`
;
    // Determine the system prompt based on enhancement type;
    let systemPrompt = "",;
    let userPrompt = "",;
    switch (enhancementType) {;
      case "resume-summary":;
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.",;
        userPrompt = `Create a professional summary for someone with the following background: ${content || context}. Include key strengths and career objectives. Keep it under 200 words.`,;
        break,;
      case "work-description": systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.",;
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`,;
        break,;
      case "job-post": systemPrompt = "You are an expert recruiter who creates compelling job descriptions that attract qualified candidates.",;
        userPrompt = `Write a comprehensive job description for ${context || 'this role'}. ${content ? `Based on this information: ${content}.` : ''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`,;
        break,;
      case "proposal": systemPrompt = "You are an expert freelance proposal writer who knows how to win client projects with persuasive pitches.",;
        userPrompt = `Write a persuasive proposal for a freelancer applying to this job: ${context || 'the described position'}. ${content ? `The freelancer has these qualifications: ${content}.` : ''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`,;
        break,;
      default: systemPrompt = "You are a professional content enhancement assistant. Improve the given text to be more impactful and professional.",;
        userPrompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;
<<<<<<< HEAD
<<<<<<< HEAD
=======

========
    // Determine the system prompt based on enhancement type
    let systemPrompt = "";
    let userPrompt = "";
    switch (enhancementType) {
      case "resume-summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.";
        userPrompt = `Create a professional summary for someone with the following background: ${content |context}. Include key strengths and career objectives. Keep it under 200 words.`;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
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
    const { content, enhancement_type, context, instructions } = await req.json ();
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
      throw new Error ("Either content or context is required");
    }
    // Determine the system prompt based on enhancement type;
    let system_prompt = "";
    let user_prompt = "";
;
    switch (enhancement_type) {
      case "resume - summary":;
        system_prompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.";
        user_prompt = `Create a professional summary for someone with the following background: ${content || context}. Include key strengths and career objectives. Keep it under 200 words.`;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
        break;
      case "work - description": system_prompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.";
        user_prompt = `Enhance this work description with 3 - 5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`;
        break;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts



    // Determine the system prompt based on enhancement type
    let systemPrompt = "",
    let userPrompt = "",

    switch (enhancementType) {
      case "resume-summary":

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    // Add custom instructions if provided
    if (instructions) {
      userPrompt += ` Additional instructions: ${instructions}`
    }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
<<<<<<< HEAD
<<<<<<< HEAD
=======




    // Call OpenAI API


        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"},

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      body: JSON.stringify({
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({
        model: "gpt-4o-mini";
        messages: [
          {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
<<<<<<< HEAD

=======


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        "Authorization": `Bearer ${openAiKey}`;
        "Content-Type": "application/json"}
        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({
        model: "gpt-4o-mini",
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            role: "system",
            content: systemPrompt},
          {
            role: "user",
            content: userPrompt}],
        temperature: 0.7})}),

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }
<<<<<<< HEAD

=======

        temperature: 0 && 0.7})});
=======



========
            role: "system"
            content: systemPrompt}
          {
            role: "user"
            content: userPrompt}];
        temperature: 0 && 0.7})});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
    if (!response && response.ok) {
      const errorData = await response && response.json();
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    const data = await response && response.json();
    const enhancedContent = data && data.choices[0].message && message.content;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
    return new Response(
      JSON && JSON.stringify({
        enhancedContent});
      case "job - post": system_prompt = "You are an expert recruiter who creates compelling job descriptions that attract qualified candidates.";
        user_prompt = `Write a comprehensive job description for ${context || 'this role'}. ${content ? `Based on this information: ${content}.` : ''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`;
        break;
      case "proposal": system_prompt = "You are an expert freelance proposal writer who knows how to win client projects with persuasive pitches.";
        user_prompt = `Write a persuasive proposal for a freelancer applying to this job: ${context || 'the described position'}. ${content ? `The freelancer has these qualifications: ${content}.` : ''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`;
        break;
      default: system_prompt = "You are a professional content enhancement assistant. Improve the given text to be more impactful and professional.",
        user_prompt = `Enhance this professional text to be more impactful: ${content}. ${context ? `Additional context: ${context}` : ''}`;
    }
    // Add custom instructions if provided;
    // Check condition
if ( {) {
  $2
}
      user_prompt += ` Additional instructions: ${instructions}`;
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
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );
  } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
    console.error ("Error in ai - content - enhancer function:", error);
    return new Response (
      JSON.stringify ({
        error: error.message});
      {
<<<<<<< HEAD
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

=======
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
    console.error("Error in ai-content-enhancer function:", error),
    return new Response(
      JSON.stringify({
        error: error.message}),
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  }
});

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
    console.error("Error in ai-content-enhancer function:", error),;
    return new Response(;
      JSON.stringify({;
        error: error.message}),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  }
});

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
;
    // Determine the system prompt based on enhancement type;
    let systemPrompt = "",;
    let userPrompt = "",;
;
    switch (enhancementType) {;
      case "resume-summary":;
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.",;
        userPrompt = `Create a professional summary for someone with the following background:${content || context}. Include key strengths and career objectives. Keep it under 200 words.`,;
        break,;
      case "work-description":systemPrompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.",;
        userPrompt = `Enhance this work description with 3-5 bullet points that highlight accomplishments and skills:${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context:${context}` :''}`,;
        break,;
      case "job-post":systemPrompt = "You are an expert recruiter who creates compelling job descriptions that attract qualified candidates.",;
        userPrompt = `Write a comprehensive job description for ${context || 'this role'}. ${content ? `Based on this information:${content}.` :''} Include responsibilities, required skills, and preferred qualifications. Be specific and professional.`,;
        break,;
      case "proposal":systemPrompt = "You are an expert freelance proposal writer who knows how to win client projects with persuasive pitches.",;
        userPrompt = `Write a persuasive proposal for a freelancer applying to this job:${context || 'the described position'}. ${content ? `The freelancer has these qualifications:${content}.` :''} Focus on matching skills to requirements, highlighting relevant experience, and conveying reliability.`,;
        break,;
      default:systemPrompt = "You are a professional content enhancement assistant. Improve the given text to be more impactful and professional.",;
        userPrompt = `Enhance this professional text to be more impactful:${content}. ${context ? `Additional context:${context}` :''}`,;
    }
;
    // Add custom instructions if provided;
    if (instructions) {;
      userPrompt += ` Additional instructions:${instructions}`,;
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
    console.error("Error in ai-content-enhancer function:", error),;
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
  
}//Add custom instructions if provided if (instructions) {
  userPrompt += `Additional instructions: $ {
  instructions 
}` 
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/ai-content-enhancer/index.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
