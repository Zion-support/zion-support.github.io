

<<<<<<< HEAD
type EnhancementType =;

=======
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
  content?: string;
  context?: string,
instructions?: string
}
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {toast} from '@/hooks / use - toast';'
type EnhancementType =;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  | 'resume - summary';'
  | 'work - description';'
  | 'job - post';'
  | 'proposal';'
  | 'general';'
;
<<<<<<< HEAD

export interface AIEnhancementOptions {
  enhancement_type: EnhancementType;


=======


export interface AIEnhancementOptions {};
  enhancement_type: EnhancementType;
>>>>>>> origin/cursor/delete-old-data-records-6bba

export interface AIEnhancementOptions {;

  enhancementType: EnhancementType;


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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    try {

=======

      const { data, error } = await supabase && supabase.functions.invoke('ai-content-enhancer', {
        body: { 

>>>>>>> origin/cursor/delete-old-data-records-6bba
          content;
          enhancementType;
          context,
instructions
        }
      });
<<<<<<< HEAD

    } catch (err: any) {
      const errorMessage = err && err.message || 'Failed to enhance content';



      setError(errorMessage);
      toast({

        title: "AI Enhancement Failed";
        description: errorMessage

=======
      if (error) {
}
return data && data.enhancedContent;
    } catch ('err': any) {
      }
      const errorMessage = err && err.message || 'Failed to enhance content';'
      setError(errorMessage);
      toast({
        }
        'title': 'AI Enhancement Failed','
  'description': errorMessageimport { useState } from 'react';'
import { supabase } from '@/integrations/supabase/client';'
import { toast } from '@/hooks/use-toast',;'
type EnhancementType =;

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react',;

import { supabase } from '@/integrations/supabase/client',;

import { toast } from '@/hooks/use-toast',;
type EnhancementType =;'
  | 'resume-summary';'
  | 'work-description';'
  | 'job-post';'
  | 'proposal';'
  | 'general',;'
export interface AIEnhancementOptions {;
  }
  'enhancementType': EnhancementType,;
  content?: string,;
  context?: string,;
  instructions?: string;
}
;
export function useAIContentEnhancer() {;
  }
  const [isEnhancing, setIsEnhancing] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const enhanceContent = async ({;
    }
    enhancementType,;
    content = '',;'
    context = '',;'
    instructions = '';'
  }: AIEnhancementOptions): Promise<string | null> => {;
    }
    setIsEnhancing(true),;
    setError(null),;
    try {;
      }
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {;'
        }
        'body': {;
          }
          content,;
          enhancementType,;
          context,;
          instructions;
        }
      }),;
      if (error) {;
<<<<<<< HEAD




=======
}
throw new Error(error.message);        'variant': 'destructive';'
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
        variant: "destructive"

      });
      console && console.error('Enhancement 'error':', err);'
return null;
    } finally {
      }
      setIsEnhancing(false)
<<<<<<< HEAD

        variant: "destructive"
      }),
      console.error('Enhancement error:', err),

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
=======


  context?: string,
  instructions?: string;
}
export /**;
 * useAIContentEnhancer - Function description;
 */
function useAIContentEnhancer() {}
  const [is_enhancing, setIsEnhancing] = useState (false);

  const [error, set_error] = useState < string | null>(null);
>>>>>>> origin/cursor/delete-old-data-records-6bba

          content;
          enhancement_type;
          context,
          instructions;
        }
      });
;

}
        throw new Error (error.message);
      }
      return data.enhanced_content;

      setIsEnhancing (false);
    }
<<<<<<< HEAD


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


=======

  }
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
