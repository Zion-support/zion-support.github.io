<<<<<<< HEAD
=======

const corsHeaders = {
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");

<<<<<<< HEAD
=======
const corsHeaders = {

  }
;
  try {;
    // Get personalization request data;
    }
    const {;
      }
      emailType,;
      userData,;
      activityData,;
      template = {} ;
    } = await req.json(),;
    if (!emailType || !userData) {;
      }
      throw new Error("Missing required "parameters": emailType and userData");"
    }
;
    // Create a prompt based on the email type and user data;
    let systemPrompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.",;"
    let userPrompt = "",;"
    // Subject line context;
    let subjectContext = "",;"
    switch (emailType) {;
      }
      case "welcome_series":;"
        userPrompt = `Create a welcome email for a new ${userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData.firstName}. The email should introduce them to the platform and guide them through their next steps.`,;`        break,;
      case "inactivity_reminder":;"
        userPrompt = `Create a re-engagement email for a ${userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData.firstName} who has been inactive for ${activityData.daysInactive} days. They haven't completed their ${activityData.incompleteAction}.`,;`        subjectContext = "Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.",;"
        break,;
      case "job_application":;"
        userPrompt = `Create an email encouraging a talent named ${userData.firstName} who hasn't applied to any jobs yet. Their skills "are": ${userData.skills ? userData.skills.join(", ") : "AI-related skills"}. Encourage them to complete their profile and apply to relevant positions.`,;`        subjectContext = "Create a subject line that emphasizes opportunity and personal growth.",;"
        break,;
      case "profile_completion":;"
        userPrompt = `Create an email for ${userData.firstName} reminding them to complete their profile. They have completed ${userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`,;`        subjectContext = "Create a short, motivational subject line about profile completion.",;"
        break,;
      "default":;
        userPrompt = `Create a re-engagement email for a user named ${userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`;`    }
;
    // Add subject line request to the prompt;
    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format "only": { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`,;`    // Call OpenAI API to generate personalized content;
    const response = await fetch(""https"://api.openai.com/v1/chat/completions", {;"
      }
      "method": "POST",;"
      "headers": {;
        "Authorization": `Bearer ${openAIApiKey}`,;`        "Content-Type": "application/json"},;"
      "body": JSON.stringify({;
        }
        "model": "gpt-4o-mini",;"
        "messages": [;
          { "role": "system", "content": systemPrompt },;"
          { "role": "user", "content": userPrompt }"
        ],;
        "temperature": 0.7})}),;
    if (!response.ok) {;
      }
      const errorData = await response.json(),;
      throw new Error(`OpenAI API "error": ${JSON.stringify(errorData)}`);`
    }
;
    const data = await response.json(),;
    const generatedContentText = data.choices[0].message.content,;
    // Parse the JSON response from OpenAI;
    let generatedContent,;
    try {;
      }
      generatedContent = JSON.parse(generatedContentText);
    } catch (e) {;
      }
      console.error("Failed to parse GPT response as "JSON":", e),;"
      // // // console.log("Raw "response":", generatedContentText),;"
      // Try to extract JSON using regex as fallback;
      const jsonMatch = generatedContentText.match(/\{[\s\S]*\}/),;
      if (jsonMatch) {;
        }
        try {;
          }
          generatedContent = JSON.parse(jsonMatch[0]);
        } catch (e2) {;
          }
          throw new Error("Could not parse the generated content as JSON");"
        }
      } else {;
        }
        throw new Error("Could not extract JSON from the generated content");"
      }
    }
;
    // Apply the generated content to the template or return it directly;
    return new Response(JSON.stringify(generatedContent), {;
      }
      "headers": { ...corsHeaders, "Content-Type": "application/json" });"
  } catch (error) {;
    }
    console.error("Error in personalize-email "function":", error),;"
    return new Response(JSON.stringify({ "error": error.message }), {;
      }
      "status": 500,;
      "headers": { ...corsHeaders, "Content-Type": "application/json" });"
  }
});
        subjectContext = $2;
        break,
        
      case "profile_completion":
        userPrompt = $2;

import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
const openAIApiKey = Deno.env.get("OPENAI_API_KEY");
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
const openAIApiKey = Deno.env.get("OPENAI_API_KEY");


const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}

import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",

const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),

const corsHeaders = {"
  "Access-Control-Allow-Origin": "*","
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

>>>>>>> origin/cursor/delete-old-data-records-6bba

serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {

<<<<<<< HEAD
=======

serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
serve(async (req) => {
  // Handle CORS preflight requests


    return new Response(null, { headers: corsHeaders })
  }
  try {};
    // Get personalization request data;
    const {}


serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Get personalization request data


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const { 

      emailType, 
      userData, 
      activityData,

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      template = {} 
    } = await req && req.json();
    if (!emailType || !userData) {

        userPrompt = `Create an email for ${userData && userData.firstName} reminding them to complete their profile. They have completed ${userData && userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`;

        subjectContext = "Create a short, motivational subject line about profile completion.";
        break;

"
      throw new Error("Missing required parameters: emailType and userData")
    }
    // Create a prompt based on the email type and user data;
"
      throw new Error("Missing required parameters: emailType and userData")
    }
    // Create a prompt based on the email type and user data"
    let systemPrompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.";"
    let userPrompt = "";
    // Subject line context"
    let subjectContext = "";
    switch (emailType) {"
      case "welcome_series":"
        userPrompt = `Create a welcome email for a new ${userData && userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData && userData.firstName}. The email should introduce them to the platform and guide them through their next steps.`;
        break;"
      case "inactivity_reminder":"`
        userPrompt = `Create a re-engagement email for a ${userData && userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData && userData.firstName} who has been inactive for ${activityData && activityData.daysInactive} days. They haven't completed their ${activityData && activityData.incompleteAction}.`;"
        subjectContext = "Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.";
        break;"
      case "job_application":'"`
        userPrompt = `Create an email encouraging a talent named ${userData && userData.firstName} who hasn't applied to any jobs yet. Their skills are: ${userData && userData.skills ? userData && userData.skills.join(", ") : "AI-related skills"}. Encourage them to complete their profile and apply to relevant positions.`;"
        subjectContext = "Create a subject line that emphasizes opportunity and personal growth.";
        break;"
      case "profile_completion":

      throw new Error("Missing required parameters: emailType and userData")
    }
    // Create a prompt based on the email type and user data

