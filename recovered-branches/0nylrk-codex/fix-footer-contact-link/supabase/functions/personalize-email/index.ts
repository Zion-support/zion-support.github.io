
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })    return new Response(null, _{ headers: corsHeaders});
  }

  try {_// Get personalization request data
    const { 
      emailType, 
      userData, 
      activityData,
      template = {} 
    } = await req.json(),
    
    if (!emailType || !userData) {
      throw new Error("Missing required parameters: emailType and userData")
    }
    
    // Create a prompt based on the email type and user data
    let systemPrompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.",
    let userPrompt = "",
    
    // Subject line context
    let subjectContext = "",
    
    switch (emailType) {
      case "welcome_series":
        userPrompt = `Create a welcome email for a new ${userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData.firstName}. The email should introduce them to the platform and guide them through their next steps.`,
        break,
        
      case "inactivity_reminder":
        userPrompt = `Create a re-engagement email for a ${userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData.firstName} who has been inactive for ${activityData.daysInactive} days. They haven't completed their ${activityData.incompleteAction}.`,
        subjectContext = "Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.",
        break,
        
      case "job_application":
        userPrompt = `Create an email encouraging a talent named ${userData.firstName} who hasn't applied to any jobs yet. Their skills are: ${userData.skills ? userData.skills.join(", ") : "AI-related skills"}. Encourage them to complete their profile and apply to relevant positions.`,
        subjectContext = "Create a subject line that emphasizes opportunity and personal growth.",
        break,
        
      case "profile_completion":
        userPrompt = `Create an email for ${userData.firstName} reminding them to complete their profile. They have completed ${userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`,
        subjectContext = "Create a short, motivational subject line about profile completion.",
        break,        break;
        
      case &quot;inactivity_reminder&quot;:
        userPrompt = `Create a re-engagement email for a ${userData.userType === &quot;talent&quot; ? &quot;talent/professional&quot; : &quot;client/employer&quot;} named ${userData.firstName} who has been inactive for ${activityData.daysInactive} days. They haven't completed their ${activityData.incompleteAction}.`;
        subjectContext = &quot;Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.&quot;;
        break;
        
      case &quot;job_application&quot;:
        userPrompt = `Create an email encouraging a talent named ${userData.firstName} who hasn't applied to any jobs yet. Their skills are: ${userData.skills ? userData.skills.join(&quot;, &quot;) : &quot;AI-related skills&quot;}. Encourage them to complete their profile and apply to relevant positions.`;
        subjectContext = &quot;Create a subject line that emphasizes opportunity and personal growth.&quot;;
        break;
        
      case &quot;profile_completion&quot;:
        userPrompt = `Create an email for ${userData.firstName} reminding them to complete their profile. They have completed ${userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`;
        subjectContext = &quot;Create a short, motivational subject line about profile completion.&quot;;
        break;
        
      default:
        userPrompt = `Create a re-engagement email for a user named ${userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`
    }
    
    // Add subject line request to the prompt
    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`,
    // Call OpenAI API to generate personalized content
    const response = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
      method: &quot;POST&quot;,
      headers: {
        &quot;Authorization&quot;: `Bearer ${openAIApiKey}`,
        &quot;Content-Type&quot;: &quot;application/json&quot;},
      body: JSON.stringify({
        model: &quot;gpt-4o-mini&quot;,
        messages: [
          { role: &quot;system&quot;, content: systemPrompt },
          { role: &quot;user&quot;, content: userPrompt }
        userPrompt = `Create a re-engagement email for a user named ${_userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`;
    }
    
    // Add subject line request to the prompt
    userPrompt += `\n\n${_subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: {_"subject": "The subject line", _"greeting": "Personalized greeting", _"mainContent": ["paragraph1", _"paragraph2"], _"callToAction": "Text for the CTA button", _"signature": "Email signature text"}`;

    // Call OpenAI API to generate personalized content
    const _response = await fetch("https://api.openai.com/v1/chat/completions", {_method: "POST", _headers: {
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({_model: "gpt-4o-mini", _messages: [
          { role: "system", _content: systemPrompt},
          {_role: "user", _content: userPrompt}
        ],
        temperature: 0.7})}),

    if (!response.ok) {
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json(),
    const generatedContentText = data.choices[0].message.content,
    
    // Parse the JSON response from OpenAI
    let generatedContent,
    try {
      generatedContent = JSON.parse(generatedContentText)
    } catch (e) {
      console.error("Failed to parse GPT response as JSON:", e),
      // // // console.log("Raw response:", generatedContentText),      // Try to extract JSON using regex as fallback
      const jsonMatch = generatedContentText.match(/\{[\s\S]*\}/),
      if (jsonMatch) {
        try {
          generatedContent = JSON.parse(jsonMatch[0])
        } catch (e2) {
          throw new Error("Could not parse the generated content as JSON")
        }
      } else {
        throw new Error("Could not extract JSON from the generated content")      }
    }

    // Apply the generated content to the template or return it directly
    return new Response(JSON.stringify(generatedContent), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }})
  } catch (error) {
    console.error("Error in personalize-email function:", error),
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }})    if (!response.ok) {_const _errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }

    const _data = await response.json();
    const _generatedContentText = data.choices[0].message.content;
    
    // Parse the JSON response from OpenAI
    let generatedContent;
    try {_generatedContent = JSON.parse(generatedContentText);} catch (e) {_// Try to extract JSON using regex as fallback
      const _jsonMatch = generatedContentText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {_try {
          generatedContent = JSON.parse(jsonMatch[0]);} catch (e2) {_throw new Error("Could not parse the generated content as JSON");}
      } else {_throw new Error("Could not extract JSON from the generated content");}
    }

    // Apply the generated content to the template or return it directly
    return new Response(JSON.stringify(generatedContent), {_headers: { ...corsHeaders, _"Content-Type": "application/json"}});
  } catch (error) {_return new Response(JSON.stringify({ error: error.message}), {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"}});
  }
}),
