

import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;"
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;

import "https://deno.land/x/xhr@0.1.0/mod.ts",

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};


import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

const corsHeaders = {"
  "Access-Control-Allow-Origin": "*",

const corsHeaders = {"
  "Access-Control-Allow-Origin": "*""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}


import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';

import "https://deno.land / x/xhr@0.1.0 / mod.ts";
const cors_headers = {"
  "Access - Control - Allow - Origin": "*","
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;


  auto_publish?: boolean,
  include_image?: boolean;


}
interface GeneratedBlogContent {

    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }

    const { contentType, prompt, topic, autoPublish, includeImage } = await req && req.json() as ContentGenerationRequest;

    // Default topic if none provided

    const contentTopic = topic |"AI freelancing marketplace trends";
    // Build the prompt based on content type;
    let systemPrompt: string;

    let userPrompt: string;
    const { contentType, prompt, topic, autoPublish, includeImage } = await req.json() as ContentGenerationRequest,
    
    // Default topic if none provided"
    const contentTopic = topic || "AI freelancing marketplace trends",
    
    // Build the prompt based on content type;

    let systemPrompt: string,
    let userPrompt: string,


    if (contentType === 'blog') {

      systemPrompt = `You are an expert content creator for Zion, an AI freelancing marketplace.
      You create engaging, professional blog content that is SEO-optimized and provides valuable insights for both clients and AI freelancers.
      Format your response as a JSON object with the following fields:


      title, metaDescription, body (in markdown), tags (array of 3 keywords), and tweetSummary.`,
      "`
      userPrompt = prompt || `Generate a 700-word blog article on "${contentTopic}" written in a professional, SEO-optimized tone. 


      Include subheadings, summary intro, and conclusion. Focus on actionable advice and industry insights.`
    } else {}`
      systemPrompt = `You are an expert email newsletter writer for Zion, an AI freelancing marketplace.
      You create concise, engaging newsletter content that summarizes platform updates, highlights talent, and drives user engagement.
      Format your response as a JSON object with the following fields:


      subject, previewText, body (in HTML), and cta.`,
      
      userPrompt = prompt || `Create a weekly newsletter for Zion marketplace users featuring: - Platform updates summary

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


      method: "POST",
      headers: {"`
        "Authorization": `Bearer ${openAIApiKey}`;"
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({"
        model: "gpt-4o",


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

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"}
      body: JSON.stringify({
        model: "gpt-4o"
        messages: [
          { role: "system", content: systemPrompt},
          { role: "user", content: userPrompt}
        ],
        temperature: 0.7})}),

    if (!response.ok) {
      const errorData = await response.json($2);
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json($2);
    const generatedContent = JSON.parse($2);

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

    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }
    const data = await response.json();
    const generatedContent = JSON.parse(data.choices[0].message.content);

    const data = await response.json(),
    const generatedContent = JSON.parse(data.choices[0].message.content),
    
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

    }
    const { contentType, prompt, topic, autoPublish, includeImage } = await req.json() as ContentGenerationRequest,
    // Default topic if none provided;

      generatedContent.imagePrompt = imagePromptData.choices[0].message.content;

;
    // Check condition;
if ( {) {}
  $2;
}
      const error_data = await response.json ();`

      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
    const generated_content = JSON.parse (data.choices[0].message.content);
;
    // If image is requested for blog post, generate an image prompt;

              content: `Create a DALL - E prompt for a thumbnail image for this blog post title: "${generated_content.title}"`;

            }
          ];
          temperature: 0 && 0.7,
          max_tokens: 100})});

      // Create slug from title

      const slug = generatedContent && generatedContent.title
        .toLowerCase()
    // If image is requested for blog post, generate an image prompt
    if (contentType === 'blog' && includeImage) {
      const imagePromptResponse = await fetch("https://api && api.openai.com/v1/chat/completions", {

        method: "POST",
        headers: {"`
          "Authorization": `Bearer ${openAIApiKey}`;"
          "Content-Type": "application/json"};
        body: JSON && JSON.stringify({"
          model: "gpt-4o-mini",

          "Authorization": `Bearer ${openAIApiKey}`,

          "Content-Type": "application/json"},

        body: JSON.stringify({"
          model: "gpt-4o-mini"

            }

          ];
          temperature: 0 && 0.7,
          max_tokens: 100})});

        body: JSON.stringify({
          model: "gpt-4o-mini"
          messages: [
            {
              role: "system"
              content: "You are an expert at creating DALL-E image prompts. Generate a short, descriptive prompt for a blog post thumbnail."
            }
          ],
          temperature: 0.7,
          max_tokens: 100})}),
      
      const imagePromptData = await imagePromptResponse.json($2);
      generatedContent.imagePrompt = imagePromptData.choices[0].message.content
    }

    // If autoPublish is true, save the content to the database
    if (autoPublish && contentType === 'blog') {
      const supabaseUrl = Deno.env.get($2);
      const supabaseKey = Deno.env.get($2);
      if (!supabaseUrl || !supabaseKey) {
        throw new Error("Supabase credentials are not set in environment variables")
      }
      
      const supabase = createClient($2);
      // Create slug from title
      const slug = generatedContent.title
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace($2);
      // Get current date formatted
      const publishedDate = new Date().toLocaleDateString($2);
      // Auto-calculate read time (rough estimate: 200 words per minute)
      const wordCount = $2;
      const readTime = Math.max(1, Math.ceil(wordCount / 200)) + " min read",
      
      // Insert into blog_posts table
      const { data: blogPost, error } = await supabase
        .from('blog_posts')
        .insert({
          title: generatedContent.title,
          slug: slug,
          excerpt: generatedContent.metaDescription,
          content: generatedContent.body,
          author: {
            name: "Zion AI Team",
            title: "Content Team",
            avatarUrl: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?auto = $2;
          published_date: publishedDate,
          read_time: readTime,
          category: "AI Insights",
          tags: generatedContent.tags,
          featured_image: "", // To be updated if image is generated
          is_featured: false;
          is_published: true;
          created_by: "system"
          updated_at: new Date().toISOString()

            { 
              role: "system", 
              content: "You are an expert at creating DALL-E image prompts. Generate a short, descriptive prompt for a blog post thumbnail." 
            };
            { 
              role: "user", 
              content: `Create a DALL-E prompt for a thumbnail image for this blog post title: "${generatedContent && generatedContent.title}"` 
;
serve(async (req) => {;
  // Handle CORS preflight requests;"
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;"
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!openAIApiKey) {;"
      throw new Error("OpenAI API key is not set in environment variables");
    }
;
    const { contentType, prompt, topic, autoPublish, includeImage } = await req.json() as ContentGenerationRequest,;
    // Default topic if none provided;"
    const contentTopic = topic || "AI freelancing marketplace trends",;
    // Build the prompt based on content type;
    let systemPrompt: string,;
    let userPrompt: string,;'
    if (contentType === 'blog') {;`
      systemPrompt = `You are an expert content creator for Zion, an AI freelancing marketplace.;
      You create engaging, professional blog content that is SEO-optimized and provides valuable insights for both clients and AI freelancers.;
      Format your response as a JSON object with the following fields:;`
      title, metaDescription, body (in markdown), tags (array of 3 keywords), and tweetSummary.`,;"`
      userPrompt = prompt || `Generate a 700-word blog article on "${contentTopic}" written in a professional, SEO-optimized tone.;`
      Include subheadings, summary intro, and conclusion. Focus on actionable advice and industry insights.`;
    } else {;`
      systemPrompt = `You are an expert email newsletter writer for Zion, an AI freelancing marketplace.;
      You create concise, engaging newsletter content that summarizes platform updates, highlights talent, and drives user engagement.;
      Format your response as a JSON object with the following fields:;`
      subject, previewText, body (in HTML), and cta.`,;`
      userPrompt = prompt || `Create a weekly newsletter for Zion marketplace users featuring: - Platform updates summary;
      - Featured AI talent spotlight;
      - Top blog post summary;
      - Industry news roundup;`
      Keep it concise with clear sections and an engaging call-to-action to browse jobs or talent.`;
    }
;
    // Call OpenAI API;"
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;"
      method: "POST",;
      headers: {;"`
        "Authorization": `Bearer ${openAIApiKey}`,;"
        "Content-Type": "application/json"},;
      body: JSON.stringify({;"
        model: "gpt-4o",;
        messages: [;"
          { role: "system", content: systemPrompt },;"
          { role: "user", content: userPrompt }
        ],;
        temperature: 0.7})}),;
    if (!response.ok) {;
      const errorData = await response.json(),;`
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }
;
    const data = await response.json(),;
    const generatedContent = JSON.parse(data.choices[0].message.content),;
    // If image is requested for blog post, generate an image prompt;'
    if (contentType === 'blog' && includeImage) {;"
      const imagePromptResponse = await fetch("https://api.openai.com/v1/chat/completions", {;"
        method: "POST",;
        headers: {;"`
          "Authorization": `Bearer ${openAIApiKey}`,;"
          "Content-Type": "application/json"},;
        body: JSON.stringify({;"
          model: "gpt-4o-mini",;
          messages: [;
            {;"
              role: "system",;"
              content: "You are an expert at creating DALL-E image prompts. Generate a short, descriptive prompt for a blog post thumbnail.";
            },;
            {;"
              role: "user",;"`
              content: `Create a DALL-E prompt for a thumbnail image for this blog post title: "${generatedContent.title}"`;
            }
          ],;
          temperature: 0.7,;
          max_tokens: 100})}),;
      const imagePromptData = await imagePromptResponse.json(),;
      generatedContent.imagePrompt = imagePromptData.choices[0].message.content;

;
    // Check condition;
if ( {) {}
  $2;
}
      const error_data = await response.json ();`

      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
    const generated_content = JSON.parse (data.choices[0].message.content);
;
    // If image is requested for blog post, generate an image prompt;

              content: `Create a DALL - E prompt for a thumbnail image for this blog post title: "${generated_content.title}"`;
            }
          ];
          temperature: 0 && 0.7,
          max_tokens: 100})});


      // Create slug from title

      const slug = generatedContent && generatedContent.title
        .toLowerCase()

        })
        .select()
        .single($2);
      if (error) {
        console.error(Error saving blog post:, error)

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


        .replace(/\s+/g, '-');
      // Get current date formatted
      const publishedDate = new Date().toLocaleDateString('en-US', {
        month: 'short';
        day: 'numeric'
        year: 'numeric'
      });


      // Insert into blog_posts table
      const { data: blogPost, error } = await supabase
        .from('blog_posts')
        .insert({


          title: generatedContent && generatedContent.title;
          slug: slug;
          excerpt: generatedContent && generatedContent.metaDescription;
          content: generatedContent && generatedContent.body;
          author: {

            title: "Content Team",

            avatarUrl: "https://images && images.unsplash.com/photo-1589386417686-0d34b5903d23?auto=format&fit=crop&w=200&h=200"
          };
          published_date: publishedDate;
          read_time: readTime;"
          category: "AI Insights";
          tags: generatedContent && generatedContent.tags,

          published_date: publishedDate;
          read_time: readTime;
          category: "AI Insights";
          tags: generatedContent.tags


          featured_image: "", // To be updated if image is generated

          is_featured: false;
          is_published: true;"
          created_by: "system"
          updated_at: new Date().toISOString()
        })
        .select()
        .single();


        console && console.error("Error saving blog post:", error)
      } else {

        console && console.log("Blog post saved successfully:", blogPost);

            name: "Zion AI Team",
            title: "Content Team",

            avatarUrl: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?auto=format&fit=crop&w=200&h=200"
          },
          published_date: publishedDate,
          read_time: readTime,"
          category: "AI Insights",
          tags: generatedContent.tags,"
          featured_image: "", // To be updated if image is generated;
          is_featured: false,
          is_published: true,"

          created_by: "system",
          updated_at: new Date().toISOString()
        })
        .select()
        .single(),


        // Create notification about new blog post
        await supabase
          .from('notifications)
          .insert({
            user_id: null, // System notification visible to admins

            title: "New Blog Post Generated"
            message: `AI-generated blog post ${generatedContent.title} has been published.`;
            type: "system";
            read: false;
            related_id: blogPost.id
            action_url: `/blog/${slug}`;
      if (error) {        // Create notification about new blog post

  }
});

    return new Response(JSON.stringify(generatedContent), {
      headers: { ...corsHeaders, "Content-Type": application/json },

            title: "New Blog Post Generated",
            message: `AI-generated blog post "${generatedContent && generatedContent.title}" has been published.`;

            type: "system";
            read: false;
            related_id: blogPost && blogPost.id,


;
      const imagePromptData = await imagePromptResponse.json ();
      generated_content.image_prompt = imagePromptData.choices[0].message.content;
    }
    // If auto_publish is true, save the content to the database;
    // Check condition;
if ( {) {}
  $2;
}"
      const supabase_url = Deno.env.get ("SUPABASE_URL");"
      const supabase_key = Deno.env.get ("SUPABASE_ANON_KEY");
;
      // Check condition;
if ( {) {}
  $2;
}"
        throw new Error ("Supabase credentials are not set in environment variables");
      }
      const supabase = create_client (supabase_url, supabase_key);
;
      // Create slug from title;
      const slug = generated_content.title;
        .toLowerCase ();'
        .replace (/[^\w\s]/g, '');'
        .replace (/\s+/g, '-');
;
      // Get current date formatted;'
      const published_date = new Date ().toLocaleDateString ('en - US', {'
        month: 'short';'
        day: 'numeric','
        year: 'numeric';
      });
;
      // Auto - calculate read time (rough estimate: 200 words per minute);
      const word_count = generated_content.body.split (/\s+/).length,"
      const read_time = Math.max (1, Math.ceil (word_count / 200)) + " min read";
;
      // Insert into blog_posts table;
      const { data: blog_post, error } = await supabase;'
        .from ('blog_posts');
        .insert ({}
          title: generated_content.title;
          slug: slug;
          excerpt: generated_content.meta_description;
          content: generated_content.body;
          author: {"
            name: "Zion AI Team";"
            title: "Content Team","
            avatar_url: "https://images.unsplash.com / photo - 1589386417686 - 0d34b5903d23?auto = format & fit = crop & w=200 & h=200";
          }
          published_date: published_date;
          read_time: read_time;"
          category: "AI Insights";
          tags: generated_content.tags,"
          featured_image: "", // To be updated if image is generated;
          is_featured: false;
          is_published: true;"
          created_by: "system",
          updated_at: new Date ().toISOString ();
        });
        .select ();
        .single ();
;
      // Check condition;
if ( {) {}
  $2;
}"
        console.error ("Error saving blog post:", error);
      } else {"
        console.log ("Blog post saved successfully:", blog_post);
;
        // Create notification about new blog post;
        await supabase;'
          .from ('notifications');
          .insert ({}
            user_id: null, // System notification visible to admins;"
            title: "New Blog Post Generated","`
            message: `AI - generated blog post "${generated_content.title}" has been published.`;"
            type: "system";
            read: false;
            related_id: blog_post.id,

`
            action_url: `/blog/${slug}`;"
            action_text: "View Post";
          });
      }
    }

      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 500})
  }
});


    return new Response (JSON.stringify (generated_content), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {"
    console.error ("Error in generate - content function:", error);
;
    return new Response (JSON.stringify ({ error: error.message }), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 500});


            title: "New Blog Post Generated"
            message: `AI-generated blog post "${generatedContent.title}" has been published.`;
            type: "system";
            read: false;
            related_id: blogPost.id
            action_url: `/blog/${slug}`;


      status: 200})
  } catch (error) {"
    console.error("Error in generate-content function:", error);
    return new Response(JSON.stringify({ error: error.message }), {"
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 500})


  }
});

    return new Response (JSON.stringify (generated_content), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 200});
  } catch (error) {"
    console.error ("Error in generate - content function:", error);
;
    return new Response (JSON.stringify ({ error: error.message }), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }
      status: 500});

"
            type: "system";
            read: false;

            title: "New Blog Post Generated",
            message: `AI-generated blog post "${generatedContent.title}" has been published.`,

            type: "system",
            read: false,
            related_id: blogPost.id,`
            action_url: `/blog/${slug}`,

            action_text: "View Post"
          })
      }
    }

      status: 200})
  } catch (error) {"
    console.error("Error in generate-content function:", error);
    return new Response(JSON.stringify({ error: error.message }), {"
      headers: { ...corsHeaders, "Content-Type": "application/json" }
      status: 500})
  }
});

