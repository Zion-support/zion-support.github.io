<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
=======
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");


const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),
<<<<<<< HEAD
<<<<<<< HEAD
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
const openAIApiKey = Deno.env.get("OPENAI_API_KEY");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
=======

import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",";
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;"
const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");





const corsHeaders = {"
  "Access-Control-Allow-Origin": "*""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
"
import "https: //deno.land/x/xhr@0.1.0/mod.ts","
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

const corsHeaders = {"
  "Access-Control-Allow-Origin": "*","
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
=======
=======

serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


serve(async (req) => {}
  // Handle CORS preflight requests"
  if (req && req.method === "OPTIONS") {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return new Response(null, { headers: corsHeaders })
  }
  try {};
    // Get personalization request data;
    const {}
=======
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    // Get personalization request data

    const { 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      emailType, 
      userData, 
      activityData,

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      template = {} 
    } = await req && req.json();
    
    if (!emailType || !userData) {

        userPrompt = `Create an email for ${userData && userData.firstName} reminding them to complete their profile. They have completed ${userData && userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`;

        subjectContext = "Create a short, motivational subject line about profile completion.";
        break;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    const {
      emailType
      userData
      activityData;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
<<<<<<< HEAD
<<<<<<< HEAD
        userPrompt = `Create an email for ${userData.firstName} reminding them to complete their profile. They have completed ${userData.profileCompletion |0}% of their profile. Focus on how a complete profile increases visibility.`;
        subjectContext = "Create a short, motivational subject line about profile completion.";
        break;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

      throw new Error("Missing required parameters: emailType and userData")
    }
    // Create a prompt based on the email type and user data

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
        break,
        
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        userPrompt = `Create an email for ${userData && userData.firstName} reminding them to complete their profile. They have completed ${userData && userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`;
        subjectContext = "Create a short, motivational subject line about profile completion.";
        break;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

        userPrompt = `Create an email for ${userData && userData.firstName} reminding them to complete their profile. They have completed ${userData && userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`;
        subjectContext = "Create a short, motivational subject line about profile completion.";
        break;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      default:
        userPrompt = `Create a re-engagement email for a user named ${userData && userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`
    }
    // Add subject line request to the prompt
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      default:
        userPrompt = `Create a re-engagement email for a user named ${userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`
    }
    // Add subject line request to the prompt
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    userPrompt += `\n\n${subjectContext |"Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`;
    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

    // Call OpenAI API to generate personalized content
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`,



    // Call OpenAI API to generate personalized content


        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"},


      body: JSON.stringify({
        model: "gpt-4o-mini"
<<<<<<< HEAD
=======    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
=======



      default:`
        userPrompt = `Create a re-engagement email for a user named ${userData && userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`
    }
    // Add subject line request to the prompt;
"`
    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`,



    // Call OpenAI API to generate personalized content;
"`
        "Authorization": `Bearer ${openAIApiKey}`,"
        "Content-Type": "application/json"},


      body: JSON.stringify({"
        model: "gpt-4o-mini"
"
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      method: "POST",
      headers: {"`
        "Authorization": `Bearer ${openAIApiKey}`;"
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({"
        model: "gpt-4o-mini",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        messages: [
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      email_type,
      user_data,
      activity_data;
      template = {}
    } = await req.json ();
;
<<<<<<< HEAD
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("Missing required parameters: email_type and user_data");
    }
    // Create a prompt based on the email type and user data;"
    let system_prompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.";"
    let user_prompt = "";
;
    // Subject line context;"
    let subject_context = "";
;
    switch (email_type) {"
      case "welcome_series":;"`
        user_prompt = `Create a welcome email for a new ${user_data.user_type === "talent" ? "talent / professional" : "client / employer"} named ${user_data.first_name}. The email should introduce them to the platform and guide them through their next steps.`;
        break;
;"
      case "inactivity_reminder":;'"`
        user_prompt = `Create a re - engagement email for a ${user_data.user_type === "talent" ? "talent / professional" : "client / employer"} named ${user_data.first_name} who has been inactive for ${activity_data.days_inactive} days. They haven't completed their ${activity_data.incomplete_action}.`;"
        subject_context = "Make the subject line attention - grabbing but not pushy, focusing on the benefits of returning to the platform.";
        break;
;"
      case "job_application":;'"`
        user_prompt = `Create an email encouraging a talent named ${user_data.first_name} who hasn't applied to any jobs yet. Their skills are: ${user_data.skills ? user_data.skills.join (", ") : "AI - related skills"}. Encourage them to complete their profile and apply to relevant positions.`;"
        subject_context = "Create a subject line that emphasizes opportunity and personal growth.";
        break;
;"
      case "profile_completion":;`
        user_prompt = `Create an email for ${user_data.first_name} reminding them to complete their profile. They have completed ${user_data.profile_completion || 0}% of their profile. Focus on how a complete profile increases visibility.`;"
        subject_context = "Create a short, motivational subject line about profile completion.";
        break;
;
      default:;`
        user_prompt = `Create a re - engagement email for a user named ${user_data.first_name} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`;
    }
    // Add subject line request to the prompt;"`
    user_prompt += `\n\n${subject_context || "Create an engaging subject line for this email."}\n\n_respond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "main_content": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`;
;
    // Call OpenAI API to generate personalized content;"
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {"
      method: "POST",
      headers: {"`
        "Authorization": `Bearer ${openAIApiKey}`;"
        "Content - Type": "application / json"}
      body: JSON.stringify ({"
        model: "gpt - 4o - mini",
        messages: [;"
          { role: "system", content: system_prompt }"
          { role: "user", content: user_prompt }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        ];


=======
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"}
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"},
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      body: JSON.stringify({
        model: "gpt-4o-mini"
        messages: [

        messages: [
          { role: "system", content: systemPrompt }
          { role: "user", content: userPrompt }
        ];
        temperature: 0.7})});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          { role: "system", content: systemPrompt },
=======
"
          { role: "system", content: systemPrompt },"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7})}),



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        temperature: 0 && 0.7})});



<<<<<<< HEAD

    if (!response && response.ok) {}
      const errorData = await response && response.json();`
=======
    if (!response && response.ok) {
      const errorData = await response && response.json();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }

    const data = await response && response.json();
    const generatedContentText = data && data.choices[0].message && message.content;
<<<<<<< HEAD


        ];
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Parse the JSON response from OpenAI
=======

    // Parse the JSON response from OpenAI;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
;
    // Check condition;
if ( {) {}
  $2;
}
      const error_data = await response.json ();`
=======
    



        ];
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
;
    // Check condition
if ( {) {
  $2
}
      const error_data = await response.json ();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
    const generatedContentText = data.choices[0].message.content;
;
    // Parse the JSON response from OpenAI;
    let generated_content;
<<<<<<< HEAD
    try {}
      generated_content = JSON.parse (generatedContentText);
    } catch (e) {"
      console.error ("Failed to parse GPT response as JSON:", e);"
      console.log ("Raw response:", generatedContentText);
      // Try to extract JSON using regex as fallback;
      const json_match = generatedContentText.match (/\{[\s\S]*\}/);
      // Check condition;
if ( {) {}
  $2;
}
        try {}
          generated_content = JSON.parse (json_match[0]);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        } catch (e2) {
=======
        } catch (e2) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          throw new Error ("Could not parse the generated content as JSON");
        }
      } else {"
        throw new Error ("Could not extract JSON from the generated content");
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
    console && console.error("Error in personalize-email function:", error);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {}
      status: 500,
"
      headers: { ...corsHeaders, "Content-Type": "application/json" }})




    // Apply the generated content to the template or return it directly;
    return new Response (JSON.stringify (generated_content), {"
      headers: { ...cors_headers, "Content - Type": "application / json" }});
  } catch (error) {"
    console.error ("Error in personalize - email function:", error);
    return new Response (JSON.stringify ({ error: error.message }), {}
      status: 500,"
      headers: { ...cors_headers, "Content - Type": "application / json" }});


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  }
});

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
=======
        messages: [import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        messages: [import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    try {
      generated_content = JSON.parse (generatedContentText);
    } catch (e) {
      console.error ("Failed to parse GPT response as JSON:", e);
      console.log ("Raw response:", generatedContentText);
      // Try to extract JSON using regex as fallback;
      const json_match = generatedContentText.match (/\{[\s\S]*\}/);
      // Check condition
if ( {) {
  $2
}
        try {
          generated_content = JSON.parse (json_match[0]);
        } catch (e2) {
          throw new Error ("Could not parse the generated content as JSON");
        }
      } else {
        throw new Error ("Could not extract JSON from the generated content");
      }
    }

    console && console.error("Error in personalize-email function:", error);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      status: 500,

      headers: { ...corsHeaders, "Content-Type": "application/json" }})

    // Apply the generated content to the template or return it directly;
    return new Response (JSON.stringify (generated_content), {
      headers: { ...cors_headers, "Content - Type": "application / json" }});
  } catch (error) {
    console.error ("Error in personalize - email function:", error);
    return new Response (JSON.stringify ({ error: error.message }), {
      status: 500,
      headers: { ...cors_headers, "Content - Type": "application / json" }});


import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
=======
"
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
const corsHeaders = {;"
  "Access-Control-Allow-Origin": "*",;"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  // Handle CORS preflight requests;"
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    // Get personalization request data;
    const {;
      emailType,;
      userData,;
      activityData,;
      template = {} ;
    } = await req.json(),;
    if (!emailType || !userData) {;"
      throw new Error("Missing required parameters: emailType and userData");
    }
;
    // Create a prompt based on the email type and user data;"
    let systemPrompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.",;"
    let userPrompt = "",;
    // Subject line context;"
    let subjectContext = "",;
    switch (emailType) {;"
      case "welcome_series":;"`
        userPrompt = `Create a welcome email for a new ${userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData.firstName}. The email should introduce them to the platform and guide them through their next steps.`,;
        break,;"
      case "inactivity_reminder":;'"`
        userPrompt = `Create a re-engagement email for a ${userData.userType === "talent" ? "talent/professional" : "client/employer"} named ${userData.firstName} who has been inactive for ${activityData.daysInactive} days. They haven't completed their ${activityData.incompleteAction}.`,;"
        subjectContext = "Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.",;
        break,;"
      case "job_application":;'"`
        userPrompt = `Create an email encouraging a talent named ${userData.firstName} who hasn't applied to any jobs yet. Their skills are: ${userData.skills ? userData.skills.join(", ") : "AI-related skills"}. Encourage them to complete their profile and apply to relevant positions.`,;"
        subjectContext = "Create a subject line that emphasizes opportunity and personal growth.",;
        break,;"
      case "profile_completion":;`
        userPrompt = `Create an email for ${userData.firstName} reminding them to complete their profile. They have completed ${userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`,;"
        subjectContext = "Create a short, motivational subject line about profile completion.",;
        break,;
      default:;`
        userPrompt = `Create a re-engagement email for a user named ${userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`;
    }
;
    // Add subject line request to the prompt;"`
    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only: { "subject": "The subject line", "greeting": "Personalized greeting", "mainContent": ["paragraph1", "paragraph2"], "callToAction": "Text for the CTA button", "signature": "Email signature text" }`,;
    // Call OpenAI API to generate personalized content;"
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;"
      method: "POST",;
      headers: {;"`
        "Authorization": `Bearer ${openAIApiKey}`,;"
        "Content-Type": "application/json"},;
      body: JSON.stringify({;"
        model: "gpt-4o-mini",;
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
    const generatedContentText = data.choices[0].message.content,;
    // Parse the JSON response from OpenAI;
    let generatedContent,;
    try {;
      generatedContent = JSON.parse(generatedContentText);
    } catch (e) {;"
      console.error("Failed to parse GPT response as JSON:", e),;"
      // // // console.log("Raw response:", generatedContentText),;
      // Try to extract JSON using regex as fallback;
      const jsonMatch = generatedContentText.match(/\{[\s\S]*\}/),;
      if (jsonMatch) {;
        try {;
          generatedContent = JSON.parse(jsonMatch[0]);
        } catch (e2) {;"
          throw new Error("Could not parse the generated content as JSON");
        }
      } else {;"
        throw new Error("Could not extract JSON from the generated content");
      }
    }
;
    // Apply the generated content to the template or return it directly;
    return new Response(JSON.stringify(generatedContent), {;"
      headers: { ...corsHeaders, "Content-Type": "application/json" }});
  } catch (error) {;"
    console.error("Error in personalize-email function:", error),;
    return new Response(JSON.stringify({ error: error.message }), {;
      status: 500,;"
      headers: { ...corsHeaders, "Content-Type": "application/json" }});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
<<<<<<< HEAD
});
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  }
<<<<<<< HEAD
});

