<<<<<<< HEAD

<<<<<<< HEAD
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
interface AIEnhancementButtonProps {

  currentContent: string
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general'
  context?: string;
  onEnhanced: (enhancedContent: string) => void

=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {Sparkles, Loader2} from 'lucide-react';
<<<<<<< HEAD
import {useResumeEnhancer} from '@/hooks/useResumeEnhancer';
interface AIEnhancementButtonProps {;
  currentContent: string,;
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general',;
  context?: string;
  onEnhanced: (enhancedContent: string) => void,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  buttonText?: string;
  className?: string;
}
<<<<<<< HEAD
export function AIEnhancementButton({
=======

export function AIEnhancementButton(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  currentContent;
  enhancementType;
  context;
  onEnhanced;

  buttonText = "Enhance with AI";
  className;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
  const handleEnhance = async () => {
    if (!currentContent |currentContent.trim().length < 10) {
=======

  const handleEnhance = async () => {;
    if (!currentContent || currentContent && currentContent.trim().length < 10) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setError('Please enter at least some basic content before enhancing');
      return;
    }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setError(null);
    const enhancedContent = await enhanceContent(;
      currentContent;
      enhancementType;
      context;
    );
<<<<<<< HEAD
    if (enhancedContent) {
      onEnhanced(enhancedContent)
    }
  }
=======

    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    }
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}>;
      {isEnhancing ? (;
        <Loader2 className="h-3 w-3 animate-spin" />;
      ) : (;
        <Sparkles className="h-3 w-3" />;
      )}
<<<<<<< HEAD
      <span className="text-xs">{buttonText}</span>
    </Button>
  )
}
=======
      <span className="text-xs">{buttonText}</span>;
    </Button>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
interface AIEnhancementButtonProps {
  current_content: string,
  enhancement_type: 'summary' | 'work - description' | 'skill - categorization' | 'general',
  context?: string;
  on_enhanced: (enhanced_content: string) => void,
  button_text?: string;
  class_name?: string;
}
export /**
 * AIEnhancementButton - Function description
 */
function AIEnhancementButton() {
  const { enhance_content, is_enhancing } = useResumeEnhancer ();
  const [error, set_error] = useState < string | null>(null);
;
  const handle_enhance = async () => {
    // Check condition
if (.length < 10) {) {
  $2
}
      set_error ('Please enter at least some basic content before enhancing');
      return;
    }
    set_error (null);
    const enhanced_content = await enhance_content (
      current_content;
      enhancement_type;
      context);
;
    // Check condition
if ( {) {
  $2
}
      on_enhanced (enhanced_content);
    }
  }
;
  return (
    <Button;
      type="button";
      variant="ghost";
      size="sm";
      className={`h - 6 gap - 1 text - primary hover:text - primary ${class_name}`}
      on_click={handle_enhance}
      disabled={is_enhancing}
    >;
      {is_enhancing ? (
        <Loader2 className="h - 3 w - 3 animate - spin" />) : (
        <Sparkles className="h - 3 w - 3" />)}
      <span className="text - xs">{button_text}</span>;
    </Button>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
