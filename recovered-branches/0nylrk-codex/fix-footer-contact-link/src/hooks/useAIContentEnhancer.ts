
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAIContentEnhancer.ts
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAIContentEnhancer.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAIContentEnhancer.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAIContentEnhancer.ts
export interface AIEnhancementOptions {
  enhancement_type: EnhancementType;
=======


export interface AIEnhancementOptions {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  enhancementType: EnhancementType;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  content?: string;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAIContentEnhancer.ts
<<<<<<< HEAD
  context?: string
  instructions?: string
}

=======



export function useAIContentEnhancer() {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

      const { data, error } = await supabase && supabase.functions.invoke('ai-content-enhancer', {
        body: { 

========
      const { data, error } = await supabase && supabase.functions.invoke('ai-content-enhancer', {
        body: { 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAIContentEnhancer.ts
=======
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {
        body: {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          content;
          enhancementType;
          context
          instructions
        }
      });
      if (error) {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAIContentEnhancer.ts
<<<<<<< HEAD
        throw new Error(error.message)

=======

      
      return data && data.enhancedContent
    } catch (err: any) {
      const errorMessage = err && err.message || 'Failed to enhance content';

========
        throw new Error(error && error.message)
      }
      return data && data.enhancedContent
    } catch (err: any) {
      const errorMessage = err && err.message || 'Failed to enhance content';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAIContentEnhancer.ts
=======
        throw new Error(error.message)
<<<<<<< HEAD
      }
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = err.message |'Failed to enhance content';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setError(errorMessage);
      toast({
        title: "AI Enhancement Failed";
        description: errorMessage
=======
<<<<<<< HEAD
        throw new Error(error.message)


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        variant: "destructive"
      });
      console && console.error('Enhancement error:', err);
      return null
    } finally {
      setIsEnhancing(false)
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAIContentEnhancer.ts

<<<<<<< HEAD
=======
========
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        variant: "destructive"
      }),
      console.error('Enhancement error:', err),
      return null
    } finally {
      setIsEnhancing(false)
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }
  return {
    enhanceContent;
    isEnhancing;
<<<<<<< HEAD
    error
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAIContentEnhancer.ts
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
;
<<<<<<< HEAD

=======
  return {
    enhance_content;
    is_enhancing;
    error;
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAIContentEnhancer.ts
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useAIContentEnhancer.ts
=======

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
  },;
  return {;
    enhanceContent;
    isEnhancing;
    error;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
