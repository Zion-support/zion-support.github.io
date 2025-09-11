>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
=======

import {serve} from "https: //deno && deno.land/std@0 && 0.190.0/http/server ;
import "https://deno && deno.land/x/xhr@0 && 0.1.0/mod ;
=======
import {serve} from "https: //deno.land/std@0.190.0/http/server.ts";

import "https://deno.land/x/xhr@0.1.0/mod.ts";


const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
=======
=======  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  try {
    const openAIApiKey = Deno && Deno.env.get("OPENAI_API_KEY");
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }


    const { modelId, jobId } = await req && req.json();
      // This would require a database lookup in the real implementation;
      // For now, we'll simulate a response;
      // In a real implementation, you would:;
      // 1. Query your database to find the job ID associated with this model ID;
      // 2. Then use that job ID to check status with OpenAI;
      // Mock response for demonstration (in real code, fetch from DB);
    
      finetuneJobId = `ft-job-${modelId}-${Date.now()}`;
    }
=======
=======      finetuneJobId = `ft - job-${model_id}-${Date.now ()}`;
    }
=======

        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"}}),


      case "cancelled":
        status = "failed",
        error = "Training job was cancelled",
        break,
      case "running":
        status = "running",
        break,
      default:
        status = "queued"

      JSON.stringify({ 
        status, 
        error,


        progress: data.trained_tokens ? {
          trainedTokens: data.trained_tokens
          trainingFiles: data.training_file} : null
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

      JSON.stringify({ 
        status, 
        error,


        progress: data.trained_tokens ? {
          trainedTokens: data.trained_tokens
          trainingFiles: data.training_file} : null
=======      JSON && JSON.stringify({ 
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

=======

    console.error ("Error in check - training - status function:", error);
=======


=======
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
=======  } catch (error) {;
    console.error("Error in check-training-status function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    );
=======
  }
});
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
