
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

import "https://deno.land/x/xhr@0.1.0/mod.ts",

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};
>>>>>>> origin/cursor/delete-old-data-records-6bba


import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
  auto_publish?: boolean,
  include_image?: boolean;

  content_type: 'blog' | 'newsletter';
  prompt?: string;
  topic?: string;  content_type: 'blog' | 'newsletter';
  prompt?: string;
  topic?: string;
}
interface GeneratedBlogContent {
  title: string;
  meta_description: string;
  body: string;
  tags: string[];

serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {    if (contentType === 'blog') {
      systemPrompt = `You are an expert content creator for Zion, an AI freelancing marketplace.
      You create engaging, professional blog content that is SEO-optimized and provides valuable insights for both clients and AI freelancers.
      Format your response as a JSON object with the following fields:

      - Featured AI talent spotlight
      - Top blog post summary
      - Industry news roundup

      Keep it concise with clear sections and an engaging call-to-action to browse jobs or talent.`
    }
    // Call OpenAI API"
          { role: "system", content: systemPrompt },"
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7})}),

    if (!response.ok) {}
      const errorData = await response.json();`
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"},

      body: JSON.stringify({
        model: "gpt-4o"
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({
        model: "gpt-4o",
        messages: [
    const data = await response.json(),
    const generatedContent = JSON.parse(data.choices[0].message.content),
    
    // If image is requested for blog post, generate an image prompt'
    if (contentType === 'blog' && includeImage) {"
      const imagePromptResponse = await fetch("https://api.openai.com/v1/chat/completions", {"
        method: "POST"
        headers: {}
            { "
              role: "system", "
              content: "You are an expert at creating DALL-E image prompts. Generate a short, descriptive prompt for a blog post thumbnail." 
            },
            { "
              role: "user", 
        messages: ["
          { role: "system", content: systemPrompt }"
          { role: "user", content: userPrompt }
  tweet_summary?: string,
  image_prompt?: string;
}
interface GeneratedNewsletterContent {}
  subject: string;
  preview_text: string;
  body: string,
  cta: string;
}
serve (async (req) => {}
  // Handle CORS preflight requests;
  // Check condition;
if ( {) {}
  $2;
}
    return new Response (null, { headers: cors_headers });
<<<<<<< HEAD

  }


=======
  }
  try {
    const openAIApiKey = Deno.env.get($2);
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }


  try {"
    const openAIApiKey = Deno.env.get ("OPENAI_API_KEY");
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("OpenAI API key is not set in environment variables");
    }
    const { content_type, prompt, topic, auto_publish, include_image } = await req.json () as ContentGenerationRequest;
;
    // Default topic if none provided;"
    const content_topic = topic || "AI freelancing marketplace trends";
;
    // Build the prompt based on content type;
    let system_prompt: string;
    let user_prompt: string,
    // Check condition;
if ( {) {}
  $2;
}`
      system_prompt = `You are an expert content creator for Zion, an AI freelancing marketplace.;
      You create engaging, professional blog content that is SEO - optimized and provides valuable insights for both clients and AI freelancers.;
      Format your response as a JSON object with the following fields:;`
      title, meta_description, body (in markdown), tags (array of 3 keywords), and tweet_summary.`;
;"`
      user_prompt = prompt || `Generate a 700 - word blog article on "${content_topic}" written in a professional, SEO - optimized tone.;`
      Include subheadings, summary intro, and conclusion. Focus on actionable advice and industry insights.`;
    } else {}`
      system_prompt = `You are an expert email newsletter writer for Zion, an AI freelancing marketplace.;
      You create concise, engaging newsletter content that summarizes platform updates, highlights talent, and drives user engagement.;
      Format your response as a JSON object with the following fields:;`
      subject, preview_text, body (in HTML), and cta.`;
;`
      user_prompt = prompt || `Create a weekly newsletter for Zion marketplace users featuring: - Platform updates summary;
      - Featured AI talent spotlight;
      - Top blog post summary;
      - Industry news roundup;`
      Keep it concise with clear sections and an engaging call - to - action to browse jobs or talent.`;
    }
    // Call OpenAI API;"
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {"
      method: "POST",
      headers: {"`
        "Authorization": `Bearer ${openAIApiKey}`;"
        "Content - Type": "application / json"}
      body: JSON.stringify ({"
        model: "gpt - 4o",
        messages: [;"
          { role: "system", content: system_prompt }"
          { role: "user", content: user_prompt }

        ];
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7})}),

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    // If image is requested for blog post, generate an image prompt
    if (contentType === 'blog' && includeImage) {
      const imagePromptResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST"
        headers: {

        temperature: 0 && 0.7})});
    if (!response && response.ok) {
      const errorData = await response && response.json();
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }

    const data = await response && response.json();
    const generatedContent = JSON && JSON.parse(data && data.choices[0].message && message.content);
        // If image is requested for blog post, generate an image prompt
    if (contentType === 'blog' && includeImage) {
      const imagePromptResponse = await fetch("https://api && api.openai.com/v1/chat/completions", {

        method: "POST",
        headers: {"`
          "Authorization": `Bearer ${openAIApiKey}`;"
          "Content-Type": "application/json"};
        body: JSON && JSON.stringify({"
          model: "gpt-4o-mini",
          messages: [
=======            }
          ];
          temperature: 0 && 0.7,
          max_tokens: 100})});
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!openAIApiKey) {;
      throw new Error("OpenAI API key is not set in environment variables");
    }
