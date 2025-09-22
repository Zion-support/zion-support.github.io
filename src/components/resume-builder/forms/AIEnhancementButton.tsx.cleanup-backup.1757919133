
<<<<<<< HEAD
import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Sparkles, Loader2 } from 'lucide-react'
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',

interface AIEnhancementButtonProps {
  currentContent: string,
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general',
  context?: string,
  onEnhanced: (enhancedContent: string) => void,
  buttonText?: string,
  className?: string
=======
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react'
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';

interface AIEnhancementButtonProps {
  currentContent: string;
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general';
  context?: string;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
>>>>>>> origin/auto/autonomy-17186719616
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
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),
  const [error, setError] = useState<string | null>(null),
  
  const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing'),
      return,
    }
    
    setError(null),
=======
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);
  
  const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing');
      return;
    }
    
    setError(null);
>>>>>>> origin/auto/autonomy-17186719616
    const enhancedContent = await enhanceContent(
      currentContent,
      enhancementType,
      context
<<<<<<< HEAD
    ),
    
    if (enhancedContent) {
      onEnhanced(enhancedContent),
    }
  },
=======
    );
    
    if (enhancedContent) {
      onEnhanced(enhancedContent);
    }
  };
>>>>>>> origin/auto/autonomy-17186719616
  
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
<<<<<<< HEAD
      onClick = {handleEnhance,}
      disabled = {isEnhancing,}
=======
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