<<<<<<< HEAD
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
;
const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
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
    if (!emailType || !userData) {;
      throw new Error("Missing required parameters:emailType and userData");
    }
    ;
    // Create a prompt based on the email type and user data;
    let systemPrompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.",;
    let userPrompt = "",;
    ;
    // Subject line context;
    let subjectContext = "",;
    ;
    switch (emailType) {;
      case "welcome_series":;
        userPrompt = `Create a welcome email for a new ${userData.userType === "talent" ? "talent/professional" :"client/employer"} named ${userData.firstName}. The email should introduce them to the platform and guide them through their next steps.`,;
        break,;
        ;
      case "inactivity_reminder":;
        userPrompt = `Create a re-engagement email for a ${userData.userType === "talent" ? "talent/professional" :"client/employer"} named ${userData.firstName} who has been inactive for ${activityData.daysInactive} days. They haven't completed their ${activityData.incompleteAction}.`,;
        subjectContext = "Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.",;
        break,;
        ;
      case "job_application":;
        userPrompt = `Create an email encouraging a talent named ${userData.firstName} who hasn't applied to any jobs yet. Their skills are:${userData.skills ? userData.skills.join(", ") :"AI-related skills"}. Encourage them to complete their profile and apply to relevant positions.`,;
        subjectContext = "Create a subject line that emphasizes opportunity and personal growth.",;
        break,;
        ;
      case "profile_completion":;
        userPrompt = `Create an email for ${userData.firstName} reminding them to complete their profile. They have completed ${userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`,;
        subjectContext = "Create a short, motivational subject line about profile completion.",;
        break,;
        ;
      default:;
        userPrompt = `Create a re-engagement email for a user named ${userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`,;
    }
    ;
    // Add subject line request to the prompt;
    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only:{ "subject":"The subject line", "greeting":"Personalized greeting", "mainContent":["paragraph1", "paragraph2"], "callToAction":"Text for the CTA button", "signature":"Email signature text" }`,;
;
    // Call OpenAI API to generate personalized content;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method:"POST",;
      headers:{;
        "Authorization":`Bearer ${openAIApiKey}`,;
        "Content-Type":"application/json"},;
      body:JSON.stringify({;
        model:"gpt-4o-mini",;
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
    const generatedContentText = data.choices[0].message.content,;
    ;
    // Parse the JSON response from OpenAI;
    let generatedContent,;
    try {;
      generatedContent = JSON.parse(generatedContentText),;
    } catch (e) {;
      console.error("Failed to parse GPT response as JSON:", e),;
      // // // console.log("Raw response:", generatedContentText),;
      // Try to extract JSON using regex as fallback;
      const jsonMatch = generatedContentText.match(/\{[\s\S]*\}/),;
      if (jsonMatch) {;
        try {;
          generatedContent = JSON.parse(jsonMatch[0]),;
        } catch (e2) {;
          throw new Error("Could not parse the generated content as JSON"),;
        }
      } else {;
        throw new Error("Could not extract JSON from the generated content"),;
      }
    }
;
    // Apply the generated content to the template or return it directly;
    return new Response(JSON.stringify(generatedContent), {;
      headers:{ ...corsHeaders, "Content-Type":"application/json" }}),;
  } catch (error) {;
    console.error("Error in personalize-email function:", error),;
    return new Response(JSON.stringify({ error:error.message }), {;
      status:500,;
      headers:{ ...corsHeaders, "Content-Type":"application/json" }}),;  }
}),;
 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}try {
  //Get personalization request data const {
  break;
case "inactivity reminder" : userPrompt = `Create a re-engagement email for a $ {
  userData.userType === "talent" ? "talent/professional" : "client/employer" 
}named $ {
  userData.firstName 
}who has been inactive for $ {
  activityData.daysInactive 
}days. They haven't completed their $ {
  activityData.incompleteAction 
}.`;
subjectContext = "Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.";
break;
case "job application" : userPrompt = `Create an email encouraging a talent named $ {
  userData.firstName 
}who hasn't applied to any jobs yet. Their skills are: $ {
  userData.skills ? userData.skills.join (", ") : "AI-related skills" 
}. Encourage them to complete their profile and apply to relevant positions.`;
subjectContext = "Create a subject line that emphasizes opportunity and personal growth.";
break;
case "profile completion" : userPrompt = `Create an email for $ {
  userData.firstName 
}reminding them to complete their profile. They have completed $ {
  userData.profileCompletion || 0 
}% of their profile. Focus on how a complete profile increases visibility.`;
subjectContext = "Create a short, motivational subject line about profile completion.";
break;
  method: "POST";
headers: {
  "Authorization" : `Bearer $ {
  openAIApiKey 
}`;
"Content-Type" : "application/json" 
};
body: JSON.stringify ({
  model: "gpt-4o-mini";
messages: [ {
  role: "system", content: systemPrompt 
};
{
  role: "user", content: userPrompt 
}temperature: 0.7 
}) 
});
//Try to extract JSON using regex as fallback const jsonMatch = generatedContentText.match (/\ {
  [\s\S]*\ 
}/);
if (jsonMatch) {
  try {
  generatedContent = JSON.parse (jsonMatch[0]) 
}catch (e2) {
  
}
}// Apply the generated content to the template or return it directly return new Response (JSON.stringify (generatedContent), {
  
}
});
  }
});
<<<<<<< HEAD
  }
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;

import "https://deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
;
const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
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
    if (!emailType || !userData) {;
      throw new Error("Missing required parameters:emailType and userData");
    }
    ;
    // Create a prompt based on the email type and user data;
    let systemPrompt = "You are an AI assistant that creates personalized email content for a marketplace platform called Zion AI that connects AI professionals with clients. Create content that is friendly, professional, and encouraging.",;
    let userPrompt = "",;
    ;
    // Subject line context;
    let subjectContext = "",;
    ;
    switch (emailType) {;
      case "welcome_series":;
        userPrompt = `Create a welcome email for a new ${userData.userType === "talent" ? "talent/professional" :"client/employer"} named ${userData.firstName}. The email should introduce them to the platform and guide them through their next steps.`,;
        break,;
        ;
      case "inactivity_reminder":;
        userPrompt = `Create a re-engagement email for a ${userData.userType === "talent" ? "talent/professional" :"client/employer"} named ${userData.firstName} who has been inactive for ${activityData.daysInactive} days. They haven't completed their ${activityData.incompleteAction}.`,;
        subjectContext = "Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.",;
        break,;
        ;
      case "job_application":;
        userPrompt = `Create an email encouraging a talent named ${userData.firstName} who hasn't applied to any jobs yet. Their skills are:${userData.skills ? userData.skills.join(", ") :"AI-related skills"}. Encourage them to complete their profile and apply to relevant positions.`,;
        subjectContext = "Create a subject line that emphasizes opportunity and personal growth.",;
        break,;
        ;
      case "profile_completion":;
        userPrompt = `Create an email for ${userData.firstName} reminding them to complete their profile. They have completed ${userData.profileCompletion || 0}% of their profile. Focus on how a complete profile increases visibility.`,;
        subjectContext = "Create a short, motivational subject line about profile completion.",;
        break,;
        ;
      default:;
        userPrompt = `Create a re-engagement email for a user named ${userData.firstName} who has been inactive on the Zion AI Marketplace platform. Encourage them to return and continue using the platform.`,;
    }
    ;
    // Add subject line request to the prompt;
    userPrompt += `\n\n${subjectContext || "Create an engaging subject line for this email."}\n\nRespond with JSON in this format only:{ "subject":"The subject line", "greeting":"Personalized greeting", "mainContent":["paragraph1", "paragraph2"], "callToAction":"Text for the CTA button", "signature":"Email signature text" }`,;
