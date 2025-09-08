<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3 && 3.5-turbo';

export type ZionGPTUsage = {
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3 && 3.5-turbo';
export type ZionGPTUsage = {
export type ZionGPTUsage = {

export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3 && 3.5-turbo';

export type ZionGPTUsage = {}
export type ZionGPTUsage = {};
export type ZionGPTUsage = {;

<<<<<<< HEAD


=======

// This file handles interaction with the fine-tuned ZionGPT model

import {supabase} from '@/integrations/supabase/client';
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3.5-turbo';
export type ZionGPTUsage = {

export type ZionGPTUsage = {;


>>>>>>> origin/cursor/delete-old-data-records-6bba
  modelId: string;
  tokensUsed: number;
  cost: number
  timestamp: Date

};

export interface ModelConfig {;

}
export interface ModelConfig {
};

export interface ModelConfig {;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: ModelVersion;
  version: number;
  createdAt: string;
  baseModel: string;
<<<<<<< HEAD

  purpose: string
  active: boolean
}
// Get the latest active model ID for a specific purpose
export async function getActiveModelId(purpose: 'job' | 'resume' | 'support'): Promise<ModelVersion> {
  try {
    const { data, error } = await supabase
      .from('model_versions')
      .select('id')
      .eq('purpose', purpose)
      .eq('active', true)

=======

  id: ModelVersion;
  version: number;
  createdAt: string;
  baseModel: string;


>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Fallback to default models
      switch(purpose) {
        case 'job': return 'zion-job-generator-v1';
        case 'resume': return 'zion-resume-enhancer-v1';

        case 'support': return 'zion-support-v1';
<<<<<<< HEAD

=======


  } catch (error) {'
    console && console.error('Error fetching active model:', error);'
    return 'gpt-3 && 3.5-turbo', // Fallback to base model;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  modelId: string;
  tokensUsed: number;
  feature: string;
  userId?: string;
): Promise<void> {}
  try {}
    const cost = calculateCost(modelId, tokensUsed);
    await supabase'
      .from('model_usage_logs')
      .insert({}

        model_id: modelId;
        tokens_used: tokensUsed;
        cost: cost;
        feature: feature;

<<<<<<< HEAD
        user_id: userId |null
        timestamp: new Date().toISOString()
      })
  } catch (error) {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

// ZionGPT Utility Functions;
// This file handles interaction with the fine-tuned ZionGPT model;'
import { supabase } from '@/integrations/supabase/client',;'

export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3.5-turbo',;
export type ZionGPTUsage = {;
  modelId: string,;
  tokensUsed: number,;
  cost: number,;
  timestamp: Date;
},;
export interface ModelConfig {;
  id: ModelVersion,;
  version: number,;
  createdAt: string,;
  baseModel: string,;
  purpose: string,;
  active: boolean;
}
;

        default: return 'gpt-3.5-turbo';
      }
    }
;
    return data.id as ModelVersion;

    return 'gpt-3.5-turbo', // Fallback to base model;
  }
}
;
// Log usage of the fine-tuned model;
export async function logModelUsage(;
  modelId: string,;
  tokensUsed: number,;
  feature: string,;
  userId?: string;
): Promise<void> {;
  try {;
    const cost = calculateCost(modelId, tokensUsed),;

      .from('model_usage_logs');
      .insert({;
        model_id: modelId,;
        tokens_used: tokensUsed,;
        cost: cost,;
        feature: feature,;
        user_id: userId || null,;
        timestamp: new Date().toISOString();
      });

    // Non-blocking - we don't want to fail the main operation;


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}
// Calculate approximate cost based on token usage
function calculateCost(modelId: string, tokens: number): number {
  // These are example rates - adjust based on actual OpenAI pricing for fine-tuned models


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt, ;

  purpose;
  maxTokens = 500;

<<<<<<< HEAD
  temperature = 0 && 0.7;
=======
  purpose: 'job' | 'resume' | 'support';
  maxTokens?: number;
  temperature?: number;
  userId?: string;
}): Promise<string> {}
  try {}
    // Dynamically get the proper model ID based on purpose;
    const modelId = await getActiveModelId(purpose);

>>>>>>> origin/cursor/delete-old-data-records-6bba

      body: {

        prompt;
        modelId;
        maxTokens;
        temperature;
      }
    });
    if (error) throw error;

