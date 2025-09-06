
<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
=======
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks/useResumeEnhancer';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface AIEnhancementButtonProps {

  currentContent: string
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general'
  context?: string;
  onEnhanced: (enhancedContent: string) => void

  buttonText?: string;
  className?: string
}
<<<<<<< HEAD
export function AIEnhancementButton({
=======

export function AIEnhancementButton({;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  currentContent;
  enhancementType;
  context;
  onEnhanced;
<<<<<<< HEAD

  buttonText = "Enhance with AI";
  className
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);
  const handleEnhance = async () => {
    if (!currentContent |currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing');
      return
    }
    setError(null);
    const enhancedContent = await enhanceContent(
      currentContent;
      enhancementType;
      context
    );
    if (enhancedContent) {
      onEnhanced(enhancedContent)
    }
  }

=======
  buttonText = "Enhance with AI";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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

export function AIEnhancementButton({
  currentContent,
  enhancementType,
  context,
  onEnhanced,
  buttonText = "Enhance with AI",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  className
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),
  const [error, setError] = useState<string | null>(null),
  
  const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing'),
      return
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
    setError(null);
    const enhancedContent = await enhanceContent(
      currentContent;
      enhancementType;
      context
    );
    
    if (enhancedContent) {
      onEnhanced(enhancedContent)
    }
  };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  },
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
  )
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
