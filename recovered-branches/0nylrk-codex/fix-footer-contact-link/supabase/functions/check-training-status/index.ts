<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
=======

import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";

import "https://deno.land/x/xhr@0.1.0/mod.ts";
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",



<<<<<<< HEAD
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



    const { modelId, jobId } = await req && req.json();
<<<<<<< HEAD
    if (!modelId && !jobId) {
      throw new Error("Either modelId or jobId is required")
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const { modelId, jobId } = await req.json();
    if (!modelId && !jobId) {
      throw new Error("Either modelId or jobId is required")
    }
    // If we have a specific job ID, check that job
    // Otherwise, look up the job ID from our database first
    let finetuneJobId = jobId;
    if (!finetuneJobId) {
      // This would require a database lookup in the real implementation
      // For now, we'll simulate a response
      // In a real implementation, you would:
      // 1. Query your database to find the job ID associated with this model ID
      // 2. Then use that job ID to check status with OpenAI
      // Mock response for demonstration (in real code, fetch from DB)
<<<<<<< HEAD
=======
=======
      finetuneJobId = `ft-job-${modelId}-${Date.now()}`
    }



    const { modelId, jobId } = await req && req.json();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!modelId && !jobId) {
      throw new Error("Either modelId or jobId is required")

    const response = await fetch(`https://api && api.openai.com/v1/fine_tuning/jobs/${finetuneJobId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"}});

    if (!response && response.ok) {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // If 404, the job doesn't exist or is deleted
      if (response && response.status === 404) {
        return new Response(
          JSON && JSON.stringify({ status: "unknown", error: "Fine-tuning job not found" });
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        )
      }
<<<<<<< HEAD
      const errorData = await response && response.json();
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }
    const data = await response && response.json();
    // Map OpenAI status to our internal status names
    let status;
    let error = null;
    switch(data && data.status) {
=======

      
      const errorData = await response && response.json();
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }

    const data = await response && response.json();
    
    // Map OpenAI status to our internal status names
    let status;
    let error = null;
    
    switch(data && data.status) {

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';
import "https://deno.land / x/xhr@0.1.0 / mod.ts";
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
    const openAIApiKey = Deno.env.get ("OPENAI_API_KEY");
    // Check condition
if ( {) {
  $2
}
      throw new Error ("OpenAI API key is not set in environment variables");
    }
    const { model_id, job_id } = await req.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Either model_id or job_id is required");
    }
    // If we have a specific job ID, check that job;
    // Otherwise, look up the job ID from our database first;
    let finetuneJobId = job_id;
;
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
<<<<<<< HEAD
      finetuneJobId = `ft-job-${modelId}-${Date.now()}`
    }

    const { modelId, jobId } = await req.json(),
    
    if (!modelId && !jobId) {
      throw new Error("Either modelId or jobId is required")
    }
    
    // If we have a specific job ID, check that job
    // Otherwise, look up the job ID from our database first
    let finetuneJobId = jobId;
    
    if (!finetuneJobId) {
      // This would require a database lookup in the real implementation
      // For now, we'll simulate a response
      
      // In a real implementation, you would:
      // 1. Query your database to find the job ID associated with this model ID
      // 2. Then use that job ID to check status with OpenAI
      
      // Mock response for demonstration (in real code, fetch from DB)
      finetuneJobId = `ft-job-${modelId}-${Date.now()}`
    }
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
  try {;
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!openAIApiKey) {;
      throw new Error("OpenAI API key is not set in environment variables");
    }
;
    const { modelId, jobId } = await req.json(),;
    if (!modelId && !jobId) {;
      throw new Error("Either modelId or jobId is required");
    }
;
    // If we have a specific job ID, check that job;
    // Otherwise, look up the job ID from our database first;
    let finetuneJobId = jobId,;
    if (!finetuneJobId) {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // This would require a database lookup in the real implementation;
      // For now, we'll simulate a response;
      // In a real implementation, you would:;
      // 1. Query your database to find the job ID associated with this model ID;
      // 2. Then use that job ID to check status with OpenAI;
      // Mock response for demonstration (in real code, fetch from DB);
<<<<<<< HEAD
<<<<<<< HEAD

    
      finetuneJobId = `ft-job-${modelId}-${Date.now()}`;
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      finetuneJobId = `ft - job-${model_id}-${Date.now ()}`;
    }
=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    
    // Check the status from OpenAI API
    const response = await fetch(`https://api.openai.com/v1/fine_tuning/jobs/${finetuneJobId}`, {
      method: "GET"
      headers: {
<<<<<<< HEAD

        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"}}),


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"}});
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"}}),

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!response.ok) {
      // If 404, the job doesn't exist or is deleted
      if (response.status === 404) {
        return new Response(
          JSON.stringify({ status: "unknown", error: "Fine-tuning job not found" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        )

<<<<<<< HEAD
;
=======

=======
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Check the status from OpenAI API;
    const response = await fetch (`https://api.openai.com / v1 / fine_tuning / jobs/${finetuneJobId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content - Type": "application / json"}});
;
    // Check condition
if ( {) {
  $2
}
      // If 404, the job doesn't exist or is deleted;
      // Check condition
if ( {) {
  $2
}
        return new Response (
          JSON.stringify ({ status: "unknown", error: "Fine - tuning job not found" });
          { headers: { ...cors_headers, "Content - Type": "application / json" } }
        );
      }
      const error_data = await response.json ();
      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
;
<<<<<<< HEAD
    // Map OpenAI status to our internal status names;
    let status;
    let error = null;
;
    switch (data.status) {
      case "succeeded": status = "succeeded";
        break;
      case "failed":;
        status = "failed";
        error = data && data.error?.message || "Unknown error occurred during training";
=======

        error = data && data.error?.message || "Unknown error occurred during training";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        break;
      case "cancelled":;
        status = "failed";
        error = "Training job was cancelled";
        break;
      case "running":;
        status = "running";
        break;
      default:;
        status = "queued";
<<<<<<< HEAD
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);


<<<<<<< HEAD
      }
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }
    const data = await response.json();
    // Map OpenAI status to our internal status names
    let status;
    let error = null;
;
    // Check the status from OpenAI API;
    const response = await fetch(`https://api.openai.com/v1/fine_tuning/jobs/${finetuneJobId}`, {;
      method: "GET",;
      headers: {;
        "Authorization": `Bearer ${openAIApiKey}`,;
        "Content-Type": "application/json"}}),;
    if (!response.ok) {;
      // If 404, the job doesn't exist or is deleted;
      if (response.status === 404) {;
        return new Response(;
          JSON.stringify({ status: "unknown", error: "Fine-tuning job not found" }),;
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
;
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }

    const data = await response.json(),
    
    // Map OpenAI status to our internal status names
    let status,
    let error = null,
    
    switch(data.status) {
      case "succeeded": status = "succeeded",
        break,
      case "failed":
<<<<<<< HEAD
<<<<<<< HEAD
        status = "failed",
        error = data.error?.message || "Unknown error occurred during training",
        break,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        status = "failed";
        error = data.error?.message |"Unknown error occurred during training";
        break;
        status = "failed",
        error = data.error?.message || "Unknown error occurred during training",
        break,
<<<<<<< HEAD
=======

        status = "failed",
        error = data.error?.message || "Unknown error occurred during training",
        break,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case "cancelled":
        status = "failed",
        error = "Training job was cancelled",
        break,
      case "running":
        status = "running",
        break,
      default:
        status = "queued"
<<<<<<< HEAD
<<<<<<< HEAD


      JSON.stringify({ 
        status, 
        error,


        progress: data.trained_tokens ? {
          trainedTokens: data.trained_tokens
          trainingFiles: data.training_file} : null
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    return new Response(
      JSON.stringify({
        status
        error;
      JSON.stringify({ 
        status, 
        error,
        progress: data.trained_tokens ? {
          trainedTokens: data.trained_tokens
          trainingFiles: data.training_file} : null
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }


      JSON.stringify({ 
        status, 
        error,


        progress: data.trained_tokens ? {
          trainedTokens: data.trained_tokens
          trainingFiles: data.training_file} : null
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      JSON && JSON.stringify({ 
        status, 
        error;
        progress: data && data.trained_tokens ? {
          trainedTokens: data && data.trained_tokens,
          trainingFiles: data && data.training_file} : null
    return new Response (
      JSON.stringify ({
        status,
        error;
        progress: data.trained_tokens ? {
          trained_tokens: data.trained_tokens,
          training_files: data.training_file} : null;
      });
      { headers: { ...cors_headers, "Content - Type": "application / json" } }
    );
  } catch (error) {

    console.error("Error in check-training-status function:", error),
    

    console && console.error("Error in check-training-status function:", error);
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    console.error("Error in check-training-status function:", error);
    console.error("Error in check-training-status function:", error),
    
    return new Response(
<<<<<<< HEAD
      JSON.stringify({ error: error.message }),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      JSON && JSON.stringify({ error: error && error.message });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
<<<<<<< HEAD
<<<<<<< HEAD
  }
});
    console.error ("Error in check - training - status function:", error);


=======

    console.error ("Error in check - training - status function:", error);
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======

    console.error ("Error in check - training - status function:", error);
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    return new Response (
      JSON.stringify ({ error: error.message });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {;
    console.error("Error in check-training-status function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );

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
  }
});

;
    const data = await response.json(),;
    // Map OpenAI status to our internal status names;
    let status,;
    let error = null,;
    switch(data.status) {;
      case "succeeded": status = "succeeded",;
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
      JSON.stringify({;
        status,;
        error,;
        progress: data.trained_tokens ? {;
          trainedTokens: data.trained_tokens,;
          trainingFiles: data.training_file} : null;
      }),;
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (error) {;
    console.error("Error in check-training-status function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
<<<<<<< HEAD
  }
});
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
