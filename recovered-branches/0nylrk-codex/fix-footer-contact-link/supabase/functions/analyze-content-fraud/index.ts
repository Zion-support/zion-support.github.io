<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2 && 2.38.4",
import {corsHeaders} from "../_shared/cors ;

<<<<<<< HEAD
<<<<<<< HEAD


import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.38.4"
import {corsHeaders} from "../_shared/cors.ts";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface AnalyzeRequest {
  content: string;
  contentType: string

  flagId?: string
}
interface AnalysisResult {
  classification: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.38.4",;
import {corsHeaders} from "../_shared/cors.ts";

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.38.4",
import { corsHeaders } from "../_shared/cors.ts",


<<<<<<< HEAD
<<<<<<< HEAD
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2.38.4",;
import {corsHeaders} from "../_shared/cors.ts";
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.38.4",
import { corsHeaders } from "../_shared/cors.ts",
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface AnalyzeRequest {
  content: string,
  contentType: string,
  flagId?: string
<<<<<<< HEAD
<<<<<<< HEAD
}

interface AnalysisResult {
  classification: string;
  explanation: string,
  success: boolean
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.38.4",;
import { corsHeaders } from "../_shared/cors.ts",;
interface AnalyzeRequest {;
  content: string,;
  contentType: string,;
  flagId?: string;
}
;
interface AnalysisResult {;
  classification: string,;
  explanation: string,;
  success: boolean;

}
=======


}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  explanation: string
  success: boolean
}
// Initialize environment and clients
const initializeServices = () => {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL");
  const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const openaiApiKey = Deno && Deno.env.get("OPENAI_API_KEY");

=======


}

  explanation: string

  success: boolean
}
// Initialize environment and clients

