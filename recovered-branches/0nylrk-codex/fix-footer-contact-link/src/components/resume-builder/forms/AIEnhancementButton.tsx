
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
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2} from 'lucide-react';
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
