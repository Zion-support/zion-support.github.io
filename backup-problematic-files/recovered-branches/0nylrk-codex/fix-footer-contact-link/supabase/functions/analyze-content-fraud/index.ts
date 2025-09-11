
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
;
// Initialize environment and clients;
const initializeServices = () => {;
  const supabaseUrl = Deno.env.get("SUPABASE_URL"),;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"),;
  const openaiApiKey = Deno.env.get("OPENAI_API_KEY"),;
  ;
  if (!supabaseUrl || !supabaseServiceKey || !openaiApiKey) {;
    throw new Error("Missing required environment variables"),;
  }
  ;
  return {;
    supabase:createClient(supabaseUrl, supabaseServiceKey),;
    openaiApiKey;
  },;
},;
;
// Validate request content;
const validateRequest = (data:unknown):AnalyzeRequest => {;
  if (!data || typeof data !== 'object') {;
    throw new Error("Invalid request body");
  }
  ;
  const request = data as AnalyzeRequest,;
  ;
  if (!request.content) {;
    throw new Error("No content provided for analysis"),;
  }
  ;
  if (!request.contentType) {;
    throw new Error("No content type provided"),;
  }
  ;
  return request,;
},;
;
// Create prompt for OpenAI;
const createAnalysisPrompt = (contentType:string, content:string):string => {;
  return `;
    You are an AI fraud detection assistant for the Zion AI Marketplace.;
    Analyze this ${contentType} for signs of fraud, spam, phishing, or abuse.;
    ;
    Content to analyze:;
    """;
    ${content}
    """;
    ;
    Respond with one of these classifications:SAFE / SUSPICIOUS / DANGEROUS;
    followed by a brief explanation (max 1-2 sentences) of your reasoning.;
    Format your response exactly like:"CLASSIFICATION:explanation";
  `;
},;
;
// Call OpenAI API for content analysis;
const analyzeWithOpenAI = async (prompt:string, openaiApiKey:string):Promise<{classification:string, explanation:string}> => {;
  try {;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method:"POST",;
      headers:{;
        "Content-Type":"application/json",;
        "Authorization":`Bearer ${openaiApiKey}`},;
      body:JSON.stringify({;
        model:"gpt-4o-mini",;
        messages:[;
          { role:"system", content:"You are a fraud detection assistant that analyzes content for signs of fraud, spam, or abuse." },;
          { role:"user", content:prompt }
        ],;
        temperature:0.3,;
        max_tokens:150;
      });
    }),;
    ;
    const data = await response.json(),;
    ;
    if (!response.ok) {;
      console.error("OpenAI API error:", data.error),;
      throw new Error(`OpenAI API error:${data.error?.message || "Unknown error"}`),;
    }
    ;
    const analysisText = data.choices[0]?.message?.content || "",;
    // // // console.log("OpenAI analysis result:", analysisText),;
    ;
    // Parse the result;
    let classification = "SAFE",;
    let explanation = "No issues detected.",;
    ;
    if (analysisText.includes("SUSPICIOUS")) {;
      classification = "SUSPICIOUS",;
    } else if (analysisText.includes("DANGEROUS")) {;
      classification = "DANGEROUS",;
    }
    ;
    // Extract explanation;
    if (analysisText.includes(":")) {;
      explanation = analysisText.split(":")[1].trim();
    }
    ;
    return { classification, explanation },;
  } catch (error) {;
    console.error("Error calling OpenAI:", error),;
    throw error,;
  }
},;
;
// Update flag in database if flagId was provided;
const updateFraudFlag = async (;
  supabase:ReturnType<typeof createClient>,;
  flagId:string,;
  classification:string, ;
  explanation:string;
):Promise<void> => {;
  if (!flagId) return,;
  ;
  const { error } = await supabase;
    .from("fraud_flags");
    .update({;
      gpt_classification:classification.toLowerCase(),;
      gpt_explanation:explanation,;
      updated_at:new Date().toISOString();
    });
    .eq("id", flagId),;
  ;
  if (error) {;
    console.error("Error updating fraud flag:", error),;
    throw new Error(`Error updating fraud flag:${error.message}`),;
  }
  ;
  // // // console.log(`Updated fraud flag ${flagId} with classification:${classification}`),;
},;
;
// Main request handler;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  try {;
    // // // console.log("Received content analysis request"),;
    ;
    // Initialize services;
    const { supabase, openaiApiKey } = initializeServices(),;
    ;
    // Parse and validate request;
    const requestData = await req.json().catch(err => {;
      console.error("Error parsing request JSON:", err),;
      throw new Error("Invalid JSON in request body"),;
    }),;
    ;
    const { content, contentType, flagId } = validateRequest(requestData),;
    // // // console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` :''}`),;
    ;
    // Create prompt and analyze with OpenAI;
    const prompt = createAnalysisPrompt(contentType, content),;
    const { classification, explanation } = await analyzeWithOpenAI(prompt, openaiApiKey),;
    ;
    // Update flag if flagId was provided;
    if (flagId) {;
      await updateFraudFlag(supabase, flagId, classification, explanation),;
    }
    ;
    // Return the analysis result;
    const result:AnalysisResult = {;
      classification:classification.toLowerCase(),;
      explanation,;
      success:true},;
    ;
    // // // console.log("Analysis completed successfully:", result),;
    return new Response(JSON.stringify(result), { ;
      headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
    }),;
;
  } catch (error) {;
    console.error("Error analyzing content:", error),;
    ;
    // Determine appropriate status code based on error;
    const statusCode = error.message?.includes("Invalid") ? 400 :500,;
    ;
    return new Response(;
      JSON.stringify({ ;
        error:error.message || "An unexpected error occurred",;
        success:false}),;
      { ;
        status:statusCode, ;
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
      }
    ),;  
}const request = data as AnalyzeRequest;
if (!request.content) {
  if (!request.contentType) {
    throw new Error("No content type provided")  
  if (!request.contentType) {
    throw new Error(&quot;No content type provided&quot;);
  }
  
  return request
},

// Create prompt for OpenAI
const _createAnalysisPrompt = (contentType: string, content: string): string => {_return `
    You are an AI fraud detection assistant for the Zion AI Marketplace.
    Analyze this ${contentType} for signs of fraud, spam, phishing, or abuse.
    
    Content to analyze:
    &quot;"&quot;
    ${content}
    &quot;"&quot;    
    Respond with one of these classifications: SAFE / SUSPICIOUS / DANGEROUS
    followed by a brief explanation (max 1-2 sentences) of your reasoning.
    Format your response exactly like: "CLASSIFICATION: explanation"
  `
},
// Call OpenAI API for content analysis
const analyzeWithOpenAI = async (prompt: string, openaiApiKey: string): Promise<{classification: string, explanation: string}> => {
  try {
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
    } else if (analysisText.includes("DANGEROUS")) {
      classification = "DANGEROUS"
    }
    
    // Extract explanation
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
    console.error("Error updating fraud flag:", error),
    throw new Error(`Error updating fraud flag: ${error.message}`)
  }
  
  // // // console.log(`Updated fraud flag ${flagId} with classification: ${classification}`)
},};

// Main request handler
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // // // console.log("Received content analysis request"),    
    // Initialize services
    const { supabase, openaiApiKey } = initializeServices(),
    
    // Parse and validate request
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
    )
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
