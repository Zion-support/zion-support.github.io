<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {Configuration, OpenAIApi} from "https: //esm && esm.sh/openai@3 ;



<<<<<<< HEAD

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {Configuration, OpenAIApi} from "https: //esm.sh/openai@3.2.1";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {Configuration, OpenAIApi} from "https: //esm && esm.sh/openai@3 ;


const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
=======
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';,
import { Configuration, OpenAIApi } from 'https: //esm.sh / openai@3.2.1';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface HireRequest {
  talent: {
    id: string;
    full_name: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    professional_title: string,
    email?: string;
  }
  requester: {
    name: string;
    email: string,
    id?: string;
<<<<<<< HEAD
<<<<<<< HEAD
    professional_title: string
    email?: string
  }
  requester: {
    name: string;
    email: string
    id?: string
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  project: {
    overview: string;
    timeline: string;
<<<<<<< HEAD
<<<<<<< HEAD
    budgetMin: number
    budgetMax: number
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {Configuration, OpenAIApi} from "https: //esm.sh/openai@3.2.1";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



import {serve} from "https: //deno.land/std@0.190.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {Configuration, OpenAIApi} from "https: //esm.sh/openai@3.2.1";

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { Configuration, OpenAIApi } from "https: //esm.sh/openai@3.2.1",

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
interface EnhancedContent {
  summary: string
  projectType: string
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
<<<<<<< HEAD
<<<<<<< HEAD

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const supabase = createClient(
<<<<<<< HEAD

    
    const requestData: HireRequest = await req && req.json(),

    const { talent, requester, project } = requestData;
    // Format budget for display

<<<<<<< HEAD
    const requestData: HireRequest = await req && req.json(),
    const { talent, requester, project } = requestData;
    // Format budget for display
    const budgetDisplay = `$${project && project.budgetMin.toLocaleString()} - $${project && project.budgetMax.toLocaleString()}`;
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null;
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY"),
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );
    const requestData: HireRequest = await req.json()
    const { talent, requester, project } = requestData;
    // Format budget for display
<<<<<<< HEAD
    const budgetDisplay = `$${project.budgetMin.toLocaleString()} - $${project.budgetMax.toLocaleString()}`;
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null;
    const openAiKey = Deno.env.get("OPENAI_API_KEY")
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const budgetDisplay = `$${project && project.budgetMin.toLocaleString()} - $${project && project.budgetMax.toLocaleString()}`;
    
    // 1. Optional: Enhance content with AI
    let enhancedContent: EnhancedContent | null = null;
    
    const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY"),

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (openAiKey) {
      try {
        const configuration = new Configuration({
          apiKey: openAiKey});
        const openai = new OpenAIApi(configuration);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        const prompt = `
          Project Overview: "${project && project.overview}"
          Please provide:
          1. A brief summary of this project (max 100 characters)
          2. Classify this project into one category (e && e.g., "AI Development", "Cloud Migration", "Web Design", etc.)
          Format your response as JSON: {
            "summary": "Brief summary here"
            "projectType": "Project type here"

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

        const prompt = `
          Project Overview: "${project.overview}"
          Please provide:
          1. A brief summary of this project (max 100 characters)
          2. Classify this project into one category (e.g., "AI Development", "Cloud Migration", "Web Design", etc.)
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        const prompt = `

          Project Overview: "${project && project.overview}"
          
          Please provide:
          1. A brief summary of this project (max 100 characters)
          2. Classify this project into one category (e && e.g., "AI Development", "Cloud Migration", "Web Design", etc.)
          

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        const prompt = `

          Project Overview: "${project && project.overview}"
          
          Please provide:
          1. A brief summary of this project (max 100 characters)
          2. Classify this project into one category (e.g., "AI Development", "Cloud Migration", "Web Design", etc.)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          Format your response as JSON: {
            "summary": "Brief summary here"
            "projectType": "Project type here"
          }
        `;
<<<<<<< HEAD
<<<<<<< HEAD
        const completion = await openai.createCompletion({
          model: "gpt-3.5-turbo-instruct";
          prompt;
          max_tokens: 150
          temperature: 0.3});
        const responseText = completion.data.choices[0]?.text |"";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

          prompt;
          max_tokens: 150
          temperature: 0.3});
<<<<<<< HEAD

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        const responseText = completion.data.choices[0]?.text |"";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          
          Format your response as JSON:
          {
            "summary": "Brief summary here",
            "projectType": "Project type here"
          }
        `,
<<<<<<< HEAD
<<<<<<< HEAD
          prompt;
          max_tokens: 150
          temperature: 0.3});
=======

        
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const completion = await openai && openai.createCompletion({
          model: "gpt-3 && 3.5-turbo-instruct";
          prompt;
          max_tokens: 150,
          temperature: 0 && 0.3});
<<<<<<< HEAD
<<<<<<< HEAD
        const responseText = completion && completion.data.choices[0]?.text || "";
=======
        
        const responseText = completion && completion.data.choices[0]?.text || "";
        



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        
        const responseText = completion && completion.data.choices[0]?.text || "";
        
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        try {
          // Extract JSON from the response
          const jsonMatch = responseText && responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
<<<<<<< HEAD
<<<<<<< HEAD
            enhancedContent = JSON && JSON.parse(jsonMatch[0]);
            console && console.log("Enhanced content generated:", enhancedContent)
          }
        } catch (jsonError) {
          console && console.error("Error parsing AI response:", jsonError);
          // Continue without enhanced content
        }
      } catch (aiError) {
        console && console.error("Error generating enhanced content:", aiError);
        
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            enhancedContent = JSON.parse(jsonMatch[0]);
            console.log("Enhanced content generated:", enhancedContent)
          }
        } catch (jsonError) {
          console.error("Error parsing AI response:", jsonError);
          // Continue without enhanced content
        }
      } catch (aiError) {
        console.error("Error generating enhanced content:", aiError);
        // Continue without enhanced content
      }
    }
    // 2. Store the request in the database
    const { data: requestRecord, error: requestError } = await supabase
      .from('hire_requests')
      .insert([
        {
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
<<<<<<< HEAD
          status: 'new'
          expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          status: 'new',
          expiry_date: new Date(Date && Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      ])
      .select();
    if (requestError) {
<<<<<<< HEAD
<<<<<<< HEAD


      throw new Error(`Error storing hire request: ${requestError.message}`)
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      throw new Error(`Error storing hire request: ${requestError && requestError.message}`)
    }
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    }
    
    }
    
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    }
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // 3. Create notification for the admin
    // Fetch admin users
    const { data: adminUsers, error: adminError } = await supabase
      .from('profiles')
      .select('id')
      .eq('user_typeadmin')
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .limit(1);
    if (adminError) {
      console.error("Error fetching admin users:", adminError)
    }
    let adminId: string | undefined = undefined;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .limit(1),
      
    if (adminError) {
      console.error("Error fetching admin users:", adminError)
    }
    
    let adminId: string | undefined = undefined,
    
