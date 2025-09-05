
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.38.4&quot;;
import { corsHeaders } from &quot;../_shared/cors.ts&quot;;

interface AnalyzeRequest {
  content: string;
  contentType: string;
  flagId?: string;
}

interface AnalysisResult {
  classification: string;
  explanation: string;
  success: boolean;
}

// Initialize environment and clients
const initializeServices = () => {
  const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;);
  const supabaseServiceKey = Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;);
  const openaiApiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;);
  
  if (!supabaseUrl || !supabaseServiceKey || !openaiApiKey) {
    throw new Error(&quot;Missing required environment variables&quot;);
  }
  
  return {
    supabase: createClient(supabaseUrl, supabaseServiceKey),
    openaiApiKey
  };
};

// Validate request content
const validateRequest = (data: unknown): AnalyzeRequest => {
  if (!data || typeof data !== 'object') {
    throw new Error(&quot;Invalid request body&quot;);
  }
  
  const request = data as AnalyzeRequest;
  
  if (!request.content) {
    throw new Error(&quot;No content provided for analysis&quot;);
  }
  
  if (!request.contentType) {
    throw new Error(&quot;No content type provided&quot;);
  }
  
  return request;
};

// Create prompt for OpenAI
const createAnalysisPrompt = (contentType: string, content: string): string => {
  return `
    You are an AI fraud detection assistant for the Zion AI Marketplace.
    Analyze this ${contentType} for signs of fraud, spam, phishing, or abuse.
    
    Content to analyze:
    &quot;"&quot;
    ${content}
    &quot;"&quot;
    
    Respond with one of these classifications: SAFE / SUSPICIOUS / DANGEROUS
    followed by a brief explanation (max 1-2 sentences) of your reasoning.
    Format your response exactly like: &quot;CLASSIFICATION: explanation&quot;
  `;
};

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
          { role: &quot;user&quot;, content: prompt }
        ],
        temperature: 0.3,
        max_tokens: 150
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error(&quot;OpenAI API error:&quot;, data.error);
      throw new Error(`OpenAI API error: ${data.error?.message || &quot;Unknown error&quot;}`);
    }
    
    const analysisText = data.choices[0]?.message?.content || "&quot;;
    // console.log(&quot;OpenAI analysis result:&quot;, analysisText);
    
    // Parse the result
    let classification = &quot;SAFE&quot;;
    let explanation = &quot;No issues detected.&quot;;
    
    if (analysisText.includes(&quot;SUSPICIOUS&quot;)) {
      classification = &quot;SUSPICIOUS&quot;;
    } else if (analysisText.includes(&quot;DANGEROUS&quot;)) {
      classification = &quot;DANGEROUS&quot;;
    }
    
    // Extract explanation
    if (analysisText.includes(&quot;:&quot;)) {
      explanation = analysisText.split(&quot;:&quot;)[1].trim();
    }
    
    return { classification, explanation };
  } catch (error) {
    console.error(&quot;Error calling OpenAI:&quot;, error);
    throw error;
  }
};

// Update flag in database if flagId was provided
const updateFraudFlag = async (
  supabase: ReturnType<typeof createClient>,
  flagId: string,
  classification: string, 
  explanation: string
): Promise<void> => {
  if (!flagId) return;
  
  const { error } = await supabase
    .from(&quot;fraud_flags&quot;)
    .update({
      gpt_classification: classification.toLowerCase(),
      gpt_explanation: explanation,
      updated_at: new Date().toISOString()
    })
    .eq(&quot;id&quot;, flagId);
  
  if (error) {
    console.error(&quot;Error updating fraud flag:&quot;, error);
    throw new Error(`Error updating fraud flag: ${error.message}`);
  }
  
  // console.log(`Updated fraud flag ${flagId} with classification: ${classification}`);
};

// Main request handler
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // console.log(&quot;Received content analysis request&quot;);
    
    // Initialize services
    const { supabase, openaiApiKey } = initializeServices();
    
    // Parse and validate request
    const requestData = await req.json().catch(err => {
      console.error(&quot;Error parsing request JSON:&quot;, err);
      throw new Error(&quot;Invalid JSON in request body&quot;);
    });
    
    const { content, contentType, flagId } = validateRequest(requestData);
    // console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` : ''}`);
    
    // Create prompt and analyze with OpenAI
    const prompt = createAnalysisPrompt(contentType, content);
    const { classification, explanation } = await analyzeWithOpenAI(prompt, openaiApiKey);
    
    // Update flag if flagId was provided
    if (flagId) {
      await updateFraudFlag(supabase, flagId, classification, explanation);
    }
    
    // Return the analysis result
    const result: AnalysisResult = {
      classification: classification.toLowerCase(),
      explanation,
      success: true};
    
    // console.log(&quot;Analysis completed successfully:&quot;, result);
    return new Response(JSON.stringify(result), { 
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
    });

  } catch (error) {
    console.error(&quot;Error analyzing content:&quot;, error);
    
    // Determine appropriate status code based on error
    const statusCode = error.message?.includes(&quot;Invalid&quot;) ? 400 : 500;
    
    return new Response(
      JSON.stringify({ 
        error: error.message || &quot;An unexpected error occurred&quot;,
        success: false}),
      { 
        status: statusCode, 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json" } 
      }
    );
  }
});
