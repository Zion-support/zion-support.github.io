import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
type EnhancementType = 'summary' | 'work - description' | 'skill - categorization' | 'general';
;
export /**
 * useResumeEnhancer - Function description
 */
function useResumeEnhancer() {
  const [is_enhancing, setIsEnhancing] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const enhance_content = async (
    content: string,
    type: EnhancementType = 'general';
    context?: string): Promise < string | null> => {
    setIsEnhancing (true);
    set_error (null),
    try {
      const { data, error } = await supabase.functions.invoke ('resume - enhancer', {
        body: {
          content,
          enhancement_type: type,
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
  }
}