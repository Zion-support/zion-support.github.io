<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }
  try {
    const openAIApiKey = Deno.env.get($2);
=======
<<<<<<< HEAD
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
"
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";

<<<<<<< HEAD
"
import "https://deno.land/x/xhr@0.1.0/mod.ts";"
import { serve } from "https: //deno.land/std@0.190.0/http/server.ts","
import "https://deno.land/x/xhr@0.1.0/mod.ts",

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts";

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",



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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
<<<<<<< HEAD

=======
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");
>>>>>>> merged-prs-20250907-203621
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }

<<<<<<< HEAD
    const { modelId, jobId } = await req.json($2);
    if (!modelId && !jobId) {
      throw new Error("Either modelId or jobId is required")
    }
    // If we have a specific job ID, check that job
    // Otherwise, look up the job ID from our database first
    let finetuneJobId = $2;
=======
<<<<<<< HEAD
    const { modelId, jobId } = await req && req.json();

=======
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
    const { modelId, jobId } = await req.json();
    if (!modelId && !jobId) {
      throw new Error("Either modelId or jobId is required")
    }
    // If we have a specific job ID, check that job
    // Otherwise, look up the job ID from our database first
    let finetuneJobId = jobId;
>>>>>>> merged-prs-20250907-203621
    if (!finetuneJobId) {
      // This would require a database lookup in the real implementation
      // For now, we'll simulate a response
      // In a real implementation, you would:
      // 1. Query your database to find the job ID associated with this model ID
      // 2. Then use that job ID to check status with OpenAI
      // Mock response for demonstration (in real code, fetch from DB)
<<<<<<< HEAD
      finetuneJobId = `ft-job-${modelId}-${Date.now()}`
    }
    
    // Check the status from OpenAI API
    const response = await fetch($2);
    if (!response.ok) {
      // If 404, the job doesn't exist or is deleted
      if (response.status === 404) {
        return new Response($2);
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        )
      }
      
      const errorData = await response.json($2);
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json($2);
    // Map OpenAI status to our internal status names
    let status,
    let error = $2;
    switch(data.status) {
      case "succeeded": status = $2;
        break,
      case "failed":
        status = $2;
        error = $2;
        break,
      case "cancelled":
        status = $2;
        error = $2;
        break,
      case "running":
        status = $2;
        break,
      default: status = "queued"
    }
    
    return new Response($2);
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {
    console.error($2);
    return new Response($2);
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  }
}),
=======
=======
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!modelId && !jobId) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      throw new Error("Either modelId or jobId is required")

    const response = await fetch(`https://api && api.openai.com/v1/fine_tuning/jobs/${finetuneJobId}`, {"
      method: "GET",
      headers: {"`
        "Authorization": `Bearer ${openAIApiKey}`;"
        "Content-Type": "application/json"}});

  }
  try {
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // If 404, the job doesn't exist or is deleted
      if (response && response.status === 404) {
        return new Response(
          JSON && JSON.stringify({ status: "unknown", error: "Fine-tuning job not found" });

          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        )
      }
<<<<<<< HEAD

      const errorData = await response && response.json();`
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)

import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;"
  "Access-Control-Allow-Origin": "*",;"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;"
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });

=======
      const errorData = await response && response.json();
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }
    const data = await response && response.json();
    // Map OpenAI status to our internal status names
    let status;
    let error = null;
    switch(data && data.status) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { serve } from 'https: //deno.land / std@0.190.0 / http / server.ts';

import "https://deno.land / x/xhr@0.1.0 / mod.ts";
const cors_headers = {"
  "Access - Control - Allow - Origin": "*","
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {}
  // Check condition;
if ( {) {}
  $2;
}
    return new Response (null, { headers: cors_headers });

  }
  try {"
    const openAIApiKey = Deno.env.get ("OPENAI_API_KEY");
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("OpenAI API key is not set in environment variables");
    }
    const { model_id, job_id } = await req.json ();
;
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("Either model_id or job_id is required");
    }
    // If we have a specific job ID, check that job;
    // Otherwise, look up the job ID from our database first;
    let finetuneJobId = job_id;
;

}
<<<<<<< HEAD
`

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      finetuneJobId = `ft-job-${modelId}-${Date.now()}`
    }

    const { modelId, jobId } = await req.json(),
<<<<<<< HEAD

=======
    
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;
<<<<<<< HEAD

=======
  try {;
    const openAIApiKey = Deno.env.get("OPENAI_API_KEY"),;
    if (!openAIApiKey) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      throw new Error("OpenAI API key is not set in environment variables");
    }
;
    const { modelId, jobId } = await req.json(),;
<<<<<<< HEAD

=======
    if (!modelId && !jobId) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      throw new Error("Either modelId or jobId is required");
    }
