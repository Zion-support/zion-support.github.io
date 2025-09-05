
<<<<<<< HEAD
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.38.4",
import { corsHeaders } from "../_shared/cors.ts",
=======
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2.38.4&quot;;
import { corsHeaders } from &quot;../_shared/cors.ts&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface AnalyzeRequest {
  content: string,
  contentType: string,
  flagId?: string
}

interface AnalysisResult {
  classification: string,
  explanation: string,
  success: boolean
}

// Initialize environment and clients
const initializeServices = () => {
<<<<<<< HEAD
  const supabaseUrl = Deno.env.get("SUPABASE_URL"),
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"),
  const openaiApiKey = Deno.env.get("OPENAI_API_KEY"),
  
  if (!supabaseUrl || !supabaseServiceKey || !openaiApiKey) {
    throw new Error("Missing required environment variables")
=======
  const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;);
  const supabaseServiceKey = Deno.env.get(&quot;SUPABASE_SERVICE_ROLE_KEY&quot;);
  const openaiApiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;);
  
  if (!supabaseUrl || !supabaseServiceKey || !openaiApiKey) {
    throw new Error(&quot;Missing required environment variables&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  
  return {
    supabase: createClient(supabaseUrl, supabaseServiceKey),
    openaiApiKey
  }
},

// Validate request content
const validateRequest = (data: unknown): AnalyzeRequest => {
  if (!data || typeof data !== 'object') {
<<<<<<< HEAD
    throw new Error("Invalid request body")
=======
    throw new Error(&quot;Invalid request body&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  
  const request = data as AnalyzeRequest,
  
  if (!request.content) {
<<<<<<< HEAD
    throw new Error("No content provided for analysis")
  }
  
  if (!request.contentType) {
    throw new Error("No content type provided")
=======
    throw new Error(&quot;No content provided for analysis&quot;);
  }
  
  if (!request.contentType) {
    throw new Error(&quot;No content type provided&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
  
  return request
},

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
<<<<<<< HEAD
    Format your response exactly like: "CLASSIFICATION: explanation"
  `
},
=======
    Format your response exactly like: &quot;CLASSIFICATION: explanation&quot;
  `;
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
    }),
    
    const data = await response.json(),
    
    if (!response.ok) {
<<<<<<< HEAD
      console.error("OpenAI API error:", data.error),
      throw new Error(`OpenAI API error: ${data.error?.message || "Unknown error"}`)
    }
    
    const analysisText = data.choices[0]?.message?.content || "",
    // // // console.log("OpenAI analysis result:", analysisText),
    
    // Parse the result
    let classification = "SAFE",
    let explanation = "No issues detected.",
    
    if (analysisText.includes("SUSPICIOUS")) {
      classification = "SUSPICIOUS"
    } else if (analysisText.includes("DANGEROUS")) {
      classification = "DANGEROUS"
    }
    
    // Extract explanation
    if (analysisText.includes(": ")) {
      explanation = analysisText.split(":")[1].trim()
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    return { classification, explanation }
  } catch (error) {
<<<<<<< HEAD
    console.error("Error calling OpenAI:", error),
    throw error
=======
    console.error(&quot;Error calling OpenAI:&quot;, error);
    throw error;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
},

// Update flag in database if flagId was provided
const updateFraudFlag = async (
  supabase: ReturnType<typeof createClient>,
  flagId: string,
  classification: string, 
  explanation: string
): Promise<void> => {
  if (!flagId) return,
  
  const { error } = await supabase
    .from(&quot;fraud_flags&quot;)
    .update({
      gpt_classification: classification.toLowerCase(),
      gpt_explanation: explanation,
      updated_at: new Date().toISOString()
    })
<<<<<<< HEAD
    .eq("id", flagId),
  
  if (error) {
    console.error("Error updating fraud flag:", error),
    throw new Error(`Error updating fraud flag: ${error.message}`)
  }
  
  // // // console.log(`Updated fraud flag ${flagId} with classification: ${classification}`)
},
=======
    .eq(&quot;id&quot;, flagId);
  
  if (error) {
    console.error(&quot;Error updating fraud flag:&quot;, error);
    throw new Error(`Error updating fraud flag: ${error.message}`);
  }
  
  // console.log(`Updated fraud flag ${flagId} with classification: ${classification}`);
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

// Main request handler
serve(async (req) => {
  // Handle CORS preflight requests
<<<<<<< HEAD
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // // // console.log("Received content analysis request"),
=======
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // console.log(&quot;Received content analysis request&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // Initialize services
    const { supabase, openaiApiKey } = initializeServices(),
    
    // Parse and validate request
    const requestData = await req.json().catch(err => {
<<<<<<< HEAD
      console.error("Error parsing request JSON:", err),
      throw new Error("Invalid JSON in request body")
    }),
    
    const { content, contentType, flagId } = validateRequest(requestData),
    // // // console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` : ''}`),
=======
      console.error(&quot;Error parsing request JSON:&quot;, err);
      throw new Error(&quot;Invalid JSON in request body&quot;);
    });
    
    const { content, contentType, flagId } = validateRequest(requestData);
    // console.log(`Analyzing ${contentType} content${flagId ? ` for flag ID ${flagId}` : ''}`);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // Create prompt and analyze with OpenAI
    const prompt = createAnalysisPrompt(contentType, content),
    const { classification, explanation } = await analyzeWithOpenAI(prompt, openaiApiKey),
    
    // Update flag if flagId was provided
    if (flagId) {
      await updateFraudFlag(supabase, flagId, classification, explanation)
    }
    
    // Return the analysis result
    const result: AnalysisResult = {
      classification: classification.toLowerCase(),
      explanation,
      success: true},
    
<<<<<<< HEAD
    // // // console.log("Analysis completed successfully:", result),
    return new Response(JSON.stringify(result), { 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    })

  } catch (error) {
    console.error("Error analyzing content:", error),
    
    // Determine appropriate status code based on error
    const statusCode = error.message?.includes("Invalid") ? 400 : 500,
=======
    // console.log(&quot;Analysis completed successfully:&quot;, result);
    return new Response(JSON.stringify(result), { 
      headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
    });

  } catch (error) {
    console.error(&quot;Error analyzing content:&quot;, error);
    
    // Determine appropriate status code based on error
    const statusCode = error.message?.includes(&quot;Invalid&quot;) ? 400 : 500;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    return new Response(
      JSON.stringify({ 
        error: error.message || &quot;An unexpected error occurred&quot;,
        success: false}),
      { 
        status: statusCode, 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json" } 
      }
    )
  }
}),
