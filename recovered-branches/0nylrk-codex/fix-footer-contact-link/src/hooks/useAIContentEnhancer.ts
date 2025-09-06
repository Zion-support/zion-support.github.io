
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> main
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {toast} from '@/hooks/use-toast';
type EnhancementType =
  | 'resume-summary'
  | 'work-description'
  | 'job-post'
  | 'proposal'
  | 'general';
<<<<<<< HEAD
<<<<<<< HEAD
export interface AIEnhancementOptions {
=======

export interface AIEnhancementOptions {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  enhancementType: EnhancementType;
  content?: string;
  context?: string
  instructions?: string
}
<<<<<<< HEAD
export function useAIContentEnhancer() {
=======

export function useAIContentEnhancer() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {toast} from '@/hooks / use - toast';
type EnhancementType =;
  | 'resume - summary';
  | 'work - description';
  | 'job - post';
  | 'proposal';
  | 'general';
;

export interface AIEnhancementOptions {
  enhancement_type: EnhancementType;
=======


export interface AIEnhancementOptions {;

  enhancementType: EnhancementType;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  content?: string;



export function useAIContentEnhancer() {;


>>>>>>> main
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const enhanceContent = async ({
    enhancementType;
    content = '';
    context = '';
    instructions = ''
  }: AIEnhancementOptions): Promise<string | null> => {
    setIsEnhancing(true);
    setError(null);
    try {
<<<<<<< HEAD
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {
        body: {
=======

      const { data, error } = await supabase && supabase.functions.invoke('ai-content-enhancer', {
        body: { 

>>>>>>> main
          content;
          enhancementType;
          context
          instructions
        }
      });
      if (error) {
<<<<<<< HEAD
        throw new Error(error.message)
<<<<<<< HEAD
      }
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = err.message |'Failed to enhance content';
=======

      
      return data && data.enhancedContent
    } catch (err: any) {
      const errorMessage = err && err.message || 'Failed to enhance content';

>>>>>>> main
      setError(errorMessage);
      toast({
        title: "AI Enhancement Failed";
        description: errorMessage
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        throw new Error(error.message)


>>>>>>> main
=======
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from '@/hooks/use-toast',;
type EnhancementType =;
  | 'resume-summary';
  | 'work-description';
  | 'job-post';
  | 'proposal';
  | 'general',;
export interface AIEnhancementOptions {;
  enhancementType: EnhancementType,;
  content?: string,;
  context?: string,;
  instructions?: string;
}
;
export function useAIContentEnhancer() {;
  const [isEnhancing, setIsEnhancing] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const enhanceContent = async ({;
    enhancementType,;
    content = '',;
    context = '',;
    instructions = '';
  }: AIEnhancementOptions): Promise<string | null> => {;
    setIsEnhancing(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {;
        body: {;
          content,;
          enhancementType,;
          context,;
          instructions;
        }
      }),;
      if (error) {;
        throw new Error(error.message);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======


>>>>>>> main
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
      
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to enhance content',
      setError(errorMessage),
      toast({
        title: "AI Enhancement Failed",
        description: errorMessage,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
        variant: "destructive"
      }),
      console.error('Enhancement error:', err),
      return null
    } finally {
      setIsEnhancing(false)
<<<<<<< HEAD
    }
  }
  return {
    enhanceContent;
    isEnhancing;

    error
<<<<<<< HEAD
  }
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
      return data.enhancedContent;
    } catch (err: any) {;
      const errorMessage = err.message || 'Failed to enhance content',;
      setError(errorMessage),;
      toast({;
        title: "AI Enhancement Failed",;
        description: errorMessage,;
        variant: "destructive";
      }),;
      console.error('Enhancement error:', err),;
      return null;
    } finally {;
      setIsEnhancing(false);
    }
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        variant: "destructive"
      });
      console && console.error('Enhancement error:', err);
      return null
    } finally {
      setIsEnhancing(false)

  context?: string,
  instructions?: string;
}
export /**
 * useAIContentEnhancer - Function description
 */
function useAIContentEnhancer() {
  const [is_enhancing, setIsEnhancing] = useState (false);
  const [error, set_error] = useState < string | null>(null);
=======


=======

;
  const enhance_content = async ({
    enhancement_type;
    content = '';
    context = '';
    instructions = '';
  }: AIEnhancementOptions): Promise < string | null> => {
    setIsEnhancing (true);
    set_error (null);
;
    try {
      const { data, error } = await supabase.functions.invoke ('ai - content - enhancer', {
        body: {
          content;
          enhancement_type;
          context,
          instructions;
        }
      });
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (error.message);
      }
      return data.enhanced_content;
    } catch (err: any) {
      const error_message = err.message || 'Failed to enhance content';
      set_error (error_message);
      toast ({
        title: "AI Enhancement Failed";
        description: error_message,
        variant: "destructive";
      });
      console.error ('Enhancement error:', err);
      return null;
    } finally {
      setIsEnhancing (false);
    }

>>>>>>> main
  },;
  return {;
    enhanceContent;
    isEnhancing;
    error;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
;
  return {
    enhance_content;
    is_enhancing;
    error;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
>>>>>>> main