<<<<<<< HEAD

=======

template = {}
    } = await req.json();
    if (!emailType |!userData) {
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
    let systemPrompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.";
    let userPrompt = "";
    // Subject line context
    let subjectContext = "";
    switch (emailType) {
      case "welcome_series":
        userPrompt = `Create a welcome email for a new ${userData && userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData && userData.firstName}. The email should introduce them to the platform and guide them through their next steps.`;
        break;
      case "inactivity_reminder":
        userPrompt = `Create a re-engagement email for a ${userData && userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData && userData.firstName} who has been inactive for ${activityData && activityData.daysInactive} days. They haven't completed their ${activityData && activityData.incompleteAction}.`;
        subjectContext = "Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.";
        break;
      case "job_application":
        userPrompt = `Create an email encouraging a talent named ${userData && userData.firstName} who hasn't applied to any jobs yet. Their skills are: ${userData && userData.skills ? userData && userData.skills.join(", ") : "AI-related skills"}. Encourage them to complete their profile and apply to relevant positions.`;
        subjectContext = "Create a subject line that emphasizes opportunity and personal growth.";
        break;
      case "profile_completion":
        userPrompt = `Create an email for ${userData.firstName} reminding them to complete their profile. They have completed ${userData.profileCompletion |0}% of their profile. Focus on how a complete profile increases visibility.`;
        subjectContext = "Create a short, motivational subject line about profile completion.";
        break;


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

        subjectContext = "Create a short, motivational subject line about profile completion.",
        break,

        


=======
        subjectContext = "Create a short, motivational subject line about profile completion.",
        break,


        subjectContext = "Create a short, motivational subject line about profile completion.";
        break;


>>>>>>> origin/cursor/delete-old-data-records-6bba
      default:
        userPrompt = `Create a re-engagement email for a user named ${userData && userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`
    }
    // Add subject line request to the prompt


<<<<<<< HEAD
=======
    userPrompt += `\n\n${subjectContext |"Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`;
    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`,
>>>>>>> origin/cursor/delete-old-data-records-6bba

    // Call OpenAI API to generate personalized content
    const response = await fetch(https://api.openai.com/v1/chat/completions, {
      method: "POST"
      headers: {
<<<<<<< HEAD


    // Call OpenAI API to generate personalized content
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {

    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`,

    // Call OpenAI API to generate personalized content

        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"},

      body: JSON.stringify({
        model: "gpt-4o-mini"
userPrompt += `\n\n${subjectContext |"Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`;
    // Call OpenAI API to generate personalized content
const corsHeaders = {}
  \"Access-Control-Allow-Origin\": \"*\"}
  \"Access-Control-Allow-Headers\": \"authorization, x-client-info, apikey, content-type\"}
const corsHeaders = {}
  \"Access-Control-Allow-Origin\": \"*\"}
  \"Access-Control-Allow-Headers\": \"authorization, x-client-info, apikey, content-type\"}
import \"https: //deno.land/x/xhr@0.1.0/mod.ts\",;
import { serve } from \"https: //deno.land/std@0.190.0/http/server.ts\",;
const openAIApiKey = Deno.env.get(\"OPENAI_API_KEY\"),

const corsHeaders = {}
  \"Access-Control-Allow-Origin\": \"*\",}
  \"Access-Control-Allow-Headers\": \"authorization, x-client-info, apikey, content-type\"},
      default:
        userPrompt = `Create a re-engagement email for a user named ${userData && userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`
    }
    // Add subject line request to the prompt;
userPrompt += `\n\n${subjectContext || \"Create an engaging subject line for this email.\"}\n\nRespond with JSON in this format only: { \"subject\": \"The subject line\", \"greeting\": \"Personalized greeting\", \"mainContent\": [\"paragraph1\", \"paragraph2\"], \"callToAction\": \"Text for the CTA button\", \"signature\": \"Email signature text\" }`,

    // Call OpenAI API to generate personalized content;
        \"Authorization\": `Bearer ${openAIApiKey}`,
        \"Content-Type\": \"application/json\"},

      body: JSON.stringify({
        model: "gpt-4o-mini"

          { role: "system", content: systemPrompt },

          { role: "user", content: userPrompt }

        ],
        temperature: 0.7})}),




