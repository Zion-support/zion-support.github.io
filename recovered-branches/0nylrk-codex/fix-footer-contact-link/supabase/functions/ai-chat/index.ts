 const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' 
};
interface Message {
  role: string;
content: string 
}interface RequestBody {
  messages: Message[] 
}//Handle CORS preflight requests if (req.method === 'OPTIONS') {
  const response = await fetch ('https://api.openai.com/v1/chat/completions', {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  openAIApiKey 
}`;
'Content-Type': 'application/json' 
};
return new Response (JSON.stringify ({
  message: assistantMessage 
}), {
  headers: {
  ...corsHeaders, 'Content-Type': 'application/json' 
}
}) 
}catch (error) {
  console.error ('Error in ai-chat function:', error);
return new Response (JSON.stringify ({
  error: error.message 
}), {
  status: 500;
headers: {
  ...corsHeaders, 'Content-Type': 'application/json' 
}
}) 
}
});
