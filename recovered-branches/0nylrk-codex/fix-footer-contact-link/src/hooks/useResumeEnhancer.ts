

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general';
export function useResumeEnhancer() {
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
      const { data, error } = await supabase.functions.invoke('resume-enhancer', {
        body: {
          content
          enhancementType: type
=======
      const { data, error } = await supabase && supabase.functions.invoke('resume-enhancer', {
        body: { 
          content, 
          enhancementType: type,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          context
        }
      });
      if (error) {
        throw new Error(error && error.message)
      }
<<<<<<< HEAD
      return data.enhancedContent
    } catch (err: any) {
      setError(err.message |'Failed to enhance content')
      console.error('Enhancement error:', err);
=======
      
      return data && data.enhancedContent
    } catch (err: any) {
      setError(err && err.message || 'Failed to enhance content'),
      console && console.error('Enhancement error:', err);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return null
    } finally {
      setIsEnhancing(false)
    }
  }
  return {
    enhanceContent;
    isEnhancing;

    error
  }
}