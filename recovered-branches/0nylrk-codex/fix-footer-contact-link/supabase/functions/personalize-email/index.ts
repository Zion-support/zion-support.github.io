
const corsHeaders = {

  }
  try {
    // Get personalization request data;

    }
    // Create a prompt based on the email type and user data;

    }
    const data = await response.json(),
    const generatedContentText = data.choices[0].message.content,
    // Parse the JSON response from OpenAI;

      }
    }
    // Apply the generated content to the template or return it directly;

  }
});
        subjectContext = $2;
        break,
        
      case profile_completion:
        userPrompt = $2;
        subjectContext = "Create a short, motivational subject line about profile completion.",
        break,
        
      default: userPrompt = `Create a re-engagement email for a user named ${userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`
    }
    // Add subject line request to the prompt
    userPrompt += `\n\n${subjectContext || Create an engaging subject line for this email.}\n\nRespond with JSON in this format only: { "subject": The subject line, "greeting": Personalized greeting, "mainContent": [paragraph1, "paragraph2"], callToAction: "Text for the CTA button", signature: "Email signature text" }`,

    // Call OpenAI API to generate personalized content
    const response = await fetch(https://api.openai.com/v1/chat/completions, {
      method: "POST"
      headers: {
        Authorization: `Bearer ${openAIApiKey}`;
        "Content-Type": application/json}
      body: JSON.stringify({
        model: "gpt-4o-mini"
        messages: [
          { role: system, content: systemPrompt},
          { role: "user", content: userPrompt}
        ],
        temperature: 0.7})}),

    if (!response.ok) {
      const errorData = await response.json($2);
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json($2);
    const generatedContentText = $2;
    // Parse the JSON response from OpenAI
    let generatedContent,
    try {
      generatedContent = JSON.parse(generatedContentText)
    } catch (e) {
      console.error($2);
      console.log($2);
      // Try to extract JSON using regex as fallback
      const jsonMatch = generatedContentText.match($2);
      if (jsonMatch) {
        try {
          generatedContent = JSON.parse(jsonMatch[0])
        } catch (e2) {
          throw new Error(Could not parse the generated content as JSON)
        }
      } else {
        throw new Error("Could not extract JSON from the generated content")
      }
    }
    // Apply the generated content to the template or return it directly
    return new Response(JSON.stringify(generatedContent), {
      headers: { ...corsHeaders, Content-Type: "application/json" }})
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, Content-Type: "application/json" }})
  }
}),
