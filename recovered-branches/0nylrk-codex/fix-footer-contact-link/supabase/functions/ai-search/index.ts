 
}try {
  const {
  query 
}= await req.json ();
if (!query) {
  return new Response (const configuration = new Configuration ({
  apiKey: openAiKey 
});
const openai = new OpenAIApi (configuration);
try {
  const match = responseText.match (/\ {
  [\s\S]*\ 
}/);
filters = match ? JSON.parse (match[0]) : JSON.parse (responseText) 
}catch () {
  filters = {
  type: null, skills: null, location: null, budget: null, availability: null 
}
}return new Response (JSON.stringify ({
  filters 
});
);
}catch (error) {
  console.error ("ai-search error", error);
return new Response (JSON.stringify ({
  error: error.message 
});
{
  status: 500, headers: {
  ...corsHeaders, "Content-Type" : "application/json" 
}
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