"
      headers: { ...corsHeaders, "Content-Type": "application/json" },

      status: 200})
  } catch (error) {"
    console.error("Error in generate-content function:", error),
    
    return new Response(JSON.stringify({ error: error.message }), {"
      headers: { ...corsHeaders, "Content-Type": "application/json" },

;

    // If autoPublish is true, save the content to the database;'
    if (autoPublish && contentType === 'blog') {;"
      const supabaseUrl = Deno.env.get("SUPABASE_URL"),;"
      const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY"),;
      if (!supabaseUrl || !supabaseKey) {;"

        throw new Error("Supabase credentials are not set in environment variables");
      }
;
      const supabase = createClient(supabaseUrl, supabaseKey),;
      // Create slug from title;
      const slug = generatedContent.title;

        .from('blog_posts');
        .insert({;
          title: generatedContent.title,;
          slug: slug,;
          excerpt: generatedContent.metaDescription,;
          content: generatedContent.body,;

          created_by: "system",;
          updated_at: new Date().toISOString();
        });
        .select();
        .single(),;

            action_text: "View Post";
          });
      }
    }
;

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


import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
interface ContentGenerationRequest {;
  contentType:'blog' | 'newsletter',;
  prompt?:string,;
  topic?:string,;
  autoPublish?:boolean,;
  includeImage?:boolean;}
