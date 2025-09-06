
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts";
interface ServiceProfileData {
  name: string,
  title: string,
  bio: string,
  services?: string[],
  location: string}

serve(async (req) => {
  try {
    // CORS headers
    const headers = $2;
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      "Content-Type": "application/json"},

    // Handle CORS preflight request
    if (req.method === "OPTIONS") {
      return new Response(null, { headers, status: 204})
    }

    const reqData = await req.json($2);
    const providerData = $2;
    // Validate input
    if (!providerData || !providerData.bio) {
      return new Response($2);
        { headers, status: 400}
      )
    }

    // Get OpenAI API key from environment
    const apiKey = Deno.env.get($2);
    if (!apiKey) {
      return new Response($2);
        { headers, status: 500}
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
      method: "POST",
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

    const responseData = await response.json($2);
    if (!response.ok) {
      console.error($2);
      return new Response($2);
        { headers, status: 500}
      )
    }

    try {
      const content = $2;
      const parsedContent = JSON.parse($2);
      return new Response($2);
        { headers, status: 200}
      )
    } catch (error) {
      console.error($2);
      return new Response($2);
        { headers, status: 500}
      )
    }
  } catch (error) {
    console.error($2);
    return new Response($2);
      { 
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"}, 
        status: 500}
    )
  }
}),
