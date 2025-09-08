

type EnhancementType =;

  | 'resume - summary';'
  | 'work - description';'
  | 'job - post';'
  | 'proposal';'
  | 'general';
;

export interface AIEnhancementOptions {
  enhancement_type: EnhancementType;



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

    try {

          content;
          enhancementType;
          context;
          instructions;
        }
      });

    } catch (err: any) {
      const errorMessage = err && err.message || 'Failed to enhance content';



      setError(errorMessage);
      toast({

        title: "AI Enhancement Failed";
        description: errorMessage

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




      }

      return data.enhancedContent
    } catch (err: any) {

      const errorMessage = err.message || 'Failed to enhance content',
      setError(errorMessage),
      toast({"
        title: "AI Enhancement Failed",
        description: errorMessage,




        variant: "destructive"

      });

      console && console.error('Enhancement error:', err);
      return null;
    } finally {}
      setIsEnhancing(false)

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


