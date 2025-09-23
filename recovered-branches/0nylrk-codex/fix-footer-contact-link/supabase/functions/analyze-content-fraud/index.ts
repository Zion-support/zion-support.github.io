
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";
import { corsHeaders } from "../_shared/cors.ts";

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
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const openaiApiKey = Deno.env.get("OPENAI_API_KEY");
  
  if (!supabaseUrl || !supabaseServiceKey || !openaiApiKey) {
    throw new Error("Missing required environment variables");
  }
  
  return {
    supabase: createClient(supabaseUrl, supabaseServiceKey),
    openaiApiKey
  };
};

// Validate request content
const validateRequest = (data: unknown): AnalyzeRequest => {
  if (!data || typeof data !== 'object') {
    throw new Error("Invalid request body");
  }
  
  const request = data as AnalyzeRequest;
  
  if (!request.content) {
    throw new Error("No content provided for analysis");
  }
  
  if (!request.contentType) {
    throw new Error("No content type provided");
  }
  
  return request;
};

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
  `;
};

// Call OpenAI API for content analysis
const analyzeWithOpenAI = async (prompt: string, openaiApiKey: string): Promise<{classification: string, explanation: string}> => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
