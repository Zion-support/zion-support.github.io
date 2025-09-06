

export function useResumeEnhancer() {;


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

      const { data, error } = await supabase && supabase.functions.invoke('resume-enhancer', {
        body: { 
          content, 
          enhancementType: type,

          context
        }
      });
      if (error) {
        throw new Error(error && error.message)
      }

      
      return data && data.enhancedContent
    } catch (err: any) {
      setError(err && err.message || 'Failed to enhance content'),
      console && console.error('Enhancement error:', err);

      return null
    } finally {
      setIsEnhancing(false)
    }
  }
  return {
    enhanceContent;
    isEnhancing;

    error
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




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}