;
    // Call OpenAI API to generate personalized content;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method:"POST",;
      headers:{;
        "Authorization":`Bearer ${openAIApiKey}`,;
        "Content-Type":"application/json"},;
      body:JSON.stringify({;
        model:"gpt-4o-mini",;
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
    const generatedContentText = data.choices[0].message.content,;
    ;
    // Parse the JSON response from OpenAI;
    let generatedContent,;
    try {;
      generatedContent = JSON.parse(generatedContentText),;
    } catch (e) {;
      console.error("Failed to parse GPT response as JSON:", e),;
      // // // console.log("Raw response:", generatedContentText),;
      // Try to extract JSON using regex as fallback;
      const jsonMatch = generatedContentText.match(/\{[\s\S]*\}/),;
      if (jsonMatch) {;
        try {;
          generatedContent = JSON.parse(jsonMatch[0]),;
        } catch (e2) {;
          throw new Error("Could not parse the generated content as JSON"),;
        }
      } else {;
        throw new Error("Could not extract JSON from the generated content"),;
      }
    }
;
    // Apply the generated content to the template or return it directly;
    return new Response(JSON.stringify(generatedContent), {;
      headers:{ ...corsHeaders, "Content-Type":"application/json" }}),;
  } catch (error) {;
    console.error("Error in personalize-email function:", error),;
    return new Response(JSON.stringify({ error:error.message }), {;
      status:500,;
      headers:{ ...corsHeaders, "Content-Type":"application/json" }}),;  }
}),;
 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}try {
  //Get personalization request data const {
  break;
case "inactivity reminder" : userPrompt = `Create a re-engagement email for a $ {
  userData.userType === "talent" ? "talent/professional" : "client/employer" 
}named $ {
  userData.firstName 
}who has been inactive for $ {
  activityData.daysInactive 
}days. They haven't completed their $ {
  activityData.incompleteAction 
}.`;
subjectContext = "Make the subject line attention-grabbing but not pushy, focusing on the benefits of returning to the platform.";
break;
case "job application" : userPrompt = `Create an email encouraging a talent named $ {
  userData.firstName 
}who hasn't applied to any jobs yet. Their skills are: $ {
  userData.skills ? userData.skills.join (", ") : "AI-related skills" 
}. Encourage them to complete their profile and apply to relevant positions.`;
subjectContext = "Create a subject line that emphasizes opportunity and personal growth.";
break;
case "profile completion" : userPrompt = `Create an email for $ {
  userData.firstName 
}reminding them to complete their profile. They have completed $ {
  userData.profileCompletion || 0 
}% of their profile. Focus on how a complete profile increases visibility.`;
subjectContext = "Create a short, motivational subject line about profile completion.";
break;
  method: "POST";
headers: {
  "Authorization" : `Bearer $ {
  openAIApiKey 
}`;
"Content-Type" : "application/json" 
};
body: JSON.stringify ({
  model: "gpt-4o-mini";
messages: [ {
  role: "system", content: systemPrompt 
};
{
  role: "user", content: userPrompt 
}temperature: 0.7 
}) 
});
//Try to extract JSON using regex as fallback const jsonMatch = generatedContentText.match (/\ {
  [\s\S]*\ 
}/);
if (jsonMatch) {
  try {
  generatedContent = JSON.parse (jsonMatch[0]) 
}catch (e2) {
  
}
}// Apply the generated content to the template or return it directly return new Response (JSON.stringify (generatedContent), {
  
}
});
  }
});
  }
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
