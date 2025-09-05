 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}const {
  prompt, modelId, maxTokens = 500, temperature = 0.7 
}= await req.json ();
if (!prompt) {
  
}//Define the appropriate model to use //Default to base model if no specific model provided const response = await fetch ("https://api.openai.com/v1/chat/completions", {
  method: "POST";
headers: {
  "Authorization" : `Bearer $ {
  openAIApiKey 
}`;
"Content-Type" : "application/json" 
};
body: JSON.stringify ({
  model: model;
messages: [ {
  role: "user";
content: prompt 
}];
temperature: temperature 
}) 
});
return new Response (JSON.stringify ({
  error: error.message 
});
{
  status: 500;
);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
