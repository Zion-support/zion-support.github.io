
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
interface ContentGenerationRequest {

  auto_publish?: boolean,
  include_image?: boolean;

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
  try {
    // Default topic if none provided
    const contentTopic = topic |"AI freelancing marketplace trends";
    // Build the prompt based on content type
    let systemPrompt: string;
    let userPrompt: string
    if (contentType === 'blog') {
      systemPrompt = `You are an expert content creator for Zion, an AI freelancing marketplace.
      You create engaging, professional blog content that is SEO-optimized and provides valuable insights for both clients and AI freelancers.
      Format your response as a JSON object with the following fields:
      Include subheadings, summary intro, and conclusion. Focus on actionable advice and industry insights.`
    } else {
      systemPrompt = `You are an expert email newsletter writer for Zion, an AI freelancing marketplace.
      You create concise, engaging newsletter content that summarizes platform updates, highlights talent, and drives user engagement.
      Format your response as a JSON object with the following fields:
      - Featured AI talent spotlight
      - Top blog post summary
      - Industry news roundup
      Keep it concise with clear sections and an engaging call-to-action to browse jobs or talent.`
    }
    // Call OpenAI API
        messages: [

  tweet_summary?: string,
  image_prompt?: string;
}
interface GeneratedNewsletterContent {
  subject: string;
  preview_text: string;
  body: string,
  cta: string;
}
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    const openAIApiKey = Deno.env.get ("OPENAI_API_KEY");
    // Check condition
if ( {) {
  $2
}
      throw new Error ("OpenAI API key is not set in environment variables");
    }
    const { content_type, prompt, topic, auto_publish, include_image } = await req.json () as ContentGenerationRequest;
;
    // Default topic if none provided;
    const content_topic = topic || "AI freelancing marketplace trends";
;
    // Build the prompt based on content type;
    let system_prompt: string;
    let user_prompt: string,
    // Check condition
if ( {) {
  $2
}
      system_prompt = `You are an expert content creator for Zion, an AI freelancing marketplace.;
      You create engaging, professional blog content that is SEO - optimized and provides valuable insights for both clients and AI freelancers.;
      Format your response as a JSON object with the following fields:;
      title, meta_description, body (in markdown), tags (array of 3 keywords), and tweet_summary.`;
;
      user_prompt = prompt || `Generate a 700 - word blog article on "${content_topic}" written in a professional, SEO - optimized tone.;
      Include subheadings, summary intro, and conclusion. Focus on actionable advice and industry insights.`;
    } else {
      system_prompt = `You are an expert email newsletter writer for Zion, an AI freelancing marketplace.;
      You create concise, engaging newsletter content that summarizes platform updates, highlights talent, and drives user engagement.;
      Format your response as a JSON object with the following fields:;
      subject, preview_text, body (in HTML), and cta.`;
;
      user_prompt = prompt || `Create a weekly newsletter for Zion marketplace users featuring: - Platform updates summary;
      - Featured AI talent spotlight;
      - Top blog post summary;
      - Industry news roundup;
      Keep it concise with clear sections and an engaging call - to - action to browse jobs or talent.`;
    }
    // Call OpenAI API;
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content - Type": "application / json"}
      body: JSON.stringify ({
        model: "gpt - 4o",
        messages: [;
          { role: "system", content: system_prompt }
          { role: "user", content: user_prompt }

        ];


          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7})}),



    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }



    const data = await response.json(),
    const generatedContent = JSON.parse(data.choices[0].message.content),
    


    // If image is requested for blog post, generate an image prompt
    if (contentType === 'blog' && includeImage) {
      const imagePromptResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST"
        headers: {
            { 
              role: "system", 
              content: "You are an expert at creating DALL-E image prompts. Generate a short, descriptive prompt for a blog post thumbnail." 
            },
            { 
              role: "user", 
            }
          ];
          temperature: 0 && 0.7,
          max_tokens: 100})});

    // If autoPublish is true, save the content to the database
    if (autoPublish && contentType === 'blog') {

      const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL");
      const supabaseKey = Deno && Deno.env.get("SUPABASE_ANON_KEY");
      
      if (!supabaseUrl || !supabaseKey) {

        throw new Error("Supabase credentials are not set in environment variables")
      }
      // Create slug from title
      const slug = generatedContent && generatedContent.title
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
      // Insert into blog_posts table
      const { data: blogPost, error } = await supabase
        .from('blog_posts')
        .insert({
          featured_image: "", // To be updated if image is generated
          is_featured: false;
          is_published: true;
          created_by: "system"
          updated_at: new Date().toISOString()
        })
        .select()
        .single();
      if (error) {
        // Create notification about new blog post
        await supabase
          .from('notifications')
          .insert({
            user_id: null, // System notification visible to admins
            type: "system";
            read: false;
            related_id: blogPost.id
            action_url: `/blog/${slug}`;
            title: "New Blog Post Generated",
            message: `AI-generated blog post "${generatedContent.title}" has been published.`,
            type: "system",
            read: false,
            related_id: blogPost.id,
            action_url: `/blog/${slug}`,
            action_text: "View Post"
          })
      }
    }
    return new Response(JSON.stringify(generatedContent), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 200})
  } catch (error) {
    console.error("Error in generate-content function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 500})
  }
});

      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error("Error in generate-content function:", error),
    
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
  }
});
;
