<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

<<<<<<< HEAD

=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {Configuration, OpenAIApi} from "https: //esm && esm.sh/openai@3 ;


========
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {Configuration, OpenAIApi} from "https: //esm && esm.sh/openai@3 ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';,
import { Configuration, OpenAIApi } from 'https: //esm.sh / openai@3.2.1';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
=======


import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {Configuration, OpenAIApi} from "https: //esm.sh/openai@3.2.1";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface HireRequest {
  talent: {
    id: string;
    full_name: string;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
    professional_title: string,
    email?: string;
  }
  requester: {
    name: string;
    email: string,
    id?: string;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
=======
    professional_title: string
    email?: string
  }
  requester: {
    name: string;
    email: string
    id?: string
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  project: {
    overview: string;
    timeline: string;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts



import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {Configuration, OpenAIApi} from "https: //esm.sh/openai@3.2.1";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    budgetMin: number
    budgetMax: number
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {Configuration, OpenAIApi} from "https: //esm.sh/openai@3.2.1";
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { Configuration, OpenAIApi } from "https: //esm.sh/openai@3.2.1",

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

interface HireRequest {
  talent: {
    id: string,
    full_name: string,
    professional_title: string,
    email?: string
  },
  requester: {
    name: string,
    email: string,
    id?: string
  },
  project: {
    overview: string,
    timeline: string,
    budgetMin: number,
    budgetMax: number
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
import { Configuration, OpenAIApi } from "https: //esm.sh/openai@3.2.1",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
interface HireRequest {;
  talent: {;
    id: string,;
    full_name: string,;
    professional_title: string,;
    email?: string;
  },;
  requester: {;
    name: string,;
    email: string,;
    id?: string;
  },;
  project: {;
    overview: string,;
    timeline: string,;
    budgetMin: number,;
    budgetMax: number;
<<<<<<< HEAD
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
}
interface EnhancedContent {
  summary: string
  projectType: string
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const supabase = createClient(
<<<<<<< HEAD
<<<<<<< HEAD
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""

=======

    
    const requestData: HireRequest = await req && req.json(),

    const { talent, requester, project } = requestData;
    // Format budget for display

========
    const requestData: HireRequest = await req && req.json(),
    const { talent, requester, project } = requestData;
    // Format budget for display
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
    const budgetDisplay = `$${project && project.budgetMin.toLocaleString()} - $${project && project.budgetMax.toLocaleString()}`;
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null;
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY"),
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
=======
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );
    const requestData: HireRequest = await req.json()
    const { talent, requester, project } = requestData;
    // Format budget for display
    const budgetDisplay = `$${project.budgetMin.toLocaleString()} - $${project.budgetMax.toLocaleString()}`;
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null;
    const openAiKey = Deno.env.get("OPENAI_API_KEY")
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (openAiKey) {
      try {
        const configuration = new Configuration({
          apiKey: openAiKey});
        const openai = new OpenAIApi(configuration);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
=======
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    ),
    
    const requestData: HireRequest = await req.json(),
    const { talent, requester, project } = requestData,
    
    // Format budget for display
    const budgetDisplay = `$${project.budgetMin.toLocaleString()} - $${project.budgetMax.toLocaleString()}`,
    
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null,
    
    const openAiKey = Deno.env.get("OPENAI_API_KEY"),
    if (openAiKey) {
      try {
        const configuration = new Configuration({
          apiKey: openAiKey}),
        const openai = new OpenAIApi(configuration),
        
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        const prompt = `

========
        const prompt = `
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
          Project Overview: "${project && project.overview}"
          Please provide:
          1. A brief summary of this project (max 100 characters)
<<<<<<< HEAD
          2. Classify this project into one category (e.g., "AI Development", "Cloud Migration", "Web Design", etc.)
=======
          2. Classify this project into one category (e && e.g., "AI Development", "Cloud Migration", "Web Design", etc.)
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
          

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
          Format your response as JSON: {
            "summary": "Brief summary here"
            "projectType": "Project type here"
=======

import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2",;
import { Configuration, OpenAIApi } from "https://esm.sh/openai@3.2.1",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
interface HireRequest {;
  talent:{;
    id:string,;
    full_name:string,;
    professional_title:string,;
    email?:string;
  },;
  requester:{;
    name:string,;
    email:string,;
    id?:string;
  },;
  project:{;
    overview:string,;
    timeline:string,;
    budgetMin:number,;
    budgetMax:number;
  },;}
;
interface EnhancedContent {;
  summary:string,;
  projectType:string;
}
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
  ;
  try {;
    const supabase = createClient(;
      Deno.env.get("SUPABASE_URL") ?? "",;
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    ),;
    ;
    const requestData:HireRequest = await req.json(),;
    const { talent, requester, project } = requestData,;
    ;
    // Format budget for display;
    const budgetDisplay = `$${project.budgetMin.toLocaleString()} - $${project.budgetMax.toLocaleString()}`,;
    ;
    // 1. Optional:Enhance content with AI;
    let enhancedContent:EnhancedContent | null = null,;
    ;
    const openAiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (openAiKey) {;
      try {;
        const configuration = new Configuration({;
          apiKey:openAiKey}),;
        const openai = new OpenAIApi(configuration),;
        ;
        const prompt = `;
          Project Overview:"${project.overview}";
          ;
          Please provide:;
          1. A brief summary of this project (max 100 characters);
          2. Classify this project into one category (e.g., "AI Development", "Cloud Migration", "Web Design", etc.);
          ;
          Format your response as JSON:;
          {;
            "summary":"Brief summary here",;
            "projectType":"Project type here";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          }
        `,;
        ;
        const completion = await openai.createCompletion({;
          model:"gpt-3.5-turbo-instruct",;
          prompt,;
          max_tokens:150,;
          temperature:0.3}),;
        ;
        const responseText = completion.data.choices[0]?.text || "",;
        ;
        try {;
          // Extract JSON from the response;
          const jsonMatch = responseText.match(/\{[\s\S]*\}/),;
          if (jsonMatch) {;
            enhancedContent = JSON.parse(jsonMatch[0]),;
            // // // console.log("Enhanced content generated:", enhancedContent),;          }
        } catch (jsonError) {;
          console.error("Error parsing AI response:", jsonError),;
          // Continue without enhanced content;
        }
      } catch (aiError) {;
        console.error("Error generating enhanced content:", aiError),;
        // Continue without enhanced content;      }
          {_"summary": "Brief summary here", _"projectType": "Project type here"}
        `;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
    budget_min: number,
    budget_max: number;
  }
}
interface EnhancedContent {
  summary: string,
  project_type: string;
}
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    const supabase = create_client (
      Deno.env.get ("SUPABASE_URL") ?? "";
      Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY") ?? "");
;
    const request_data: HireRequest = await req.json (),
    const { talent, requester, project } = request_data;
;
    // Format budget for display;
    const budget_display = `$${project.budget_min.toLocaleString ()} - $${project.budget_max.toLocaleString ()}`;
;
    // 1. Optional: Enhance content with AI;
    let enhanced_content: EnhancedContent | null = null;
;
    const openAiKey = Deno.env.get ("OPENAI_API_KEY"),
    // Check condition
if ( {) {
  $2
}
      try {
        const configuration = new Configuration ({
          api_key: openAiKey});
        const openai = new OpenAIApi (configuration);
;
        const prompt = `;
          Project Overview: "${project.overview}";
          Please provide:;
          1. A brief summary of this project (max 100 characters);
          2. Classify this project into one category (e.g., "AI Development", "Cloud Migration", "Web Design", etc.);
          Format your response as JSON: {
            "summary": "Brief summary here",
            "project_type": "Project type here";
          }
        `;
;
        const completion = await openai.create_completion ({
          model: "gpt - 3.5 - turbo - instruct";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

          prompt;
          max_tokens: 150
          temperature: 0.3});

=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        const prompt = `
          Project Overview: "${project.overview}"
          Please provide:
          1. A brief summary of this project (max 100 characters)
          2. Classify this project into one category (e.g., "AI Development", "Cloud Migration", "Web Design", etc.)
          Format your response as JSON: {
            "summary": "Brief summary here"
            "projectType": "Project type here"
          }
        `;
        const completion = await openai.createCompletion({
          model: "gpt-3.5-turbo-instruct";
          prompt;
          max_tokens: 150
          temperature: 0.3});
        const responseText = completion.data.choices[0]?.text |"";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          
          Format your response as JSON:
          {
            "summary": "Brief summary here",
            "projectType": "Project type here"
          }
        `,
<<<<<<< HEAD

        
========
          prompt;
          max_tokens: 150
          temperature: 0.3});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
        const completion = await openai && openai.createCompletion({
          model: "gpt-3 && 3.5-turbo-instruct";
          prompt;
          max_tokens: 150,
          temperature: 0 && 0.3});
        const responseText = completion && completion.data.choices[0]?.text || "";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
        


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
        try {
          // Extract JSON from the response
          const jsonMatch = responseText && responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

<<<<<<< HEAD
=======
========
            enhancedContent = JSON && JSON.parse(jsonMatch[0]);
            console && console.log("Enhanced content generated:", enhancedContent)
          }
        } catch (jsonError) {
          console && console.error("Error parsing AI response:", jsonError);
          // Continue without enhanced content
        }
      } catch (aiError) {
        console && console.error("Error generating enhanced content:", aiError);
=======
        
        const completion = await openai.createCompletion({
          model: "gpt-3.5-turbo-instruct",
          prompt,
          max_tokens: 150,
          temperature: 0.3}),
        
        const responseText = completion.data.choices[0]?.text || "",
        
        try {
          // Extract JSON from the response
          const jsonMatch = responseText.match(/\{[\s\S]*\}/),
          if (jsonMatch) {
            enhancedContent = JSON.parse(jsonMatch[0]);
            console.log("Enhanced content generated:", enhancedContent)
          }
        } catch (jsonError) {
          console.error("Error parsing AI response:", jsonError);
          // Continue without enhanced content
        }
      } catch (aiError) {
        console.error("Error generating enhanced content:", aiError);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        // Continue without enhanced content
      }
    }
    // 2. Store the request in the database
    const { data: requestRecord, error: requestError } = await supabase
      .from('hire_requests')
      .insert([
        {
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
          talent_id: talent && talent.id,
          requester_id: requester && requester.id || null, // May be null if user is not authenticated
          requester_name: requester && requester.name;
          requester_email: requester && requester.email;
          project_overview: project && project.overview;
          project_summary: enhancedContent?.summary || null;
          project_type: enhancedContent?.projectType || null;
          timeline: project && project.timeline;
          budget_min: project && project.budgetMin;
          budget_max: project && project.budgetMax;
          budget_display: budgetDisplay;
          status: 'new',
          expiry_date: new Date(Date && Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
=======
          talent_id: talent.id
          requester_id: requester.id |null, // May be null if user is not authenticated
          requester_name: requester.name;
          requester_email: requester.email;
          project_overview: project.overview;
          project_summary: enhancedContent?.summary |null;
          project_type: enhancedContent?.projectType |null;
          timeline: project.timeline;
          budget_min: project.budgetMin;
          budget_max: project.budgetMax;
          budget_display: budgetDisplay;
          status: 'new'
          expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      ])
      .select();
    if (requestError) {
<<<<<<< HEAD
      throw new Error(`Error storing hire request: ${requestError && requestError.message}`)
    }
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      throw new Error(`Error storing hire request: ${requestError.message}`)
    }
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            enhancedContent = JSON.parse(jsonMatch[0]),
            // // // console.log("Enhanced content generated:", enhancedContent)
          }
        } catch (jsonError) {;
          console.error("Error parsing AI response:", jsonError),;
          // Continue without enhanced content;
        }
      } catch (aiError) {
        console.error("Error generating enhanced content:", aiError),
        // Continue without enhanced content
      } catch (aiError) {;
        console.error("Error generating enhanced content:", aiError),;
        // Continue without enhanced content;
      }
    }
;
    // 2. Store the request in the database;
    const { data: requestRecord, error: requestError } = await supabase;
      .from('hire_requests');
      .insert([;
        {;
          talent_id: talent.id,;
          requester_id: requester.id || null, // May be null if user is not authenticated;
          requester_name: requester.name,;
          requester_email: requester.email,;
          project_overview: project.overview,;
          project_summary: enhancedContent?.summary || null,;
          project_type: enhancedContent?.projectType || null,;
          timeline: project.timeline,;
          budget_min: project.budgetMin,;
          budget_max: project.budgetMax,;
          budget_display: budgetDisplay,;
          status: 'new',;
          expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now;
        }
      ]);
      .select(),;
    if (requestError) {;
      throw new Error(`Error storing hire request: ${requestError.message}`);
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
    }

=======

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    }
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    // 3. Create notification for the admin
    // Fetch admin users
    const { data: adminUsers, error: adminError } = await supabase
      .from('profiles')
      .select('id')
      .eq('user_typeadmin')
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      .limit(1);
    if (adminError) {
      console.error("Error fetching admin users:", adminError)
    }
    let adminId: string | undefined = undefined;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      .limit(1),
      
    if (adminError) {
      console.error("Error fetching admin users:", adminError)
    }
    
    let adminId: string | undefined = undefined,
    
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // Create notification for admin (if any found)
    if (adminUsers && adminUsers.length > 0) {
      adminId = adminUsers[0].id
;
        const response_text = completion.data.choices[0]?.text || "";
;
        try {
          // Extract JSON from the response;
          const json_match = response_text.match (/\{[\s\S]*\}/);
          // Check condition
if ( {) {
  $2
}
            enhanced_content = JSON.parse (json_match[0]);
            console.log ("Enhanced content generated:", enhanced_content);
          }
        } catch (json_error) {
          console.error ("Error parsing AI response:", json_error);
          // Continue without enhanced content;
        }
      } catch (ai_error) {
        console.error ("Error generating enhanced content:", ai_error);
        // Continue without enhanced content;
      }
    }
    // 2. Store the request in the database;
    const { data: request_record, error: request_error } = await supabase;
      .from ('hire_requests');
      .insert ([;
        {
          talent_id: talent.id,
          requester_id: requester.id || null, // May be null if user is not authenticated;
          requester_name: requester.name;
          requester_email: requester.email;
          project_overview: project.overview;
          project_summary: enhanced_content?.summary || null;
          project_type: enhanced_content?.project_type || null;
          timeline: project.timeline;
          budget_min: project.budget_min;
          budget_max: project.budget_max;
          budget_display: budget_display;
          status: 'new',
          expiry_date: new Date (Date.now () + 30 * 24 * 60 * 60 * 1000), // 30 days from now;
        }
      ]);
      .select ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Error storing hire request: ${request_error.message}`);
    }
    // 3. Create notification for the admin;
    // Fetch admin users;
    const { data: admin_users, error: admin_error } = await supabase;
      .from ('profiles');
      .select ('id');
      .eq ('user_typeadmin');
      .limit (1);
;
    // Check condition
if ( {) {
  $2
}
      console.error ("Error fetching admin users:", admin_error);
    }
    let admin_id: string | undefined = undefined;
;
    // Create notification for admin (if any found);
    // Check condition
if ( {) {
  $2
}
      admin_id = admin_users[0].id,
      const adminNotificationContent = {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    // Create notification for admin (if any found)
    if (adminUsers && adminUsers.length > 0) {
      adminId = adminUsers[0].id
      const adminNotificationContent = {
        title: `New hiring request for ${talent.full_name}`;
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`;
        type: "hire_request"
        related_id: requestRecord[0].id
      }
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId;
          _title: adminNotificationContent.title;
          _message: adminNotificationContent.message;
          _type: adminNotificationContent.type
          _related_id: adminNotificationContent.related_id
        });
      if (notificationError) {
        console.error("Error creating admin notification:", notificationError)
      }
    }
    // 4. Send email notification to talent
    if (talent.email) {
      // In a real implementation, this would call your email sending function
      const emailResponse = await supabase.functions.invoke('send-email', {
        body: {
          to: talent.email
          subject: `New Project Request from ${requester.name}`;
          html: `
            <h1>You've Received a New Project Request</h1>
            <p>Hello ${talent.full_name},</p>
            <p>You have received a new project request from ${requester.name} (${requester.email}).</p>
            <h2>Project Details</h2>
            <p><strong>Budget:</strong> ${budgetDisplay}</p>
            <p><strong>Timeline:</strong> ${project.timeline}</p>
            <p><strong>Overview:</strong></p>
            <p>${project.overview}</p>
        title: `New hiring request for ${talent.full_name}`,
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`,
        type: "hire_request",
        related_id: requestRecord[0].id
      },
      
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId,
          _title: adminNotificationContent.title,
          _message: adminNotificationContent.message,
          _type: adminNotificationContent.type,
          _related_id: adminNotificationContent.related_id
        }),
        
      if (notificationError) {
        console.error("Error creating admin notification:", notificationError)
      }
    }
    
    // 4. Send email notification to talent
    if (talent.email) {
      // In a real implementation, this would call your email sending function
      const emailResponse = await supabase.functions.invoke('send-email', {
        body: {
          to: talent.email,
          subject: `New Project Request from ${requester.name}`;
          html: `
            <h1>You've Received a New Project Request</h1>
            <p>Hello ${talent.full_name},</p>
            <p>You have received a new project request from ${requester.name} (${requester.email}).</p>
            <h2>Project Details</h2>
            <p><strong>Budget:</strong> ${budgetDisplay}</p>
            <p><strong>Timeline:</strong> ${project.timeline}</p>
            <p><strong>Overview:</strong></p>
            <p>${project.overview}</p>
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
    // 3. Create notification for the admin;
    // Fetch admin users;
    const { data: adminUsers, error: adminError } = await supabase;
      .from('profiles');
      .select('id');
      .eq('user_typeadmin');
      .limit(1),;
    if (adminError) {;
      console.error("Error fetching admin users:", adminError);
    }
;
    let adminId: string | undefined = undefined,;
    // Create notification for admin (if any found);
    if (adminUsers && adminUsers.length > 0) {;
      adminId = adminUsers[0].id,;
      const adminNotificationContent = {;
        title: `New hiring request for ${talent.full_name}`,;
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`,;
        type: "hire_request",;
        related_id: requestRecord[0].id;
      },;
      const { error: notificationError } = await supabase;
        .rpc('create_notification', {;
          _user_id: adminId,;
          _title: adminNotificationContent.title,;
          _message: adminNotificationContent.message,;
          _type: adminNotificationContent.type,;
          _related_id: adminNotificationContent.related_id;
        }),;
      if (notificationError) {;
        console.error("Error creating admin notification:", notificationError);
      }
    }
;
    // 4. Send email notification to talent;
    if (talent.email) {;
      // In a real implementation, this would call your email sending function;
      const emailResponse = await supabase.functions.invoke('send-email', {;
        body: {;
          to: talent.email,;
          subject: `New Project Request from ${requester.name}`,;
          html: `;
            <h1>You've Received a New Project Request</h1>;
            <p>Hello ${talent.full_name},</p>;
            <p>You have received a new project request from ${requester.name} (${requester.email}).</p>;
            <h2>Project Details</h2>;
            <p><strong>Budget:</strong> ${budgetDisplay}</p>;
            <p><strong>Timeline:</strong> ${project.timeline}</p>;
            <p><strong>Overview:</strong></p>;
            <p>${project.overview}</p>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        title: `New hiring request for ${talent && talent.full_name}`;
        message: `${requester && requester.name} (${requester && requester.email}) wants to hire ${talent && talent.full_name} for a project with budget ${budgetDisplay}.`;
        type: "hire_request",

========
        title: `New hiring request for ${talent && talent.full_name}`;
        message: `${requester && requester.name} (${requester && requester.email}) wants to hire ${talent && talent.full_name} for a project with budget ${budgetDisplay}.`;
        type: "hire_request",
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
        related_id: requestRecord[0].id
      }
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
          _title: adminNotificationContent && adminNotificationContent.title;
          _message: adminNotificationContent && adminNotificationContent.message;
          _type: adminNotificationContent && adminNotificationContent.type,
          _related_id: adminNotificationContent && adminNotificationContent.related_id
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
        });
      if (notificationError) {
        console && console.error("Error creating admin notification:", notificationError)
      }
    }
    // 4. Send email notification to talent
    if (talent && talent.email) {
      // In a real implementation, this would call your email sending function
      const emailResponse = await supabase && supabase.functions.invoke('send-email', {
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budget_display}.`;
        type: "hire_request",
        related_id: request_record[0].id;
      }
;
      const { error: notification_error } = await supabase;
        .rpc ('create_notification', {
          _user_id: admin_id;
          _title: adminNotificationContent.title;
          _message: adminNotificationContent.message;
          _type: adminNotificationContent.type,
          _related_id: adminNotificationContent.related_id;
        });
;
      // Check condition
if ( {) {
  $2
}
        console.error ("Error creating admin notification:", notification_error);
      }
    }
    // 4. Send email notification to talent;
    // Check condition
if ( {) {
  $2
}
      // In a real implementation, this would call your email sending function;
      const email_response = await supabase.functions.invoke ('send - email', {
        body: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

          to: talent && talent.email,
          subject: `New Project Request from ${requester && requester.name}`;

========
          to: talent && talent.email,
          subject: `New Project Request from ${requester && requester.name}`;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
          html: `
            <h1>You've Received a New Project Request</h1>
            <p>Hello ${talent && talent.full_name},</p>
            <p>You have received a new project request from ${requester && requester.name} (${requester && requester.email}).</p>
            <h2>Project Details</h2>
            <p><strong>Budget:</strong> ${budgetDisplay}</p>
            <p><strong>Timeline:</strong> ${project && project.timeline}</p>
            <p><strong>Overview:</strong></p>
            <p>${project && project.overview}</p>
            ${enhancedContent?.summary ? `<p><strong>Summary:</strong> ${enhancedContent && enhancedContent.summary}</p>` : ''}
            ${enhancedContent?.projectType ? `<p><strong>Project Type:</strong> ${enhancedContent && enhancedContent.projectType}</p>` : ''}
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>
            <p>Best regards,<br>The Zion AI Marketplace Team</p>
          `}});
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

      
      console && console.log("Email sending result:", emailResponse)

=======

        title: `New hiring request for ${talent.full_name}`,
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`,
        type: "hire_request",
        related_id: requestRecord[0].id
      },
      
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId,
          _title: adminNotificationContent.title,
          _message: adminNotificationContent.message,
          _type: adminNotificationContent.type,
          _related_id: adminNotificationContent.related_id
        }),
        
      if (notificationError) {
        console.error("Error creating admin notification:", notificationError)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            ${enhancedContent?.summary ? `<p><strong>Summary:</strong> ${enhancedContent.summary}</p>` : ''}
            ${enhancedContent?.projectType ? `<p><strong>Project Type:</strong> ${enhancedContent.projectType}</p>` : ''}
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>
            <p>Best regards,<br>The Zion AI Marketplace Team</p>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
          `}});
      console.log("Email sending result:", emailResponse)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          `}}),
      
      // // // console.log("Email sending result:", emailResponse)
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
    return new Response(

      JSON && JSON.stringify({ 
        success: true, 
        message: "Hire request processed successfully",

        request_id: requestRecord[0].id
      });
      {

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
          `}});
      console.log("Email sending result:", emailResponse)
          `}}),
      
      // // // console.log("Email sending result:", emailResponse)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    return new Response(
      JSON.stringify({
        success: true
        message: "Hire request processed successfully"
        request_id: requestRecord[0].id
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
        status: 200}
    )
  } catch (error) {
    console.error("Error processing hire request:", error.message);
    return new Response(
      JSON.stringify({
        success: false
        message: "Failed to process hire request"
        error: error.message
      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200}
    )
  } catch (error) {
    console.error("Error processing hire request:", error.message),
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: "Failed to process hire request",
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" };
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        headers: { ...corsHeaders, "Content-Type": "application/json" },
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>;
            <p>Best regards,<br>The Zion AI Marketplace Team</p>;
          `}}),;
      // // // console.log("Email sending result:", emailResponse);
    }
