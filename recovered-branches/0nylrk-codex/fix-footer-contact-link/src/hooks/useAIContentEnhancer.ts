
<<<<<<< HEAD
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
  instructions?:string;
=======
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { toast } from '@/hooks/use-toast',type EnhancementType = 
  | 'resume-summary' 
  | 'work-description' 
  | 'job-post' 
  | 'proposal' 
  | 'general',

export interface AIEnhancementOptions {
  enhancementType: EnhancementType,
  content?: string,
  context?: string,
  instructions?: string
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
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
<<<<<<< HEAD
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
  },;
=======
      }),
      
      if (error) {
        throw new Error(error.message)
      }
      
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to enhance content',
      setError(errorMessage),
      toast({
        title: &quot;AI Enhancement Failed&quot;,
        description: errorMessage,
        variant: "destructive"
      }),
      console.error('Enhancement error:', err),
      return null    } finally {
      setIsEnhancing(false)
    }
  },
  
  return {
    enhanceContent,
    isEnhancing,
    error
  }
export interface AIEnhancementOptions {_enhancementType: EnhancementType;
  content?: string;
  context?: string;
  instructions?: string;}

export function useAIContentEnhancer() {_const [isEnhancing, _setIsEnhancing] = useState(false);
  const [error, _setError] = useState<string | null>(null);
  
  const _enhanceContent = async ({
    enhancementType, _content = '', _context = '', _instructions = ''}: AIEnhancementOptions): Promise<string | null> => {_setIsEnhancing(true);
    setError(null);
    
    try {
      const { data, _error} = await supabase.functions.invoke('ai-content-enhancer', {_body: { 
          content, _enhancementType, _context, _instructions}
      });
      
      if (error) {_throw new Error(error.message);}
      
      return data.enhancedContent;
    } catch (err: unknown) {_const _errorMessage = err.message || 'Failed to enhance content';
      setError(errorMessage);
      toast({
        title: "AI Enhancement Failed", _description: errorMessage, _variant: "destructive"});
      
      return null;
    } finally {_setIsEnhancing(false);}
  };
  
  return {_enhanceContent, _isEnhancing, _error};
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
