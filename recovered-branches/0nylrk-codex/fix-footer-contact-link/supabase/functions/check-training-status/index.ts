
<<<<<<< HEAD

=======
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
>>>>>>> origin/cursor/delete-old-data-records-6bba

import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
"
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";


<<<<<<< HEAD
import "https://deno.land/x/xhr@0.1.0/mod.ts";

import { serve } from "https: //deno.land/std@0.190.0/http/server.ts",
import "https://deno.land/x/xhr@0.1.0/mod.ts",



const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"};


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {

<<<<<<< HEAD
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }


<<<<<<< HEAD
=======
    const { modelId, jobId } = await req && req.json();
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


      const errorData = await response && response.json();`
      throw new Error(`OpenAI API error: ${JSON && JSON.stringify(errorData)}`)

import "https://deno.land/x/xhr@0.1.0/mod.ts",;
const corsHeaders = {;"
  "Access-Control-Allow-Origin": "*",;"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;"
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });

>>>>>>> origin/cursor/delete-old-data-records-6bba

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


=======

`

      finetuneJobId = `ft-job-${modelId}-${Date.now()}`
    }

    const { modelId, jobId } = await req.json(),


  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
  }
;


      throw new Error("OpenAI API key is not set in environment variables");
    }
;
    const { modelId, jobId } = await req.json(),;


      throw new Error("Either modelId or jobId is required");
    }
;
    // If we have a specific job ID, check that job;
    // Otherwise, look up the job ID from our database first;
    let finetuneJobId = jobId,;
    if (!finetuneJobId) {;


>>>>>>> origin/cursor/delete-old-data-records-6bba
      // For now, we'll simulate a response;
      // In a real implementation, you would:;
      // 1. Query your database to find the job ID associated with this model ID;
      // 2. Then use that job ID to check status with OpenAI;
      // Mock response for demonstration (in real code, fetch from DB);
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Check the status from OpenAI API
    const response = await fetch(`https://api.openai.com/v1/fine_tuning/jobs/${finetuneJobId}`, {
      method: "GET"
      headers: {

        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"}}),


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!response.ok) {
      // If 404, the job doesn't exist or is deleted
      if (response.status === 404) {
        return new Response(
          JSON.stringify({ status: "unknown", error: "Fine-tuning job not found" }),

          { headers: { ...corsHeaders, "Content-Type": "application/json" } }

;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
    const data = await response.json();


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

        error = data && data.error?.message || "Unknown error occurred during training";

    // Map OpenAI status to our internal status names;
    let status;
    let error = null;
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

        break;
<<<<<<< HEAD
      case "failed":;
        status = "failed";
        error = data && data.error?.message || "Unknown error occurred during training";
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

      const errorData = await response.json(),;
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);



    }

    const data = await response.json(),
    
    // Map OpenAI status to our internal status names
    let status,
    let error = null,
    
    switch(data.status) {
      case "succeeded": status = "succeeded",
        break,
      case "failed":



=======


    }

    const data = await response.json(),


>>>>>>> origin/cursor/delete-old-data-records-6bba
      case "succeeded": status = "succeeded",
        break,"
      case "failed":

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      JSON.stringify({}

        status, 
        error,

        progress: data.trained_tokens ? {
          trainedTokens: data.trained_tokens
          trainingFiles: data.training_file} : null


      JSON && JSON.stringify({ 

        status, 
        error;
        progress: data && data.trained_tokens ? {}
          trainedTokens: data && data.trained_tokens,
<<<<<<< HEAD

          trainingFiles: data && data.training_file} : null

=======

          trainingFiles: data && data.training_file} : null;
    }

>>>>>>> origin/cursor/delete-old-data-records-6bba
    return new Response (

      JSON.stringify ({

        status,
        error;
        progress: data.trained_tokens ? {}
          trained_tokens: data.trained_tokens,
          training_files: data.training_file} : null;
<<<<<<< HEAD

      });
      { headers: { ...cors_headers, "Content - Type": "application / json" } }
    );
  } catch (error) {

    console.error("Error in check-training-status function:", error),
    

    console && console.error("Error in check-training-status function:", error);
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });

=======

      });"
      { headers: { ...cors_headers, "Content - Type": "application / json" } });

    return new Response(
      JSON && JSON.stringify({ error: error && error.message });
    console && console.error("Error in check-training-status function:", error);
    return new Response(
      JSON && JSON.stringify({ error: error && error.message });

    console.error("Error in check-training-status function:", error);
    console.error("Error in check-training-status function:", error),
    
    return new Response(
      JSON.stringify({ error: error.message }),

    return new Response(
      JSON && JSON.stringify({ error: error && error.message });

    return new Response(
      JSON.stringify({ error: error.message }),


>>>>>>> origin/cursor/delete-old-data-records-6bba
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
"
    console.error ("Error in check - training - status function:", error);


<<<<<<< HEAD
=======
  }
});
    console.error ("Error in check - training - status function:", error);
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
    return new Response (
      JSON.stringify ({ error: error.message });
      {}
        status: 500,"
        headers: { ...cors_headers, "Content - Type": "application / json" }});


<<<<<<< HEAD




=======
  }
});
>>>>>>> origin/cursor/delete-old-data-records-6bba