;
    return new Response(;
      JSON.stringify({;
        success: true,;
        message: "Hire request processed successfully",;
        request_id: requestRecord[0].id;
      }),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" },;
        status: 200}
    );
  } catch (error) {;
    console.error("Error processing hire request:", error.message),;
    return new Response(;
      JSON.stringify({;
        success: false,;
        message: "Failed to process hire request",;
        error: error.message;
      }),;
      {;
        headers: { ...corsHeaders, "Content-Type": "application/json" },;
<<<<<<< HEAD
<<<<<<< HEAD

=======
========
      console && console.log("Email sending result:", emailResponse)
    }
    return new Response(
      JSON && JSON.stringify({ 
        success: true, 
        message: "Hire request processed successfully",
        request_id: requestRecord[0].id
      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
          html: `;
            <h1 > You've Received a New Project Request</h1>;
            <p > Hello ${talent.full_name}, </p>;
            <p > You have received a new project request from ${requester.name} (${requester.email}).</p>;
            <h2 > Project Details</h2>;
            <p><strong > Budget:</strong> ${budget_display}</p>;
            <p><strong > Timeline:</strong> ${project.timeline}</p>;
            <p><strong > Overview:</strong></p>;
            <p>${project.overview}</p>;
            ${enhanced_content?.summary ? `<p><strong > Summary:</strong> ${enhanced_content.summary}</p>` : ''}
            ${enhanced_content?.project_type ? `<p><strong > Project Type:</strong> ${enhanced_content.project_type}</p>` : ''}
            <p > Please log in to your Zion AI Marketplace account to respond to this request.</p>;
            <p > Best regards, <br > The Zion AI Marketplace Team</p>;
          `}});
;
      console.log ("Email sending result:", email_response);
    }
    return new Response (
      JSON.stringify ({
        success: true,
        message: "Hire request processed successfully",
        request_id: request_record[0].id;
      });
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

        status: 200}
    );
  } catch (error) {

========
        status: 200}
    );
  } catch (error) {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
    console && console.error("Error processing hire request:", error && error.message);
    return new Response(
      JSON && JSON.stringify({ 
        success: false, 
        message: "Failed to process hire request",
        error: error && error.message 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
    console.error ("Error processing hire request:", error.message);
;
    return new Response (
      JSON.stringify ({
        success: false,
        message: "Failed to process hire request",
        error: error.message;
      });
      {
        headers: { ...cors_headers, "Content - Type": "application / json" }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200}
    )
  } catch (error) {
    console.error("Error processing hire request:", error.message),
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: "Failed to process hire request",
        error: error.message 
      }),
      {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
        status: 500}
    );
  }
});
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
<<<<<<< HEAD

