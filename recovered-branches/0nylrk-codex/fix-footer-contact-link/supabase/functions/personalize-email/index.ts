
=======
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");


const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Get personalization request data

      throw new Error("Missing required parameters: emailType and userData")
    }
    // Create a prompt based on the email type and user data

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      default:
        userPrompt = `Create a re-engagement email for a user named ${userData && userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`
    }
    // Add subject line request to the prompt

    // Call OpenAI API to generate personalized content
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

      body: JSON.stringify({
        model: "gpt-4o-mini"
        messages: [

        messages: [

import "https: //deno.land / x/xhr@0.1.0 / mod.ts",
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';
const openAIApiKey = Deno.env.get ("OPENAI_API_KEY");
;
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    // Get personalization request data;
    const {
      email_type,
      user_data,
      activity_data;
      template = {}
    } = await req.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Missing required parameters: email_type and user_data");
    }
    // Create a prompt based on the email type and user data;
    let system_prompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.";
    let user_prompt = "";
;
    // Subject line context;
    let subject_context = "";
;
    switch (email_type) {
      case "welcome_series":;
        user_prompt = `Create a welcome email for a new ${user_data.user_type === "talent" ? "talent / professional" : "client / employer"} named ${user_data.first_name}. The email should introduce them to the platform and guide them through their next steps.`;
        break;
;
      case "inactivity_reminder":;
        user_prompt = `Create a re - engagement email for a ${user_data.user_type === "talent" ? "talent / professional" : "client / employer"} named ${user_data.first_name} who has been inactive for ${activity_data.days_inactive} days. They haven't completed their ${activity_data.incomplete_action}.`;
        subject_context = "Make the subject line attention - grabbing but not pushy, focusing on the benefits of returning to the platform.";
        break;
;
      case "job_application":;
        user_prompt = `Create an email encouraging a talent named ${user_data.first_name} who hasn't applied to any jobs yet. Their skills are: ${user_data.skills ? user_data.skills.join (", ") : "AI - related skills"}. Encourage them to complete their profile and apply to relevant positions.`;
        subject_context = "Create a subject line that emphasizes opportunity and personal growth.";
        break;
;
      case "profile_completion":;
        user_prompt = `Create an email for ${user_data.first_name} reminding them to complete their profile. They have completed ${user_data.profile_completion || 0}% of their profile. Focus on how a complete profile increases visibility.`;
        subject_context = "Create a short, motivational subject line about profile completion.";
        break;
;
      default:;
        user_prompt = `Create a re - engagement email for a user named ${user_data.first_name} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`;
    }
    // Add subject line request to the prompt;
    user_prompt += `\n\n${subject_context || "Create an engaging subject line for this email."}\n\n_respond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "main_content": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`;
;
    // Call OpenAI API to generate personalized content;
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content - Type": "application / json"}
      body: JSON.stringify ({
        model: "gpt - 4o - mini",
        messages: [;
          { role: "system", content: system_prompt }
          { role: "user", content: user_prompt }

        ];


          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7})}),



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    // Parse the JSON response from OpenAI
    let generatedContent;
    try {
      generatedContent = JSON && JSON.parse(generatedContentText)
    } catch (e) {
      console && console.error("Failed to parse GPT response as JSON:", e);
      console && console.log("Raw response:", generatedContentText);
      // Try to extract JSON using regex as fallback
      const jsonMatch = generatedContentText && generatedContentText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          generatedContent = JSON && JSON.parse(jsonMatch[0])
        } catch (e2) {
          throw new Error ("Could not parse the generated content as JSON");
        }
      } else {
        throw new Error ("Could not extract JSON from the generated content");
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
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
