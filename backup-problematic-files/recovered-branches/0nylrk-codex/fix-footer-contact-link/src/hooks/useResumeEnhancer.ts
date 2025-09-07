
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
;
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general';
;
export function useResumeEnhancer() {;
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  ;
  const enhanceContent = async (;
    content:string, ;
    type:EnhancementType = 'general';
    context?:string;
  ):Promise<string | null> => {;
    setIsEnhancing(true);
    setError(null);
    ;
    try {;
      const { data, error } = await supabase.functions.invoke('resume-enhancer', {;
        body:{ ;
          content, ;
          enhancementType:type;
          context;
        }
      });
      ;
      if (error) {;
        throw new Error(error.message);
      }
      ;
      return data.enhancedContent;
    } catch (err:any) {;
      setError(err.message || 'Failed to enhance content');
      console.error('Enhancement error:', err);
      return null;
    } finally {;
      setIsEnhancing(false);
    }
  };
  ;
  return {;
    enhanceContent;
    isEnhancing;
    error;
  };
} const enhanceContent = async (content: string, type: EnhancementType = 'general', context?: string) : Promise<string | null> => {
  setIsEnhancing (true);
setError (null);
try {
  
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
