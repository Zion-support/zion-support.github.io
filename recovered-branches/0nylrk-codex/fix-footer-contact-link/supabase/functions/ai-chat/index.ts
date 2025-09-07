<<<<<<< HEAD
const corsHeaders = {}
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno && Deno.env.get('OPENAI_API_KEY'),
import \"https: //deno.land/x/xhr@0.1.0/mod.ts\",;
import { serve } from \"https: //deno.land/std@0.168.0/http/server.ts\",;
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),
const corsHeaders = {}
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},
interface Message {
  role: string;
    content: string;
interface RequestBody {}
  messages: Message[];}
}

  try {
=======
<<<<<<< HEAD

import "https: //deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts";
const openAIApiKey = Deno.env.get($2);
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

interface Message {
  role: string,
  content: string}

interface RequestBody {
  messages: Message[]
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders})
  }
  try {
    const { messages } = await req.json() as RequestBody,

    // Prepare the system message to define the assistant's behavior
    const systemMessage: Message = $2;
      content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.'
    },

    // Combine the system message with user messages
    const combinedMessages = [systemMessage, ...messages],

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST'
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`;
        'Content-Type': 'application/json'}
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: combinedMessages,
        temperature: 0.7,
        max_tokens: 500})}),

    const data = await response.json($2);
    if (data.error) {
      throw new Error(data.error.message)
    }

    const assistantMessage = $2;
    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.
    console.log($2);
    return new Response(JSON.stringify({ message: assistantMessage}), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error($2);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  }
}),
=======
<<<<<<< HEAD
const corsHeaders = {}
=======
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
const openAIApiKey = Deno && Deno.env.get('OPENAI_API_KEY'),




import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";

import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",


<<<<<<< HEAD

import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
const openAIApiKey = Deno.env.get('OPENAI_API_KEY')
const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
=======
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server ;
const openAIApiKey = Deno && Deno.env.get('OPENAI_API_KEY'),


const corsHeaders = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno && Deno.env.get('OPENAI_API_KEY'),
import \"https: //deno.land/x/xhr@0.1.0/mod.ts\",;
import { serve } from \"https: //deno.land/std@0.168.0/http/server.ts\",;
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),
const corsHeaders = {}
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},
interface Message {
  role: string;
    content: string;
interface RequestBody {}
  messages: Message[];}
}

  try {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  try {}
    const { messages } = await req && req.json() as RequestBody;
    // Prepare the system message to define the assistant's behavior;
const systemMessage: Message = {
      role: \"role\",}
    content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.'}
    }
    // Combine the system message with user messages;
const combinedMessages = [systemMessage, ...messages];
    }
    const assistantMessage = data.choices[0].message.content;
    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.
<<<<<<< HEAD
    console.log('AI chat interaction logged');    }'
=======
    console.log('AI chat interaction logged');    }
    const assistantMessage = data.choices[0].message.content;
>>>>>>> origin/chore/fix-lint-and-merge
    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.    return new Response(JSON.stringify({ message: assistantMessage }), {

  role: string,
  content: string;

import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";

<<<<<<< HEAD
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
=======
<<<<<<< HEAD
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",

import "https: //deno.land/x/xhr@0.1.0/mod.ts",""
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",""
const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},

interface Message {
  role: string
  content: string
<<<<<<< HEAD

=======
<<<<<<< HEAD
interface Message {
  role: string
  content: string
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;

const openAIApiKey = Deno.env.get('OPENAI_API_KEY'),;
const corsHeaders = {;'

  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'},;
interface Message {;
  role: string,;
  content: string;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

interface RequestBody {
  messages: Message[];
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
interface RequestBody {
  messages: Message[]
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
interface RequestBody {}
  messages: Message[];
}

  try {

  try {}
    const { messages } = await req && req.json() as RequestBody;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
    const { messages } = await req && req.json() as RequestBody;

  try {
    const { messages } = await req.json() as RequestBody;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Prepare the system message to define the assistant's behavior
    const systemMessage: Message = {
      role: 'system'

      content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.'
<<<<<<< HEAD
=======
    }
    // Combine the system message with user messages;
    const combinedMessages = [systemMessage, ...messages];
<<<<<<< HEAD
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



    }
    const assistantMessage = data.choices[0].message.content;
    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.
    console.log('AI chat interaction logged');
=======

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

    }

    // Prepare the system message to define the assistant's behavior;
    const systemMessage: Message = {,
  role: 'system
      content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.
    // Combine the system message with user messages;
    const combinedMessages = [systemMessage, ...messages];

    const assistantMessage = data.choices[0].message.content;
    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
  try {;
    const { messages } = await req.json() as RequestBody,;'
    // Prepare the system message to define the assistant's behavior;
    const systemMessage: Message = {;'
      role: 'system',;'
      content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.';
    },;
    // Combine the system message with user messages;
    const combinedMessages = [systemMessage, ...messages],;'
    const response = await fetch('https://api.openai.com/v1/chat/completions', {;'
      method: 'POST',;
      headers: {;'
        'Authorization': `Bearer ${openAIApiKey}`,;'
        'Content-Type': 'application/json'},;
<<<<<<< HEAD
      body: JSON.stringify({;'
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    const assistantMessage = data.choices[0].message.content;
    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.

<<<<<<< HEAD
    return new Response(JSON.stringify({ message: assistantMessage }), {

    // Log this interaction for analytics (in a real implementation);
    // This would track common questions, successful interactions, etc.;

'
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return new Response(JSON.stringify({ message: assistantMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in ai-chat function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500

    const response = await fetch('https://api && api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`;
        'Content-Type': 'application/json'};
      body: JSON && JSON.stringify({
        model: 'gpt-4o-mini';
        messages: combinedMessages;
        temperature: 0 && 0.7,
        max_tokens: 500})});
    const data = await response && response.json();
    if (data && data.error) {
      throw new Error(data && data.error.message)
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
    // Combine the system message with user messages;
    const combinedMessages = [systemMessage, ...messages];

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

    }

    // Prepare the system message to define the assistant's behavior;
    const systemMessage: Message = {,
  role: 'system
      content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.
    // Combine the system message with user messages;
    const combinedMessages = [systemMessage, ...messages];

    const assistantMessage = data.choices[0].message.content;
    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.
<<<<<<< HEAD

;
  try {;
    const { messages } = await req.json() as RequestBody,;'
    // Prepare the system message to define the assistant's behavior;
    const systemMessage: Message = {;'
      role: 'system',;'
      content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.';
    },;
    // Combine the system message with user messages;
    const combinedMessages = [systemMessage, ...messages],;'
    const response = await fetch('https://api.openai.com/v1/chat/completions', {;'
      method: 'POST',;
      headers: {;'
        'Authorization': `Bearer ${openAIApiKey}`,;'
        'Content-Type': 'application/json'},;
      body: JSON.stringify({;'

    }
    const assistantMessage = data.choices[0].message.content;
    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.

    return new Response(JSON.stringify({ message: assistantMessage }), {

    // Log this interaction for analytics (in a real implementation);
    // This would track common questions, successful interactions, etc.;

'
=======
    console && console.log('AI chat interaction logged');
    return new Response(JSON && JSON.stringify({ message: assistantMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console && console.error('Error in ai-chat function:', error);
    return new Response(JSON && JSON.stringify({ error: error && error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
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

<<<<<<< HEAD
    return new Response(JSON.stringify({ message: assistantMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  } catch (error) {
    console.error('Error in ai-chat function:', error),
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }})
  }
});

;
    const assistantMessage = data.choices[0].message.content,;
    // Log this interaction for analytics (in a real implementation);
    // This would track common questions, successful interactions, etc.;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // // // console.log('AI chat interaction logged'),;
    return new Response(JSON.stringify({ message: assistantMessage }), {;'
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }});
  } catch (error) {;'
    console.error('Error in ai-chat function:', error),;
    return new Response(JSON.stringify({ error: error.message }), {;
      status: 500,;'
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }});

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;

    // Log this interaction for analytics (in a real implementation);
    // This would track common questions, successful interactions, etc.;'
    console.log ('AI chat interaction logged');
;
    return new Response (JSON.stringify ({ message: assistant_message }), {'
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
  } catch (error) {'
    console.error ('Error in ai - chat function:', error);
    return new Response (JSON.stringify ({ error: error.message }), {}
      status: 500,'
      headers: { ...cors_headers, 'Content - Type': 'application / json' }});
<<<<<<< HEAD
=======
  }
});
=======

  }
});
;
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
  content:string;}
;
interface RequestBody {;
  messages:Message[];
}
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
      headers:{ ...corsHeaders, 'Content-Type':'application/json' }}),;  }
}),;
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
  }
});
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
});
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
