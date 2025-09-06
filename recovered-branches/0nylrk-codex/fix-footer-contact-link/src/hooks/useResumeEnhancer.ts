
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
type EnhancementType = $2;
export function useResumeEnhancer() {
  const [isEnhancing, setIsEnhancing] = useState($2);
  const [error, setError] = useState<string | null>(null),
  
  const enhanceContent = $2;
    type: EnhancementType = $2;
    context?: string
  ): Promise<string | null> => {
    setIsEnhancing($2);
    setError($2);
    try {
      const { data, error } = await supabase.functions.invoke($2);
      if (error) {
        throw new Error(error.message)
      }
      
      return data.enhancedContent
    } catch (err: any) {
      setError($2);
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
