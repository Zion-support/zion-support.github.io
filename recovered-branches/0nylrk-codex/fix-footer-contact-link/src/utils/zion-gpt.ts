
// ZionGPT Utility Functions
// This file handles interaction with the fine-tuned ZionGPT model

import { supabase } from '@/integrations/supabase/client';
export type ModelVersion = $2;
export type ZionGPTUsage = $2;
  tokensUsed: number,
  cost: number,
  timestamp: Date},

export interface ModelConfig {
  id: ModelVersion,
  version: number,
  createdAt: string,
  baseModel: string,
  purpose: string,
  active: boolean}

// Get the latest active model ID for a specific purpose
export async function getActiveModelId(purpose: 'job' | 'resume' | 'support'): Promise<ModelVersion> {
  try {
    const { data, error } = await supabase
      .from('model_versions')
      .select('id')
      .eq('purpose', purpose)
      .eq('active', true)
      .order('version', { ascending: false})
      .limit(1)
      .single($2);
    if (error || !data) {
      console.warn($2);
      // Fallback to default models
      switch(purpose) {
        case 'job': return 'zion-job-generator-v1',
        case 'resume': return 'zion-resume-enhancer-v1',
        case 'support': return 'zion-support-v1',
        default: return 'gpt-3.5-turbo'
      }
    }
    
    return data.id as ModelVersion
  } catch (error) {
    console.error($2);
    return 'gpt-3.5-turbo', // Fallback to base model
  }
}

// Log usage of the fine-tuned model
export async function logModelUsage(
  modelId: string,
  tokensUsed: number,
  feature: string,
  userId?: string
): Promise<void> {
  try {
    const cost = calculateCost($2);
    await supabase
      .from('model_usage_logs')
      .insert({
        model_id: modelId,
        tokens_used: tokensUsed,
        cost: cost,
        feature: feature,
        user_id: userId || null,
        timestamp: new Date().toISOString()
      })
      
  } catch (error) {
    console.error($2);
    // Non-blocking - we don't want to fail the main operation
  }
}

// Calculate approximate cost based on token usage
function calculateCost(modelId: string, tokens: number): number {
  // These are example rates - adjust based on actual OpenAI pricing for fine-tuned models
  const ratePerToken = modelId.includes('zion') ? 0.000016 : 0.000008, // Higher for fine-tuned models
  return tokens * ratePerToken
}

// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt, 
  purpose,
  maxTokens = $2;
  temperature = $2;
  userId
}: {
  prompt: string,
  purpose: 'job' | 'resume' | 'support',
  maxTokens?: number,
  temperature?: number,
  userId?: string
}): Promise<string> {
  try {
    // Dynamically get the proper model ID based on purpose
    const modelId = await getActiveModelId($2);
    // Call the edge function that will use the model
    const { data, error } = await supabase.functions.invoke($2);
    if (error) throw error,
    
    // Log usage for analytics
    if (data.tokensUsed) {
      await logModelUsage(
        modelId, 
        data.tokensUsed,
        `${purpose}-generation`,
        userId
      )
    }
    
    return data.completion
  } catch (error) {
    console.error($2);
    throw error
  }
}