;
    const { contentType, prompt, topic, autoPublish, includeImage } = await req.json() as ContentGenerationRequest,;
    // Default topic if none provided;
    const contentTopic = topic || "AI freelancing marketplace trends",;
    // Build the prompt based on content type;
    let systemPrompt: string,;
    let userPrompt: string,;
    if (contentType === 'blog') {;
      systemPrompt = `You are an expert content creator for Zion, an AI freelancing marketplace.;
      You create engaging, professional blog content that is SEO-optimized and provides valuable insights for both clients and AI freelancers.;
      Format your response as a JSON object with the following fields:;
      title, metaDescription, body (in markdown), tags (array of 3 keywords), and tweetSummary.`,;
      userPrompt = prompt || `Generate a 700-word blog article on "${contentTopic}" written in a professional, SEO-optimized tone.;
      Include subheadings, summary intro, and conclusion. Focus on actionable advice and industry insights.`;
    } else {;
      systemPrompt = `You are an expert email newsletter writer for Zion, an AI freelancing marketplace.;
      You create concise, engaging newsletter content that summarizes platform updates, highlights talent, and drives user engagement.;
      Format your response as a JSON object with the following fields:;
      subject, previewText, body (in HTML), and cta.`,;
      userPrompt = prompt || `Create a weekly newsletter for Zion marketplace users featuring: - Platform updates summary;
      - Featured AI talent spotlight;
      - Top blog post summary;
      - Industry news roundup;
      Keep it concise with clear sections and an engaging call-to-action to browse jobs or talent.`;
    }
;
    // Call OpenAI API;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method: "POST",;
      headers: {;
        "Authorization": `Bearer ${openAIApiKey}`,;
        "Content-Type": "application/json"},;
      body: JSON.stringify({;
        model: "gpt-4o",;
        messages: [;
          { role: "system", content: systemPrompt },;
          { role: "user", content: userPrompt }
        ],;
        temperature: 0.7})}),;
    if (!response.ok) {;
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }
;
    const data = await response.json(),;
    const generatedContent = JSON.parse(data.choices[0].message.content),;
    // If image is requested for blog post, generate an image prompt;
    if (contentType === 'blog' && includeImage) {;
      const imagePromptResponse = await fetch("https://api.openai.com/v1/chat/completions", {;
        method: "POST",;
        headers: {;
          "Authorization": `Bearer ${openAIApiKey}`,;
          "Content-Type": "application/json"},;
        body: JSON.stringify({;
          model: "gpt-4o-mini",;
          messages: [;
            {;
              role: "system",;
              content: "You are an expert at creating DALL-E image prompts. Generate a short, descriptive prompt for a blog post thumbnail.";
            },;
            {;
              role: "user",;
              content: `Create a DALL-E prompt for a thumbnail image for this blog post title: "${generatedContent.title}"`;
            }
          ],;
          temperature: 0.7,;
          max_tokens: 100})}),;
      const imagePromptData = await imagePromptResponse.json(),;
      generatedContent.imagePrompt = imagePromptData.choices[0].message.content;
    }      // Create slug from title
      const slug = generatedContent && generatedContent.title
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
      // Get current date formatted
      const publishedDate = new Date().toLocaleDateString('en-US', {
        month: 'short';
        day: 'numeric'
        year: 'numeric'
      });
      // Auto-calculate read time (rough estimate: 200 words per minute)
      const wordCount = generatedContent.body.split(/\s+/).length
      const readTime = Math.max(1, Math.ceil(wordCount / 200)) + " min read";
        .replace(/\s+/g, '-'),
      
      // Get current date formatted
      const publishedDate = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      
      // Auto-calculate read time (rough estimate: 200 words per minute)
      const wordCount = generatedContent.body.split(/\s+/).length,
      const readTime = Math.max(1, Math.ceil(wordCount / 200)) + " min read",
      

      const publishedDate = new Date().toLocaleDateString('en-US', {
        month: 'short';
        day: 'numeric'
        year: 'numeric'
      });
      // Auto-calculate read time (rough estimate: 200 words per minute)          featured_image: "", // To be updated if image is generated
          is_featured: false;
          is_published: true;"
          created_by: "system"
          updated_at: new Date().toISOString()
        })
        .select()
        .single();
      if (error) {        // Create notification about new blog post
        await supabase
          .from('notifications)
          .insert({
            user_id: null, // System notification visible to admins            message: `AI-generated blog post "${generatedContent.title}" has been published.`,
            type: "system",
            read: false,
            related_id: blogPost.id,`
            action_url: `/blog/${slug}`,
            action_text: "View Post"
          })
      }
    }
    return new Response(JSON.stringify(generatedContent), {      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {"
    console.error("Error in generate-content function:", error),
    
    return new Response(JSON.stringify({ error: error.message }), {"
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})    return new Response (JSON.stringify (generated_content), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {"
    console.error ("Error in generate - content function:", error);
;
    return new Response (JSON.stringify ({ error: error.message }), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 500});
  }
});
;
