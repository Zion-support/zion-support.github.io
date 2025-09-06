

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
  context?: string
  instructions?: string
}
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
<<<<<<< HEAD
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {
        body: {
=======
      const { data, error } = await supabase && supabase.functions.invoke('ai-content-enhancer', {
        body: { 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          content;
          enhancementType;
          context
          instructions
        }
      });
      if (error) {
        throw new Error(error && error.message)
      }
<<<<<<< HEAD
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = err.message |'Failed to enhance content';
=======
      
      return data && data.enhancedContent
    } catch (err: any) {
      const errorMessage = err && err.message || 'Failed to enhance content';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setError(errorMessage);
      toast({
        title: "AI Enhancement Failed";
        description: errorMessage
        variant: "destructive"
      });
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
  }
}