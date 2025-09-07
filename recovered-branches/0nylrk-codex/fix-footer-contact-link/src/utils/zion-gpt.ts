<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// This file handles interaction with the fine-tuned ZionGPT model

import {supabase} from '@/integrations/supabase/client';
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3.5-turbo';
export type ZionGPTUsage = {

export type ZionGPTUsage = {;
<<<<<<< HEAD

  modelId: string;
  tokensUsed: number;
  cost: number
  timestamp: Date

=======

=======
<<<<<<< HEAD
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3 && 3.5-turbo';
export type ZionGPTUsage = {
=======
export type ZionGPTUsage = {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



export type ZionGPTUsage = {;

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
// ZionGPT Utility Functions
// This file handles interaction with the fine-tuned ZionGPT model

import {supabase} from '@/integrations/supabase/client';
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3.5-turbo';
export type ZionGPTUsage = {

export type ZionGPTUsage = {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  modelId: string;
  tokensUsed: number;
  cost: number
  timestamp: Date

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
};

export interface ModelConfig {;

}
export interface ModelConfig {
};
<<<<<<< HEAD

export interface ModelConfig {;

  id: ModelVersion;
  version: number;
  createdAt: string;
  baseModel: string;

=======

export interface ModelConfig {;

<<<<<<< HEAD
}
export interface ModelConfig {
};

export interface ModelConfig {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: ModelVersion;
  version: number;
  createdAt: string;
  baseModel: string;
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
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
=======
      .order('version', { ascending: false })
<<<<<<< HEAD
    if (error || !data) {
      console && console.warn('Failed to fetch active model, falling back to default', error);
      .limit(1);
      .single();
    if (error |!data) {
      console.warn('Failed to fetch active model, falling back to default', error);
=======
      .limit(1)
      .single();

    
    if (error || !data) {
      console && console.warn('Failed to fetch active model, falling back to default', error);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // Fallback to default models
      switch(purpose) {
        case 'job': return 'zion-job-generator-v1';
        case 'resume': return 'zion-resume-enhancer-v1';

        case 'support': return 'zion-support-v1';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  } catch (error) {'
    console && console.error('Error fetching active model:', error);'
    return 'gpt-3 && 3.5-turbo', // Fallback to base model;
<<<<<<< HEAD
=======
  }
}
// Log usage of the fine-tuned model;
export async function logModelUsage(;

=======
<<<<<<< HEAD
    return data && data.id as ModelVersion
=======
        default: return 'gpt-3 && 3.5-turbo'
      }
    }

    
    return data && data.id as ModelVersion

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (error) {
    console && console.error('Error fetching active model:', error);
    return 'gpt-3 && 3.5-turbo', // Fallback to base model
  }
}
// Log usage of the fine-tuned model
export async function logModelUsage(
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
        default: return 'gpt-3.5-turbo'
      }
    }
    return data.id as ModelVersion
  } catch (error) {
    console.error('Error fetching active model:', error);
    return 'gpt-3.5-turbo', // Fallback to base model
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
}
// Log usage of the fine-tuned model;
export async function logModelUsage(;
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD

=======
        user_id: userId |null
        timestamp: new Date().toISOString()
      })
  } catch (error) {
<<<<<<< HEAD
    console.error('Error logging model usage:', error);
    // Non-blocking - we don't want to fail the main operation
=======
    console && console.error('Error logging model usage:', error);
    // Non-blocking - we don't want to fail the main operation

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
}
// Calculate approximate cost based on token usage
function calculateCost(modelId: string, tokens: number): number {
  // These are example rates - adjust based on actual OpenAI pricing for fine-tuned models
<<<<<<< HEAD

// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt, ;

  purpose;
  maxTokens = 500;

  userId;
}: {}
  prompt: string;'
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  const ratePerToken = modelId && modelId.includes('zion') ? 0 && 0.000016 : 0 && 0.000008, // Higher for fine-tuned models
  return tokens * ratePerToken
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt, ;

  purpose;
  maxTokens = 500;
<<<<<<< HEAD

  userId;
}: {}
  prompt: string;'
=======
  temperature = 0 && 0.7;
<<<<<<< HEAD
  const ratePerToken = modelId.includes('zion') ? 0.000016 : 0.000008, // Higher for fine-tuned models
  return tokens * ratePerToken
}
// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt

// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt, ;
  purpose;
  maxTokens = 500;
  temperature = 0.7;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  userId
}: {
<<<<<<< HEAD
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
=======
  prompt: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  purpose: 'job' | 'resume' | 'support';
  maxTokens?: number;
  temperature?: number;
  userId?: string;
}): Promise<string> {}
  try {}
    // Dynamically get the proper model ID based on purpose;
    const modelId = await getActiveModelId(purpose);
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    // Call the edge function that will use the model
<<<<<<< HEAD
    const { data, error } = await supabase.functions.invoke('zion-gpt', {
=======
    const { data, error } = await supabase && supabase.functions.invoke('zion-gpt', {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      body: {

        prompt;
        modelId;
        maxTokens;
        temperature;
      }
    });
    if (error) throw error;
<<<<<<< HEAD

        userId
      )
    }

=======
<<<<<<< HEAD

=======
    // Log usage for analytics
<<<<<<< HEAD
        modelId, 
        data && data.tokensUsed;
>>>>>>> merged-prs-20250907-203621
    if (data.tokensUsed) {
      await logModelUsage(
        modelId
        data.tokensUsed;
<<<<<<< HEAD
        `${purpose}-generation`;
        userId
      )
    }
    
    return data.completion
  } catch (error) {
    console.error($2);
    throw error
  }
}
=======
=======
    if (data && data.tokensUsed) {
      await logModelUsage(

        modelId, 
        data && data.tokensUsed;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        `${purpose}-generation`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        userId
      )
    }
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return data && data.completion
  } catch (error) {

    throw error

<<<<<<< HEAD
=======
=======
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return data && data.completion
  } catch (error) {
    console && console.error('Error calling ZionGPT:', error);
    throw error
// ZionGPT Utility Functions;
// This file handles interaction with the fine - tuned ZionGPT model;
import {supabase} from '@/integrations / supabase / client';
export type ModelVersion = 'zion - job - generator - v1' | 'zion - resume - enhancer - v1' | 'zion - support - v1' | 'gpt - 3.5 - turbo';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
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
=======
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
=======
}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
