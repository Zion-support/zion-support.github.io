
// ZionGPT Utility Functions
// This file handles interaction with the fine-tuned ZionGPT model


export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3.5-turbo';

export type ZionGPTUsage = {_modelId: string;
  tokensUsed: number;
  cost: number;
  timestamp: Date;};

export interface ModelConfig {_id: ModelVersion;
  version: number;
  createdAt: string;
  baseModel: string;
  purpose: string;
  active: boolean;}

// Get the latest active model ID for a specific purpose
export async function getActiveModelId(_purpose: 'job' | 'resume' | 'support'): Promise<ModelVersion> {_try {
    const { data, _error} = await supabase
      .from('model_versions')
      .select('id')
      .eq('purpose', purpose)
      .eq('active', true)
      .order('version', {_ascending: false})
      .limit(1)
      .single();
    
    if (error || !data) {_// Fallback to default models
      switch(purpose) {
        case 'job': return 'zion-job-generator-v1';
        case 'resume': return 'zion-resume-enhancer-v1';
        case 'support': return 'zion-support-v1';
        default: return 'gpt-3.5-turbo';}
    }
    
    return data.id as ModelVersion;
  } catch (error) {_return 'gpt-3.5-turbo'; // Fallback to base model}
}

// Log usage of the fine-tuned model
export async function logModelUsage(_modelId: string, _tokensUsed: number, _feature: string, _userId?: string): Promise<void> {_try {
    const _cost = calculateCost(modelId, _tokensUsed);
    
    await supabase
      .from('model_usage_logs')
      .insert({
        model_id: modelId, _tokens_used: tokensUsed, _cost: cost, _feature: feature, _user_id: userId || null, _timestamp: new Date().toISOString()});
      
  } catch (error) {_// Non-blocking - we don't want to fail the main operation}
}

// Calculate approximate cost based on token usage
function calculateCost(_modelId: string, _tokens: number): number {_// These are example rates - adjust based on actual OpenAI pricing for fine-tuned models
  const _ratePerToken = modelId.includes('zion') ? 0.000016 : 0.000008; // Higher for fine-tuned models
  return tokens * ratePerToken;}

// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT(_{_prompt, _purpose, _maxTokens = 500, _temperature = 0.7, _userId}: {_prompt: string;
  purpose: 'job' | 'resume' | 'support';
  maxTokens?: number;
  temperature?: number;
  userId?: string;}): Promise<string> {_try {
    // Dynamically get the proper model ID based on purpose
    const _modelId = await getActiveModelId(purpose);
    
    // Call the edge function that will use the model
    const { data, _error} = await supabase.functions.invoke(_'zion-gpt', _{_body: {
        prompt, _modelId, _maxTokens, _temperature}
    });
    
    if (error) throw error;
    
    // Log usage for analytics
    if (data.tokensUsed) {_await logModelUsage(
        modelId, _data.tokensUsed, _`${purpose}-generation`,
        userId
      );
    }
    
    return data.completion;
  } catch (error) {_throw error;}
}
