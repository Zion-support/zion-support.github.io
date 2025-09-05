<<<<<<< HEAD
import { serve } from "https://deno.land/std@0.190.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
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
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!openAIApiKey) {;
      throw new Error("OpenAI API key is not set in environment variables"),;
    }
;
    const { modelId, jobId } = await req.json(),;
    ;
    if (!modelId && !jobId) {;
      throw new Error("Either modelId or jobId is required"),;
    }
    ;
    // If we have a specific job ID, check that job;
    // Otherwise, look up the job ID from our database first;
    let finetuneJobId = jobId,;
    ;
    if (!finetuneJobId) {;
      // This would require a database lookup in the real implementation;
      // For now, we'll simulate a response;
      ;
      // In a real implementation, you would:;
      // 1. Query your database to find the job ID associated with this model ID;
      // 2. Then use that job ID to check status with OpenAI;
      ;
      // Mock response for demonstration (in real code, fetch from DB);
      finetuneJobId = `ft-job-${modelId}-${Date.now()}`,;
    }
    ;
    // Check the status from OpenAI API;
    const response = await fetch(`https://api.openai.com/v1/fine_tuning/jobs/${finetuneJobId}`, {;
      method:"GET",;
      headers:{;
        "Authorization":`Bearer ${openAIApiKey}`,;
        "Content-Type":"application/json"}}),;
;
    if (!response.ok) {;
      // If 404, the job doesn't exist or is deleted;
      if (response.status === 404) {;
        return new Response(;
          JSON.stringify({ status:"unknown", error:"Fine-tuning job not found" }),;
          { headers:{ ...corsHeaders, "Content-Type":"application/json" } }
        ),;
      }
      ;
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error:${JSON.stringify(errorData)}`),;
    }
;
    const data = await response.json(),;
    ;
    // Map OpenAI status to our internal status names;
    let status,;
    let error = null,;
    ;
    switch(data.status) {;
      case "succeeded":status = "succeeded",;
        break,;
      case "failed":;
        status = "failed",;
        error = data.error?.message || "Unknown error occurred during training",;
        break,;
      case "cancelled":;
        status = "failed",;
        error = "Training job was cancelled",;
        break,;
      case "running":;
        status = "running",;
        break,;
      default:;
        status = "queued";
    }
    ;
    return new Response(;
      JSON.stringify({ ;
        status, ;
        error,;
        progress:data.trained_tokens ? {;
          trainedTokens:data.trained_tokens,;
          trainingFiles:data.training_file} null;
      }),;
      { headers:{ ...corsHeaders, "Content-Type":"application/json" } }
    ),;
  } catch (error) {;
    console.error("Error in check-training-status function:", error),;
    ;
    return new Response(;
      JSON.stringify({ error:error.message }),;
      {;
        status:500,;
        headers:{ ...corsHeaders, "Content-Type":"application/json" }}
    ),;
=======
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")    }

    const { modelId, jobId } = await req.json(),
    
    if (!modelId && !jobId) {
      throw new Error("Either modelId or jobId is required")    }
    
    // If we have a specific job ID, check that job
    // Otherwise, look up the job ID from our database first
    let finetuneJobId = jobId,
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  try {_const _openAIApiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables");}

    const {_modelId, _jobId} = await req.json();
    
    if (!modelId && !jobId) {_throw new Error("Either modelId or jobId is required");}
    
    // If we have a specific job ID, check that job
    // Otherwise, look up the job ID from our database first
    let _finetuneJobId = jobId;
    
    if (!finetuneJobId) {_// This would require a database lookup in the real implementation
      // For now, _we'll simulate a response
      
      // In a real implementation, _you would:
      // 1. Query your database to find the job ID associated with this model ID
      // 2. Then use that job ID to check status with OpenAI
      
      // Mock response for demonstration (in real code, fetch from DB)
      finetuneJobId = `ft-job-${modelId}-${Date.now()}`
    }
    
    // Check the status from OpenAI API
    const response = await fetch(`https://api.openai.com/v1/fine_tuning/jobs/${finetuneJobId}`, {
      method: &quot;GET&quot;,
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"}}),
        &quot;Authorization&quot;: `Bearer ${openAIApiKey}`,
        &quot;Content-Type&quot;: &quot;application/json&quot;}});

    if (!response.ok) {_// If 404, _the job doesn't exist or is deleted
      if (response.status === 404) {
        return new Response(
          JSON.stringify({ status: "unknown", error: "Fine-tuning job not found" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        )        );
      }
      
      const errorData = await response.json(),
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json(),
    
    // Map OpenAI status to our internal status names
    let status,
    let error = null,
    
    switch(data.status) {
      case "succeeded": status = "succeeded",
        break,      case "failed":
        status = "failed",
        error = data.error?.message || "Unknown error occurred during training",
        break,
      case "cancelled":
        status = "failed",
        error = "Training job was cancelled",
        break,
      case "running":
        status = "running",
        break,
      default:
        status = "queued"
      case &quot;succeeded&quot;:
        status = &quot;succeeded&quot;;
        break;
      case &quot;failed&quot;:
        status = &quot;failed&quot;;
        error = data.error?.message || &quot;Unknown error occurred during training&quot;;
        break;
      case &quot;cancelled&quot;:
        status = &quot;failed&quot;;
        error = &quot;Training job was cancelled&quot;;
        break;
      case &quot;running&quot;:
        status = &quot;running&quot;;
        break;
      default:
        status = &quot;queued&quot;;
    }    
    return new Response(
      JSON.stringify({_status, _error, _progress: data.trained_tokens ? {
          trainedTokens: data.trained_tokens, _trainingFiles: data.training_file} : null
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {
    console.error("Error in check-training-status function:", error),    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )    );
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
}),;
