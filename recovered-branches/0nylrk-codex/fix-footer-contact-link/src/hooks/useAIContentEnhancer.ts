
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
type EnhancementType = $2;
export interface AIEnhancementOptions {
  enhancementType: EnhancementType,
  content?: string,
  context?: string,
  instructions?: string
}

export function useAIContentEnhancer() {
  const [isEnhancing, setIsEnhancing] = useState($2);
  const [error, setError] = useState<string | null>(null),
  
  const enhanceContent = $2;
    content = $2;
    context = $2;
    instructions = ''
  }: AIEnhancementOptions): Promise<string | null> => {
    setIsEnhancing($2);
    setError($2);
    try {
      const { data, error } = await supabase.functions.invoke($2);
      if (error) {
        throw new Error(error.message)
      }
      
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = $2;
      setError($2);
      toast($2);
      console.error($2);
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
}