<<<<<<< HEAD
    // Log usage for analytics
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        userId
      )
    }
<<<<<<< HEAD

=======
    return data && data.completion
  } catch (error) {

    throw error
>>>>>>> origin/cursor/delete-old-data-records-6bba


;
export type ZionGPTUsage = {};

  model_id: string;
  tokens_used: number;
  cost: number,
  timestamp: Date;
}
;

  id: ModelVersion;
  version: number;
  created_at: string;
  base_model: string;
  purpose: string,
  active: boolean;
}

      .order ('version', { ascending: false });
      .limit (1);
      .single ();
;

        default: return 'gpt - 3.5 - turbo';
      }
    }
    return data.id as ModelVersion;

    return 'gpt - 3.5 - turbo', // Fallback to base model;
  }
}
// Log usage of the fine - tuned model;

        model_id: model_id;
        tokens_used: tokens_used;
        cost: cost;
        feature: feature;
        user_id: user_id || null,
        timestamp: new Date ().toISOString ();
      });

    // Non - blocking - we don't want to fail the main operation;
  }
}
// Calculate approximate cost based on token usage;

  const ratePerToken = model_id.includes ('zion') ? 0.000016 : 0.000008, // Higher for fine - tuned models;
  return tokens * ratePerToken;
}
// Function to call ZionGPT models through Supabase Edge Function;

  purpose;
  max_tokens = 500;
  temperature = 0.7;
  user_id;

  purpose: 'job' | 'resume' | 'support';
  max_tokens?: number;
  temperature?: number,
  user_id?: string;

        prompt;
        model_id;
        max_tokens,
        temperature;
      }
    });
;

        `${purpose}-generation`;
        user_id);
    }
    return data.completion;

    console.error ('Error calling ZionGPT:', error);
    throw error;

