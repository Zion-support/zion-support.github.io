
<<<<<<< HEAD
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
    ),;
=======
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",interface ServiceProfileData {
  name: string,
  title: string,
  bio: string,
  services?: string[],
  location: string
}

interface ServiceProfileData {_name: string;
  title: string;
  bio: string;
  services?: string[];
  location: string;}

serve(_async (req) => {_try {
    // CORS headers
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      "Content-Type": "application/json"},

    // Handle CORS preflight request
    if (req.method === "OPTIONS") {
      return new Response(null, { headers, status: 204 })    }

    const reqData = await req.json(),
    const providerData = reqData.providerData as ServiceProfileData,
    const _headers = {
      "Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type", _"Content-Type": "application/json"};

    // Handle CORS preflight request
    if (req.method === "OPTIONS") {_return new Response(null, _{ headers, _status: 204});
    }

    const _reqData = await req.json();
    const _providerData = reqData.providerData as ServiceProfileData;
    
    // Validate input
    if (!providerData || !providerData.bio) {_return new Response(
        JSON.stringify({
          error: &quot;Missing required service provider data&quot;}),
        { headers, status: 400 }
      )
    }

    // Get OpenAI API key from environment
    const apiKey = Deno.env.get("OPENAI_API_KEY"),    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: &quot;OpenAI API key not configured&quot;}),
        { headers, status: 500 }
      )
          error: "Missing required service provider data"}),
        {_headers, _status: 400}
      );
    }

    // Get OpenAI API key from environment
    const _apiKey = Deno.env.get("OPENAI_API_KEY");
    if (!apiKey) {_return new Response(
        JSON.stringify({
          error: "OpenAI API key not configured"}),
        {_headers, _status: 500}
      );
    }

    const _prompt = `
    You are an expert in creating professional service profiles. Based on the following information about a service provider, create:
    1. A concise yet compelling professional summary (max 250 words)
    2. A list of 5-10 specific services they could offer based on their description

    Service Provider Name: ${providerData.name}
    Business/Service Title: ${providerData.title}
    Location: ${providerData.location}
    Current Bio: ${providerData.bio}
    ${providerData.services && providerData.services.length > 0 
      ? `Current Services: ${providerData.services.join(&quot;, &quot;)}`
      : &quot;No services listed yet.&quot;}
    
    Focus on highlighting their unique value proposition, expertise, and professionalism.
    Only respond with JSON in this exact format:
    {
      &quot;summary&quot;: &quot;Professional summary goes here...&quot;,
      &quot;services&quot;: [&quot;Service 1&quot;, &quot;Service 2&quot;, &quot;Service 3&quot;, ...]
    }
    `,

    const response = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
      method: &quot;POST&quot;,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        &quot;Content-Type&quot;: &quot;application/json&quot;},
      body: JSON.stringify({
        model: &quot;gpt-4&quot;,
        messages: [
          {
            role: &quot;system&quot;,
            content: &quot;You are an expert at creating professional service descriptions for marketplaces.&quot;},
          {
            role: &quot;user&quot;,
            content: prompt}],        temperature: 0.7,
        max_tokens: 800})}),

    const responseData = await response.json(),
    
    if (!response.ok) {
      console.error("OpenAI API error:", responseData),      return new Response(
        JSON.stringify({
          error: &quot;Failed to generate enhanced profile content&quot;,
          details: responseData}),
        { headers, status: 500 }
      )
    }

    try {
      const content = responseData.choices[0].message.content,
      const parsedContent = JSON.parse(content),
      
      return new Response(
        JSON.stringify({
          summary: parsedContent.summary,
          services: parsedContent.services}),
        { headers, status: 200 }
      )
    } catch (error) {
      console.error("Error parsing AI response:", error),      return new Response(
        JSON.stringify({
          error: &quot;Failed to parse AI response&quot;,
          raw: responseData.choices[0]?.message?.content}),
        { headers, status: 500 }
      )
    }
  } catch (error) {
    console.error("Function error:", error),    return new Response(
      JSON.stringify({
        error: &quot;Internal server error&quot;}),
      { 
        headers: {
          &quot;Content-Type&quot;: &quot;application/json&quot;,
          &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;}, 
    const _responseData = await response.json();
    
    if (!response.ok) {_return new Response(
        JSON.stringify({
          error: "Failed to generate enhanced profile content", _details: responseData}),
        {_headers, _status: 500}
      );
    }

    try {_const _content = responseData.choices[0].message.content;
      const _parsedContent = JSON.parse(content);
      
      return new Response(
        JSON.stringify({
          summary: parsedContent.summary, _services: parsedContent.services}),
        {_headers, _status: 200}
      );
    } catch (error) {_return new Response(
        JSON.stringify({
          error: "Failed to parse AI response", _raw: responseData.choices[0]?.message?.content}),
        {_headers, _status: 500}
      );
    }
  } catch (error) {_return new Response(
      JSON.stringify({
        error: "Internal server error"}),
      {_headers: {
          "Content-Type": "application/json", _"Access-Control-Allow-Origin": "*"}, 
        status: 500 
      }
    )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
}),;
