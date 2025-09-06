

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Get personalization request data

      throw new Error("Missing required parameters: emailType and userData")
    }
    // Create a prompt based on the email type and user data

      default:
        userPrompt = `Create a re-engagement email for a user named ${userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`
    }
    // Add subject line request to the prompt

    // Call OpenAI API to generate personalized content
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

      body: JSON.stringify({
        model: "gpt-4o-mini"
        messages: [

    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    // Parse the JSON response from OpenAI
    let generatedContent,
    try {
      generatedContent = JSON.parse(generatedContentText)
    } catch (e) {
      console.error("Failed to parse GPT response as JSON:", e),
      // // // console.log("Raw response:", generatedContentText),
      // Try to extract JSON using regex as fallback
      const jsonMatch = generatedContentText.match(/\{[\s\S]*\}/),
      if (jsonMatch) {
        try {
          generatedContent = JSON.parse(jsonMatch[0])
        } catch (e2) {
          throw new Error("Could not parse the generated content as JSON")
        }
      } else {
        throw new Error("Could not extract JSON from the generated content")
      }
    }
    // Apply the generated content to the template or return it directly
    return new Response(JSON.stringify(generatedContent), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }})
  } catch (error) {
    console.error("Error in personalize-email function:", error),
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
      headers: { ...corsHeaders, "Content-Type": "application/json" }})

  }
});
