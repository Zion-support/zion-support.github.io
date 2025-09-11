




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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
export interface AIEnhancementOptions {
  enhancement_type: EnhancementType;


export interface AIEnhancementOptions {;

  enhancementType: EnhancementType;
  content?: string;



export function useAIContentEnhancer() {;


<<<<<<< HEAD
export interface AIEnhancementOptions {

export interface AIEnhancementOptions {;
  enhancementType: EnhancementType;
  content?: string;
  context?: string
  instructions?: string
}
export function useAIContentEnhancer() {

export function useAIContentEnhancer() {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export interface AIEnhancementOptions {
  enhancement_type: EnhancementType;
=======


export interface AIEnhancementOptions {;

  enhancementType: EnhancementType;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  content?: string;



export function useAIContentEnhancer() {;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      const { data, error } = await supabase && supabase.functions.invoke('ai-content-enhancer', {
        body: { 
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {
        body: {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      const { data, error } = await supabase && supabase.functions.invoke('ai-content-enhancer', {
        body: { 

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          content;
          enhancementType;
          context
          instructions
        }
      });
      if (error) {

      
      return data && data.enhancedContent
    } catch (err: any) {
      const errorMessage = err && err.message || 'Failed to enhance content';

<<<<<<< HEAD
<<<<<<< HEAD
        throw new Error(error && error.message)
      }
      return data && data.enhancedContent
    } catch (err: any) {
      const errorMessage = err && err.message || 'Failed to enhance content';
        throw new Error(error.message)
      }
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = err.message |'Failed to enhance content';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setError(errorMessage);
      toast({
        title: "AI Enhancement Failed";
        description: errorMessage
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
        throw new Error(error.message)


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to enhance content',
      setError(errorMessage),
      toast({
        title: "AI Enhancement Failed",
        description: errorMessage,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        variant: "destructive"
      });
      console && console.error('Enhancement error:', err);
      return null
    } finally {
      setIsEnhancing(false)
<<<<<<< HEAD
        variant: "destructive"
      }),
      console.error('Enhancement error:', err),
      return null
    } finally {
      setIsEnhancing(false)
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  return {
    enhanceContent;
    isEnhancing;

<<<<<<< HEAD


=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  },;
  return {;
    enhanceContent;
    isEnhancing;
    error;



<<<<<<< HEAD
  }
;
  return {
    enhance_content;
    is_enhancing;
    error;
  }

import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from '@/hooks/use-toast',;
;
type EnhancementType = ;
  | 'resume-summary' ;
  | 'work-description' ;
  | 'job-post' ;
  | 'proposal' ;
  | 'general',;
;
export interface AIEnhancementOptions {;
  enhancementType:EnhancementType,;
  content?:string,;
  context?:string,;
  instructions?:string;}
;
export function useAIContentEnhancer() {;
  const [isEnhancing, setIsEnhancing] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const enhanceContent = async ({;
    enhancementType,;
    content = '',;
    context = '',;
    instructions = '';
  } AIEnhancementOptions):Promise<string | null> => {;
    setIsEnhancing(true),;
    setError(null),;
    ;
    try {;
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {;
        body:{ ;
          content,;
          enhancementType,;
          context,;
          instructions;
        }
      }),;
      ;
      if (error) {;
        throw new Error(error.message),;
      }
      ;
      return data.enhancedContent,;
    } catch (err:any) {;
      const errorMessage = err.message || 'Failed to enhance content',;
      setError(errorMessage),;
      toast({;
        title:"AI Enhancement Failed",;
        description:errorMessage,;
        variant:"destructive";
      }),;
      console.error('Enhancement error:', err),;
      return null,;
    } finally {;
      setIsEnhancing(false),;
    }
  },;
  ;
  return {;
    enhanceContent,;
    isEnhancing,;
    error;
  },; type EnhancementType = | 'resume-summary' | 'work-description' | 'job-post' | 'proposal' | 'general';
}finally {
  setIsEnhancing (false) 
}
};
return {
  enhanceContent;
isEnhancing;
error 
}
}

    error
  }
<<<<<<< HEAD
}
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
  },;
  return {;
    enhanceContent;
    isEnhancing;
    error;
  }
}
;
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
