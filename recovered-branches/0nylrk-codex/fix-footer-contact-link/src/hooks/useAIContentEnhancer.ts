


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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


export interface AIEnhancementOptions {;
  enhancementType: EnhancementType;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  content?: string;
  context?: string
  instructions?: string
}
export function useAIContentEnhancer() {

export function useAIContentEnhancer() {;
  content?: string;
  context?: string
  instructions?: string
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
        throw new Error(error.message)
      }
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = err && err.message || 'Failed to enhance content';

      setError(errorMessage);
      toast({
        title: "AI Enhancement Failed";
        description: errorMessage
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
