
<<<<<<< HEAD
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X  } from '@/components/icons';
import { useAIContentEnhancer, AIEnhancementOptions  } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';
interface AIEnhancementButtonProps {

  options: AIEnhancementOptions
  onEnhanced: (enhancedContent: string) => void

=======
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2, RefreshCw, Check, X} from '@/components/icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';
import {toast} from '@/hooks/use-toast';
interface AIEnhancementButtonProps {;
  options: AIEnhancementOptions,;
  onEnhanced: (enhancedContent: string) => void,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  buttonText?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  contentLength?: number;
}
<<<<<<< HEAD
export function AIEnhancementButton({
=======

export function AIEnhancementButton(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  options;
  onEnhanced;

  buttonText = "Enhance with AI";
  className;
  variant = "ghost";
  size = "sm";
  contentLength = 10;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
  const [showActions, setShowActions] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
<<<<<<< HEAD
  const handleEnhance = async () => {
    if ((!options.content |options.content.trim().length < contentLength) &&
        (!options.context |options.context.trim().length < contentLength)) {
      toast({
        title: "Not enough content"
        description: `Please enter at least ${contentLength} characters before enhancing.`
        variant: "destructive"
=======

  const handleEnhance = async () => {;
    if ((!options && options.content || options && options.content.trim().length < contentLength) && ;
        (!options && options.context || options && options.context.trim().length < contentLength)) {;
      toast({;
        title: "Not enough content",;
        description: `Please enter at least ${contentLength} characters before enhancing.`,;
        variant: "destructive";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      return;
    }
<<<<<<< HEAD
    const enhancedContent = await enhanceContent(options);
    if (enhancedContent) {
=======

    const enhancedContent = await enhanceContent(options);

    if (enhancedContent) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setGeneratedContent(enhancedContent);
      setShowActions(true);
    }
<<<<<<< HEAD
  }
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
      toast({
        title: "Content applied"
        description: "AI-enhanced content has been applied."})
    }
  }
  const handleRegenerate = async () => {
    await handleEnhance()
  }
  const handleCancel = () => {
    setShowActions(false);
    setGeneratedContent(null)
  }

  if (showActions) {
=======
  };

  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
      toast({;
        title: "Content applied",;
        description: "AI-enhanced content has been applied."});
    }
  };

  const handleRegenerate = async () => {;
    await handleEnhance();
  };

  const handleCancel = () => {;
    setShowActions(false);
    setGeneratedContent(null);
  };

  if (showActions) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div className="flex gap-2 items-center">;
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleAccept}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20">;
          <Check className="h-4 w-4 mr-1" />;
          Apply;
        </Button>;
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled={isEnhancing}>;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) : (;
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
          Regenerate;
        </Button>;
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCancel}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20">;
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
      </div>;
    );
  }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}>;
      {isEnhancing ? (;
        <Loader2 className="h-4 w-4 animate-spin" />;
      ) : (;
        <Sparkles className="h-4 w-4" />;
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