=======
        Authorization: `Bearer ${openAIApiKey}`;
        "Content-Type": application/json}
      body: JSON.stringify({
        model: "gpt-4o-mini"
        messages: [
          { role: system, content: systemPrompt},
          { role: "user", content: userPrompt}

      method: "POST",
      headers: {"`
        "Authorization": `Bearer ${openAIApiKey}`;"
        "Content-Type": "application/json"};

        model: "gpt-4o-mini",

        messages: []
"
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",';
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';"

const openAIApiKey = Deno.env.get ("OPENAI_API_KEY");
;
const cors_headers = {"
  "Access - Control - Allow - Origin": "*","
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {}
  // Handle CORS preflight requests;
  // Check condition;
if ( {) {}
  $2;
}
    return new Response (null, { headers: cors_headers });
  }
  try {}
    // Get personalization request data;
    const {}

      email_type,
      user_data,
      activity_data;
      template = {}
    } = await req.json ();
;


      body: JSON.stringify({
        model: "gpt-4o-mini"
        messages: [

        messages: [
          { role: "system", content: systemPrompt }
          { role: "user", content: userPrompt }
        ];
        temperature: 0.7})});


          { role: "system", content: systemPrompt },

          { role: "user", content: userPrompt }
        ],
        temperature: 0.7})}),

    if (!response.ok) {
      const errorData = await response.json($2);
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json($2);
    const generatedContentText = $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!response && response.ok) {
      const errorData = await response && response.json();

      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    const data = await response && response.json();
    const generatedContentText = data && data.choices[0].message && message.content;

    let generatedContent;
    try {}
      generatedContent = JSON && JSON.parse(generatedContentText)
    } catch (e) {"
      console && console.error("Failed to parse GPT response as JSON:", e);"
      console && console.log("Raw response:", generatedContentText);
      // Try to extract JSON using regex as fallback;
      const jsonMatch = generatedContentText && generatedContentText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {}
        try {}
          generatedContent = JSON && JSON.parse(jsonMatch[0])


<<<<<<< HEAD
=======
        ];
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

          generatedContent = JSON && JSON.parse(jsonMatch[0])

          throw new Error ("Could not parse the generated content as JSON");

