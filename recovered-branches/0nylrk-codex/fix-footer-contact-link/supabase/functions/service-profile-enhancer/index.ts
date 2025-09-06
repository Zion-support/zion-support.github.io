

import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
=======
import {serve} from "https: //deno.land/std@0.177.0/http/server.ts";
=======
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ServiceProfileData {
  name: string,
  title: string,
  bio: string,
  services?: string[],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  location: string
}
serve(async (req) => {
  try {
    // CORS headers

    const headers = {

      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      "Content-Type": "application/json"},


    // Handle CORS preflight request
    if (req.method === "OPTIONS") {
      return new Response(null, { headers, status: 204 })
    }


    const reqData = await req.json(),
    const providerData = reqData.providerData as ServiceProfileData,
    

    // Validate input
    if (!providerData |!providerData.bio) {
      return new Response(
        JSON.stringify({

          error: "Missing required service provider data"}),
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",;
interface ServiceProfileData {;
  name: string,;
  title: string,;
  bio: string,;
  services?: string[],;
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


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Get OpenAI API key from environment
    const apiKey = Deno.env.get("OPENAI_API_KEY"),
    if (!apiKey) {
      return new Response(
        JSON.stringify({

          error: "OpenAI API key not configured"}),
;
    // Get OpenAI API key from environment;
    const apiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!apiKey) {;
      return new Response(;
        JSON.stringify({;
          error: "OpenAI API key not configured"}),;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        { headers, status: 500 }
      )
    }
    const prompt = `
    You are an expert in creating professional service profiles. Based on the following information about a service provider, create:
    1. A concise yet compelling professional summary (max 250 words)
    2. A list of 5-10 specific services they could offer based on their description
    Service Provider Name: ${providerData.name}
    Business/Service Title: ${providerData.title}
    Location: ${providerData.location}
    Current Bio: ${providerData.bio}

    ${providerData.services && providerData.services.length > 0 

      ? `Current Services: ${providerData.services.join(", ")}`
      : "No services listed yet."}
    Focus on highlighting their unique value proposition, expertise, and professionalism.

    Only respond with JSON in this exact format:
    {
      "summary": "Professional summary goes here...",
      "services": ["Service 1", "Service 2", "Service 3", ...]
    }
    `,


    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"},

      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {

            role: "system",
            content: "You are an expert at creating professional service descriptions for marketplaces."},
          {
            role: "user",
            content: prompt}],
        temperature: 0.7,
        max_tokens: 800})}),

    const responseData = await response.json(),
    

    if (!response.ok) {
      console.error("OpenAI API error:", responseData),
      return new Response(
        JSON.stringify({

          error: "Failed to generate enhanced profile content",

        { headers, status: 200 }
      )
    } catch (error) {
      console.error("Error parsing AI response:", error),
      return new Response(
        JSON.stringify({

          error: "Failed to parse AI response",
=======
          error: "Failed to parse AI response",

        { headers, status: 500 }
      )
    }
  } catch (error) {
    console.error("Function error:", error),
    return new Response(
      JSON.stringify({

        error: "Internal server error"}),
      { 
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"}, 
        status: 500 

      }
    )
  }
});