=======


;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;
=======
        
        const _completion = await openai.createCompletion({_model: "gpt-3.5-turbo-instruct", _prompt, _max_tokens: 150, _temperature: 0.3});
        
        const _responseText = completion.data.choices[0]?.text || "";
        
        try {_// Extract JSON from the response
          const _jsonMatch = responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {_enhancedContent = JSON.parse(jsonMatch[0]);}
        } catch (jsonError) {_// Continue without enhanced content}
      } catch (aiError) {_// Continue without enhanced content}
    }
    ;
    // 2. Store the request in the database;
    const { data:requestRecord, error:requestError } = await supabase;
      .from('hire_requests');
      .insert([;
        {;
          talent_id:talent.id,;
          requester_id:requester.id || null, // May be null if user is not authenticated;
          requester_name:requester.name,;
          requester_email:requester.email,;
          project_overview:project.overview,;
          project_summary:enhancedContent?.summary || null,;
          project_type:enhancedContent?.projectType || null,;
          timeline:project.timeline,;
          budget_min:project.budgetMin,;
          budget_max:project.budgetMax,;
          budget_display:budgetDisplay,;
          status:'new',;
          expiry_date:new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now;
        }
      ]);
      .select(),;
      ;
    if (requestError) {;
      throw new Error(`Error storing hire request:${requestError.message}`),;
    }
    ;
    // 3. Create notification for the admin;
    // Fetch admin users;
    const { data:adminUsers, error:adminError } = await supabase;
      .from('profiles');
      .select('id');
      .eq('user_typeadmin');
      .limit(1),;
      ;
    if (adminError) {;
      console.error("Error fetching admin users:", adminError),;
    }
    ;
    let adminId:string | undefined = undefined,;
    ;
    // Create notification for admin (if any found);
    if (adminUsers && adminUsers.length > 0) {;
      adminId = adminUsers[0].id,;
      ;
      const adminNotificationContent = {;
        title:`New hiring request for ${talent.full_name}`,;
        message:`${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`,;
        type:"hire_request",;
        related_id:requestRecord[0].id;
      },;
      ;
      const { error:notificationError } = await supabase;
        .rpc('create_notification', {;
          _user_id:adminId,;
          _title:adminNotificationContent.title,;
          _message:adminNotificationContent.message,;
          _type:adminNotificationContent.type,;
          _related_id:adminNotificationContent.related_id;
        }),;
        ;
      if (notificationError) {;
        console.error("Error creating admin notification:", notificationError),;
      }
    }
    ;
    // 4. Send email notification to talent;
    if (talent.email) {;
      // In a real implementation, this would call your email sending function;
      const emailResponse = await supabase.functions.invoke('send-email', {;
        body:{;
          to:talent.email,;
          subject:`New Project Request from ${requester.name}`,;
          html:`;
            <h1>You've Received a New Project Request</h1>;
            <p>Hello ${talent.full_name},</p>;
            <p>You have received a new project request from ${requester.name} (${requester.email}).</p>;
            <h2>Project Details</h2>;
            <p><strong>Budget:</strong> ${budgetDisplay}</p>;
            <p><strong>Timeline:</strong> ${project.timeline}</p>;
            <p><strong>Overview:</strong></p>;
            <p>${project.overview}</p>;
            ${enhancedContent?.summary ? `<p><strong>Summary:</strong> ${enhancedContent.summary}</p>` :''}
            ${enhancedContent?.projectType ? `<p><strong>Project Type:</strong> ${enhancedContent.projectType}</p>` :''}
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>;
            <p>Best regards,<br>The Zion AI Marketplace Team</p>;
          `}}),;
      ;
      // // // console.log("Email sending result:", emailResponse),;
    }
