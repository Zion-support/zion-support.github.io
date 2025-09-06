
<<<<<<< HEAD
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
type EnhancementType = any;
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
export interface AIEnhancementOptions {
  enhancementType: EnhancementType;
  content?: string;
<<<<<<< HEAD
  context?: string
  instructions?: string
}
=======
  context?: string;
  instructions?: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function useAIContentEnhancer() {
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
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {
        body: {
          content;
          enhancementType;
          context
          instructions
        }
      });
      if (error) {
        throw new Error(error.message)
      }
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = err.message |'Failed to enhance content';
      setError(errorMessage);
      toast({
        title: "AI Enhancement Failed";
        description: errorMessage
        variant: "destructive"
      });
      console.error('Enhancement error:', err);
      return null
    } finally {
      setIsEnhancing(false)
    }
  }
  return {
<<<<<<< HEAD
    enhanceContent;
    isEnhancing;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    error
  }
}
=======
    enhanceContent,
    isEnhancing,
    error,
  };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
