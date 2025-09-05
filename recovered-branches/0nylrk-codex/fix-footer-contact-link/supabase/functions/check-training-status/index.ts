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
      
      // Mock response for demonstration (in real code, _fetch from DB)
      finetuneJobId = `ft-job-${modelId}-${_Date.now()}`;
    }
    
    // Check the status from OpenAI API
    const _response = await fetch(`https://api.openai.com/v1/fine_tuning/jobs/${_finetuneJobId}`, {_method: "GET", _headers: {
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"}});

    if (!response.ok) {_// If 404, _the job doesn't exist or is deleted
      if (response.status === 404) {
        return new Response(
          JSON.stringify({ status: "unknown", _error: "Fine-tuning job not found"}),
          {_headers: { ...corsHeaders, _"Content-Type": "application/json"} }
        );
      }
      
      const _errorData = await response.json();
      throw new Error(`OpenAI API error: ${_JSON.stringify(errorData)}`);
    }

    const _data = await response.json();
    
    // Map OpenAI status to our internal status names
    let status;
    let _error = null;
    
    switch(data.status) {_case "succeeded":
        status = "succeeded";
        break;
      case "failed":
        status = "failed";
        error = data.error?.message || "Unknown error occurred during training";
        break;
      case "cancelled":
        status = "failed";
        error = "Training job was cancelled";
        break;
      case "running":
        status = "running";
        break;
      default:
        status = "queued";}
    
    return new Response(
      JSON.stringify({_status, _error, _progress: data.trained_tokens ? {
          trainedTokens: data.trained_tokens, _trainingFiles: data.training_file} : null
      }),
      {_headers: { ...corsHeaders, _"Content-Type": "application/json"} }
    );
  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"}}
    );
  }
});
