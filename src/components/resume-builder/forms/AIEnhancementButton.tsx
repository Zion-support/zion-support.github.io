
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
}

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
    }
    
    setError(null),
    const enhancedContent = await enhanceContent(
=======

interface AIEnhancementButtonProps {_currentContent: string;
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general';
  context?: string;
  onEnhanced: (_enhancedContent: string) => void;
  buttonText?: string;
  className?: string;}

export function AIEnhancementButton(_{_currentContent, _enhancementType, _context, _onEnhanced, _buttonText = "Enhance with AI", _className}: AIEnhancementButtonProps) {_const { enhanceContent, _isEnhancing} = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);
  
  const _handleEnhance = async () => {_if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing');
      return;}
    
    setError(null);
    const _enhancedContent = await enhanceContent(
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      currentContent,
      enhancementType,
      context
    ),
    
<<<<<<< HEAD
    if (enhancedContent) {
      onEnhanced(enhancedContent)
    }
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
=======
    if (enhancedContent) {_onEnhanced(enhancedContent);}
  };
  
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={_`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={_handleEnhance}
      disabled={_isEnhancing}
    >
      {_isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ) : (
        <Sparkles className=&quot;h-3 w-3&quot; />
      )}
<<<<<<< HEAD
      <span className=&quot;text-xs&quot;>{buttonText}</span>
=======
      <span className="text-xs">{_buttonText}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </Button>
  )
}
