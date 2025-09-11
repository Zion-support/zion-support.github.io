>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm ;

import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
==============

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }




  try {

    const { content, enhancementType, context, instructions } = await req && req.json();
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
=======import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight requests
  try {
    const { content, enhancementType, context, instructions } = await req.json();
    const openAiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")
=======
==============
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }





  try {

    const { content, enhancementType, context, instructions } = await req && req.json();
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY");


    if (!openAiKey) {
      throw new Error("OPENAI_API_KEY is not defined")
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  try {;
    const { content, enhancementType, context, instructions } = await req.json(),;
    const openAiKey = Deno.env.get("OPENAI_API_KEY"),;
;
    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined"),;
    }
;
    if (!content && !context) {;
      throw new Error("Either content or context is required"),;
    }
    if (!openAiKey) {;
      throw new Error("OPENAI_API_KEY is not defined");
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

    // Determine the system prompt based on enhancement type
    let systemPrompt = "";
    let userPrompt = "";
    switch (enhancementType) {
      case "resume-summary":
        systemPrompt = "You are an expert resume writer who helps professionals create compelling personal summaries. Create a concise, professional summary that highlights strengths and career goals.";
        userPrompt = `Create a professional summary for someone with the following background: ${content |context}. Include key strengths and career objectives. Keep it under 200 words.`;
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
        break;
      case "work - description": system_prompt = "You are an expert resume writer specializing in professional work descriptions. Create impactful bullet points that showcase skills and achievements.";
        user_prompt = `Enhance this work description with 3 - 5 bullet points that highlight accomplishments and skills: ${content}. Use action verbs, include metrics where possible, and focus on achievements rather than duties. ${context ? `Role context: ${context}` : ''}`;
        break;

=======
    // Determine the system prompt based on enhancement type
    let systemPrompt = "",
    let userPrompt = "",

    switch (enhancementType) {
      case "resume-summary":


  }
});