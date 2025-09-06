
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useResumeEnhancer.ts
=======
export function useResumeEnhancer() {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general';
export function useResumeEnhancer() {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general';

export function useResumeEnhancer() {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

========
const { data, error } = await supabase && supabase.functions.invoke('resume-enhancer', {
        body: { 
          content, 
          enhancementType: type,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useResumeEnhancer.ts
=======
      const { data, error } = await supabase.functions.invoke('resume-enhancer', {
        body: {
          content
          enhancementType: type
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          context
        }
      });
      if (error) {
<<<<<<< HEAD
        throw new Error(error && error.message)
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useResumeEnhancer.ts

      
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useResumeEnhancer.ts
      return data && data.enhancedContent
    } catch (err: any) {
      setError(err && err.message || 'Failed to enhance content'),
      console && console.error('Enhancement error:', err);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useResumeEnhancer.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useResumeEnhancer.ts
=======
        throw new Error(error.message)
      }
      return data.enhancedContent
    } catch (err: any) {
      setError(err.message |'Failed to enhance content')
      console.error('Enhancement error:', err);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return null
    } finally {
      setIsEnhancing(false)
    }
  }
  return {
    enhanceContent;
    isEnhancing;
<<<<<<< HEAD
    error
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useResumeEnhancer.ts
<<<<<<< HEAD

=======

    error
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useResumeEnhancer.ts
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useResumeEnhancer.ts

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useResumeEnhancer.ts
  }
}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
