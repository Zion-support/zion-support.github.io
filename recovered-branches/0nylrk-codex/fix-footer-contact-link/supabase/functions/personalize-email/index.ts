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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 default: //Call OpenAI API to generate personalized content const response = await fetch ("https://api.openai.com/v1/chat/completions", {
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
