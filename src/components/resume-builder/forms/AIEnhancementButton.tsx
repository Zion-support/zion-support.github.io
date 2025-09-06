>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';

<<<<<<< HEAD
interface AIEnhancementButtonProps {
  currentContent: string;
  enhancementType:
    | 'summary'
    | 'work-description'
    | 'skill-categorization'
    | 'general';
  context?: string;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
=======
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
interface AIEnhancementButtonProps {
  currentContent: string,
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general',
  context?: string,
  onEnhanced: (enhancedContent: string,) => void,
  buttonText?: string,
  className?: string
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

export function AIEnhancementButton({
  currentContent,
  enhancementType,
  context,
  onEnhanced,
  buttonText = 'Enhance with AI',
  className,
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);

  const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing');
      return;
    }

    setError(null);
    const enhancedContent = await enhanceContent(
      currentContent,
      enhancementType,
      context
    );

    if (enhancedContent) {
      onEnhanced(enhancedContent);
    }
  };

  
<<<<<<< HEAD
=======
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick = {handleEnhance,}
      disabled = {isEnhancing,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    >
      {isEnhancing ? (
        <Loader2 className='h-3 w-3 animate-spin' />
      ) : (
        <Sparkles className='h-3 w-3' />
      )}
      <span className='text-xs'>{buttonText}</span>
    </Button>
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
