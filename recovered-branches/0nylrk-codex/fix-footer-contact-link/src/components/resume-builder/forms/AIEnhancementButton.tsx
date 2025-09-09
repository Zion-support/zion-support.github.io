import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';interface AIEnhancementButtonProps {

  currentContent: string
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general'
  context?: string;
  onEnhanced: (enhancedContent: string) => void
  className?: string;
}
export function AIEnhancementButton({

export function AIEnhancementButton({;
  enhancementType;
  context;
  onEnhanced;



    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    }
  };

;
    setError(null),;
      currentContent,;
      enhancementType,;
      context;
    );
    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    }
  },
      <Button
      type="button"
      variant="ghost"

      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={handleEnhance}import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
interface AIEnhancementButtonProps {
  current_content: string,
  enhancement_type: 'summary' | 'work - description' | 'skill - categorization' | 'general',
  context?: string;
  on_enhanced: (enhanced_content: string) => void,
  button_text?: string;
  class_name?: string;
}
export /**;
 * AIEnhancementButton - Function description;
 */
function AIEnhancementButton() {}
  const { enhance_content, is_enhancing } = useResumeEnhancer ();
  const [error, set_error] = useState < string | null>(null);
;