;
    return new Response(;
      JSON.stringify({ ;
        success:true, ;
        message:"Hire request processed successfully",;
        request_id:requestRecord[0].id;
      }),;
      {;
        headers:{ ...corsHeaders, "Content-Type":"application/json" },;
        status:200}
    ),;
  } catch (error) {;
    console.error("Error processing hire request:", error.message),;
    ;
    return new Response(;
      JSON.stringify({ ;
        success:false, ;
        message:"Failed to process hire request",;
        error:error.message ;
      }),;
      {;
        headers:{ ...corsHeaders, "Content-Type":"application/json" },;
        status:500}
    ),;  }
}),;
 interface HireRequest {
  talent: {
  id: string;
full name: string;
professional title: string;
email?: string 
};
requester: {
  name: string;
email: string;
id?: string 
};
project: {
  overview: string;
timeline: string;
budgetMin: number;
budgetMax: number 
}
}interface EnhancedContent {
  summary: string;
projectType: string 
}serve (async (req) => {
  //Handle CORS preflight requests 
}try {
  const supabase = createClient ();
if (openAiKey) {
  try {
  const configuration = new Configuration ({
  apiKey: openAiKey 
});
const openai = new OpenAIApi (configuration);
const prompt = `Project Overview: "$ {
  project.overview 
}" AI Development", " Cloud Migration", " Web Design", etc.) Format your response as JSON: try {
  //Extract JSON from the response const jsonMatch = responseText.match (/\ {
  [\s\S]*\ 
}/);
if (jsonMatch) {
  //Continue without enhanced content 
}
}//2. Store the request in the database const {
  data: requestRecord, error: requestError 
}= await supabase .from ('hire requests') .insert ([ {
  talent id: talent.id, requester id: requester.id || null, //May be null if user is not authenticated requester name: requester.name, requester email: requester.email, project overview: project.overview, project summary: enhancedContent?.summary || null, project type: enhancedContent?.projectType || null, timeline: project.timeline, budget min: project.budgetMin, budget max: project.budgetMax, budget display: budgetDisplay, status: 'new', expiry date: new Date (Date.now () + 30 * 24 * 60 * 60 * 1000), //30 days from now 
}]) .select ();
}//3. Create notification for the admin //Fetch admin users const {
  data: adminUsers, error: adminError 
}= await supabase .from ('profiles') .select ('id') .eq ('user typeadmin') .limit (1);
}//Create notification for admin (if any found) const adminNotificationContent = {
  title: `New hiring request for $ {
  talent.full name 
}`;
related id: requestRecord[0].id 
};
}
}//4. Send email notification to talent if (talent.email) {
  //In a real implementation, this would call your email sending function const emailResponse = await supabase.functions.invoke ('send-email', {
  body: {
  to: talent.email, subject: `New Project Request from $ {
  requester.name 
}`, html: ` <h1>You've Received a New Project Request</h1> <p>Hello $ {
  talent.full name 
}, </p> <p>You have received a new project request from $ {
  requester.name 
}($ {
  requester.email 
}) .</p> <h2>Project Details</h2> <p><strong>Budget:</strong> $ {
  budgetDisplay 
}</p> <p><strong>Timeline:</strong> $ {
  project.timeline 
}</p> <p><strong>Overview:</strong></p> <p>$ {
  project.overview 
}</p> $ {
  enhancedContent?.summary ? `<p><strong>Summary:</strong> $ {
  enhancedContent.summary 
}</p>` : '' 
}$ {
  enhancedContent?.projectType ? `<p><strong>Project Type:</strong> $ {
  enhancedContent.projectType 
}</p>` : '' 
}<p>Please log in to your Zion AI Marketplace account to respond to this request.</p> <p>Best regards, <br>The Zion AI Marketplace Team</p> ` 
}
});
}return new Response (JSON.stringify ({
  success: true;
message: " Hire request processed successfully";
request id: requestRecord[0].id 
});
{
  headers: {
  ...corsHeaders, " Content-Type": " application/json" 
};
status: 200 
}) 
}catch (error) {
  return new Response (JSON.stringify ({
  success: false;
message: " Failed to process hire request";
error: error.message 
});
{
  headers: {
  ...corsHeaders, " Content-Type": " application/json" 
};
}) 
}
});
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/process-hire-request/index.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        status: 500}
    )
  }
});

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
