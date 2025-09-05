
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

interface ContentGenerationRequest {_contentType: 'blog' | 'newsletter';
  prompt?: string;
  topic?: string;
  autoPublish?: boolean;
  includeImage?: boolean;}

interface GeneratedBlogContent {_title: string;
  metaDescription: string;
  body: string;
  tags: string[];
  tweetSummary?: string;
  imagePrompt?: string;}

interface GeneratedNewsletterContent {_subject: string;
  previewText: string;
  body: string;
  cta: string;}

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const _openAIApiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables");}

    const {_contentType, _prompt, _topic, _autoPublish, _includeImage} = await req.json() as ContentGenerationRequest;
    
    // Default topic if none provided
    const _contentTopic = topic || "AI freelancing marketplace trends";
    
    // Build the prompt based on content type
    let systemPrompt: string;
    let userPrompt: string;
    
    if (contentType === 'blog') {_systemPrompt = `You are an expert content creator for Zion, _an AI freelancing marketplace. 
      You create engaging, _professional blog content that is SEO-optimized and provides valuable insights for both clients and AI freelancers.
      Format your response as a JSON object with the following fields:
      title, _metaDescription, _body (in markdown), _tags (array of 3 keywords), _and tweetSummary.`;
      
      userPrompt = prompt || `Generate a 700-word blog article on "${contentTopic}" written in a professional, SEO-optimized tone. 
      Include subheadings, summary intro, and conclusion. Focus on actionable advice and industry insights.`;
    } else {_systemPrompt = `You are an expert email newsletter writer for Zion, _an AI freelancing marketplace.
      You create concise, _engaging newsletter content that summarizes platform updates, _highlights talent, _and drives user engagement.
      Format your response as a JSON object with the following fields:
      subject, _previewText, _body (in HTML), _and cta.`;
      
      userPrompt = prompt || `Create a weekly newsletter for Zion marketplace users featuring:
      - Platform updates summary
      - Featured AI talent spotlight
      - Top blog post summary
      - Industry news roundup
      Keep it concise with clear sections and an engaging call-to-action to browse jobs or talent.`;}

    // Call OpenAI API
    const _response = await fetch("https://api.openai.com/v1/chat/completions", {_method: "POST", _headers: {
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({_model: "gpt-4o", _messages: [
          { role: "system", _content: systemPrompt},
          {_role: "user", _content: userPrompt}
        ],
        temperature: 0.7})});

    if (!response.ok) {_const _errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }

    const _data = await response.json();
    const _generatedContent = JSON.parse(data.choices[0].message.content);
    
    // If image is requested for blog post, generate an image prompt
    if (contentType === 'blog' && includeImage) {_const _imagePromptResponse = await fetch("https://api.openai.com/v1/chat/completions", _{
        method: "POST", _headers: {
          "Authorization": `Bearer ${openAIApiKey}`,
          "Content-Type": "application/json"},
        body: JSON.stringify({_model: "gpt-4o-mini", _messages: [
            { 
              role: "system", _content: "You are an expert at creating DALL-E image prompts. Generate a short, _descriptive prompt for a blog post thumbnail."},
            {_role: "user", _content: `Create a DALL-E prompt for a thumbnail image for this blog post title: "${generatedContent.title}"` 
            }
          ],
          temperature: 0.7,
          max_tokens: 100})});
      
      const _imagePromptData = await imagePromptResponse.json();
      generatedContent.imagePrompt = imagePromptData.choices[0].message.content;
    }

    // If autoPublish is true, save the content to the database
    if (autoPublish && contentType === 'blog') {_const _supabaseUrl = Deno.env.get("SUPABASE_URL");
      const _supabaseKey = Deno.env.get("SUPABASE_ANON_KEY");
      
      if (!supabaseUrl || !supabaseKey) {
        throw new Error("Supabase credentials are not set in environment variables");}
      
      const _supabase = createClient(supabaseUrl, supabaseKey);
      
      // Create slug from title
      const _slug = generatedContent.title
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-');
      
      // Get current date formatted
      const _publishedDate = new Date().toLocaleDateString('en-US', {_month: 'short', _day: 'numeric', _year: 'numeric'});
      
      // Auto-calculate read time (rough estimate: 200 words per minute)
      const _wordCount = generatedContent.body.split(/\s+/).length;
      const _readTime = Math.max(1, Math.ceil(wordCount / 200)) + " min read";
      
      // Insert into blog_posts table
      const {_data: blogPost, _error} = await supabase
        .from('blog_posts')
        .insert({_title: generatedContent.title, _slug: slug, _excerpt: generatedContent.metaDescription, _content: generatedContent.body, _author: {
            name: "Zion AI Team", _title: "Content Team", _avatarUrl: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?auto=format&fit=crop&w=200&h=200"},
          published_date: publishedDate,
          read_time: readTime,
          category: "AI Insights",
          tags: generatedContent.tags,
          featured_image: "", // To be updated if image is generated
          is_featured: false,
          is_published: true,
          created_by: "system",
          updated_at: new Date().toISOString()
        })
        .select()
        .single();
      
      if (error) {} else {_// Create notification about new blog post
        await supabase
          .from('notifications')
          .insert({
            user_id: null, _// System notification visible to admins
            title: "New Blog Post Generated", _message: `AI-generated blog post "${generatedContent.title}" has been published.`,
            type: "system",
            read: false,
            related_id: blogPost.id,
            action_url: `/blog/${_slug}`,
            action_text: "View Post"
          });
      }
    }

    return new Response(JSON.stringify(generatedContent), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
      status: 200});
  } catch (error) {_return new Response(JSON.stringify({ error: error.message}), {_headers: { ...corsHeaders, _"Content-Type": "application/json"},
      status: 500});
  }
});
