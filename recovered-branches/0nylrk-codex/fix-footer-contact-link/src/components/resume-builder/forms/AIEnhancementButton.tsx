
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2 } from 'lucide-react',;
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',;
interface AIEnhancementButtonProps {;
  currentContent: string,;
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general',;
  context?: string,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string,;
  className?: string;
}
<<<<<<< HEAD

export function AIEnhancementButton({
  currentContent,
  enhancementType,
  context,
  onEnhanced,
  buttonText = &quot;Enhance with AI&quot;,
  className
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),
  const [error, setError] = useState<string | null>(null),
  
  const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing'),
      return
=======
;
export function AIEnhancementButton({;
  currentContent,;
  enhancementType,;
  context,;
  onEnhanced,;
  buttonText = "Enhance with AI",;
  className;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),;
  const [error, setError] = useState<string | null>(null),;
  const handleEnhance = async () => {;
    if (!currentContent || currentContent.trim().length < 10) {;
      setError('Please enter at least some basic content before enhancing'),;
      return;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
;
    setError(null),;
    const enhancedContent = await enhanceContent(;
      currentContent,;
      enhancementType,;
      context;
    );
    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    }
<<<<<<< HEAD
  },
  
  return (
    <Button
      type=&quot;button&quot;
      variant=&quot;ghost&quot;
      size=&quot;sm&quot;
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >
      {isEnhancing ? (
        <Loader2 className=&quot;h-3 w-3 animate-spin&quot; />
      ) : (
        <Sparkles className=&quot;h-3 w-3&quot; />
      )}
      <span className=&quot;text-xs&quot;>{buttonText}</span>
    </Button>
  )
=======
  };
  return (;
    <Button;
      type="button";
      variant="ghost";
      size="sm";
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >;
      {isEnhancing ? (;
        <Loader2 className="h-3 w-3 animate-spin" />;
      ) : (;
        <Sparkles className="h-3 w-3" />;
      )}
      <span className="text-xs">{buttonText}</span>;
    </Button>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;