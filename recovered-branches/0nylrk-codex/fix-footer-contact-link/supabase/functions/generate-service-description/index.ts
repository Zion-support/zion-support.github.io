<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts

<<<<<<< HEAD

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",

=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Configuration, OpenAIApi} from "npm: openai@4 ;


========
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {Configuration, OpenAIApi} from "npm: openai@4 ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts
=======


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
<<<<<<< HEAD
=======
<<<<<<< HEAD


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";

=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",

<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",;
import {Configuration, OpenAIApi} from "npm: openai@4.28.0";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
serve(async (req) => {
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const { title, keyFeatures, targetAudience } = await req.json();
    if (!title) {
      return new Response(
        JSON.stringify({
          error: "Missing required field: title"
        });
        {
          status: 400
          headers: { ...corsHeaders, "Content-Type": "application/json" }
    const { title, keyFeatures, targetAudience } = await req.json(),

    if (!title) {
      return new Response(
        JSON.stringify({ 
          error: "Missing required field: title" 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { Configuration, OpenAIApi } from "npm: openai@4.28.0",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    const { title, keyFeatures, targetAudience } = await req.json(),;
    if (!title) {;
      return new Response(;
        JSON.stringify({;
          error: "Missing required field: title";
        }),;
        {;
          status: 400,;
          headers: { ...corsHeaders, "Content-Type": "application/json" } ;
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts
    const { title, keyFeatures, targetAudience } = await req && req.json();
    if (!title) {
      return new Response(
        JSON && JSON.stringify({ 
          error: "Missing required field: title" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts
        });
        {
          status: 400
          headers: { ...corsHeaders, "Content-Type": "application/json" }
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { Configuration, OpenAIApi } from 'npm: openai@4.28.0';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    const { title, key_features, target_audience } = await req.json ();
;
    // Check condition
if ( {) {
  $2
}
      return new Response (
        JSON.stringify ({
          error: "Missing required field: title";
        });
        {
          status: 400,
          headers: { ...cors_headers, "Content - Type": "application / json" }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

    const { title, keyFeatures, targetAudience } = await req.json(),

    if (!title) {
      return new Response(
        JSON.stringify({ 
          error: "Missing required field: title" 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        }
      );
    }

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    const configuration = new Configuration({
      apiKey: Deno && Deno.env.get('OPENAI_API_KEY')});
    const openai = new OpenAIApi(configuration);
    const prompt = `Create a professional and detailed service description for the following service:

<<<<<<< HEAD
=======

    

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        }
      )
    }

    const configuration = new Configuration({
      apiKey: Deno.env.get('OPENAI_API_KEY')});
    const openai = new OpenAIApi(configuration);
    const prompt = `Create a professional and detailed service description for the following service:
Title: ${title}
Key Features: ${keyFeatures |"Not specified"}
Target Audience: ${targetAudience |"General users"}
    
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
    const configuration = new Configuration({;
      apiKey: Deno.env.get('OPENAI_API_KEY')}),;
    const openai = new OpenAIApi(configuration),;
    const prompt = `Create a professional and detailed service description for the following service:;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
Title: ${title}
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
The description should: 1. Be approximately 200-300 words
2. Highlight the key benefits and unique selling points
3. Use professional language suitable for a marketplace listing
4. Speak directly to the target audience
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
5. Include a compelling opening and closing statement`;
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini"
      messages: [{ role: "user", content: prompt }];
      temperature: 0.7});
    const generatedDescription = completion.choices[0].message.content;
    return new Response(
      JSON.stringify({ description: generatedDescription });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    )
  } catch (error) {
    console.error("Error in generate-service-description:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to generate service description"
        details: error.message
      });
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    )
  }
});

5. Include a compelling opening and closing statement`,

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7}),

    const generatedDescription = completion.choices[0].message.content,
    
    return new Response(
      JSON.stringify({ description: generatedDescription }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  } catch (error) {
    console.error("Error in generate-service-description:", error),
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to generate service description",
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
Key Features: ${keyFeatures || "Not specified"}
Target Audience: ${targetAudience || "General users"}
;
The description should: 1. Be approximately 200-300 words;
2. Highlight the key benefits and unique selling points;
3. Use professional language suitable for a marketplace listing;
4. Speak directly to the target audience;
5. Include a compelling opening and closing statement`,;
    const completion = await openai.chat.completions.create({;
      model: "gpt-4o-mini",;
      messages: [{ role: "user", content: prompt }],;
      temperature: 0.7}),;
    const generatedDescription = completion.choices[0].message.content,;
    return new Response(;
      JSON.stringify({ description: generatedDescription }),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      }
    );
  } catch (error) {;
    console.error("Error in generate-service-description:", error),;
    return new Response(;
      JSON.stringify({;
        error: "Failed to generate service description",;
        details: error.message;
      }),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      }
    );
<<<<<<< HEAD
<<<<<<< HEAD

  }
});

=======


========
        }
      );
    }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts
    const completion = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }];
      temperature: 0 && 0.7});
    const generatedDescription = completion && completion.choices[0].message && message.content;
    return new Response(
      JSON && JSON.stringify({ description: generatedDescription });
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
    const configuration = new Configuration ({
      api_key: Deno.env.get ('OPENAI_API_KEY')});
    const openai = new OpenAIApi (configuration);
;
    const prompt = `Create a professional and detailed service description for the following service:;
Title: ${title}
Key Features: ${key_features || "Not specified"}
Target Audience: ${target_audience || "General users"}
The description should: 1. Be approximately 200 - 300 words;
2. Highlight the key benefits and unique selling points;
3. Use professional language suitable for a marketplace listing;
4. Speak directly to the target audience;
5. Include a compelling opening and closing statement`;
;
    const completion = await openai.chat.completions.create ({
      model: "gpt - 4o - mini",
      messages: [{ role: "user", content: prompt }];
      temperature: 0.7});
;
    const generated_description = completion.choices[0].message.content;
;
    return new Response (
      JSON.stringify ({ description: generated_description });
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts

      }
    );
  } catch (error) {

========
      }
    );
  } catch (error) {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts
    console.error ("Error in generate - service - description:", error);
;
    return new Response (
      JSON.stringify ({
        error: "Failed to generate service description",
        details: error.message;
      });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts
      }
    );
