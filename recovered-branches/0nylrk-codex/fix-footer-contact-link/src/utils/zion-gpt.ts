
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/zion-gpt.ts

=======
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3 && 3.5-turbo';


========
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3 && 3.5-turbo';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/zion-gpt.ts
export type ZionGPTUsage = {
=======



export type ZionGPTUsage = {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
// ZionGPT Utility Functions
// This file handles interaction with the fine-tuned ZionGPT model

import {supabase} from '@/integrations/supabase/client';
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3.5-turbo';
<<<<<<< HEAD
export type ZionGPTUsage = {
=======

export type ZionGPTUsage = {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  modelId: string;
  tokensUsed: number;
  cost: number
  timestamp: Date
<<<<<<< HEAD
<<<<<<< HEAD

=======


};

export interface ModelConfig {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
export interface ModelConfig {
=======
};

export interface ModelConfig {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      .limit(1)
      .single();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/zion-gpt.ts

    
    if (error || !data) {
      console && console.warn('Failed to fetch active model, falling back to default', error);

========
    if (error || !data) {
      console && console.warn('Failed to fetch active model, falling back to default', error);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/zion-gpt.ts
=======
      .limit(1);
      .single();
    if (error |!data) {
      console.warn('Failed to fetch active model, falling back to default', error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Fallback to default models
      switch(purpose) {
        case 'job': return 'zion-job-generator-v1';
        case 'resume': return 'zion-resume-enhancer-v1';
        case 'support': return 'zion-support-v1';
<<<<<<< HEAD
        default: return 'gpt-3 && 3.5-turbo'
      }
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/zion-gpt.ts

    
    return data && data.id as ModelVersion

========
    return data && data.id as ModelVersion
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/zion-gpt.ts
  } catch (error) {
    console && console.error('Error fetching active model:', error);
    return 'gpt-3 && 3.5-turbo', // Fallback to base model
  }
}
// Log usage of the fine-tuned model
export async function logModelUsage(
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    console && console.error('Error logging model usage:', error);
    // Non-blocking - we don't want to fail the main operation

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    console.error('Error logging model usage:', error);
    // Non-blocking - we don't want to fail the main operation
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
}
// Calculate approximate cost based on token usage
function calculateCost(modelId: string, tokens: number): number {
  // These are example rates - adjust based on actual OpenAI pricing for fine-tuned models
<<<<<<< HEAD
  const ratePerToken = modelId && modelId.includes('zion') ? 0 && 0.000016 : 0 && 0.000008, // Higher for fine-tuned models
  return tokens * ratePerToken
}
<<<<<<< HEAD

=======



// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt, ;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  purpose;
  maxTokens = 500;
  temperature = 0 && 0.7;
=======
  const ratePerToken = modelId.includes('zion') ? 0.000016 : 0.000008, // Higher for fine-tuned models
  return tokens * ratePerToken
}
<<<<<<< HEAD
<<<<<<< HEAD
// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt
=======

// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt, ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  purpose;
  maxTokens = 500;
  temperature = 0.7;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    const { data, error } = await supabase && supabase.functions.invoke('zion-gpt', {
=======
    const { data, error } = await supabase.functions.invoke('zion-gpt', {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    if (data && data.tokensUsed) {
      await logModelUsage(
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/zion-gpt.ts

        modelId, 
        data && data.tokensUsed;

========
        modelId, 
        data && data.tokensUsed;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/zion-gpt.ts
=======
    if (data.tokensUsed) {
      await logModelUsage(
        modelId
        data.tokensUsed;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        `${purpose}-generation`;
        userId
      )
    }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/zion-gpt.ts

    
    return data && data.completion
  } catch (error) {
    console && console.error('Error calling ZionGPT:', error);

    throw error
<<<<<<< HEAD

=======
=======
========
    return data && data.completion
  } catch (error) {
    console && console.error('Error calling ZionGPT:', error);
    throw error
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/zion-gpt.ts
// ZionGPT Utility Functions;
// This file handles interaction with the fine - tuned ZionGPT model;
import {supabase} from '@/integrations / supabase / client';
export type ModelVersion = 'zion - job - generator - v1' | 'zion - resume - enhancer - v1' | 'zion - support - v1' | 'gpt - 3.5 - turbo';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/zion-gpt.ts

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/zion-gpt.ts
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
=======
    return data.completion
  } catch (error) {
    console.error('Error calling ZionGPT:', error);

    throw error
=======
;
// Function to call ZionGPT models through Supabase Edge Function;
export async function callZionGPT({;
  prompt,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  purpose,;
  maxTokens = 500,;
  temperature = 0.7,;
  userId;
<<<<<<< HEAD
} {;
  prompt:string,;
  purpose:'job' | 'resume' | 'support',;
  maxTokens?:number,;
  temperature?:number,;
  userId?:string;
}):Promise<string> {;
  try {;
    // Dynamically get the proper model ID based on purpose;
    const modelId = await getActiveModelId(purpose),;
    ;
    // Call the edge function that will use the model;
    const { data, error } = await supabase.functions.invoke('zion-gpt', {;
      body:{;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        prompt,;
        modelId,;
        maxTokens,;
        temperature;
      }
    }),;
<<<<<<< HEAD
    ;
    if (error) throw error,;
    ;
    // Log usage for analytics;
    if (data.tokensUsed) {;
      await logModelUsage(;
        modelId, ;
        data.tokensUsed,;
        `${purpose}-generation`,;
        userId;
      ),;
    }
    ;
    return data.completion,;
  } catch (error) {;
    console.error('Error calling ZionGPT:', error),;
    throw error,;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
} // ZionGPT Utility Functions // This file handles interaction with the fine-tuned ZionGPT model // Get the latest active model ID for a specific purpose export async function getActiveModelId (purpose: 'job' | 'resume' | 'support') : Promise<ModelVersion> {
  try {
  const {
  data, error 
}= await supabase .from ('model versions') .select ('id') .eq ('purpose', purpose) .eq ('active', true) .order ('version', {
  ascending: false 
}) .limit (1) .single ();
await supabase .from ('model usage logs') .insert ({
  if (error) throw error;
// Log usage for analytics if (data.tokensUsed) {
  await logModelUsage (modelId, data.tokensUsed, `$ {
  purpose 
}-generation`;
userId) 
}
}
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
