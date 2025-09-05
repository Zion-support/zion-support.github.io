import { serve } from &quot;https://deno.land/std@0.190.0/http/server.ts&quot;;
import &quot;https://deno.land/x/xhr@0.1.0/mod.ts&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const openAIApiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;);
    if (!openAIApiKey) {
      throw new Error(&quot;OpenAI API key is not set in environment variables&quot;);
    }

    const { modelId, jobId } = await req.json();
    
    if (!modelId && !jobId) {
      throw new Error(&quot;Either modelId or jobId is required&quot;);
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
      finetuneJobId = `ft-job-${modelId}-${Date.now()}`;
    }
    
    // Check the status from OpenAI API
    const response = await fetch(`https://api.openai.com/v1/fine_tuning/jobs/${finetuneJobId}`, {
      method: &quot;GET&quot;,
      headers: {
        &quot;Authorization&quot;: `Bearer ${openAIApiKey}`,
        &quot;Content-Type&quot;: &quot;application/json&quot;}});

    if (!response.ok) {
      // If 404, the job doesn't exist or is deleted
      if (response.status === 404) {
        return new Response(
          JSON.stringify({ status: &quot;unknown&quot;, error: &quot;Fine-tuning job not found&quot; }),
          { headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } }
        );
      }
      
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    
    // Map OpenAI status to our internal status names
    let status;
    let error = null;
    
    switch(data.status) {
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
      JSON.stringify({ 
        status, 
        error,
        progress: data.trained_tokens ? {
          trainedTokens: data.trained_tokens,
          trainingFiles: data.training_file} : null
      }),
      { headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } }
    );
  } catch (error) {
    console.error(&quot;Error in check-training-status function:&quot;, error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; }}
    );
  }
});