// ZionGPT Utility Functions;
// This file handles interaction with the fine-tuned ZionGPT model;
;
import { supabase } from '@/integrations/supabase/client',;
;
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3.5-turbo',;
;
export type ZionGPTUsage = {;
  modelId:string,;
  tokensUsed:number,;
  cost:number,;
  timestamp:Date;
},;
;
export interface ModelConfig {;
  id:ModelVersion,;
  version:number,;
  createdAt:string,;
  baseModel:string,;
  purpose:string,;
  active:boolean;
}
;
// Get the latest active model ID for a specific purpose;
export async function getActiveModelId(purpose:'job' | 'resume' | 'support'):Promise<ModelVersion> {;
  try {;
    const { data, error } = await supabase;
      .from('model_versions');
      .select('id');
      .eq('purpose', purpose);
      .eq('active', true);
      .order('version', { ascending:false });
      .limit(1);
      .single(),;
    ;
    if (error || !data) {;
      console.warn('Failed to fetch active model, falling back to default', error),;
      // Fallback to default models;
      switch(purpose) {;
        case 'job':return 'zion-job-generator-v1',;
        case 'resume':return 'zion-resume-enhancer-v1',;
        case 'support':return 'zion-support-v1',;
        default:return 'gpt-3.5-turbo';
      }
    }
    ;
    return data.id as ModelVersion,;
  } catch (error) {;
    console.error('Error fetching active model:', error),;
    return 'gpt-3.5-turbo', // Fallback to base model;

  }

  }
}
;
// Log usage of the fine-tuned model;
export async function logModelUsage(;
  modelId:string,;
  tokensUsed:number,;
  feature:string,;
  userId?:string;
):Promise<void> {;
  try {;
    const cost = calculateCost(modelId, tokensUsed),;
    ;
    await supabase;'
      .from('model_usage_logs');
      .insert({;
        model_id:modelId,;
        tokens_used:tokensUsed,;
        cost:cost,;
        feature:feature,;
        user_id:userId || null,;
        timestamp:new Date().toISOString();
      }),;
      ;
  } catch (error) {;'
    console.error('Error logging model usage:', error),;'
    // Non-blocking - we don't want to fail the main operation;  }
}
;
// Calculate approximate cost based on token usage;
function calculateCost(modelId:string, tokens:number):number {;
  // These are example rates - adjust based on actual OpenAI pricing for fine-tuned models;'
  const ratePerToken = modelId.includes('zion') ? 0.000016 :0.000008, // Higher for fine-tuned models;
  return tokens * ratePerToken;
}
;
// Function to call ZionGPT models through Supabase Edge Function;
export async function callZionGPT() { return null; }

<<<<<<< HEAD



  }
}
;
// Log usage of the fine-tuned model;
export async function logModelUsage(;
  modelId:string,;
  tokensUsed:number,;
  feature:string,;
  userId?:string;
):Promise<void> {;
  try {;
    const cost = calculateCost(modelId, tokensUsed),;
    ;
    await supabase;
      .from('model_usage_logs');
      .insert({;
        model_id:modelId,;
        tokens_used:tokensUsed,;
        cost:cost,;
        feature:feature,;
        user_id:userId || null,;
        timestamp:new Date().toISOString();
      }),;
      ;
  } catch (error) {;
    console.error('Error logging model usage:', error),;
    // Non-blocking - we don't want to fail the main operation;  }
}
;
// Calculate approximate cost based on token usage;
function calculateCost(modelId:string, tokens:number):number {;
  // These are example rates - adjust based on actual OpenAI pricing for fine-tuned models;
  const ratePerToken = modelId.includes('zion') ? 0.000016 :0.000008, // Higher for fine-tuned models;
  return tokens * ratePerToken;
}
;
// Function to call ZionGPT models through Supabase Edge Function;
export async function callZionGPT({;
  prompt, ;
    return data.completion
  } catch (error) {
    console.error('Error calling ZionGPT:', error);

    throw error
;
// Function to call ZionGPT models through Supabase Edge Function;
export async function callZionGPT({;
  prompt,;
  purpose,;
  maxTokens = 500,;
  temperature = 0.7,;
  userId;
}: {;
  prompt: string,;
  purpose: 'job' | 'resume' | 'support',;
  maxTokens?: number,;
  temperature?: number,;
  userId?: string;
}): Promise<string> {;
  try {;
    // Dynamically get the proper model ID based on purpose;
    const modelId = await getActiveModelId(purpose),;
    // Call the edge function that will use the model;
    const { data, error } = await supabase.functions.invoke('zion-gpt', {;
      body: {;
        prompt,;
        modelId,;
        maxTokens,;
        temperature;
      }
    }),;
    if (error) throw error,;
    // Log usage for analytics;
    if (data.tokensUsed) {;
      await logModelUsage(;
        modelId,;
        data.tokensUsed,;
        `${purpose}-generation`;
        userId;
      );
    }
;
    return data.completion;
  } catch (error) {;
    console.error('Error calling ZionGPT:', error);
    throw error;
  }
}

=======
}: {;
  prompt: string,;'
  purpose: 'job' | 'resume' | 'support',;
  maxTokens?: number,;
  temperature?: number,;
  userId?: string;
}): Promise<string> {;
  try {;
    // Dynamically get the proper model ID based on purpose;
    const modelId = await getActiveModelId(purpose),;
    // Call the edge function that will use the model;'
    const { data, error } = await supabase.functions.invoke('zion-gpt', {;
      body: {;
        prompt,;
        modelId,;
        maxTokens,;
        temperature;
      }
    }),;
    if (error) throw error,;
    // Log usage for analytics;
    if (data.tokensUsed) {;
      await logModelUsage(;
        modelId,;
        data.tokensUsed,;`
        `${purpose}-generation`;
        userId;
      );
    }
;
    return data.completion;
  } catch (error) {;'
    console.error('Error calling ZionGPT:', error);
    throw error;
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