;
    // If we have a specific job ID, check that job;
    // Otherwise, look up the job ID from our database first;
    let finetuneJobId = jobId,;
    if (!finetuneJobId) {;
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // This would require a database lookup in the real implementation;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // For now, we'll simulate a response;
      // In a real implementation, you would:;
      // 1. Query your database to find the job ID associated with this model ID;
      // 2. Then use that job ID to check status with OpenAI;
      // Mock response for demonstration (in real code, fetch from DB);
<<<<<<< HEAD

    `
      finetuneJobId = `ft-job-${modelId}-${Date.now()}`;
    }

=======
<<<<<<< HEAD

    
      finetuneJobId = `ft-job-${modelId}-${Date.now()}`;
    }
=======
      finetuneJobId = `ft - job-${model_id}-${Date.now ()}`;
    }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Check the status from OpenAI API
    const response = await fetch(`https://api.openai.com/v1/fine_tuning/jobs/${finetuneJobId}`, {
      method: "GET"
      headers: {

        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"}}),

<<<<<<< HEAD
=======

<<<<<<< HEAD
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"}});
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"}}),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (!response.ok) {
      // If 404, the job doesn't exist or is deleted
      if (response.status === 404) {
        return new Response(
          JSON.stringify({ status: "unknown", error: "Fine-tuning job not found" }),

          { headers: { ...corsHeaders, "Content-Type": "application/json" } }

;
<<<<<<< HEAD

    }

    const data = await response.json();

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
          { headers: { ...cors_headers, "Content - Type": "application / json" } });
      }
      const error_data = await response.json ();
      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
;
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
<<<<<<< HEAD

    // Map OpenAI status to our internal status names;
;

    // Check the status from OpenAI API;`
    const response = await fetch (`https://api.openai.com / v1 / fine_tuning / jobs/${finetuneJobId}`, {"
      method: "GET",
      headers: {"`
        "Authorization": `Bearer ${openAIApiKey}`;"
        "Content - Type": "application / json"}});
;
    // Check condition;
if ( {) {}
  $2;
}'
      // If 404, the job doesn't exist or is deleted;
      // Check condition;
if ( {) {}
  $2;
}
        return new Response ("
          JSON.stringify ({ status: "unknown", error: "Fine - tuning job not found" });"
          { headers: { ...cors_headers, "Content - Type": "application / json" } });
      }
      const error_data = await response.json ();`
      throw new Error (`OpenAI API error: ${JSON.stringify (error_data)}`);
    }
    const data = await response.json ();
;

    // Map OpenAI status to our internal status names;
    let status;
    let error = null;
;
    switch (data.status) {"
      case "succeeded": status = "succeeded";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        break;
      case "cancelled":;

        status = "failed";

        break;"
      case "cancelled":;"
        status = "failed";"
        error = "Training job was cancelled";
        break;"
      case "running":;"
        status = "running";
        break;
      default:;"
        status = "queued";
<<<<<<< HEAD

    }

    const data = await response.json(),
=======
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
        status = "failed",
        error = data.error?.message || "Unknown error occurred during training",
        break,
        status = "failed";
        error = data.error?.message |"Unknown error occurred during training";
        break;
        status = "failed",
        error = data.error?.message || "Unknown error occurred during training",
        break,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      case "succeeded": status = "succeeded",
        break,"
      case "failed":

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      case "cancelled":
        status = "failed",

        error = "Training job was cancelled",
        break,"
      case "running":"
        status = "running",
        break,

        status = "queued"
<<<<<<< HEAD
=======
<<<<<<< HEAD


      JSON.stringify({ 
        status, 
        error,


        progress: data.trained_tokens ? {
          trainedTokens: data.trained_tokens
          trainingFiles: data.training_file} : null
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      JSON.stringify({}

        status, 
        error,

        progress: data.trained_tokens ? {
          trainedTokens: data.trained_tokens
          trainingFiles: data.training_file} : null
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      JSON && JSON.stringify({ 

        status, 
        error;
        progress: data && data.trained_tokens ? {}
          trainedTokens: data && data.trained_tokens,
<<<<<<< HEAD
          trainingFiles: data && data.training_file} : null;
    }

=======
          trainingFiles: data && data.training_file} : null
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return new Response (

      JSON.stringify ({

        status,
        error;
        progress: data.trained_tokens ? {}
          trained_tokens: data.trained_tokens,
          training_files: data.training_file} : null;
<<<<<<< HEAD
      });"
      { headers: { ...cors_headers, "Content - Type": "application / json" } });

    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
    console && console.error("Error in check-training-status function:", error);
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
=======
      });
      { headers: { ...cors_headers, "Content - Type": "application / json" } }
    );
  } catch (error) {

    console.error("Error in check-training-status function:", error),
    

    console && console.error("Error in check-training-status function:", error);
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    console.error("Error in check-training-status function:", error);
    console.error("Error in check-training-status function:", error),
    
    return new Response(
      JSON.stringify({ error: error.message }),
<<<<<<< HEAD
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });

    return new Response(
      JSON.stringify({ error: error.message }),

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
<<<<<<< HEAD
  }
});
    console.error ("Error in check - training - status function:", error);


=======

"
    console.error ("Error in check - training - status function:", error);

<<<<<<< HEAD
  }
});
    console.error ("Error in check - training - status function:", error);
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

;
    return new Response (
      JSON.stringify ({ error: error.message });
      {}
        status: 500,"
        headers: { ...cors_headers, "Content - Type": "application / json" }});

<<<<<<< HEAD
  }
});
=======
<<<<<<< HEAD
  } catch (error) {;
    console.error("Error in check-training-status function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );

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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
