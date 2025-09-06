
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2.38.4";
import { corsHeaders } from "../_shared/cors.ts";
interface AnalyzeRequest {
  content: string,
  contentType: string,
  flagId?: string
}

interface AnalysisResult {
  classification: string,
  explanation: string,
  success: boolean}

// Initialize environment and clients
const initializeServices = () => {
  const supabaseUrl = Deno.env.get($2);
  const supabaseServiceKey = Deno.env.get($2);
  const openaiApiKey = Deno.env.get($2);
  if (!supabaseUrl || !supabaseServiceKey || !openaiApiKey) {
    throw new Error("Missing required environment variables")
  }
  
  return {
    supabase: createClient($2);
    openaiApiKey
  }
},

// Validate request content
const validateRequest = $2;
  if (!request.content) {
    throw new Error("No content provided for analysis")
  }
  
  if (!request.contentType) {
    throw new Error("No content type provided")
  }
  
  return request
},

// Create prompt for OpenAI
const createAnalysisPrompt = (contentType: string, content: string): string => {
  return `
    You are an AI fraud detection assistant for the Zion AI Marketplace.
    Analyze this ${contentType} for signs of fraud, spam, phishing, or abuse.
    
    Content to analyze:
    """
    ${content}
    """
    
    Respond with one of these classifications: SAFE / SUSPICIOUS / DANGEROUS
    followed by a brief explanation (max 1-2 sentences) of your reasoning.
    Format your response exactly like: "CLASSIFICATION: explanation"
  `
},

// Call OpenAI API for content analysis
const analyzeWithOpenAI = async (prompt: string, openaiApiKey: string): Promise<{classification: string, explanation: string}> => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openaiApiKey}`},
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a fraud detection assistant that analyzes content for signs of fraud, spam, or abuse." },
          { role: "user", content: prompt}
        ],
        temperature: 0.3,
        max_tokens: 150})
    }),
    
    const data = await response.json($2);
    if (!response.ok) {
      console.error($2);
      throw new Error(`OpenAI API error: ${data.error?.message || "Unknown error"}`)
    }
    
    const analysisText = $2;
    console.log($2);
    // Parse the result
    let classification = $2;
    let explanation = $2;
    if (analysisText.includes("SUSPICIOUS")) {
      classification = "SUSPICIOUS"
    } else if (analysisText.includes("DANGEROUS")) {
      classification = "DANGEROUS"
    }
    
    // Extract explanation
    if (analysisText.includes(": ")) {
      explanation = analysisText.split(":")[1].trim()
    }
    
    return { classification, explanation }
  } catch (error) {
    console.error($2);
    throw error
  }
},

// Update flag in database if flagId was provided
const updateFraudFlag = $2;
  flagId: string,
  classification: string, 
  explanation: string): Promise<void> => {
  if (!flagId) return,
  
  const { error } = await supabase
    .from("fraud_flags")
    .update($2);
      gpt_explanation: explanation,
      updated_at: new Date().toISOString()
    })
    .eq($2);
  if (error) {
    console.error($2);
    throw new Error(`Error updating fraud flag: ${error.message}`)
  }
  
  console.log(`Updated fraud flag ${flagId} with classification: ${classification}`)
},

// Main request handler
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders})
  }

  try {
    console.log($2);
    // Initialize services
    const { supabase, openaiApiKey } = initializeServices($2);
    // Parse and validate request
    const requestData = await req.json().catch($2);
      throw new Error("Invalid JSON in request body")
    }),
    
    const { content, contentType, flagId } = validateRequest($2);
    console.log($2);
    // Create prompt and analyze with OpenAI
    const prompt = createAnalysisPrompt($2);
    const { classification, explanation } = await analyzeWithOpenAI($2);
    // Update flag if flagId was provided
    if (flagId) {
      await updateFraudFlag(supabase, flagId, classification, explanation)
    }
    
    // Return the analysis result
    const result: AnalysisResult = {
      classification: classification.toLowerCase($2);
      explanation,
      success: true},
    
    console.log($2);
    return new Response(JSON.stringify(result), { 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    })

  } catch (error) {
    console.error($2);
    // Determine appropriate status code based on error
    const statusCode = $2;
    return new Response($2);
      { 
        status: statusCode, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  }
}),
