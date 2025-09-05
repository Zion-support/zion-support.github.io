
<<<<<<< HEAD
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
;
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),;
;
const corsHeaders = {;
  'Access-Control-Allow-Origin':'*Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type'},;
;
interface Message {;
  role:string,;
  content:string;
=======
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

interface Message {
  role: string,
  content: string
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
interface RequestBody {;
  messages:Message[];
}
<<<<<<< HEAD
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === 'OPTIONS') {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    const { messages } = await req.json() as RequestBody,;
;
    // Prepare the system message to define the assistant's behavior;
    const systemMessage:Message = {;
      role:'system',;
      content:'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.';
    },;
;
    // Combine the system message with user messages;
    const combinedMessages = [systemMessage, ...messages],;
;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {;
      method:'POST',;
      headers:{;
        'Authorization':`Bearer ${openAIApiKey}`,;
        'Content-Type':'application/json'},;
      body:JSON.stringify({;
        model:'gpt-4o-mini',;
        messages:combinedMessages,;
        temperature:0.7,;
        max_tokens:500})}),;
;
    const data = await response.json(),;
    ;
    if (data.error) {;
      throw new Error(data.error.message),;
    }
;
    const assistantMessage = data.choices[0].message.content,;
;
    // Log this interaction for analytics (in a real implementation);
    // This would track common questions, successful interactions, etc.;
    // // // console.log('AI chat interaction logged'),;
;
    return new Response(JSON.stringify({ message:assistantMessage }), {;
      headers:{ ...corsHeaders, 'Content-Type':'application/json' }}),;
  } catch (error) {;
    console.error('Error in ai-chat function:', error),;
    return new Response(JSON.stringify({ error:error.message }), {;
      status:500,;
      headers:{ ...corsHeaders, 'Content-Type':'application/json' }}),;
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const _corsHeaders = {_'Access-Control-Allow-Origin': '*', _'Access-Control-Allow-Headers': 'authorization, _x-client-info, _apikey, _content-type'};

interface Message {_role: string;
  content: string;}

interface RequestBody {_messages: Message[];}

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { messages } = await req.json() as RequestBody,

    // Prepare the system message to define the assistant's behavior
    const systemMessage: Message = {
      role: 'system',
      content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.'
    },

    // Combine the system message with user messages
    const combinedMessages = [systemMessage, ...messages],
    const _response = await fetch('https://api.openai.com/v1/chat/completions', {_method: 'POST', _headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: combinedMessages,
        temperature: 0.7,
        max_tokens: 500})}),

    const data = await response.json(),
    
    if (data.error) {
      throw new Error(data.error.message)
    }

    const assistantMessage = data.choices[0].message.content,

    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.
    // // // console.log('AI chat interaction logged'),
    return new Response(JSON.stringify({ message: assistantMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in ai-chat function:', error),
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
      body: JSON.stringify({_model: 'gpt-4o-mini', _messages: combinedMessages, _temperature: 0.7, _max_tokens: 500})});

    const _data = await response.json();
    
    if (data.error) {_throw new Error(data.error.message);}

    const _assistantMessage = data.choices[0].message.content;

    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.
    

    return new Response(JSON.stringify({_message: assistantMessage}), {_headers: { ...corsHeaders, _'Content-Type': 'application/json'}});
  } catch (error) {_return new Response(JSON.stringify({ error: error.message}), {_status: 500, _headers: { ...corsHeaders, _'Content-Type': 'application/json'}});
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
}),;
