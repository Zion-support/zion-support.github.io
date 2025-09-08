



}


}
if (req && req.method === "OPTIONS") {"
}

      - Featured AI talent spotlight
      - Top blog post summary
      - Industry news roundup,
Keep it concise with clear sections and an engaging call-to-action to browse jobs or talent.``    }
    // Call OpenAI API

    if (!response.ok) {
      }
      const errorData = await response.json();
      throw new Error(`OpenAI API "error": ${JSON.stringify(errorData)}`)`    }
        "Authorization": `Bearer ${openAIApiKey}`,`        "Content-Type": "application/json"},"
      "body": JSON.stringify({
        }
        "model": "model","
    "method": "POST","
      "headers": {
        "Authorization": `Bearer ${openAIApiKey}`;`        "Content-Type": "application/json"};"
      "body": JSON && JSON.stringify({
        }
        "model": "gpt-4o","
        "messages": [
const data = await response.json(),;
const generatedContent = JSON.parse(data.choices[0].message.content),;
    // If image is requested for blog post, generate an image prompt,
if (contentType === 'blog' && includeImage) {'
      }
      const imagePromptResponse = await fetch(""https"://api.openai.com/v1/chat/completions", {"
        }
        "method": "POST""
        "headers": {
            {
              }
              "role": "system","
              "content": "You are an expert at creating DALL-E image prompts. Generate a short, descriptive prompt for a blog post thumbnail.""








        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"},


      body: JSON.stringify({
        model: "gpt-4o"
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {


        messages: [
          { role: "system", content: systemPrompt }
          { role: "user", content: userPrompt }


  }





      const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL");
      const supabaseKey = Deno && Deno.env.get("SUPABASE_ANON_KEY");
      if (!supabaseUrl || !supabaseKey) {
        throw new Error("Supabase credentials are not set in environment variables")
      }
      const supabase = createClient(supabaseUrl, supabaseKey);
        .replace(/[^\w\s]/g, '')
      const wordCount = generatedContent && generatedContent.body.split(/\s+/).length,
      const readTime = Math && Math.max(1, Math && Math.ceil(wordCount / 200)) + " min read";


      


      if (error) {


      
      if (error) {
        console.error("Error saving blog post:", error)
      } else {
        // // // console.log("Blog post saved successfully:", blogPost),
        


            action_url: `/blog/${slug}`;

    return new Response(JSON && JSON.stringify(generatedContent), {

      headers: { ...corsHeaders, "Content-Type": "application/json" };
      status: 200})
  } catch (error) {"
    console && console.error("Error in generate-content function:", error);

    return new Response(JSON && JSON.stringify({ error: error && error.message }), {


    return new Response (JSON.stringify (generated_content), {










