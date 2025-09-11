<<<<<<< HEAD
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server ;


import { serve } from "https: //deno.land/std@0.177.0/http/server.ts";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server ;

=======
import { serve } from 'https: //deno.land / std@0.177.0 / http / server.ts';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ServiceProfileData {
  name: string;
  title: string;
  bio: string;

<<<<<<< HEAD
<<<<<<< HEAD
  services?: string[]
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
import {serve} from "https: //deno.land/std@0.177.0/http/server.ts";
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ServiceProfileData {
  name: string,
  title: string,
  bio: string,
  services?: string[],
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  location: string
}
serve(async (req) => {
  try {
    // CORS headers

    const headers = {
<<<<<<< HEAD


<<<<<<< HEAD
      "Access-Control-Allow-Origin": "*";
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type";
      "Content-Type": "application/json"}
      "Access-Control-Allow-Origin": "*";
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type";
      "Content-Type": "application/json"}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      "Access-Control-Allow-Origin": "*";
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type";
      "Content-Type": "application/json"}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      "Content-Type": "application/json"},

<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Handle CORS preflight request
    if (req && req.method === "OPTIONS") {
      return new Response(null, { headers, status: 204 })
    }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    const reqData = await req && req.json();
    const providerData = reqData && reqData.providerData as ServiceProfileData;
    // Validate input
    if (!providerData || !providerData && providerData.bio) {
      return new Response(
        JSON && JSON.stringify({
  services?: string[],


    const reqData = await req.json(),
    const providerData = reqData.providerData as ServiceProfileData,
    

<<<<<<< HEAD
    // Handle CORS preflight request
    if (req.method === "OPTIONS") {
      return new Response(null, { headers, status: 204 })
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const reqData = await req.json();
    const providerData = reqData.providerData as ServiceProfileData;

    const reqData = await req.json(),
    const providerData = reqData.providerData as ServiceProfileData,
    
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Validate input
    if (!providerData |!providerData.bio) {
      return new Response(
        JSON.stringify({
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          error: "Missing required service provider data"});
        { headers, status: 400 }
      )
    }
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          error: "Missing required service provider data"}),
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",;
interface ServiceProfileData {;
  name: string,;
  title: string,;
  bio: string,;
  services?: string[],;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  location: string;
}
serve (async (req) => {
  try {
    // CORS headers;
    const headers = {
      "Access - Control - Allow - Origin": "*";
      "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type";
      "Content - Type": "application / json"}
;
    // Handle CORS preflight request;
    // Check condition
if ( {) {
  $2
}
      return new Response (null, { headers, status: 204 });
    }
    const req_data = await req.json ();
    const provider_data = req_data.provider_data as ServiceProfileData;
;
    // Validate input;
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          error: "Missing required service provider data"});
        { headers, status: 400 }
      );
    }
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Get OpenAI API key from environment
    const apiKey = Deno && Deno.env.get("OPENAI_API_KEY");
    if (!apiKey) {
      return new Response(
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    // Get OpenAI API key from environment;
    const api_key = Deno.env.get ("OPENAI_API_KEY");
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({
<<<<<<< HEAD
          error: "OpenAI API key not configured"});
        JSON.stringify({

  location: string;
}
;
serve(async (req) => {;
  try {;
    // CORS headers;
    const headers = {;
      "Access-Control-Allow-Origin": "*",;
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",;
      "Content-Type": "application/json"},;
    // Handle CORS preflight request;
    if (req.method === "OPTIONS") {;
      return new Response(null, { headers, status: 204 });
    }
;
    const reqData = await req.json(),;
    const providerData = reqData.providerData as ServiceProfileData,;
    // Validate input;
    if (!providerData || !providerData.bio) {;
      return new Response(;
        JSON.stringify({;
          error: "Missing required service provider data"}),;
        { headers, status: 400 }
      );
    }

    // Get OpenAI API key from environment
    const apiKey = Deno.env.get("OPENAI_API_KEY"),
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: "OpenAI API key not configured"});
=======

          error: "OpenAI API key not configured"});
=======
        JSON.stringify({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        JSON.stringify({
          error: "OpenAI API key not configured"});
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          error: "OpenAI API key not configured"}),
;
    // Get OpenAI API key from environment;
    const apiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!apiKey) {;
      return new Response(;
        JSON.stringify({;
          error: "OpenAI API key not configured"}),;
<<<<<<< HEAD
<<<<<<< HEAD
        { headers, status: 500 }
      )
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        { headers, status: 500 }
      );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    const prompt = `
    You are an expert in creating professional service profiles. Based on the following information about a service provider, create:
    1. A concise yet compelling professional summary (max 250 words)
    2. A list of 5-10 specific services they could offer based on their description
    Service Provider Name: ${providerData.name}
    Business/Service Title: ${providerData.title}
    Location: ${providerData.location}
    Current Bio: ${providerData.bio}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        { headers, status: 500 }
      );
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    ${providerData.services && providerData.services.length > 0 


      ? `Current Services: ${providerData.services.join(", ")}`
=======
    ${providerData.services && providerData.services.length > 0
    ${providerData.services && providerData.services.length > 0 
      ? `Current Services: ${providerData.services.join(", ")}`
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    Service Provider Name: ${providerData && providerData.name}
    Business/Service Title: ${providerData && providerData.title}
    Location: ${providerData && providerData.location}
    Current Bio: ${providerData && providerData.bio}
    ${providerData && providerData.services && providerData && providerData.services.length > 0 
      ? `Current Services: ${providerData && providerData.services.join(", ")}`
<<<<<<< HEAD
      : "No services listed yet."}
    Focus on highlighting their unique value proposition, expertise, and professionalism.


<<<<<<< HEAD
    ${providerData.services && providerData.services.length > 0
    ${providerData.services && providerData.services.length > 0 
      ? `Current Services: ${providerData.services.join(", ")}`
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      : "No services listed yet."}
    Focus on highlighting their unique value proposition, expertise, and professionalism.
    Only respond with JSON in this exact format: {
      "summary": "Professional summary goes here..."
      "services": ["Service 1", "Service 2", "Service 3", ...]
    }
    `;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    Only respond with JSON in this exact format:
    {
      "summary": "Professional summary goes here...",
      "services": ["Service 1", "Service 2", "Service 3", ...]
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    `,


    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"},


      body: JSON.stringify({

    `;
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`;
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({
        model: "gpt-4";
        messages: [
          {

            role: "system"
    const prompt = `;
    You are an expert in creating professional service profiles. Based on the following information about a service provider, create:;
    1. A concise yet compelling professional summary (max 250 words);
    2. A list of 5 - 10 specific services they could offer based on their description;
    Service Provider Name: ${provider_data.name}
    Business / Service Title: ${provider_data.title}
    Location: ${provider_data.location}
    Current Bio: ${provider_data.bio}
    ${provider_data.services && provider_data.services.length > 0;
      ? `Current Services: ${provider_data.services.join (", ")}`;
      : "No services listed yet."}
    Focus on highlighting their unique value proposition, expertise, and professionalism.;
    Only respond with JSON in this exact format: {
      "summary": "Professional summary goes here...",
      "services": ["Service 1", "Service 2", "Service 3", ...];
    }
    `;
;
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${api_key}`;
        "Content - Type": "application / json"}
      body: JSON.stringify ({
        model: "gpt - 4";
        messages: [;
          {
            role: "system",
    `,

<<<<<<< HEAD
=======
    `,

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
        Authorization: `Bearer ${apiKey}`;
        "Content-Type": "application/json"}
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({
<<<<<<< HEAD
        model: "gpt-4",
        messages: [
          {
            role: "system"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`;
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        model: "gpt-4";
        messages: [
          {
            role: "system"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            content: "You are an expert at creating professional service descriptions for marketplaces."}
          {
            role: "user"
            content: prompt}];
<<<<<<< HEAD
<<<<<<< HEAD
        temperature: 0.7
        max_tokens: 800})});
    const responseData = await response.json();
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        temperature: 0.7
        max_tokens: 800})});
    const responseData = await response.json();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            role: "system",
            content: "You are an expert at creating professional service descriptions for marketplaces."},
          {
            role: "user",
            content: prompt}],
        temperature: 0.7,
        max_tokens: 800})}),

    const responseData = await response.json(),
    
<<<<<<< HEAD
<<<<<<< HEAD
    if (!response.ok) {
      console.error("OpenAI API error:", responseData),
      return new Response(
        JSON.stringify({
          error: "Failed to generate enhanced profile content"
          error: "Failed to generate enhanced profile content",
          details: responseData});
        { headers, status: 500 }
      )
    }
    try {
      const content = responseData.choices[0].message.content;
      const parsedContent = JSON.parse(content);
      return new Response(
        JSON.stringify({
          summary: parsedContent.summary
          services: parsedContent.services});
          error: "Failed to generate enhanced profile content",
          details: responseData}),
    ${providerData.services && providerData.services.length > 0;
      ? `Current Services: ${providerData.services.join(", ")}`;
      : "No services listed yet."}
        temperature: 0 && 0.7,
        max_tokens: 800})});
    const responseData = await response && response.json();
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!response.ok) {
      console.error("OpenAI API error:", responseData);
      return new Response(
        JSON.stringify({

        temperature: 0 && 0.7,
        max_tokens: 800})});

    const responseData = await response && response.json();
    
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!response && response.ok) {
      console && console.error("OpenAI API error:", responseData);
      return new Response(
        JSON && JSON.stringify({
          error: "Failed to generate enhanced profile content",
<<<<<<< HEAD
<<<<<<< HEAD
          details: responseData});
=======

          details: responseData});
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          details: responseData});
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    const response_data = await response.json ();
;
    // Check condition
if ( {) {
  $2
}
      console.error ("OpenAI API error:", response_data);
      return new Response (
        JSON.stringify ({
          error: "Failed to generate enhanced profile content",
          details: response_data});
<<<<<<< HEAD
<<<<<<< HEAD
        { headers, status: 500 }
      );
    }
;
    Focus on highlighting their unique value proposition, expertise, and professionalism.;
    Only respond with JSON in this exact format:;
    {;
      "summary": "Professional summary goes here...",;
      "services": ["Service 1", "Service 2", "Service 3", ...];
    }
    `,;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method: "POST",;
      headers: {;
        Authorization: `Bearer ${apiKey}`,;
        "Content-Type": "application/json"},;
      body: JSON.stringify({;
        model: "gpt-4",;
        messages: [;
          {;
            role: "system",;
            content: "You are an expert at creating professional service descriptions for marketplaces."},;
          {;
            role: "user",;
            content: prompt}],;
        temperature: 0.7,;
        max_tokens: 800})}),;
    const responseData = await response.json(),;
    if (!response.ok) {;
      console.error("OpenAI API error:", responseData),;
      return new Response(;
        JSON.stringify({;
          error: "Failed to generate enhanced profile content",;
          details: responseData}),;
        { headers, status: 500 }
      );
    }
;
    try {;
      const content = responseData.choices[0].message.content,;
      const parsedContent = JSON.parse(content),;
      return new Response(;
        JSON.stringify({;
          summary: parsedContent.summary,;
          services: parsedContent.services}),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        { headers, status: 500 }
      );
    }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {

      const content = responseData && responseData.choices[0].message && message.content;
      const parsedContent = JSON && JSON.parse(content);
      
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          error: "Failed to generate enhanced profile content",

        { headers, status: 200 }
      )
    } catch (error) {
      console.error("Error parsing AI response:", error),
<<<<<<< HEAD
<<<<<<< HEAD
    try {
      const content = responseData && responseData.choices[0].message && message.content;
      const parsedContent = JSON && JSON.parse(content);
      return new Response(
      return new Response(
        JSON.stringify({
          error: "Failed to parse AI response"
          raw: responseData.choices[0]?.message?.content});
          error: "Failed to parse AI response",
          error: "Failed to parse AI response",
          raw: responseData.choices[0]?.message?.content});
          raw: responseData.choices[0]?.message?.content}),
      );
    } catch (error) {;
      console.error("Error parsing AI response:", error),;
      return new Response(;
        JSON.stringify({;
          error: "Failed to parse AI response",;
          raw: responseData.choices[0]?.message?.content}),;
=======

      return new Response(
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        JSON && JSON.stringify({
          summary: parsedContent && parsedContent.summary,
          services: parsedContent && parsedContent.services});
=======

      return new Response(
        JSON && JSON.stringify({
          summary: parsedContent && parsedContent.summary,
          services: parsedContent && parsedContent.services});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const content = response_data.choices[0].message.content;
      const parsed_content = JSON.parse (content);
;
      return new Response (
        JSON.stringify ({
          summary: parsed_content.summary,
          services: parsed_content.services});
<<<<<<< HEAD
        { headers, status: 200 }
      );
    } catch (error) {
        JSON && JSON.stringify({
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        { headers, status: 200 }
      );
    } catch (error) {

        JSON && JSON.stringify({
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          error: "Failed to parse AI response",
          raw: responseData && responseData.choices[0]?.message?.content});
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      console.error ("Error parsing AI response:", error);
      return new Response (
        JSON.stringify ({
          error: "Failed to parse AI response",
<<<<<<< HEAD
          raw: response_data.choices[0]?.message?.content});
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { headers, status: 500 }
      );
    }
  } catch (error) {
<<<<<<< HEAD

    console.error ("Function error:", error);
    return new Response (
      JSON.stringify ({
        error: "Internal server error"});
      {
        headers: {
          "Content - Type": "application / json",
          "Access - Control - Allow - Origin": "*"},
        status: 500;
    console.error("Function error:", error),
    return new Response(
      JSON.stringify({

<<<<<<< HEAD
        { headers, status: 500 }
      )
    }
  } catch (error) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    console.error("Function error:", error),
    return new Response(
      JSON.stringify({
        error: "Internal server error"});
      {
        headers: {
          "Content-Type": "application/json"
          "Access-Control-Allow-Origin": "*"}
        status: 500
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        error: "Internal server error"}),
      { 
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"}, 
        status: 500 
<<<<<<< HEAD
<<<<<<< HEAD
  } catch (error) {;
    console.error("Function error:", error),;
    return new Response(;
      JSON.stringify({;
        error: "Internal server error"}),;
      {;
        headers: {;
          "Content-Type": "application/json",;
          "Access-Control-Allow-Origin": "*"},;
        status: 500;
        error: "Internal server error"}),
      { 
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"}, 
        status: 500 

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    );
  }
});

<<<<<<< HEAD

;


<<<<<<< HEAD
;

import { serve } from "https://deno.land/std@0.177.0/http/server.ts",;
;
interface ServiceProfileData {;
  name:string,;
  title:string,;
  bio:string,;
  services?:string[],;
  location:string;
}
;
serve(async (req) => {;
  try {;
    // CORS headers;
    const headers = {;
      "Access-Control-Allow-Origin":"*",;
      "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type",;
      "Content-Type":"application/json"},;
;
    // Handle CORS preflight request;
    if (req.method === "OPTIONS") {;
      return new Response(null, { headers, status:204 }),;
    }
;
    const reqData = await req.json(),;
    const providerData = reqData.providerData as ServiceProfileData,;
    ;
    // Validate input;
    if (!providerData || !providerData.bio) {;
      return new Response(;
        JSON.stringify({;
          error:"Missing required service provider data"}),;
        { headers, status:400 }
      ),;
    }
;
    // Get OpenAI API key from environment;
    const apiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!apiKey) {;
      return new Response(;
        JSON.stringify({;
          error:"OpenAI API key not configured"}),;
        { headers, status:500 }
      ),;
    }
;
    const prompt = `;
    You are an expert in creating professional service profiles. Based on the following information about a service provider, create:;
    1. A concise yet compelling professional summary (max 250 words);
    2. A list of 5-10 specific services they could offer based on their description;
;
    Service Provider Name:${providerData.name}
    Business/Service Title:${providerData.title}
    Location:${providerData.location}
    Current Bio:${providerData.bio}
    ${providerData.services && providerData.services.length > 0 ;
      ? `Current Services:${providerData.services.join(", ")}`;
      :"No services listed yet."}
    ;
    Focus on highlighting their unique value proposition, expertise, and professionalism.;
    Only respond with JSON in this exact format:;
    {;
      "summary":"Professional summary goes here...",;
      "services":["Service 1", "Service 2", "Service 3", ...];
    }
    `,;
;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method:"POST",;
      headers:{;
        Authorization:`Bearer ${apiKey}`,;
        "Content-Type":"application/json"},;
      body:JSON.stringify({;
        model:"gpt-4",;
        messages:[;
          {;
            role:"system",;
            content:"You are an expert at creating professional service descriptions for marketplaces."},;
          {;
            role:"user",;
            content:prompt}],;
        temperature:0.7,;
        max_tokens:800})}),;
;
    const responseData = await response.json(),;
    ;
    if (!response.ok) {;
      console.error("OpenAI API error:", responseData),;
      return new Response(;
        JSON.stringify({;
          error:"Failed to generate enhanced profile content",;
          details:responseData}),;
        { headers, status:500 }
      ),;
    }
;
    try {;
      const content = responseData.choices[0].message.content,;
      const parsedContent = JSON.parse(content),;
      ;
      return new Response(;
        JSON.stringify({;
          summary:parsedContent.summary,;
          services:parsedContent.services}),;
        { headers, status:200 }
      ),;
    } catch (error) {;
      console.error("Error parsing AI response:", error),;
      return new Response(;
        JSON.stringify({;
          error:"Failed to parse AI response",;
          raw:responseData.choices[0]?.message?.content}),;
        { headers, status:500 }
      ),;
    }
  } catch (error) {;
    console.error("Function error:", error),;
    return new Response(;
      JSON.stringify({;
        error:"Internal server error"}),;
      { ;
        headers:{;
          "Content-Type":"application/json",;
          "Access-Control-Allow-Origin":"*"}, ;
        status:500 ;
      }
    ),;  }
}),;
 interface ServiceProfileData {
  name: string;
title: string;
bio: string;
services?: string[];
location: string 
}try {
  //CORS headers 
}const reqData = await req.json ();
const providerData = reqData.providerData as ServiceProfileData;
return new Response (JSON.stringify ({
  if (!apiKey) {
  return new Response (JSON.stringify ({
  error: "OpenAI API key not configured" 
});
{
  headers, status: 500 
}) 
}const prompt = ` You are an expert in creating professional service profiles. Based on the following information about a service provider, create: 1. A concise yet compelling professional summary (max 250 words) 2. A list of 5-10 specific services they could offer based on their description temperature: 0.7;
max tokens: 800 
}) 
});
return new Response (JSON.stringify ({
  error: "Failed to generate enhanced profile content";
details: responseData 
});
{
  headers, status: 500 
}) 
}try {
  const content = responseData.choices[0].message.content;
const parsedContent = JSON.parse (content);
return new Response (JSON.stringify ({
  summary: parsedContent.summary;
services: parsedContent.services 
});
{
  headers, status: 200 
}) 
}catch (error) {
  return new Response (JSON.stringify ({
  error: "Failed to parse AI response";
raw: responseData.choices[0]?.message?.content 
});
{
  headers, status: 500 
}) 
}
}catch (error) {
  return new Response (JSON.stringify ({
  error: "Internal server error" 
});
{
  headers: {
  "Content-Type" : "application/json";
"Access-Control-Allow-Origin" : "*" 
};
}) 
}
});
      }
    )
  }
});

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
