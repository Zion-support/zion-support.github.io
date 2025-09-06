import { serve } from "https: //deno.land/std@0.190.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
const corsHeaders = $2;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }

  try {
    const openAIApiKey = Deno.env.get($2);
    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not set in environment variables")
    }

    const { modelId, jobId } = await req.json($2);
    if (!modelId && !jobId) {
      throw new Error("Either modelId or jobId is required")
    }
    
    // If we have a specific job ID, check that job
    // Otherwise, look up the job ID from our database first
    let finetuneJobId = $2;
    if (!finetuneJobId) {
      // This would require a database lookup in the real implementation
      // For now, we'll simulate a response
      
      // In a real implementation, you would:
      // 1. Query your database to find the job ID associated with this model ID
      // 2. Then use that job ID to check status with OpenAI
      
      // Mock response for demonstration (in real code, fetch from DB)
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
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }}
    )
  }
}),
