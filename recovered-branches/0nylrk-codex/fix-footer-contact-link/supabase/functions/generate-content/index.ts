
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======
import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import &quot;https://deno.land/x/xhr@0.1.0/mod.ts&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ContentGenerationRequest {
  contentType: 'blog' | 'newsletter',
  prompt?: string,
  topic?: string,
  autoPublish?: boolean,
  includeImage?: boolean
}

interface GeneratedBlogContent {
  title: string,
  metaDescription: string,
  body: string,
  tags: string[],
  tweetSummary?: string,
  imagePrompt?: string
}

interface GeneratedNewsletterContent {
  subject: string,
  previewText: string,
  body: string,
  cta: string
}

serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
=======
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const openAIApiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;);
    if (!openAIApiKey) {
      throw new Error(&quot;OpenAI API key is not set in environment variables&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    const { contentType, prompt, topic, autoPublish, includeImage } = await req.json() as ContentGenerationRequest,
    
    // Default topic if none provided
<<<<<<< HEAD
    const contentTopic = topic || "AI freelancing marketplace trends",
=======
    const contentTopic = topic || &quot;AI freelancing marketplace trends&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // Build the prompt based on content type
    let systemPrompt: string,
    let userPrompt: string,
    
    if (contentType === 'blog') {
      systemPrompt = `You are an expert content creator for Zion, an AI freelancing marketplace. 
      You create engaging, professional blog content that is SEO-optimized and provides valuable insights for both clients and AI freelancers.
      Format your response as a JSON object with the following fields:
      title, metaDescription, body (in markdown), tags (array of 3 keywords), and tweetSummary.`,
      
<<<<<<< HEAD
      userPrompt = prompt || `Generate a 700-word blog article on "${contentTopic}" written in a professional, SEO-optimized tone. 
      Include subheadings, summary intro, and conclusion. Focus on actionable advice and industry insights.`
=======
      userPrompt = prompt || `Generate a 700-word blog article on &quot;${contentTopic}&quot; written in a professional, SEO-optimized tone. 
      Include subheadings, summary intro, and conclusion. Focus on actionable advice and industry insights.`;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } else {
      systemPrompt = `You are an expert email newsletter writer for Zion, an AI freelancing marketplace.
      You create concise, engaging newsletter content that summarizes platform updates, highlights talent, and drives user engagement.
      Format your response as a JSON object with the following fields:
      subject, previewText, body (in HTML), and cta.`,
      
      userPrompt = prompt || `Create a weekly newsletter for Zion marketplace users featuring: - Platform updates summary
      - Featured AI talent spotlight
      - Top blog post summary
      - Industry news roundup
      Keep it concise with clear sections and an engaging call-to-action to browse jobs or talent.`
    }

    // Call OpenAI API
    const response = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
      method: &quot;POST&quot;,
      headers: {
        &quot;Authorization&quot;: `Bearer ${openAIApiKey}`,
        &quot;Content-Type&quot;: &quot;application/json&quot;},
      body: JSON.stringify({
        model: &quot;gpt-4o&quot;,
        messages: [
          { role: &quot;system&quot;, content: systemPrompt },
          { role: &quot;user&quot;, content: userPrompt }
        ],
        temperature: 0.7})}),

    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json(),
    const generatedContent = JSON.parse(data.choices[0].message.content),
    
    // If image is requested for blog post, generate an image prompt
    if (contentType === 'blog' && includeImage) {
      const imagePromptResponse = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
        method: &quot;POST&quot;,
        headers: {
          &quot;Authorization&quot;: `Bearer ${openAIApiKey}`,
          &quot;Content-Type&quot;: &quot;application/json&quot;},
        body: JSON.stringify({
          model: &quot;gpt-4o-mini&quot;,
          messages: [
            { 
              role: &quot;system&quot;, 
              content: &quot;You are an expert at creating DALL-E image prompts. Generate a short, descriptive prompt for a blog post thumbnail.&quot; 
            },
            { 
              role: &quot;user&quot;, 
              content: `Create a DALL-E prompt for a thumbnail image for this blog post title: &quot;${generatedContent.title}&quot;` 
            }
          ],
          temperature: 0.7,
          max_tokens: 100})}),
      
      const imagePromptData = await imagePromptResponse.json(),
      generatedContent.imagePrompt = imagePromptData.choices[0].message.content
    }

    // If autoPublish is true, save the content to the database
    if (autoPublish && contentType === 'blog') {
<<<<<<< HEAD
      const supabaseUrl = Deno.env.get("SUPABASE_URL"),
      const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY"),
      
      if (!supabaseUrl || !supabaseKey) {
        throw new Error("Supabase credentials are not set in environment variables")
=======
      const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;);
      const supabaseKey = Deno.env.get(&quot;SUPABASE_ANON_KEY&quot;);
      
      if (!supabaseUrl || !supabaseKey) {
        throw new Error(&quot;Supabase credentials are not set in environment variables&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      const supabase = createClient(supabaseUrl, supabaseKey),
      
      // Create slug from title
      const slug = generatedContent.title
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-'),
      
      // Get current date formatted
      const publishedDate = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      
      // Auto-calculate read time (rough estimate: 200 words per minute)
<<<<<<< HEAD
      const wordCount = generatedContent.body.split(/\s+/).length,
      const readTime = Math.max(1, Math.ceil(wordCount / 200)) + " min read",
=======
      const wordCount = generatedContent.body.split(/\s+/).length;
      const readTime = Math.max(1, Math.ceil(wordCount / 200)) + &quot; min read&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Insert into blog_posts table
      const { data: blogPost, error } = await supabase
        .from('blog_posts')
        .insert({
          title: generatedContent.title,
          slug: slug,
          excerpt: generatedContent.metaDescription,
          content: generatedContent.body,
          author: {
            name: &quot;Zion AI Team&quot;,
            title: &quot;Content Team&quot;,
            avatarUrl: &quot;https://images.unsplash.com/photo-1589386417686-0d34b5903d23?auto=format&fit=crop&w=200&h=200&quot;
          },
          published_date: publishedDate,
          read_time: readTime,
          category: &quot;AI Insights&quot;,
          tags: generatedContent.tags,
          featured_image: "&quot;, // To be updated if image is generated
          is_featured: false,
          is_published: true,
          created_by: &quot;system&quot;,
          updated_at: new Date().toISOString()
        })
        .select()
        .single(),
      
      if (error) {
<<<<<<< HEAD
        console.error("Error saving blog post:", error)
      } else {
        // // // console.log("Blog post saved successfully:", blogPost),
=======
        console.error(&quot;Error saving blog post:&quot;, error);
      } else {
        // console.log(&quot;Blog post saved successfully:&quot;, blogPost);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
        // Create notification about new blog post
        await supabase
          .from('notifications')
          .insert({
            user_id: null, // System notification visible to admins
            title: &quot;New Blog Post Generated&quot;,
            message: `AI-generated blog post &quot;${generatedContent.title}&quot; has been published.`,
            type: &quot;system&quot;,
            read: false,
            related_id: blogPost.id,
            action_url: `/blog/${slug}`,
<<<<<<< HEAD
            action_text: "View Post"
          })
=======
            action_text: &quot;View Post&quot;
          });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    }

    return new Response(JSON.stringify(generatedContent), {
<<<<<<< HEAD
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200})
  } catch (error) {
    console.error("Error in generate-content function:", error),
    
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500})
=======
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; },
      status: 200});
  } catch (error) {
    console.error(&quot;Error in generate-content function:&quot;, error);
    
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json" },
      status: 500});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
}),
