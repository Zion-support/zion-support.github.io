<<<<<<< HEAD

import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',;

;
interface AIEnhancementButtonProps {;
  currentContent: string;,;
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general';,;
  context?:string,;
  onEnhanced: (enhancedContent:string) => void;,;
  buttonText?:string,;
  className?:string;
}

=======
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2 } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',;
;
interface AIEnhancementButtonProps {;
  currentContent:string,;
  enhancementType:'summary' | 'work-description' | 'skill-categorization' | 'general',;
  context?:string,;
  onEnhanced:(enhancedContent:string) => void,;
  buttonText?:string,;
  className?:string;
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function AIEnhancementButton({;
  currentContent,;
  enhancementType,;
  context,;
  onEnhanced,;
<<<<<<< HEAD

  buttonText = "Enhance with AI",;"
  className;)
} AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),;
  const [error, setError] = useState<string | null>(null),;
</string>
    if (!currentContent || currentContent.trim().length < 10) {;"

=======
  buttonText = "Enhance with AI",;
  className;
} AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const handleEnhance = async () => {;
    if (!currentContent || currentContent.trim().length < 10) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setError('Please enter at least some basic content before enhancing'),;
      return,;
    }
    ;
    setError(null),;
    const enhancedContent = await enhanceContent(;
      currentContent,;
      enhancementType,;
      context;
    ),;
    ;
    if (enhancedContent) {;
      onEnhanced(enhancedContent),;
    }
  },;
  ;
  return (;
    <Button;
<<<<<<< HEAD

      type="button";""
      variant="ghost";""
      size="sm";"
      className={`h-6 gap-1 text-primary hover: text-primary ${className;}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >;

        <Sparkles className="h-3 w-3" />;
      )}
      <span className="text-xs">{buttonText}</span>;


=======
      type="button";
      variant="ghost";
      size="sm";
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >;
      {isEnhancing ? (;
        <Loader2 className="h-3 w-3 animate-spin" />;
      ) :(;
        <Sparkles className="h-3 w-3" />;
      )}
      <span className="text-xs">{buttonText}</span>;
    </Button>;
  ),;}
 currentContent;
enhancementType;
context);
) : (<Sparkles className="h-3 w-3" />) ;
}</Button>) ;"}"
>>>>>>> origin/cursor/delete-old-data-records-6bba
