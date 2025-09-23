
import { useState } from 'react';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
SparklesLoader2
=======
import { Sparkles, Loader2 } from 'lucide-react';
>>>>>>> origin/auto/autonomy-17186719616
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';

interface AIEnhancementButtonProps {
  currentContent: string;
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general';
  context?: string;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
}

export function AIEnhancementButton({
  currentContent,
  enhancementType,
  context,
  onEnhanced,
  buttonText = "Enhance with AI",
  className
}: AIEnhancementButtonProps) {
<<<<<<< HEAD
  const { enhanceContentisEnhancing } = useResumeEnhancer();
  const [errorsetError] = useState<string | null>(null);
=======
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);
>>>>>>> origin/auto/autonomy-17186719616
  
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
  
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >
      {isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
        <Sparkles className="h-3 w-3" />
      )}
      <span className="text-xs">{buttonText}</span>
    </Button>
  );
}
