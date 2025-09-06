

=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {toast} from '@/hooks/use-toast';
type EnhancementType =
  | 'resume-summary'
  | 'work-description'
  | 'job-post'
  | 'proposal'
  | 'general';

  enhancementType: EnhancementType;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  content?: string;
  context?: string
  instructions?: string
}

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

      const { data, error } = await supabase && supabase.functions.invoke('ai-content-enhancer', {
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

      }
      
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to enhance content',
      setError(errorMessage),
      toast({
        title: "AI Enhancement Failed",
        description: errorMessage,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        variant: "destructive"
      });
      console && console.error('Enhancement error:', err);
      return null
    } finally {
      setIsEnhancing(false)

  }
;
<<<<<<< HEAD
=======
  return {
    enhance_content;
    is_enhancing;
    error;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
