
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};

interface Message {_role: string;
  content: string;}

interface RequestBody {_messages: Message[];}

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const { messages} = await req.json() as RequestBody;

    // Prepare the system message to define the assistant's behavior
    const systemMessage: Message = {_role: 'system', _content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, _explain how the platform works, _and assist with navigating the website. Be friendly, _concise, _and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, _suggest the user to browse the service listings or contact the provider for more information. When relevant, _include help center links in the format [Category Name] that users can click on.'};

    // Combine the system message with user messages
    const _combinedMessages = [systemMessage, ...messages];

    const _response = await fetch('https://api.openai.com/v1/chat/completions', {_method: 'POST', _headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json'},
      body: JSON.stringify({_model: 'gpt-4o-mini', _messages: combinedMessages, _temperature: 0.7, _max_tokens: 500})});

    const _data = await response.json();
    
    if (data.error) {_throw new Error(data.error.message);}

    const _assistantMessage = data.choices[0].message.content;

    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.
    

    return new Response(JSON.stringify({_message: assistantMessage}), {_headers: { ...corsHeaders, _'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: error.message}), {_status: 500, _headers: { ...corsHeaders, _'Content-Type': 'application/json'}});
  }
});
