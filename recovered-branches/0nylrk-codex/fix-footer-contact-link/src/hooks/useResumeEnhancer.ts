
<<<<<<< HEAD
import { useState  } from 'react';
import { supabase } from '@/integrations/supabase/client';
<<<<<<< HEAD
type EnhancementType = any;
=======
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general';
=======

type EnhancementType =
  | 'summary'
  | 'work-description'
  | 'skill-categorization'
  | 'general';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
      const { data, error } = await supabase.functions.invoke('resume-enhancer', {
        body: {
          content
          enhancementType: type
          context
        }
      });
      if (error) {
        throw new Error(error.message)
      }
      return data.enhancedContent
    } catch (err: any) {
      setError(err.message |'Failed to enhance content')
      console.error('Enhancement error:', err);
      return null
    } finally {
      setIsEnhancing(false)
    }
  }
  return {
    enhanceContent;
    isEnhancing;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    error
  }
}