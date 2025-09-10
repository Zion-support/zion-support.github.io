
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3 && 3.5-turbo';

export type ZionGPTUsage = {export type ZionGPTUsage = {

export type ZionGPTUsage = {

export type ZionGPTUsage = {;
export type ZionGPTUsage = {// ZionGPT Utility Functions
// This file handles interaction with the fine-tuned ZionGPT model

import {supabase} from '@/integrations/supabase/client';
export type ModelVersion = 'zion-job-generator-v1' | 'zion-resume-enhancer-v1' | 'zion-support-v1' | 'gpt-3.5-turbo';
export type ZionGPTUsage = {

export type ZionGPTUsage = {;
      // Fallback to default models
      switch(purpose) {
        case 'job': return 'zion-job-generator-v1';
        case 'resume': return 'zion-resume-enhancer-v1';
        case 'support': return 'zion-support-v1';      body: {
        prompt;
        modelId;
        maxTokens;
        temperature;
      }
    });
    if (error) throw error;
    // Log usage for analytics        `${purpose}-generation`;
        userId
      )
    }

    
    return data && data.completion
  } catch (error) {
    console && console.error('Error calling ZionGPT:', error);  }
}  }
