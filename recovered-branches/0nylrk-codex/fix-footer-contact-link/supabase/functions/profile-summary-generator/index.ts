 const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' 
};
//Handle CORS preflight requests if (req.method === 'OPTIONS') {
  
}//Create a request to OpenAI API const openAIResponse = await fetch ('https://api.openai.com/v1/chat/completions', {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  OPENAI API KEY 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify ({
  model: 'gpt-4o-mini', messages: [ {
  role: 'system', content: `You are a professional AI assistant that helps optimize talent profiles. Your task is to create a compelling summary for the talent based on their information and suggest additional skills that would complement their profile.` 
};
{
  role: 'user', content: `Create a professional profile summary (150-200 words) for a talent with the following information: $ {
  name 
}
}];
temperature: 0.7 
}) 
});
}//Extract the generated content from the response const responseContent = openAIData.choices[0].message.content;
//Parse the JSON response let parsedResponse;
try {
  //Find the JSON object in the response const jsonMatch = responseContent.match (/\ {
  [\s\S]*\ 
}/);
if (jsonMatch) {
  parsedResponse = JSON.parse (jsonMatch[0]) 
}else {
  ) .filter (Boolean);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
}return new Response (JSON.stringify (parsedResponse);
return new Response (JSON.stringify ({
  error: error.message 
});
{
  status: 500, headers: {
  ...corsHeaders, 'Content-Type': 'application/json' 
}
}) 
}
});