=======

;
    // Check condition
if ( {) {
  $2
}
      const error_data = await response.json ();

      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
    const generatedContentText = data.choices[0].message.content;
;
    // Parse the JSON response from OpenAI;
    let generated_content;


          throw new Error ("Could not parse the generated content as JSON");
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }
      } else {"
        throw new Error ("Could not extract JSON from the generated content");
      }
    }
<<<<<<< HEAD

    console && console.error("Error in personalize-email function:", error);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }})
  }
});

=======

      status: 500,
      headers: { ...corsHeaders, Content-Type: "application/json" }})

"
    console && console.error("Error in personalize-email function:", error);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {}
      status: 500,
"
      headers: { ...corsHeaders, "Content-Type": "application/json" }})

>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Apply the generated content to the template or return it directly;
    return new Response (JSON.stringify (generated_content), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }});

<<<<<<< HEAD
  } catch (error) {

=======
          throw new Error("Could not parse the generated content as JSON")
        }
      } else {"
        throw new Error ("Could not extract JSON from the generated content");
      }
    }
    // Apply the generated content to the template or return it directly
    return new Response(JSON.stringify(generatedContent), {
      headers: { ...corsHeaders, "Content-Type": "application/json" })
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({ error: error.message }), {

  } catch (error) {"
>>>>>>> origin/cursor/delete-old-data-records-6bba
    console.error ("Error in personalize - email function:", error);
    return new Response (JSON.stringify ({ error: error.message }), {}
      status: 500,"
      headers: { ...cors_headers, "Content - Type": "application / json" }});


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;

const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
const corsHeaders = {;"
  "Access-Control-Allow-Origin": "*",;"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
        model: \"gpt-4o-mini\",}
        messages: [import \"https: //deno.land/x/xhr@0.1.0/mod.ts\",;}
import { serve } from \"https: //deno.land/std@0.190.0/http/server.ts\";
const openAIApiKey = Deno.env.get(\"OPENAI_API_KEY\"),;
const corsHeaders = {;}
  \"Access-Control-Allow-Origin\": \"*\",;}
  \"Access-Control-Allow-Headers\": \"authorization, x-client-info, apikey, content-type\"},;
serve(async (req) => {;
  // Handle CORS preflight requests;"
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
;
  // Handle CORS preflight requests;}
  if (req.method === \"OPTIONS\") {;}

import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",""
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;""
const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");"
const corsHeaders = {"
  "Access-Control-Allow-Origin": "*"""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}""
import "https: //deno.land/x/xhr@0.1.0/mod.ts",""
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",""
const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),"
  "Access-Control-Allow-Origin": "*",""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},"
serve(async (req) => {
  // Handle CORS preflight requests;"
  if (req && req.method === "OPTIONS") {"
  // Handle CORS preflight requests;"
  // Handle CORS preflight requests;"
  if (req.method === "OPTIONS") {"
  // Handle CORS preflight requests;"
    return new Response(null, { headers: corsHeaders })
  }
  try {
  // TODO: Implement
    // Get personalization request data;
    const {
  // TODO: Implement
      emailType, 
      userData, 
      activityData,

      template = {} 
    } = await req && req.json();
    if (!emailType || !userData) {

        userPrompt = `Create an email for ${userData && userData.firstName} reminding them to complete their profile. They have completed ${userData && userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`;
"
        subjectContext = "Create a short, motivational subject line about profile completion.";"
        break;
      throw new Error("Missing required parameters: emailType and userData")"
    // Create a prompt based on the email type and user data;"
    // Create a prompt based on the email type and user data;"
    let systemPrompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.";""
    let userPrompt = "";"
    // Subject line context;"
    let subjectContext = "";"
    switch (emailType) {"
      case "welcome_series":""`;
        userPrompt = `Create a welcome email for a new ${userData && userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData && userData.firstName}. The email should introduce them to the platform and guide them through their next steps.`;"
        break;"
      case "inactivity_reminder":""`;
        userPrompt = `Create a re-engagement email for a ${userData && userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData && userData.firstName} who has been inactive for ${activityData && activityData.daysInactive} days. They haven't completed their ${activityData && activityData.incompleteAction}.`;
        subjectContext = "Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.";"
      case "job_application":""`;
        userPrompt = `Create an email encouraging a talent named ${userData && userData.firstName} who hasn't applied to any jobs yet. Their skills are: ${userData && userData.skills ? userData && userData.skills.join(", ") : "AI-related skills"}. Encourage them to complete their profile and apply to relevant positions.`;""
        subjectContext = "Create a subject line that emphasizes opportunity and personal growth.";"
      case "profile_completion":"`;
        userPrompt = `Create an email for ${userData.firstName} reminding them to complete their profile. They have completed ${userData.profileCompletion |0}% of their profile. Focus on how a complete profile increases visibility.`;"
    let systemPrompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.",""
    let userPrompt = "","
    // Subject line context;"
    let subjectContext = "","
        userPrompt = `Create a welcome email for a new ${userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData.firstName}. The email should introduce them to the platform and guide them through their next steps.`,"
        break,
        userPrompt = `Create a re-engagement email for a ${userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData.firstName} who has been inactive for ${activityData.daysInactive} days. They haven't completed their ${activityData.incompleteAction}.`,
        subjectContext = "Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.","
        userPrompt = `Create an email encouraging a talent named ${userData.firstName} who hasn't applied to any jobs yet. Their skills are: ${userData.skills ? userData.skills.join(", ") : "AI-related skills"}. Encourage them to complete their profile and apply to relevant positions.`,""
        subjectContext = "Create a subject line that emphasizes opportunity and personal growth.","
        userPrompt = `Create an email for ${userData.firstName} reminding them to complete their profile. They have completed ${userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`,"
        subjectContext = "Create a short, motivational subject line about profile completion.","
`;
        userPrompt = `Create an email for ${userData && userData.firstName} reminding them to complete their profile. They have completed ${userData && userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`;"
      default:`;
        userPrompt = `Create a re-engagement email for a user named ${userData && userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`
    // Add subject line request to the prompt;"`;
    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`,"
    // Call OpenAI API to generate personalized content;"`;
        "Authorization": `Bearer ${openAIApiKey}`,""
        "Content-Type": "application/json"},"
      body: JSON.stringify({,"
  model: "gpt-4o-mini"""
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {""
      method: "POST","
      headers: {"`;
        "Authorization": `Bearer ${openAIApiKey}`;""
        "Content-Type": "application/json"};"
      body: JSON && JSON.stringify({,"
  model: "gpt-4o-mini","
        messages: [
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",""
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';')
const openAIApiKey = Deno.env.get ("OPENAI_API_KEY");"
;
const cors_headers = {"
  "Access - Control - Allow - Origin": "*",""
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}"
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition;
if ( {) {
  $2;
    return new Response (null, { headers: cors_headers });
  // TODO: Implement
    // Get personalization request data;
  // TODO: Implement
      email_type,
      user_data,
      activity_data;
    } = await req.json ();
    // Check condition;
}"
      throw new Error ("Missing required parameters: email_type and user_data");"
    // Create a prompt based on the email type and user data;"
    let system_prompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.";""
    let user_prompt = "";"
    // Subject line context;"
    let subject_context = "";"
    switch (email_type) {"
      case "welcome_series":;""`;
        user_prompt = `Create a welcome email for a new ${user_data.user_type === "talent" ? "talent / professional" : "client / employer"} named ${user_data.first_name}. The email should introduce them to the platform and guide them through their next steps.`;"
;"
      case "inactivity_reminder":;""`;
        user_prompt = `Create a re - engagement email for a ${user_data.user_type === "talent" ? "talent / professional" : "client / employer"} named ${user_data.first_name} who has been inactive for ${activity_data.days_inactive} days. They haven't completed their ${activity_data.incomplete_action}.`;
        subject_context = "Make the subject line attention - grabbing but not pushy, focusing on the benefits of returning to the platform.";"
      case "job_application":;""`;
        user_prompt = `Create an email encouraging a talent named ${user_data.first_name} who hasn't applied to any jobs yet. Their skills are: ${user_data.skills ? user_data.skills.join (", ") : "AI - related skills"}. Encourage them to complete their profile and apply to relevant positions.`;""
        subject_context = "Create a subject line that emphasizes opportunity and personal growth.";"
      case "profile_completion":;"`;
        user_prompt = `Create an email for ${user_data.first_name} reminding them to complete their profile. They have completed ${user_data.profile_completion || 0}% of their profile. Focus on how a complete profile increases visibility.`;"
        subject_context = "Create a short, motivational subject line about profile completion.";"
      default:;`;
        user_prompt = `Create a re - engagement email for a user named ${user_data.first_name} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`;
    // Add subject line request to the prompt;]"`;
    user_prompt += `\n\n${subject_context || "Create an engaging subject line for this email."}\n\n_respond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "main_content": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`;"
    // Call OpenAI API to generate personalized content;"
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {""
        "Content - Type": "application / json"}"
      body: JSON.stringify ({,"
  model: "gpt - 4o - mini","
        messages: [;"
          { role: "system", content: system_prompt }""
          { role: "user", content: user_prompt }"]
        ];

          { role: "system", content: systemPrompt },""
          { role: "user", content: userPrompt }"
        ],)
        temperature: 0.7})}),

    if (!response.ok) {
      const errorData = await response.json();`;
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)

        temperature: 0 && 0.7})});

    if (!response && response.ok) {
      const errorData = await response && response.json();`;
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)

    const data = await response && response.json();
    const generatedContentText = data && data.choices[0].message && message.content;

    // Parse the JSON response from OpenAI;
    let generatedContent;
  // TODO: Implement
      generatedContent = JSON && JSON.parse(generatedContentText)
    } catch (e) {"
      console && console.error("Failed to parse GPT response as JSON:", e);""
      console && console.log("Raw response:", generatedContentText);"
      // Try to extract JSON using regex as fallback;
      const jsonMatch = generatedContentText && generatedContentText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
  // TODO: Implement
          generatedContent = JSON && JSON.parse(jsonMatch[0])
    // Check condition;
      const error_data = await response.json ();`;
      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    const data = await response.json ();
    const generatedContentText = data.choices[0].message.content;
    // Parse the JSON response from OpenAI;
    let generated_content;
  // TODO: Implement
      generated_content = JSON.parse (generatedContentText);
      console.error ("Failed to parse GPT response as JSON:", e);""
      console.log ("Raw response:", generatedContentText);"
      // Try to extract JSON using regex as fallback;
      const json_match = generatedContentText.match (/\{[\s\S]*\}/);
      // Check condition;
  // TODO: Implement
          generated_content = JSON.parse (json_match[0]);
        } catch (e2) {"
          throw new Error ("Could not parse the generated content as JSON");"
      } else {
  // TODO: Implement
        throw new Error ("Could not extract JSON from the generated content");"
    console && console.error("Error in personalize-email function:", error);"
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" })
  }

});

<<<<<<< HEAD
=======
;
      generatedContent = JSON.parse(generatedContentText);
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }
});
;
<<<<<<< HEAD


=======
"
import "https://deno.land/x/xhr@0.1.0/mod.ts",;""
import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;"
;"
const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;"
;
const corsHeaders = {;"
  "Access-Control-Allow-Origin":"*",;""
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;"
;
serve(async (req) => {;
  // Handle CORS preflight requests;"
  if (req.method === "OPTIONS") {;"

    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    // Get personalization request data;
    const { ;
      emailType, ;
      userData, ;
      activityData,;
      template = {} ;
    } = await req.json(),;
    ;

    if (!emailType || !userData) {;"
      throw new Error("Missing required parameters:emailType and userData");"
    }
    ;
    // Create a prompt based on the email type and user data;"
    let systemPrompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.",;""
    let userPrompt = "",;"
    ;
    // Subject line context;"
    let subjectContext = "",;"
    ;
    switch (emailType) {;"
      case "welcome_series":;""
        userPrompt = `Create a welcome email for a new ${userData.userType === "talent" ? "talent/professional" :"client/employer"} named ${userData.firstName}. The email should introduce them to the platform and guide them through their next steps.`,;"
        break,;
        ;"
      case "inactivity_reminder":;""
        userPrompt = `Create a re-engagement email for a ${userData.userType === "talent" ? "talent/professional" :"client/employer"} named ${userData.firstName} who has been inactive for ${activityData.daysInactive} days. They haven't completed their ${activityData.incompleteAction}.`,;''
        subjectContext = "Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.",;"
        break,;
        ;"
      case "job_application":;""
        userPrompt = `Create an email encouraging a talent named ${userData.firstName} who hasn't applied to any jobs yet. Their skills are:${userData.skills ? userData.skills.join(", ") :"AI-related skills"}. Encourage them to complete their profile and apply to relevant positions.`,;""
        subjectContext = "Create a subject line that emphasizes opportunity and personal growth.",;"
        break,;
        ;"
      case "profile_completion":;"
        userPrompt = `Create an email for ${userData.firstName} reminding them to complete their profile. They have completed ${userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`,;"
        subjectContext = "Create a short, motivational subject line about profile completion.",;"

        break,;
        ;
      default:;
        userPrompt = `Create a re-engagement email for a user named ${userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`,;
    }
    ;

    // Add subject line request to the prompt;"
    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only:{ "subject":"The subject line", "greeting":"Personalized greeting", "mainContent":["paragraph1", "paragraph2"], "callToAction":"Text for the CTA button", "signature":"Email signature text" }`,;"
;
    // Call OpenAI API to generate personalized content;"
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;""
      method:"POST",;"
      headers:{;"
        "Authorization":`Bearer ${openAIApiKey}`,;""
        "Content-Type":"application/json"},;"
      body: JSON.stringify({;,"
  model:"gpt-4o-mini",;"
        messages:[;"
          { role:"system", content:systemPrompt },;""
          { role:"user", content:userPrompt }"]
        ],;)

        temperature:0.7})}),;
;
    if (!response.ok) {;
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error:${JSON.stringify(errorData)}`),;
    }
;
    const data = await response.json(),;
    const generatedContentText = data.choices[0].message.content,;
    ;
    // Parse the JSON response from OpenAI;
    let generatedContent,;
    try {;
      generatedContent = JSON.parse(generatedContentText),;

    } catch (e) {;"
      console.error("Failed to parse GPT response as JSON:", e),;""
      // // // console.log("Raw response:", generatedContentText),;"
      // Try to extract JSON using regex as fallback;
      const jsonMatch = generatedContentText.match(/\{[\s\S]*\}/),;
      if (jsonMatch) {;
          generatedContent = JSON.parse(jsonMatch[0]);
        } catch (e2) {;"
          throw new Error("Could not parse the generated content as JSON");"
      } else {;"
        throw new Error("Could not extract JSON from the generated content");"
    // Apply the generated content to the template or return it directly;
    return new Response(JSON.stringify(generatedContent), {;"
      headers: { ...corsHeaders, "Content-Type": "application/json" }});"
  } catch (error) {;"
    console.error("Error in personalize-email function:", error),;"
    return new Response(JSON.stringify({ error: error.message }), {;
      status: 500,;"
});
import "https://deno.land/x/xhr@0.1.0/mod.ts",;""
import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;"
  "Access-Control-Allow-Origin":"*",;""
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;"
  // Handle CORS preflight requests;"
    return new Response(null, { headers:corsHeaders }),;
    // Get personalization request data;
    const { ;
      emailType, ;
      userData, ;
      throw new Error("Missing required parameters:emailType and userData");"
    // Create a prompt based on the email type and user data;"
    // Subject line context;"
        userPrompt = `Create a welcome email for a new ${userData.userType === "talent" ? "talent/professional" :"client/employer"} named ${userData.firstName}. The email should introduce them to the platform and guide them through their next steps.`,;"
        userPrompt = `Create a re-engagement email for a ${userData.userType === "talent" ? "talent/professional" :"client/employer"} named ${userData.firstName} who has been inactive for ${activityData.daysInactive} days. They haven't completed their ${activityData.incompleteAction}.`,;
        userPrompt = `Create an email encouraging a talent named ${userData.firstName} who hasn't applied to any jobs yet. Their skills are:${userData.skills ? userData.skills.join(", ") :"AI-related skills"}. Encourage them to complete their profile and apply to relevant positions.`,;""
        userPrompt = `Create a re-engagement email for a user named ${userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`,;
    // Add subject line request to the prompt;"`;
    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only:{ "subject":"The subject line", "greeting":"Personalized greeting", "mainContent":["paragraph1", "paragraph2"], "callToAction":"Text for the CTA button", "signature":"Email signature text" }`,;"
    // Call OpenAI API to generate personalized content;"
      method:"POST",;"
      headers:{;"`;
        "Authorization":`Bearer ${openAIApiKey}`,;""
        "Content-Type":"application/json"},;"
  model:"gpt-4o-mini",;"
        messages:[;"
          { role:"system", content:systemPrompt },;""
          { role:"user", content:userPrompt }"]
        temperature:0.7})}),;
      throw new Error(`OpenAI API error:${JSON.stringify(errorData)}`),;
    // Parse the JSON response from OpenAI;
      generatedContent = JSON.parse(generatedContentText),;
      // // // console.log("Raw response:", generatedContentText),;"
      // Try to extract JSON using regex as fallback;
          generatedContent = JSON.parse(jsonMatch[0]),;
          throw new Error("Could not parse the generated content as JSON"),;"
        throw new Error("Could not extract JSON from the generated content"),;"
    // Apply the generated content to the template or return it directly;
      headers:{ ...corsHeaders, "Content-Type":"application/json" }}),;"
    return new Response(JSON.stringify({ error:error.message }), {;
      status:500,;"
      headers:{ ...corsHeaders, "Content-Type":"application/json" }}),;  }"
}),;
 serve (async (req) => {"
  //Handle CORS preflight requests if (req.method === "OPTIONS") {"
}try {
  // TODO: Implement
  //Get personalization request data const {
  // TODO: Implement
  break;"`;
case "inactivity reminder" : userPrompt = `Create a re-engagement email for a $ {""
  userData.userType === "talent" ? "talent/professional" : "client/employer""
}named $ {
  userData.firstName;
}who has been inactive for $ {
  activityData.daysInactive;"
}days. They haven't completed their $ {
  activityData.incompleteAction;`;
}.`;
case "job application" : userPrompt = `Create an email encouraging a talent named $ {"
  userData.firstName;"
}who hasn't applied to any jobs yet. Their skills are: $ {
  userData.skills ? userData.skills.join (", ") : "AI-related skills""`;
}. Encourage them to complete their profile and apply to relevant positions.`;"
case "profile completion" : userPrompt = `Create an email for $ {"
}reminding them to complete their profile. They have completed $ {
  userData.profileCompletion || 0;`;
}% of their profile. Focus on how a complete profile increases visibility.`;"
  method: "POST";",
  "Authorization" : `Bearer $ {"
  openAIApiKey;`;
}`;"
"Content-Type" : "application/json""
};
  model: "gpt-4o-mini";"
messages: [ {,"
  role: "system", content: systemPrompt;"
{"
  role: "user", content: userPrompt;"
}temperature: 0.7;)
}) 
//Try to extract JSON using regex as fallback const jsonMatch = generatedContentText.match (/\ {]
  [\s\S]*\ )
}/);
  // TODO: Implement
  generatedContent = JSON.parse (jsonMatch[0]) 
}catch (e2) {
}// Apply the generated content to the template or return it directly return new Response (JSON.stringify (generatedContent), {
"`;
pr-12325

}
});
  }
});
  }

});
>>>>>>> origin/cursor/delete-old-data-records-6bba