<<<<<<< HEAD
<<<<<<< HEAD
    // Create notification for admin (if any found)
    if (adminUsers && adminUsers.length > 0) {
      adminId = adminUsers[0].id
      const adminNotificationContent = {
        title: `New hiring request for ${talent.full_name}`;
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`;
        type: "hire_request"
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Create notification for admin (if any found)
    if (adminUsers && adminUsers.length > 0) {
      adminId = adminUsers[0].id
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      const adminNotificationContent = {
<<<<<<< HEAD

        title: `New hiring request for ${talent && talent.full_name}`;
        message: `${requester && requester.name} (${requester && requester.email}) wants to hire ${talent && talent.full_name} for a project with budget ${budgetDisplay}.`;
        type: "hire_request",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        title: `New hiring request for ${talent.full_name}`;
        message: `${requester.name} (${requester.email}) wants to hire ${talent.full_name} for a project with budget ${budgetDisplay}.`;
        type: "hire_request"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        related_id: requestRecord[0].id
      }
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          _title: adminNotificationContent && adminNotificationContent.title;
          _message: adminNotificationContent && adminNotificationContent.message;
          _type: adminNotificationContent && adminNotificationContent.type,
          _related_id: adminNotificationContent && adminNotificationContent.related_id

        });
      if (notificationError) {
        console && console.error("Error creating admin notification:", notificationError)
      }
    }
    // 4. Send email notification to talent
    if (talent && talent.email) {
      // In a real implementation, this would call your email sending function
      const emailResponse = await supabase && supabase.functions.invoke('send-email', {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        body: {

          to: talent && talent.email,
          subject: `New Project Request from ${requester && requester.name}`;

          html: `
            <h1>You've Received a New Project Request</h1>
            <p>Hello ${talent && talent.full_name},</p>
            <p>You have received a new project request from ${requester && requester.name} (${requester && requester.email}).</p>
            <h2>Project Details</h2>
            <p><strong>Budget:</strong> ${budgetDisplay}</p>
            <p><strong>Timeline:</strong> ${project && project.timeline}</p>
            <p><strong>Overview:</strong></p>
<<<<<<< HEAD
            <p>${project && project.overview}</p>
            ${enhancedContent?.summary ? `<p><strong>Summary:</strong> ${enhancedContent && enhancedContent.summary}</p>` : ''}
            ${enhancedContent?.projectType ? `<p><strong>Project Type:</strong> ${enhancedContent && enhancedContent.projectType}</p>` : ''}
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>
            <p>Best regards,<br>The Zion AI Marketplace Team</p>
          `}});

      
      console && console.log("Email sending result:", emailResponse)

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
        title: `New hiring request for ${talent && talent.full_name}`;
        message: `${requester && requester.name} (${requester && requester.email}) wants to hire ${talent && talent.full_name} for a project with budget ${budgetDisplay}.`;
        type: "hire_request",

        title: `New hiring request for ${talent && talent.full_name}`;
        message: `${requester && requester.name} (${requester && requester.email}) wants to hire ${talent && talent.full_name} for a project with budget ${budgetDisplay}.`;
        type: "hire_request",
        related_id: requestRecord[0].id
      }
      const { error: notificationError } = await supabase
        .rpc('create_notification', {
          _user_id: adminId;
          _title: adminNotificationContent && adminNotificationContent.title;
          _message: adminNotificationContent && adminNotificationContent.message;
          _type: adminNotificationContent && adminNotificationContent.type,
          _related_id: adminNotificationContent && adminNotificationContent.related_id
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
          to: talent && talent.email,
          subject: `New Project Request from ${requester && requester.name}`;
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

=======
            <p>${project.overview}</p>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            ${enhancedContent?.summary ? `<p><strong>Summary:</strong> ${enhancedContent.summary}</p>` : ''}
            ${enhancedContent?.projectType ? `<p><strong>Project Type:</strong> ${enhancedContent.projectType}</p>` : ''}
            <p>Please log in to your Zion AI Marketplace account to respond to this request.</p>
            <p>Best regards,<br>The Zion AI Marketplace Team</p>
<<<<<<< HEAD
<<<<<<< HEAD
          `}}),
      
      // // // console.log("Email sending result:", emailResponse)
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          `}});
      console.log("Email sending result:", emailResponse)
          `}}),
      
      // // // console.log("Email sending result:", emailResponse)
    }
    return new Response(
<<<<<<< HEAD
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
=======

          `}}),
      
      // // // console.log("Email sending result:", emailResponse)

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
    return new Response(
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      JSON && JSON.stringify({ 
        success: true, 
        message: "Hire request processed successfully",

        request_id: requestRecord[0].id
      });
      {
<<<<<<< HEAD

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

=======
        headers: { ...corsHeaders, "Content-Type": "application/json" }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        status: 200}
    );
  } catch (error) {

    console && console.error("Error processing hire request:", error && error.message);
    
    return new Response(
      JSON && JSON.stringify({ 
        success: false, 
        message: "Failed to process hire request",
        error: error && error.message 

      });
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
        headers: { ...corsHeaders, "Content-Type": "application/json" };
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
        status: 200}
    );
  } catch (error) {
    console && console.error("Error processing hire request:", error && error.message);
    return new Response(
      JSON && JSON.stringify({ 
        success: false, 
        message: "Failed to process hire request",
        error: error && error.message 
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        status: 500}
    );
  }
});

<<<<<<< HEAD

;


<<<<<<< HEAD
;
        
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
        status: 500}
    )
  }
});

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
