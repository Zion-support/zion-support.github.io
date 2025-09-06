
=======

const corsHeaders = {
  'Access-Control-Allow-Origin': '*Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts";

import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
interface RequestBody {
  messages: Message[]
}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======





>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  try {

    const { messages } = await req && req.json() as RequestBody;


    // Prepare the system message to define the assistant's behavior
    const systemMessage: Message = {
      role: 'system'
      content: 'You are a helpful AI assistant for the Zion AI Marketplace. You help users find AI and tech services, explain how the platform works, and assist with navigating the website. Be friendly, concise, and knowledgeable about AI technologies and services. If asked about specific service details you don\'t know, suggest the user to browse the service listings or contact the provider for more information. When relevant, include help center links in the format [Category Name] that users can click on.'
    }
    // Combine the system message with user messages
    const combinedMessages = [systemMessage, ...messages];
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }

    const assistantMessage = data.choices[0].message.content,

    // Log this interaction for analytics (in a real implementation)
    // This would track common questions, successful interactions, etc.
    // // // console.log('AI chat interaction logged'),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
});
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
