
<<<<<<< HEAD

export function useResumeEnhancer() {;


=======
export function useResumeEnhancer() {;



import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general';
export function useResumeEnhancer() {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general';

export function useResumeEnhancer() {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

      const { data, error } = await supabase && supabase.functions.invoke('resume-enhancer', {
        body: { 
          content, 
          enhancementType: type,

=======
const { data, error } = await supabase && supabase.functions.invoke('resume-enhancer', {
        body: { 
          content, 
          enhancementType: type,
      const { data, error } = await supabase.functions.invoke('resume-enhancer', {
        body: {
          content
          enhancementType: type
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          context
        }
      });
      if (error) {
<<<<<<< HEAD
        throw new Error(error && error.message)
      }

      
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      return data && data.enhancedContent
    } catch (err: any) {
      setError(err && err.message || 'Failed to enhance content'),
      console && console.error('Enhancement error:', err);
<<<<<<< HEAD

=======
        throw new Error(error.message)
      }
      return data.enhancedContent
    } catch (err: any) {
      setError(err.message |'Failed to enhance content')
      console.error('Enhancement error:', err);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
