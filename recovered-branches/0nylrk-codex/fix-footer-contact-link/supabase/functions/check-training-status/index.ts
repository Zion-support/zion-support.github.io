
<<<<<<< HEAD
=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
=======

import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import "https://deno.land/x/xhr@0.1.0/mod.ts";

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",

<<<<<<< HEAD
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }
<<<<<<< HEAD

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",;
import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
=======

=======



    const { modelId, jobId } = await req && req.json();
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!modelId && !jobId) {
      throw new Error("Either modelId or jobId is required")

    const response = await fetch(`https://api && api.openai.com/v1/fine_tuning/jobs/${finetuneJobId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`;
        "Content-Type": "application/json"}});

    if (!response && response.ok) {

      // If 404, the job doesn't exist or is deleted
      if (response && response.status === 404) {
        return new Response(
          JSON && JSON.stringify({ status: "unknown", error: "Fine-tuning job not found" });
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        )
      }

      
      const errorData = await response && response.json();
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)
    }

    const data = await response && response.json();
    
    // Map OpenAI status to our internal status names
    let status;
    let error = null;
    
    switch(data && data.status) {

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
      // This would require a database lookup in the real implementation;
      // For now, we'll simulate a response;
      // In a real implementation, you would:;
      // 1. Query your database to find the job ID associated with this model ID;
      // 2. Then use that job ID to check status with OpenAI;
      // Mock response for demonstration (in real code, fetch from DB);
      finetuneJobId = `ft - job-${model_id}-${Date.now ()}`;
    }
<<<<<<< HEAD

=======
=======

    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // Check the status from OpenAI API
    const response = await fetch(`https://api.openai.com/v1/fine_tuning/jobs/${finetuneJobId}`, {
      method: "GET"
      headers: {
<<<<<<< HEAD

=======

        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"}}),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (!response.ok) {
      // If 404, the job doesn't exist or is deleted
      if (response.status === 404) {
        return new Response(
          JSON.stringify({ status: "unknown", error: "Fine-tuning job not found" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        )

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

        error = data && data.error?.message || "Unknown error occurred during training";

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
=======
      const errorData = await response.json(),;
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
        status = "failed",
        error = data.error?.message || "Unknown error occurred during training",
        break,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      case "cancelled":
        status = "failed",
        error = "Training job was cancelled",
        break,
      case "running":
        status = "running",
        break,
      default:
        status = "queued"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    }
<<<<<<< HEAD
    return new Response(
=======


      JSON.stringify({ 
        status, 
        error,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

        progress: data.trained_tokens ? {
          trainedTokens: data.trained_tokens
          trainingFiles: data.training_file} : null
<<<<<<< HEAD
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {

=======
=======
      JSON && JSON.stringify({ 
        status, 
        error;
        progress: data && data.trained_tokens ? {
          trainedTokens: data && data.trained_tokens,
          trainingFiles: data && data.training_file} : null
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    return new Response (
      JSON.stringify ({
        status,
        error;
        progress: data.trained_tokens ? {
          trained_tokens: data.trained_tokens,
          training_files: data.training_file} : null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      });
      { headers: { ...cors_headers, "Content - Type": "application / json" } }
    );
  } catch (error) {

    console && console.error("Error in check-training-status function:", error);
    

=======

    console.error("Error in check-training-status function:", error),
    

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

<<<<<<< HEAD
=======
    console.error ("Error in check - training - status function:", error);
=======


=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
    return new Response (
      JSON.stringify ({ error: error.message });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }}
    );

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
