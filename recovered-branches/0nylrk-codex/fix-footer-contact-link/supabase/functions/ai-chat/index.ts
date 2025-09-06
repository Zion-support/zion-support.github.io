
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
const openAIApiKey = Deno.env.get('OPENAI_API_KEY')
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
<<<<<<< HEAD
interface Message {
  role: string
  content: string
=======
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';
const openAIApiKey = Deno.env.get ('OPENAI_API_KEY'),
const cors_headers = {
  'Access - Control - Allow - Origin': '*Access - Control - Allow - Headers': 'authorization, x - client - info, apikey, content - type'}
;
interface Message {
  role: string,
  content: string;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface Message {
  role: string
  content: string

import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),;
const corsHeaders = {;
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
interface Message {;
  role: string,;
  content: string;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
interface RequestBody {
  messages: Message[];
}
serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
  if (req && req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
=======
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  try {
    const { messages } = await req.json() as RequestBody;
    // Prepare the system message to define the assistant's behavior
    const systemMessage: Message = {
      role: 'system'
      content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.'
    }
    // Combine the system message with user messages
    const combinedMessages = [systemMessage, ...messages];
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`;
        'Content-Type': 'application/json'}
      body: JSON.stringify({
        model: 'gpt-4o-mini';
        messages: combinedMessages;
        temperature: 0.7
        max_tokens: 500})});
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message)
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
    const assistantMessage = data.choices[0].message.content;
    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.
    console.log('AI chat interaction logged');
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
  try {;
    const { messages } = await req.json() as RequestBody,;
    // Prepare the system message to define the assistant's behavior;
    const systemMessage: Message = {;
      role: 'system',;
      content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.';
    },;
    // Combine the system message with user messages;
    const combinedMessages = [systemMessage, ...messages],;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {;
      method: 'POST',;
      headers: {;
        'Authorization': `Bearer ${openAIApiKey}`,;
        'Content-Type': 'application/json'},;
      body: JSON.stringify({;
        model: 'gpt-4o-mini',;
        messages: combinedMessages,;
        temperature: 0.7,;
        max_tokens: 500})}),;
    const data = await response.json(),;
    if (data.error) {;
      throw new Error(data.error.message);
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    }
    const assistantMessage = data.choices[0].message.content;
    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.
    console.log('AI chat interaction logged');
    return new Response(JSON.stringify({ message: assistantMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in ai-chat function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
<<<<<<< HEAD
  }
});

serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    const { messages } = await req.json () as RequestBody;
;
    // Prepare the system message to define the assistant's behavior;
    const system_message: Message = {
      role: 'system',
      content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don't know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.';
    }
;
    // Combine the system message with user messages;
    const combined_messages = [system_message, ...messages];
;
    const response = await fetch ('https://api.openai.com / v1 / chat / completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`;
        'Content - Type': 'application / json'}
      body: JSON.stringify ({
        model: 'gpt - 4o - mini';
        messages: combined_messages;
        temperature: 0.7,
        max_tokens: 500})});
;
    const data = await response.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (data.error.message);
    }
    const assistant_message = data.choices[0].message.content;
;
    // Log this interaction for analytics (in a real implementation);
    // This would track common questions, successful interactions, etc.;
    console.log ('AI chat interaction logged');
;
    return new Response (JSON.stringify ({ message: assistant_message }), {
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
  } catch (error) {
    console.error ('Error in ai - chat function:', error);
    return new Response (JSON.stringify ({ error: error.message }), {
      status: 500,
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
=======
<<<<<<< HEAD
<<<<<<< HEAD
  }
});

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
    // Log this interaction for analytics (in a real implementation);
    // This would track common questions, successful interactions, etc.;

    // // // console.log('AI chat interaction logged'),;
    return new Response(JSON.stringify({ message: assistantMessage }), {;
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }});
  } catch (error) {;
    console.error('Error in ai-chat function:', error),;
    return new Response(JSON.stringify({ error: error.message }), {;
      status: 500,;
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }});
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
});
;