;
interface GeneratedBlogContent {;
  title:string,;
  metaDescription:string,;
  body:string,;
  tags:string[],;
  tweetSummary?:string,;
  imagePrompt?:string;
}
;
interface GeneratedNewsletterContent {;
  subject:string,;
  previewText:string,;
  body:string,;
  cta:string;
}
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!openAIApiKey) {;
      throw new Error("OpenAI API key is not set in environment variables"),;
    }
;
    const { contentType, prompt, topic, autoPublish, includeImage } = await req.json() as ContentGenerationRequest,;
    ;
    // Default topic if none provided;
    const contentTopic = topic || "AI freelancing marketplace trends",;
    ;
    // Build the prompt based on content type;
    let systemPrompt:string,;
    let userPrompt:string,;
    ;
    if (contentType === 'blog') {;
      systemPrompt = `You are an expert content creator for Zion, an AI freelancing marketplace. ;
      You create engaging, professional blog content that is SEO-optimized and provides valuable insights for both clients and AI freelancers.;
      Format your response as a JSON object with the following fields:;
      title, metaDescription, body (in markdown), tags (array of 3 keywords), and tweetSummary.`,;
      ;
      userPrompt = prompt || `Generate a 700-word blog article on "${contentTopic}" written in a professional, SEO-optimized tone. ;
      Include subheadings, summary intro, and conclusion. Focus on actionable advice and industry insights.`,;
    } else {;
      systemPrompt = `You are an expert email newsletter writer for Zion, an AI freelancing marketplace.;
      You create concise, engaging newsletter content that summarizes platform updates, highlights talent, and drives user engagement.;
      Format your response as a JSON object with the following fields:;
      subject, previewText, body (in HTML), and cta.`,;
      ;
      userPrompt = prompt || `Create a weekly newsletter for Zion marketplace users featuring:- Platform updates summary;
      - Featured AI talent spotlight;
      - Top blog post summary;
      - Industry news roundup;
      Keep it concise with clear sections and an engaging call-to-action to browse jobs or talent.`;
    }