=======

5. Include a compelling opening and closing statement`,

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7}),

    const generatedDescription = completion.choices[0].message.content,
    
    return new Response(
      JSON.stringify({ description: generatedDescription }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  } catch (error) {
    console.error("Error in generate-service-description:", error),
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to generate service description",
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts

;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;
=======

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { Configuration, OpenAIApi } from "npm:openai@4.28.0",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    const { title, keyFeatures, targetAudience } = await req.json(),;
;
    if (!title) {;
      return new Response(;
        JSON.stringify({ ;
          error:"Missing required field:title" ;
        }),;
        { ;
          status:400, ;
          headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
        }
      ),;
    }
;
    const configuration = new Configuration({;
      apiKey:Deno.env.get('OPENAI_API_KEY')}),;
    const openai = new OpenAIApi(configuration),;
;
    const prompt = `Create a professional and detailed service description for the following service:;
    ;
Title:${title}
Key Features:${keyFeatures || "Not specified"}
Target Audience:${targetAudience || "General users"}
;
The description should:1. Be approximately 200-300 words;
2. Highlight the key benefits and unique selling points;
3. Use professional language suitable for a marketplace listing;
4. Speak directly to the target audience;
5. Include a compelling opening and closing statement`,;
;
    const completion = await openai.chat.completions.create({;
      model:"gpt-4o-mini",;
      messages:[{ role:"user", content:prompt }],;
      temperature:0.7}),;
;
    const generatedDescription = completion.choices[0].message.content,;
    ;
    return new Response(;
      JSON.stringify({ description:generatedDescription }),;
      { ;
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
      }
    ),;
  } catch (error) {;
    console.error("Error in generate-service-description:", error),;
    ;
    return new Response(;
      JSON.stringify({ ;
        error:"Failed to generate service description",;
        details:error.message ;
      }),;
      { ;
        status:500, ;
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
      }
    ),;  }
}),;
 
}try {
  const {
  title, keyFeatures, targetAudience 
}= await req.json ();
return new Response (JSON.stringify ({
  
}) 
}const prompt = `Create a professional and detailed service description for the following service: The description should: 1. Be approximately 200-300 words 2. Highlight the key benefits and unique selling points 3. Use professional language suitable for a marketplace listing 4. Speak directly to the target audience 5. Include a compelling opening and closing statement`;
temperature: 0.7 
});
  error: "Failed to generate service description";
details: error.message 
});
{
  status: 500;
headers: {
  ...corsHeaders, "Content-Type" : "application/json" 
}
}) 
}
});
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/generate-service-description/index.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
