<<<<<<< HEAD
enhancementType: EnhancementType;
  content?: string;
  context?: string;
  instructions?: string;
}
=======
<<<<<<< HEAD

import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
type EnhancementType = $2;
export interface AIEnhancementOptions {
  enhancementType: EnhancementType,
  content?: string,
  context?: string,
  instructions?: string
}
export function useAIContentEnhancer() {
  const [isEnhancing, setIsEnhancing] = useState($2);
  const [error, setError] = useState<string | null>(null),
  
  const enhanceContent = $2;
    content = $2;
    context = $2;
    instructions = ''
  }: AIEnhancementOptions): Promise<string | null> => {
    setIsEnhancing($2);
    setError($2);
    try {
      const { data, error } = await supabase.functions.invoke($2);
      if (error) {
        throw new Error(error.message)
      }
      
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = $2;
      setError($2);
      toast($2);
      console.error($2);
=======
<<<<<<< HEAD
enhancementType: EnhancementType;
  content?: string;
  context?: string;
  instructions?: string;
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
import {supabase} from '@/integrations / supabase / client';'
import {toast} from '@/hooks / use - toast';'
=======





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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {toast} from '@/hooks / use - toast';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
type EnhancementType =;
=======

import {toast} from '@/hooks / use - toast';
type EnhancementType =;'
>>>>>>> origin/chore/fix-lint-and-merge
  | 'resume - summary';'
  | 'work - description';'
  | 'job - post';'
  | 'proposal';'
  | 'general';
;
<<<<<<< HEAD

export interface AIEnhancementOptions {};
  enhancement_type: EnhancementType;
=======
<<<<<<< HEAD

export interface AIEnhancementOptions {};
  enhancement_type: EnhancementType;
=======
export interface AIEnhancementOptions {
  enhancement_type: EnhancementType;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export interface AIEnhancementOptions {;

  enhancementType: EnhancementType;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  content?: string;

  enhancementType: EnhancementType;
  content?: string;
  context?: string
  instructions?: string
}
export function useAIContentEnhancer() {

  enhancement_type: EnhancementType;

<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const enhanceContent = async ({}
    enhancementType;'
    content = '';'
    context = '';'
    instructions = ''
  }: AIEnhancementOptions): Promise<string | null> => {}
    setIsEnhancing(true);
    setError(null);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    try {
<<<<<<< HEAD
      const { data, error } = await supabase && supabase.functions.invoke('ai-content-enhancer', {
        body: { 
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {
        body: {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      const { data, error } = await supabase && supabase.functions.invoke('ai-content-enhancer', {
        body: { 

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          content;
          enhancementType;
          context;
          instructions;
        }
      });

    } catch (err: any) {
      const errorMessage = err && err.message || 'Failed to enhance content';

<<<<<<< HEAD
      setError(errorMessage);
      toast({

=======
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
      setError(errorMessage);
      toast({
<<<<<<< HEAD

=======
        title: "AI Enhancement Failed";
        description: errorMessage
<<<<<<< HEAD
=======
=======
        throw new Error(error.message)


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from 'react',;

import { supabase } from '@/integrations/supabase/client',;

import { toast } from '@/hooks/use-toast',;
type EnhancementType =;'
  | 'resume-summary';'
  | 'work-description';'
  | 'job-post';'
  | 'proposal';'
  | 'general',;
export interface AIEnhancementOptions {;
  enhancementType: EnhancementType,;
  content?: string,;
  context?: string,;
  instructions?: string;
}
;
export function useAIContentEnhancer() { return null; }
  }: AIEnhancementOptions): Promise<string | null> => {;
    setIsEnhancing(true),;
    setError(null),;
    try {;'
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {;
        body: {;
          content,;
          enhancementType,;
          context,;
          instructions;
        }
      }),;
      if (error) {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }

      return data.enhancedContent
    } catch (err: any) {

      const errorMessage = err.message || 'Failed to enhance content',
      setError(errorMessage),
      toast({"
        title: "AI Enhancement Failed",
        description: errorMessage,
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        variant: "destructive"

      });

      console && console.error('Enhancement error:', err);
      return null;
    } finally {}
      setIsEnhancing(false)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  context?: string,
  instructions?: string;
}
export /**;
 * useAIContentEnhancer - Function description;
 */
function useAIContentEnhancer() {}
  const [is_enhancing, setIsEnhancing] = useState (false);
<<<<<<< HEAD

  const [error, set_error] = useState < string | null>(null);

=======

  const [error, set_error] = useState < string | null>(null);

=======
        variant: "destructive"
      }),
      console.error('Enhancement error:', err),
>>>>>>> merged-prs-20250907-203621
      return null
    } finally {
      setIsEnhancing(false)
    }
  }
  return {
    enhanceContent;
    isEnhancing;



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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          content;
          enhancement_type;
          context,
          instructions;
        }
      });
<<<<<<< HEAD
;

}
        throw new Error (error.message);
      }
      return data.enhanced_content;

      setIsEnhancing (false);
    }
  }
;
=======
;

}
        throw new Error (error.message);
      }
      return data.enhanced_content;

      setIsEnhancing (false);
    }
<<<<<<< HEAD
  }
;
=======

  },;
  return {;
    enhanceContent;
    isEnhancing;
    error;



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
<<<<<<< HEAD
;
=======
;
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
