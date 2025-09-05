
<<<<<<< HEAD
import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react'
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',
import { toast } from '@/hooks/use-toast',
interface AIEnhancementButtonProps {
<<<<<<< HEAD
  options: AIEnhancementOptions,
  onEnhanced: (enhancedContent: string) => void,
  buttonText?: string,
  className?: string,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
  contentLength?: number
=======
  options: AIEnhancementOptions;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
  variant?: &quot;default&quot; | &quot;destructive&quot; | &quot;outline&quot; | &quot;secondary&quot; | &quot;ghost&quot; | &quot;link&quot;;
  size?: &quot;default&quot; | &quot;sm&quot; | &quot;lg&quot; | &quot;icon&quot;;
  contentLength?: number;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),
  const [showActions, setShowActions] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),
=======

interface AIEnhancementButtonProps {_options: AIEnhancementOptions;
  onEnhanced: (_enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  contentLength?: number;}

export function AIEnhancementButton(_{_options, _onEnhanced, _buttonText = "Enhance with AI", _className, _variant = "ghost", _size = "sm", _contentLength = 10}: AIEnhancementButtonProps) {_const { enhanceContent, _isEnhancing} = useAIContentEnhancer();
  const [showActions, setShowActions] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _handleEnhance = async () => {_if ((!options.content || options.content.trim().length < contentLength) && 
        (!options.context || options.context.trim().length < contentLength)) {
      toast({
<<<<<<< HEAD
        title: &quot;Not enough content&quot;,
        description: `Please enter at least ${contentLength} characters before enhancing.`,
<<<<<<< HEAD
=======
        title: "Not enough content", _description: `Please enter at least ${contentLength} characters before enhancing.`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        variant: "destructive"
      }),
      return
=======
        variant: &quot;destructive&quot;
      });
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
<<<<<<< HEAD
    const enhancedContent = await enhanceContent(options),
    
    if (enhancedContent) {
      setGeneratedContent(enhancedContent),
      setShowActions(true)
    }
  },
  
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent),
      setShowActions(false),
      setGeneratedContent(null),
      toast({
<<<<<<< HEAD
        title: "Content applied",
        description: "AI-enhanced content has been applied."})
=======
        title: &quot;Content applied&quot;,
        description: &quot;AI-enhanced content has been applied.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    const _enhancedContent = await enhanceContent(options);
    
    if (enhancedContent) {_setGeneratedContent(enhancedContent);
      setShowActions(true);}
  };
  
  const _handleAccept = () => {_if (generatedContent) {
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
      toast({
        title: "Content applied", _description: "AI-enhanced content has been applied."});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
<<<<<<< HEAD
  const handleRegenerate = async () => {
    await handleEnhance()
  },
  
  const handleCancel = () => {
    setShowActions(false),
    setGeneratedContent(null)
  },
  
  if (showActions) {
    return (
      <div className=&quot;flex gap-2 items-center&quot;>
=======
  const _handleRegenerate = async () => {_await handleEnhance();};
  
  const _handleCancel = () => {_setShowActions(false);
    setGeneratedContent(null);};
  
  if (showActions) {_return (
      <div className="flex gap-2 items-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
          type=&quot;button&quot;
          variant=&quot;ghost&quot;
          size=&quot;sm&quot;
          onClick={handleRegenerate}
          className=&quot;text-blue-500 hover:text-blue-700 hover:bg-blue-100/20&quot;
          disabled={isEnhancing}
        >
          {isEnhancing ? (
            <Loader2 className=&quot;h-4 w-4 mr-1 animate-spin&quot; />
=======
          type="button"
          variant="ghost"
          size="sm"
          onClick={_handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled={_isEnhancing}
        >
          {_isEnhancing ? (
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ) : (
            <RefreshCw className=&quot;h-4 w-4 mr-1&quot; />
          )}
          Regenerate
        </Button>
        <Button
<<<<<<< HEAD
          type=&quot;button&quot;
          variant=&quot;ghost&quot;
          size=&quot;sm&quot;
          onClick={handleCancel}
<<<<<<< HEAD
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20"
=======
          className=&quot;text-gray-500 hover:text-gray-700 hover:bg-gray-100/20&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          type="button"
          variant="ghost"
          size="sm"
          onClick={_handleCancel}
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100/20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <X className=&quot;h-4 w-4 mr-1&quot; />
          Cancel
        </Button>
      </div>
    )
  }
  
  return (
    <Button
<<<<<<< HEAD
      type=&quot;button&quot;
      variant={variant}
      size={size}
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >
      {isEnhancing ? (
        <Loader2 className=&quot;h-4 w-4 animate-spin&quot; />
=======
      type="button"
      variant={_variant}
      size={_size}
      className={_`gap-1 ${className}`}
      onClick={_handleEnhance}
      disabled={_isEnhancing}
    >
      {_isEnhancing ? (
        <Loader2 className="h-4 w-4 animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ) : (
        <Sparkles className=&quot;h-4 w-4&quot; />
      )}
<<<<<<< HEAD
      <span className=&quot;text-xs&quot;>{buttonText}</span>
=======
      <span className="text-xs">{_buttonText}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </Button>
  )
}
