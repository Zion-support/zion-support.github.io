
<<<<<<< HEAD
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
=======
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import { Configuration, OpenAIApi } from &quot;npm:openai@4.28.0&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  try {
    const { query } = await req.json(),
    if (!query) {
      return new Response(
<<<<<<< HEAD
        JSON.stringify({ error: "Query is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    const openAiKey = Deno.env.get("OPENAI_API_KEY"),
    if (!openAiKey) throw new Error("OPENAI_API_KEY is not set"),
=======
        JSON.stringify({ error: &quot;Query is required&quot; }),
        { status: 400, headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } }
      );
    }

    const openAiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;);
    if (!openAiKey) throw new Error(&quot;OPENAI_API_KEY is not set&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    const configuration = new Configuration({ apiKey: openAiKey }),
    const openai = new OpenAIApi(configuration),

<<<<<<< HEAD
    const prompt = `Interpret the following user search query and extract filters as JSON.\nQuery: "${query}"\nReturn JSON with fields: type, skills, location, budget, availability. Use null if a value is not provided.`,

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.1}),

    const responseText = completion.choices[0].message.content || "",
    let filters,
=======
    const prompt = `Interpret the following user search query and extract filters as JSON.\nQuery: &quot;${query}&quot;\nReturn JSON with fields: type, skills, location, budget, availability. Use null if a value is not provided.`;

    const completion = await openai.chat.completions.create({
      model: &quot;gpt-4o-mini&quot;,
      messages: [{ role: &quot;user&quot;, content: prompt }],
      temperature: 0.1});

    const responseText = completion.choices[0].message.content || "&quot;;
    let filters;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    try {
      const match = responseText.match(/\{[\s\S]*\}/),
      filters = match ? JSON.parse(match[0]) : JSON.parse(responseText)
    } catch (_) {
      filters = { type: null, skills: null, location: null, budget: null, availability: null }
    }

    return new Response(
      JSON.stringify({ filters }),
<<<<<<< HEAD
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {
    console.error("ai-search error", error),
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
=======
      { headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } }
=======

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { query} = await req.json();
    if (!query) {_return new Response(
        JSON.stringify({ error: "Query is required"}),
        {_status: 400, _headers: { ...corsHeaders, _"Content-Type": "application/json"} }
      );
    }

    const _openAiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) throw new Error("OPENAI_API_KEY is not set");

    const _configuration = new Configuration({_apiKey: openAiKey});
    const _openai = new OpenAIApi(configuration);

    const _prompt = `Interpret the following user search query and extract filters as JSON.\nQuery: "${_query}"\nReturn JSON with fields: type, skills, location, budget, availability. Use null if a value is not provided.`;

    const _completion = await openai.chat.completions.create({_model: "gpt-4o-mini", _messages: [{ role: "user", _content: prompt}],
      temperature: 0.1});

    const _responseText = completion.choices[0].message.content || "";
    let filters;
    try {_const _match = responseText.match(/\{[\s\S]*\}/);
      filters = match ? JSON.parse(match[0]) : JSON.parse(responseText);
    } catch (_) {_filters = { type: null, _skills: null, _location: null, _budget: null, _availability: null};
    }

    return new Response(
      JSON.stringify({_filters}),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"} }
    );
  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"} }
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    );
  } catch (error) {
    console.error(&quot;ai-search error&quot;, error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json" } }
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}),
