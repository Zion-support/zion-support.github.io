 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}//Add custom instructions if provided if (instructions) {
  userPrompt += `Additional instructions: $ {
  instructions 
}` 
}//Call OpenAI API const response = await fetch ("https://api.openai.com/v1/chat/completions", {
  method: "POST";
headers: {
  "Authorization" : `Bearer $ {
  openAiKey 
}`;
"Content-Type" : "application/json" 
};
body: JSON.stringify ({
  model: "gpt-4o-mini";
messages: [ {
  role: "system";
content: systemPrompt 
};
{
  role: "user";
content: userPrompt 
}];
temperature: 0.7 
}) 
});
if (!response.ok) {
  const errorData = await response.json ();
throw new Error (`OpenAI API error: $ {
  JSON.stringify (errorData) 
}`) 
}const data = await response.json ();
const enhancedContent = data.choices[0].message.content;
return new Response (JSON.stringify ({
  enhancedContent 
});
{
  return new Response (JSON.stringify ({
  error: error.message 
});
{
  status: 500;
);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
