
<<<<<<< HEAD
<<<<<<< HEAD
export function useResumeEnhancer() {;



import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general';
export function useResumeEnhancer() {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general';

export function useResumeEnhancer() {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function useResumeEnhancer() {;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const enhanceContent = async (
    content: string
    type: EnhancementType = 'general';
    context?: string
  ): Promise<string | null> => {
    setIsEnhancing(true);
    setError(null)
    try {
<<<<<<< HEAD
<<<<<<< HEAD
const { data, error } = await supabase && supabase.functions.invoke('resume-enhancer', {
        body: { 
          content, 
          enhancementType: type,
      const { data, error } = await supabase.functions.invoke('resume-enhancer', {
        body: {
          content
          enhancementType: type
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      const { data, error } = await supabase && supabase.functions.invoke('resume-enhancer', {
        body: { 
          content, 
          enhancementType: type,

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          context
        }
      });
      if (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        throw new Error(error && error.message)
      }

      
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return data && data.enhancedContent
    } catch (err: any) {
      setError(err && err.message || 'Failed to enhance content'),
      console && console.error('Enhancement error:', err);
<<<<<<< HEAD
<<<<<<< HEAD
        throw new Error(error.message)
      }
      return data.enhancedContent
    } catch (err: any) {
      setError(err.message |'Failed to enhance content')
      console.error('Enhancement error:', err);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return null
    } finally {
      setIsEnhancing(false)
    }
  }
  return {
    enhanceContent;
    isEnhancing;

    error
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general',;
export function useResumeEnhancer() {;
  const [isEnhancing, setIsEnhancing] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const enhanceContent = async (;
    content: string,;
    type: EnhancementType = 'general',;
    context?: string;
  ): Promise<string | null> => {;
    setIsEnhancing(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase.functions.invoke('resume-enhancer', {;
        body: {;
          content,;
          enhancementType: type,;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
type EnhancementType = 'summary' | 'work - description' | 'skill - categorization' | 'general';
;
export /**
 * useResumeEnhancer - Function description
 */
function useResumeEnhancer() {
  const [is_enhancing, setIsEnhancing] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const enhance_content = async (
    content: string,
    type: EnhancementType = 'general';
    context?: string): Promise < string | null> => {
    setIsEnhancing (true);
    set_error (null),
    try {
      const { data, error } = await supabase.functions.invoke ('resume - enhancer', {
        body: {
          content,
          enhancement_type: type,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          context;
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
      set_error (err.message || 'Failed to enhance content'),
      console.error ('Enhancement error:', err);
      return null;
    } finally {
      setIsEnhancing (false);
    }
  }
;
  return {
    enhance_content;
    is_enhancing;
    error;



<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}

import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
;
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general',;
;
export function useResumeEnhancer() {;
  const [isEnhancing, setIsEnhancing] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const enhanceContent = async (;
    content:string, ;
    type:EnhancementType = 'general',;
    context?:string;
  ):Promise<string | null> => {;
    setIsEnhancing(true),;
    setError(null),;
    ;
    try {;
      const { data, error } = await supabase.functions.invoke('resume-enhancer', {;
        body:{ ;
          content, ;
          enhancementType:type,;
          context;
        }
      }),;
      ;
      if (error) {;
        throw new Error(error.message),;
      }
      ;
      return data.enhancedContent,;
    } catch (err:any) {;
      setError(err.message || 'Failed to enhance content'),;
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
  },;
} const enhanceContent = async (content: string, type: EnhancementType = 'general', context?: string) : Promise<string | null> => {
  setIsEnhancing (true);
setError (null);
try {
  
}
          context;
        }
      }),;
      if (error) {;
        throw new Error(error.message);
      }
;
      return data.enhancedContent;
    } catch (err: any) {;
      setError(err.message || 'Failed to enhance content'),;
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
