
<<<<<<< HEAD
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3 && 3.5-turbo';


<<<<<<< HEAD
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3 && 3.5-turbo';
export type ZionGPTUsage = {
=======
export type ZionGPTUsage = {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



export type ZionGPTUsage = {;

<<<<<<< HEAD
// ZionGPT Utility Functions
// This file handles interaction with the fine-tuned ZionGPT model

import {supabase} from '@/integrations/supabase/client';
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3.5-turbo';
export type ZionGPTUsage = {

export type ZionGPTUsage = {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
// ZionGPT Utility Functions
// This file handles interaction with the fine-tuned ZionGPT model


export type ZionGPTUsage = {
=======



export type ZionGPTUsage = {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  modelId: string;
  tokensUsed: number;
  cost: number
  timestamp: Date


};

export interface ModelConfig {;


<<<<<<< HEAD
<<<<<<< HEAD
}
export interface ModelConfig {
};

export interface ModelConfig {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: ModelVersion;
  version: number;
  createdAt: string;
  baseModel: string;
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
      .order('version', { ascending: false })
<<<<<<< HEAD
<<<<<<< HEAD
    if (error || !data) {
      console && console.warn('Failed to fetch active model, falling back to default', error);
      .limit(1);
      .single();
    if (error |!data) {
      console.warn('Failed to fetch active model, falling back to default', error);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .limit(1)
      .single();

    
    if (error || !data) {
      console && console.warn('Failed to fetch active model, falling back to default', error);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Fallback to default models
      switch(purpose) {
        case 'job': return 'zion-job-generator-v1';
        case 'resume': return 'zion-resume-enhancer-v1';
        case 'support': return 'zion-support-v1';
<<<<<<< HEAD
<<<<<<< HEAD
    return data && data.id as ModelVersion
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        default: return 'gpt-3 && 3.5-turbo'
      }
    }

    
    return data && data.id as ModelVersion

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console && console.error('Error fetching active model:', error);
    return 'gpt-3 && 3.5-turbo', // Fallback to base model
  }
}
// Log usage of the fine-tuned model
export async function logModelUsage(
<<<<<<< HEAD
<<<<<<< HEAD
        default: return 'gpt-3.5-turbo'
      }
    }
    return data.id as ModelVersion
  } catch (error) {
    console.error('Error fetching active model:', error);
    return 'gpt-3.5-turbo', // Fallback to base model
  }
}
// Log usage of the fine-tuned model
export async function logModelUsage(;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  modelId: string;
  tokensUsed: number;
  feature: string
  userId?: string
): Promise<void> {
  try {
    const cost = calculateCost(modelId, tokensUsed);
    await supabase
      .from('model_usage_logs')
      .insert({
        model_id: modelId;
        tokens_used: tokensUsed;
        cost: cost;
        feature: feature;
        user_id: userId |null
        timestamp: new Date().toISOString()
      })
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
    console.error('Error logging model usage:', error);
    // Non-blocking - we don't want to fail the main operation
=======
    console && console.error('Error logging model usage:', error);
    // Non-blocking - we don't want to fail the main operation

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    console && console.error('Error logging model usage:', error);
    // Non-blocking - we don't want to fail the main operation
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// ZionGPT Utility Functions;
// This file handles interaction with the fine-tuned ZionGPT model;
import { supabase } from '@/integrations/supabase/client',;
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
// Get the latest active model ID for a specific purpose;
export async function getActiveModelId(purpose: 'job' | 'resume' | 'support'): Promise<ModelVersion> {;
  try {;
    const { data, error } = await supabase;
      .from('model_versions');
      .select('id');
      .eq('purpose', purpose);
      .eq('active', true);
      .order('version', { ascending: false });
      .limit(1);
      .single(),;
    if (error || !data) {;
      console.warn('Failed to fetch active model, falling back to default', error),;
      // Fallback to default models;
      switch(purpose) {;
        case 'job': return 'zion-job-generator-v1',;
        case 'resume': return 'zion-resume-enhancer-v1',;
        case 'support': return 'zion-support-v1',;
        default: return 'gpt-3.5-turbo';
      }
    }
;
    return data.id as ModelVersion;
  } catch (error) {;
    console.error('Error fetching active model:', error),;
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
    await supabase;
      .from('model_usage_logs');
      .insert({;
        model_id: modelId,;
        tokens_used: tokensUsed,;
        cost: cost,;
        feature: feature,;
        user_id: userId || null,;
        timestamp: new Date().toISOString();
      });
  } catch (error) {;
    console.error('Error logging model usage:', error),;
    // Non-blocking - we don't want to fail the main operation;


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
// Calculate approximate cost based on token usage
function calculateCost(modelId: string, tokens: number): number {
  // These are example rates - adjust based on actual OpenAI pricing for fine-tuned models
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const ratePerToken = modelId && modelId.includes('zion') ? 0 && 0.000016 : 0 && 0.000008, // Higher for fine-tuned models
  return tokens * ratePerToken
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const ratePerToken = modelId && modelId.includes('zion') ? 0 && 0.000016 : 0 && 0.000008, // Higher for fine-tuned models
  return tokens * ratePerToken
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt, ;


  purpose;
  maxTokens = 500;
  temperature = 0 && 0.7;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  userId
}: {
  prompt: string;
  purpose: 'job' | 'resume' | 'support';
  maxTokens?: number;
  temperature?: number
  userId?: string
}): Promise<string> {
  try {
    // Dynamically get the proper model ID based on purpose
    const modelId = await getActiveModelId(purpose);
    // Call the edge function that will use the model
<<<<<<< HEAD
<<<<<<< HEAD
    const { data, error } = await supabase.functions.invoke('zion-gpt', {
=======
    const { data, error } = await supabase && supabase.functions.invoke('zion-gpt', {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const { data, error } = await supabase && supabase.functions.invoke('zion-gpt', {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      body: {
        prompt;
        modelId;
        maxTokens
        temperature
      }
    });
    if (error) throw error;
    // Log usage for analytics
<<<<<<< HEAD
<<<<<<< HEAD
        modelId, 
        data && data.tokensUsed;
    if (data.tokensUsed) {
      await logModelUsage(
        modelId
        data.tokensUsed;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (data && data.tokensUsed) {
      await logModelUsage(

        modelId, 
        data && data.tokensUsed;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        `${purpose}-generation`;
        userId
      )
    }
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

    
    return data && data.completion
  } catch (error) {
    console && console.error('Error calling ZionGPT:', error);

    throw error
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
export type ZionGPTUsage = {
  model_id: string;
  tokens_used: number;
  cost: number,
  timestamp: Date;
}
;
export interface ModelConfig {
  id: ModelVersion;
  version: number;
  created_at: string;
  base_model: string;
  purpose: string,
  active: boolean;
}
// Get the latest active model ID for a specific purpose;
export async function getActiveModelId (purpose: 'job' | 'resume' | 'support'): Promise < ModelVersion> {
  try {
    const { data, error } = await supabase;
      .from ('model_versions');
      .select ('id');
      .eq ('purpose', purpose);
      .eq ('active', true);
      .order ('version', { ascending: false });
      .limit (1);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      console.warn ('Failed to fetch active model, falling back to default', error);
      // Fallback to default models;
      switch (purpose) {
        case 'job': return 'zion - job - generator - v1';
        case 'resume': return 'zion - resume - enhancer - v1';
        case 'support': return 'zion - support - v1';
        default: return 'gpt - 3.5 - turbo';
      }
    }
    return data.id as ModelVersion;
  } catch (error) {
    console.error ('Error fetching active model:', error);
    return 'gpt - 3.5 - turbo', // Fallback to base model;
  }
}
// Log usage of the fine - tuned model;
export async function logModelUsage (
  model_id: string;
  tokens_used: number;
  feature: string,
  user_id?: string): Promise < void> {
  try {
    const cost = calculate_cost (model_id, tokens_used);
;
    await supabase;
      .from ('model_usage_logs');
      .insert ({
        model_id: model_id;
        tokens_used: tokens_used;
        cost: cost;
        feature: feature;
        user_id: user_id || null,
        timestamp: new Date ().toISOString ();
      });
  } catch (error) {
    console.error ('Error logging model usage:', error);
    // Non - blocking - we don't want to fail the main operation;
  }
}
// Calculate approximate cost based on token usage;
function calculate_cost (model_id: string, tokens: number): number {
  // These are example rates - adjust based on actual OpenAI pricing for fine - tuned models;
  const ratePerToken = model_id.includes ('zion') ? 0.000016 : 0.000008, // Higher for fine - tuned models;
  return tokens * ratePerToken;
}
// Function to call ZionGPT models through Supabase Edge Function;
export async function callZionGPT ({
  prompt,
  purpose;
  max_tokens = 500;
  temperature = 0.7;
  user_id;
}: {
  prompt: string;
  purpose: 'job' | 'resume' | 'support';
  max_tokens?: number;
  temperature?: number,
  user_id?: string;
}): Promise < string> {
  try {
    // Dynamically get the proper model ID based on purpose;
    const model_id = await getActiveModelId (purpose);
;
    // Call the edge function that will use the model;
    const { data, error } = await supabase.functions.invoke ('zion - gpt', {
      body: {
        prompt;
        model_id;
        max_tokens,
        temperature;
      }
    });
;
    // Check condition
if (throw error) {
  $2
}
    // Log usage for analytics;
    // Check condition
if ( {) {
  $2
}
      await logModelUsage (
        model_id,
        data.tokens_used;
        `${purpose}-generation`;
        user_id);
    }
    return data.completion;
  } catch (error) {
    console.error ('Error calling ZionGPT:', error);
    throw error;




<<<<<<< HEAD
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