const initializeServices = () => {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const openaiApiKey = Deno.env.get("OPENAI_API_KEY");
  if (!supabaseUrl |!supabaseServiceKey |!openaiApiKey) {
    throw new Error("Missing required environment variables")
  }
  return {
    supabase: createClient(supabaseUrl, supabaseServiceKey);
    openaiApiKey
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const supabaseUrl = Deno.env.get("SUPABASE_URL"),
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"),
  const openaiApiKey = Deno.env.get("OPENAI_API_KEY"),

  
<<<<<<< HEAD
  const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL");
  const supabaseServiceKey = Deno && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const openaiApiKey = Deno && Deno.env.get("OPENAI_API_KEY");
  if (!supabaseUrl || !supabaseServiceKey || !openaiApiKey) {
    throw new Error("Missing required environment variables")
=======
  if (!supabaseUrl || !supabaseServiceKey || !openaiApiKey) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    throw new Error("Missing required environment variables")

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2.38.4';,
import { cors_headers } from '../_shared / cors.ts';
interface AnalyzeRequest {
  content: string;
  content_type: string,
  flag_id?: string;
}
interface AnalysisResult {
  classification: string;
  explanation: string,
  success: boolean;
}
// Initialize environment and clients;
const initialize_services = () =>: any {
  const supabase_url = Deno.env.get ("SUPABASE_URL");
  const supabaseServiceKey = Deno.env.get ("SUPABASE_SERVICE_ROLE_KEY");
  const openaiApiKey = Deno.env.get ("OPENAI_API_KEY");
;
  // Check condition
if ( {) {
  $2
}
    throw new Error ("Missing required environment variables");
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  return {
    supabase: create_client (supabase_url, supabaseServiceKey);
    openaiApiKey;
  }
}

<<<<<<< HEAD



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Validate request content
const validateRequest = (data: unknown): AnalyzeRequest => {
  if (!data |typeof data !== 'object') {
    throw new Error("Invalid request body")
  }


  
  const request = data as AnalyzeRequest,
  


  if (!request.content) {
    throw new Error("No content provided for analysis")
  }
  if (!request.contentType) {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
}
  if (!request && request.content) {
    throw new Error("No content provided for analysis")
  }
  if (!request && request.contentType) {
<<<<<<< HEAD
    throw new Error("No content type provided")

import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4",;
import { corsHeaders } from "../_shared/cors.ts",;
;
interface AnalyzeRequest {;
  content:string,;
  contentType:string,;
  flagId?:string;}
;
interface AnalysisResult {;
  classification:string,;
  explanation:string,;
  success:boolean;
}
}

  explanation: string

  success: boolean
}
// Initialize environment and clients

const initializeServices = () => {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const openaiApiKey = Deno.env.get("OPENAI_API_KEY");
  if (!supabaseUrl |!supabaseServiceKey |!openaiApiKey) {
    throw new Error("Missing required environment variables")
  }
  return {
    supabase: createClient(supabaseUrl, supabaseServiceKey);
    openaiApiKey
  }
}
  const supabaseUrl = Deno.env.get("SUPABASE_URL"),
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"),
  const openaiApiKey = Deno.env.get("OPENAI_API_KEY"),
  
  if (!supabaseUrl || !supabaseServiceKey || !openaiApiKey) {
    throw new Error("Missing required environment variables")
  }
  
  return {
    supabase: createClient(supabaseUrl, supabaseServiceKey);
    openaiApiKey
  }
};
;
// Initialize environment and clients;
const initializeServices = () => {;
  const supabaseUrl = Deno.env.get("SUPABASE_URL"),;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"),;
  const openaiApiKey = Deno.env.get("OPENAI_API_KEY"),;
  if (!supabaseUrl || !supabaseServiceKey || !openaiApiKey) {;
    throw new Error("Missing required environment variables");
  }
;
  return {;
    supabase: createClient(supabaseUrl, supabaseServiceKey),;
    openaiApiKey;
  }
},

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Validate request content
const validateRequest = (data: unknown): AnalyzeRequest => {
  if (!data |typeof data !== 'object') {
    throw new Error("Invalid request body")
  }
  const request = data as AnalyzeRequest;
  
  const request = data as AnalyzeRequest,
  
  if (!request.content) {
    throw new Error("No content provided for analysis")
  }
  if (!request.contentType) {
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  
  if (!request && request.content) {
    throw new Error("No content provided for analysis")
  }
  
  if (!request && request.contentType) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    throw new Error("No content type provided")
  }
  return request
}
// Create prompt for OpenAI
const createAnalysisPrompt = (contentType: string, content: string): string => {
  return `
    You are an AI fraud detection assistant for the Zion AI Marketplace.
    Analyze this ${contentType} for signs of fraud, spam, phishing, or abuse.
    Content to analyze:
    """
    ${content}
    """
    Respond with one of these classifications: SAFE / SUSPICIOUS / DANGEROUS
    followed by a brief explanation (max 1-2 sentences) of your reasoning.
    Format your response exactly like: "CLASSIFICATION: explanation"
  `
<<<<<<< HEAD


},



<<<<<<< HEAD
},
// Call OpenAI API for content analysis
const analyzeWithOpenAI = async (prompt: string, openaiApiKey: string): Promise<{classification: string, explanation: string}> => {
  try {
=======
// Call OpenAI API for content analysis
const analyzeWithOpenAI = async (prompt: string, openaiApiKey: string): Promise<{classification: string, explanation: string}> => {
  try {
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST";
      headers: {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        "Content-Type": "application/json",
        "Authorization": `Bearer ${openaiApiKey}`},


      body: JSON.stringify({
        model: "gpt-4o-mini"
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openaiApiKey}`};
      body: JSON && JSON.stringify({
        model: "gpt-4o-mini",
<<<<<<< HEAD
        messages: [


          { role: "system", content: "You are a fraud detection assistant that analyzes content for signs of fraud, spam, or abuse." },
          { role: "user", content: prompt }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
},

// Call OpenAI API for content analysis
const analyzeWithOpenAI = async (prompt: string, openaiApiKey: string): Promise<{classification: string, explanation: string}> => {
  try {
<<<<<<< HEAD
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
=======
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openaiApiKey}`}
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openaiApiKey}`},
      body: JSON.stringify({
        model: "gpt-4o-mini"
        messages: [
          { role: "system", content: "You are a fraud detection assistant that analyzes content for signs of fraud, spam, or abuse." }
          { role: "user", content: prompt }
        ];
        temperature: 0.3
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        messages: [


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          { role: "system", content: "You are a fraud detection assistant that analyzes content for signs of fraud, spam, or abuse." },
          { role: "user", content: prompt }
        ],
        temperature: 0.3,
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        max_tokens: 150
      })
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("OpenAI API error:", data.error);
<<<<<<< HEAD
<<<<<<< HEAD
        ];
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        temperature: 0 && 0.3,
        max_tokens: 150
      })
    });
<<<<<<< HEAD
<<<<<<< HEAD
    const data = await response && response.json();
=======
    
    const data = await response && response.json();
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!response && response.ok) {
      console && console.error("OpenAI API error:", data && data.error);
      throw new Error(`OpenAI API error: ${data && data.error?.message || "Unknown error"}`)
    }
<<<<<<< HEAD
    const analysisText = data && data.choices[0]?.message?.content || "";
    console && console.log("OpenAI analysis result:", analysisText);
    // Parse the result
    let classification = "SAFE";
    let explanation = "No issues detected.";
    if (analysisText && analysisText.includes("SUSPICIOUS")) {
    const response = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
      method: &quot;POST&quot;,
      headers: {
        &quot;Content-Type&quot;: &quot;application/json&quot;,
        &quot;Authorization&quot;: `Bearer ${openaiApiKey}`},
      body: JSON.stringify({
        model: &quot;gpt-4o-mini&quot;,
        messages: [
          { role: &quot;system&quot;, content: &quot;You are a fraud detection assistant that analyzes content for signs of fraud, spam, or abuse.&quot; },
          { role: &quot;user&quot;, content: prompt }        ],
        temperature: 0.3,
        max_tokens: 150
      })
    }),
    
    const data = await response.json(),
    
    if (!response.ok) {
      console.error("OpenAI API error:", data.error),
      throw new Error(`OpenAI API error: ${data.error?.message || "Unknown error"}`)
    }
    
    const analysisText = data.choices[0]?.message?.content || "",
    // // // console.log("OpenAI analysis result:", analysisText),
    
    // Parse the result
    let classification = "SAFE",
    let explanation = "No issues detected.",
    
    if (analysisText.includes("SUSPICIOUS")) {
      classification = "SUSPICIOUS"
    } else if (analysisText && analysisText.includes("DANGEROUS")) {
      classification = "DANGEROUS"
      throw new Error(`OpenAI API error: ${data.error?.message |"Unknown error"}`)
    }
    const analysisText = data.choices[0]?.message?.content |"";
    
    const analysisText = data.choices[0]?.message?.content || "";
    console.log("OpenAI analysis result:", analysisText);
    // Parse the result
    let classification = "SAFE";
    let explanation = "No issues detected.";
    if (analysisText.includes("SUSPICIOUS")) {
      classification = "SUSPICIOUS"
    } else if (analysisText.includes("DANGEROUS")) {
      classification = "DANGEROUS"
    }
    // Extract explanation
    if (analysisText.includes(": ")) {
      explanation = analysisText.split(":")[1].trim()
    }
      throw new Error(`OpenAI API error: ${data.error?.message || "Unknown error"}`)
    }
;
    const analysisText = data.choices[0]?.message?.content || "",;
    // // // console.log("OpenAI analysis result:", analysisText),;
    // Parse the result;
    let classification = "SAFE",;
    let explanation = "No issues detected.",;
    if (analysisText.includes("SUSPICIOUS")) {;
      classification = "SUSPICIOUS";
    } else if (analysisText.includes("DANGEROUS")) {;
      classification = "DANGEROUS";
=======
    
    const data = await response && response.json();
    
    if (!response && response.ok) {
      console && console.error("OpenAI API error:", data && data.error);
      throw new Error(`OpenAI API error: ${data && data.error?.message || "Unknown error"}`)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    
    // Extract explanation
=======
    
    const analysisText = data && data.choices[0]?.message?.content || "";
    console && console.log("OpenAI analysis result:", analysisText);
    
    // Parse the result
    let classification = "SAFE";
    let explanation = "No issues detected.";
    
    if (analysisText && analysisText.includes("SUSPICIOUS")) {

      classification = "SUSPICIOUS"
    } else if (analysisText && analysisText.includes("DANGEROUS")) {
      classification = "DANGEROUS"
    }
    // Extract explanation
    if (analysisText && analysisText.includes(": ")) {
      explanation = analysisText && analysisText.split(":")[1].trim()
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    }
    
    // Extract explanation
    if (analysisText.includes(": ")) {
      explanation = analysisText.split(":")[1].trim()
<<<<<<< HEAD
<<<<<<< HEAD
    }
    
;
    // Extract explanation;
    if (analysisText.includes(": ")) {;
      explanation = analysisText.split(":")[1].trim();
    }
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return { classification, explanation }
  } catch (error) {
    console && console.error("Error calling OpenAI:", error);
    throw error
  }
<<<<<<< HEAD


<<<<<<< HEAD
    return { classification, explanation }
  } catch (error) {
    console.error("Error calling OpenAI:", error),
    throw error
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
// Update flag in database if flagId was provided
const updateFraudFlag = async (
  supabase: ReturnType<typeof createClient>;
  flagId: string
  classification: string
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
},

// Update flag in database if flagId was provided
const updateFraudFlag = async (
  supabase: ReturnType<typeof createClient>,
  flagId: string,
  classification: string, 
<<<<<<< HEAD
<<<<<<< HEAD
}
    if (analysisText.includes(": ")) {
      explanation = analysisText.split(":")[1].trim()    }
    
    return { classification, explanation }
  } catch (error) {
    console.error("Error calling OpenAI:", error),
    throw error  }
},
    const _data = await response.json();
    
    if (!response.ok) {_throw new Error(`OpenAI API error: ${data.error?.message || "Unknown error"}`);
    }
    
    const _analysisText = data.choices[0]?.message?.content || "";
    
    
    // Parse the result
    let _classification = "SAFE";
    let _explanation = "No issues detected.";
    
    if (analysisText.includes("SUSPICIOUS")) {_classification = "SUSPICIOUS";} else if (analysisText.includes("DANGEROUS")) {_classification = "DANGEROUS";}
    
    // Extract explanation
    if (analysisText.includes(":")) {_explanation = analysisText.split(":")[1].trim();}
    
    return {_classification, _explanation};
  } catch (error) {_throw error;}
};

// Update flag in database if flagId was provided
const _updateFraudFlag = async (
  supabase: ReturnType<typeof createClient>,
  flagId: string,
  classification: string,
  explanation: string
): Promise<void> => {
  if (!flagId) return,
  
  const { error } = await supabase
    .from(&quot;fraud_flags&quot;)
    .update({
      gpt_classification: classification.toLowerCase(),
      gpt_explanation: explanation,
      updated_at: new Date().toISOString()
    })
    .eq("id", flagId),
  
  if (error) {
  
  console && console.log(`Updated fraud flag ${flagId} with classification: ${classification}`)
};
    console.error("Error updating fraud flag:", error),
    throw new Error(`Error updating fraud flag: ${error.message}`)
  }
  
  // // // console.log(`Updated fraud flag ${flagId} with classification: ${classification}`)
},};

// Main request handler
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {

    console && console.log("Received content analysis request");
    


    // // // console.log("Received content analysis request"),
    

    console && console.log("Received content analysis request");
    // // // console.log("Received content analysis request"),    
    // Initialize services
    const { supabase, openaiApiKey } = initializeServices(),
    
    // Parse and validate request
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  explanation: string
): Promise<void> => {
  if (!flagId) return
  const { error } = await supabase
    .from("fraud_flags")
    .update({
<<<<<<< HEAD
<<<<<<< HEAD
      gpt_classification: classification.toLowerCase();
      gpt_explanation: explanation
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      gpt_classification: classification && classification.toLowerCase();
      gpt_explanation: explanation,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      updated_at: new Date().toISOString()
    })
    .eq("id", flagId);
  if (error) {
<<<<<<< HEAD
<<<<<<< HEAD
    console.error("Error updating fraud flag:", error);
    throw new Error(`Error updating fraud flag: ${error.message}`)
=======
    console && console.error("Error updating fraud flag:", error);
    throw new Error(`Error updating fraud flag: ${error && error.message}`)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  console.log(`Updated fraud flag ${flagId} with classification: ${classification}`)
}
  
  // // // console.log(`Updated fraud flag ${flagId} with classification: ${classification}`)
},
<<<<<<< HEAD
=======
    console && console.error("Error updating fraud flag:", error);
    throw new Error(`Error updating fraud flag: ${error && error.message}`)
  }

  
  console && console.log(`Updated fraud flag ${flagId} with classification: ${classification}`)
};



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

// Main request handler
serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method === "OPTIONS") {
=======
  if (req && req.method === "OPTIONS") {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return new Response(null, { headers: corsHeaders })
  }
  try {
    console.log("Received content analysis request");
    // // // console.log("Received content analysis request"),
    
    // Initialize services
    const { supabase, openaiApiKey } = initializeServices();
    // Parse and validate request
<<<<<<< HEAD
    const requestData = await req.json().catch(err => {
      console.error("Error parsing request JSON:", err);
      throw new Error("Invalid JSON in request body")
    });
    const { content, contentType, flagId } = validateRequest(requestData);
    console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` : ''}`);
=======
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {

    console && console.log("Received content analysis request");
    

=======

    // // // console.log("Received content analysis request"),
    

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    // Initialize services
    const { supabase, openaiApiKey } = initializeServices();
    // Parse and validate request
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const requestData = await req && req.json().catch(err => {
      console && console.error("Error parsing request JSON:", err);
      throw new Error("Invalid JSON in request body")
    });
    const { content, contentType, flagId } = validateRequest(requestData);
<<<<<<< HEAD

    console && console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` : ''}`);
    

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` : ''}`);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Create prompt and analyze with OpenAI
    const prompt = createAnalysisPrompt(contentType, content);
    const { classification, explanation } = await analyzeWithOpenAI(prompt, openaiApiKey);
    // Update flag if flagId was provided
    if (flagId) {
      await updateFraudFlag(supabase, flagId, classification, explanation)
    }
    // Return the analysis result
    const result: AnalysisResult = {
<<<<<<< HEAD
<<<<<<< HEAD
      classification: classification.toLowerCase();
      explanation
      success: true}
    console.log("Analysis completed successfully:", result);
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })
  } catch (error) {
    console.error("Error analyzing content:", error);
    // Determine appropriate status code based on error
    const statusCode = error.message?.includes("Invalid") ? 400 : 500;
    return new Response(
      JSON.stringify({
        error: error.message |"An unexpected error occurred"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      classification: classification && classification.toLowerCase();
      explanation,
      success: true};
    
    console && console.log("Analysis completed successfully:", result);
    return new Response(JSON && JSON.stringify(result), { 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 

    })
  } catch (error) {

    console && console.error("Error analyzing content:", error);
    
    // Determine appropriate status code based on error
    const statusCode = error && error.message?.includes("Invalid") ? 400 : 500;
    
    return new Response(
      JSON && JSON.stringify({ 
        error: error && error.message || "An unexpected error occurred",

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        success: false});
      {
        status: statusCode
        headers: { ...corsHeaders, "Content-Type": "application/json" }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    )
  }
});

    
    const { content, contentType, flagId } = validateRequest(requestData),
    // // // console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` : ''}`),
    
    
    return new Response(
      JSON.stringify({ 
        error: error.message || "An unexpected error occurred",
        success: false}),
      { 
        status: statusCode, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
<<<<<<< HEAD
      }
    )
  } catch (error) {;
    console.error("Error calling OpenAI:", error),;
    throw error;
  }
},;
// Update flag in database if flagId was provided;
const updateFraudFlag = async (;
  supabase: ReturnType<typeof createClient>,;
  flagId: string,;
  classification: string,;
  explanation: string;
): Promise<void> => {;
  if (!flagId) return,;
  const { error } = await supabase;
    .from("fraud_flags");
    .update({;
      gpt_classification: classification.toLowerCase(),;
      gpt_explanation: explanation,;
      updated_at: new Date().toISOString();
    });
    .eq("id", flagId),;
  if (error) {;
    console.error("Error updating fraud flag:", error),;
    throw new Error(`Error updating fraud flag: ${error.message}`);
  }
;
  // // // console.log(`Updated fraud flag ${flagId} with classification: ${classification}`);
},;
// Main request handler;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    // // // console.log("Received content analysis request"),;
    // Initialize services;
    const { supabase, openaiApiKey } = initializeServices(),;
    // Parse and validate request;
    const requestData = await req.json().catch(err => {;
      console.error("Error parsing request JSON:", err),;
      throw new Error("Invalid JSON in request body");
    }),;
    const { content, contentType, flagId } = validateRequest(requestData),;
    // // // console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` : ''}`),;
    // Create prompt and analyze with OpenAI;
    const prompt = createAnalysisPrompt(contentType, content),;
    const { classification, explanation } = await analyzeWithOpenAI(prompt, openaiApiKey),;
    // Update flag if flagId was provided;
    if (flagId) {;
      await updateFraudFlag(supabase, flagId, classification, explanation);
    }
;
    // Return the analysis result;
    const result: AnalysisResult = {;
      classification: classification.toLowerCase(),;
      explanation,;
      success: true},;
    // // // console.log("Analysis completed successfully:", result),;
    return new Response(JSON.stringify(result), {;
      headers: { ...corsHeaders, "Content-Type": "application/json" } ;
    });
  } catch (error) {;
    console.error("Error analyzing content:", error),;
    // Determine appropriate status code based on error;
    const statusCode = error.message?.includes("Invalid") ? 400 : 500,;
    return new Response(;
      JSON.stringify({;
        error: error.message || "An unexpected error occurred",;
        success: false}),;
      {;
        status: statusCode,;
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      }
    );

    console && console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` : ''}`);
    const requestData = await req.json().catch(err => {
      console.error("Error parsing request JSON:", err),
      throw new Error("Invalid JSON in request body")
    }),
    
    const { content, contentType, flagId } = validateRequest(requestData),
    // // // console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` : ''}`),    
    // Create prompt and analyze with OpenAI
    const prompt = createAnalysisPrompt(contentType, content),
    const { classification, explanation } = await analyzeWithOpenAI(prompt, openaiApiKey),
    
    // Update flag if flagId was provided
    if (flagId) {
      await updateFraudFlag(supabase, flagId, classification, explanation)
    }
    
    // Return the analysis result
    const result: AnalysisResult = {
      classification: classification.toLowerCase(),
      explanation,
      success: true},
    
    // // // console.log("Analysis completed successfully:", result),
    return new Response(JSON.stringify(result), { 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    })

  } catch (error) {
        success: false});
      {
        status: statusCode
        headers: { ...corsHeaders, "Content-Type": "application/json" }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
// Validate request content;
const validate_request = (data: unknown): AnalyzeRequest => {
  // Check condition
if ( {) {
  $2
}
    throw new Error ("Invalid request body");
  }
  const request = data as AnalyzeRequest;
;
  // Check condition
if ( {) {
  $2
}
    throw new Error ("No content provided for analysis");
  }
  // Check condition
if ( {) {
  $2
}
    throw new Error ("No content type provided");
  }
  return request;
}
;
// Create prompt for OpenAI;
const createAnalysisPrompt = (content_type: string, content: string): string => {
  return `;
    You are an AI fraud detection assistant for the Zion AI Marketplace.;
    Analyze this ${content_type} for signs of fraud, spam, phishing, or abuse.;
    Content to analyze:;
    """;
    ${content}
    """;
    Respond with one of these classifications: SAFE / SUSPICIOUS / DANGEROUS;
    followed by a brief explanation (max 1 - 2 sentences) of your reasoning.;
    Format your response exactly like: "CLASSIFICATION: explanation";
  `;
}
;
// Call OpenAI API for content analysis;
const analyzeWithOpenAI = async (prompt: string, openaiApiKey: string): Promise<{classification: string, explanation: string}> => {
  try {
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {
      method: "POST";
      headers: {
        "Content - Type": "application / json",
        "Authorization": `Bearer ${openaiApiKey}`}
      body: JSON.stringify ({
        model: "gpt - 4o - mini",
        messages: [;
          { role: "system", content: "You are a fraud detection assistant that analyzes content for signs of fraud, spam, or abuse." }
          { role: "user", content: prompt }
        ];
        temperature: 0.3,
        max_tokens: 150;
      });
    });
;
    const data = await response.json ();
;
    // Check condition
if ( {) {
  $2
}
      console.error ("OpenAI API error:", data.error);
      throw new Error (`OpenAI API error: ${data.error?.message || "Unknown error"}`);
    }
    const analysis_text = data.choices[0]?.message?.content || "";
    console.log ("OpenAI analysis result:", analysis_text);
;
    // Parse the result;
    let classification = "SAFE";
    let explanation = "No issues detected.";
;
    if () {) {
  $2
}
      classification = "SUSPICIOUS";
    } else if () {) {
  $2
}
      classification = "DANGEROUS";
    }
    // Extract explanation;
    if () {) {
  $2
}
      explanation = analysis_text.split (":")[1].trim ();
    }
    return { classification, explanation }
  } catch (error) {
    console.error ("Error calling OpenAI:", error);
    throw error;
  }
}
;
// Update flag in database if flag_id was provided;
const updateFraudFlag = async (
  supabase: ReturnType < typeof create_client>;
  flag_id: string,
  classification: string,
  explanation: string): Promise < void> => {
  // Check condition
if (return, ) {
  $2
}
  const { error } = await supabase;
    .from ("fraud_flags");
    .update ({
      gpt_classification: classification.toLowerCase ();
      gpt_explanation: explanation,
      updated_at: new Date ().toISOString ();
    });
    .eq ("id", flag_id);
;
  // Check condition
if ( {) {
  $2
}
    console.error ("Error updating fraud flag:", error);
    throw new Error (`Error updating fraud flag: ${error.message}`);
  }
  console.log (`Updated fraud flag ${flag_id} with classification: ${classification}`);
}
;
// Main request handler;
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  try {
    console.log ("Received content analysis request");
;
    // Initialize services;
    const { supabase, openaiApiKey } = initialize_services ();
;
    // Parse and validate request;
    const request_data = await req.json ().catch (err => {
      console.error ("Error parsing request JSON:", err);
      throw new Error ("Invalid JSON in request body");
    });
;
    const { content, content_type, flag_id } = validate_request (request_data);
    console.log (`Analyzing ${content_type} content${flag_id ? ` for flag ID ${flag_id}` : ''}`);
;
    // Create prompt and analyze with OpenAI;
    const prompt = createAnalysisPrompt (content_type, content);
    const { classification, explanation } = await analyzeWithOpenAI (prompt, openaiApiKey);
;
    // Update flag if flag_id was provided;
    // Check condition
if ( {) {
  $2
}
      await updateFraudFlag (supabase, flag_id, classification, explanation);
    }
    // Return the analysis result;
    const result: AnalysisResult = {
      classification: classification.toLowerCase ();
      explanation,
      success: true}
;
    console.log ("Analysis completed successfully:", result);
    return new Response (JSON.stringify (result), {
      headers: { ...cors_headers, "Content - Type": "application / json" }
    });
  } catch (error) {
    console.error ("Error analyzing content:", error);
;
    // Determine appropriate status code based on error;
    const status_code = error.message?.includes ("Invalid") ? 400 : 500;
;
    return new Response (
      JSON.stringify ({
        error: error.message || "An unexpected error occurred",
        success: false});
      {
        status: status_code,
        headers: { ...cors_headers, "Content - Type": "application / json" }
    console.error("Error analyzing content:", error),
    
    // Determine appropriate status code based on error
    const statusCode = error.message?.includes("Invalid") ? 400 : 500,    
    return new Response(
      JSON.stringify({ 
        error: error.message || &quot;An unexpected error occurred&quot;,
        success: false}),
      { 
        status: statusCode, 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json" } 
serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_// Initialize services
    const { supabase, _openaiApiKey} = initializeServices();
    
    // Parse and validate request
    const _requestData = await req.json().catch(err => {_throw new Error("Invalid JSON in request body");});
    
    const {_content, _contentType, _flagId} = validateRequest(requestData);
    
    
    // Create prompt and analyze with OpenAI
    const _prompt = createAnalysisPrompt(contentType, content);
    const {_classification, _explanation} = await analyzeWithOpenAI(prompt, openaiApiKey);
    
    // Update flag if flagId was provided
    if (flagId) {_await updateFraudFlag(supabase, _flagId, _classification, _explanation);}
    
    // Return the analysis result
    const result: AnalysisResult = {_classification: classification.toLowerCase(), _explanation, _success: true};
    
    
    return new Response(JSON.stringify(result), {_headers: { ...corsHeaders, _"Content-Type": "application/json"} 
    });

  } catch (error) {_// Determine appropriate status code based on error
    const _statusCode = error.message?.includes("Invalid") ? 400 : 500;
    
    return new Response(
      JSON.stringify({ 
        error: error.message || "An unexpected error occurred", _success: false}),
      {_status: statusCode, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    );
    console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` : ''}`);

    
    const { content, contentType, flagId } = validateRequest(requestData),
    // // // console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` : ''}`),
    
    
    return new Response(
      JSON.stringify({ 
        error: error.message || "An unexpected error occurred",
        success: false}),
      { 
        status: statusCode, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 

<<<<<<< HEAD
  }
}),;}return request;
};
//Create prompt for OpenAI const createAnalysisPrompt = (contentType: string, content: string) : string => {
  return ` You are an AI fraud detection assistant for the Zion AI Marketplace. Analyze this $ {
  contentType 
}for signs of fraud, spam, phishing, or abuse. Content to analyze: Respond with one of these classifications: SAFE / SUSPICIOUS /DANGEROUS followed by a brief explanation (max 1-2 sentences) of your reasoning. //Call OpenAI API for content analysis ];
temperature: 0.3;
max tokens: 150 
}) 
});
}return {
  classification, explanation 
}
}catch (error) {
  
}
};
flagId: string;
classification: string;
explanation: string 
};
  supabase, openaiApiKey 
}= initializeServices ();
//Parse and validate request const requestData = await req.json () .catch (err => {
  //Create prompt and analyze with OpenAI const prompt = createAnalysisPrompt (contentType, content);
const {
  classification, explanation 
}= await analyzeWithOpenAI (prompt, openaiApiKey);
//Update flag if flagId was provided if (flagId) {
  await updateFraudFlag (supabase, flagId, classification, explanation) 
}//Return the analysis result const result: AnalysisResult = {
  classification: classification.toLowerCase ();
explanation;
success: true 
};
return new Response (JSON.stringify ({
  error: error.message || "An unexpected error occurred";
success: false 
});
{
  status: statusCode;
headers: {
  ...corsHeaders, "Content-Type" : "application/json" 
}
}) 
}
});
  }
});
  }
});
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});

;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
