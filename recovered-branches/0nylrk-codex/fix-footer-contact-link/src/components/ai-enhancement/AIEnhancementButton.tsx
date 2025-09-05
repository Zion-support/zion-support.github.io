
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons';
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';

interface AIEnhancementButtonProps {
  options: AIEnhancementOptions;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
  variant?: &quot;default&quot; | &quot;destructive&quot; | &quot;outline&quot; | &quot;secondary&quot; | &quot;ghost&quot; | &quot;link&quot;;
  size?: &quot;default&quot; | &quot;sm&quot; | &quot;lg&quot; | &quot;icon&quot;;
  contentLength?: number;
}

export function AIEnhancementButton({
  options,
  onEnhanced,
  buttonText = &quot;Enhance with AI&quot;,
  className,
  variant = &quot;ghost&quot;,
  size = &quot;sm&quot;,
  contentLength = 10
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
  const [showActions, setShowActions] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  
  const handleEnhance = async () => {
    if ((!options.content || options.content.trim().length < contentLength) && 
        (!options.context || options.context.trim().length < contentLength)) {
      toast({
        title: &quot;Not enough content&quot;,
        description: `Please enter at least ${contentLength} characters before enhancing.`,
        variant: &quot;destructive&quot;
      });
      return;
    }
    
    const enhancedContent = await enhanceContent(options);
    
    if (enhancedContent) {
      setGeneratedContent(enhancedContent);
      setShowActions(true);
    }
  };
  
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
      toast({
        title: &quot;Content applied&quot;,
        description: &quot;AI-enhanced content has been applied.&quot;});
    }
  };
  
  const handleRegenerate = async () => {
    await handleEnhance();
  };
  
  const handleCancel = () => {
    setShowActions(false);
    setGeneratedContent(null);
  };
  
  if (showActions) {
    return (
      <div className=&quot;flex gap-2 items-center&quot;>
        <Button
          type=&quot;button&quot;
          variant=&quot;ghost&quot;
          size=&quot;sm&quot;
          onClick={handleAccept}
          className=&quot;text-green-500 hover:text-green-700 hover:bg-green-100/20&quot;
        >
          <Check className=&quot;h-4 w-4 mr-1&quot; />
          Apply
        </Button>
        <Button
          type=&quot;button&quot;
          variant=&quot;ghost&quot;
          size=&quot;sm&quot;
          onClick={handleRegenerate}
          className=&quot;text-blue-500 hover:text-blue-700 hover:bg-blue-100/20&quot;
          disabled={isEnhancing}
        >
          {isEnhancing ? (
            <Loader2 className=&quot;h-4 w-4 mr-1 animate-spin&quot; />
          ) : (
            <RefreshCw className=&quot;h-4 w-4 mr-1&quot; />
          )}
          Regenerate
        </Button>
        <Button
          type=&quot;button&quot;
          variant=&quot;ghost&quot;
          size=&quot;sm&quot;
          onClick={handleCancel}
          className=&quot;text-gray-500 hover:text-gray-700 hover:bg-gray-100/20&quot;
        >
          <X className=&quot;h-4 w-4 mr-1&quot; />
          Cancel
        </Button>
      </div>
    );
  }
  
  return (
    <Button
      type=&quot;button&quot;
      variant={variant}
      size={size}
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >
      {isEnhancing ? (
        <Loader2 className=&quot;h-4 w-4 animate-spin&quot; />
      ) : (
        <Sparkles className=&quot;h-4 w-4&quot; />
      )}
      <span className=&quot;text-xs&quot;>{buttonText}</span>
    </Button>
  );
}
