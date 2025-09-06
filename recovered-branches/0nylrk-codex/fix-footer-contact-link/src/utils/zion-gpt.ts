
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3 && 3.5-turbo';


export type ZionGPTUsage = {
export type ZionGPTUsage = {

export type ZionGPTUsage = {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


export type ZionGPTUsage = {}
export type ZionGPTUsage = {};
export type ZionGPTUsage = {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
// ZionGPT Utility Functions
=======
export type ZionGPTUsage = {;
export type ZionGPTUsage = {// ZionGPT Utility Functions
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export type ZionGPTUsage = {;
export type ZionGPTUsage = {// ZionGPT Utility Functions
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




export type ZionGPTUsage = {;

// ZionGPT Utility Functions
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// This file handles interaction with the fine-tuned ZionGPT model

import {supabase} from '@/integrations/supabase/client';
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3.5-turbo';
export type ZionGPTUsage = {

export type ZionGPTUsage = {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export type ZionGPTUsage = {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export type ZionGPTUsage = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  modelId: string;
  tokensUsed: number;
  cost: number
  timestamp: Date
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======


export type ZionGPTUsage = {};
  modelId: string;
  tokensUsed: number;
  cost: number;
  timestamp: Date;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};

export interface ModelConfig {;


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export interface ModelConfig {
};

export interface ModelConfig {;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export interface ModelConfig {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


}
export interface ModelConfig {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
export interface ModelConfig {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: ModelVersion;
  version: number;
  createdAt: string;
  baseModel: string;
<<<<<<< HEAD
  purpose: string;
  active: boolean;
}
// Get the latest active model ID for a specific purpose;
export async function getActiveModelId(purpose: 'job' | 'resume' | 'support'): Promise<ModelVersion> {}
  try {}
    const { data, error } = await supabase'
      .from('model_versions')'
      .select('id')'
      .eq('purpose', purpose)'
      .eq('active', true)'
      .order('version', { ascending: false })


<<<<<<< HEAD
=======
    if (error || !data) {
      console && console.warn('Failed to fetch active model, falling back to default', error);
      .limit(1);
      .single();
    if (error |!data) {
      console.warn('Failed to fetch active model, falling back to default', error);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
      .order('version', { ascending: false })
      .limit(1)
      .single();

    
    if (error || !data) {
      console && console.warn('Failed to fetch active model, falling back to default', error);

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // Fallback to default models
      switch(purpose) {
        case 'job': return 'zion-job-generator-v1';
        case 'resume': return 'zion-resume-enhancer-v1';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
      // Fallback to default models;
      switch(purpose) {'
        case 'job': return 'zion-job-generator-v1';'
        case 'resume': return 'zion-resume-enhancer-v1';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        case 'support': return 'zion-support-v1';



  } catch (error) {'
    console && console.error('Error fetching active model:', error);'
    return 'gpt-3 && 3.5-turbo', // Fallback to base model;
  }
}
// Log usage of the fine-tuned model;
export async function logModelUsage(;

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
=======
        case 'support': return 'zion-support-v1';
        default: return 'gpt-3 && 3.5-turbo'
      }
    }

    
    return data && data.id as ModelVersion

  } catch (error) {
    console && console.error('Error fetching active model:', error);
    return 'gpt-3 && 3.5-turbo', // Fallback to base model
  }
}
// Log usage of the fine-tuned model
export async function logModelUsage(
export async function logModelUsage(;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        model_id: modelId;
        tokens_used: tokensUsed;
        cost: cost;
        feature: feature;
<<<<<<< HEAD
        user_id: userId |null;
        timestamp: new Date().toISOString()
      })
<<<<<<< HEAD
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
    console && console.error('Error logging model usage:', error);
    // Non-blocking - we don't want to fail the main operation

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
    console.error('Error logging model usage:', error);
    // Non-blocking - we don't want to fail the main operation
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  } catch (error) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
// ZionGPT Utility Functions;
// This file handles interaction with the fine-tuned ZionGPT model;'
import { supabase } from '@/integrations/supabase/client',;'
=======
        user_id: userId |null
        timestamp: new Date().toISOString()
      })
  } catch (error) {
    console && console.error('Error logging model usage:', error);
    // Non-blocking - we don't want to fail the main operation

// ZionGPT Utility Functions;
// This file handles interaction with the fine-tuned ZionGPT model;
import { supabase } from '@/integrations/supabase/client',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
// Get the latest active model ID for a specific purpose;'
export async function getActiveModelId(purpose: 'job' | 'resume' | 'support'): Promise<ModelVersion> {;
  try {;
    const { data, error } = await supabase;'
      .from('model_versions');'
      .select('id');'
      .eq('purpose', purpose);'
      .eq('active', true);'
      .order('version', { ascending: false });
      .limit(1);
      .single(),;
    if (error || !data) {;'
      console.warn('Failed to fetch active model, falling back to default', error),;
      // Fallback to default models;
      switch(purpose) {;'
        case 'job': return 'zion-job-generator-v1',;'
        case 'resume': return 'zion-resume-enhancer-v1',;'
        case 'support': return 'zion-support-v1',;'
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        default: return 'gpt-3.5-turbo';
      }
    }
;
    return data.id as ModelVersion;
<<<<<<< HEAD
  } catch (error) {;'
    console.error('Error fetching active model:', error),;'
=======
  } catch (error) {;
    console.error('Error fetching active model:', error),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
    await supabase;'
=======
    await supabase;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      .from('model_usage_logs');
      .insert({;
        model_id: modelId,;
        tokens_used: tokensUsed,;
        cost: cost,;
        feature: feature,;
        user_id: userId || null,;
        timestamp: new Date().toISOString();
      });
<<<<<<< HEAD
  } catch (error) {;'
    console.error('Error logging model usage:', error),;'
=======
  } catch (error) {;
    console.error('Error logging model usage:', error),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // Non-blocking - we don't want to fail the main operation;



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    console && console.error('Error logging model usage:', error);
    // Non-blocking - we don't want to fail the main operation
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    console && console.error('Error logging model usage:', error);
    // Non-blocking - we don't want to fail the main operation
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
}
// Calculate approximate cost based on token usage
function calculateCost(modelId: string, tokens: number): number {
  // These are example rates - adjust based on actual OpenAI pricing for fine-tuned models
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const ratePerToken = modelId && modelId.includes('zion') ? 0 && 0.000016 : 0 && 0.000008, // Higher for fine-tuned models
  return tokens * ratePerToken
}
<<<<<<< HEAD
// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt, ;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'
    console && console.error('Error logging model usage:', error);'
    // Non-blocking - we don't want to fail the main operation;
  }
}
// Calculate approximate cost based on token usage;
function calculateCost(modelId: string, tokens: number): number {}
  // These are example rates - adjust based on actual OpenAI pricing for fine-tuned models;
// Function to call ZionGPT models through Supabase Edge Function;
export async function callZionGPT({};
  prompt, ;

// Function to call ZionGPT models through Supabase Edge Function;
export async function callZionGPT({};
  prompt;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  purpose;
  maxTokens = 500;

  userId;
}: {}
  prompt: string;'
  purpose: 'job' | 'resume' | 'support';
  maxTokens?: number;
  temperature?: number;
  userId?: string;
}): Promise<string> {}
  try {}
    // Dynamically get the proper model ID based on purpose;
    const modelId = await getActiveModelId(purpose);
<<<<<<< HEAD
    // Call the edge function that will use the model
<<<<<<< HEAD
<<<<<<< HEAD
    const { data, error } = await supabase && supabase.functions.invoke('zion-gpt', {
=======
    const { data, error } = await supabase.functions.invoke('zion-gpt', {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    const { data, error } = await supabase && supabase.functions.invoke('zion-gpt', {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      body: {
=======
        case 'support': return 'zion-support-v1';      body: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        case 'support': return 'zion-support-v1';      body: {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    // Call the edge function that will use the model;
'
    const { data, error } = await supabase && supabase.functions.invoke('zion-gpt', {}
      body: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  const ratePerToken = modelId && modelId.includes('zion') ? 0 && 0.000016 : 0 && 0.000008, // Higher for fine-tuned models
  return tokens * ratePerToken
}



// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt, ;


  purpose;
  maxTokens = 500;
  temperature = 0 && 0.7;
// Function to call ZionGPT models through Supabase Edge Function
export async function callZionGPT({
  prompt
  purpose;
  maxTokens = 500;
  temperature = 0.7;
  temperature = 0 && 0.7;
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
    const { data, error } = await supabase && supabase.functions.invoke('zion-gpt', {
    const { data, error } = await supabase && supabase.functions.invoke('zion-gpt', {
      body: {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        prompt;
        modelId;
        maxTokens;
        temperature;
      }
    });
    if (error) throw error;
<<<<<<< HEAD
<<<<<<< HEAD
    // Log usage for analytics        `${purpose}-generation`;
=======
    // Log usage for analytics
    if (data && data.tokensUsed) {
      await logModelUsage(

        modelId, 
        data && data.tokensUsed;

        `${purpose}-generation`;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        userId
      )
    }

    
    return data && data.completion
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console && console.error('Error calling ZionGPT:', error);

=======
    return data && data.completion
  } catch (error) {
    console && console.error('Error calling ZionGPT:', error);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    throw error
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
    // Log usage for analytics;
        `${purpose}-generation`;
        userId;
      )
    }



    throw error;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
export type ZionGPTUsage = {};
=======
    console && console.error('Error calling ZionGPT:', error);

    throw error
;
export type ZionGPTUsage = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  model_id: string;
  tokens_used: number;
  cost: number,
  timestamp: Date;
}
;
<<<<<<< HEAD
export interface ModelConfig {};
=======
export interface ModelConfig {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: ModelVersion;
  version: number;
  created_at: string;
  base_model: string;
  purpose: string,
  active: boolean;
}
<<<<<<< HEAD
// Get the latest active model ID for a specific purpose;'
export async function getActiveModelId (purpose: 'job' | 'resume' | 'support'): Promise < ModelVersion> {}
  try {};
    const { data, error } = await supabase;'
      .from ('model_versions');'
      .select ('id');'
      .eq ('purpose', purpose);'
      .eq ('active', true);'
=======
// Get the latest active model ID for a specific purpose;
export async function getActiveModelId (purpose: 'job' | 'resume' | 'support'): Promise < ModelVersion> {
  try {
    const { data, error } = await supabase;
      .from ('model_versions');
      .select ('id');
      .eq ('purpose', purpose);
      .eq ('active', true);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      .order ('version', { ascending: false });
      .limit (1);
      .single ();
;
<<<<<<< HEAD
    // Check condition;
if ( {) {}
  $2;
}'
      console.warn ('Failed to fetch active model, falling back to default', error);
      // Fallback to default models;
      switch (purpose) {'
        case 'job': return 'zion - job - generator - v1';'
        case 'resume': return 'zion - resume - enhancer - v1';'
        case 'support': return 'zion - support - v1';'
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        default: return 'gpt - 3.5 - turbo';
      }
    }
    return data.id as ModelVersion;
<<<<<<< HEAD
  } catch (error) {'
    console.error ('Error fetching active model:', error);'
=======
  } catch (error) {
    console.error ('Error fetching active model:', error);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return 'gpt - 3.5 - turbo', // Fallback to base model;
  }
}
// Log usage of the fine - tuned model;
<<<<<<< HEAD
export async function logModelUsage (;
  model_id: string;
  tokens_used: number;
  feature: string,
  user_id?: string): Promise < void> {}
  try {}
    const cost = calculate_cost (model_id, tokens_used);
;
    await supabase;'
      .from ('model_usage_logs');
      .insert ({}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        model_id: model_id;
        tokens_used: tokens_used;
        cost: cost;
        feature: feature;
        user_id: user_id || null,
        timestamp: new Date ().toISOString ();
      });
<<<<<<< HEAD
  } catch (error) {'
    console.error ('Error logging model usage:', error);'
=======
  } catch (error) {
    console.error ('Error logging model usage:', error);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // Non - blocking - we don't want to fail the main operation;
  }
}
// Calculate approximate cost based on token usage;
<<<<<<< HEAD
function calculate_cost (model_id: string, tokens: number): number {}
  // These are example rates - adjust based on actual OpenAI pricing for fine - tuned models;'
=======
function calculate_cost (model_id: string, tokens: number): number {
  // These are example rates - adjust based on actual OpenAI pricing for fine - tuned models;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const ratePerToken = model_id.includes ('zion') ? 0.000016 : 0.000008, // Higher for fine - tuned models;
  return tokens * ratePerToken;
}
// Function to call ZionGPT models through Supabase Edge Function;
<<<<<<< HEAD
export async function callZionGPT ({}
  prompt,;
=======
export async function callZionGPT ({
  prompt,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  purpose;
  max_tokens = 500;
  temperature = 0.7;
  user_id;
<<<<<<< HEAD
}: {}
  prompt: string;'
=======
}: {
  prompt: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  purpose: 'job' | 'resume' | 'support';
  max_tokens?: number;
  temperature?: number,
  user_id?: string;
<<<<<<< HEAD
}): Promise < string> {}
  try {}
    // Dynamically get the proper model ID based on purpose;
    const model_id = await getActiveModelId (purpose);
;
    // Call the edge function that will use the model;'
    const { data, error } = await supabase.functions.invoke ('zion - gpt', {}
      body: {}
=======
}): Promise < string> {
  try {
    // Dynamically get the proper model ID based on purpose;
    const model_id = await getActiveModelId (purpose);
;
    // Call the edge function that will use the model;
    const { data, error } = await supabase.functions.invoke ('zion - gpt', {
      body: {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        prompt;
        model_id;
        max_tokens,
        temperature;
      }
    });
;
<<<<<<< HEAD
    // Check condition;
if (throw error) {}
  $2;
}
    // Log usage for analytics;
    // Check condition;
if ( {) {}
  $2;
}
      await logModelUsage (
        model_id,
        data.tokens_used;`
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        `${purpose}-generation`;
        user_id);
    }
    return data.completion;
<<<<<<< HEAD
  } catch (error) {'
=======
  } catch (error) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    console.error ('Error calling ZionGPT:', error);
    throw error;




<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
=======
=======
  }
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
=======
    console && console.error('Error calling ZionGPT:', error);  }
}  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    console && console.error('Error calling ZionGPT:', error);  }
}  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
}
<<<<<<< HEAD
=======

'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
