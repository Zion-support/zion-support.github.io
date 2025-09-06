<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts

<<<<<<< HEAD

=======
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server ;

=======
========
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.177.0/http/server ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
import { serve } from 'https: //deno.land / std@0.177.0 / http / server.ts';
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ServiceProfileData {
  name: string;
  title: string;
  bio: string;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts


=======

  services?: string[]

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
=======
import {serve} from "https: //deno.land/std@0.177.0/http/server.ts";
=======
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  location: string
}
serve(async (req) => {
  try {
    // CORS headers

    const headers = {
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======
      "Access-Control-Allow-Origin": "*";
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type";
      "Content-Type": "application/json"}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      "Content-Type": "application/json"},

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // Handle CORS preflight request
    if (req && req.method === "OPTIONS") {
      return new Response(null, { headers, status: 204 })
    }
<<<<<<< HEAD

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
    const reqData = await req && req.json();
    const providerData = reqData && reqData.providerData as ServiceProfileData;
    // Validate input
    if (!providerData || !providerData && providerData.bio) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
      return new Response(
        JSON && JSON.stringify({
  services?: string[],
=======


    const reqData = await req.json(),
    const providerData = reqData.providerData as ServiceProfileData,
    

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Handle CORS preflight request
    if (req.method === "OPTIONS") {
      return new Response(null, { headers, status: 204 })
    }
<<<<<<< HEAD
    const reqData = await req.json();
    const providerData = reqData.providerData as ServiceProfileData;
=======

    const reqData = await req.json(),
    const providerData = reqData.providerData as ServiceProfileData,
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Validate input
    if (!providerData |!providerData.bio) {
      return new Response(
        JSON.stringify({
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
          error: "Missing required service provider data"});
        { headers, status: 400 }
      )
    }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          error: "Missing required service provider data"}),
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",;
interface ServiceProfileData {;
  name: string,;
  title: string,;
  bio: string,;
  services?: string[],;
<<<<<<< HEAD
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
          error: "Missing required service provider data"});
        { headers, status: 400 }
      );
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // Get OpenAI API key from environment
    const apiKey = Deno && Deno.env.get("OPENAI_API_KEY");
    if (!apiKey) {
      return new Response(
<<<<<<< HEAD
        JSON.stringify({

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
    // Get OpenAI API key from environment;
    const api_key = Deno.env.get ("OPENAI_API_KEY");
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
          error: "OpenAI API key not configured"});
=======
        JSON.stringify({

=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Get OpenAI API key from environment
    const apiKey = Deno.env.get("OPENAI_API_KEY"),
    if (!apiKey) {
      return new Response(
        JSON.stringify({
<<<<<<< HEAD
          error: "OpenAI API key not configured"});
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          error: "OpenAI API key not configured"}),
;
    // Get OpenAI API key from environment;
    const apiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!apiKey) {;
      return new Response(;
        JSON.stringify({;
          error: "OpenAI API key not configured"}),;
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        { headers, status: 500 }
      );
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        { headers, status: 500 }
      )
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


    ${providerData.services && providerData.services.length > 0 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      ? `Current Services: ${providerData.services.join(", ")}`
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
    Service Provider Name: ${providerData && providerData.name}
    Business/Service Title: ${providerData && providerData.title}
    Location: ${providerData && providerData.location}
    Current Bio: ${providerData && providerData.bio}
    ${providerData && providerData.services && providerData && providerData.services.length > 0 
      ? `Current Services: ${providerData && providerData.services.join(", ")}`
      : "No services listed yet."}
    Focus on highlighting their unique value proposition, expertise, and professionalism.
<<<<<<< HEAD

=======


=======
<<<<<<< HEAD
    ${providerData.services && providerData.services.length > 0
=======
    ${providerData.services && providerData.services.length > 0 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      ? `Current Services: ${providerData.services.join(", ")}`
      : "No services listed yet."}
    Focus on highlighting their unique value proposition, expertise, and professionalism.
<<<<<<< HEAD
    Only respond with JSON in this exact format: {
      "summary": "Professional summary goes here..."
      "services": ["Service 1", "Service 2", "Service 3", ...]
    }
    `;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    Only respond with JSON in this exact format:
    {
      "summary": "Professional summary goes here...",
      "services": ["Service 1", "Service 2", "Service 3", ...]
    }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
    `,


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

<<<<<<< HEAD
=======
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"},


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      body: JSON.stringify({
=======

========
    `;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`;
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({
        model: "gpt-4";
        messages: [
          {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
<<<<<<< HEAD

=======

========
            role: "system"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
=======
    `,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
<<<<<<< HEAD
        Authorization: `Bearer ${apiKey}`;
        "Content-Type": "application/json"}
=======
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
<<<<<<< HEAD
            role: "system"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            content: "You are an expert at creating professional service descriptions for marketplaces."}
          {
            role: "user"
            content: prompt}];
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts


=======
        temperature: 0.7
        max_tokens: 800})});
    const responseData = await response.json();
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            role: "system",
            content: "You are an expert at creating professional service descriptions for marketplaces."},
          {
            role: "user",
            content: prompt}],
        temperature: 0.7,
        max_tokens: 800})}),

    const responseData = await response.json(),
    
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (!response.ok) {
      console.error("OpenAI API error:", responseData);
      return new Response(
        JSON.stringify({

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (!response.ok) {
      console.error("OpenAI API error:", responseData),
      return new Response(
        JSON.stringify({
<<<<<<< HEAD
<<<<<<< HEAD
          error: "Failed to generate enhanced profile content"
=======
          error: "Failed to generate enhanced profile content",
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
          error: "Failed to generate enhanced profile content",
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          details: responseData}),
    ${providerData.services && providerData.services.length > 0;
      ? `Current Services: ${providerData.services.join(", ")}`;
      : "No services listed yet."}
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
        temperature: 0 && 0.7,
        max_tokens: 800})});
    const responseData = await response && response.json();
    if (!response && response.ok) {
      console && console.error("OpenAI API error:", responseData);
      return new Response(
        JSON && JSON.stringify({
          error: "Failed to generate enhanced profile content",
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts

          details: responseData});
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
          details: responseData});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
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
        { headers, status: 500 }
      );
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
    try {;
      const content = responseData.choices[0].message.content,;
      const parsedContent = JSON.parse(content),;
      return new Response(;
        JSON.stringify({;
          summary: parsedContent.summary,;
          services: parsedContent.services}),;
<<<<<<< HEAD
=======
    try {

      const content = responseData && responseData.choices[0].message && message.content;
      const parsedContent = JSON && JSON.parse(content);
      
=======

          error: "Failed to generate enhanced profile content",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        { headers, status: 200 }
      )
    } catch (error) {
      console.error("Error parsing AI response:", error),
<<<<<<< HEAD

========
    try {
      const content = responseData && responseData.choices[0].message && message.content;
      const parsedContent = JSON && JSON.parse(content);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
      return new Response(
<<<<<<< HEAD
        JSON.stringify({

=======
      return new Response(
        JSON.stringify({
<<<<<<< HEAD
<<<<<<< HEAD
          error: "Failed to parse AI response"
          raw: responseData.choices[0]?.message?.content});
=======
          error: "Failed to parse AI response",
=======
          error: "Failed to parse AI response",
<<<<<<< HEAD
          raw: responseData.choices[0]?.message?.content});
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          raw: responseData.choices[0]?.message?.content}),
      );
    } catch (error) {;
      console.error("Error parsing AI response:", error),;
      return new Response(;
        JSON.stringify({;
          error: "Failed to parse AI response",;
          raw: responseData.choices[0]?.message?.content}),;
<<<<<<< HEAD
=======
        JSON && JSON.stringify({
          summary: parsedContent && parsedContent.summary,
          services: parsedContent && parsedContent.services});
      const content = response_data.choices[0].message.content;
      const parsed_content = JSON.parse (content);
;
      return new Response (
        JSON.stringify ({
          summary: parsed_content.summary,
          services: parsed_content.services});
        { headers, status: 200 }
      );
    } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
        JSON && JSON.stringify({
=======


          error: "Failed to parse AI response",
          raw: responseData && responseData.choices[0]?.message?.content});
      console.error ("Error parsing AI response:", error);
      return new Response (
        JSON.stringify ({
          error: "Failed to parse AI response",
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
          raw: response_data.choices[0]?.message?.content});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
        { headers, status: 500 }
      );
    }
  } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
    console.error ("Function error:", error);
    return new Response (
      JSON.stringify ({
        error: "Internal server error"});
      {
        headers: {
          "Content - Type": "application / json",
          "Access - Control - Allow - Origin": "*"},
        status: 500;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    console.error("Function error:", error),
    return new Response(
      JSON.stringify({

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        { headers, status: 500 }
      )
    }
  } catch (error) {
    console.error("Function error:", error),
    return new Response(
      JSON.stringify({
<<<<<<< HEAD
        error: "Internal server error"});
      {
        headers: {
          "Content-Type": "application/json"
          "Access-Control-Allow-Origin": "*"}
        status: 500
=======
        error: "Internal server error"}),
      { 
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"}, 
        status: 500 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
        error: "Internal server error"}),
      { 
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"}, 
        status: 500 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
      }
    );
  }
});
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
<<<<<<< HEAD

=======


;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/service-profile-enhancer/index.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    )
  }
});
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