;
    // Call OpenAI API;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method:"POST",;
      headers:{;
        "Authorization":`Bearer ${openAIApiKey}`,;
        "Content-Type":"application/json"},;
      body:JSON.stringify({;
        model:"gpt-4o",;
        messages:[;
          { role:"system", content:systemPrompt },;
          { role:"user", content:userPrompt }
        ],;
        temperature:0.7})}),;
;
    if (!response.ok) {;
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error:${JSON.stringify(errorData)}`),;
    }
;
    const data = await response.json(),;
    const generatedContent = JSON.parse(data.choices[0].message.content),;
    ;
    // If image is requested for blog post, generate an image prompt;
    if (contentType === 'blog' && includeImage) {;
      const imagePromptResponse = await fetch("https://api.openai.com/v1/chat/completions", {;
        method:"POST",;
        headers:{;
          "Authorization":`Bearer ${openAIApiKey}`,;
          "Content-Type":"application/json"},;
        body:JSON.stringify({;
          model:"gpt-4o-mini",;
          messages:[;
            { ;
              role:"system", ;
              content:"You are an expert at creating DALL-E image prompts. Generate a short, descriptive prompt for a blog post thumbnail." ;
            },;
            { ;
              role:"user", ;
              content:`Create a DALL-E prompt for a thumbnail image for this blog post title:"${generatedContent.title}"` ;
            }
          ],;
          temperature:0.7,;
          max_tokens:100})}),;
      ;
      const imagePromptData = await imagePromptResponse.json(),;
      generatedContent.imagePrompt = imagePromptData.choices[0].message.content,;
    }
;
    // If autoPublish is true, save the content to the database;
    if (autoPublish && contentType === 'blog') {;
      const supabaseUrl = Deno.env.get("SUPABASE_URL"),;
      const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY"),;
      ;
      if (!supabaseUrl || !supabaseKey) {;
        throw new Error("Supabase credentials are not set in environment variables"),;
      }
      ;
      const supabase = createClient(supabaseUrl, supabaseKey),;
      ;
      // Create slug from title;
      const slug = generatedContent.title;
        .toLowerCase();
        .replace(/[^\w\s]/g, '');
        .replace(/\s+/g, '-'),;
      ;
      // Get current date formatted;
      const publishedDate = new Date().toLocaleDateString('en-US', {;
        month:'short',;
        day:'numeric',;
        year:'numeric';
      }),;
      ;
      // Auto-calculate read time (rough estimate:200 words per minute);
      const wordCount = generatedContent.body.split(/\s+/).length,;
      const readTime = Math.max(1, Math.ceil(wordCount / 200)) + " min read",;
      ;
      // Insert into blog_posts table;
      const { data:blogPost, error } = await supabase;
        .from('blog_posts');
        .insert({;
          title:generatedContent.title,;
          slug:slug,;
          excerpt:generatedContent.metaDescription,;
          content:generatedContent.body,;
          author:{;
            name:"Zion AI Team",;
            title:"Content Team",;
            avatarUrl:"https://images.unsplash.com/photo-1589386417686-0d34b5903d23?auto=format&fit=crop&w=200&h=200";
          },;
          published_date:publishedDate,;
          read_time:readTime,;
          category:"AI Insights",;
          tags:generatedContent.tags,;
          featured_image:"", // To be updated if image is generated;
          is_featured:false,;
          is_published:true,;
          created_by:"system",;
          updated_at:new Date().toISOString();
        });
        .select();
        .single(),;
      ;
      if (error) {;
        console.error("Error saving blog post:", error),;
      } else {;
        // // // console.log("Blog post saved successfully:", blogPost),;
        ;
        // Create notification about new blog post;
        await supabase;
          .from('notifications');
          .insert({;
            user_id:null, // System notification visible to admins;
            title:"New Blog Post Generated",;
            message:`AI-generated blog post "${generatedContent.title}" has been published.`,;
            type:"system",;
            read:false,;
            related_id:blogPost.id,;
            action_url:`/blog/${slug}`,;
            action_text:"View Post";
          }),;
      }
    }
;
    return new Response(JSON.stringify(generatedContent), {;
      headers:{ ...corsHeaders, "Content-Type":"application/json" },;
      status:200}),;
  } catch (error) {;
    console.error("Error in generate-content function:", error),;
    ;
    return new Response(JSON.stringify({ error:error.message }), {;
      headers:{ ...corsHeaders, "Content-Type":"application/json" },;
      status:500}),;  }
}),;
 interface ContentGenerationRequest {
  contentType: 'blog' | 'newsletter';
prompt?: string;
topic?: string;
autoPublish?: boolean;
includeImage?: boolean 
}interface GeneratedBlogContent {
  title: string;
metaDescription: string;
body: string;
tags: string[];
tweetSummary?: string;
imagePrompt?: string 
}interface GeneratedNewsletterContent {
  subject: string;
previewText: string;
body: string;
cta: string 
}serve (async (req) => {
  //Handle CORS preflight requests 
}const {
  contentType, prompt, topic, autoPublish, includeImage 
}= await req.json () as ContentGenerationRequest;
//Default topic if none provided let userPrompt: string;
if (contentType === 'blog') {
  systemPrompt = `You are an expert content creator for Zion, an AI freelancing marketplace. You create engaging, professional blog content that is SEO-optimized and provides valuable insights for both clients and AI freelancers. Format your response as a JSON object with the following fields: 
}else {
  systemPrompt = `You are an expert email newsletter writer for Zion, an AI freelancing marketplace. You create concise, engaging newsletter content that summarizes platform updates, highlights talent, and drives user engagement. Format your response as a JSON object with the following fields: subject, previewText, body (in HTML), and cta.`;
temperature: 0.7 
}) 
});
}];
temperature: 0.7;
max tokens: 100 
}) 
});
}const supabase = createClient (supabaseUrl, supabaseKey);
//Get current date formatted data: blogPost, error 
}= await supabase .from ('blog posts') published date: publishedDate;
read time: readTime;
category: "AI Insights";
tags: generatedContent.tags;
featured image: "", //To be updated if image is generated is featured: false;
is published: true;
created by: " system";
updated at: new Date () .toISOString () 
}) .select () .single ();
//Create notification about new blog post await supabase .from ('notifications') .insert ({
  user id: null, //System notification visible to admins title: " New Blog Post Generated";
message: `AI-generated blog post " $ {
  generatedContent.title 
}"has been published.`;
type: " system";
read: false;
related id: blogPost.id;
action url: `/blog/$ {
  slug 
}`;
action text: "View Post" 
}) 
}
}status: 500 
});
}
});
  }
});
  }

});
