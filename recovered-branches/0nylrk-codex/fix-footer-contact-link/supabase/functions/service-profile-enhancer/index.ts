
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.177.0/http/server.ts",
=======
import { serve } from &quot;https://deno.land/std@0.177.0/http/server.ts&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ServiceProfileData {
  name: string,
  title: string,
  bio: string,
  services?: string[],
  location: string
}
=======

interface ServiceProfileData {_name: string;
  title: string;
  bio: string;
  services?: string[];
  location: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

serve(_async (req) => {_try {
    // CORS headers
<<<<<<< HEAD
    const headers = {
<<<<<<< HEAD
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      "Content-Type": "application/json"},

    // Handle CORS preflight request
    if (req.method === "OPTIONS") {
      return new Response(null, { headers, status: 204 })
=======
      &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
      &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;,
      &quot;Content-Type&quot;: &quot;application/json&quot;};

    // Handle CORS preflight request
    if (req.method === &quot;OPTIONS&quot;) {
      return new Response(null, { headers, status: 204 });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    const reqData = await req.json(),
    const providerData = reqData.providerData as ServiceProfileData,
=======
    const _headers = {
      "Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type", _"Content-Type": "application/json"};

    // Handle CORS preflight request
    if (req.method === "OPTIONS") {_return new Response(null, _{ headers, _status: 204});
    }

    const _reqData = await req.json();
    const _providerData = reqData.providerData as ServiceProfileData;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Validate input
    if (!providerData || !providerData.bio) {_return new Response(
        JSON.stringify({
<<<<<<< HEAD
          error: &quot;Missing required service provider data&quot;}),
        { headers, status: 400 }
      )
    }

    // Get OpenAI API key from environment
<<<<<<< HEAD
    const apiKey = Deno.env.get("OPENAI_API_KEY"),
=======
    const apiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: &quot;OpenAI API key not configured&quot;}),
        { headers, status: 500 }
      )
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    const _prompt = `
    You are an expert in creating professional service profiles. Based on the following information about a service provider, create:
    1. A concise yet compelling professional summary (max 250 words)
    2. A list of 5-10 specific services they could offer based on their description

<<<<<<< HEAD
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
            content: prompt}],
=======
    Service Provider Name: ${_providerData.name}
    Business/Service Title: ${_providerData.title}
    Location: ${_providerData.location}
    Current Bio: ${_providerData.bio}
    ${_providerData.services && providerData.services.length > 0 
      ? `Current Services: ${providerData.services.join(", _")}`
      : "No services listed yet."}
    
    Focus on highlighting their unique value proposition, expertise, and professionalism.
    Only respond with JSON in this exact format:
    {_"summary": "Professional summary goes here...", _"services": ["Service 1", _"Service 2", _"Service 3", _...]}
    `;

    const _response = await fetch("https://api.openai.com/v1/chat/completions", {_method: "POST", _headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({_model: "gpt-4", _messages: [
          {
            role: "system", _content: "You are an expert at creating professional service descriptions for marketplaces."},
          {_role: "user", _content: prompt}],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        temperature: 0.7,
        max_tokens: 800})}),

<<<<<<< HEAD
    const responseData = await response.json(),
    
    if (!response.ok) {
<<<<<<< HEAD
      console.error("OpenAI API error:", responseData),
=======
      console.error(&quot;OpenAI API error:&quot;, responseData);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      return new Response(
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
<<<<<<< HEAD
      console.error("Error parsing AI response:", error),
=======
      console.error(&quot;Error parsing AI response:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      return new Response(
        JSON.stringify({
          error: &quot;Failed to parse AI response&quot;,
          raw: responseData.choices[0]?.message?.content}),
        { headers, status: 500 }
      )
    }
  } catch (error) {
<<<<<<< HEAD
    console.error("Function error:", error),
=======
    console.error(&quot;Function error:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    return new Response(
      JSON.stringify({
        error: &quot;Internal server error&quot;}),
      { 
        headers: {
          &quot;Content-Type&quot;: &quot;application/json&quot;,
          &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;}, 
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        status: 500 
      }
    )
  }
}),
