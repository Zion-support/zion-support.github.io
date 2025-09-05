
<<<<<<< HEAD
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general',

export function useResumeEnhancer() {
  const [isEnhancing, setIsEnhancing] = useState(false),
  const [error, setError] = useState<string | null>(null),
=======

type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general';

export function useResumeEnhancer() {_const [isEnhancing, _setIsEnhancing] = useState(false);
  const [error, _setError] = useState<string | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _enhanceContent = async (
    content: string, _type: EnhancementType = 'general', _context?: string
  ): Promise<string | null> => {
    setIsEnhancing(true),
    setError(null),
    
    try {
<<<<<<< HEAD
      const { data, error } = await supabase.functions.invoke('resume-enhancer', {
        body: { 
          content, 
          enhancementType: type,
          context
        }
      }),
      
      if (error) {
        throw new Error(error.message)
      }
      
      return data.enhancedContent
    } catch (err: any) {
      setError(err.message || 'Failed to enhance content'),
      console.error('Enhancement error:', err),
      return null
    } finally {
      setIsEnhancing(false)
    }
  },
  
  return {
    enhanceContent,
    isEnhancing,
    error
  }
=======
      const { data, _error} = await supabase.functions.invoke('resume-enhancer', {_body: { 
          content, _enhancementType: type, _context}
      });
      
      if (error) {_throw new Error(error.message);}
      
      return data.enhancedContent;
    } catch (err: unknown) {_setError(err.message || 'Failed to enhance content');
      
      return null;} finally {_setIsEnhancing(false);}
  };
  
  return {_enhanceContent, _isEnhancing, _error};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
