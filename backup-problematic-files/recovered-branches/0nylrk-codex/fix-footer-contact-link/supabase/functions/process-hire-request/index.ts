
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
<<<<<<< HEAD

